/* OSIRIS Messenger — same JWT/session as site auth. No second account store. */
(function () {
  var TOKEN_KEY = "osiris_messenger_token";
  var ALLOWED_EXT = /\.(pdf|jpe?g|png|webp|docx?)$/i;
  var MAX_BYTES = 15 * 1024 * 1024;

  var MESSENGER_API_URL =
    window.OSIRIS_API_URL ||
    (window.MESSENGER_API_URL && window.MESSENGER_API_URL !== "OFF"
      ? window.MESSENGER_API_URL
      : "");

  var state = {
    token: null,
    me: null,
    conversations: [],
    activeConv: null,
    messages: [],
    socket: null,
    isLoginMode: true,
    authMode: "login",
    resetToken: null,
    sending: false,
    recorder: null,
    chunks: [],
    voiceBlob: null,
    pendingFile: null,
    searchTimer: null,
  };

  function apiBase() {
    return MESSENGER_API_URL || "";
  }

  function getToken() {
    try { return localStorage.getItem(TOKEN_KEY) || ""; } catch (e) { return ""; }
  }

  function api(path, options) {
    options = options || {};
    options.headers = options.headers || {};
    if (state.token) options.headers.Authorization = "Bearer " + state.token;
    if (options.body && typeof options.body === "object" && !(options.body instanceof FormData)) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(options.body);
    }
    return fetch(apiBase() + path, options).then(function (resp) {
      if (resp.status === 401) {
        clearAuth();
        renderAuth();
        throw new Error("Unauthorized");
      }
      var ct = resp.headers.get("content-type") || "";
      if (ct.indexOf("application/json") === -1) {
        if (!resp.ok) throw new Error(resp.statusText || "Request failed");
        return {};
      }
      return resp.json().then(function (data) {
        if (!resp.ok) {
          var detail = (data && data.detail) || resp.statusText;
          if (Array.isArray(detail)) {
            detail = detail.map(function (e) { return e.msg || JSON.stringify(e); }).join(" ");
          }
          throw new Error(detail);
        }
        return data;
      });
    });
  }

  function setAuth(token, user, opts) {
    opts = opts || {};
    if (typeof window.OSIRIS_prepareIncomingAccount === "function") {
      window.OSIRIS_prepareIncomingAccount(token, opts);
    }
    state.token = token;
    state.me = user;
    try { if (token) localStorage.setItem(TOKEN_KEY, token); } catch (e) {}
    try { localStorage.setItem("loggedIn", "true"); } catch (e) {}
    if (typeof window.OSIRIS_beginAccountProfile === "function") {
      window.OSIRIS_beginAccountProfile();
    }
  }

  function clearAuth() {
    state.token = null;
    state.me = null;
    state.activeConv = null;
    state.messages = [];
    state.conversations = [];
    try { localStorage.removeItem(TOKEN_KEY); } catch (e) {}
    try { localStorage.removeItem("loggedIn"); } catch (e2) {}
    if (state.socket) {
      try { state.socket.close(); } catch (e) {}
      state.socket = null;
    }
    if (state.refreshTimer) {
      clearInterval(state.refreshTimer);
      state.refreshTimer = null;
    }
    if (typeof window.OSIRIS_rejectStoredSession === "function") {
      try { window.OSIRIS_rejectStoredSession(); } catch (e3) {}
    }
  }

  function showAuthError(msg) {
    var el = document.getElementById("messengerAuthError");
    if (el) el.textContent = msg || "";
  }
  function showAuthNotice(msg) {
    var el = document.getElementById("messengerAuthNotice");
    if (!el) return;
    if (msg) { el.textContent = msg; el.style.display = ""; }
    else { el.textContent = ""; el.style.display = "none"; }
  }

  function renderAuth() {
    var panel = document.getElementById("messengerPanel");
    if (panel) panel.classList.add("is-auth");
  }
  function renderShell() {
    var panel = document.getElementById("messengerPanel");
    if (panel) panel.classList.remove("is-auth");
    var meEl = document.getElementById("messengerMe");
    if (meEl && state.me) {
      meEl.textContent = [state.me.name, state.me.surname].filter(Boolean).join(" ") || state.me.email || "";
    }
    setView("list");
  }

  if (typeof window.openMessengerFile !== "function") {
    window.openMessengerFile = function () {
      var el = document.getElementById("messengerFile");
      if (el) el.click();
    };
  }
  if (typeof window.toggleMessenger !== "function") {
    window.toggleMessenger = function () {
      var p = document.getElementById("messengerPanel");
      if (p) p.classList.add("open");
      if (typeof window.hideBackToTop === "function") window.hideBackToTop();
    };
  }
  if (typeof window.closeMessenger !== "function") {
    window.closeMessenger = function () {
      var p = document.getElementById("messengerPanel");
      if (p) {
        p.classList.remove("open");
        p.classList.remove("expanded");
      }
      if (typeof window.showBackToTop === "function") window.showBackToTop();
    };
  }

  function setView(view) {
    var v = document.getElementById("messengerView");
    if (!v) return;
    v.setAttribute("data-view", view);
    if (view === "list") loadConversations();
  }

  function setConnDot(on) {
    var dot = document.getElementById("messengerConn");
    if (!dot) return;
    if (on) dot.classList.remove("offline");
    else dot.classList.add("offline");
  }

  function connectSocket() {
    if (!state.token) return;
    if (state.socket) {
      try { state.socket.close(); } catch (e) {}
      state.socket = null;
    }
    var base = apiBase() || window.location.origin;
    var wsUrl = String(base).replace(/^http/, "ws") + "/api/ws?token=" + encodeURIComponent(state.token);
    var ws;
    try { ws = new WebSocket(wsUrl); } catch (e) { setConnDot(false); return; }
    state.socket = ws;
    ws.onopen = function () { setConnDot(true); };
    ws.onclose = function (ev) {
      setConnDot(false);
      if (ev && ev.code === 4401) return;
      if (state.token) setTimeout(connectSocket, 2500);
    };
    ws.onerror = function () { setConnDot(false); };
    ws.onmessage = function (ev) {
      try {
        var data = JSON.parse(ev.data);
        if (data.event === "message:new" && data.message) {
          loadConversations();
          if (state.activeConv && data.message.conversation_id === state.activeConv.id) {
            loadMessages();
          }
        } else if (data.event === "conversation:new" || data.event === "conversation:updated") {
          loadConversations();
          if (data.event === "conversation:updated" && state.activeConv &&
              data.conversation_id === state.activeConv.id) {
            state.activeConv.other_user = null;
            var nameEl = document.getElementById("messengerActiveName");
            if (nameEl) nameEl.textContent = "";
            loadMessages();
          }
        }
      } catch (e) {}
    };
  }

  function loadConversations() {
    return api("/api/messenger/conversations").then(function (rows) {
      state.conversations = rows || [];
      renderList();
    }).catch(function () {
      state.conversations = [];
      renderList();
    });
  }

  function displayName(u) {
    if (!u) return "";
    return [u.name, u.surname].filter(Boolean).join(" ") || u.email || "";
  }

  function renderList() {
    var listEl = document.getElementById("messengerList");
    if (!listEl) return;
    listEl.innerHTML = "";
    var hdr = document.createElement("div");
    hdr.className = "messenger-list-section";
    hdr.textContent = "Conversations";
    listEl.appendChild(hdr);
    var convs = state.conversations || [];
    if (!convs.length) {
      var empty = document.createElement("div");
      empty.className = "messenger-empty";
      empty.textContent = "Search a registered OSIRIS email to start a conversation.";
      listEl.appendChild(empty);
      return;
    }
    convs.forEach(function (c) {
      listEl.appendChild(renderListItem({
        name: displayName(c.other_user),
        last: c.last_message_preview || "Tap to open",
        unread: c.unread_count || 0,
        onClick: function () { openConversation(c); },
      }));
    });
  }

  function renderListItem(opts) {
    var row = document.createElement("div");
    row.className = "messenger-list-item";
    row.addEventListener("click", opts.onClick);
    var avatar = document.createElement("div");
    avatar.className = "messenger-avatar";
    avatar.textContent = (opts.name || "?").slice(0, 1).toUpperCase();
    row.appendChild(avatar);
    var meta = document.createElement("div");
    meta.className = "meta";
    var nameEl = document.createElement("div");
    nameEl.className = "name";
    nameEl.textContent = opts.name;
    var lastEl = document.createElement("div");
    lastEl.className = "last";
    lastEl.textContent = opts.last;
    meta.appendChild(nameEl);
    meta.appendChild(lastEl);
    row.appendChild(meta);
    if (opts.unread > 0) {
      var b = document.createElement("span");
      b.className = "messenger-badge";
      b.textContent = String(opts.unread);
      row.appendChild(b);
    }
    return row;
  }

  function openConversation(conv) {
    state.activeConv = {
      id: conv.id,
      other_user: conv.other_user,
      retention: conv.retention || "manual",
    };
    var nameEl = document.getElementById("messengerActiveName");
    if (nameEl) nameEl.textContent = displayName(conv.other_user);
    markRetention(state.activeConv.retention);
    closeMessengerMenu();
    setView("chat");
    loadMessages();
  }

  function closeMessengerMenu() {
    var menu = document.getElementById("messengerMenu");
    var confirm = document.getElementById("messengerMenuConfirm");
    if (menu) menu.hidden = true;
    if (confirm) confirm.hidden = true;
    state.menuAction = null;
  }

  function markRetention(value) {
    var menu = document.getElementById("messengerMenu");
    if (!menu) return;
    var buttons = menu.querySelectorAll("[data-messenger-retention]");
    Array.prototype.forEach.call(buttons, function (btn) {
      if (btn.getAttribute("data-messenger-retention") === (value || "manual")) btn.classList.add("is-selected");
      else btn.classList.remove("is-selected");
    });
  }

  function askMessengerConfirm(text, action) {
    var box = document.getElementById("messengerMenuConfirm");
    var label = document.getElementById("messengerMenuConfirmText");
    if (!box || !label) return;
    label.textContent = text;
    box.hidden = false;
    state.menuAction = action;
  }

  function loadMessages() {
    if (!state.activeConv) return Promise.resolve();
    return api("/api/messenger/conversations/" + state.activeConv.id + "/messages").then(function (msgs) {
      state.messages = msgs || [];
      renderMessages();
    });
  }

  function formatTime(iso) {
    if (!iso) return "";
    try {
      var d = new Date(iso);
      return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
    } catch (e) { return ""; }
  }

  function fileUrl(attId) {
    if (!attId) return "";
    return apiBase() + "/api/messenger/files/" + encodeURIComponent(attId) +
      "?auth=" + encodeURIComponent(state.token || "");
  }

  function renderMessages() {
    var chat = document.getElementById("messengerChat");
    if (!chat) return;
    var keep = chat.scrollHeight - chat.scrollTop;
    chat.innerHTML = "";
    if (!state.messages.length) {
      var empty = document.createElement("div");
      empty.className = "messenger-empty";
      empty.textContent = "Send the first message.";
      chat.appendChild(empty);
      return;
    }
    state.messages.forEach(function (m) { chat.appendChild(renderBubble(m)); });
    chat.scrollTop = chat.scrollHeight;
    void keep;
  }

  function renderBubble(m) {
    var wrap = document.createElement("div");
    var isMine = state.me && m.sender_id === state.me.id;
    wrap.className = "messenger-bubble-wrap " + (isMine ? "sent" : "received");
    var bub = document.createElement("div");
    bub.className = "messenger-bubble";
    var mime = m.attachment_type || "";
    if (m.attachment_id && mime.indexOf("image/") === 0) {
      var img = document.createElement("img");
      img.src = fileUrl(m.attachment_id);
      img.alt = m.attachment_name || "image";
      bub.appendChild(img);
    } else if (m.attachment_id && (mime.indexOf("audio/") === 0 || m.message_type === "voice")) {
      var audio = document.createElement("audio");
      audio.controls = true;
      audio.src = fileUrl(m.attachment_id);
      bub.appendChild(audio);
    } else if (m.attachment_id) {
      var a = document.createElement("a");
      a.className = "messenger-file-link";
      a.href = fileUrl(m.attachment_id);
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = m.attachment_name || "Attachment";
      bub.appendChild(a);
    }
    if (m.message_text) {
      var p = document.createElement("div");
      p.textContent = m.message_text;
      bub.appendChild(p);
    }
    var t = document.createElement("span");
    t.className = "time";
    t.textContent = formatTime(m.created_at);
    bub.appendChild(t);
    wrap.appendChild(bub);
    return wrap;
  }

  function validateClientFile(file) {
    if (!file) return "No file selected.";
    if (file.size > MAX_BYTES) return "File is too large (max 15 MB).";
    if (!ALLOWED_EXT.test(file.name || "")) return "Allowed: PDF, JPG, PNG, WebP, DOC, DOCX.";
    return "";
  }

  function sendCurrent() {
    if (!state.activeConv || state.sending) return;
    var input = document.getElementById("messengerText");
    var fileEl = document.getElementById("messengerFile");
    var preview = document.getElementById("messengerPreview");
    var text = (input && input.value || "").trim();
    var file = state.pendingFile || (fileEl && fileEl.files && fileEl.files[0]);
    var voice = state.voiceBlob;
    if (!text && !file && !voice) return;

    if (file) {
      var err = validateClientFile(file);
      if (err) { alert(err); return; }
    }

    var typedKeep = input ? input.value : "";
    state.sending = true;
    var work;
    if (file || voice) {
      var fd = new FormData();
      fd.append("file", file || voice, file ? file.name : "voice.webm");
      work = api("/api/messenger/conversations/" + state.activeConv.id + "/upload", {
        method: "POST",
        body: fd,
      }).then(function (att) {
        return api("/api/messenger/conversations/" + state.activeConv.id + "/messages", {
          method: "POST",
          body: {
            type: voice && !file ? "voice" : "file",
            text: text || null,
            attachment_id: att.id,
          },
        });
      });
    } else {
      work = api("/api/messenger/conversations/" + state.activeConv.id + "/messages", {
        method: "POST",
        body: { type: "text", text: text },
      });
    }

    work.then(function () {
      if (input) input.value = "";
      if (fileEl) fileEl.value = "";
      state.pendingFile = null;
      state.voiceBlob = null;
      if (preview) preview.innerHTML = "";
      var vp = document.getElementById("messengerVoicePreview");
      if (vp) { vp.hidden = true; vp.innerHTML = ""; }
      loadMessages();
      loadConversations();
    }).catch(function (err) {
      if (input) input.value = typedKeep;
      alert("Failed to send: " + (err && err.message ? err.message : err));
    }).then(function () { state.sending = false; });
  }

  function bindSearch() {
    var input = document.getElementById("messengerUserSearch");
    var box = document.getElementById("messengerSearchResults");
    if (!input || !box) return;
    function clearHits() { box.innerHTML = ""; }
    input.addEventListener("input", function () {
      clearTimeout(state.searchTimer);
      var q = (input.value || "").trim();
      if (!q) { clearHits(); return; }
      state.searchTimer = setTimeout(function () {
        api("/api/messenger/users/search?email=" + encodeURIComponent(q))
          .then(function (res) {
            clearHits();
            if (!res || !res.found || !res.user) {
              var miss = document.createElement("div");
              miss.className = "messenger-search-hit";
              miss.textContent = "No registered user with that email.";
              box.appendChild(miss);
              return;
            }
            var hit = document.createElement("div");
            hit.className = "messenger-search-hit";
            hit.textContent = displayName(res.user) + " · " + res.user.email;
            hit.addEventListener("click", function () {
              api("/api/messenger/conversations", {
                method: "POST",
                body: { other_user_id: res.user.id },
              }).then(function (conv) {
                input.value = "";
                clearHits();
                openConversation(conv);
                loadConversations();
              }).catch(function (err) { alert(err.message); });
            });
            box.appendChild(hit);
          })
          .catch(function () {
            clearHits();
          });
      }, 280);
    });
  }

  function bindExpand() {
    var exp = document.getElementById("messengerExpand");
    var col = document.getElementById("messengerCollapse");
    var panel = document.getElementById("messengerPanel");
    if (exp) exp.addEventListener("click", function () {
      if (panel) panel.classList.add("expanded");
    });
    if (col) col.addEventListener("click", function () {
      if (panel) panel.classList.remove("expanded");
    });
  }

  function bindVoice() {
    var btn = document.getElementById("messengerVoiceBtn");
    var wrap = document.getElementById("messengerVoicePreview");
    if (!btn) return;
    if (!window.MediaRecorder) {
      btn.style.display = "none";
      return;
    }
    btn.addEventListener("click", function () {
      if (state.recorder && state.recorder.state === "recording") {
        state.recorder.stop();
        return;
      }
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Microphone is not available in this browser.");
        return;
      }
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        state.chunks = [];
        var rec = new MediaRecorder(stream);
        state.recorder = rec;
        rec.ondataavailable = function (e) {
          if (e.data && e.data.size) state.chunks.push(e.data);
        };
        rec.onstop = function () {
          stream.getTracks().forEach(function (t) { t.stop(); });
          btn.classList.remove("recording");
          btn.textContent = "VOICE";
          state.voiceBlob = new Blob(state.chunks, { type: rec.mimeType || "audio/webm" });
          if (wrap) {
            wrap.hidden = false;
            wrap.innerHTML = "";
            var audio = document.createElement("audio");
            audio.controls = true;
            audio.src = URL.createObjectURL(state.voiceBlob);
            wrap.appendChild(audio);
          }
        };
        rec.start();
        btn.classList.add("recording");
        btn.textContent = "STOP";
      }).catch(function () {
        alert("Microphone permission was denied.");
      });
    });
  }

  function setAuthMode(mode) {
    state.authMode = mode;
    showAuthError("");
    showAuthNotice("");
    var emailInput = document.getElementById("messengerEmail");
    var pwdInput = document.getElementById("messengerPassword");
    var nameInput = document.getElementById("messengerName");
    var forgotEmailInput = document.getElementById("messengerForgotEmail");
    var resetPwdInput = document.getElementById("messengerResetPassword");
    var resetPwdConfirm = document.getElementById("messengerResetPasswordConfirm");
    var submitBtn = document.getElementById("messengerAuthSubmit");
    var toggleBtn = document.getElementById("messengerAuthToggle");
    var forgotBtn = document.getElementById("messengerAuthForgot");
    var backBtn = document.getElementById("messengerAuthBackToLogin");
    function show(el, visible) { if (el) el.style.display = visible ? "" : "none"; }
    show(emailInput, false); show(pwdInput, false); show(nameInput, false);
    show(forgotEmailInput, false); show(resetPwdInput, false); show(resetPwdConfirm, false);
    show(toggleBtn, false); show(forgotBtn, false); show(backBtn, false);
    if (mode === "login") {
      show(emailInput, true); show(pwdInput, true); show(toggleBtn, true); show(forgotBtn, true);
      if (submitBtn) submitBtn.textContent = "Sign in";
      if (toggleBtn) toggleBtn.textContent = "Need an account? Create one";
    } else if (mode === "register") {
      show(emailInput, true); show(pwdInput, true); show(nameInput, true); show(toggleBtn, true);
      if (submitBtn) submitBtn.textContent = "Create account";
      if (toggleBtn) toggleBtn.textContent = "Already have an account? Sign in";
    } else if (mode === "forgot") {
      show(forgotEmailInput, true); show(backBtn, true);
      if (submitBtn) submitBtn.textContent = "Send reset link";
    } else if (mode === "reset") {
      show(resetPwdInput, true); show(resetPwdConfirm, true); show(backBtn, true);
      if (submitBtn) submitBtn.textContent = "Set new password";
    }
  }

  function bindAuthUI() {
    var toggle = document.getElementById("messengerAuthToggle");
    var submit = document.getElementById("messengerAuthSubmit");
    var forgotBtn = document.getElementById("messengerAuthForgot");
    var backBtn = document.getElementById("messengerAuthBackToLogin");
    var nameInput = document.getElementById("messengerName");
    var pwdInput = document.getElementById("messengerPassword");
    var emailInput = document.getElementById("messengerEmail");
    var forgotEmailInput = document.getElementById("messengerForgotEmail");
    var resetPwdInput = document.getElementById("messengerResetPassword");
    var resetPwdConfirm = document.getElementById("messengerResetPasswordConfirm");
    if (toggle) toggle.addEventListener("click", function () {
      setAuthMode(state.authMode === "login" ? "register" : "login");
    });
    if (forgotBtn) forgotBtn.addEventListener("click", function () {
      if (forgotEmailInput && emailInput) forgotEmailInput.value = emailInput.value || "";
      setAuthMode("forgot");
    });
    if (backBtn) backBtn.addEventListener("click", function () {
      state.resetToken = null;
      setAuthMode("login");
    });
    function handleSubmit() {
      var mode = state.authMode;
      showAuthError("");
      showAuthNotice("");
      if (mode === "login") {
        var email = ((emailInput && emailInput.value) || "").trim();
        var password = (pwdInput && pwdInput.value) || "";
        if (!email || !password) { showAuthError("Email and password are required."); return; }
        api("/api/auth/login", { method: "POST", body: { email: email, password: password } })
          .then(function (data) {
            setAuth(data.token, data.user, { carryAnonymous: false });
            renderShell();
            connectSocket();
            return loadConversations();
          }).catch(function (err) { showAuthError(err.message); });
        return;
      }
      if (mode === "register") {
        var rEmail = ((emailInput && emailInput.value) || "").trim();
        var rPwd = (pwdInput && pwdInput.value) || "";
        var rName = (nameInput && nameInput.value || "").trim();
        if (!rEmail || !rPwd) { showAuthError("Email and password are required."); return; }
        if (!rName) { showAuthError("Please enter your name."); return; }
        api("/api/auth/register", { method: "POST", body: { email: rEmail, password: rPwd, name: rName } })
          .then(function (data) {
            setAuth(data.token, data.user, { carryAnonymous: true });
            renderShell();
            connectSocket();
            return loadConversations();
          }).catch(function (err) { showAuthError(err.message); });
        return;
      }
      if (mode === "forgot") {
        var fEmail = ((forgotEmailInput && forgotEmailInput.value) || "").trim();
        if (!fEmail) { showAuthError("Please enter your account email."); return; }
        api("/api/auth/forgot-password", { method: "POST", body: { email: fEmail } })
          .then(function () {
            showAuthNotice("If that email exists, a reset link has been sent. Check your inbox.");
          }).catch(function (err) { showAuthError(err.message); });
        return;
      }
      if (mode === "reset") {
        var np = (resetPwdInput && resetPwdInput.value) || "";
        var npc = (resetPwdConfirm && resetPwdConfirm.value) || "";
        if (!np || np.length < 6) { showAuthError("New password must be at least 6 characters."); return; }
        if (np !== npc) { showAuthError("Passwords do not match."); return; }
        if (!state.resetToken) { showAuthError("Reset link is missing or expired."); return; }
        api("/api/auth/reset-password", { method: "POST", body: { token: state.resetToken, password: np } })
          .then(function () {
            state.resetToken = null;
            setAuthMode("login");
            showAuthNotice("Password updated. Please sign in with your new password.");
          }).catch(function (err) { showAuthError(err.message); });
      }
    }
    if (submit) submit.addEventListener("click", handleSubmit);
    [pwdInput, resetPwdConfirm, forgotEmailInput].forEach(function (el) {
      if (!el) return;
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter") handleSubmit();
      });
    });
    setAuthMode(state.authMode);
  }

  function bindLogout() {
    var btn = document.getElementById("messengerLogout");
    if (!btn) return;
    btn.addEventListener("click", function () {
      if (typeof window.logoutUser === "function") {
        try { window.logoutUser(); } catch (e) {}
      }
      clearAuth();
      renderAuth();
    });
  }

  function bindMenu() {
    var btn = document.getElementById("messengerMenuBtn");
    var menu = document.getElementById("messengerMenu");
    var yes = document.getElementById("messengerMenuYes");
    var no = document.getElementById("messengerMenuNo");
    if (btn && menu) {
      btn.addEventListener("click", function (event) {
        event.stopPropagation();
        if (!state.activeConv) return;
        markRetention(state.activeConv.retention || "manual");
        var confirm = document.getElementById("messengerMenuConfirm");
        if (confirm) confirm.hidden = true;
        menu.hidden = !menu.hidden;
      });
    }
    if (menu) {
      menu.addEventListener("click", function (event) {
        var target = event.target;
        if (!target || !target.getAttribute) return;
        var action = target.getAttribute("data-messenger-action");
        var retention = target.getAttribute("data-messenger-retention");
        if (action === "remove") {
          askMessengerConfirm(
            "Remove this contact from your Messenger list? Their account and records stay, and you can add them again by search.",
            function () { return removeActiveContact(); }
          );
        } else if (action === "clear") {
          askMessengerConfirm(
            "Delete this conversation from your history? The other person keeps their messages and files.",
            function () { return clearActiveHistory(); }
          );
        } else if (retention) {
          var label = target.textContent || "this retention";
          askMessengerConfirm(
            "Use " + label + " for your copy only? The other person keeps their own messages and files.",
            function () { return setActiveRetention(retention); }
          );
        }
      });
    }
    if (yes) yes.addEventListener("click", function () {
      var action = state.menuAction;
      state.menuAction = null;
      var confirm = document.getElementById("messengerMenuConfirm");
      if (confirm) confirm.hidden = true;
      if (action) action();
    });
    if (no) no.addEventListener("click", function () {
      state.menuAction = null;
      var confirm = document.getElementById("messengerMenuConfirm");
      if (confirm) confirm.hidden = true;
    });
    document.addEventListener("click", function (event) {
      if (!menu || menu.hidden) return;
      if (menu.contains(event.target) || event.target === btn) return;
      closeMessengerMenu();
    });
    if (!state.refreshTimer) {
      state.refreshTimer = setInterval(function () {
        if (!state.token || !state.activeConv) return;
        loadConversations();
        loadMessages();
      }, 60000);
    }
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState !== "visible" || !state.token) return;
      loadConversations();
      if (state.activeConv) loadMessages();
    });
  }

  function removeActiveContact() {
    if (!state.activeConv) return;
    var id = state.activeConv.id;
    api("/api/messenger/conversations/" + id + "/contact/remove", { method: "POST" })
      .then(function () {
        state.activeConv = null;
        state.messages = [];
        closeMessengerMenu();
        setView("list");
        return loadConversations();
      })
      .catch(function (err) { alert(err.message || "Could not remove the contact."); });
  }

  function clearActiveHistory() {
    if (!state.activeConv) return;
    var id = state.activeConv.id;
    api("/api/messenger/conversations/" + id + "/history/clear", { method: "POST" })
      .then(function () {
        closeMessengerMenu();
        loadConversations();
        return loadMessages();
      })
      .catch(function (err) { alert(err.message || "Could not delete the conversation."); });
  }

  function setActiveRetention(retention) {
    if (!state.activeConv) return;
    var id = state.activeConv.id;
    api("/api/messenger/conversations/" + id + "/retention", {
      method: "POST",
      body: { retention: retention },
    }).then(function (res) {
      state.activeConv.retention = (res && res.retention) || retention;
      markRetention(state.activeConv.retention);
      closeMessengerMenu();
      loadConversations();
      return loadMessages();
    }).catch(function (err) { alert(err.message || "Could not save retention."); });
  }

  function bindSend() {
    var sendBtn = document.getElementById("messengerSend");
    var input = document.getElementById("messengerText");
    var back = document.getElementById("messengerBack");
    var fileEl = document.getElementById("messengerFile");
    if (sendBtn) sendBtn.addEventListener("click", sendCurrent);
    if (input) {
      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && !e.shiftKey && window.matchMedia("(min-width: 769px)").matches) {
          e.preventDefault();
          sendCurrent();
        }
      });
    }
    if (back) back.addEventListener("click", function () {
      state.activeConv = null;
      setView("list");
    });
    if (fileEl) {
      fileEl.addEventListener("change", function () {
        var file = fileEl.files && fileEl.files[0];
        state.pendingFile = file || null;
        var preview = document.getElementById("messengerPreview");
        if (!preview) return;
        preview.innerHTML = "";
        if (!file) return;
        var err = validateClientFile(file);
        if (err) { alert(err); fileEl.value = ""; state.pendingFile = null; return; }
        if (file.type && file.type.indexOf("image/") === 0) {
          var reader = new FileReader();
          reader.onload = function (ev) {
            preview.innerHTML = '<img src="' + ev.target.result + '" alt="preview">';
          };
          reader.readAsDataURL(file);
        } else {
          preview.textContent = file.name;
        }
      });
    }
  }

  function init() {
    bindAuthUI();
    bindLogout();
    bindSend();
    bindSearch();
    bindExpand();
    bindVoice();
    bindMenu();
    setConnDot(false);
    var saved = getToken();
    if (saved) {
      state.token = saved;
      api("/api/auth/me")
        .then(function (user) {
          state.me = user;
          renderShell();
          connectSocket();
          return loadConversations();
        })
        .catch(function () {
          renderAuth();
        });
    } else {
      renderAuth();
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
