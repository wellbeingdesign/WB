// =====================================================
// OSIRIS COMPREHENSIVE DIAGNOSTIC SYSTEM
// Diagnostic Analysis Functions for All Body Systems
// =====================================================

// Main function called by all "Submit for Diagnosis" buttons
function runDiagnostics() {
    // Detect which section is currently active/visible
    const upperResp = document.getElementById('upper-respiratory');
    const lowerResp = document.getElementById('lower-respiratory');
    const cardio = document.getElementById('cardio');
    const renal = document.getElementById('renal');
    const endocrine = document.getElementById('endocrine');
    const neural = document.getElementById('neural');
    const gastrointestinal = document.getElementById('gastrointestinal');
    const psychological = document.getElementById('psychological');
    const psychiatric = document.getElementById('psychiatric');
    const musculoskeletal = document.getElementById('musculoskeletal');

    // Check which section is visible and run appropriate diagnosis
    if (upperResp && !upperResp.classList.contains('hidden')) {
        analyzeUpperRespiratory();
    } else if (lowerResp && !lowerResp.classList.contains('hidden')) {
        analyzeLowerRespiratory();
    } else if (cardio && !cardio.classList.contains('hidden')) {
        analyzeCardiovascular();
    } else if (renal && !renal.classList.contains('hidden')) {
        analyzeRenal();
    } else if (endocrine && !endocrine.classList.contains('hidden')) {
        analyzeEndocrine();
    } else if (neural && !neural.classList.contains('hidden')) {
        analyzeNeural();
    } else if (gastrointestinal && !gastrointestinal.classList.contains('hidden')) {
        analyzeGastrointestinal();
    } else if (psychological && !psychological.classList.contains('hidden')) {
        analyzePsychological();
    } else if (psychiatric && !psychiatric.classList.contains('hidden')) {
        analyzePsychiatric();
    } else if (musculoskeletal && !musculoskeletal.classList.contains('hidden')) {
        analyzeMusculoskeletal();
    } else {
        // Default - try to find the closest visible section
        analyzeUpperRespiratory();
    }
}

// Helper function to get selected radio value
function getRadioValue(name) {
    const selected = document.querySelector(`input[name="${name}"]:checked`);
    return selected ? selected.value : null;
}

// Helper function to get input value
function getInputValue(id) {
    const input = document.getElementById(id);
    return input ? input.value : null;
}

// Helper function to show diagnosis result
function showDiagnosisResult(containerId, message, severity = 'info') {
    let container = document.getElementById(containerId);
    
    // If container doesn't exist, create it
    if (!container) {
        const sections = document.querySelectorAll('.diagnostic-section:not(.hidden)');
        if (sections.length > 0) {
            container = document.createElement('div');
            container.id = containerId;
            container.className = 'diagnosis-result';
            
            // Find the submit button and insert after it
            const submitBtn = sections[0].querySelector('.submit-diagnosis-button');
            if (submitBtn) {
                submitBtn.parentNode.insertBefore(container, submitBtn.nextSibling);
            } else {
                sections[0].appendChild(container);
            }
        }
    }
    
    if (container) {
        container.classList.remove('hidden');
        container.style.display = 'block';
        container.innerHTML = message;
        container.style.whiteSpace = 'pre-line';
        
        // Add severity styling
        container.classList.remove('severity-low', 'severity-medium', 'severity-high');
        container.classList.add(`severity-${severity}`);
        
        // Scroll to result
        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// =====================================================
// UPPER RESPIRATORY DIAGNOSIS
// =====================================================
function analyzeUpperRespiratory() {
    let findings = [];
    let severity = 'low';
    let recommendations = [];

    // Recent Infections
    const hadInfection = getRadioValue('recentInfection');
    const infectionType = getRadioValue('infectionType');
    
    if (hadInfection === 'Yes' && infectionType) {
        findings.push(`🦠 Recent ${infectionType} infection detected`);
        if (infectionType === 'COVID-19') {
            findings.push("   → Post-COVID respiratory monitoring recommended");
            recommendations.push("Monitor for persistent symptoms (long COVID)");
            severity = 'medium';
        } else if (infectionType === 'Sinus Infection') {
            findings.push("   → Sinus inflammation may persist");
            recommendations.push("Consider saline irrigation and decongestants");
        }
    }

    // Allergies
    const hasAllergies = getRadioValue('allergies');
    const allergyType = getRadioValue('allergyType');
    const respiratorySymptoms = getRadioValue('respiratorySymptoms');
    
    if (hasAllergies === 'Yes') {
        findings.push(`🌿 Allergies present: ${allergyType || 'unspecified'}`);
        if (respiratorySymptoms === 'Yes') {
            findings.push("   → Allergies causing respiratory symptoms");
            recommendations.push("Consider antihistamines and allergen avoidance");
            severity = severity === 'high' ? 'high' : 'medium';
        }
    }

    // Temperature
    const temp = parseFloat(getInputValue('temperatureInput'));
    const tempDuration = getRadioValue('symptomDuration');
    
    if (!isNaN(temp)) {
        if (temp >= 39) {
            findings.push(`🔴 HIGH FEVER: ${temp}°C`);
            severity = 'high';
            if (tempDuration === 'More than 3 days' || tempDuration === '1 Week' || tempDuration === '2 Weeks') {
                findings.push("   → Extended fever duration - urgent evaluation needed");
                recommendations.push("URGENT: Seek medical evaluation for persistent high fever");
                recommendations.push("Recommended tests: CRP, ESR, Procalcitonin, Blood Culture");
            }
        } else if (temp >= 38) {
            findings.push(`🟠 Moderate fever: ${temp}°C`);
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("Monitor temperature, stay hydrated");
        } else if (temp >= 37.5) {
            findings.push(`🟡 Slight elevation: ${temp}°C`);
        } else if (temp >= 36) {
            findings.push(`✅ Temperature normal: ${temp}°C`);
        } else {
            findings.push(`🟡 Below normal temperature: ${temp}°C - may indicate metabolic issues`);
        }
    }

    // Runny Nose
    const runnyDuration = getRadioValue('runnyNoseDuration');
    const dischargeColor = getRadioValue('dischargeColor');
    const sneezing = getRadioValue('sneezing');
    
    if (runnyDuration) {
        findings.push(`👃 Runny nose: ${runnyDuration}`);
        if (dischargeColor === 'Yellow' || dischargeColor === 'Green') {
            findings.push(`   → ${dischargeColor} discharge suggests possible bacterial infection`);
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("Consider evaluation for bacterial sinusitis");
        }
        if (sneezing === 'Yes') {
            findings.push("   → Associated with sneezing - allergic component likely");
        }
    }

    // Sore Throat
    const soreThroatDuration = getRadioValue('soreThroatDuration');
    const tonsilSwelling = getRadioValue('tonsilSwelling');
    const swallowingDifficulty = getRadioValue('swallowingDifficulty');
    
    if (soreThroatDuration) {
        findings.push(`🗣️ Sore throat: ${soreThroatDuration}`);
        if (tonsilSwelling === 'Yes') {
            findings.push("   → Tonsil swelling/patches present - possible strep throat");
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("Rapid strep test recommended");
        }
        if (swallowingDifficulty === 'Yes') {
            findings.push("   → Difficulty swallowing - moderate to severe inflammation");
            recommendations.push("Warm salt water gargles, consider medical evaluation");
        }
    }

    // Chest Tightness
    const chestTightness = getRadioValue('upperChestTightness');
    const painWithBreathing = getRadioValue('painDeepBreaths');
    const chestConstant = getRadioValue('chestConstant');
    
    if (chestTightness === 'Yes') {
        findings.push("🫁 Chest tightness reported");
        if (painWithBreathing === 'Yes') {
            findings.push("   → Pain worsens with breathing - possible pleurisy or lower respiratory involvement");
            severity = 'high';
            recommendations.push("Chest X-ray may be needed to rule out pneumonia");
        }
    }

    // Blood Pressure & Pulse
    const systolic = parseInt(getInputValue('systolic'));
    const diastolic = parseInt(getInputValue('diastolic'));
    const pulse = parseInt(getInputValue('pulse'));
    
    if (!isNaN(systolic) && !isNaN(diastolic)) {
        if (systolic >= 140 || diastolic >= 90) {
            findings.push(`🔴 Blood pressure elevated: ${systolic}/${diastolic} mmHg`);
            severity = 'high';
        } else if (systolic < 90 || diastolic < 60) {
            findings.push(`🟡 Blood pressure low: ${systolic}/${diastolic} mmHg`);
        } else {
            findings.push(`✅ Blood pressure normal: ${systolic}/${diastolic} mmHg`);
        }
    }
    
    if (!isNaN(pulse)) {
        if (pulse > 100) {
            findings.push(`🔴 Elevated pulse: ${pulse} bpm - tachycardia`);
            severity = severity === 'high' ? 'high' : 'medium';
        } else if (pulse < 60) {
            findings.push(`🟡 Low pulse: ${pulse} bpm - bradycardia`);
        } else {
            findings.push(`✅ Pulse normal: ${pulse} bpm`);
        }
    }

    // Ear Pain
    const earPainLocation = getRadioValue('earPainLocation');
    const earPainType = getRadioValue('earPainType');
    const earDischarge = getRadioValue('earDischarge');
    
    if (earPainLocation) {
        findings.push(`👂 Ear pain: ${earPainLocation}`);
        if (earPainType === 'Sharp' || earPainType === 'Throbbing') {
            findings.push(`   → ${earPainType} pain - possible otitis media`);
            severity = severity === 'high' ? 'high' : 'medium';
        }
        if (earDischarge === 'Yes') {
            findings.push("   → Ear discharge present - infection likely");
            recommendations.push("ENT evaluation recommended for ear discharge");
        }
    }

    // Hearing Changes
    const hearingLoss = getRadioValue('hearingLossLocation');
    const ringingBuzzing = getRadioValue('ringingBuzzing');
    
    if (hearingLoss) {
        findings.push(`🔊 Hearing changes: ${hearingLoss}`);
        if (ringingBuzzing === 'Yes') {
            findings.push("   → Tinnitus present");
            recommendations.push("Audiological evaluation recommended");
        }
    }

    // Generate diagnosis output
    let output = "═══════════════════════════════════════════\n";
    output += "🩺 UPPER RESPIRATORY DIAGNOSIS REPORT\n";
    output += "═══════════════════════════════════════════\n\n";

    if (findings.length === 0) {
        output += "ℹ️ No significant findings detected.\n";
        output += "Please complete the diagnostic questionnaires above for a comprehensive assessment.\n";
    } else {
        output += "📋 FINDINGS:\n";
        output += "───────────────────────────────────────────\n";
        findings.forEach(f => output += f + "\n");
        
        if (recommendations.length > 0) {
            output += "\n💡 RECOMMENDATIONS:\n";
            output += "───────────────────────────────────────────\n";
            recommendations.forEach(r => output += "• " + r + "\n");
        }
        
        output += "\n⚠️ SEVERITY LEVEL: " + severity.toUpperCase() + "\n";
        
        if (severity === 'high') {
            output += "\n🚨 IMPORTANT: Some findings require medical attention.\n";
            output += "Consider consulting a healthcare provider soon.\n";
        }
    }

    output += "\n───────────────────────────────────────────\n";
    output += "OSIRIS reminds: This is not a medical diagnosis.\n";
    output += "Always consult qualified healthcare professionals.\n";

    // Show result
    const resultDiv = document.getElementById('diagnosis-result');
    const summaryP = document.getElementById('diagnosis-summary');
    
    if (resultDiv && summaryP) {
        resultDiv.classList.remove('hidden');
        resultDiv.style.display = 'block';
        summaryP.innerText = output;
        summaryP.style.whiteSpace = 'pre-line';
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        showDiagnosisResult('diagnosis-result', output, severity);
    }
}

// =====================================================
// LOWER RESPIRATORY DIAGNOSIS
// =====================================================
function analyzeLowerRespiratory() {
    let findings = [];
    let severity = 'low';
    let recommendations = [];

    // Persistent Cough
    const coughDuration = getRadioValue('coughDuration');
    const coughType = getRadioValue('coughType');
    const coughTime = getRadioValue('coughTime');
    
    if (coughDuration) {
        findings.push(`🫁 Persistent cough: ${coughDuration}`);
        if (coughType === 'With Mucus') {
            findings.push("   → Productive cough with mucus");
            recommendations.push("Sputum analysis may help identify infection type");
        }
        if (coughTime === 'Night') {
            findings.push("   → Worse at night - possible asthma, GERD, or post-nasal drip");
        } else if (coughTime === 'Morning') {
            findings.push("   → Worse in morning - possible COPD or chronic bronchitis");
        }
        if (coughDuration === 'More than a month') {
            severity = 'medium';
            recommendations.push("Chronic cough evaluation recommended");
        }
    }

    // Wheezing
    const wheezingFreq = getRadioValue('wheezingFrequency');
    const wheezingTrigger = getRadioValue('wheezingTrigger');
    
    if (wheezingFreq && wheezingFreq !== 'Never') {
        findings.push(`🌬️ Wheezing: ${wheezingFreq}`);
        if (wheezingTrigger === 'Exercise') {
            findings.push("   → Exercise-induced - possible exercise-induced asthma");
        } else if (wheezingTrigger === 'Allergens') {
            findings.push("   → Allergen-triggered - allergic asthma likely");
        }
        if (wheezingFreq === 'Frequently') {
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("Pulmonary function testing recommended");
        }
    }

    // Frequent Infections
    const freqInfections = getRadioValue('frequentInfections');
    const requiresAntibiotics = getRadioValue('requiresAntibiotics');
    const infectionDuration = getRadioValue('infectionDurationLower');
    
    if (freqInfections === 'Yes') {
        findings.push("🦠 History of frequent respiratory infections");
        if (requiresAntibiotics === 'Yes') {
            findings.push("   → Often requires antibiotics - recurrent bacterial infections");
            severity = 'medium';
            recommendations.push("Immune function evaluation may be warranted");
        }
        if (infectionDuration === 'More than a month') {
            findings.push("   → Prolonged recovery - possible underlying condition");
        }
    }

    // Mucus Production
    const mucusProduction = getRadioValue('mucusProduction');
    const mucusColor = getRadioValue('mucusColor');
    
    if (mucusProduction === 'Yes') {
        findings.push("🫁 Mucus production present");
        if (mucusColor === 'Yellow' || mucusColor === 'Green') {
            findings.push(`   → ${mucusColor} mucus - suggests bacterial infection`);
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("Consider sputum culture if persistent");
        } else if (mucusColor === 'Bloody') {
            findings.push("   → 🔴 BLOOD IN MUCUS - requires urgent evaluation");
            severity = 'high';
            recommendations.push("URGENT: Chest X-ray and medical evaluation needed");
        }
    }

    // Rapid Breathing
    const rapidBreathing = getRadioValue('rapidBreathingFreq');
    const rapidBreathingTime = getRadioValue('rapidBreathingTime');
    const rapidBreathingTrigger = getRadioValue('rapidBreathingTrigger');
    
    if (rapidBreathing && rapidBreathing !== 'Rarely') {
        findings.push(`⚡ Rapid breathing: ${rapidBreathing}`);
        if (rapidBreathingTrigger === 'No Trigger') {
            findings.push("   → Occurs without obvious trigger - concerning");
            severity = 'medium';
        }
    }

    // Chest Tightness
    const chestTightnessWhen = getRadioValue('chestTightnessWhen');
    const chestTightnessBreath = getRadioValue('chestTightnessWithBreath');
    const chestTightnessFreq = getRadioValue('chestTightnessFreq');
    
    if (chestTightnessWhen) {
        findings.push(`🫀 Chest tightness: ${chestTightnessWhen}`);
        if (chestTightnessWhen === 'At Rest') {
            findings.push("   → At rest - may indicate cardiac or severe pulmonary issue");
            severity = 'high';
            recommendations.push("Cardiac evaluation recommended");
        }
        if (chestTightnessBreath === 'Yes') {
            findings.push("   → Associated with shortness of breath");
        }
    }

    // Shortness of Breath
    const sobFreq = getRadioValue('sobFrequency');
    const sobWhen = getRadioValue('sobWhen');
    const sobSymptoms = getRadioValue('sobOtherSymptoms');
    
    if (sobFreq && sobFreq !== 'Rarely') {
        findings.push(`😮‍💨 Shortness of breath: ${sobFreq}`);
        if (sobWhen === 'At Rest') {
            findings.push("   → Occurs at rest - significant respiratory compromise");
            severity = 'high';
            recommendations.push("Urgent pulmonary evaluation needed");
        }
        if (sobSymptoms === 'Yes') {
            findings.push("   → With chest pain/dizziness - cardiac involvement possible");
            severity = 'high';
        }
    }

    // Oxygen Saturation
    const spo2 = parseFloat(getInputValue('oxygenSaturation'));
    if (!isNaN(spo2)) {
        if (spo2 >= 95) {
            findings.push(`✅ Oxygen saturation normal: ${spo2}%`);
        } else if (spo2 >= 90) {
            findings.push(`🟡 Mild hypoxia: ${spo2}%`);
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("Monitor oxygen levels closely");
        } else {
            findings.push(`🔴 SIGNIFICANT HYPOXIA: ${spo2}%`);
            severity = 'high';
            recommendations.push("URGENT: Oxygen supplementation may be needed");
        }
    }

    // Chest Pain with Deep Breaths
    const chestPainBreaths = getRadioValue('chestPainDeepBreaths');
    const chestPainSharp = getRadioValue('chestPainSharpDull');
    const chestPainIntensity = getRadioValue('chestPainIntensity');
    
    if (chestPainBreaths === 'Yes') {
        findings.push("🫁 Chest pain with deep breaths");
        if (chestPainSharp === 'Sharp') {
            findings.push("   → Sharp pain - possible pleurisy or pneumothorax");
            severity = 'high';
            recommendations.push("Chest X-ray recommended");
        }
        if (chestPainIntensity === 'Severe') {
            findings.push("   → Severe intensity");
            severity = 'high';
        }
    }

    // Breathing While Lying Down
    const orthopnea = getRadioValue('breathingLyingDown');
    const pillows = getRadioValue('multiplePillows');
    
    if (orthopnea === 'Yes') {
        findings.push("🛏️ Difficulty breathing when lying down (orthopnea)");
        if (pillows === 'Yes') {
            findings.push("   → Requires multiple pillows - possible heart failure");
            severity = 'high';
            recommendations.push("Cardiac evaluation strongly recommended");
        }
    }

    // Night Sweats
    const nightSweatsFreq = getRadioValue('nightSweatsFreq');
    const nightSweatsWithCough = getRadioValue('nightSweatsWithCough');
    
    if (nightSweatsFreq && nightSweatsFreq !== 'Rarely') {
        findings.push(`🌙 Night sweats: ${nightSweatsFreq}`);
        if (nightSweatsWithCough === 'Yes') {
            findings.push("   → With coughing - consider TB screening");
            severity = 'medium';
            recommendations.push("Tuberculosis screening may be warranted");
        }
    }

    // Respiration Rate
    const respRate = parseFloat(getInputValue('respirationRate'));
    if (!isNaN(respRate)) {
        if (respRate >= 12 && respRate <= 20) {
            findings.push(`✅ Respiration rate normal: ${respRate}/min`);
        } else if (respRate > 20) {
            findings.push(`🔴 Tachypnea: ${respRate}/min`);
            severity = severity === 'high' ? 'high' : 'medium';
        } else {
            findings.push(`🟡 Low respiration rate: ${respRate}/min`);
        }
    }

    // Lung Capacity
    const lungCap = parseFloat(getInputValue('lungCapacity'));
    if (!isNaN(lungCap)) {
        if (lungCap >= 4.0 && lungCap <= 6.0) {
            findings.push(`✅ Lung capacity normal: ${lungCap}L`);
        } else if (lungCap < 4.0) {
            findings.push(`🟡 Reduced lung capacity: ${lungCap}L`);
            recommendations.push("Spirometry testing recommended");
        }
    }

    // Generate output
    let output = "═══════════════════════════════════════════\n";
    output += "🫁 LOWER RESPIRATORY DIAGNOSIS REPORT\n";
    output += "═══════════════════════════════════════════\n\n";

    if (findings.length === 0) {
        output += "ℹ️ No significant findings detected.\n";
        output += "Complete the questionnaires for comprehensive assessment.\n";
    } else {
        output += "📋 FINDINGS:\n";
        output += "───────────────────────────────────────────\n";
        findings.forEach(f => output += f + "\n");
        
        if (recommendations.length > 0) {
            output += "\n💡 RECOMMENDATIONS:\n";
            output += "───────────────────────────────────────────\n";
            recommendations.forEach(r => output += "• " + r + "\n");
        }
        
        output += "\n⚠️ SEVERITY LEVEL: " + severity.toUpperCase() + "\n";
    }

    output += "\n───────────────────────────────────────────\n";
    output += "OSIRIS: This is not a medical diagnosis.\n";

    showDiagnosisResult('lower-respiratory-diagnosis-result', output, severity);
}

// =====================================================
// CARDIOVASCULAR DIAGNOSIS
// =====================================================
function analyzeCardiovascular() {
    let findings = [];
    let severity = 'low';
    let recommendations = [];

    // High Blood Pressure History
    const highBP = getRadioValue('highBP');
    const bpMedication = getRadioValue('bpMedication');
    
    if (highBP === 'Yes') {
        findings.push("📊 History of high blood pressure");
        if (bpMedication === 'No') {
            findings.push("   → Not controlled with medication");
            severity = 'medium';
            recommendations.push("Blood pressure management review needed");
        } else {
            findings.push("   → Controlled with medication");
        }
    }

    // Calcium Dynamics
    const calciumIntake = getInputValue('calcium-intake');
    const boneHealth = getRadioValue('bone-health-status');
    const calciumSymptoms = getRadioValue('calcium-symptoms');
    
    if (calciumSymptoms === 'Yes') {
        findings.push("⚡ Calcium-related symptoms present (cramps, irregular heartbeat)");
        severity = severity === 'high' ? 'high' : 'medium';
        recommendations.push("Serum calcium and ionized calcium testing recommended");
    }

    // Blood Pressure
    const systolic1 = parseInt(getInputValue('systolic1'));
    const diastolic1 = parseInt(getInputValue('diastolic1'));
    
    if (!isNaN(systolic1) && !isNaN(diastolic1)) {
        if (systolic1 >= 180 || diastolic1 >= 120) {
            findings.push(`🔴 HYPERTENSIVE CRISIS: ${systolic1}/${diastolic1} mmHg`);
            severity = 'high';
            recommendations.push("URGENT: Seek immediate medical attention");
        } else if (systolic1 >= 140 || diastolic1 >= 90) {
            findings.push(`🔴 Stage 2 Hypertension: ${systolic1}/${diastolic1} mmHg`);
            severity = 'high';
            recommendations.push("Cardiology consultation recommended");
        } else if (systolic1 >= 130 || diastolic1 >= 80) {
            findings.push(`🟠 Stage 1 Hypertension: ${systolic1}/${diastolic1} mmHg`);
            severity = 'medium';
        } else if (systolic1 >= 120) {
            findings.push(`🟡 Elevated BP: ${systolic1}/${diastolic1} mmHg`);
        } else if (systolic1 < 90 || diastolic1 < 60) {
            findings.push(`🟡 Low BP: ${systolic1}/${diastolic1} mmHg`);
        } else {
            findings.push(`✅ BP Normal: ${systolic1}/${diastolic1} mmHg`);
        }
    }

    // Heart Rate
    const heartRate = parseInt(getInputValue('heartRate'));
    if (!isNaN(heartRate)) {
        if (heartRate > 100) {
            findings.push(`🔴 Tachycardia: ${heartRate} bpm`);
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("ECG evaluation recommended");
        } else if (heartRate < 60) {
            findings.push(`🟡 Bradycardia: ${heartRate} bpm`);
            if (heartRate < 50) {
                severity = 'medium';
            }
        } else {
            findings.push(`✅ Heart rate normal: ${heartRate} bpm`);
        }
    }

    // Chest Pain
    const chestPainFreq = getRadioValue('cardioChestPainFreq');
    const chestPainType = getRadioValue('cardioChestPainType');
    const chestPainRadiate = getRadioValue('cardioChestPainRadiate');
    
    if (chestPainFreq && chestPainFreq !== 'Never') {
        findings.push(`💔 Chest pain: ${chestPainFreq}`);
        if (chestPainRadiate === 'Yes') {
            findings.push("   → Pain radiates to other body parts");
            severity = 'high';
            recommendations.push("URGENT: Cardiac evaluation needed - possible angina");
        }
        if (chestPainType === 'Sharp') {
            findings.push("   → Sharp pain");
        }
    }

    // Troponin
    const troponin = getInputValue('troponinResult');
    if (troponin) {
        const tropVal = parseFloat(troponin);
        if (!isNaN(tropVal) && tropVal > 0.04) {
            findings.push(`🔴 ELEVATED TROPONIN: ${troponin}`);
            severity = 'high';
            recommendations.push("URGENT: Possible cardiac injury - immediate evaluation needed");
        }
    }

    // Homocysteine
    const homocysteine = parseFloat(getInputValue('homocysteine-level'));
    if (!isNaN(homocysteine)) {
        if (homocysteine > 15) {
            findings.push(`🟠 Elevated homocysteine: ${homocysteine} µmol/L`);
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("B-vitamin supplementation may be beneficial");
        } else {
            findings.push(`✅ Homocysteine normal: ${homocysteine} µmol/L`);
        }
    }

    // Shortness of Breath
    const cardioSOB = getRadioValue('cardioSOBFreq');
    const cardioSOBWhen = getRadioValue('cardioSOBWhen');
    const cardioSOBSymptoms = getRadioValue('cardioSOBSymptoms');
    
    if (cardioSOB && cardioSOB !== 'Never') {
        findings.push(`😮‍💨 Shortness of breath: ${cardioSOB}`);
        if (cardioSOBWhen === 'At Rest') {
            findings.push("   → Occurs at rest");
            severity = 'high';
            recommendations.push("Cardiac and pulmonary function testing needed");
        }
    }

    // Palpitations
    const palpitations = getRadioValue('palpitationsFreq');
    const palpitationsWhen = getRadioValue('palpitationsWhen');
    
    if (palpitations && palpitations !== 'Rarely') {
        findings.push(`💓 Palpitations: ${palpitations}`);
        if (palpitationsWhen === 'At Rest') {
            findings.push("   → At rest - may indicate arrhythmia");
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("Holter monitor or event recorder recommended");
        }
    }

    // Edema/Swelling
    const edemaLocation = getRadioValue('edemaLocation');
    if (edemaLocation) {
        findings.push(`🦵 Swelling present: ${edemaLocation}`);
        if (edemaLocation === 'Legs') {
            findings.push("   → Lower extremity edema - possible heart failure or venous insufficiency");
            severity = severity === 'high' ? 'high' : 'medium';
        }
    }

    // Irregular Heartbeat
    const irregularHB = getRadioValue('irregularHeartbeatFreq');
    if (irregularHB && irregularHB !== 'Rarely') {
        findings.push(`💔 Irregular heartbeat: ${irregularHB}`);
        severity = severity === 'high' ? 'high' : 'medium';
        recommendations.push("ECG and possible Holter monitoring recommended");
    }

    // Fainting
    const faintingFreq = getRadioValue('faintingFreq');
    if (faintingFreq && faintingFreq !== 'Never') {
        findings.push(`⚡ Fainting episodes: ${faintingFreq}`);
        severity = 'high';
        recommendations.push("URGENT: Syncope evaluation needed - cardiac and neurological workup");
    }

    // Cold Extremities
    const coldExtremities = getRadioValue('coldExtremities');
    if (coldExtremities === 'Yes') {
        findings.push("🥶 Cold extremities reported");
        recommendations.push("Peripheral circulation assessment may be needed");
    }

    // Fatigue
    const cardioFatigue = getRadioValue('cardioFatigueFreq');
    const fatigueWorseActivity = getRadioValue('fatigueWorseActivity');
    
    if (cardioFatigue && cardioFatigue !== 'Rarely') {
        findings.push(`😴 Fatigue: ${cardioFatigue}`);
        if (fatigueWorseActivity === 'Yes') {
            findings.push("   → Worsens with activity - possible cardiac limitation");
        }
    }

    // Dizziness
    const cardioDizziness = getRadioValue('cardioDizzinessFreq');
    const dizzinessMovement = getRadioValue('cardioDizzinessMovement');
    
    if (cardioDizziness && cardioDizziness !== 'Never') {
        findings.push(`🌀 Dizziness: ${cardioDizziness}`);
        if (dizzinessMovement === 'Yes') {
            findings.push("   → Related to movement - possible orthostatic hypotension");
        }
    }

    // Sweating
    const excessiveSweating = getRadioValue('excessiveSweating');
    const sweatingNoExertion = getRadioValue('sweatingNoExertion');
    
    if (excessiveSweating === 'Yes' && sweatingNoExertion === 'Yes') {
        findings.push("💦 Excessive sweating without exertion");
        severity = severity === 'high' ? 'high' : 'medium';
        findings.push("   → May indicate autonomic dysfunction or cardiac issue");
    }

    // Leg Pain
    const legPainWhen = getRadioValue('legPainWhen');
    if (legPainWhen === 'While Walking') {
        findings.push("🦵 Leg pain while walking");
        findings.push("   → Possible claudication - peripheral artery disease");
        severity = severity === 'high' ? 'high' : 'medium';
        recommendations.push("Ankle-brachial index (ABI) testing recommended");
    }

    // Generate output
    let output = "═══════════════════════════════════════════\n";
    output += "❤️ CARDIOVASCULAR DIAGNOSIS REPORT\n";
    output += "═══════════════════════════════════════════\n\n";

    if (findings.length === 0) {
        output += "ℹ️ No significant findings detected.\n";
        output += "Complete the questionnaires for comprehensive assessment.\n";
    } else {
        output += "📋 FINDINGS:\n";
        output += "───────────────────────────────────────────\n";
        findings.forEach(f => output += f + "\n");
        
        if (recommendations.length > 0) {
            output += "\n💡 RECOMMENDATIONS:\n";
            output += "───────────────────────────────────────────\n";
            recommendations.forEach(r => output += "• " + r + "\n");
        }
        
        output += "\n⚠️ SEVERITY LEVEL: " + severity.toUpperCase() + "\n";
        
        if (severity === 'high') {
            output += "\n🚨 IMPORTANT: Cardiac symptoms detected that may require urgent evaluation.\n";
        }
    }

    output += "\n───────────────────────────────────────────\n";
    output += "OSIRIS: This is not a medical diagnosis.\n";

    showDiagnosisResult('cardio-diagnosis-result', output, severity);
}

// =====================================================
// RENAL DIAGNOSIS
// =====================================================
function analyzeRenal() {
    let findings = [];
    let severity = 'low';
    let recommendations = [];

    // eGFR Calculation
    const age = parseInt(getInputValue('renal-age'));
    const creatinine = parseFloat(getInputValue('renal-creatinine'));
    const gender = getRadioValue('renal-gender');
    const race = getRadioValue('renal-race');
    
    if (!isNaN(age) && !isNaN(creatinine) && gender) {
        // CKD-EPI formula (simplified)
        let egfr;
        if (gender === 'Female') {
            egfr = 142 * Math.pow(Math.min(creatinine/0.7, 1), -0.241) * 
                   Math.pow(Math.max(creatinine/0.7, 1), -1.2) * 
                   Math.pow(0.9938, age) * 1.012;
        } else {
            egfr = 142 * Math.pow(Math.min(creatinine/0.9, 1), -0.302) * 
                   Math.pow(Math.max(creatinine/0.9, 1), -1.2) * 
                   Math.pow(0.9938, age);
        }
        egfr = Math.round(egfr);
        
        if (egfr >= 90) {
            findings.push(`✅ eGFR Normal: ${egfr} mL/min/1.73m²`);
        } else if (egfr >= 60) {
            findings.push(`🟡 eGFR Mildly reduced: ${egfr} mL/min/1.73m² (CKD Stage 2)`);
            severity = 'medium';
        } else if (egfr >= 45) {
            findings.push(`🟠 eGFR Moderately reduced: ${egfr} mL/min/1.73m² (CKD Stage 3a)`);
            severity = 'medium';
            recommendations.push("Nephrology referral recommended");
        } else if (egfr >= 30) {
            findings.push(`🔴 eGFR Moderately-severely reduced: ${egfr} mL/min/1.73m² (CKD Stage 3b)`);
            severity = 'high';
            recommendations.push("Nephrology evaluation urgent");
        } else if (egfr >= 15) {
            findings.push(`🔴 eGFR Severely reduced: ${egfr} mL/min/1.73m² (CKD Stage 4)`);
            severity = 'high';
            recommendations.push("URGENT: Nephrology care needed - prepare for possible dialysis");
        } else {
            findings.push(`🔴 KIDNEY FAILURE: eGFR ${egfr} mL/min/1.73m² (CKD Stage 5)`);
            severity = 'high';
            recommendations.push("CRITICAL: Dialysis or transplant evaluation needed");
        }
    }

    // Electrolytes
    const sodium = parseFloat(getInputValue('renal-sodium'));
    const potassium = parseFloat(getInputValue('renal-potassium'));
    const calcium = parseFloat(getInputValue('renal-calcium'));
    
    if (!isNaN(sodium)) {
        if (sodium < 135) {
            findings.push(`🟡 Hyponatremia: ${sodium} mmol/L`);
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("Evaluate for fluid imbalance");
        } else if (sodium > 145) {
            findings.push(`🟡 Hypernatremia: ${sodium} mmol/L`);
            severity = severity === 'high' ? 'high' : 'medium';
        } else {
            findings.push(`✅ Sodium normal: ${sodium} mmol/L`);
        }
    }
    
    if (!isNaN(potassium)) {
        if (potassium < 3.5) {
            findings.push(`🔴 Hypokalemia: ${potassium} mmol/L - cardiac risk`);
            severity = 'high';
            recommendations.push("URGENT: Potassium supplementation may be needed");
        } else if (potassium > 5.0) {
            findings.push(`🔴 Hyperkalemia: ${potassium} mmol/L - cardiac risk`);
            severity = 'high';
            recommendations.push("URGENT: Evaluate for cardiac arrhythmia risk");
        } else {
            findings.push(`✅ Potassium normal: ${potassium} mmol/L`);
        }
    }
    
    if (!isNaN(calcium)) {
        if (calcium < 2.1) {
            findings.push(`🟡 Hypocalcemia: ${calcium} mmol/L`);
        } else if (calcium > 2.6) {
            findings.push(`🟡 Hypercalcemia: ${calcium} mmol/L`);
            recommendations.push("Evaluate for hyperparathyroidism or malignancy");
        } else {
            findings.push(`✅ Calcium normal: ${calcium} mmol/L`);
        }
    }

    // Acid-Base Status
    const bicarbonate = parseFloat(getInputValue('renal-bicarbonate'));
    const chloride = parseFloat(getInputValue('renal-chloride-acid'));
    const sodiumAB = parseFloat(getInputValue('renal-sodium-acid'));
    
    if (!isNaN(bicarbonate)) {
        if (bicarbonate < 22) {
            findings.push(`🟠 Metabolic acidosis: HCO₃ ${bicarbonate} mmol/L`);
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("Evaluate cause of acidosis");
        } else if (bicarbonate > 28) {
            findings.push(`🟡 Metabolic alkalosis: HCO₃ ${bicarbonate} mmol/L`);
        } else {
            findings.push(`✅ Bicarbonate normal: ${bicarbonate} mmol/L`);
        }
        
        // Anion gap calculation
        if (!isNaN(sodiumAB) && !isNaN(chloride)) {
            const anionGap = sodiumAB - chloride - bicarbonate;
            if (anionGap > 12) {
                findings.push(`🟠 Elevated anion gap: ${anionGap.toFixed(1)} mEq/L`);
                recommendations.push("Evaluate for lactic acidosis, ketoacidosis, or toxins");
            }
        }
    }

    // Urinalysis
    const urinePH = parseFloat(getInputValue('renal-ph'));
    const specificGravity = parseFloat(getInputValue('renal-specific-gravity'));
    const urineGlucose = parseFloat(getInputValue('renal-glucose'));
    
    if (!isNaN(urinePH)) {
        if (urinePH < 5.0 || urinePH > 8.0) {
            findings.push(`🟡 Abnormal urine pH: ${urinePH}`);
        } else {
            findings.push(`✅ Urine pH: ${urinePH}`);
        }
    }
    
    if (!isNaN(specificGravity)) {
        if (specificGravity < 1.005) {
            findings.push(`🟡 Dilute urine: SG ${specificGravity}`);
        } else if (specificGravity > 1.030) {
            findings.push(`🟡 Concentrated urine: SG ${specificGravity}`);
            recommendations.push("Increase hydration");
        } else {
            findings.push(`✅ Urine concentration: SG ${specificGravity}`);
        }
    }
    
    if (!isNaN(urineGlucose) && urineGlucose > 0) {
        findings.push(`🔴 Glucosuria detected: ${urineGlucose} mg/dL`);
        severity = severity === 'high' ? 'high' : 'medium';
        recommendations.push("Evaluate for diabetes mellitus");
    }

    // Proteinuria
    const urinaryProtein = parseFloat(getInputValue('renal-urinary-protein'));
    const urinaryCreatinine = parseFloat(getInputValue('renal-urinary-creatinine'));
    
    if (!isNaN(urinaryProtein) && !isNaN(urinaryCreatinine) && urinaryCreatinine > 0) {
        const pcr = urinaryProtein / urinaryCreatinine;
        if (pcr < 0.15) {
            findings.push(`✅ Protein/Creatinine ratio normal: ${pcr.toFixed(2)}`);
        } else if (pcr < 0.5) {
            findings.push(`🟡 Mild proteinuria: PCR ${pcr.toFixed(2)}`);
        } else {
            findings.push(`🔴 Significant proteinuria: PCR ${pcr.toFixed(2)}`);
            severity = 'high';
            recommendations.push("Nephrology evaluation for glomerular disease");
        }
    }

    // Generate output
    let output = "═══════════════════════════════════════════\n";
    output += "🫘 RENAL DIAGNOSIS REPORT\n";
    output += "═══════════════════════════════════════════\n\n";

    if (findings.length === 0) {
        output += "ℹ️ No significant findings detected.\n";
        output += "Complete the questionnaires for comprehensive assessment.\n";
    } else {
        output += "📋 FINDINGS:\n";
        output += "───────────────────────────────────────────\n";
        findings.forEach(f => output += f + "\n");
        
        if (recommendations.length > 0) {
            output += "\n💡 RECOMMENDATIONS:\n";
            output += "───────────────────────────────────────────\n";
            recommendations.forEach(r => output += "• " + r + "\n");
        }
        
        output += "\n⚠️ SEVERITY LEVEL: " + severity.toUpperCase() + "\n";
    }

    output += "\n───────────────────────────────────────────\n";
    output += "OSIRIS: This is not a medical diagnosis.\n";

    showDiagnosisResult('renal-diagnosis-result', output, severity);
}

// =====================================================
// ENDOCRINE DIAGNOSIS
// =====================================================
function analyzeEndocrine() {
    let findings = [];
    let severity = 'low';
    let recommendations = [];

    // Fatigue
    const endoFatigue = getRadioValue('endoFatigueFreq');
    if (endoFatigue === 'Frequently') {
        findings.push("😴 Chronic fatigue reported");
        recommendations.push("Evaluate thyroid and adrenal function");
    }

    // Thyroid Function
    const tsh = parseFloat(getInputValue('tshLevel'));
    const t4 = parseFloat(getInputValue('t4Level'));
    const t3 = parseFloat(getInputValue('t3Level'));
    
    if (!isNaN(tsh)) {
        if (tsh > 4.5) {
            findings.push(`🔴 Elevated TSH: ${tsh} mIU/L - possible hypothyroidism`);
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("Thyroid hormone replacement may be needed");
        } else if (tsh < 0.4) {
            findings.push(`🔴 Low TSH: ${tsh} mIU/L - possible hyperthyroidism`);
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("Evaluate for Graves' disease or thyroiditis");
        } else {
            findings.push(`✅ TSH normal: ${tsh} mIU/L`);
        }
    }
    
    if (!isNaN(t4)) {
        if (t4 < 9 || t4 > 22) {
            findings.push(`🟡 Abnormal T4: ${t4} pmol/L`);
        } else {
            findings.push(`✅ T4 normal: ${t4} pmol/L`);
        }
    }

    // Thyroid Autoimmunity
    const tpoAb = parseFloat(getInputValue('TPOAb'));
    const tgAb = parseFloat(getInputValue('TgAb'));
    
    if (!isNaN(tpoAb) && tpoAb > 35) {
        findings.push(`🟠 Elevated TPO antibodies: ${tpoAb} IU/mL`);
        findings.push("   → Hashimoto's thyroiditis likely");
        severity = severity === 'high' ? 'high' : 'medium';
    }
    
    if (!isNaN(tgAb) && tgAb > 40) {
        findings.push(`🟠 Elevated thyroglobulin antibodies: ${tgAb} IU/mL`);
    }

    // Adrenal Function
    const cortisol = parseFloat(getInputValue('morningCortisol'));
    if (!isNaN(cortisol)) {
        if (cortisol < 5) {
            findings.push(`🔴 Low morning cortisol: ${cortisol}`);
            findings.push("   → Possible adrenal insufficiency");
            severity = 'high';
            recommendations.push("ACTH stimulation test recommended");
        } else if (cortisol > 25) {
            findings.push(`🟠 Elevated cortisol: ${cortisol}`);
            recommendations.push("Evaluate for Cushing's syndrome");
        } else {
            findings.push(`✅ Morning cortisol normal: ${cortisol}`);
        }
    }

    // Hormonal Dynamics
    const estrogen = parseFloat(getInputValue('estrogenLevel'));
    const testosterone = parseFloat(getInputValue('testosteroneLevel'));
    const progesterone = parseFloat(getInputValue('progesteroneLevel'));
    
    if (!isNaN(testosterone)) {
        findings.push(`📊 Testosterone: ${testosterone} ng/dL`);
        // Note: normal ranges vary by sex
    }
    
    if (!isNaN(estrogen)) {
        findings.push(`📊 Estrogen: ${estrogen} pg/mL`);
    }

    // Temperature Sensitivity
    const tempSensitivity = getRadioValue('tempSensitivity');
    if (tempSensitivity === 'I am unusually cold') {
        findings.push("🥶 Cold intolerance - possible hypothyroidism");
    } else if (tempSensitivity === 'I am unusually hot') {
        findings.push("🥵 Heat intolerance - possible hyperthyroidism");
    }

    // Basal Body Temperature
    const bbt = parseFloat(getInputValue('basalBodyTemp'));
    if (!isNaN(bbt)) {
        if (bbt < 36.1) {
            findings.push(`🟡 Low basal body temperature: ${bbt}°C`);
            findings.push("   → May indicate hypothyroidism or slow metabolism");
        } else if (bbt > 37.2) {
            findings.push(`🟡 Elevated basal body temperature: ${bbt}°C`);
        } else {
            findings.push(`✅ Basal body temperature normal: ${bbt}°C`);
        }
    }

    // Thirst/ADH
    const increasedThirst = getRadioValue('increasedThirst');
    const aldosterone = parseFloat(getInputValue('aldosteroneLevel'));
    const vasopressin = parseFloat(getInputValue('vasopressinLevel'));
    
    if (increasedThirst === 'Yes') {
        findings.push("🥤 Increased thirst reported");
        recommendations.push("Evaluate for diabetes mellitus or diabetes insipidus");
    }

    // Hunger Regulation
    const increasedHunger = getRadioValue('increasedHunger');
    const leptin = parseFloat(getInputValue('leptinLevel'));
    const ghrelin = parseFloat(getInputValue('ghrelinLevel'));
    
    if (increasedHunger === 'Yes') {
        findings.push("🍽️ Increased hunger reported");
        recommendations.push("Evaluate blood glucose regulation");
    }

    // Skin Changes
    const skinChanges = getRadioValue('skinChanges');
    if (skinChanges === 'Yes') {
        findings.push("🧴 Skin texture changes noted");
        findings.push("   → May indicate thyroid or hormonal imbalance");
    }

    // Hair Changes
    const hairChanges = getRadioValue('hairChanges');
    const ferritin = parseFloat(getInputValue('ferritinLevel'));
    
    if (hairChanges === 'Yes') {
        findings.push("💇 Hair changes noted (thinning, texture change)");
        recommendations.push("Check ferritin and thyroid function");
    }
    
    if (!isNaN(ferritin)) {
        if (ferritin < 30) {
            findings.push(`🟡 Low ferritin: ${ferritin} ng/mL - may cause hair loss`);
            recommendations.push("Iron supplementation may help");
        }
    }

    // Menstrual Irregularities
    const menstrualIrregularities = getRadioValue('menstrualIrregularities');
    const cycleLength = getInputValue('cycleLength');
    const periodDuration = getInputValue('periodDuration');
    const menstrualPain = getInputValue('menstrualPainScale');
    
    if (menstrualIrregularities === 'Yes') {
        findings.push("🩸 Menstrual irregularities present");
        recommendations.push("Evaluate for PCOS, thyroid dysfunction, or hormonal imbalance");
    }

    // Mood Changes
    const endoMoodChanges = getRadioValue('endoMoodChanges');
    if (endoMoodChanges === 'Yes') {
        findings.push("😔 Mood changes noted");
        findings.push("   → May be related to thyroid or hormonal imbalance");
    }

    // Concentration
    const endoConcentration = getRadioValue('endoConcentration');
    if (endoConcentration === 'Yes') {
        findings.push("🧠 Difficulty concentrating");
        findings.push("   → Common in hypothyroidism or adrenal dysfunction");
    }

    // Generate output
    let output = "═══════════════════════════════════════════\n";
    output += "🦋 ENDOCRINE DIAGNOSIS REPORT\n";
    output += "═══════════════════════════════════════════\n\n";

    if (findings.length === 0) {
        output += "ℹ️ No significant findings detected.\n";
        output += "Complete the questionnaires for comprehensive assessment.\n";
    } else {
        output += "📋 FINDINGS:\n";
        output += "───────────────────────────────────────────\n";
        findings.forEach(f => output += f + "\n");
        
        if (recommendations.length > 0) {
            output += "\n💡 RECOMMENDATIONS:\n";
            output += "───────────────────────────────────────────\n";
            recommendations.forEach(r => output += "• " + r + "\n");
        }
        
        output += "\n⚠️ SEVERITY LEVEL: " + severity.toUpperCase() + "\n";
    }

    output += "\n───────────────────────────────────────────\n";
    output += "OSIRIS: This is not a medical diagnosis.\n";

    showDiagnosisResult('endocrine-diagnosis-result', output, severity);
}

// =====================================================
// NEURAL DIAGNOSIS
// =====================================================
function analyzeNeural() {
    let findings = [];
    let severity = 'low';
    let recommendations = [];

    // Headache Frequency
    const headacheFreq = getRadioValue('headacheFreq');
    if (headacheFreq && headacheFreq !== 'Never') {
        findings.push(`🤕 Headaches: ${headacheFreq}`);
        if (headacheFreq === 'Frequently') {
            severity = 'medium';
            recommendations.push("Consider headache diary and neurology consultation");
        }
    }

    // Dizziness
    const dizzinessFreq = getRadioValue('neuralDizzinessFreq');
    const dizzinessMovement = getRadioValue('neuralDizzinessMovement');
    const dizzinessDuration = getRadioValue('dizzinessDuration');
    const dizzinessType = getRadioValue('dizzinessType');
    
    if (dizzinessFreq && dizzinessFreq !== 'Rarely') {
        findings.push(`🌀 Dizziness: ${dizzinessFreq}`);
        if (dizzinessType === 'Spinning (vertigo)') {
            findings.push("   → Vertigo - inner ear or vestibular involvement");
            recommendations.push("ENT or vestibular evaluation recommended");
        }
        if (dizzinessType === 'Lightheadedness' || dizzinessType === 'Feeling faint') {
            findings.push("   → May indicate blood pressure or cardiac issue");
            recommendations.push("Check orthostatic blood pressure");
        }
    }

    // Numbness
    const numbnessFreq = getRadioValue('numbnessFreq');
    const numbnessLocation = getRadioValue('numbnessLocation');
    const numbnessDuration = getRadioValue('numbnessDuration');
    const numbnessTrigger = getRadioValue('numbnessTrigger');
    const numbnessSymptoms = getRadioValue('numbnessAdditionalSymptoms');
    
    if (numbnessFreq && numbnessFreq !== 'Rarely') {
        findings.push(`🖐️ Numbness: ${numbnessFreq}`);
        if (numbnessLocation) {
            findings.push(`   → Location: ${numbnessLocation}`);
        }
        if (numbnessSymptoms === 'Weakness') {
            findings.push("   → Associated weakness - nerve compression or neuropathy");
            severity = severity === 'high' ? 'high' : 'medium';
        }
        recommendations.push("Nerve conduction studies may be helpful");
    }

    // Tremors
    const tremorFreq = getRadioValue('tremorFreq');
    const tremorLocation = getRadioValue('tremorLocation');
    const tremorWhen = getRadioValue('tremorWhen');
    
    if (tremorFreq && tremorFreq !== 'Rarely') {
        findings.push(`🫨 Tremors: ${tremorFreq}`);
        if (tremorWhen === 'At rest') {
            findings.push("   → Rest tremor - consider Parkinson's disease evaluation");
            severity = 'medium';
            recommendations.push("Neurology consultation recommended");
        } else if (tremorWhen === 'During movement') {
            findings.push("   → Action tremor - may be essential tremor");
        }
    }

    // Seizures
    const seizureFreq = getRadioValue('seizureFreq');
    const seizureType = getRadioValue('seizureType');
    const seizureDuration = getRadioValue('seizureDuration');
    
    if (seizureFreq && seizureFreq !== 'Rarely') {
        findings.push(`⚡ Seizures: ${seizureFreq}`);
        severity = 'high';
        recommendations.push("URGENT: EEG and neurology evaluation needed");
        if (seizureDuration === 'More than 5 minutes') {
            findings.push("   → Prolonged seizures - status epilepticus risk");
            recommendations.push("CRITICAL: Emergency seizure management plan needed");
        }
    }

    // Memory Loss
    const memoryLossFreq = getRadioValue('memoryLossFreq');
    const memoryType = getRadioValue('memoryType');
    const memoryOnset = getRadioValue('memoryOnset');
    
    if (memoryLossFreq && memoryLossFreq !== 'Rarely') {
        findings.push(`🧠 Memory issues: ${memoryLossFreq}`);
        if (memoryType === 'Short-term memory') {
            findings.push("   → Short-term memory affected");
        } else if (memoryType === 'Both') {
            findings.push("   → Both short and long-term memory affected");
            severity = severity === 'high' ? 'high' : 'medium';
        }
        if (memoryOnset === 'Suddenly') {
            findings.push("   → Sudden onset - may indicate stroke or acute condition");
            severity = 'high';
            recommendations.push("URGENT: Evaluate for vascular causes");
        }
        recommendations.push("Cognitive assessment recommended");
    }

    // Speech Difficulties
    const speechDifficulty = getRadioValue('speechDifficulty');
    const speechType = getRadioValue('speechType');
    const speechOnset = getRadioValue('speechOnset');
    
    if (speechDifficulty === 'Yes') {
        findings.push("🗣️ Speech difficulties present");
        if (speechOnset === 'Suddenly') {
            findings.push("   → SUDDEN ONSET - possible stroke");
            severity = 'high';
            recommendations.push("URGENT: Stroke evaluation needed immediately");
        }
        if (speechType === 'Slurring of words') {
            findings.push("   → Slurred speech");
        } else if (speechType === 'Difficulty finding words') {
            findings.push("   → Word-finding difficulty (aphasia)");
        }
    }

    // Muscle Weakness
    const muscleWeakness = getRadioValue('neuralMuscleWeakness');
    const weaknessLocation = getRadioValue('weaknessIsolation');
    const weaknessWorseActivity = getRadioValue('weaknessWorseActivity');
    
    if (muscleWeakness === 'Yes') {
        findings.push("💪 Muscle weakness reported");
        if (weaknessLocation) {
            findings.push(`   → Affected area: ${weaknessLocation}`);
        }
        if (weaknessWorseActivity === 'Yes') {
            findings.push("   → Worsens with activity - possible myasthenia gravis");
            recommendations.push("Neuromuscular evaluation recommended");
        }
    }

    // Vision Changes
    const visionChanges = getRadioValue('neuralVisionChanges');
    const visionType = getRadioValue('visionType');
    const visionOnset = getRadioValue('visionOnset');
    
    if (visionChanges === 'Yes') {
        findings.push("👁️ Vision changes reported");
        if (visionOnset === 'Suddenly') {
            findings.push("   → SUDDEN ONSET - urgent evaluation needed");
            severity = 'high';
            recommendations.push("URGENT: Rule out stroke, optic neuritis, or retinal issues");
        }
        if (visionType === 'Double vision') {
            findings.push("   → Double vision - cranial nerve involvement possible");
        } else if (visionType === 'Partial blindness') {
            findings.push("   → Partial vision loss");
            severity = 'high';
        }
    }

    // Balance Issues
    const balanceIssues = getRadioValue('balanceIssues');
    const balanceWhen = getRadioValue('balanceWhen');
    const balanceFalls = getRadioValue('balanceFalls');
    
    if (balanceIssues === 'Yes') {
        findings.push("🧍 Balance issues present");
        if (balanceFalls === 'Yes') {
            findings.push("   → History of falls - fall risk assessment needed");
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("Physical therapy and fall prevention strategies");
        }
    }

    // Light/Sound Sensitivity
    const sensitivity = getRadioValue('lightSoundSensitivity');
    const sensitivityType = getRadioValue('sensitivityType');
    
    if (sensitivity === 'Yes') {
        findings.push("⚡ Sensory sensitivity present");
        if (sensitivityType === 'Both') {
            findings.push("   → Both light and sound - possible migraine condition");
        }
    }

    // Generate output
    let output = "═══════════════════════════════════════════\n";
    output += "🧠 NEURAL DIAGNOSIS REPORT\n";
    output += "═══════════════════════════════════════════\n\n";

    if (findings.length === 0) {
        output += "ℹ️ No significant findings detected.\n";
        output += "Complete the questionnaires for comprehensive assessment.\n";
    } else {
        output += "📋 FINDINGS:\n";
        output += "───────────────────────────────────────────\n";
        findings.forEach(f => output += f + "\n");
        
        if (recommendations.length > 0) {
            output += "\n💡 RECOMMENDATIONS:\n";
            output += "───────────────────────────────────────────\n";
            recommendations.forEach(r => output += "• " + r + "\n");
        }
        
        output += "\n⚠️ SEVERITY LEVEL: " + severity.toUpperCase() + "\n";
        
        if (severity === 'high') {
            output += "\n🚨 IMPORTANT: Some neurological symptoms require urgent evaluation.\n";
        }
    }

    output += "\n───────────────────────────────────────────\n";
    output += "OSIRIS: This is not a medical diagnosis.\n";

    showDiagnosisResult('neural-diagnosis-result', output, severity);
}

// =====================================================
// GASTROINTESTINAL DIAGNOSIS
// =====================================================
function analyzeGastrointestinal() {
    let findings = [];
    let severity = 'low';
    let recommendations = [];

    // Abdominal Pain
    const abdominalPainFreq = getRadioValue('abdominalPainFreq');
    const painType = getRadioValue('abdominalPainType');
    const painLocation = getRadioValue('abdominalPainLocation');
    const painTrigger = getRadioValue('abdominalPainTrigger');
    
    if (abdominalPainFreq && abdominalPainFreq !== 'Rarely') {
        findings.push(`🤢 Abdominal pain: ${abdominalPainFreq}`);
        if (painLocation) {
            findings.push(`   → Location: ${painLocation}`);
        }
        if (painType === 'Sharp') {
            findings.push("   → Sharp pain - may indicate acute condition");
            severity = severity === 'high' ? 'high' : 'medium';
        }
        if (painTrigger === 'After Eating') {
            findings.push("   → After eating - possible gallbladder, peptic ulcer, or IBS");
        }
    }

    // Nausea/Vomiting
    const nauseaFreq = getRadioValue('nauseaFreq');
    const vomiting = getRadioValue('recentVomiting');
    const nauseaTrigger = getRadioValue('nauseaTrigger');
    
    if (nauseaFreq && nauseaFreq !== 'Rarely') {
        findings.push(`🤮 Nausea: ${nauseaFreq}`);
        if (vomiting === 'Yes') {
            findings.push("   → With vomiting");
            recommendations.push("Monitor hydration status");
        }
    }

    // Diarrhea
    const diarrheaFreq = getRadioValue('diarrheaFreq');
    const bloodInStoolDiarrhea = getRadioValue('bloodInStoolDiarrhea');
    const stoolConsistency = getRadioValue('stoolConsistency');
    
    if (diarrheaFreq && diarrheaFreq !== 'Rarely') {
        findings.push(`💧 Diarrhea: ${diarrheaFreq}`);
        if (bloodInStoolDiarrhea === 'Yes') {
            findings.push("   → 🔴 BLOOD IN STOOL");
            severity = 'high';
            recommendations.push("URGENT: Colonoscopy or GI evaluation needed");
        }
        if (stoolConsistency === 'Mucous-like') {
            findings.push("   → Mucus present - possible inflammatory bowel disease");
            recommendations.push("Consider stool studies and GI referral");
        }
    }

    // Constipation
    const constipationFreq = getRadioValue('constipationFreq');
    const straining = getRadioValue('straining');
    const constipationConsistency = getRadioValue('constipationConsistency');
    
    if (constipationFreq && constipationFreq !== 'Rarely') {
        findings.push(`🧱 Constipation: ${constipationFreq}`);
        if (straining === 'Yes') {
            findings.push("   → With straining");
            recommendations.push("Increase fiber, hydration, and consider stool softeners");
        }
    }

    // Heartburn
    const heartburnFreq = getRadioValue('heartburnFreq');
    const heartburnAfterEating = getRadioValue('heartburnAfterEating');
    const heartburnTime = getRadioValue('heartburnTime');
    
    if (heartburnFreq && heartburnFreq !== 'Rarely') {
        findings.push(`🔥 Heartburn: ${heartburnFreq}`);
        if (heartburnTime === 'Night') {
            findings.push("   → Worse at night - elevate head of bed, avoid late meals");
        }
        if (heartburnFreq === 'Frequently' || heartburnFreq === 'Constantly') {
            recommendations.push("Consider GERD evaluation and PPI therapy");
        }
    }

    // Bloating
    const bloatingFreq = getRadioValue('bloatingFreq');
    const bloatingTrigger = getRadioValue('bloatingTrigger');
    
    if (bloatingFreq && bloatingFreq !== 'Rarely') {
        findings.push(`🎈 Bloating: ${bloatingFreq}`);
        if (bloatingTrigger === 'After Eating') {
            findings.push("   → After eating - possible food intolerance or SIBO");
            recommendations.push("Consider elimination diet or breath testing");
        }
    }

    // Changes in Appetite
    const appetiteChange = getRadioValue('appetiteChange');
    const appetiteDuration = getRadioValue('appetiteDuration');
    
    if (appetiteChange && appetiteChange !== 'No Change') {
        findings.push(`🍽️ Appetite change: ${appetiteChange}`);
        if (appetiteChange === 'Decreased' && appetiteDuration === 'Ongoing') {
            findings.push("   → Prolonged decreased appetite");
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("Evaluate for underlying cause");
        }
    }

    // Blood in Stool
    const bloodInStool = getRadioValue('bloodInStool');
    const bloodFrequency = getRadioValue('bloodStoolFrequency');
    const bloodColor = getRadioValue('bloodStoolColor');
    
    if (bloodInStool === 'Yes') {
        findings.push("🩸 Blood in stool reported");
        severity = 'high';
        if (bloodColor === 'Dark Red' || bloodColor === 'Black or Tarry') {
            findings.push("   → Dark/tarry stool - possible upper GI bleeding");
            recommendations.push("URGENT: Upper endoscopy may be needed");
        } else if (bloodColor === 'Bright Red') {
            findings.push("   → Bright red - likely lower GI source (hemorrhoids, fissure, or colon)");
            recommendations.push("Colonoscopy evaluation recommended");
        }
    }

    // Indigestion
    const indigestionFreq = getRadioValue('indigestionFreq');
    const indigestionTrigger = getRadioValue('indigestionTrigger');
    
    if (indigestionFreq && indigestionFreq !== 'Rarely') {
        findings.push(`😖 Indigestion: ${indigestionFreq}`);
        if (indigestionTrigger === 'Spicy Foods' || indigestionTrigger === 'Fatty Foods') {
            findings.push(`   → Triggered by ${indigestionTrigger}`);
            recommendations.push("Dietary modifications recommended");
        }
    }

    // Difficulty Swallowing
    const swallowingDifficulty = getRadioValue('giSwallowingDifficulty');
    const swallowingType = getRadioValue('swallowingType');
    const swallowingDuration = getRadioValue('swallowingDuration');
    
    if (swallowingDifficulty === 'Yes') {
        findings.push("🫗 Difficulty swallowing (dysphagia)");
        severity = severity === 'high' ? 'high' : 'medium';
        if (swallowingType === 'Solids') {
            findings.push("   → Worse with solids - possible mechanical obstruction");
        } else if (swallowingType === 'Both') {
            findings.push("   → Both solids and liquids - motility disorder possible");
        }
        recommendations.push("Upper endoscopy or barium swallow recommended");
    }

    // Generate output
    let output = "═══════════════════════════════════════════\n";
    output += "🫃 GASTROINTESTINAL DIAGNOSIS REPORT\n";
    output += "═══════════════════════════════════════════\n\n";

    if (findings.length === 0) {
        output += "ℹ️ No significant findings detected.\n";
        output += "Complete the questionnaires for comprehensive assessment.\n";
    } else {
        output += "📋 FINDINGS:\n";
        output += "───────────────────────────────────────────\n";
        findings.forEach(f => output += f + "\n");
        
        if (recommendations.length > 0) {
            output += "\n💡 RECOMMENDATIONS:\n";
            output += "───────────────────────────────────────────\n";
            recommendations.forEach(r => output += "• " + r + "\n");
        }
        
        output += "\n⚠️ SEVERITY LEVEL: " + severity.toUpperCase() + "\n";
    }

    output += "\n───────────────────────────────────────────\n";
    output += "OSIRIS: This is not a medical diagnosis.\n";

    showDiagnosisResult('gastrointestinal-diagnosis-result', output, severity);
}

// =====================================================
// PSYCHOLOGICAL DIAGNOSIS
// =====================================================
function analyzePsychological() {
    let findings = [];
    let severity = 'low';
    let recommendations = [];

    // Substance Use
    const substanceUse = getRadioValue('substanceUseYes');
    const substanceFreq = getRadioValue('substanceFrequency');
    const substanceImpact = getRadioValue('substanceImpact');
    
    if (substanceUse === 'Yes' || substanceFreq) {
        findings.push("⚠️ Substance use reported");
        if (substanceFreq === 'Daily' || substanceFreq === 'Many times per day') {
            findings.push("   → High frequency use pattern");
            severity = 'medium';
        }
        if (substanceImpact === 'Yes') {
            findings.push("   → Affecting daily life/relationships");
            severity = 'high';
            recommendations.push("Consider substance use counseling or treatment");
        }
    }

    // Mood and Emotional Well-being
    const generalMood = getRadioValue('generalMood');
    const moodSymptoms = document.querySelectorAll('input[name="moodSymptoms"]:checked');
    
    if (generalMood) {
        findings.push(`😊 General mood: ${generalMood}`);
        if (generalMood === 'Sad' || generalMood === 'Anxious') {
            severity = severity === 'high' ? 'high' : 'medium';
        }
    }
    
    if (moodSymptoms.length > 0) {
        const symptoms = Array.from(moodSymptoms).map(s => s.value);
        findings.push(`   → Symptoms: ${symptoms.join(', ')}`);
        if (symptoms.includes('Self-harm thoughts')) {
            findings.push("   → 🔴 SELF-HARM THOUGHTS REPORTED");
            severity = 'high';
            recommendations.push("URGENT: Mental health crisis support recommended");
            recommendations.push("National Suicide Prevention Lifeline: 988 (US)");
        }
    }

    // Sleep Patterns
    const sleepHours = getRadioValue('sleepHours');
    const sleepQuality = getRadioValue('sleepQualityPsych');
    const fallAsleep = getRadioValue('fallAsleep');
    const wakeOften = getRadioValue('wakeOften');
    
    if (sleepHours) {
        findings.push(`😴 Sleep duration: ${sleepHours}`);
        if (sleepHours === 'Less than 4 hours' || sleepHours === '4-6 hours') {
            findings.push("   → Insufficient sleep");
            recommendations.push("Sleep hygiene improvements recommended");
        }
    }
    if (sleepQuality === 'Poor' || sleepQuality === 'Very Poor') {
        findings.push("   → Poor sleep quality");
        severity = severity === 'high' ? 'high' : 'medium';
    }
    if (fallAsleep === 'Often') {
        findings.push("   → Difficulty falling asleep (insomnia)");
    }

    // Stress Levels
    const stressFreq = getRadioValue('stressFrequency');
    const stressIntensity = getRadioValue('stressIntensity');
    const stressTrigger = getRadioValue('stressTrigger');
    
    if (stressFreq) {
        findings.push(`😰 Stress frequency: ${stressFreq}`);
        if (stressIntensity === 'Severe' || stressIntensity === 'Overwhelming') {
            findings.push(`   → ${stressIntensity} intensity`);
            severity = severity === 'high' ? 'high' : 'medium';
            recommendations.push("Stress management techniques and therapy recommended");
        }
    }

    // Cognitive Function
    const shortTermMemory = getRadioValue('shortTermMemoryIssues');
    const concentration = getRadioValue('concentrationDifficulty');
    const cognitiveFog = getRadioValue('cognitiveFog');
    
    if (shortTermMemory === 'Yes, frequently') {
        findings.push("🧠 Short-term memory issues");
    }
    if (concentration === 'Yes, frequently') {
        findings.push("🧠 Concentration difficulties");
    }
    if (cognitiveFog === 'Yes, frequently') {
        findings.push("🧠 Brain fog reported");
        recommendations.push("Rule out thyroid, sleep disorders, and depression");
    }

    // Social Impact
    const socialImpact = getRadioValue('socialImpact');
    const workImpact = getRadioValue('workImpact');
    const feelSupported = getRadioValue('feelSupported');
    
    if (socialImpact === 'Significantly') {
        findings.push("👥 Significant impact on social life");
        severity = severity === 'high' ? 'high' : 'medium';
    }
    if (workImpact === 'Significantly') {
        findings.push("💼 Significant impact on work/school");
        severity = severity === 'high' ? 'high' : 'medium';
    }
    if (feelSupported === 'Not supported') {
        findings.push("🤝 Lacks social support");
        recommendations.push("Consider support groups or therapy");
    }

    // Generate output
    let output = "═══════════════════════════════════════════\n";
    output += "🧠 PSYCHOLOGICAL EVALUATION REPORT\n";
    output += "═══════════════════════════════════════════\n\n";

    if (findings.length === 0) {
        output += "ℹ️ No significant findings detected.\n";
        output += "Complete the questionnaires for comprehensive assessment.\n";
    } else {
        output += "📋 FINDINGS:\n";
        output += "───────────────────────────────────────────\n";
        findings.forEach(f => output += f + "\n");
        
        if (recommendations.length > 0) {
            output += "\n💡 RECOMMENDATIONS:\n";
            output += "───────────────────────────────────────────\n";
            recommendations.forEach(r => output += "• " + r + "\n");
        }
        
        output += "\n⚠️ SEVERITY LEVEL: " + severity.toUpperCase() + "\n";
    }

    output += "\n───────────────────────────────────────────\n";
    output += "OSIRIS: This is a screening tool, not a diagnosis.\n";
    output += "Please consult a mental health professional.\n";

    showDiagnosisResult('psychological-diagnosis-result', output, severity);
}

// =====================================================
// PSYCHIATRIC DIAGNOSIS
// =====================================================
function analyzePsychiatric() {
    let findings = [];
    let severity = 'low';
    let recommendations = [];

    // Mood and Emotional Regulation
    const prolongedSadness = getRadioValue('prolongedSadness');
    const emotionControl = getRadioValue('emotionControl');
    const moodIntensity = getRadioValue('psychiatricMoodIntensity');
    
    if (prolongedSadness === 'Frequently') {
        findings.push("😢 Prolonged periods of sadness/anxiety/irritability");
        severity = 'medium';
    }
    if (emotionControl === 'Frequently') {
        findings.push("😤 Difficulty controlling emotions");
        severity = severity === 'high' ? 'high' : 'medium';
    }
    if (moodIntensity === 'Severe' || moodIntensity === 'Uncontrollable') {
        findings.push(`   → Mood intensity: ${moodIntensity}`);
        severity = 'high';
    }

    // Trauma History
    const traumaHistory = getRadioValue('traumaHistory');
    const traumaImpact = getRadioValue('traumaImpact');
    const flashbacks = getRadioValue('flashbacks');
    const traumaAvoidance = getRadioValue('traumaAvoidance');
    
    if (traumaHistory === 'Yes') {
        findings.push("🔴 History of trauma");
        if (traumaImpact === 'Yes, significantly') {
            findings.push("   → Significantly impacts daily life");
            severity = 'high';
        }
        if (flashbacks === 'Yes, frequently') {
            findings.push("   → Experiences flashbacks/nightmares");
            recommendations.push("PTSD evaluation and trauma-focused therapy recommended");
        }
        if (traumaAvoidance === 'Yes') {
            findings.push("   → Avoidance behaviors present");
        }
    }

    // Perception and Reality Testing
    const unusualPerceptions = getRadioValue('unusualPerceptions');
    const unusualBeliefs = getRadioValue('unusualBeliefs');
    
    if (unusualPerceptions === 'Yes') {
        findings.push("👁️ Unusual perceptions reported (hallucinations)");
        severity = 'high';
        recommendations.push("URGENT: Psychiatric evaluation recommended");
    }
    if (unusualBeliefs === 'Yes') {
        findings.push("💭 Unusual beliefs reported");
        severity = 'high';
    }

    // Impulse Control
    const impulseControl = getRadioValue('impulseControl');
    const riskyBehavior = getRadioValue('riskyBehavior');
    
    if (impulseControl === 'Yes') {
        findings.push("⚡ Impulse control difficulties");
        severity = severity === 'high' ? 'high' : 'medium';
    }
    if (riskyBehavior === 'Yes') {
        findings.push("⚠️ Engages in risky/harmful behaviors");
        severity = 'high';
        recommendations.push("Safety planning and behavioral intervention needed");
    }

    // Anxiety Disorders
    const excessiveAnxiety = getRadioValue('excessiveAnxiety');
    const anxietyFreqPsych = getRadioValue('anxietyFreqPsych');
    const anxietyPhysical = getRadioValue('anxietyPhysical');
    const anxietyAvoidance = getRadioValue('anxietyAvoidance');
    
    if (excessiveAnxiety === 'Yes') {
        findings.push("😰 Excessive anxiety/worry present");
        if (anxietyFreqPsych === 'Frequently' || anxietyFreqPsych === 'Constantly') {
            findings.push(`   → Frequency: ${anxietyFreqPsych}`);
            severity = severity === 'high' ? 'high' : 'medium';
        }
        if (anxietyPhysical === 'Yes') {
            findings.push("   → Physical symptoms (racing heart, sweating)");
        }
        if (anxietyAvoidance === 'Yes') {
            findings.push("   → Avoidance behaviors");
        }
        recommendations.push("Consider CBT and/or medication for anxiety");
    }

    // Psychotic Disorders
    const hallucinations = getRadioValue('hallucinationsDelusions');
    const realityDifficulty = getRadioValue('realityDifficulty');
    
    if (hallucinations === 'Yes') {
        findings.push("🔴 History of hallucinations/delusions");
        severity = 'high';
        recommendations.push("URGENT: Psychiatric evaluation essential");
    }
    if (realityDifficulty === 'Yes') {
        findings.push("🔴 Difficulty distinguishing reality");
        severity = 'high';
    }

    // Self-Harm
    const selfHarm = getRadioValue('selfHarmHistory');
    const selfHarmFreq = getRadioValue('selfHarmFreq');
    const suicidalThoughts = getRadioValue('suicidalThoughts');
    const suicidalPlan = getRadioValue('suicidalPlan');
    
    if (selfHarm === 'Yes') {
        findings.push("🔴 History of self-harm");
        severity = 'high';
        recommendations.push("Safety assessment and mental health support needed");
    }
    if (suicidalThoughts === 'Yes, frequently' || suicidalThoughts === 'Yes, occasionally') {
        findings.push("🔴 CURRENT THOUGHTS OF SELF-HARM/SUICIDE");
        severity = 'high';
        recommendations.push("CRISIS: Immediate mental health intervention needed");
        recommendations.push("National Suicide Prevention Lifeline: 988 (US)");
        recommendations.push("Crisis Text Line: Text HOME to 741741");
    }
    if (suicidalPlan === 'Yes') {
        findings.push("🔴 HAS A SPECIFIC PLAN");
        severity = 'high';
        recommendations.push("EMERGENCY: Contact emergency services or go to ER immediately");
    }

    // Behavioral Issues
    const behavioralIssues = getRadioValue('behavioralDifficulties');
    const behavioralConflict = getRadioValue('behavioralConflict');
    
    if (behavioralIssues === 'Yes') {
        findings.push("⚠️ Behavioral difficulties present");
        if (behavioralConflict === 'Yes') {
            findings.push("   → Frequent conflicts with others");
        }
    }

    // Generate output
    let output = "═══════════════════════════════════════════\n";
    output += "🧠 PSYCHIATRIC EVALUATION REPORT\n";
    output += "═══════════════════════════════════════════\n\n";

    if (findings.length === 0) {
        output += "ℹ️ No significant findings detected.\n";
        output += "Complete the questionnaires for comprehensive assessment.\n";
    } else {
        output += "📋 FINDINGS:\n";
        output += "───────────────────────────────────────────\n";
        findings.forEach(f => output += f + "\n");
        
        if (recommendations.length > 0) {
            output += "\n💡 RECOMMENDATIONS:\n";
            output += "───────────────────────────────────────────\n";
            recommendations.forEach(r => output += "• " + r + "\n");
        }
        
        output += "\n⚠️ SEVERITY LEVEL: " + severity.toUpperCase() + "\n";
        
        if (severity === 'high') {
            output += "\n🚨 IMPORTANT: Some findings require professional psychiatric evaluation.\n";
            output += "If you are in crisis, please reach out for help immediately.\n";
        }
    }

    output += "\n───────────────────────────────────────────\n";
    output += "OSIRIS: This is a screening tool, not a diagnosis.\n";
    output += "Please consult a mental health professional.\n";

    showDiagnosisResult('psychiatric-diagnosis-result', output, severity);
}

// =====================================================
// MUSCULOSKELETAL DIAGNOSIS
// =====================================================
function analyzeMusculoskeletal() {
    let findings = [];
    let severity = 'low';
    let recommendations = [];

    // Joint Pain
    const jointPain = getRadioValue('hasJointPain');
    const jointPainScale = getInputValue('jointPainScale');
    const jointPainDuration = getRadioValue('jointPainDuration');
    const jointPainFreq = getRadioValue('jointPainFreq');
    const jointSwelling = getRadioValue('jointSwellingStiffness');
    
    if (jointPain === 'Yes') {
        findings.push("🦴 Joint pain present");
        if (jointPainScale) {
            const scale = parseInt(jointPainScale);
            if (scale >= 7) {
                findings.push(`   → Severity: ${scale}/10 (severe)`);
                severity = 'high';
            } else if (scale >= 4) {
                findings.push(`   → Severity: ${scale}/10 (moderate)`);
                severity = 'medium';
            } else {
                findings.push(`   → Severity: ${scale}/10 (mild)`);
            }
        }
        if (jointPainDuration === 'More than 6 months') {
            findings.push("   → Chronic (>6 months)");
            recommendations.push("Rheumatology evaluation recommended");
        }
        if (jointSwelling === 'Yes') {
            findings.push("   → With swelling/stiffness - inflammatory arthritis possible");
            recommendations.push("Consider inflammatory markers (ESR, CRP, RF, anti-CCP)");
        }
    }

    // Muscle Weakness
    const muscleWeakness = getRadioValue('hasMuscleWeakness');
    const weaknessSeverity = getInputValue('muscleWeaknessSeverity');
    const weaknessDuration = getRadioValue('weaknessDuration');
    const weaknessFreq = getRadioValue('weaknessFreq');
    
    if (muscleWeakness === 'Yes') {
        findings.push("💪 Muscle weakness reported");
        if (weaknessSeverity) {
            const scale = parseInt(weaknessSeverity);
            if (scale >= 7) {
                findings.push(`   → Severity: ${scale}/10`);
                severity = severity === 'high' ? 'high' : 'medium';
            }
        }
        if (weaknessFreq === 'Constantly') {
            findings.push("   → Constant weakness");
            recommendations.push("EMG/nerve conduction studies may be needed");
        }
    }

    // Swelling
    const hasSwelling = getRadioValue('hasSwelling');
    const swellingSeverity = getInputValue('swellingSeverity');
    const swellingSymptoms = getRadioValue('swellingSymptoms');
    
    if (hasSwelling === 'Yes') {
        findings.push("🦵 Joint/muscle swelling present");
        if (swellingSymptoms === 'Pain' || swellingSymptoms === 'Redness') {
            findings.push(`   → With ${swellingSymptoms.toLowerCase()}`);
            if (swellingSymptoms === 'Redness') {
                findings.push("   → Possible infection or gout");
                severity = severity === 'high' ? 'high' : 'medium';
                recommendations.push("Rule out septic arthritis or crystalline arthritis");
            }
        }
    }

    // Stiffness
    const hasStiffness = getRadioValue('hasStiffness');
    const stiffnessDuration = getInputValue('stiffnessDuration');
    const stiffnessTime = getRadioValue('stiffnessTime');
    
    if (hasStiffness === 'Yes') {
        findings.push("🔒 Joint stiffness present");
        if (stiffnessTime === 'Morning') {
            findings.push("   → Morning stiffness");
            if (stiffnessDuration && stiffnessDuration !== '5 minutes') {
                findings.push(`   → Duration: ${stiffnessDuration}`);
                if (stiffnessDuration === 'More than 3 hours' || stiffnessDuration === '1 hour') {
                    findings.push("   → Prolonged morning stiffness suggests inflammatory arthritis");
                    recommendations.push("Rheumatoid arthritis screening recommended");
                }
            }
        }
    }

    // Limited Range of Motion
    const limitedMotion = getRadioValue('hasLimitedMotion');
    const motionSeverity = getInputValue('limitedMotionSeverity');
    const motionFreq = getRadioValue('limitedMotionFreq');
    
    if (limitedMotion === 'Yes') {
        findings.push("🔄 Limited range of motion");
        if (motionFreq === 'Daily' || motionFreq === 'Constantly') {
            findings.push("   → Persistent limitation");
            recommendations.push("Physical therapy evaluation recommended");
        }
    }

    // Bone Pain
    const bonePain = getRadioValue('hasBonePain');
    const bonePainType = getRadioValue('bonePainType');
    const bonePainSeverity = getInputValue('bonePainSeverity');
    
    if (bonePain === 'Yes') {
        findings.push("🦴 Bone pain present");
        if (bonePainType === 'Throbbing' || bonePainType === 'Aching') {
            findings.push(`   → ${bonePainType} character`);
        }
        if (bonePainSeverity) {
            const scale = parseInt(bonePainSeverity);
            if (scale >= 7) {
                findings.push(`   → Severe: ${scale}/10`);
                severity = 'high';
                recommendations.push("X-ray or bone scan may be needed");
            }
        }
    }

    // Previous Injuries
    const previousInjury = getRadioValue('hasPreviousInjury');
    const injuryType = getInputValue('injuryType');
    const injuryRecovery = getRadioValue('injuryRecovery');
    
    if (previousInjury === 'Yes') {
        findings.push("🏥 History of musculoskeletal injury");
        if (injuryRecovery === 'No' || injuryRecovery === 'Partially') {
            findings.push("   → Incomplete recovery");
            recommendations.push("Physical therapy or orthopedic follow-up recommended");
        }
    }

    // Other Symptoms
    const otherSymptoms = getInputValue('otherSymptomText');
    const otherSeverity = getInputValue('otherSymptomSeverity');
    
    if (otherSymptoms && otherSymptoms.trim()) {
        findings.push(`📝 Other symptoms: ${otherSymptoms}`);
    }

    // Generate output
    let output = "═══════════════════════════════════════════\n";
    output += "🦴 MUSCULOSKELETAL DIAGNOSIS REPORT\n";
    output += "═══════════════════════════════════════════\n\n";

    if (findings.length === 0) {
        output += "ℹ️ No significant findings detected.\n";
        output += "Complete the questionnaires for comprehensive assessment.\n";
    } else {
        output += "📋 FINDINGS:\n";
        output += "───────────────────────────────────────────\n";
        findings.forEach(f => output += f + "\n");
        
        if (recommendations.length > 0) {
            output += "\n💡 RECOMMENDATIONS:\n";
            output += "───────────────────────────────────────────\n";
            recommendations.forEach(r => output += "• " + r + "\n");
        }
        
        output += "\n⚠️ SEVERITY LEVEL: " + severity.toUpperCase() + "\n";
    }

    output += "\n───────────────────────────────────────────\n";
    output += "OSIRIS: This is not a medical diagnosis.\n";

    showDiagnosisResult('musculoskeletal-diagnosis-result', output, severity);
}

// Scroll to baseline function
function scrollToBaseline() {
    const baseline = document.getElementById('baseline-health-assessment');
    if (baseline) {
        baseline.scrollIntoView({ behavior: 'smooth' });
    }
}

console.log('OSIRIS Diagnostic System loaded successfully');
