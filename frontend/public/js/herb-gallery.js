function loadHerbGallery() {
  var gallery = document.getElementById("shopGallery");
  if (!gallery) return;
  OSIRIS_ensureBotanicaSearch(gallery);
  if (gallery.getAttribute("data-osiris-gallery-loaded") === "1") return;
  if (loadHerbGallery._inflight) return;
  loadHerbGallery._inflight = true;

  fetch("/herbdata/herbs.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      loadHerbGallery._inflight = false;
      var heroImage = document.getElementById("shopHeroImage");
      if (heroImage && data.hero) {
        heroImage.src = data.hero.image;
        heroImage.alt = data.hero.alt;
      }
      gallery.innerHTML = "";
      var frag = document.createDocumentFragment();
      (data.herbs || []).forEach(function (herb) {
        var img = document.createElement("img");
        img.src = herb.image;
        img.alt = herb.alt;
        img.className = "shop-image herb-image";
        img.dataset.herb = herb.id;
        img.loading = "lazy";
        img.decoding = "async";
        img.onclick = function () {
          openHerbPopup(herb.id);
        };
        frag.appendChild(img);
      });
      gallery.appendChild(frag);
      gallery.setAttribute("data-osiris-gallery-loaded", "1");
      OSIRIS_ensureBotanicaSearch(gallery);
      var input = document.getElementById("botanicaSearch");
      if (input && input.value) OSIRIS_filterBotanicaGallery(input.value);
    })
    .catch(function (error) {
      loadHerbGallery._inflight = false;
      console.error("Herb gallery failed to load:", error);
    });
}

function OSIRIS_botanicaSearchNorm(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[×x]/g, "x")
    .replace(/[-_./]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function OSIRIS_botanicaPushName(parts, value) {
  if (value == null || value === "") return;
  if (Array.isArray(value)) {
    var i;
    for (i = 0; i < value.length; i++) OSIRIS_botanicaPushName(parts, value[i]);
    return;
  }
  if (typeof value === "object") {
    OSIRIS_botanicaPushName(parts, value.commonName || value.name || value.title || value.latin || value.botanicalName);
    return;
  }
  parts.push(String(value));
}

function OSIRIS_botanicaHaystackForCard(img) {
  var key = (img && (img.getAttribute("data-herb") || (img.dataset && img.dataset.herb))) || "";
  var parts = [key, img && img.alt];
  var dict = (typeof window !== "undefined" && window.herbs) ||
    ((typeof herbs === "object" && herbs) ? herbs : null);
  if (dict && key && dict[key]) {
    OSIRIS_botanicaPushName(parts, dict[key].title);
    OSIRIS_botanicaPushName(parts, dict[key].name);
    OSIRIS_botanicaPushName(parts, dict[key].commonName);
    OSIRIS_botanicaPushName(parts, dict[key].botanicalName);
    OSIRIS_botanicaPushName(parts, dict[key].latin);
    OSIRIS_botanicaPushName(parts, dict[key].aliases);
    OSIRIS_botanicaPushName(parts, dict[key].synonyms);
  }
  var rec = null;
  try {
    if (typeof OSIRIS_getBotanicaRecord === "function") rec = OSIRIS_getBotanicaRecord(key);
  } catch (eBot) {}
  if (!rec && typeof window !== "undefined" && window.OSIRIS_BOTANICA && key) {
    rec = window.OSIRIS_BOTANICA[key] || null;
  }
  if (rec) {
    OSIRIS_botanicaPushName(parts, rec.commonName);
    OSIRIS_botanicaPushName(parts, rec.botanicalName);
    OSIRIS_botanicaPushName(parts, rec.title);
    OSIRIS_botanicaPushName(parts, rec.aliases);
    OSIRIS_botanicaPushName(parts, rec.synonyms);
    OSIRIS_botanicaPushName(parts, rec.alsoKnownAs);
  }
  try {
    if (typeof OSIRIS_getHerbRecord === "function") {
      var lib = OSIRIS_getHerbRecord(key);
      if (lib) {
        OSIRIS_botanicaPushName(parts, lib.commonName);
        OSIRIS_botanicaPushName(parts, lib.botanicalName);
        OSIRIS_botanicaPushName(parts, lib.aliases);
        OSIRIS_botanicaPushName(parts, lib.synonyms);
      }
    }
  } catch (eLib) {}
  function walkAliasMap(map) {
    if (!map) return;
    var k;
    for (k in map) {
      if (!Object.prototype.hasOwnProperty.call(map, k)) continue;
      if (k === key || map[k] === key) {
        parts.push(k, map[k]);
      }
    }
  }
  try { walkAliasMap(typeof OSIRIS_HERB_GALLERY_ALIASES === "object" && OSIRIS_HERB_GALLERY_ALIASES); } catch (eA) {}
  try { walkAliasMap(typeof OSIRIS_BOTANICA_OPEN_ALIASES === "object" && OSIRIS_BOTANICA_OPEN_ALIASES); } catch (eB) {}
  return OSIRIS_botanicaSearchNorm(parts.filter(Boolean).join(" "));
}

function OSIRIS_filterBotanicaGallery(rawQuery) {
  var gallery = document.getElementById("shopGallery");
  if (!gallery) return;
  var q = OSIRIS_botanicaSearchNorm(rawQuery);
  var cards = gallery.querySelectorAll("img, .herb-image, .herb-card");
  var shown = 0;
  var i, card, hay;
  for (i = 0; i < cards.length; i++) {
    card = cards[i];
    if (!q) {
      card.style.display = "";
      shown += 1;
      continue;
    }
    hay = OSIRIS_botanicaHaystackForCard(card);
    if (hay.indexOf(q) !== -1) {
      card.style.display = "";
      shown += 1;
    } else {
      card.style.display = "none";
    }
  }
  var empty = document.getElementById("botanicaSearchEmpty");
  if (empty) {
    if (q && shown === 0) empty.classList.add("is-visible");
    else empty.classList.remove("is-visible");
  }
}

function OSIRIS_ensureBotanicaSearch(gallery) {
  if (!gallery || !gallery.parentNode) return;
  var wrap = document.getElementById("botanicaSearchWrap");
  if (!wrap) {
    wrap = document.createElement("div");
    wrap.id = "botanicaSearchWrap";
    wrap.className = "botanica-search-wrap";
    wrap.innerHTML =
      "<input type=\"search\" id=\"botanicaSearch\" name=\"botanica-plant-search\" class=\"botanica-search\" " +
      "placeholder=\"Search Botanica...\" autocomplete=\"off\" autocapitalize=\"none\" " +
      "autocorrect=\"off\" spellcheck=\"false\" inputmode=\"search\" enterkeyhint=\"search\" " +
      "aria-autocomplete=\"none\" data-lpignore=\"true\" data-1p-ignore=\"true\" " +
      "data-form-type=\"other\" aria-label=\"Search Botanica\">";
    gallery.parentNode.insertBefore(wrap, gallery);
  }
  var empty = document.getElementById("botanicaSearchEmpty");
  if (!empty) {
    empty = document.createElement("p");
    empty.id = "botanicaSearchEmpty";
    empty.className = "botanica-search-empty";
    empty.textContent = "No matching plants found.";
    if (gallery.nextSibling) gallery.parentNode.insertBefore(empty, gallery.nextSibling);
    else gallery.parentNode.appendChild(empty);
  }
  var input = document.getElementById("botanicaSearch");
  if (!input) return;
  input.setAttribute("type", "search");
  input.setAttribute("name", "botanica-plant-search");
  input.setAttribute("autocomplete", "off");
  input.setAttribute("autocapitalize", "none");
  input.setAttribute("autocorrect", "off");
  input.setAttribute("spellcheck", "false");
  input.setAttribute("inputmode", "search");
  input.setAttribute("enterkeyhint", "search");
  input.setAttribute("aria-autocomplete", "none");
  input.setAttribute("data-lpignore", "true");
  input.setAttribute("data-1p-ignore", "true");
  input.setAttribute("data-form-type", "other");
  try { input.autocomplete = "off"; } catch (eAc) {}
  if (input.getAttribute("data-osiris-bound") === "1") return;
  input.setAttribute("data-osiris-bound", "1");
  var run = function () {
    OSIRIS_filterBotanicaGallery(input.value);
  };
  input.addEventListener("input", run);
  input.addEventListener("search", run);
  input.addEventListener("keydown", function (e) {
    if (e && e.key === "Enter") e.preventDefault();
  });
}
