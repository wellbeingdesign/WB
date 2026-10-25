/* OSIRIS BOTANICA-only monographs for gallery plants (including botanica-only extras).
   Used by the herb popup. NOT read by OSIRIS_listHerbLibraryRecords()
   Treatment / Prevention selection. Do not copy these objects into
   OSIRIS_HERBAL_LIBRARY. */
(function (root) {
  "use strict";
  root.OSIRIS_BOTANICA = 
{
  "hawthorn": {
    "botanicaOnly": false,
    "commonName": "Hawthorn",
    "botanicalName": "Crataegus spp.",
    "botanicalProfile": "Crataegus spp. (Rosaceae). European medicinal herbal substance is typically the dried leaf and flower (Crataegi folium cum flore). Hawthorn berry is a separate herbal substance and is not treated as therapeutically equivalent to leaf-and-flower preparations.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "leaf and flower (folium cum flore)",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "1–2 g comminuted herbal substance in 150 ml boiling water as a herbal infusion, up to 3–4 times daily (maximum daily herbal substance in cited posology tables 6–6.8 g depending on monograph revision)",
        "parametersVerified": true,
        "sourceNote": "EMA/HMPC European Union herbal monograph on Crataegus spp., folium cum flore (traditional use posology for herbal tea)",
        "safetyLimitations": "Not a substitute for antihypertensive or heart-failure medicines. Seek medical assessment for chest pain, syncope, or unexplained palpitations. Leaf-and-flower tea is not equivalent to standardised berry or dry-extract products.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      },
      {
        "type": "Standardised extract",
        "plantPart": "leaf and flower (and, in separate products, berry)",
        "materialState": "dry or liquid extract as specified by the manufacturer",
        "solvent": "extraction solvents in EU monographs include methanol 70% (V/V) or ethanol 45–70% (V/V) for named dry extracts; Drug Extract Ratio (DER) examples include 4–7:1 — product-specific",
        "parametersVerified": true,
        "form": "authorised / registered dry or liquid extract (not a kitchen preparation)",
        "ratio": "Not a household ratio; use only the labelled finished extract",
        "sourceNote": "EMA/HMPC hawthorn leaf and flower monograph lists several dry and liquid extracts with product-specific single doses",
        "safetyLimitations": "Different extracts, solvents and DERs are not interchangeable with the herbal tea or with each other. Not equivalent to Angiotensin-Converting Enzyme (ACE) inhibitors, Angiotensin II Receptor Blockers (ARBs) or Calcium Channel Blockers (CCBs).",
        "route": "oral, as labelled"
      }
    ],
    "galleryKey": "hawthorn",
    "id": "hawthorn",
    "conditions": [
      "sustained hypertension",
      "cardiovascular load"
    ],
    "mechanisms": [
      "Overlapping physiological effect on vascular tone and cardiac workload; not ACE / ARB / CCB pharmacology."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional use together with limited clinical evidence. Traditional use, limited clinical evidence and established clinical evidence are not equivalent. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "complementary therapeutic target (overlapping effect on vascular tone / arterial load)",
    "correspondingPharmaClasses": [
      "acei",
      "arb",
      "ccb",
      "thiazide"
    ],
    "medicineInteractions": [
      {
        "note": "Overlapping hypotensive physiological effect with antihypertensives — not additive-equivalence, but concurrent Blood Pressure (BP) lowering may increase."
      },
      {
        "note": "Possible rate / inotrope interaction context — clinician review; not a digoxin substitute."
      }
    ],
    "monitoring": [
      "Blood Pressure (BP) series",
      "symptoms of light-headedness"
    ],
    "contraindications": [
      "Symptomatic hypotension",
      "Pregnancy unless a clinician explicitly reviews",
      "Unsupervised combination with potent hypotensive regimens"
    ],
    "traditionalUses": "Traditionally used as a cardiotonic and circulatory support plant.",
    "activeConstituents": [
      "oligomeric procyanidins",
      "flavonoids (vitexin-related)"
    ],
    "osirisRelevance": "If a patient reports hawthorn (leaf-and-flower or berry products), interpret Blood Pressure (BP) and cardiovascular symptoms in that context: oligomeric procyanidins and vitexin-related flavonoids have overlapping effects on vascular tone and cardiac workload, not Angiotensin-Converting Enzyme (ACE) inhibitor, Angiotensin II Receptor Blocker (ARB) or Calcium Channel Blocker (CCB) pharmacology. Concurrent antihypertensives may increase hypotensive effect (light-headedness); rate/inotrope overlap with cardiac glycosides needs clinician review. Human evidence is limited and traditional; it does not replace indicated cardiovascular medicines. Useful OSIRIS series: BP, heart rate, and symptoms of hypotension."
  },
  "garlic": {
    "botanicaOnly": false,
    "commonName": "Garlic",
    "botanicalName": "Allium sativum",
    "botanicalProfile": "Allium sativum L. (Amaryllidaceae). Medicinal material is the bulb (Allii sativi bulbus). Fresh culinary clove, dried powder, oil macerate and aged extracts are different preparations and are not equivalent.",
    "preparations": [
      {
        "type": "Culinary bulb / powdered herbal substance",
        "plantPart": "bulb",
        "materialState": "fresh clove or dried powdered bulb as in authorised products",
        "parametersVerified": false,
        "form": "food use or powdered herbal substance in finished products",
        "sourceNote": "EMA/HMPC Allii sativi bulbus: powdered herbal substance and other extracts exist; kitchen clove amounts are not a verified medicinal dose",
        "safetyLimitations": "Culinary use is not a standardised antihypertensive or antiplatelet regimen. May increase bleeding tendency with anticoagulants. Stop before surgery on clinical advice. Not equivalent to antihypertensives.",
        "route": "oral"
      },
      {
        "type": "Aged extract / standardised products",
        "plantPart": "bulb",
        "materialState": "aged or otherwise processed extract as labelled",
        "parametersVerified": false,
        "form": "finished aged-garlic or standardised products only",
        "sourceNote": "Aged extracts are industrial; no household ageing recipe is provided",
        "safetyLimitations": "Do not improvise aged-garlic extraction. Product hyperforin-style standardisation does not apply; follow labelled products only.",
        "route": "oral, as labelled"
      }
    ],
    "galleryKey": "garlic",
    "id": "garlic",
    "conditions": [
      "sustained hypertension",
      "cardiometabolic vascular load"
    ],
    "mechanisms": [
      "Supportive intervention with overlapping effects on vascular tone and platelet reactivity; not an ACE inhibitor, ARB, CCB or antiplatelet drug."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional use together with limited clinical evidence. Traditional use, limited clinical evidence and established clinical evidence are not equivalent. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "functional analogue for vascular-tone support — not pharmacologically equivalent",
    "correspondingPharmaClasses": [
      "acei",
      "arb",
      "ccb",
      "thiazide"
    ],
    "medicineInteractions": [
      {
        "note": "May increase hypotensive physiological effect when combined with antihypertensives."
      },
      {
        "note": "May increase bleeding tendency with anticoagulants / antiplatelets — overlapping effect, not therapeutic replacement."
      }
    ],
    "monitoring": [
      "Blood Pressure (BP)",
      "bleeding / bruising"
    ],
    "contraindications": [
      "Bleeding tendency / periprocedural periods",
      "Symptomatic hypotension"
    ],
    "traditionalUses": "Culinary and traditional circulatory / antimicrobial plant.",
    "activeConstituents": [
      "allicin",
      "organosulfur compounds"
    ],
    "osirisRelevance": "If a patient reports garlic (especially concentrated extracts rather than culinary amounts), interpret BP and bleeding/bruising in context: allicin and organosulfur compounds can overlap hypotensive physiology and platelet reactivity without being antihypertensives or antiplatelet drugs. Anticoagulant/antiplatelet combinations may increase bleeding tendency; peri-procedural periods are a particular interpretation issue. Evidence is traditional plus limited clinical and is not a reason to stop indicated vascular medicines. Useful OSIRIS series: BP and bleeding/bruising."
  },
  "cinnamon": {
    "botanicaOnly": false,
    "commonName": "Cinnamon",
    "botanicalName": "Cinnamomum spp.",
    "botanicalProfile": "Cinnamomum verum J.Presl (Ceylon cinnamon) and Cinnamomum cassia (nees) / C. aromaticum (cassia) are not equivalent. Cassia bark is richer in coumarin. Medicinal material is typically the dried inner bark.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "dried inner bark",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "HMPC glossary 5–15 minutes if used as infusion; not verified here as a single official number for every cinnamon species",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EU herbal monograph on Cinnamomi cortex describes comminuted herbal substance as herbal tea; exact gram-in-cup figures must be taken from the current labelled product or the specific Cinnamomum species monograph in force — Ceylon and cassia are not interchangeable",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Cinnamomi cortex (species and coumarin limits are product-specific)",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "safetyNote": "Coumarin load is higher with cassia; do not assume culinary sprinkling equals a medicinal infusion.",
    "galleryKey": "cinnamon",
    "id": "cinnamon",
    "conditions": [
      "elevated glucose",
      "elevated Hemoglobin A1c (HbA1c)"
    ],
    "mechanisms": [
      "Overlapping physiological effect on glycaemic handling; not biguanide or insulin pharmacology."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence. This is not established clinical evidence equivalent to a licensed medicine, and it is not a basis to replace prescribed treatment.",
    "relationshipLabel": "complementary therapeutic target for glycaemic load — not pharmacologically equivalent",
    "correspondingPharmaClasses": [
      "metformin"
    ],
    "medicineInteractions": [
      {
        "note": "May increase glycaemic-lowering physiological effect alongside antihyperglycaemics — hypoglycaemia risk remains a medicine issue, not an herbal prescription."
      }
    ],
    "monitoring": [
      "Glucose / Hemoglobin A1c (HbA1c)",
      "hepatic enzymes if cassia used regularly"
    ],
    "contraindications": [
      "Significant hepatic enzyme elevation",
      "Unsupervised combination with intensive antihyperglycaemic regimens"
    ],
    "traditionalUses": "Traditional metabolic and digestive spice.",
    "activeConstituents": [
      "cinnamaldehyde",
      "procyanidins",
      "coumarin (cassia)"
    ],
    "osirisRelevance": "If a patient reports cinnamon, interpret glucose and Hemoglobin A1c (HbA1c) in context: cinnamaldehyde and procyanidins have limited evidence of overlapping glycaemic-handling effects, not metformin or insulin pharmacology. Cassia cinnamon also contains coumarin — regular use is relevant to hepatic enzymes (ALT/AST). Combined with intensive antihyperglycaemics, hypoglycaemia remains a medicine issue. Useful OSIRIS series: glucose, HbA1c, and hepatic enzymes if cassia is used regularly."
  },
  "turmeric": {
    "botanicaOnly": false,
    "commonName": "Turmeric",
    "botanicalName": "Curcuma longa",
    "botanicalProfile": "Curcuma longa L. (Zingiberaceae). Medicinal herbal substance is typically the dried rhizome (Curcumae longae rhizoma). Culinary powder, aqueous infusion and solvent extracts (often with lipid vehicles) are not equivalent.",
    "preparations": [
      {
        "type": "Powdered rhizome",
        "plantPart": "rhizome",
        "materialState": "dried, powdered",
        "parametersVerified": false,
        "form": "powdered herbal substance for oral use in traditional / registered products",
        "ratio": "EMA/HMPC Curcumae longae rhizoma traditional use includes powdered herbal substance in gram-range daily doses as specified in the monograph / labelled product — not interchangeable with curcumin-standardised extracts",
        "solvent": "not applicable for unextracted powder",
        "sourceNote": "EMA/HMPC Curcuma longa rhizome monograph (powdered herbal substance and extracts listed separately)",
        "safetyLimitations": "Standardised curcumin extracts, culinary teaspoon dosing, and bile-stimulating extracts are not equivalent. Caution in biliary obstruction. Not an anti-inflammatory drug substitute.",
        "route": "oral"
      },
      {
        "type": "Standardised extract",
        "plantPart": "rhizome",
        "materialState": "dry extract as labelled",
        "parametersVerified": false,
        "form": "finished extract (often with lipid or piperine vehicles in commercial products)",
        "sourceNote": "Extract solvents and DERs are product-specific; no kitchen extraction procedure is provided",
        "safetyLimitations": "Do not assume kitchen oil-and-powder mixes reproduce clinical extract pharmacokinetics.",
        "route": "oral, as labelled"
      }
    ],
    "galleryKey": "turmeric",
    "id": "turmeric",
    "conditions": [
      "raised C-Reactive Protein (CRP)",
      "inflammatory load"
    ],
    "mechanisms": [
      "Supportive intervention with overlapping effects on inflammatory signalling; not NSAID / corticosteroid pharmacology."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional use together with limited clinical evidence. Traditional use, limited clinical evidence and established clinical evidence are not equivalent. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "supportive intervention for inflammatory tone — not an anti-inflammatory drug analogue for substitution",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "May increase bleeding tendency with anticoagulants / antiplatelets / NSAIDs."
      }
    ],
    "monitoring": [
      "C-Reactive Protein (CRP) trend",
      "bleeding / dyspepsia"
    ],
    "contraindications": [
      "Biliary obstruction / active gallstone crisis",
      "Bleeding tendency with anticoagulants"
    ],
    "traditionalUses": "Traditional anti-inflammatory culinary rhizome.",
    "activeConstituents": [
      "curcuminoids"
    ],
    "osirisRelevance": "If a patient reports turmeric/curcuminoids, interpret inflammatory markers and bleeding in context: curcuminoids overlap inflammatory signalling without Non-Steroidal Anti-Inflammatory Drug (NSAID) or corticosteroid pharmacology. They may increase bleeding tendency with anticoagulants, antiplatelets or NSAIDs and are cautioned in biliary obstruction/gallstone crisis. Dyspepsia can appear as a gastrointestinal (GI) finding. Evidence is traditional plus limited clinical. Useful OSIRIS series: C-Reactive Protein (CRP) trend, bleeding/dyspepsia, and biliary symptoms."
  },
  "valerian": {
    "botanicaOnly": false,
    "commonName": "Valerian",
    "botanicalName": "Valeriana officinalis",
    "botanicalProfile": "Valeriana officinalis L. (Caprifoliaceae). Medicinal herbal substance is the dried root/rhizome (Valerianae radix), not the aerial parts.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "root / rhizome",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "0.3–3 g comminuted herbal substance in 150 ml boiling water as a herbal infusion (EMA/HMPC Valerianae radix)",
        "parametersVerified": true,
        "sourceNote": "EMA/HMPC European Union herbal monograph on Valeriana officinalis L., radix",
        "safetyLimitations": "Infusion, tincture and dry extracts are not equivalent. May potentiate Central Nervous System (CNS) depressants. Not a benzodiazepine substitute. Do not drive if drowsy.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      },
      {
        "type": "Tincture / liquid extract",
        "plantPart": "root / rhizome",
        "materialState": "liquid extract as labelled",
        "alcoholPercent": "product-specific (ethanol as extraction solvent in named HMPC preparations)",
        "parametersVerified": false,
        "form": "finished tincture or liquid extract",
        "sourceNote": "HMPC lists several liquid preparations with millilitre single doses; household maceration ratios are not copied here because they are preparation-specific",
        "safetyLimitations": "Do not invent an ethanol percentage or maceration time. Alcohol-containing preparations are unsuitable where alcohol is contraindicated.",
        "route": "oral, as labelled"
      },
      {
        "type": "Standardised extract",
        "plantPart": "root / rhizome",
        "materialState": "dry extract as labelled",
        "parametersVerified": false,
        "form": "finished dry extract",
        "sourceNote": "HMPC dry-extract single doses are product-specific",
        "safetyLimitations": "Not interchangeable with tea.",
        "route": "oral, as labelled"
      }
    ],
    "galleryKey": "valerian",
    "id": "valerian",
    "conditions": [
      "tachycardia in context",
      "psychological / autonomic load"
    ],
    "mechanisms": [
      "Overlapping physiological effect on autonomic arousal / sleep onset; not benzodiazepine or beta-blocker pharmacology."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional use together with limited clinical evidence. Traditional use, limited clinical evidence and established clinical evidence are not equivalent. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "therapeutic relationship to autonomic / stress load — not a sedative-drug equivalent",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "May increase sedation with benzodiazepines, Z-drugs, opioids or alcohol — overlapping CNS depression, not therapeutic replacement."
      }
    ],
    "monitoring": [
      "sleep / daytime sedation",
      "heart rate if tachycardia was the linked finding"
    ],
    "contraindications": [
      "Concurrent sedative stacks without clinician review",
      "Need for unimpaired alertness"
    ],
    "traditionalUses": "Traditional nervine and sleep-support root.",
    "activeConstituents": [
      "valerenic acids",
      "iridoids"
    ],
    "osirisRelevance": "If a patient reports valerian, interpret sleep, daytime sedation and context tachycardia/autonomic arousal in light of valerenic acids and iridoids: overlapping calming/sleep-onset physiology, not benzodiazepine or beta-blocker pharmacology. Additive Central Nervous System (CNS) depression with benzodiazepines, Z-drugs, opioids or alcohol can alter alertness and heart-rate interpretation. Evidence is traditional plus limited clinical. Useful OSIRIS series: sleep/sedation and heart rate if tachycardia was the linked finding."
  },
  "ginger": {
    "botanicaOnly": false,
    "commonName": "Ginger",
    "botanicalName": "Zingiber officinale",
    "botanicalProfile": "Zingiber officinale Roscoe (Zingiberaceae). Medicinal herbal substance is the rhizome (Zingiberis rhizoma), fresh or dried — these forms are not automatically equivalent.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "rhizome",
        "materialState": "dried comminuted or fresh sliced rhizome as specified by the product; dried and fresh are not automatically equivalent",
        "solvent": "water",
        "temperature": "boiling water for dried comminuted rhizome if prepared as infusion",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Zingiberis rhizoma includes comminuted herbal substance for herbal tea / oral use; use the labelled finished-product posology. A single kitchen ‘fresh ginger cup’ ratio is not treated here as equivalent to powdered rhizome studies.",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Zingiber officinale rhizome monograph",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      },
      {
        "type": "Standardised extract / powdered rhizome products",
        "plantPart": "rhizome",
        "materialState": "powder or dry extract as labelled",
        "parametersVerified": false,
        "form": "finished oral products",
        "sourceNote": "HMPC lists powdered herbal substance and extracts separately",
        "safetyLimitations": "May affect platelet function at concentrated doses; caution with anticoagulants. Not equivalent to prescription antiemetics for severe or postoperative vomiting without clinical advice.",
        "route": "oral"
      }
    ],
    "galleryKey": "ginger",
    "id": "ginger",
    "conditions": [
      "nausea",
      "disordered gastric motility",
      "inflammatory load"
    ],
    "mechanisms": [
      "Overlapping 5-HT / gastric-motility and inflammatory-signalling physiology; not 5-HT3 antagonist, prokinetic or NSAID pharmacology."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional use together with limited clinical evidence. Traditional use, limited clinical evidence and established clinical evidence are not equivalent. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "complementary / adjunct option for nausea / gastric-motility load — NOT therapeutically equivalent to antiemetic drugs; must not replace indicated antiemetic or ulcer therapy",
    "correspondingPharmaClasses": [
      "antiemetic"
    ],
    "medicineInteractions": [
      {
        "note": "May increase bleeding tendency with anticoagulants / antiplatelets — overlapping platelet effect, not replacement."
      },
      {
        "note": "Inflammatory-tone overlap with NSAIDs is not therapeutic equivalence; dyspepsia / bleeding risk remains a medicine issue."
      }
    ],
    "monitoring": [
      "nausea / oral intake",
      "bleeding / dyspepsia",
      "C-Reactive Protein (CRP) if inflammation was the linked finding"
    ],
    "contraindications": [
      "Active peptic-ulcer bleeding",
      "Unsupervised high-dose use with anticoagulants"
    ],
    "traditionalUses": "Traditional antiemetic and digestive rhizome.",
    "activeConstituents": [
      "gingerols",
      "shogaols"
    ],
    "osirisRelevance": "If a patient reports ginger, interpret nausea, gastric motility, inflammatory tone and bleeding in context: gingerols/shogaols overlap 5-hydroxytryptamine (5-HT)/motility and inflammatory signalling without being 5-HT3 antagonists, prokinetics or NSAIDs. High-dose use may increase bleeding tendency with anticoagulants/antiplatelets; peptic-ulcer bleeding is a restriction context. Evidence is traditional plus limited clinical. Useful OSIRIS series: nausea/intake, dyspepsia/bleeding, and CRP if inflammation was linked."
  },
  "lavender": {
    "botanicaOnly": false,
    "commonName": "Lavender",
    "botanicalName": "Lavandula angustifolia",
    "botanicalProfile": "Lavandula angustifolia Mill. (Lamiaceae). Flower (Lavandulae flos) infusions and specialised oral essential-oil preparations (for example Silexan-type) are not equivalent to inhaling the flower.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "flower",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Lavandulae flos includes herbal tea; gram quantities must follow the current monograph / labelled tea. Essential oil for oral use is a different preparation.",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Lavandula angustifolia flower monograph",
        "safetyLimitations": "Do not swallow unspecified essential-oil drops as if they were Silexan. Oral essential oil is product-specific and can be toxic if misused.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      },
      {
        "type": "Standardised oral oil (Silexan-type)",
        "plantPart": "flowering tops (essential oil)",
        "materialState": "quantified essential oil in finished capsules",
        "parametersVerified": false,
        "form": "authorised oral oil capsules only",
        "sourceNote": "Silexan is a specific quantified oil preparation; not produced by kitchen distillation",
        "safetyLimitations": "Not equivalent to tea or to inhaled lavender. Keep away from children. Not a Selective Serotonin Reuptake Inhibitor (SSRI) substitute.",
        "route": "oral, as labelled"
      }
    ],
    "galleryKey": "lavender",
    "id": "lavender",
    "conditions": [
      "autonomic / anxious arousal"
    ],
    "mechanisms": [
      "Linalool-related calming physiology; not SSRI or benzodiazepine pharmacology."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence. This is not established clinical evidence equivalent to a licensed medicine, and it is not a basis to replace prescribed treatment.",
    "relationshipLabel": "complementary / adjunct option for autonomic arousal — NOT therapeutically equivalent to SSRIs or benzodiazepines; must not replace indicated pharmaceutical treatment",
    "correspondingPharmaClasses": [
      "ssri",
      "benzo"
    ],
    "medicineInteractions": [
      {
        "note": "Sedation / calming overlap with anxiolytics or antidepressants is not substitution."
      }
    ],
    "monitoring": [
      "arousal / sleep",
      "daytime sedation"
    ],
    "contraindications": [
      "Need for unimpaired alertness"
    ],
    "traditionalUses": "Traditional calming flower.",
    "activeConstituents": [
      "linalool",
      "linalyl acetate"
    ],
    "osirisRelevance": "If a patient reports lavender (especially inhaled or oral linalool/linalyl acetate products), interpret anxious arousal, sleep and daytime sedation in context. Calming physiology is not Selective Serotonin Reuptake Inhibitor (SSRI) or benzodiazepine pharmacology; overlap with anxiolytics can increase sedation and mask residual anxiety scores. Evidence is limited clinical. Useful OSIRIS series: arousal/sleep and daytime sedation."
  },
  "lemon-balm": {
    "botanicaOnly": false,
    "commonName": "Lemon Balm",
    "botanicalName": "Melissa officinalis",
    "botanicalProfile": "Melissa officinalis L. (Lamiaceae). Medicinal herbal substance is typically the dried leaf (Melissae folium).",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "leaf",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified (Committee on Herbal Medicinal Products (HMPC) herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "1.5–4.5 g comminuted herbal substance in 150 ml boiling water as a herbal infusion, 1–3 times daily (adolescents over 12 years, adults and elderly)",
        "parametersVerified": true,
        "sourceNote": "EMA/HMPC Community herbal monograph on Melissa officinalis L., folium",
        "safetyLimitations": "Not for children under 12 years as per the monograph. Tea is not equivalent to the listed tincture (2–6 ml) or liquid extract (2–4 ml). Not a Selective Serotonin Reuptake Inhibitor (SSRI) substitute. Duration: seek advice if symptoms persist longer than 2 weeks.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      },
      {
        "type": "Tincture / liquid extract",
        "plantPart": "leaf",
        "materialState": "finished liquid as labelled",
        "alcoholPercent": "product-specific; dried extracts in the monograph use water or ethanol 45–53% (V/V)",
        "ratio": "HMPC tincture 2–6 ml, 1–3 times daily; liquid extract (Drug Extract Ratio (DER) 1:1) 2–4 ml, 1–3 times daily — not a kitchen maceration formula",
        "parametersVerified": true,
        "form": "finished tincture or liquid extract",
        "sourceNote": "EMA/HMPC Melissa officinalis leaf monograph",
        "safetyLimitations": "Do not invent an ethanol percentage or maceration time at home. Alcohol-containing preparations are unsuitable where alcohol is contraindicated. Not equivalent to the herbal tea.",
        "route": "oral, as labelled"
      }
    ],
    "galleryKey": "lemon-balm",
    "id": "lemon-balm",
    "conditions": [
      "autonomic / affective arousal",
      "sleep-onset load"
    ],
    "mechanisms": [
      "GABAergic-adjacent calming physiology; not benzodiazepine, SSRI or beta-blocker pharmacology."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional use together with limited clinical evidence. Traditional use, limited clinical evidence and established clinical evidence are not equivalent. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "supportive / complementary option for autonomic arousal — NOT a potential alternative to benzodiazepines, hypnotics or antidepressants; NOT therapeutically equivalent; must not replace indicated pharmaceutical treatment",
    "correspondingPharmaClasses": [
      "benzo",
      "ssri"
    ],
    "medicineInteractions": [
      {
        "note": "May increase sedation with CNS depressants — overlapping physiology, not benzodiazepine replacement."
      },
      {
        "note": "Not an SSRI substitute. Concurrent calming herbs do not replace indicated antidepressant therapy."
      }
    ],
    "monitoring": [
      "sleep / daytime sedation",
      "affective / autonomic symptoms",
      "heart rate if tachycardia was the linked finding"
    ],
    "contraindications": [
      "Need for unimpaired alertness",
      "Thyroid-context use without clinician review if already on levothyroxine"
    ],
    "traditionalUses": "Traditional nervine lemon-scented leaf.",
    "activeConstituents": [
      "rosmarinic acid",
      "citral-related volatiles"
    ],
    "osirisRelevance": "If a patient reports lemon balm, interpret affective/autonomic arousal, sleep onset and possible daytime sedation: rosmarinic acid and citral-related volatiles have GABAergic-adjacent calming physiology, not benzodiazepine, SSRI or beta-blocker pharmacology. Additive sedation with CNS depressants is relevant. Theoretical thyroid-context caution exists if the patient is already on levothyroxine. Evidence is traditional plus limited clinical. Useful OSIRIS series: sleep/sedation, affective symptoms, and heart rate if tachycardia was linked."
  },
  "milk-thistle": {
    "botanicaOnly": false,
    "commonName": "Milk Thistle",
    "botanicalName": "Silybum marianum",
    "botanicalProfile": "Silybum marianum (L.) Gaertn. (Asteraceae). Medicinal herbal substance is the dried fruit/seed (Silybi mariani fructus), not the leaf.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "fruit (seed)",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "HMPC glossary 5–15 minutes unless the labelled tea specifies otherwise",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "3–5 g comminuted herbal substance in 100 ml boiling water as herbal tea, 2–3 times daily before meals (adults) — EMA/HMPC Silybi mariani fructus",
        "parametersVerified": true,
        "sourceNote": "EMA/HMPC European Union herbal monograph on Silybum marianum (L.) Gaertn., fructus",
        "safetyLimitations": "Tea, powdered fruit and acetone/ethanol/ethyl-acetate dry extracts are not equivalent. Not a treatment for acute liver failure. Allergy caution in Asteraceae. Not for self-care of jaundice or right-upper-quadrant pain without medical assessment.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      },
      {
        "type": "Standardised extract",
        "plantPart": "fruit (seed)",
        "materialState": "dry or soft extract as labelled",
        "solvent": "examples in the EU monograph include acetone; ethanol 96% (V/V); ethyl acetate; methanol 90% (V/V) — not interchangeable",
        "ratio": "Drug Extract Ratio (DER) examples include 20–70:1 (acetone dry extract) and other DER bands; single doses are milligram-range and product-specific",
        "parametersVerified": true,
        "form": "finished dry/soft extract",
        "sourceNote": "EMA/HMPC Silybum marianum fruit monograph",
        "safetyLimitations": "Silymarin-standardised extracts are not reproduced by kitchen tea. Cytochrome P450 (CYP) and drug-interaction data are extract-dependent.",
        "route": "oral, as labelled"
      }
    ],
    "galleryKey": "milk-thistle",
    "id": "milk-thistle",
    "conditions": [
      "raised ALT / AST",
      "hepatic inflammatory-oxidative load"
    ],
    "mechanisms": [
      "Silymarin antioxidant / membrane-stabilising hepatocyte support; not antiviral, chelation or transplant pharmacology."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional use together with limited clinical evidence. Traditional use, limited clinical evidence and established clinical evidence are not equivalent. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "supportive option for hepatocyte oxidative load — NOT therapeutically equivalent to hepatic disease-modifying drugs; must not replace indicated pharmaceutical or urgent hepatic treatment",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "CYP / transporter interaction context possible — clinician review; not a statin or anticoagulant substitute."
      }
    ],
    "monitoring": [
      "ALT / AST trend",
      "bilirubin if cholestasis is in the picture"
    ],
    "contraindications": [
      "Hormone-sensitive context unless clinician reviews (theoretical lignan activity)"
    ],
    "traditionalUses": "Traditional hepatic trophorestorative seed.",
    "activeConstituents": [
      "silymarin",
      "silybin"
    ],
    "osirisRelevance": "If a patient reports milk thistle (silymarin/silybin), interpret hepatic enzymes in context: antioxidant/membrane-stabilising hepatocyte support is discussed, not antiviral or transplant pharmacology. Cytochrome P450 / transporter interaction is possible and may alter levels of co-medicines (clinician review). Theoretical lignan/hormone-sensitive context exists. Evidence is traditional plus limited clinical and does not establish disease modification. Useful OSIRIS series: ALT/AST trend and bilirubin if cholestasis is present."
  },
  "flaxseed": {
    "botanicaOnly": false,
    "commonName": "Flaxseed",
    "botanicalName": "Linum usitatissimum",
    "botanicalProfile": "Linum usitatissimum L. (Linaceae). Medicinal herbal substance is the seed (Lini semen). Whole or broken seed with water (bulk laxative) is not equivalent to cold-pressed oil or to finely ground seed used as a food.",
    "preparations": [
      {
        "type": "Whole or broken seed with fluid (bulk)",
        "plantPart": "seed",
        "materialState": "whole or broken dried ripe seeds (not a substitute for industrial linseed oil)",
        "solvent": "water, milk, fruit juice or similar aqueous liquid",
        "ratio": "Well-established laxative posology: 10–15 g seeds with 150 ml aqueous fluid, 2–3 times daily, then maintain adequate fluid; not immediately before bedtime",
        "time": "Onset typically 12–24 hours",
        "parametersVerified": true,
        "form": "swollen seed mass swallowed with fluid",
        "finishing": "swallow with the stated fluid; do not take dry",
        "sourceNote": "EMA/HMPC Linum usitatissimum L., semen (well-established use as bulk-forming laxative)",
        "safetyLimitations": "Without enough fluid, seeds can swell and obstruct the throat or bowel. Contraindicated in bowel obstruction, swallowing difficulty, and undiagnosed abdominal pain. Separate from other medicines by 30–60 minutes. Finely powdered seed is not automatically the same as this whole/broken-seed method.",
        "route": "oral"
      },
      {
        "type": "Maceration (mucilage)",
        "plantPart": "seed",
        "materialState": "whole or broken seeds",
        "solvent": "water",
        "ratio": "5–10 g in 250 ml water",
        "time": "soak until swelling is complete; HMPC notes soaking overnight if possible",
        "temperature": "ambient water for soak (not presented here as a boiling decoction)",
        "finishing": "the mucilage may be consumed with or without the seeds as stated in the monograph",
        "parametersVerified": true,
        "form": "mucilaginous aqueous preparation",
        "sourceNote": "EMA/HMPC Linum semen traditional mucilaginous preparation",
        "safetyLimitations": "Traditional demulcent use is not the same indication as the 10–15 g bulk laxative regimen. Still requires enough fluid and the same obstruction cautions.",
        "route": "oral"
      },
      {
        "type": "Cold-pressed oil",
        "plantPart": "seed",
        "materialState": "expressed oil",
        "parametersVerified": false,
        "form": "finished cold-pressed linseed oil as labelled",
        "sourceNote": "Oil is a different preparation from mucilage/bulk seed; omega-3 content does not make it a statin",
        "safetyLimitations": "Oil does not provide the same bulk-laxative mechanics as whole seed.",
        "route": "oral, as labelled"
      }
    ],
    "galleryKey": "flaxseed",
    "id": "flaxseed",
    "conditions": [
      "raised triglycerides / LDL",
      "cardiometabolic inflammatory load"
    ],
    "mechanisms": [
      "Alpha-linolenic acid and viscous fibre modifying lipid and inflammatory tone; not HMG-CoA reductase inhibition."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence. This is not established clinical evidence equivalent to a licensed medicine, and it is not a basis to replace prescribed treatment.",
    "relationshipLabel": "complementary / adjunct option for lipid / inflammatory-tone load — NOT therapeutically equivalent to statins; must not replace indicated lipid-lowering drugs",
    "correspondingPharmaClasses": [
      "statin"
    ],
    "medicineInteractions": [
      {
        "note": "May sit alongside statin therapy as dietary n-3 / fibre adjunct — not a reason to stop the statin."
      },
      {
        "note": "High-dose oil may theoretically affect bleeding tendency — review, not replacement of anticoagulation."
      }
    ],
    "monitoring": [
      "triglycerides / LDL",
      "stool pattern"
    ],
    "contraindications": [
      "Bowel obstruction",
      "Unsupervised high-dose oil with bleeding diathesis"
    ],
    "traditionalUses": "Traditional oilseed for metabolic and bowel bulk.",
    "activeConstituents": [
      "alpha-linolenic acid",
      "lignans",
      "viscous fibre"
    ],
    "osirisRelevance": "If a patient reports flaxseed, interpret lipids, stool pattern and (with high-dose oil) bleeding tendency: alpha-linolenic acid, lignans and viscous fibre can modify triglyceride/Low-Density Lipoprotein (LDL) tone and bowel bulk, not HMG-CoA reductase inhibition. Ground seed may reduce absorption of co-administered oral medicines if taken together. Bowel obstruction is a restriction. Evidence is limited clinical. Useful OSIRIS series: triglycerides/LDL and stool pattern."
  },
  "st-johns-wort": {
    "botanicaOnly": false,
    "commonName": "St. John's Wort",
    "botanicalName": "Hypericum perforatum",
    "botanicalProfile": "Hypericum perforatum L. (Hypericaceae). Medicinal herbal substance is the dried flowering tops (Hyperici herba). Tea, oil macerate and hyperforin-containing dry extracts are not equivalent.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "flowering tops (herba)",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water",
        "ratio": "Traditional herbal tea exists in the EU Hypericum monograph set; tea is not equivalent to well-established dry extracts used in depression trials. Use only labelled tea products; a household handful is not a verified dose",
        "parametersVerified": false,
        "finishing": "strain",
        "form": "herbal tea",
        "sourceNote": "EMA/HMPC Hypericum perforatum herba (traditional and well-established preparations are listed separately)",
        "safetyLimitations": "Even teas can contain hyperforin. Induces Cytochrome P450 3A4 (CYP3A4) and other enzymes / P-glycoprotein at hyperforin intakes above the monograph’s low-hyperforin threshold. Contraindicated with many medicines (ciclosporin, tacrolimus, Human Immunodeficiency Virus (HIV) protease inhibitors, some cytotoxics, warfarin-type anticoagulants, and others). May reduce hormonal contraception reliability. Not a Selective Serotonin Reuptake Inhibitor (SSRI) to start or stop without a clinician. Photosensitivity risk.",
        "route": "oral — clinician-reviewed only if any medicines are used"
      },
      {
        "type": "Standardised extract",
        "plantPart": "flowering tops",
        "materialState": "quantified dry extract",
        "solvent": "typically ethanol or methanol 50–80% (V/V) in Ph. Eur. extracts — product-specific",
        "parametersVerified": false,
        "form": "finished quantified extract only",
        "sourceNote": "Ph. Eur. / HMPC quantified St John’s wort dry extract",
        "safetyLimitations": "Clinician-reviewed only because of pharmacokinetic and serotonergic interactions. Not for household solvent extraction.",
        "route": "oral, as labelled, under clinical review"
      }
    ],
    "galleryKey": "st-johns-wort",
    "id": "st-johns-wort",
    "conditions": [
      "affective / stress neurotransmission load"
    ],
    "mechanisms": [
      "Reuptake-adjacent monoamine effects plus strong CYP3A4 / P-gp induction; not SSRI pharmacology, safety or licensed indication."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence. This is not established clinical evidence equivalent to a licensed medicine, and it is not a basis to replace prescribed treatment.",
    "relationshipLabel": "NOT a potential alternative to antidepressants in patients on interacting medicines; complementary discussion of monoamine tone only — NOT therapeutically equivalent; must not replace indicated pharmaceutical treatment",
    "correspondingPharmaClasses": [
      "ssri"
    ],
    "medicineInteractions": [
      {
        "note": "Serotonin-toxicity risk with SSRI / SNRI / MAOI — not dual-antidepressant therapy and not a reason to swap an SSRI for the herb."
      },
      {
        "note": "CYP3A4 / P-gp induction can lower levels of many critical medicines — this is an interaction hazard, not therapeutic replacement."
      }
    ],
    "monitoring": [
      "mood / suicidality under clinician care",
      "therapeutic levels / INR of interacting medicines",
      "photosensitivity"
    ],
    "contraindications": [
      "Concurrent SSRI / SNRI / MAOI / triptan (serotonin-toxicity risk)",
      "Oral contraceptives / transplant / HIV / anticoagulant / anticonvulsant regimens without specialist review",
      "Bipolar mania risk"
    ],
    "traditionalUses": "Traditional nervine for low mood.",
    "activeConstituents": [
      "hypericin",
      "hyperforin",
      "flavonoids"
    ],
    "osirisRelevance": "If a patient reports St. John's wort, interpretation is dominated by hyperforin-related CYP3A4 / P-glycoprotein induction (lowered levels of many critical medicines, including some oral contraceptives, transplant, Human Immunodeficiency Virus (HIV), anticoagulant and anticonvulsant regimens) and by serotonin-toxicity risk with SSRI / SNRI / MAOI / triptans. Hypericin-related photosensitivity and bipolar mania risk are also relevant. Limited clinical evidence for mood does not make this an SSRI. Useful OSIRIS series: mood/suicidality under clinician care, INR or therapeutic levels of interacting medicines, and photosensitivity."
  },
  "belladonna": {
    "botanicaOnly": true,
    "commonName": "Belladonna",
    "botanicalName": "Atropa belladonna",
    "botanicalProfile": "Atropa belladonna L. (Solanaceae). Leaves and root contain tropane alkaloids (atropine, hyoscyamine, scopolamine).",
    "conditions": [
      "anticholinergic / toxic tropane alkaloid plant — not a self-care herb"
    ],
    "mechanisms": [
      "Competitive muscarinic antagonism at toxic doses; this is poison pharmacology, not a gentle herbal ‘mechanism’ for home use."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient or inapplicable self-care evidence. Toxicity dominates. Traditional anecdotes are not clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. No standard medicine class should be ‘replaced’ by this plant. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not combine with medicines by self-experimentation. Toxicity and drug interactions cannot be managed as a folk tea."
      }
    ],
    "monitoring": [
      "This plant is not for self-monitoring as a herbal therapy; seek emergency care for suspected poisoning."
    ],
    "contraindications": [
      "Any unsupervised medicinal use",
      "Pregnancy",
      "Children"
    ],
    "osirisRelevance": "If exposure to Atropa belladonna is reported or suspected, interpret findings as possible antimuscarinic (tropane alkaloid) toxicity: dry mucosa, mydriasis, urinary retention, fever, tachycardia, delirium and reduced bowel sounds can mimic or overwhelm other autonomic diagnoses. Overlap with prescribed anticholinergic medicines is additive. This is poison pharmacology, not a self-care nervine. Human self-care evidence is inapplicable; toxicity dominates. Correlate heart rate, temperature, mental status and emergency toxicology, not herbal ‘benefit’ scores.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "leaf / root",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Contains tropane alkaloids. Therapeutic use is restricted to controlled pharmaceutical preparations. Any household tea, tincture or smoking preparation can cause delirium, tachycardia, hyperthermia and death.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical or folkloric mentions do not authorise household preparation.",
    "notAReplacement": true,
    "galleryKey": "belladonna",
    "id": "belladonna"
  },
  "foxglove": {
    "botanicaOnly": true,
    "commonName": "Foxglove",
    "botanicalName": "Digitalis purpurea / D. lanata",
    "botanicalProfile": "Digitalis purpurea L. and Digitalis lanata Ehrh. (Plantaginaceae). Leaf is the source of cardiac glycosides.",
    "conditions": [
      "cardiac glycoside plant — not a self-care herb"
    ],
    "mechanisms": [
      "Inhibits sodium-potassium adenosine triphosphatase (Na+/K+-ATPase) in cardiomyocytes; narrow therapeutic index."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient or inapplicable self-care evidence. Toxicity dominates. Traditional anecdotes are not clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. No standard medicine class should be ‘replaced’ by this plant. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not combine with medicines by self-experimentation. Toxicity and drug interactions cannot be managed as a folk tea."
      }
    ],
    "monitoring": [
      "This plant is not for self-monitoring as a herbal therapy; seek emergency care for suspected poisoning."
    ],
    "contraindications": [
      "Any unsupervised medicinal use",
      "Pregnancy",
      "Children"
    ],
    "osirisRelevance": "If Digitalis exposure is reported or suspected, interpret cardiac rhythm, heart rate and potassium in a cardiac-glycoside frame: inhibition of sodium-potassium adenosine triphosphatase (Na+/K+-ATPase) produces a narrow-index inotrope/chronotrope toxidrome (bradyarrhythmia, ventricular ectopy, gastrointestinal (GI) upset, visual disturbance). Hypokalaemia increases toxicity. Do not treat as hawthorn-like cardiotonic folklore. Self-care evidence is inapplicable. Useful OSIRIS/clinical correlates: electrocardiogram (ECG) context, heart rate, potassium and emergency care.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "leaf",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Cardiac glycosides (digitoxin / digoxin-related). Self-preparation is lethal-risk. Licensed digoxin is a medicine, not a garden tea.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical or folkloric mentions do not authorise household preparation.",
    "notAReplacement": true,
    "galleryKey": "foxglove",
    "id": "foxglove"
  },
  "henbane": {
    "botanicaOnly": true,
    "commonName": "Henbane",
    "botanicalName": "Hyoscyamus niger",
    "botanicalProfile": "Hyoscyamus niger L. (Solanaceae). Tropane alkaloid plant.",
    "conditions": [
      "toxic tropane alkaloid plant"
    ],
    "mechanisms": [
      "Antimuscarinic toxicity, not a validated self-care sedative."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient or inapplicable self-care evidence. Toxicity dominates. Traditional anecdotes are not clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. No standard medicine class should be ‘replaced’ by this plant. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not combine with medicines by self-experimentation. Toxicity and drug interactions cannot be managed as a folk tea."
      }
    ],
    "monitoring": [
      "This plant is not for self-monitoring as a herbal therapy; seek emergency care for suspected poisoning."
    ],
    "contraindications": [
      "Any unsupervised medicinal use",
      "Pregnancy",
      "Children"
    ],
    "osirisRelevance": "If Hyoscyamus niger exposure is reported or suspected, interpret as tropane antimuscarinic toxicity (hyoscyamine/scopolamine-type): delirium, tachycardia, mydriasis, urinary retention and hyperthermia. It is not a validated self-care sedative; sedation/confusion here is toxic, not therapeutic. Overlap with anticholinergic medicines is relevant. Evidence for household use is insufficient; toxicity dominates. Correlate mental status, heart rate and temperature.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "leaf / flowering tops",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Tropane alkaloids. Unsupervised preparation is unsafe.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical or folkloric mentions do not authorise household preparation.",
    "notAReplacement": true,
    "galleryKey": "henbane",
    "id": "henbane"
  },
  "jimsonweed": {
    "botanicaOnly": true,
    "commonName": "Jimsonweed",
    "botanicalName": "Datura stramonium",
    "botanicalProfile": "Datura stramonium L. (Solanaceae).",
    "conditions": [
      "toxic tropane alkaloid plant"
    ],
    "mechanisms": [
      "Antimuscarinic delirium; seeds and all parts can be fatal."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient or inapplicable self-care evidence. Toxicity dominates. Traditional anecdotes are not clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. No standard medicine class should be ‘replaced’ by this plant. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not combine with medicines by self-experimentation. Toxicity and drug interactions cannot be managed as a folk tea."
      }
    ],
    "monitoring": [
      "This plant is not for self-monitoring as a herbal therapy; seek emergency care for suspected poisoning."
    ],
    "contraindications": [
      "Any unsupervised medicinal use",
      "Pregnancy",
      "Children"
    ],
    "osirisRelevance": "If Datura stramonium (seeds or any part) exposure is reported or suspected, interpret anticholinergic delirium and autonomic findings as tropane alkaloid poisoning that can be fatal. Tachycardia, mydriasis, dry skin, urinary retention and agitation can be misread as primary psychiatric or febrile illness. Self-care evidence is inapplicable. Correlate mental status, heart rate, temperature and emergency toxicology.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "all parts, especially seeds",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "High tropane alkaloid content. No household medicinal use.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical or folkloric mentions do not authorise household preparation.",
    "notAReplacement": true,
    "galleryKey": "jimsonweed",
    "id": "jimsonweed"
  },
  "monkshood": {
    "botanicaOnly": true,
    "commonName": "Monkshood",
    "botanicalName": "Aconitum napellus",
    "botanicalProfile": "Aconitum napellus L. (Ranunculaceae). All parts contain aconitine-type alkaloids.",
    "conditions": [
      "highly toxic alkaloid plant"
    ],
    "mechanisms": [
      "Voltage-gated sodium-channel toxins; cardiotoxic and neurotoxic."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient or inapplicable self-care evidence. Toxicity dominates. Traditional anecdotes are not clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. No standard medicine class should be ‘replaced’ by this plant. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not combine with medicines by self-experimentation. Toxicity and drug interactions cannot be managed as a folk tea."
      }
    ],
    "monitoring": [
      "This plant is not for self-monitoring as a herbal therapy; seek emergency care for suspected poisoning."
    ],
    "contraindications": [
      "Any unsupervised medicinal use",
      "Pregnancy",
      "Children"
    ],
    "osirisRelevance": "If Aconitum exposure is reported or suspected, interpret as voltage-gated sodium-channel cardiotoxicity and neurotoxicity: paraesthesia, weakness, hypotension, ventricular arrhythmia and respiratory failure can appear rapidly. This is not a pain-herb mechanism for home use. Self-care evidence is inapplicable. Correlate ECG/heart rate, BP and neurological findings as a poisoning pattern, not as herbal cardiovascular ‘support’.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "root / all parts",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Aconitine. Even topical folk use has caused fatalities. No self-preparation.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical or folkloric mentions do not authorise household preparation.",
    "notAReplacement": true,
    "galleryKey": "monkshood",
    "id": "monkshood"
  },
  "mandrake": {
    "botanicaOnly": true,
    "commonName": "Mandrake",
    "botanicalName": "Mandragora officinarum",
    "botanicalProfile": "Mandragora officinarum L. (Solanaceae).",
    "conditions": [
      "toxic tropane alkaloid plant"
    ],
    "mechanisms": [
      "Antimuscarinic tropane alkaloids."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient or inapplicable self-care evidence. Toxicity dominates. Traditional anecdotes are not clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. No standard medicine class should be ‘replaced’ by this plant. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not combine with medicines by self-experimentation. Toxicity and drug interactions cannot be managed as a folk tea."
      }
    ],
    "monitoring": [
      "This plant is not for self-monitoring as a herbal therapy; seek emergency care for suspected poisoning."
    ],
    "contraindications": [
      "Any unsupervised medicinal use",
      "Pregnancy",
      "Children"
    ],
    "osirisRelevance": "If Mandragora officinarum exposure is reported or suspected, interpret tropane antimuscarinic toxicity (similar autonomic and psychiatric pattern to other mandragora/atropa alkaloids): delirium, tachycardia, mydriasis, urinary retention. Folklore does not create a self-care indication. Evidence for household medicinal use is insufficient; toxicity dominates. Correlate mental status and vital signs as a toxidrome.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "root",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Historical ‘magical’ use is not a safety standard. No household preparation.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical or folkloric mentions do not authorise household preparation.",
    "notAReplacement": true,
    "galleryKey": "mandrake",
    "id": "mandrake"
  },
  "tobacco": {
    "botanicaOnly": true,
    "commonName": "Tobacco",
    "botanicalName": "Nicotiana tabacum",
    "botanicalProfile": "Nicotiana tabacum L. (Solanaceae). Leaf contains nicotine.",
    "conditions": [
      "nicotine toxin / dependence-forming plant — not a herbal medicine in BOTANICA self-care sense"
    ],
    "mechanisms": [
      "Nicotinic acetylcholine receptor agonist; cardiovascular and addiction effects."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient or inapplicable self-care evidence. Toxicity dominates. Traditional anecdotes are not clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. No standard medicine class should be ‘replaced’ by this plant. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not combine with medicines by self-experimentation. Toxicity and drug interactions cannot be managed as a folk tea."
      }
    ],
    "monitoring": [
      "This plant is not for self-monitoring as a herbal therapy; seek emergency care for suspected poisoning."
    ],
    "contraindications": [
      "Any unsupervised medicinal use",
      "Pregnancy",
      "Children"
    ],
    "osirisRelevance": "If Nicotiana use is reported, interpret cardiovascular, respiratory and neurological findings in a nicotine frame: nicotinic acetylcholine-receptor agonism raises heart rate and BP, promotes dependence, and can cause nausea, tremor or, in overdose, cholinergic toxidrome (including bradycardia after initial stimulation). It is not a botanica self-care medicine. Correlate BP, heart rate, respiratory symptoms and withdrawal/dependence when other series are interpreted.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "leaf",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Nicotine is toxic. Smoking, teas or homemade extracts are not medicinal preparations to describe here. Use licensed cessation medicines if treating dependence.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical or folkloric mentions do not authorise household preparation.",
    "notAReplacement": true,
    "galleryKey": "tobacco",
    "id": "tobacco"
  },
  "ephedra-sinica": {
    "botanicaOnly": true,
    "commonName": "Ephedra Sinica",
    "botanicalName": "Ephedra sinica",
    "botanicalProfile": "Ephedra sinica Stapf (Ephedraceae). Stem contains ephedrine alkaloids.",
    "conditions": [
      "restricted ephedrine alkaloid plant"
    ],
    "mechanisms": [
      "Indirect sympathomimetic; Blood Pressure (BP) and heart-rate increase; stroke and arrhythmia risk."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient or inapplicable self-care evidence. Toxicity dominates. Traditional anecdotes are not clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. No standard medicine class should be ‘replaced’ by this plant. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not combine with medicines by self-experimentation. Toxicity and drug interactions cannot be managed as a folk tea."
      }
    ],
    "monitoring": [
      "This plant is not for self-monitoring as a herbal therapy; seek emergency care for suspected poisoning."
    ],
    "contraindications": [
      "Any unsupervised medicinal use",
      "Pregnancy",
      "Children"
    ],
    "osirisRelevance": "If Ephedra sinica / ephedrine-alkaloid products are reported, interpret BP, heart rate and neurological/stroke-risk symptoms as indirect sympathomimetic effects: hypertension, tachycardia, arrhythmia, insomnia and stroke have been associated with this chemistry. Additive risk with other stimulants and some antidepressants is relevant. Self-care evidence is insufficient; cardiovascular toxicity dominates. Useful OSIRIS series: BP, heart rate and acute neurological red flags.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "stem (herba)",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Ephedrine/pseudoephedrine. Unsupervised teas or extracts are unsafe and often legally restricted. No household recipe.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical or folkloric mentions do not authorise household preparation.",
    "notAReplacement": true,
    "galleryKey": "ephedra-sinica",
    "id": "ephedra-sinica"
  },
  "pennyroyal": {
    "botanicaOnly": true,
    "commonName": "Pennyroyal",
    "botanicalName": "Mentha pulegium",
    "botanicalProfile": "Mentha pulegium L. (Lamiaceae). Pulegone-rich essential oil is hepatotoxic.",
    "conditions": [
      "hepatotoxic pulegone plant — not for self-preparation"
    ],
    "mechanisms": [
      "Pulegone / menthofuran hepatotoxicity; historical abortifacient use is dangerous and not a therapeutic indication."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient or inapplicable self-care evidence. Toxicity dominates. Traditional anecdotes are not clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. No standard medicine class should be ‘replaced’ by this plant. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not combine with medicines by self-experimentation. Toxicity and drug interactions cannot be managed as a folk tea."
      }
    ],
    "monitoring": [
      "This plant is not for self-monitoring as a herbal therapy; seek emergency care for suspected poisoning."
    ],
    "contraindications": [
      "Any unsupervised medicinal use",
      "Pregnancy",
      "Children"
    ],
    "osirisRelevance": "If Mentha pulegium (especially oil) is reported, interpret hepatic injury as pulegone/menthofuran toxicity, not as a mint tea equivalent. Historical abortifacient use is a poisoning pathway, not a gynaecological indication. Correlate ALT/AST, coagulation in acute liver failure patterns, and pregnancy status. Household medicinal evidence is insufficient; hepatotoxicity dominates.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "aerial parts / oil",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Essential oil and concentrated teas have caused liver failure and death. No household medicinal preparation.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical or folkloric mentions do not authorise household preparation.",
    "notAReplacement": true,
    "galleryKey": "pennyroyal",
    "id": "pennyroyal"
  },
  "tansy": {
    "botanicaOnly": true,
    "commonName": "Tansy",
    "botanicalName": "Tanacetum vulgare",
    "botanicalProfile": "Tanacetum vulgare L. (Asteraceae). Thujone-containing plant.",
    "conditions": [
      "thujone-containing toxic plant"
    ],
    "mechanisms": [
      "Neurotoxic thujone; not a validated anthelmintic for home use."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient or inapplicable self-care evidence. Toxicity dominates. Traditional anecdotes are not clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. No standard medicine class should be ‘replaced’ by this plant. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not combine with medicines by self-experimentation. Toxicity and drug interactions cannot be managed as a folk tea."
      }
    ],
    "monitoring": [
      "This plant is not for self-monitoring as a herbal therapy; seek emergency care for suspected poisoning."
    ],
    "contraindications": [
      "Any unsupervised medicinal use",
      "Pregnancy",
      "Children"
    ],
    "osirisRelevance": "If Tanacetum vulgare is reported, interpret neurological findings in a thujone frame: seizures, confusion and GI irritation can occur; it is not a validated home anthelmintic. Essential-oil exposure is more hazardous than incidental garden contact. Evidence for self-care is insufficient; neurotoxicity dominates. Correlate seizure activity and mental status rather than ‘parasite treatment’ narratives.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "aerial parts / oil",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Thujone toxicity. No household medicinal recipe.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical or folkloric mentions do not authorise household preparation.",
    "notAReplacement": true,
    "galleryKey": "tansy",
    "id": "tansy"
  },
  "comfrey": {
    "botanicaOnly": true,
    "commonName": "Comfrey",
    "botanicalName": "Symphytum officinale",
    "botanicalProfile": "Symphytum officinale L. (Boraginaceae). Contains unsaturated pyrrolizidine alkaloids (PAs).",
    "conditions": [
      "pyrrolizidine alkaloid plant — internal use unsafe"
    ],
    "mechanisms": [
      "Hepatic sinusoidal obstruction / veno-occlusive disease from PAs; also allantoin-related traditional wound lore that does not make internal use safe."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient or inapplicable self-care evidence. Toxicity dominates. Traditional anecdotes are not clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. No standard medicine class should be ‘replaced’ by this plant. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not combine with medicines by self-experimentation. Toxicity and drug interactions cannot be managed as a folk tea."
      }
    ],
    "monitoring": [
      "This plant is not for self-monitoring as a herbal therapy; seek emergency care for suspected poisoning."
    ],
    "contraindications": [
      "Any unsupervised medicinal use",
      "Pregnancy",
      "Children"
    ],
    "osirisRelevance": "If Symphytum (especially internal use) is reported, interpret hepatic findings as pyrrolizidine-alkaloid (PA) risk: hepatic sinusoidal obstruction / veno-occlusive disease can present with raised enzymes, ascites or unexplained liver injury. Topical lore about allantoin does not make internal use safe. Self-care internal evidence is insufficient; hepatic toxicity dominates. Useful OSIRIS series: ALT/AST, bilirubin and signs of portal hypertension.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "root / leaf",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Internal teas and capsules are inappropriate because of pyrrolizidine alkaloids. Even some external products are restricted. No internal self-preparation. Do not use on broken skin unless a clinician advises a PA-free authorised product.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical or folkloric mentions do not authorise household preparation.",
    "notAReplacement": true,
    "galleryKey": "comfrey",
    "id": "comfrey"
  },
  "cannabis": {
    "botanicaOnly": true,
    "commonName": "Cannabis",
    "botanicalName": "Cannabis sativa",
    "botanicalProfile": "Cannabis sativa L. (Cannabaceae). Phytocannabinoid plant; legal status and authorised products are jurisdiction-specific.",
    "conditions": [
      "controlled cannabinoid plant — not a BOTANICA household medicine"
    ],
    "mechanisms": [
      "Cannabinoid-receptor (CB1/CB2) agonism; psychotropic and cardiovascular effects depend on delta-9-tetrahydrocannabinol (THC) versus cannabidiol (CBD) composition."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient or inapplicable self-care evidence. Toxicity dominates. Traditional anecdotes are not clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. No standard medicine class should be ‘replaced’ by this plant. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not combine with medicines by self-experimentation. Toxicity and drug interactions cannot be managed as a folk tea."
      }
    ],
    "monitoring": [
      "This plant is not for self-monitoring as a herbal therapy; seek emergency care for suspected poisoning."
    ],
    "contraindications": [
      "Any unsupervised medicinal use",
      "Pregnancy",
      "Children"
    ],
    "osirisRelevance": "If Cannabis is reported, interpret neurological/psychiatric state, heart rate and BP in a cannabinoid-receptor (CB1/CB2) frame: delta-9-tetrahydrocannabinol (THC) can cause tachycardia, orthostatic symptoms, anxiety or psychosis-spectrum effects; cannabidiol (CBD) products may inhibit drug-metabolising enzymes (product-dependent). This is not a licence for recreational instruction. Human self-supply evidence is not a self-care monograph. Correlate heart rate, BP, mood/psychosis symptoms and sedation versus stimulation.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "flowering tops / resin",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Do not provide household extraction (butter, oil, solvent). Authorised cannabis-based medicines are prescription-only in many jurisdictions. Unregulated products vary wildly in delta-9-tetrahydrocannabinol (THC).",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical or folkloric mentions do not authorise household preparation.",
    "notAReplacement": true,
    "galleryKey": "cannabis",
    "id": "cannabis"
  },
  "pasque-flower": {
    "botanicaOnly": true,
    "commonName": "Pasque Flower",
    "botanicalName": "Pulsatilla vulgaris",
    "botanicalProfile": "Anemone/Pulsatilla vulgaris (Ranunculaceae). Fresh plant contains protoanemonin.",
    "conditions": [
      "protoanemonin-containing irritant / toxic plant"
    ],
    "mechanisms": [
      "Mucosal irritant alkylating agent when fresh; dried material is sometimes used in homeopathy at dilutions that are not equivalent to herbal tea."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient or inapplicable self-care evidence. Toxicity dominates. Traditional anecdotes are not clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. No standard medicine class should be ‘replaced’ by this plant. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not combine with medicines by self-experimentation. Toxicity and drug interactions cannot be managed as a folk tea."
      }
    ],
    "monitoring": [
      "This plant is not for self-monitoring as a herbal therapy; seek emergency care for suspected poisoning."
    ],
    "contraindications": [
      "Any unsupervised medicinal use",
      "Pregnancy",
      "Children"
    ],
    "osirisRelevance": "If Pulsatilla (fresh plant) exposure is reported, interpret mucosal, GI and cutaneous irritation as protoanemonin alkylating irritancy. Dried/homeopathic material is not equivalent to herbal tea and should not be used to explain systemic ‘nervine’ effects. Household medicinal evidence is insufficient. Correlate local irritation and GI symptoms as toxicity/irritant pattern, not as established physiological therapy.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "fresh aerial parts",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Fresh plant is vesicant and toxic. No household infusion or tincture recipe is provided. Homeopathic pulsatilla is not the same as a herbal dose.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical or folkloric mentions do not authorise household preparation.",
    "notAReplacement": true,
    "galleryKey": "pasque-flower",
    "id": "pasque-flower"
  },
  "borage": {
    "botanicaOnly": true,
    "commonName": "Borage",
    "botanicalName": "Borago officinalis",
    "botanicalProfile": "Borago officinalis L. (Boraginaceae). Aerial parts may contain pyrrolizidine alkaloids; seed oil is a different material.",
    "conditions": [
      "PA-risk aerial plant; seed oil is a separate article"
    ],
    "mechanisms": [
      "Unsaturated pyrrolizidine alkaloids risk hepatic injury for herb; gamma-linolenic acid in seed oil is not a reason to drink leaf tea."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient or inapplicable self-care evidence. Toxicity dominates. Traditional anecdotes are not clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. No standard medicine class should be ‘replaced’ by this plant. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not combine with medicines by self-experimentation. Toxicity and drug interactions cannot be managed as a folk tea."
      }
    ],
    "monitoring": [
      "This plant is not for self-monitoring as a herbal therapy; seek emergency care for suspected poisoning."
    ],
    "contraindications": [
      "Any unsupervised medicinal use",
      "Pregnancy",
      "Children"
    ],
    "osirisRelevance": "If borage leaf/herb tea is reported, interpret hepatic risk from unsaturated pyrrolizidine alkaloids; seed oil (gamma-linolenic acid) is a different article and does not make leaf tea safe. Correlate ALT/AST if internal herb has been used. Evidence for safe self-care herb tea is insufficient; PA hepatotoxicity is the diagnostically relevant point. Do not treat culinary-looking leaves as an established anti-inflammatory.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "aerial parts (tea unsafe); seed oil is industrial",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Do not prepare leaf/flower teas. Pyrrolizidine alkaloid risk. Seed oil, if used, is a manufactured food/supplement with its own labelling — not described as a kitchen extract here.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical or folkloric mentions do not authorise household preparation.",
    "notAReplacement": true,
    "galleryKey": "borage",
    "id": "borage"
  },
  "chamomile": {
    "botanicaOnly": true,
    "commonName": "Chamomile",
    "botanicalName": "Matricaria chamomilla / M. recutita",
    "botanicalProfile": "Matricaria recutita L. (Asteraceae), German chamomile flower (Matricariae flos). Roman chamomile (Chamaemelum nobile) is a different herbal substance.",
    "conditions": [
      "traditional relief of mild gastrointestinal spasm and as a mild traditional tea for restlessness after serious disease is excluded"
    ],
    "mechanisms": [
      "Essential oil (bisabolol, chamazulene) and flavonoids with traditional spasmolytic / soothing use; not a Proton-Pump Inhibitor (PPI) or anxiolytic drug."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional use with limited clinical data for some dyspepsia / mucosal soothing contexts. Not established as equivalent to licensed gastrointestinal or psychiatric medicines.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. May be discussed alongside mild functional dyspepsia care, not as a Proton-Pump Inhibitor (PPI) or benzodiazepine analogue. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Asteraceae allergy (including ragweed). Additive sedation is possible with Central Nervous System (CNS) depressants. Coumarin-related theoretical bleeding talk is not a reason to stop anticoagulants without advice, but report bleeding."
      }
    ],
    "monitoring": [
      "Allergy (especially Asteraceae)",
      "Symptoms of persisting dyspepsia or weight loss need medical review, not more tea"
    ],
    "contraindications": [
      "Known hypersensitivity to chamomile or other Asteraceae"
    ],
    "osirisRelevance": "If a patient reports chamomile, interpret mild GI spasm, restlessness and possible additive sedation with CNS depressants in context of bisabolol/chamazulene and flavonoids. Asteraceae (including ragweed) allergy can explain rash, wheeze or anaphylaxis-pattern symptoms. Coumarin-related bleeding talk is theoretical — report bleeding on anticoagulants rather than assuming antiplatelet equivalence. Evidence is traditional with limited clinical data, not Proton-Pump Inhibitor (PPI) or anxiolytic equivalence. Useful OSIRIS series: dyspepsia, sedation/restlessness and allergy.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "flower heads",
        "materialState": "dried herbal substance or comminuted flowers",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified (Committee on Herbal Medicinal Products (HMPC) herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "Adolescents, adults and elderly (gastrointestinal traditional indication in the EU monograph): 1.5–4 g herbal substance or comminuted herbal substance in 150 ml boiling water as a herbal infusion, 3–4 times daily. Child ranges in the same monograph are age-banded and must not be copied from the adult figure.",
        "parametersVerified": true,
        "sourceNote": "EMA/HMPC European Union herbal monograph on Matricaria recutita L., flos",
        "safetyLimitations": "Asteraceae allergy. Oral tea is not equivalent to steam inhalation or to the listed ethanol liquid extracts. Do not use homemade infusions in the eye.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      },
      {
        "type": "Inhalation (steam)",
        "plantPart": "flower heads",
        "materialState": "herbal substance or comminuted herbal substance",
        "solvent": "water",
        "temperature": "hot water (steam inhalation, not a drinking tea)",
        "ratio": "3–10 g herbal substance or comminuted herbal substance in 100 ml hot water for inhalation (adolescents, adults and elderly; monograph indication 2)",
        "parametersVerified": true,
        "form": "steam for inhalation",
        "sourceNote": "EMA/HMPC Matricaria recutita L., flos — inhalation posology is a different indication from the oral infusion",
        "safetyLimitations": "Not therapeutically equivalent to the drinking infusion. Scald risk. Not for unsupervised use in young children as a kitchen steam tent without clinical advice.",
        "route": "inhalation"
      }
    ],
    "traditionalUses": "Traditional gastrointestinal and soothing tea.",
    "notAReplacement": true,
    "galleryKey": "chamomile",
    "id": "chamomile"
  },
  "calendula": {
    "botanicaOnly": true,
    "commonName": "Calendula",
    "botanicalName": "Calendula officinalis",
    "botanicalProfile": "Calendula officinalis L. (Asteraceae). Medicinal herbal substance is typically the dried ligulate flowers (Calendulae flos).",
    "conditions": [
      "traditional cutaneous use on minor wounds after cleaning; traditional oral use is less prominent than topical in EU monographs"
    ],
    "mechanisms": [
      "Triterpenoid and flavonoid traditional support of local tissue soothe; not an antibiotic or corticosteroid."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use (especially cutaneous). Limited clinical evidence; not equivalent to wound-infection medicines.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Skin-directed traditional use is not a substitute for antimicrobial or steroid therapy when those are indicated. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Asteraceae allergy. Do not put homemade oily macerates into deep or infected wounds."
      }
    ],
    "monitoring": [
      "Worsening redness, pus or fever needs medical care"
    ],
    "contraindications": [
      "Asteraceae hypersensitivity"
    ],
    "osirisRelevance": "If a patient reports calendula, the main interpretation issue is usually local cutaneous response (triterpenoid/flavonoid traditional soothing versus Asteraceae contact allergy, delayed healing, or infection mislabelled as ‘needing more ointment’). It is not an antibiotic or corticosteroid. Oral use is less prominent than topical in EU-type monographs. Evidence is traditional, especially cutaneous. Correlate wound appearance, fever and allergy rather than systemic lab claims.",
    "preparations": [
      {
        "type": "Infusion (oral traditional teas exist; cutaneous lotions are a different use)",
        "plantPart": "dried flowers",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water",
        "ratio": "EMA/HMPC Calendulae flos describes herbal preparations including tea and extracts; use labelled product strength. Homemade wound ‘washes’ are not sterile",
        "parametersVerified": false,
        "finishing": "strain",
        "form": "herbal tea or cooled infusion used only as labelled",
        "sourceNote": "EMA/HMPC Calendula officinalis flower",
        "safetyLimitations": "Oral tea, tincture and infused oil for skin are not therapeutically equivalent. Infused oils are not sterile dressings.",
        "route": "oral or cutaneous as specified by an authorised product — do not improvise eye or deep-wound use"
      }
    ],
    "traditionalUses": "Traditional skin-soothing flower.",
    "notAReplacement": true,
    "galleryKey": "calendula",
    "id": "calendula"
  },
  "marigold": {
    "botanicaOnly": true,
    "commonName": "Marigold",
    "botanicalName": "Calendula officinalis (gallery identity)",
    "botanicalProfile": "This gallery card is labelled Marigold. In European herbal practice ‘marigold’ usually means Calendula officinalis, which is already described under Calendula. Tagetes (African marigold) is a different genus and is not assumed here.",
    "conditions": [
      "see Calendula if the material is Calendula officinalis; Tagetes species are not automatically equivalent"
    ],
    "mechanisms": [
      "If the material is Calendula, mechanisms follow calendula flavonoids/triterpenes. Tagetes is not given a separate verified mechanism here."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "This card is an overlapping gallery identity. Evidence follows Calendula only if the botanical material is confirmed as Calendula officinalis.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Do not treat Tagetes and Calendula as interchangeable with any medicine class. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Confirm species before any medicinal use. Asteraceae allergy if Calendula."
      }
    ],
    "monitoring": [
      "Species confirmation"
    ],
    "contraindications": [
      "Unknown species",
      "Asteraceae allergy if calendula"
    ],
    "osirisRelevance": "This gallery identity may be Calendula officinalis or Tagetes; without Latin confirmation, OSIRIS cannot assign a single pharmacological relevance. If the material is confirmed calendula, interpret as for calendula (cutaneous soothing versus Asteraceae allergy). Tagetes is not automatically equivalent. Human evidence cannot be transferred until species is known. Note species uncertainty when correlating skin or GI findings.",
    "preparations": [
      {
        "type": "See Calendula when species is Calendula officinalis",
        "plantPart": "not assumed",
        "parametersVerified": false,
        "form": "no separate marigold recipe",
        "sourceNote": "Gallery overlap; not a second monograph",
        "safetyLimitations": "Do not copy calendula quantities onto Tagetes. If the packet is Calendula officinalis, use the Calendula preparation description, not a generic marigold template."
      }
    ],
    "traditionalUses": "Name overlap with calendula.",
    "notAReplacement": true,
    "galleryKey": "marigold",
    "id": "marigold"
  },
  "sage": {
    "botanicaOnly": true,
    "commonName": "Sage",
    "botanicalName": "Salvia officinalis",
    "botanicalProfile": "Salvia officinalis L. (Lamiaceae). Medicinal herbal substance is typically the dried leaf (Salviae officinalis folium). High-thujone chemotypes and essential oil are not equivalent to tea.",
    "conditions": [
      "traditional oromucosal use for mouth/throat irritation; traditional oral use is time-limited because of thujone"
    ],
    "mechanisms": [
      "Essential-oil (thujone-containing) and phenolic traditional astringent / antimicrobial lore; not an antibiotic."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional use with some clinical work on menopausal sweating / throat comfort in specific products. Not an oestrogen or antibiotic replacement.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Throat and menopausal-symptom traditional use is not hormone-replacement therapy. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Pregnancy. Epilepsy (thujone). Prolonged high-dose tea or undiluted essential oil is inappropriate. May interact theoretically with anticonvulsants."
      }
    ],
    "monitoring": [
      "Limit duration as on authorised products",
      "Seizure history: avoid unless a clinician agrees"
    ],
    "contraindications": [
      "Pregnancy",
      "Known hypersensitivity"
    ],
    "osirisRelevance": "If a patient reports Salvia officinalis, interpret oromucosal/throat symptoms and, for some products, vasomotor sweating in a phenolic/essential-oil frame. Thujone content makes prolonged high-dose tea or undiluted oil relevant to seizure risk and to anticonvulsant context; pregnancy is a restriction. This is not an antibiotic or oestrogen. Evidence is traditional plus limited product-specific clinical work. Useful OSIRIS series: mucosal symptoms, seizure history, and duration of use.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "leaf",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Salviae officinalis folium: herbal tea / oromucosal infusion as specified in the monograph and labelled products; essential oil is a different, more thujone-concentrated preparation",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Salvia officinalis leaf",
        "safetyLimitations": "Do not swallow essential oil. Restrict duration. Not for pregnancy. Thujone-rich oils are not kitchen-equivalent to a weak tea.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional throat and digestive leaf.",
    "notAReplacement": true,
    "galleryKey": "sage",
    "id": "sage"
  },
  "meadow-sage": {
    "botanicaOnly": true,
    "commonName": "Meadow Sage",
    "botanicalName": "Salvia pratensis (gallery name)",
    "botanicalProfile": "Gallery name Meadow Sage most often denotes Salvia pratensis L., which is not the same EU herbal substance as Salvia officinalis (sage leaf). Do not copy sage-leaf posology onto meadow sage.",
    "conditions": [
      "insufficient distinct medicinal monograph in this dataset for Salvia pratensis"
    ],
    "mechanisms": [
      "Not established as identical to Salvia officinalis phenolic/thujone profile."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient reliable EU herbal-monograph coverage in this record to treat meadow sage as garden sage.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not mapped to a pharmaceutical class. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not assume sage-leaf safety or doses."
      }
    ],
    "monitoring": [
      "Species confirmation"
    ],
    "contraindications": [
      "Unknown equivalence to sage leaf"
    ],
    "osirisRelevance": "Salvia pratensis is not established as identical to garden sage (S. officinalis) phenolic/thujone profile. Human clinical evidence is insufficient to state specific lab or vital-sign effects. If the patient actually used unidentified ‘sage’, interpret only as possible Lamiaceae essential-oil exposure (GI upset, allergy) and do not copy S. officinalis thujone or menopausal data. Species confirmation is the diagnostic first step.",
    "preparations": [
      {
        "type": "No verified household medicinal preparation",
        "plantPart": "not verified for this gallery identity",
        "parametersVerified": false,
        "form": "limitation preserved",
        "sourceNote": "No EMA/HMPC monograph equated here to Salvia officinalis",
        "safetyLimitations": "Exact infusion quantities are not displayed because the gallery identity is not safely assumed to be Salvia officinalis."
      }
    ],
    "traditionalUses": "Folk use is not a verified monograph.",
    "notAReplacement": true,
    "galleryKey": "meadow-sage",
    "id": "meadow-sage"
  },
  "nettle": {
    "botanicaOnly": true,
    "commonName": "Nettle",
    "botanicalName": "Urtica dioica",
    "botanicalProfile": "Urtica dioica L. (Urticaceae). Leaf (Urticae folium) and root (Urticae radix) are different herbal substances with different traditional uses (leaf vs prostate-root tradition) and are not equivalent.",
    "conditions": [
      "leaf: traditional diuretic / joint-load teas; root: traditional urinary symptoms of benign prostatic enlargement after serious disease is excluded — not interchangeable"
    ],
    "mechanisms": [
      "Leaf phenolics and micronutrients in traditional diuretic use; root lignans/sterols in prostate tradition; neither is a diuretic drug or an alpha-blocker."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional use; some clinical work on root extracts for lower-urinary symptoms is product-specific and not established as equivalent to urological medicines.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Root extracts are not tamsulosin. Leaf tea is not a loop diuretic. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "May increase diuresis; caution with antihypertensives and lithium. Root products: exclude prostate cancer red flags medically. Fresh stinging hairs are not the medicinal dried-leaf tea."
      }
    ],
    "monitoring": [
      "Urinary red flags (blood, weight loss, bone pain) need medical assessment",
      "Blood Pressure (BP) if used with antihypertensives"
    ],
    "contraindications": [
      "Oedema from heart or kidney failure should not be self-treated with ‘diuretic teas’"
    ],
    "osirisRelevance": "If a patient reports Urtica, interpret by plant part: leaf teas have traditional diuretic/joint-load use (volume status, BP with antihypertensives, lithium caution); root products are used in prostate-symptom tradition and can mask or delay investigation of haematuria, retention or cancer red flags. Neither is a diuretic drug or an alpha-blocker. Fresh stings are a separate urticaria mechanism. Evidence is traditional; root trials are product-specific. Useful OSIRIS series: BP, urinary red flags, and oedema cause.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "leaf",
        "materialState": "dried, comminuted (not fresh sting)",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Urticae folium herbal tea: comminuted leaf in boiling water as specified in the current leaf monograph / labelled tea",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Urtica dioica leaf",
        "safetyLimitations": "Leaf tea is not root extract. Fresh plant stings are not a dose.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      },
      {
        "type": "Decoction / extract (root)",
        "plantPart": "root",
        "materialState": "dried comminuted root or manufactured extract",
        "solvent": "water for decoction in traditional pharmacy; many prostate trials used specific extracts",
        "parametersVerified": false,
        "form": "root decoction or finished extract — not equivalent to leaf tea",
        "sourceNote": "EMA/HMPC Urticae radix is a separate monograph",
        "safetyLimitations": "Do not invent simmering minutes or root-to-water ratios here; follow labelled root products. Not a substitute for investigation of prostatic disease.",
        "route": "oral"
      }
    ],
    "traditionalUses": "Traditional leaf and distinct root uses.",
    "notAReplacement": true,
    "galleryKey": "nettle",
    "id": "nettle"
  },
  "horsetail": {
    "botanicaOnly": true,
    "commonName": "Horsetail",
    "botanicalName": "Equisetum arvense",
    "botanicalProfile": "Equisetum arvense L. (Equisetaceae). Sterile aerial stems (Equiseti herba). Marsh horsetail (E. palustre) is toxic and must not be substituted.",
    "conditions": [
      "traditional diuretic tea for mild urinary complaints after serious disease is excluded"
    ],
    "mechanisms": [
      "Silica-rich traditional astringent/diuretic use; not a prescription diuretic."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Not established diuretic-drug evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a loop or thiazide diuretic analogue for substitution. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Nicotine-containing adulteration historically; identity must be E. arvense. Avoid in oedema of cardiac/renal origin. Thiamine issues discussed with crude horsetail are a reason not to use long-term crude herb casually."
      }
    ],
    "monitoring": [
      "Oedema cause must be medically known",
      "Stop if allergic rash"
    ],
    "contraindications": [
      "Cardiac or renal oedema as a self-care target"
    ],
    "osirisRelevance": "If a patient reports Equisetum arvense, interpret mild urinary volume change as traditional silica-rich diuretic folklore, not prescription diuretic pharmacology. Cardiac or renal oedema must not be attributed to ‘successful diuresis’ from tea. Identity matters (historical nicotine adulteration). Long-term crude herb has been discussed in relation to thiamine. Evidence is traditional only. Useful OSIRIS series: oedema cause, electrolytes if volume shifts are claimed, and allergy.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "sterile aerial stem",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Equiseti herba herbal tea as specified in the monograph / labelled tea; species identity is critical",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Equisetum arvense",
        "safetyLimitations": "Do not forage unless expertly identified. Not for cardiac oedema.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional diuretic aerial stems.",
    "notAReplacement": true,
    "galleryKey": "horsetail",
    "id": "horsetail"
  },
  "yarrow": {
    "botanicaOnly": true,
    "commonName": "Yarrow",
    "botanicalName": "Achillea millefolium",
    "botanicalProfile": "Achillea millefolium L. (Asteraceae). Flowering tops (Millefolii herba). Chemotypes (chamazulene vs not) differ.",
    "conditions": [
      "traditional use for mild spasm of the gastrointestinal tract and as a traditional ‘diaphoretic’ tea"
    ],
    "mechanisms": [
      "Sesquiterpene lactones and essential oil; traditional spasmolytic lore; not an antispasmodic prescription drug."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Limited clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a substitute for antispasmodics or antibiotics. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Asteraceae allergy. Thujone-containing oils are not the tea. Pregnancy caution in traditional sources."
      }
    ],
    "monitoring": [
      "Allergy",
      "Bleeding or unexplained fever needs medicine, not diaphoretic tea"
    ],
    "contraindications": [
      "Asteraceae hypersensitivity",
      "Pregnancy unless a clinician reviews"
    ],
    "osirisRelevance": "If a patient reports yarrow, interpret mild GI spasm and diaphoretic/fever comfort in a sesquiterpene-lactone and essential-oil frame, not as an antispasmodic drug. Asteraceae allergy is a real alternative explanation for rash or respiratory symptoms. Pregnancy caution appears in traditional sources. Bleeding or unexplained fever needs medical interpretation, not more diaphoretic tea. Evidence is traditional; clinical evidence is limited.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "flowering tops",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Millefolii herba herbal tea as specified in the current monograph / labelled product",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Achillea millefolium",
        "safetyLimitations": "Essential oil is not equivalent to tea.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional flowering-tops tea.",
    "notAReplacement": true,
    "galleryKey": "yarrow",
    "id": "yarrow"
  },
  "wormwood": {
    "botanicaOnly": true,
    "commonName": "Wormwood",
    "botanicalName": "Artemisia absinthium",
    "botanicalProfile": "Artemisia absinthium L. (Asteraceae). Aerial parts (Absinthii herba). Thujone-containing essential oil is the main safety issue.",
    "conditions": [
      "traditional bitter for dyspepsia after serious disease is excluded; not a recreational absinthe recipe"
    ],
    "mechanisms": [
      "Bitter sesquiterpene lactones stimulating digestive secretions traditionally; thujone is neurotoxic at concentrated doses."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional bitter. Not established as a liver or parasite medicine.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an anthelmintic drug or alcohol beverage formula. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Seizure risk with thujone. Pregnancy. Essential oil must not be taken. Alcoholic bitters are not a kitchen essential-oil dose."
      }
    ],
    "monitoring": [
      "Do not use in epilepsy",
      "Stop if confusion or seizures"
    ],
    "contraindications": [
      "Pregnancy",
      "Epilepsy",
      "Hypersensitivity to Artemisia / Asteraceae"
    ],
    "osirisRelevance": "If a patient reports Artemisia absinthium, interpret dyspepsia in a bitter sesquiterpene-lactone frame, and neurological risk in a thujone frame (seizures, confusion) especially with concentrated oils or alcoholic bitters — not a kitchen essential-oil dose. Asteraceae allergy and pregnancy are relevant. Traditional bitter use is not established liver or parasite medicine. Correlate seizure history, mental status and GI symptoms.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "aerial parts",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Absinthii herba: aqueous herbal tea as specified; thujone limits apply to authorised products. No absinthe distillation method is provided",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Artemisia absinthium",
        "safetyLimitations": "Do not distill or swallow essential oil. Authorised thujone limits are product-specific. Not for pregnancy.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional bitter aerial parts.",
    "notAReplacement": true,
    "galleryKey": "wormwood",
    "id": "wormwood"
  },
  "plantain": {
    "botanicaOnly": true,
    "commonName": "Plantain",
    "botanicalName": "Plantago lanceolata",
    "botanicalProfile": "Plantago lanceolata L. (Plantaginaceae), ribwort plantain leaf (Plantaginis lanceolatae folium). This is not Plantago ovata (psyllium husk), which is a different gallery/library identity.",
    "conditions": [
      "traditional oral or oromucosal use for irritation of mouth and throat and associated dry cough"
    ],
    "mechanisms": [
      "Mucilage polysaccharides coating mucosa; not an antitussive opioid or antibiotic."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional demulcent use. Limited clinical evidence for specific extracts.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a cough-suppressant medicine substitute when pneumonia or asthma treatment is indicated. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not confuse with psyllium husk bulk laxative. Allergy uncommon but possible."
      }
    ],
    "monitoring": [
      "Red-flag cough (blood, fever, breathlessness) needs medical care"
    ],
    "contraindications": [
      "Known hypersensitivity"
    ],
    "osirisRelevance": "If a patient reports Plantago lanceolata leaf, interpret dry cough and oromucosal irritation as mucilage coating, not opioid antitussive or antibiotic effect. Do not confuse with psyllium husk bulk laxative (different Plantago article) when interpreting bowel changes. Red-flag cough (blood, fever, breathlessness) is not a demulcent problem. Evidence is traditional with limited extract data.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "leaf",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Plantaginis lanceolatae folium herbal tea / oromucosal use as specified in the monograph",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Plantago lanceolata leaf",
        "safetyLimitations": "Not psyllium. Not a household poultice standard for infected wounds.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional demulcent leaf.",
    "notAReplacement": true,
    "galleryKey": "plantain",
    "id": "plantain"
  },
  "mullein": {
    "botanicaOnly": true,
    "commonName": "Mullein",
    "botanicalName": "Verbascum spp.",
    "botanicalProfile": "Verbascum thapsus L. / V. densiflorum (Scrophulariaceae). Flower (Verbasci flos) is the usual EU herbal substance; leaf is used in folk practice but is not automatically the same monograph. Glandular hairs should be strained.",
    "conditions": [
      "traditional demulcent tea for throat irritation and associated cough"
    ],
    "mechanisms": [
      "Mucilage; not an antibiotic or inhaler."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Limited clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a substitute for inhaled corticosteroids or antimicrobials. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Strain hairs (irritant). Do not use smoked leaf as ‘lung medicine’. Root-mullein gallery card is a different plant part."
      }
    ],
    "monitoring": [
      "Strain thoroughly",
      "Infective red flags need medical care"
    ],
    "contraindications": [
      "Hypersensitivity"
    ],
    "osirisRelevance": "If a patient reports Verbascum flower tea, interpret throat irritation and associated cough as mucilage demulcence; irritant hairs if unstrained can themselves cause throat/airway symptoms. Smoked leaf is not a lung medicine and complicates respiratory interpretation. Not an antibiotic or inhaler. Evidence is traditional; clinical evidence is limited.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "flower (preferred official material)",
        "materialState": "dried; remove or strain irritant hairs",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain through fine cloth to remove hairs",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Verbasci flos herbal tea as specified; always strain",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Verbascum flower",
        "safetyLimitations": "Leaf smoke is not a preparation described here. Flower tea is not equivalent to root decoctions.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional flower tea.",
    "notAReplacement": true,
    "galleryKey": "mullein",
    "id": "mullein"
  },
  "root-mullein": {
    "botanicaOnly": true,
    "commonName": "Root Mullein",
    "botanicalName": "Verbascum spp. (root)",
    "botanicalProfile": "Gallery identity emphasises root, whereas European herbal monographs for mullein more often specify flower. Root and flower are not equivalent.",
    "conditions": [
      "folk root uses are not assumed to match Verbasci flos evidence"
    ],
    "mechanisms": [
      "Insufficient verified mechanism for root as distinct from flower mucilage."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient pharmacopoeial root monograph in this record to give an exact decoction.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not mapped to a pharmaceutical class. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not copy flower-tea quantities onto root."
      }
    ],
    "monitoring": [
      "Prefer identified official flower products if seeking mullein"
    ],
    "contraindications": [
      "Unidentified root material"
    ],
    "osirisRelevance": "Root Verbascum is not assumed to share flower-mucilage evidence. Human pharmacopoeial evidence for a distinct root decoction is insufficient to state specific systemic effects. If used, interpret only nonspecific GI irritation or misidentified material, and do not copy flower-tea cough claims onto root. Prefer identified official flower products when correlating cough findings.",
    "preparations": [
      {
        "type": "No verified exact root decoction in this record",
        "plantPart": "root (gallery identity)",
        "parametersVerified": false,
        "form": "limitation preserved",
        "sourceNote": "Flower (Verbasci flos) is the better-documented herbal substance",
        "safetyLimitations": "Exact root-to-water simmer times are not displayed. Self-preparation of unidentified root is not advised."
      }
    ],
    "traditionalUses": "Folk root use, not equated to flower tea.",
    "notAReplacement": true,
    "galleryKey": "root-mullein",
    "id": "root-mullein"
  },
  "marshmallow": {
    "botanicaOnly": true,
    "commonName": "Marshmallow",
    "botanicalName": "Althaea officinalis",
    "botanicalProfile": "Althaea officinalis L. (Malvaceae). Root (Althaeae radix) and leaf are different. Cold maceration is the classical root method to limit starch extraction; boiling is not assumed equivalent.",
    "conditions": [
      "traditional demulcent for dry cough and gastrointestinal mucosal irritation"
    ],
    "mechanisms": [
      "Mucilage polysaccharides; coats mucosa; may delay absorption of other medicines if taken together."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional demulcent. Limited clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a cough-suppressant or antacid drug analogue for substitution. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Separate from other oral medicines (often 30–60 minutes) because mucilage can reduce absorption. Diabetes: some products affect glycaemia modestly — monitor if relevant."
      }
    ],
    "monitoring": [
      "Timing versus other medicines",
      "Red-flag cough / bleeding"
    ],
    "contraindications": [
      "Hypersensitivity"
    ],
    "osirisRelevance": "If a patient reports Althaea mucilage, interpret dry cough and GI mucosal irritation as polysaccharide coating. Mucilage can delay absorption of other oral medicines if taken together (timing matters when interpreting drug levels or apparent ‘non-response’). Modest glycaemic effects are discussed for some products — relevant if diabetes medicines are present. Evidence is traditional; clinical evidence is limited. Useful OSIRIS series: cough/GI symptoms, medicine timing, and glucose if relevant.",
    "preparations": [
      {
        "type": "Maceration (root, aqueous)",
        "plantPart": "root",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "water as a macerate (not presented in the EU monograph as a boiling infusion for this root)",
        "ratio": "Adolescents, adults and elderly: 0.5–3 g comminuted herbal substance in 150 ml of water as a macerate several times daily (maximum daily dose 15 g). A separate monograph indication uses 2–5 g in 150 ml water as a macerate 3 times daily (maximum daily dose 15 g). These two indication bands are not interchangeable by assumption.",
        "time": "The EU monograph specifies a macerate, not a kitchen simmering time. Follow labelled product maceration time when present; a minute-count is not invented here.",
        "finishing": "strain",
        "parametersVerified": true,
        "form": "mucilaginous macerate for oral or oromucosal use",
        "sourceNote": "EMA/HMPC European Union herbal monograph on Althaea officinalis L., radix",
        "safetyLimitations": "Macerate is not equivalent to a hot decoction or to liquid extract (Drug Extract Ratio (DER) 1:19.5–23.5). Mucilage may delay absorption of other oral medicines if taken together. Not a cough-suppressant drug substitute.",
        "route": "oral / oromucosal",
        "storage": "Prepare freshly unless a labelled product states otherwise"
      }
    ],
    "traditionalUses": "Traditional mucilage root.",
    "notAReplacement": true,
    "galleryKey": "marshmallow",
    "id": "marshmallow"
  },
  "meadowsweet": {
    "botanicaOnly": true,
    "commonName": "Meadowsweet",
    "botanicalName": "Filipendula ulmaria",
    "botanicalProfile": "Filipendula ulmaria (L.) Maxim. (Rosaceae). Flowering tops (Filipendulae ulmariae herba). Contains salicylate-related glycosides; not pharmaceutical aspirin.",
    "conditions": [
      "traditional use for mild febrile common-cold discomfort and mild joint aches after serious disease is excluded"
    ],
    "mechanisms": [
      "Salicylaldehyde / salicylate-related compounds; overlapping physiology with aspirin-type drugs but not dose-equivalent."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Not established antiplatelet evidence. Not a Non-Steroidal Anti-Inflammatory Drug (NSAID) replacement.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Overlapping salicylate physiology — NOT a potential alternative to aspirin or Non-Steroidal Anti-Inflammatory Drugs (NSAIDs). Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Aspirin / Non-Steroidal Anti-Inflammatory Drug (NSAID) hypersensitivity, asthma with salicylate sensitivity, active peptic ulcer, children with viral illness (Reye-pattern caution), anticoagulants — clinician review."
      }
    ],
    "monitoring": [
      "Bleeding",
      "Wheeze in salicylate-sensitive asthma"
    ],
    "contraindications": [
      "Salicylate hypersensitivity",
      "Active gastrointestinal ulcer without advice"
    ],
    "osirisRelevance": "If a patient reports Filipendula ulmaria, interpret inflammatory discomfort, bleeding and asthma in a salicylate-related frame (salicylaldehyde/salicylate-overlapping compounds): not dose-equivalent to aspirin, but salicylate hypersensitivity, peptic ulcer, anticoagulant overlap and Reye-pattern caution in children with viral illness are diagnostically relevant. Evidence is traditional, not established antiplatelet evidence. Useful OSIRIS series: bleeding, wheeze in salicylate-sensitive asthma, and GI ulcer symptoms.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "flowering tops",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Filipendulae ulmariae herba herbal tea as specified in the monograph / labelled tea",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC meadowsweet",
        "safetyLimitations": "Not aspirin. Not for children with influenza-like illness.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional salicylate-containing flowering tops.",
    "notAReplacement": true,
    "galleryKey": "meadowsweet",
    "id": "meadowsweet"
  },
  "linden-flower": {
    "botanicaOnly": true,
    "commonName": "Linden Flower",
    "botanicalName": "Tilia spp.",
    "botanicalProfile": "Tilia cordata Mill. / T. platyphyllos Scop. (Malvaceae). Flower (Tiliae flos), often with bract. Lime-tree wood charcoal is a different article.",
    "conditions": [
      "traditional tea for restlessness and common-cold comfort"
    ],
    "mechanisms": [
      "Mucilage and flavonoids; traditional diaphoretic / soothing tea; not a hypnotic drug."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Limited clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a benzodiazepine or antiviral substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Allergy. Excessive old flowers can be slimy; use pharmacopoeial quality. Cardiac oedema is not a tea indication."
      }
    ],
    "monitoring": [
      "Allergy",
      "Fever red flags"
    ],
    "contraindications": [
      "Hypersensitivity"
    ],
    "osirisRelevance": "If a patient reports Tilia flower, interpret restlessness and common-cold comfort as traditional mucilage/flavonoid diaphoretic tea, not hypnotic-drug sedation. Allergy can explain rash. Cardiac oedema is not a tea indication and should not be read as ‘diuresis success’. Evidence is traditional; clinical evidence is limited. Correlate fever red flags versus mild self-limited cold symptoms.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "flower (Tiliae flos)",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified (Committee on Herbal Medicinal Products (HMPC) herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "Adolescents, adults and elderly: 1.5 g comminuted herbal substance in 150 ml boiling water as a herbal infusion, 2–4 times daily (daily dose 3–6 g). A child band in the same monograph uses 1 g in 150 ml, 2–4 times daily — not the adult figure.",
        "parametersVerified": true,
        "sourceNote": "EMA/HMPC Community herbal monograph on Tilia cordata / T. platyphyllos / T. × vulgaris flos",
        "safetyLimitations": "Not a benzodiazepine substitute. Seek advice if common-cold symptoms persist longer than 1 week (monograph). Liquid extract and tincture listed in the same monograph are not equivalent to the tea.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      },
      {
        "type": "Tincture / liquid extract",
        "plantPart": "flower",
        "materialState": "finished liquid as labelled",
        "ratio": "HMPC liquid extract (Drug Extract Ratio (DER) 1:1) 2 ml, 1–2 times daily; tincture 1 ml, 1–2 times daily",
        "parametersVerified": true,
        "form": "finished liquid extract or tincture",
        "sourceNote": "EMA/HMPC Tilia flower monograph",
        "safetyLimitations": "Not equivalent to the 1.5 g / 150 ml herbal tea. No household ethanol recipe is provided.",
        "route": "oral, as labelled"
      }
    ],
    "traditionalUses": "Traditional flower tea.",
    "notAReplacement": true,
    "galleryKey": "linden-flower",
    "id": "linden-flower"
  },
  "elderflower": {
    "botanicaOnly": true,
    "commonName": "Elderflower",
    "botanicalName": "Sambucus nigra (flos)",
    "botanicalProfile": "Sambucus nigra L. (Adoxaceae). Flower (Sambuci flos) is the usual tea material. Ripe berry products are a different herbal substance; unripe berries/leaves are irritant / toxic and are not tea.",
    "conditions": [
      "traditional diaphoretic tea for early common-cold symptoms"
    ],
    "mechanisms": [
      "Flavonoids; traditional diaphoretic; not an antiviral drug."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional flower tea; some clinical work on specific berry extracts is not transferable to homemade flower tea.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an antiviral or antibiotic substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not use leaves or unripe green berries as tea. Diabetes products: some berry extracts affect glycaemia — flower tea is still not a diabetes medicine. Cyanogenic glycosides concern is for other plant parts."
      }
    ],
    "monitoring": [
      "Do not forage ambiguous parts",
      "High fever or dyspnoea: medical care"
    ],
    "contraindications": [
      "Hypersensitivity"
    ],
    "osirisRelevance": "If a patient reports Sambucus nigra flower tea, interpret early cold/diaphoretic symptoms as flavonoid tradition, not antiviral pharmacology. Leaves and unripe berries are a separate cyanogenic/GI-toxicity issue and must not be folded into flower-tea interpretation. Some berry extracts affect glycaemia in product-specific work — that does not transfer automatically to homemade flower tea. Evidence is traditional; berry trials ≠ flower tea. Correlate fever/dyspnoea red flags.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "flower",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Sambuci flos herbal tea as specified in the monograph / labelled tea",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Sambucus nigra flower",
        "safetyLimitations": "Berry juice/extracts are not this infusion. Leaves/stems are not used.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional flower tea.",
    "notAReplacement": true,
    "galleryKey": "elderflower",
    "id": "elderflower"
  },
  "elder": {
    "botanicaOnly": true,
    "commonName": "Elder",
    "botanicalName": "Sambucus nigra (ambiguous gallery part)",
    "botanicalProfile": "Gallery title Elder may mean the whole shrub. Only dried flower (and separately manufactured ripe-berry products) have a clear EU herbal-medicine lane. Bark, leaf and unripe berry are not presented as teas.",
    "conditions": [
      "see Elderflower for flower tea; berry products are manufactured and not a garden decoction in this record"
    ],
    "mechanisms": [
      "Part-dependent; unspecified ‘elder’ has no single mechanism."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient because the card does not specify plant part. Flower evidence does not authorise bark decoction.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not mapped as an antiviral drug analogue. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Unripe berries, leaves and bark: do not self-prepare."
      }
    ],
    "monitoring": [
      "Use identified flower products or authorised berry products only"
    ],
    "contraindications": [
      "Unspecified plant part"
    ],
    "osirisRelevance": "Unspecified ‘elder’ has no single plant-part pharmacology. Flower tea, manufactured berry extracts, and leaves/bark/unripe berries are different interpretation problems (from mild diaphoretic tradition to GI/cyanogenic toxicity). Human evidence cannot be applied until the part is identified. Record the part used before correlating glucose, GI or respiratory findings.",
    "preparations": [
      {
        "type": "No unspecified ‘elder’ recipe",
        "plantPart": "unspecified — use flower monograph if flowers",
        "parametersVerified": false,
        "form": "limitation",
        "sourceNote": "Part must match Sambuci flos or a labelled berry product",
        "safetyLimitations": "No bark or leaf decoction quantities are provided."
      }
    ],
    "traditionalUses": "Folk ‘elder’ is ambiguous.",
    "notAReplacement": true,
    "galleryKey": "elder",
    "id": "elder"
  },
  "dandelion": {
    "botanicaOnly": true,
    "commonName": "Dandelion",
    "botanicalName": "Taraxacum officinale",
    "botanicalProfile": "Taraxacum officinale F.H.Wigg. aggr. (Asteraceae). Leaf (Taraxaci folium) and root (Taraxaci radix) are different (leaf more diuretic tradition; root more bitter/digestive).",
    "conditions": [
      "leaf: traditional diuretic; root: traditional bitter for dyspepsia — not equivalent"
    ],
    "mechanisms": [
      "Bitter sesquiterpene lactones; potassium-rich leaf tradition; not a thiazide and not a bile-duct procedure."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Limited clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a diuretic drug or hepatoprotective prescription analogue. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Biliary obstruction, gallstones with colic, Asteraceae allergy. Diuretic overlap with antihypertensives / lithium."
      }
    ],
    "monitoring": [
      "Blood Pressure (BP) if combined with antihypertensives",
      "Biliary pain: medical care"
    ],
    "contraindications": [
      "Biliary obstruction",
      "Asteraceae allergy"
    ],
    "osirisRelevance": "If a patient reports Taraxacum, interpret by part: leaf — potassium-rich traditional diuretic overlap with antihypertensives/lithium and volume status; root — bitter sesquiterpene lactones for dyspepsia, caution in biliary obstruction/colic. Neither is a thiazide nor a bile-duct procedure. Asteraceae allergy is relevant. Evidence is traditional; clinical evidence is limited. Useful OSIRIS series: BP, electrolytes if diuresis is prominent, and biliary pain.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "leaf",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Taraxaci folium herbal tea as specified",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC dandelion leaf",
        "safetyLimitations": "Leaf tea is not root decoction.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      },
      {
        "type": "Decoction (root)",
        "plantPart": "root",
        "materialState": "dried, cut",
        "solvent": "water",
        "temperature": "simmering water for decoction (hard organs: HMPC glossary prefers decoction for roots/barks when specified)",
        "time": "Plant-specific simmering minutes are not invented here; follow labelled root products",
        "parametersVerified": false,
        "form": "root decoction",
        "sourceNote": "EMA/HMPC Taraxaci radix (separate from leaf)",
        "safetyLimitations": "Biliary obstruction: do not self-treat with bitters.",
        "route": "oral"
      }
    ],
    "traditionalUses": "Traditional leaf and root, distinct.",
    "notAReplacement": true,
    "galleryKey": "dandelion",
    "id": "dandelion"
  },
  "feverfew": {
    "botanicaOnly": true,
    "commonName": "Feverfew",
    "botanicalName": "Tanacetum parthenium",
    "botanicalProfile": "Tanacetum parthenium (L.) Sch.Bip. (Asteraceae). Dried aerial parts / leaf. Parthenolide-containing products used in migraine prevention trials are not the same as an uncharacterised garden infusion.",
    "conditions": [
      "traditional and limited clinical use around migraine prevention with specific leaf products — not acute analgesic equivalence to triptans"
    ],
    "mechanisms": [
      "Sesquiterpene lactones (parthenolide); not a triptan, not a Non-Steroidal Anti-Inflammatory Drug (NSAID)."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence for some dried-leaf products in migraine prevention. Not established as acute migraine treatment. Not equivalent to licensed preventives.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a triptan or beta-blocker substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Mouth ulceration from fresh leaf (‘feverfew burns’). Asteraceae allergy. Abrupt cessation may be associated with rebound headaches in users. Anticoagulant caution is theoretical — clinician if on warfarin. Pregnancy caution."
      }
    ],
    "monitoring": [
      "Migraine red flags (thunderclap, neurological deficit) are emergencies",
      "Mouth ulcers"
    ],
    "contraindications": [
      "Pregnancy unless clinician reviews",
      "Asteraceae allergy"
    ],
    "osirisRelevance": "If a patient reports Tanacetum parthenium, interpret headache pattern in a parthenolide/sesquiterpene-lactone frame used in limited clinical prevention products — not triptan or NSAID acute analgesia. Mouth ulceration from fresh leaf, Asteraceae allergy, and rebound headache after abrupt cessation are interpretation issues. Anticoagulant caution is theoretical. Evidence is limited and product-specific. Thunderclap or deficit headaches are emergencies, not herb failure.",
    "preparations": [
      {
        "type": "Dried leaf (finished products)",
        "plantPart": "leaf / aerial parts",
        "materialState": "dried; some studied products used powdered leaf",
        "parametersVerified": false,
        "form": "finished dried-leaf products preferred over random garden tea",
        "sourceNote": "Clinical migraine data are product-specific; EMA assessment should be checked for current EU status",
        "safetyLimitations": "Chewing fresh leaf is a known mucosal irritant and is not recommended as a method. Exact milligram parthenolide standardisation cannot be assumed from a garden infusion.",
        "route": "oral, preferably as labelled product"
      }
    ],
    "traditionalUses": "Traditional migraine-associated leaf.",
    "notAReplacement": true,
    "galleryKey": "feverfew",
    "id": "feverfew"
  },
  "mint": {
    "botanicaOnly": true,
    "commonName": "Mint",
    "botanicalName": "Mentha spp.",
    "botanicalProfile": "This gallery card is Mint (Mentha species). Peppermint (Mentha × piperita) has a distinct EU monograph (leaf and enteric-coated essential oil). Spearmint (Mentha spicata) is not automatically the same. This record does not alias mint to peppermint.",
    "conditions": [
      "traditional carminative teas; peppermint-specific enteric oil evidence does not automatically apply"
    ],
    "mechanisms": [
      "Menthol-rich oils in peppermint versus carvone-rich oils in spearmint; receptor and reflux effects differ. Not a prescription antispasmodic by default."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional carminative use for unspecified mint. Limited clinical evidence that is often peppermint-specific is not transferred wholesale.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not assumed to be peppermint enteric-coated oil (a potential option only in peppermint products for irritable bowel-type spasm). Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Gastro-oesophageal reflux may worsen with menthol-rich oils. Do not give peppermint oil to infants. Spearmint and peppermint are not equivalent."
      }
    ],
    "monitoring": [
      "Heartburn",
      "Do not use essential oil in babies"
    ],
    "contraindications": [
      "Unspecified Mentha essential oil by mouth"
    ],
    "osirisRelevance": "If a patient reports unspecified Mentha, interpret GI spasm, reflux and (in infants) breathing risk by chemotype: menthol-rich peppermint oils may worsen gastro-oesophageal reflux and are not for infants; spearmint is carvone-rich and not equivalent. Leaf tea is not enteric peppermint-oil trial evidence. Evidence for unspecified mint is traditional. Correlate heartburn versus carminative comfort and do not ingest essential oil as ‘medicine’.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "leaf (species must be stated on the packet)",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "If and only if the material is Mentha × piperita leaf, EMA/HMPC Menthae piperitae folium herbal tea posology applies (labelled grams in boiling water). Spearmint teas must use their own labelled instructions. Enteric-coated peppermint oil is not this infusion and is not assigned to this mint card",
        "parametersVerified": false,
        "sourceNote": "Species-disambiguation: mint card ≠ peppermint library monograph",
        "safetyLimitations": "Do not copy enteric-coated peppermint oil onto garden mint. Essential oil swallowing is unsafe.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional leaf tea, species-dependent.",
    "notAReplacement": true,
    "galleryKey": "mint",
    "id": "mint"
  },
  "wild-thyme": {
    "botanicaOnly": true,
    "commonName": "Wild Thyme",
    "botanicalName": "Thymus serpyllum",
    "botanicalProfile": "Thymus serpyllum L. (Lamiaceae). EU thyme monographs more often cover Thymus vulgaris / T. zygis (Thymi herba). Wild thyme is related but not automatically identical in thymol content or posology.",
    "conditions": [
      "traditional upper-respiratory teas; official thyme herb evidence is not copied as if identical"
    ],
    "mechanisms": [
      "Monoterpene phenols (thymol/carvacrol) in Thymus species generally; amounts vary."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Official Thymi herba clinical/traditional data are not treated as proven for T. serpyllum here.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an antibiotic or inhaler substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not swallow thyme essential oil. Pregnancy caution for concentrated oils."
      }
    ],
    "monitoring": [
      "Dyspnoea / high fever: medical care"
    ],
    "contraindications": [
      "Hypersensitivity to Lamiaceae"
    ],
    "osirisRelevance": "If a patient reports Thymus serpyllum, interpret upper-airway irritation as variable thymol/carvacrol phenolic oils, not antibiotic effect. Official Thymi herba data are not proven for this species here. Essential oil by mouth is a mucosal/systemic hazard. Evidence is traditional. Correlate dyspnoea/fever as infection red flags rather than expectorant success.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "aerial parts / herb",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water",
        "ratio": "Not copied from Thymus vulgaris posology because this card is wild thyme; use labelled T. serpyllum products only",
        "parametersVerified": false,
        "finishing": "strain",
        "form": "herbal tea",
        "sourceNote": "Related to but not assumed identical to EMA/HMPC Thymi herba",
        "safetyLimitations": "Essential oil is not tea. Do not invent a 1 g/150 ml figure from garden thyme packets.",
        "route": "oral"
      }
    ],
    "traditionalUses": "Traditional wild-thyme tea.",
    "notAReplacement": true,
    "galleryKey": "wild-thyme",
    "id": "wild-thyme"
  },
  "oregano": {
    "botanicaOnly": true,
    "commonName": "Oregano",
    "botanicalName": "Origanum vulgare",
    "botanicalProfile": "Origanum vulgare L. (Lamiaceae). Culinary leaf versus oregano essential oil (high carvacrol) are not equivalent; oil can be toxic.",
    "conditions": [
      "culinary seasoning; traditional digestive teas; oil is not a kitchen antimicrobial to ingest"
    ],
    "mechanisms": [
      "Phenolic monoterpenes; not an antibiotic."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional culinary/digestive use. Insufficient clinical evidence as an infection medicine.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an antibiotic alternative. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not swallow oregano essential oil. Pregnancy caution for oils."
      }
    ],
    "monitoring": [
      "Oil burns of mucosa if misused"
    ],
    "contraindications": [
      "Essential oil by mouth"
    ],
    "osirisRelevance": "If a patient reports culinary oregano, systemic diagnostic effects are usually negligible; concentrated oil is a phenolic-monoterpene mucosal irritant and is not an ingested antibiotic. Pregnancy caution applies to oils. Evidence as infection medicine is insufficient. Interpret oil burns or GI irritation as exposure, not as antimicrobial efficacy. Culinary leaf is not oil.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "leaf / flowering herb",
        "materialState": "dried culinary or herbal cut",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "No single EMA oregano-leaf tea posology is applied here as a verified gram ratio; culinary sprinkling is not a medicinal infusion dose",
        "parametersVerified": false,
        "sourceNote": "Culinary herb; medicinal oil is a different, unsafe-to-improvise article",
        "safetyLimitations": "Essential oil ingestion is not described. Exact medicinal infusion quantities are not displayed.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Culinary and folk digestive leaf.",
    "notAReplacement": true,
    "galleryKey": "oregano",
    "id": "oregano"
  },
  "basil": {
    "botanicaOnly": true,
    "commonName": "Basil",
    "botanicalName": "Ocimum basilicum",
    "botanicalProfile": "Ocimum basilicum L. (Lamiaceae). Culinary leaf. Estragole-containing essential oil is a toxicology topic, not a home extract.",
    "conditions": [
      "culinary use; insufficient medicinal monograph depth for a drug-style indication"
    ],
    "mechanisms": [
      "Essential-oil chemotypes vary (linalool, estragole); not a pharmaceutical anxiolytic."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Culinary traditional use. Insufficient reliable medicinal evidence for clinical claims.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not mapped to a medicine class. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not ingest basil essential oil. Estragole discussions apply to oils and some chemotypes, not to ordinary food amounts in a meal."
      }
    ],
    "monitoring": [
      "Food use versus ‘medicinal’ concentrated extracts should not be confused"
    ],
    "contraindications": [
      "Basil essential oil by mouth as ‘medicine’"
    ],
    "osirisRelevance": "Culinary Ocimum basilicum in food amounts has no established OSIRIS lab signature. Concentrated oils vary by chemotype (linalool, estragole) and should not be ingested as anxiolytics; estragole discussions apply to oils/chemotypes, not ordinary meals. Medicinal clinical evidence is insufficient. Do not interpret food basil as a neurological or hepatic intervention; only concentrated non-food use would prompt toxin/oil-exposure thinking.",
    "preparations": [
      {
        "type": "Culinary leaf",
        "plantPart": "leaf",
        "materialState": "fresh or dried as food",
        "parametersVerified": false,
        "form": "food seasoning, not a verified medicinal tea ratio",
        "sourceNote": "No EU herbal-monograph gram infusion is applied in this record",
        "safetyLimitations": "No medicinal decoction quantities. Essential oil is not food.",
        "route": "oral as food"
      }
    ],
    "traditionalUses": "Culinary.",
    "notAReplacement": true,
    "galleryKey": "basil",
    "id": "basil"
  },
  "dill": {
    "botanicaOnly": true,
    "commonName": "Dill",
    "botanicalName": "Anethum graveolens",
    "botanicalProfile": "Anethum graveolens L. (Apiaceae). Fruit (seed) is the more classical carminative article; herb is culinary.",
    "conditions": [
      "traditional carminative seed preparations"
    ],
    "mechanisms": [
      "Essential oil (carvone); traditional carminative; not a prescription antispasmodic."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional carminative use. Limited clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an antispasmodic drug substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Apiaceae allergen cross-reactivity. Essential oil not for infants."
      }
    ],
    "monitoring": [
      "Infant colic products must be licensed; do not dose essential oil"
    ],
    "contraindications": [
      "Known Apiaceae allergy"
    ],
    "osirisRelevance": "If a patient reports dill seed, interpret mild carminative GI symptoms in a carvone-oil frame, not prescription antispasmodic pharmacology. Apiaceae allergen cross-reactivity can explain rash or anaphylaxis-pattern findings. Essential oil is not for infants. Evidence is traditional; clinical evidence is limited.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "fruit (seed), not necessarily the leafy herb",
        "materialState": "dried, crushed seeds for tea if labelled as herbal substance",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "Traditional seed infusions exist; an exact Ph. Eur. gram ratio is not displayed without a named authorised product",
        "parametersVerified": false,
        "sourceNote": "Traditional carminative seed; confirm labelled herbal tea posology",
        "safetyLimitations": "Leaf garnish is not seed tea. Oil is not tea.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional seed carminative.",
    "notAReplacement": true,
    "galleryKey": "dill",
    "id": "dill"
  },
  "juniper": {
    "botanicaOnly": true,
    "commonName": "Juniper",
    "botanicalName": "Juniperus communis",
    "botanicalProfile": "Juniperus communis L. (Cupressaceae). Ripe berry (Juniperi pseudo-fructus). Needle oil is a different, more irritating article. Not a ‘detox’ medicine.",
    "conditions": [
      "traditional diuretic berry use for mild urinary complaints after exclusion of infection needing antibiotics"
    ],
    "mechanisms": [
      "Essential oil (alpha-pinene etc.); traditional diuretic; can irritate kidney in overdose."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Not established for urinary-tract infection treatment.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an antibiotic for urinary tract infection (UTI). Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Pregnancy. Inflammatory kidney disease. Prolonged use. Do not use needle essential oil internally."
      }
    ],
    "monitoring": [
      "Dysuria with fever: urine culture pathway, not more berries",
      "Avoid in known nephropathy unless clinician agrees"
    ],
    "contraindications": [
      "Pregnancy",
      "Inflammatory renal disease"
    ],
    "osirisRelevance": "If a patient reports Juniperus communis berries, interpret urinary symptoms as traditional essential-oil diuretic use that can irritate kidney in overdose or prolonged use — not antibiotic treatment of urinary-tract infection. Pregnancy and inflammatory renal disease are restriction contexts. Evidence is traditional, not UTI treatment. Useful OSIRIS series: dysuria/fever (culture pathway) and known nephropathy.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "ripe berry (pseudofruit)",
        "materialState": "dried, crushed",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Juniperi pseudofructus herbal tea as specified; duration limits in the monograph must be respected",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Juniperus communis berry",
        "safetyLimitations": "Not an antibiotic. Not needle oil. Limited duration.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional berry diuretic.",
    "notAReplacement": true,
    "galleryKey": "juniper",
    "id": "juniper"
  },
  "hyssop": {
    "botanicaOnly": true,
    "commonName": "Hyssop",
    "botanicalName": "Hyssopus officinalis",
    "botanicalProfile": "Hyssopus officinalis L. (Lamiaceae). Pinocamphone-containing essential oil can cause seizures; tea is not oil.",
    "conditions": [
      "traditional respiratory teas; evidence is traditional only"
    ],
    "mechanisms": [
      "Monoterpene ketones in the oil; traditional expectorant lore."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Insufficient clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an antibiotic or inhaler substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not swallow hyssop essential oil (seizures reported). Pregnancy caution. Epilepsy: avoid oil and be cautious with strong teas."
      }
    ],
    "monitoring": [
      "Seizure history: avoid concentrated products"
    ],
    "contraindications": [
      "Essential oil by mouth",
      "Pregnancy unless clinician reviews"
    ],
    "osirisRelevance": "If a patient reports Hyssopus, interpret respiratory folklore against a real neurotoxicity signal from monoterpene ketones in the oil (seizures reported with swallowed oil). Strong teas in epilepsy are a caution. This is not an expectorant drug. Evidence is traditional; clinical evidence is insufficient. Correlate seizure history and do not treat oil ingestion as ‘respiratory support’.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "aerial parts",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "Traditional aerial-part infusions exist; exact verified gram ratios are not displayed because of oil-constituent variability and seizure reports with essential oil",
        "parametersVerified": false,
        "sourceNote": "Traditional use; essential oil toxicity reports",
        "safetyLimitations": "No essential-oil recipe. Household ‘strong decoction’ is not recommended as a way to concentrate pinocamphone.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional respiratory herb.",
    "notAReplacement": true,
    "galleryKey": "hyssop",
    "id": "hyssop"
  },
  "agrimony": {
    "botanicaOnly": true,
    "commonName": "Agrimony",
    "botanicalName": "Agrimonia eupatoria",
    "botanicalProfile": "Agrimonia eupatoria L. (Rosaceae). Aerial flowering herb (Agrimoniae herba).",
    "conditions": [
      "traditional astringent tea for mild diarrhoea after serious causes are excluded"
    ],
    "mechanisms": [
      "Tannins; astringent; not an antibiotic or loperamide equivalent."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional astringent use (EU herbal monograph). Not established as infectious-diarrhoea treatment.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an antimotility drug substitute when inflammatory bowel disease or infection needs specific therapy. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not use as sole care in bloody diarrhoea, high fever, or in infants. Tannins may reduce absorption of co-administered medicines if taken simultaneously."
      }
    ],
    "monitoring": [
      "Hydration",
      "Red-flag diarrhoea needs medical care"
    ],
    "contraindications": [
      "Ileus / serious abdominal disease as self-care"
    ],
    "osirisRelevance": "If a patient reports Agrimonia, interpret mild diarrhoea as tannin astringency, not loperamide or antibiotic equivalence. Tannins may reduce absorption of co-administered oral medicines. Bloody diarrhoea, high fever or infant diarrhoea are not astringent-tea problems. Evidence follows traditional EU herbal use, not infectious-diarrhoea trials. Correlate hydration and red-flag stools.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "flowering aerial parts",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Agrimoniae herba herbal tea as specified in the monograph / labelled tea",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Agrimonia eupatoria",
        "safetyLimitations": "Not for bloody or paediatric diarrhoeal emergencies.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional astringent herb.",
    "notAReplacement": true,
    "galleryKey": "agrimony",
    "id": "agrimony"
  },
  "angelica": {
    "botanicaOnly": true,
    "commonName": "Angelica",
    "botanicalName": "Angelica archangelica",
    "botanicalProfile": "Angelica archangelica L. (Apiaceae). Root (Angelicae radix) is the usual medicinal article; furanocoumarins cause phototoxicity.",
    "conditions": [
      "traditional bitter / carminative root for dyspepsia"
    ],
    "mechanisms": [
      "Essential oil and bitter coumarins; traditional digestive stimulant; phototoxic furanocoumarins."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Limited clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a Proton-Pump Inhibitor (PPI) substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Pregnancy (traditional uterine activity concerns). Phototoxicity with sunbeds / strong sun if using concentrated products. Apiaceae allergy."
      }
    ],
    "monitoring": [
      "Photosensitivity",
      "Pregnancy: avoid unless clinician agrees"
    ],
    "contraindications": [
      "Pregnancy unless clinician reviews"
    ],
    "osirisRelevance": "If a patient reports Angelica archangelica, interpret dyspepsia as traditional bitter/essential-oil and coumarin digestive stimulant use. Furanocoumarins make phototoxicity (sunbeds/strong sun) relevant; pregnancy caution and Apiaceae allergy apply. Evidence is traditional; clinical evidence is limited. Correlate photosensitivity and GI symptoms, not licensed prokinetic effects.",
    "preparations": [
      {
        "type": "Decoction / infusion (root)",
        "plantPart": "root",
        "materialState": "dried, cut",
        "solvent": "water",
        "parametersVerified": false,
        "form": "root tea as labelled products; roots often decocted rather than briefly infused",
        "sourceNote": "EMA/HMPC Angelicae radix where applicable",
        "safetyLimitations": "Exact simmer time is product-specific. Phototoxic coumarins: no homemade oil macerate for tanning. Essential oil not for home use.",
        "route": "oral"
      }
    ],
    "traditionalUses": "Traditional bitter root.",
    "notAReplacement": true,
    "galleryKey": "angelica",
    "id": "angelica"
  },
  "elecampane": {
    "botanicaOnly": true,
    "commonName": "Elecampane",
    "botanicalName": "Inula helenium",
    "botanicalProfile": "Inula helenium L. (Asteraceae). Root (Inulae radix). Sesquiterpene lactones are allergenic; some inula oils are not for casual internal use.",
    "conditions": [
      "traditional respiratory / bitter root; limited modern clinical evidence"
    ],
    "mechanisms": [
      "Alantolactone-type sesquiterpene lactones; traditional expectorant lore; not an antibiotic."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Insufficient robust clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an antimicrobial or bronchodilator substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Asteraceae allergy (cross-reactivity). Large doses irritate mucosa."
      }
    ],
    "monitoring": [
      "Allergy",
      "Dyspnoea: medical care"
    ],
    "contraindications": [
      "Asteraceae allergy"
    ],
    "osirisRelevance": "If a patient reports Inula helenium, interpret respiratory/bitter use as alantolactone-type sesquiterpene lactones with mucosal irritation in large doses, plus Asteraceae allergy. It is not an antibiotic. Clinical evidence is insufficient; tradition only. Correlate allergy, dyspnoea and mucosal irritation rather than antimicrobial response.",
    "preparations": [
      {
        "type": "Decoction (root)",
        "plantPart": "root",
        "materialState": "dried, cut",
        "solvent": "water",
        "parametersVerified": false,
        "form": "traditional root decoction as labelled if a product exists",
        "sourceNote": "Traditional Inula root; confirm any EU assessment before assuming tea grams",
        "safetyLimitations": "Exact ratios not displayed. Essential oil not described for home use.",
        "route": "oral"
      }
    ],
    "traditionalUses": "Traditional respiratory root.",
    "notAReplacement": true,
    "galleryKey": "elecampane",
    "id": "elecampane"
  },
  "eyebright": {
    "botanicaOnly": true,
    "commonName": "Eyebright",
    "botanicalName": "Euphrasia officinalis aggr.",
    "botanicalProfile": "Euphrasia spp. (Orobanchaceae). Aerial parts in traditional use. Homemade eye drops are unsafe (infection, injury).",
    "conditions": [
      "traditional oral teas; traditional eyewashes are not recommended as homemade sterile drops"
    ],
    "mechanisms": [
      "Iridoids/tannins traditionally astringent; not an antihistamine eye-drop equivalent."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Insufficient clinical evidence for ocular disease.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a substitute for prescription eye medicines. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not instil homemade infusions into the eye (microbial keratitis risk)."
      }
    ],
    "monitoring": [
      "Eye pain, photophobia, vision loss: urgent care, not herb tea"
    ],
    "contraindications": [
      "Ocular self-instillation of homemade liquids"
    ],
    "osirisRelevance": "If a patient reports Euphrasia, oral traditional astringent (iridoid/tannin) use has little systemic lab signature. Homemade eyewashes are diagnostically important as infection/keratitis risk, not as antihistamine drops. Clinical evidence for ocular disease is insufficient. Eye pain, photophobia or vision change are urgent findings independent of tea.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "aerial parts",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "Traditional oral infusion only if a labelled tea exists; no gram ratio invented. No ocular recipe",
        "parametersVerified": false,
        "sourceNote": "Traditional Euphrasia; ocular self-preparation not appropriate",
        "safetyLimitations": "No eye-drop method is provided.",
        "route": "oral only in this record",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional aerial herb; eyes need sterile licensed products.",
    "notAReplacement": true,
    "galleryKey": "eyebright",
    "id": "eyebright"
  },
  "goldenrod": {
    "botanicaOnly": true,
    "commonName": "Goldenrod",
    "botanicalName": "Solidago virgaurea",
    "botanicalProfile": "Solidago virgaurea L. (Asteraceae). Aerial parts (Solidaginis virgaureae herba). Not a ‘kidney cure’.",
    "conditions": [
      "traditional irrigation / diuretic tea for mild urinary complaints after infection needing antibiotics is excluded"
    ],
    "mechanisms": [
      "Flavonoids and saponins; traditional diuretic; not an antibiotic for urinary tract infection (UTI)."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use (EU monograph). Not established as UTI treatment.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an antibiotic substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Oedema of cardiac/renal origin. Asteraceae allergy. Maintain fluid intake if used as irrigation therapy as labelled."
      }
    ],
    "monitoring": [
      "Feverish dysuria: medical care",
      "Oedema cause"
    ],
    "contraindications": [
      "Cardiac/renal oedema as self-care target"
    ],
    "osirisRelevance": "If a patient reports Solidago virgaurea, interpret mild urinary complaints as flavonoid/saponin traditional irrigation/diuretic use, not UTI antibiotic effect. Cardiac/renal oedema is the wrong attribution for ‘diuresis’. Asteraceae allergy applies. Evidence is traditional (EU monograph), not UTI treatment. Correlate feverish dysuria versus mild irritation and oedema cause.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "aerial parts",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Solidaginis virgaureae herba herbal tea as specified; fluid intake instructions on authorised products matter",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Solidago virgaurea",
        "safetyLimitations": "Not for acute pyelonephritis self-care.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional diuretic aerial parts.",
    "notAReplacement": true,
    "galleryKey": "goldenrod",
    "id": "goldenrod"
  },
  "greater-burdock": {
    "botanicaOnly": true,
    "commonName": "Greater Burdock",
    "botanicalName": "Arctium lappa",
    "botanicalProfile": "Arctium lappa L. (Asteraceae). Root (Bardanae radix) in traditional ‘blood cleansing’ lore — that language is not a medical indication.",
    "conditions": [
      "traditional root for mild skin complaints / as a bitter; evidence is traditional"
    ],
    "mechanisms": [
      "Inulin-rich root; traditional depurative lore without established dermatology-drug equivalence."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Insufficient clinical evidence for eczema or ‘detox’ claims.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a dermatology-drug substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Asteraceae allergy. Biliary caution with bitters. Inulin can ferment (gas) in sensitive bowels."
      }
    ],
    "monitoring": [
      "Allergy",
      "Infected skin: medical care"
    ],
    "contraindications": [
      "Asteraceae allergy"
    ],
    "osirisRelevance": "If a patient reports Arctium lappa root, interpret as inulin-rich bitter: gas/bloating from fructan fermentation, Asteraceae allergy, and biliary caution — not a dermatology drug or ‘detox’ laboratory change. Evidence is traditional; clinical evidence for eczema or detox claims is insufficient. Infected skin needs medical interpretation, not more bitter root.",
    "preparations": [
      {
        "type": "Decoction (root)",
        "plantPart": "root",
        "materialState": "dried, cut",
        "solvent": "water",
        "parametersVerified": false,
        "form": "traditional root decoction as labelled products",
        "sourceNote": "Traditional Arctium root; exact unofficial ratios not displayed",
        "safetyLimitations": "‘Detox’ is not an indication. Not equivalent to isotretinoin or topical steroids.",
        "route": "oral"
      }
    ],
    "traditionalUses": "Traditional root.",
    "notAReplacement": true,
    "galleryKey": "greater-burdock",
    "id": "greater-burdock"
  },
  "goutweed": {
    "botanicaOnly": true,
    "commonName": "Goutweed",
    "botanicalName": "Aegopodium podagraria",
    "botanicalProfile": "Aegopodium podagraria L. (Apiaceae). Folk ‘gout’ name does not equal urate-lowering therapy.",
    "conditions": [
      "folk culinary spring green; insufficient medicinal evidence for gout"
    ],
    "mechanisms": [
      "No established xanthine-oxidase inhibition equivalent to allopurinol."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Folk nomenclature is not clinical evidence for gout.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a urate-lowering medicine analogue. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not stop allopurinol or colchicine because of a folk name. Apiaceae lookalikes include toxic plants — identification errors are dangerous."
      }
    ],
    "monitoring": [
      "Gout flares need medical plans, not foraging"
    ],
    "contraindications": [
      "Using this plant instead of indicated gout medicines"
    ],
    "osirisRelevance": "Aegopodium podagraria’s folk name does not establish xanthine-oxidase inhibition or urate-lowering. Human medicinal evidence for gout is insufficient. The diagnostically relevant issues are: possible misidentification among toxic Apiaceae, and delayed gout care if allopurinol/colchicine are stopped because of the name. Correlate serum urate and flare plans as for gout generally, not as herb response.",
    "preparations": [
      {
        "type": "No verified medicinal preparation for gout",
        "plantPart": "young aerial parts as food in some cuisines",
        "parametersVerified": false,
        "form": "culinary use is not a gout protocol",
        "sourceNote": "Insufficient pharmacopoeial medicinal method",
        "safetyLimitations": "No decoction quantities for ‘gout’. Foraging misidentification risk.",
        "route": "not as a medicine in this record"
      }
    ],
    "traditionalUses": "Folk culinary green.",
    "notAReplacement": true,
    "galleryKey": "goutweed",
    "id": "goutweed"
  },
  "heather": {
    "botanicaOnly": true,
    "commonName": "Heather",
    "botanicalName": "Calluna vulgaris",
    "botanicalProfile": "Calluna vulgaris (L.) Hull (Ericaceae). Flowering tops in folk urinary teas; evidence is limited.",
    "conditions": [
      "folk urinary teas; not an antibiotic"
    ],
    "mechanisms": [
      "Traditional astringent folklore; not established antimicrobial therapy."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Folk traditional use. Insufficient clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an antibiotic for urinary tract infection (UTI). Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Ericaceae allergy. Do not delay antibiotics when indicated."
      }
    ],
    "monitoring": [
      "Feverish urinary symptoms: medical care"
    ],
    "contraindications": [
      "Replacing indicated antimicrobials"
    ],
    "osirisRelevance": "If a patient reports Calluna urinary teas, there is no established antimicrobial mechanism; astringent folklore should not delay antibiotics when indicated. Ericaceae allergy is possible. Clinical evidence is insufficient. Correlate feverish urinary symptoms as infection until proven otherwise.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "flowering tops",
        "materialState": "dried",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "Folk infusions exist; exact verified ratios are not displayed",
        "parametersVerified": false,
        "sourceNote": "Traditional folk use without a strong EU posology applied here",
        "safetyLimitations": "Not UTI treatment.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Folk flowering-tops tea.",
    "notAReplacement": true,
    "galleryKey": "heather",
    "id": "heather"
  },
  "lovage": {
    "botanicaOnly": true,
    "commonName": "Lovage",
    "botanicalName": "Levisticum officinale",
    "botanicalProfile": "Levisticum officinale W.D.J.Koch (Apiaceae). Root (Levistici radix) in traditional diuretic / digestive use; phototoxic coumarins possible.",
    "conditions": [
      "traditional diuretic root"
    ],
    "mechanisms": [
      "Essential oil (phthalides); traditional diuretic/carminative; not a prescription diuretic."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use (EU herbal monograph where listed). Limited clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a diuretic drug substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Pregnancy. Inflammatory kidney disease. Photosensitivity. Apiaceae allergy."
      }
    ],
    "monitoring": [
      "Renal inflammation: avoid",
      "Pregnancy: avoid unless clinician agrees"
    ],
    "contraindications": [
      "Pregnancy",
      "Inflammatory renal disease"
    ],
    "osirisRelevance": "If a patient reports Levisticum officinale, interpret traditional phthalide essential-oil diuretic/carminative use with renal-irritation, pregnancy, photosensitivity and Apiaceae-allergy cautions — not a prescription diuretic. Evidence is traditional; clinical evidence is limited. Useful OSIRIS context: inflammatory renal disease, pregnancy, and volume/BP if diuresis is claimed.",
    "preparations": [
      {
        "type": "Infusion / decoction (root)",
        "plantPart": "root",
        "materialState": "dried, cut",
        "solvent": "water",
        "parametersVerified": false,
        "form": "labelled herbal tea if available",
        "sourceNote": "EMA/HMPC Levistici radix where applicable",
        "safetyLimitations": "Exact unofficial ratios not displayed. Not for nephritis self-care.",
        "route": "oral"
      }
    ],
    "traditionalUses": "Traditional root.",
    "notAReplacement": true,
    "galleryKey": "lovage",
    "id": "lovage"
  },
  "lungwort": {
    "botanicaOnly": true,
    "commonName": "Lungwort",
    "botanicalName": "Pulmonaria officinalis",
    "botanicalProfile": "Pulmonaria officinalis L. (Boraginaceae). Some Boraginaceae contain pyrrolizidine alkaloids; lungwort products must be PA-specified. Doctrine of signatures (‘lung’ spots) is not evidence.",
    "conditions": [
      "folk lung teas — not an evidence-based pneumonia treatment"
    ],
    "mechanisms": [
      "Mucilage folklore; PA risk if alkaloid-containing material is used."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Folk use. Insufficient reliable clinical evidence. PA safety must be confirmed for any product.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an antibiotic or inhaler substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not use unidentified wild lungwort teas because of possible pyrrolizidine alkaloids. Doctrine of signatures is not a mechanism."
      }
    ],
    "monitoring": [
      "Respiratory infection red flags"
    ],
    "contraindications": [
      "Unverified PA-containing material",
      "Replacing indicated respiratory medicines"
    ],
    "osirisRelevance": "Pulmonaria folk ‘lung’ use is not pneumonia treatment. The diagnostically relevant uncertainty is possible pyrrolizidine-alkaloid contamination/identity in unverified material (hepatic injury) versus harmless mucilage folklore. Clinical evidence is insufficient. Correlate respiratory red flags as infection/cardiorespiratory disease, and hepatic enzymes if unidentified internal ‘lungwort’ was used.",
    "preparations": [
      {
        "type": "No unverified wild tea",
        "plantPart": "aerial parts in folk use",
        "parametersVerified": false,
        "form": "only PA-tested authorised products if any",
        "sourceNote": "Boraginaceae PA concern; no household recipe",
        "safetyLimitations": "Self-preparation from wild plants is inappropriate unless a PA-free authorised product is used as labelled.",
        "route": "not household"
      }
    ],
    "traditionalUses": "Folk ‘lung’ plant; not a diagnosis.",
    "notAReplacement": true,
    "galleryKey": "lungwort",
    "id": "lungwort"
  },
  "motherwort": {
    "botanicaOnly": true,
    "commonName": "Motherwort",
    "botanicalName": "Leonurus cardiaca",
    "botanicalProfile": "Leonurus cardiaca L. (Lamiaceae). Aerial parts (Leonuri cardiacae herba). Not a substitute for cardiology care despite the name.",
    "conditions": [
      "traditional use for nervous cardiac complaints after serious disease is excluded"
    ],
    "mechanisms": [
      "Lamiaceae iridoids/flavonoids; traditional nervine; not a beta-blocker or antiarrhythmic."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Limited clinical evidence. Name is not a cardiac diagnosis.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not digoxin, not a beta-blocker. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Pregnancy (traditional uterine activity). Palpitations need medical exclusion of arrhythmia. Sedative overlap with Central Nervous System (CNS) depressants."
      }
    ],
    "monitoring": [
      "Palpitations with syncope: emergency pathway",
      "Pregnancy: avoid unless clinician agrees"
    ],
    "contraindications": [
      "Pregnancy unless clinician reviews"
    ],
    "osirisRelevance": "If a patient reports Leonurus cardiaca, interpret palpitations and nervous-cardiac complaints as traditional Lamiaceae nervine use, not beta-blocker or antiarrhythmic pharmacology. Sedative overlap with CNS depressants and traditional uterine-activity/pregnancy caution are relevant. Palpitations with syncope remain an arrhythmia pathway. Evidence is traditional; clinical evidence is limited. Useful OSIRIS series: heart rate/symptom diary, not herb as ECG substitute.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "aerial parts",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Leonuri cardiacae herba herbal tea as specified if using an authorised tea",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Leonurus cardiaca",
        "safetyLimitations": "Not a treatment for diagnosed arrhythmia. Exact unofficial handfuls are not doses.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional aerial nervine.",
    "notAReplacement": true,
    "galleryKey": "motherwort",
    "id": "motherwort"
  },
  "mugwort": {
    "botanicaOnly": true,
    "commonName": "Mugwort",
    "botanicalName": "Artemisia vulgaris",
    "botanicalProfile": "Artemisia vulgaris L. (Asteraceae). Related to wormwood but not identical; thujone and pollen allergenicity matter. Moxa is burned leaf, not a tea, and is not described as a recipe here.",
    "conditions": [
      "folk digestive / emmenagogue lore — pregnancy contraindication dominates"
    ],
    "mechanisms": [
      "Essential oil / sesquiterpene lactones; allergenic pollen; not a licensed obstetric medicine."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Folk traditional use. Insufficient safe self-care evidence for gynaecological claims.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an obstetric drug. Not wormwood posology. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Pregnancy (traditional emmenagogue). Asteraceae allergy / mugwort pollen is a major allergen. Do not copy wormwood thujone assumptions as if identical."
      }
    ],
    "monitoring": [
      "Pregnancy: do not use as ‘to bring periods’",
      "Allergy"
    ],
    "contraindications": [
      "Pregnancy",
      "Asteraceae / mugwort pollen allergy"
    ],
    "osirisRelevance": "If a patient reports Artemisia vulgaris, interpret GI folklore against major pollen/Asteraceae allergy and traditional emmenagogue/pregnancy contraindication. Do not copy wormwood thujone assumptions as if identical. Clinical evidence for gynaecological claims is insufficient and unsafe to treat as physiology. Allergy and pregnancy exposure are the main interpretation points.",
    "preparations": [
      {
        "type": "No pregnancy-directed recipe; tea only if labelled product for other traditional uses",
        "plantPart": "aerial parts",
        "parametersVerified": false,
        "form": "limitation; no emmenagogue protocol",
        "sourceNote": "Folk Artemisia vulgaris; not equated to HMPC wormwood grams",
        "safetyLimitations": "No moxibustion or abortifacient method. Exact medicinal infusion quantities not displayed for this folk use.",
        "route": "avoid in pregnancy"
      }
    ],
    "traditionalUses": "Folk aerial herb; unsafe for pregnancy-directed use.",
    "notAReplacement": true,
    "galleryKey": "mugwort",
    "id": "mugwort"
  },
  "skullcap": {
    "botanicaOnly": true,
    "commonName": "Skullcap",
    "botanicalName": "Scutellaria lateriflora (typical Western herbal)",
    "botanicalProfile": "American skullcap is usually Scutellaria lateriflora L.; Baikal skullcap is Scutellaria baicalensis (root) — not equivalent. Historical hepatotoxicity reports often involved adulteration (e.g. germander).",
    "conditions": [
      "traditional nervine; quality and species are the safety story"
    ],
    "mechanisms": [
      "Flavonoids (baicalin more characteristic of S. baicalensis root); S. lateriflora aerial tradition is not the same extract."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional nervine use. Clinical evidence is limited and species-confused in the marketplace.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a benzodiazepine substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Buy species-authenticated products. Hepatotoxicity reports: stop and seek care if jaundice. Pregnancy data insufficient."
      }
    ],
    "monitoring": [
      "Liver symptoms (jaundice, dark urine)",
      "Species on the label"
    ],
    "contraindications": [
      "Unidentified material",
      "Active liver disease without advice"
    ],
    "osirisRelevance": "If a patient reports Scutellaria, species and authenticity dominate interpretation: S. lateriflora aerial nervine tradition is not S. baicalensis baicalin-root extracts. Hepatotoxicity reports mean jaundice/dark urine should be read as possible herb-induced liver injury. Clinical evidence is limited and marketplace-confused. Useful OSIRIS series: ALT/AST if jaundice appears, and the labelled species.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "aerial parts if S. lateriflora; root if S. baicalensis — do not mix the methods",
        "materialState": "dried, as labelled species",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "No single verified gram ratio is displayed because commercial skullcap is frequently misidentified; use only authenticated labelled products",
        "parametersVerified": false,
        "sourceNote": "Species split; adulteration history",
        "safetyLimitations": "No homemade tincture from unidentified ‘skullcap’. Not equivalent to Baikal root extracts used in some research.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional nervine, species-dependent.",
    "notAReplacement": true,
    "galleryKey": "skullcap",
    "id": "skullcap"
  },
  "self-heal": {
    "botanicaOnly": true,
    "commonName": "Self-heal",
    "botanicalName": "Prunella vulgaris",
    "botanicalProfile": "Prunella vulgaris L. (Lamiaceae). Folk ‘heal-all’ name is not evidence.",
    "conditions": [
      "folk astringent / sore-throat lore"
    ],
    "mechanisms": [
      "Phenolics/tannins traditionally astringent; not an antiviral drug."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Folk traditional use. Insufficient clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an antiviral or antibiotic substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Name is marketing, not a diagnosis."
      }
    ],
    "monitoring": [
      "Persistent ulcers or fever need medical care"
    ],
    "contraindications": [
      "Replacing indicated antimicrobials"
    ],
    "osirisRelevance": "Prunella vulgaris tannin/phenolic astringent folklore for sore throat has no established antiviral effect. Persistent ulcers or fever are infection/systemic disease until proven otherwise. Clinical evidence is insufficient. Correlate oropharyngeal findings as for any pharyngitis, not as herb response.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "aerial parts / flower spikes",
        "materialState": "dried",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "Folk infusions exist; exact verified medicinal ratios are not displayed",
        "parametersVerified": false,
        "sourceNote": "Traditional folk use",
        "safetyLimitations": "‘Self-heal’ is not a licence to skip indicated medicines.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Folk aerial herb.",
    "notAReplacement": true,
    "galleryKey": "self-heal",
    "id": "self-heal"
  },
  "soapwort": {
    "botanicaOnly": true,
    "commonName": "Soapwort",
    "botanicalName": "Saponaria officinalis",
    "botanicalProfile": "Saponaria officinalis L. (Caryophyllaceae). Root and herb are saponin-rich and irritant / potentially toxic internally.",
    "conditions": [
      "historical soap / traditional expectorant lore — internal use is not a safe self-care standard"
    ],
    "mechanisms": [
      "Triterpenoid saponins; detergent-like mucosal irritant; not a licensed mucolytic to improvise."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Historical external soap use. Internal medicinal evidence is insufficient for a safe household recipe.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an expectorant-drug analogue for home decoction. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Internal saponin irritancy. Do not use as homemade detergent on mucous membranes or as a strong internal decoction."
      }
    ],
    "monitoring": [
      "Gastrointestinal burning: stop"
    ],
    "contraindications": [
      "Internal self-experimentation"
    ],
    "osirisRelevance": "If Saponaria is taken internally, interpret GI burning and mucosal irritation as triterpenoid saponin detergent-like effects, not licensed mucolysis. Internal household evidence is insufficient for a safe recipe. External ‘soap’ use is a contact-irritant issue. Correlate GI mucosal symptoms as exposure/toxicity rather than expectorant benefit.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "root / herb",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Saponin-rich plant. Internal self-preparation is inappropriate. Historical laundry use is not a medicinal infusion protocol.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical soap plant; not a tea recommendation.",
    "notAReplacement": true,
    "galleryKey": "soapwort",
    "id": "soapwort"
  },
  "sweet-cicely": {
    "botanicaOnly": true,
    "commonName": "Sweet Cicely",
    "botanicalName": "Myrrhis odorata",
    "botanicalProfile": "Myrrhis odorata (L.) Scop. (Apiaceae). Culinary anise-scented herb. Lookalike toxic Apiaceae exist.",
    "conditions": [
      "culinary; insufficient medicinal monograph"
    ],
    "mechanisms": [
      "Anethole-related aroma compounds; not a pharmaceutical carminative standard."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Culinary plant. Insufficient reliable medicinal evidence and serious lookalike risk.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not mapped to a medicine class. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Foraging misidentification among Apiaceae can be fatal. No medicinal decoction is provided."
      }
    ],
    "monitoring": [
      "Never forage unless expert"
    ],
    "contraindications": [
      "Wild misidentification"
    ],
    "osirisRelevance": "Culinary Myrrhis odorata has no established medicinal carminative monograph. The diagnostically critical issue is Apiaceae lookalike poisoning if wild-foraged (can be fatal). Anethole aroma does not license drug-like GI effects. Medicinal evidence is insufficient. If illness follows foraging, interpret as possible misidentification/toxicity first.",
    "preparations": [
      {
        "type": "Culinary leaf / seed as food if correctly identified from cultivation",
        "plantPart": "leaf / seed",
        "parametersVerified": false,
        "form": "food, not a verified medicinal ratio",
        "sourceNote": "No pharmacopoeial medicinal method applied",
        "safetyLimitations": "No wild-foraged medicinal recipe.",
        "route": "food"
      }
    ],
    "traditionalUses": "Culinary.",
    "notAReplacement": true,
    "galleryKey": "sweet-cicely",
    "id": "sweet-cicely"
  },
  "sweet-violet": {
    "botanicaOnly": true,
    "commonName": "Sweet Violet",
    "botanicalName": "Viola odorata",
    "botanicalProfile": "Viola odorata L. (Violaceae). Flower/leaf traditional demulcent; related Viola tricolor (heartseye) is a different monograph in some traditions.",
    "conditions": [
      "traditional cough / skin folklore"
    ],
    "mechanisms": [
      "Mucilage and saponins in Viola species generally; not an antitussive opioid."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Limited clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a cough-medicine substitute when pneumonia treatment is indicated. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Saponin expectorants can irritate in high dose. Do not assume identity with Viola tricolor products."
      }
    ],
    "monitoring": [
      "Red-flag cough"
    ],
    "contraindications": [
      "Hypersensitivity"
    ],
    "osirisRelevance": "If a patient reports Viola odorata, interpret cough folklore as mucilage plus saponins (high dose may irritate), not opioid antitussive effect, and not automatically Viola tricolor products. Evidence is traditional; clinical evidence is limited. Red-flag cough still needs medical interpretation.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "flower and/or leaf as labelled",
        "materialState": "dried",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "Traditional infusions exist; exact verified grams are not displayed without a named product",
        "parametersVerified": false,
        "sourceNote": "Traditional Viola odorata",
        "safetyLimitations": "Species and plant part must match the packet.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional flower/leaf.",
    "notAReplacement": true,
    "galleryKey": "sweet-violet",
    "id": "sweet-violet"
  },
  "walnut": {
    "botanicaOnly": true,
    "commonName": "Walnut",
    "botanicalName": "Juglans regia",
    "botanicalProfile": "Juglans regia L. (Juglandaceae). Leaf (Juglandis folium) in traditional cutaneous / astringent use; hull (juglone) can stain and irritate. Nut as food is not leaf tea.",
    "conditions": [
      "traditional leaf for skin; food nut is nutritional not this monograph"
    ],
    "mechanisms": [
      "Tannins and naphthoquinones (juglone) in some parts; astringent/irritant; not an antifungal drug guaranteed by a kitchen wash."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional leaf use. Nut consumption evidence (lipids) is food science, not leaf-tea evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Food walnut is not a statin. Leaf is not an antifungal licence. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Nut allergy (anaphylaxis). Leaf teas/hulls can irritate. Do not ingest hull dyes."
      }
    ],
    "monitoring": [
      "Allergy (nuts)",
      "Contact dermatitis from hulls"
    ],
    "contraindications": [
      "Tree-nut allergy for kernel; leaf hypersensitivity"
    ],
    "osirisRelevance": "Separate food kernel from leaf/hull: tree-nut allergy can explain anaphylaxis; leaf tannins/juglone can irritate skin or GI tract and are not a guaranteed antifungal. Lipid effects of eating walnuts are food science, not leaf-tea pharmacology. Traditional leaf evidence is limited. Correlate allergy versus contact dermatitis versus culinary lipid intake.",
    "preparations": [
      {
        "type": "Infusion (leaf, traditional cutaneous or oral as labelled)",
        "plantPart": "leaf (not hull, not kernel)",
        "materialState": "dried",
        "solvent": "water",
        "parametersVerified": false,
        "form": "labelled leaf tea if a product exists",
        "sourceNote": "Traditional Juglans leaf; food kernel is a different exposure",
        "safetyLimitations": "No hull ‘iodine’ homemade protocol. Kernel oil is not leaf infusion.",
        "route": "as labelled"
      }
    ],
    "traditionalUses": "Traditional leaf; food nut separate.",
    "notAReplacement": true,
    "galleryKey": "walnut",
    "id": "walnut"
  },
  "wood-betony": {
    "botanicaOnly": true,
    "commonName": "Wood Betony",
    "botanicalName": "Stachys officinalis / Betonica officinalis",
    "botanicalProfile": "Betonica officinalis L. (Lamiaceae). Folk headache / nervine teas; limited monograph depth.",
    "conditions": [
      "folk nervine / head-pain lore"
    ],
    "mechanisms": [
      "Lamiaceae phenolics; not an analgesic drug."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Folk traditional use. Insufficient clinical evidence for headache disorders.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a triptan or analgesic substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Secondary headache red flags (thunderclap, neurological deficit) are emergencies."
      }
    ],
    "monitoring": [
      "Headache red flags"
    ],
    "contraindications": [
      "Using tea in place of emergency headache care"
    ],
    "osirisRelevance": "Stachys/Betonica folk nervine/head-pain lore has insufficient clinical evidence for headache disorders. Lamiaceae phenolics do not constitute analgesic-drug pharmacology. Thunderclap or neurological-deficit headaches are emergencies. Interpret headache red flags independently of tea use.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "aerial parts",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "Folk infusions exist; exact verified medicinal ratios are not displayed",
        "parametersVerified": false,
        "sourceNote": "Traditional Betonica",
        "safetyLimitations": "Not a brain-imaging substitute.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Folk aerial nervine.",
    "notAReplacement": true,
    "galleryKey": "wood-betony",
    "id": "wood-betony"
  },
  "woodruff": {
    "botanicaOnly": true,
    "commonName": "Woodruff",
    "botanicalName": "Galium odoratum",
    "botanicalProfile": "Galium odoratum (L.) Scop. (Rubiaceae). Coumarin-scented herb. Concentrated homemade extracts and large ‘May wine’ doses are a bleeding/hepatotoxicity discussion, not a recipe to maximise.",
    "conditions": [
      "culinary scenting in small traditional food amounts; medicinal concentrated use is not encouraged here"
    ],
    "mechanisms": [
      "Coumarin released on drying; not pharmaceutical warfarin, but concentrated coumarin is not harmless."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Culinary traditional use in small amounts. Insufficient evidence for medicinal ‘blood thinning’ claims — those claims are unsafe.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an anticoagulant analogue and must not be used as one. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not combine homemade concentrated woodruff with anticoagulants as a ‘natural warfarin’. Hepatotoxic coumarin load from overuse."
      }
    ],
    "monitoring": [
      "Bleeding if someone is anticoagulated and also using concentrated products — clinician"
    ],
    "contraindications": [
      "Using as anticoagulant substitute",
      "Large homemade extracts"
    ],
    "osirisRelevance": "If a patient reports Galium odoratum beyond small culinary amounts, interpret bleeding and hepatic risk in a coumarin frame released on drying — not pharmaceutical warfarin, but concentrated coumarin is not harmless and is relevant with anticoagulants (INR/bleeding). Medicinal ‘blood thinning’ claims are unsafe. Evidence for therapeutic anticoagulation is insufficient. Useful OSIRIS series: bleeding and INR if anticoagulated plus concentrated products.",
    "preparations": [
      {
        "type": "Culinary dried herb in small food amounts only",
        "plantPart": "aerial parts, dried",
        "parametersVerified": false,
        "form": "food flavouring, not a medicinal extract protocol",
        "sourceNote": "Coumarin-containing culinary plant; no medicinal maceration recipe",
        "safetyLimitations": "No tincture ratios. No ‘blood thinning’ tea protocol.",
        "route": "food-level only"
      }
    ],
    "traditionalUses": "Culinary dried herb.",
    "notAReplacement": true,
    "galleryKey": "woodruff",
    "id": "woodruff"
  },
  "yellow-dock": {
    "botanicaOnly": true,
    "commonName": "Yellow Dock",
    "botanicalName": "Rumex crispus",
    "botanicalProfile": "Rumex crispus L. (Polygonaceae). Root in folk ‘blood cleanser’ lore. Oxalates and anthraquinones (related docks/sorrels) matter; not a gentle everyday tea by default.",
    "conditions": [
      "folk laxative / ‘depurative’ root — anthraquinone stimulant laxatives are not for long-term self-care"
    ],
    "mechanisms": [
      "Anthraquinones (stimulant laxative physiology in Rumex/Rheum relatives) and oxalates; not an iron medicine simply because of folk anaemia lore."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Folk traditional use. Insufficient safe long-term evidence. Stimulant laxative class cautions apply if anthraquinones are present.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a substitute for investigating anaemia or for licensed laxative care plans. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Pregnancy. Inflammatory bowel disease. Long-term stimulant laxatives (electrolytes, dependence). Kidney stone / oxalate caution. Do not self-treat anaemia."
      }
    ],
    "monitoring": [
      "Electrolytes if someone already abuses stimulant laxatives",
      "Anaemia needs diagnosis"
    ],
    "contraindications": [
      "Long-term self-medication of constipation or anaemia"
    ],
    "osirisRelevance": "If a patient reports Rumex crispus root, interpret bowel pattern as possible anthraquinone stimulant-laxative physiology (electrolytes, dependence with long-term use) and oxalate/kidney-stone caution — not an iron medicine for folk anaemia. Inflammatory bowel disease and pregnancy are cautions. Evidence for safe long-term use is insufficient. Useful OSIRIS series: electrolytes, stool pattern, and anaemia investigation rather than herb as treatment.",
    "preparations": [
      {
        "type": "No long-term household decoction protocol",
        "plantPart": "root in folk use",
        "parametersVerified": false,
        "form": "limitation; stimulant-laxative cautions",
        "sourceNote": "Folk Rumex root; exact ratios not displayed because of anthraquinone/oxalate safety",
        "safetyLimitations": "No daily ‘detox’ decoction. Not an iron tablet.",
        "route": "not recommended as unsupervised long-term tea"
      }
    ],
    "traditionalUses": "Folk root; not a detox indication.",
    "notAReplacement": true,
    "galleryKey": "yellow-dock",
    "id": "yellow-dock"
  },
  "cleavers": {
    "botanicaOnly": true,
    "commonName": "Cleavers",
    "botanicalName": "Galium aparine",
    "botanicalProfile": "Galium aparine L. (Rubiaceae). Fresh juice/folk ‘lymphatic’ use is not an oncology or antibiotic pathway.",
    "conditions": [
      "folk spring tonic / lymphatic lore"
    ],
    "mechanisms": [
      "No established lymphatic-drug mechanism; traditional diuretic folklore."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Folk traditional use. Insufficient clinical evidence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a diuretic drug or cancer therapy. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not delay investigation of lymphadenopathy. Fresh plant can irritate skin."
      }
    ],
    "monitoring": [
      "Persistent lumps: medical assessment"
    ],
    "contraindications": [
      "Using as cancer care"
    ],
    "osirisRelevance": "Galium aparine ‘lymphatic’ folklore has no established lymphatic-drug mechanism. Persistent lymphadenopathy needs investigation; tea must not delay that. Fresh plant can irritate skin. Clinical evidence is insufficient. Correlate nodes/lumps as standard medical assessment.",
    "preparations": [
      {
        "type": "Traditional fresh juice exists in folk practice — not a verified sterile medicinal product",
        "plantPart": "fresh aerial parts in folk juicing",
        "parametersVerified": false,
        "form": "limitation; no millilitre dose invented",
        "sourceNote": "Folk Galium aparine",
        "safetyLimitations": "No exact juice millilitres. Dried tea grams not verified here. Not a lymphoma treatment.",
        "route": "not as a disease treatment"
      }
    ],
    "traditionalUses": "Folk fresh herb.",
    "notAReplacement": true,
    "galleryKey": "cleavers",
    "id": "cleavers"
  },
  "cowslip": {
    "botanicaOnly": true,
    "commonName": "Cowslip",
    "botanicalName": "Primula veris",
    "botanicalProfile": "Primula veris L. (Primulaceae). Flower and root are different (root more saponin expectorant; flower milder tea). Primula allergy (primin) exists.",
    "conditions": [
      "traditional flower tea for restlessness; root in some expectorant combinations"
    ],
    "mechanisms": [
      "Saponins (especially root); not an antibiotic."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Limited clinical evidence, often in combination products.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a sedative drug or antimicrobial substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Contact allergy. Root saponins can irritate stomach. Conservation: do not wild-strip protected populations."
      }
    ],
    "monitoring": [
      "Allergy",
      "Gastric irritation with root"
    ],
    "contraindications": [
      "Known Primula sensitisation"
    ],
    "osirisRelevance": "If a patient reports Primula veris, interpret restlessness (flower tea) versus gastric irritation from root saponins; contact allergy/Primula sensitisation can explain rash. Combination expectorant products are not flower-tea evidence. Evidence is traditional with limited, often combination, clinical data. Correlate allergy and gastric symptoms.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "flower",
        "materialState": "dried",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "EMA/HMPC Primulae flos / related monographs: use labelled tea; root is a different preparation (often decoction in combinations)",
        "parametersVerified": false,
        "sourceNote": "EMA/HMPC Primula veris materials where listed",
        "safetyLimitations": "Flower tea ≠ root extract. Do not over-harvest wild plants.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional flower; distinct root.",
    "notAReplacement": true,
    "galleryKey": "cowslip",
    "id": "cowslip"
  },
  "crimson-clover": {
    "botanicaOnly": true,
    "commonName": "Crimson Clover",
    "botanicalName": "Trifolium incarnatum",
    "botanicalProfile": "Trifolium incarnatum L. (Fabaceae). This is not red clover (Trifolium pratense), which itself has isoflavone products that are still not hormone-replacement therapy.",
    "conditions": [
      "agricultural/forage plant; insufficient medicinal monograph"
    ],
    "mechanisms": [
      "Not assumed to share red-clover isoflavone extract data."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient medicinal evidence. Not interchangeable with red clover extracts.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not hormone-replacement therapy. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Do not copy red-clover isoflavone capsule data onto crimson clover."
      }
    ],
    "monitoring": [
      "Species confirmation"
    ],
    "contraindications": [
      "Assuming red-clover equivalence"
    ],
    "osirisRelevance": "Trifolium incarnatum is not interchangeable with red-clover isoflavone extracts. Human medicinal evidence is insufficient to state oestrogenic, coagulation or menopausal physiological effects. Do not interpret hormone-sensitive disease, INR or vasomotor symptoms as if standardised T. pratense isoflavones were used unless that product is confirmed.",
    "preparations": [
      {
        "type": "No verified medicinal preparation",
        "plantPart": "not established as a medicinal herbal substance here",
        "parametersVerified": false,
        "form": "limitation",
        "sourceNote": "Distinct from Trifolium pratense",
        "safetyLimitations": "No infusion quantities."
      }
    ],
    "traditionalUses": "Not a substitute for red clover products.",
    "notAReplacement": true,
    "galleryKey": "crimson-clover",
    "id": "crimson-clover"
  },
  "red-clover": {
    "botanicaOnly": true,
    "commonName": "Red Clover",
    "botanicalName": "Trifolium pratense",
    "botanicalProfile": "Trifolium pratense L. (Fabaceae). Flowering tops; isoflavone-standardised extracts used in some menopausal trials are not homemade infusions.",
    "conditions": [
      "traditional and limited clinical use around menopausal comfort with specific isoflavone products"
    ],
    "mechanisms": [
      "Isoflavones (phyto-oestrogen receptor partial activity); not licensed hormone-replacement therapy and not tamoxifen."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence for some standardised isoflavone extracts. Traditional flower tea is not those extracts.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not hormone-replacement therapy; not an oestrogen-receptor antagonist medicine. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Hormone-sensitive cancers: clinician advice. Anticoagulant discussions exist for some clover species (coumarins) — product-specific. Pregnancy: not for self-directed phyto-oestrogen use."
      }
    ],
    "monitoring": [
      "Hormone-sensitive disease history: clinician",
      "Do not assume tea equals extract"
    ],
    "contraindications": [
      "Self-directed use in hormone-sensitive cancer without oncology advice"
    ],
    "osirisRelevance": "If a patient reports Trifolium pratense, distinguish flower tea from standardised isoflavone extracts: phyto-oestrogen receptor partial activity may be relevant to vasomotor symptoms and to hormone-sensitive cancer history, and is not hormone-replacement therapy or tamoxifen. Some clover materials raise coumarin/anticoagulant questions (product-specific). Evidence for extracts is limited clinical; tea ≠ extract. Correlate menopausal symptoms and hormone-sensitive history, not assumed benefit.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "flowering tops",
        "materialState": "dried",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "Traditional herbal tea is not isoflavone-standardised extract. Exact tea grams follow labelled teas if any; extract milligrams are product-specific and not a kitchen process",
        "parametersVerified": false,
        "sourceNote": "Red clover isoflavone products are manufactured",
        "safetyLimitations": "Do not extract isoflavones at home. Not HRT.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional flowering tops; extracts separate.",
    "notAReplacement": true,
    "galleryKey": "red-clover",
    "id": "red-clover"
  },
  "fireweed": {
    "botanicaOnly": true,
    "commonName": "Fireweed",
    "botanicalName": "Chamaenerion / Epilobium angustifolium",
    "botanicalProfile": "Epilobium angustifolium L. (Onagraceae). Aerial parts in traditional prostate / urinary folklore; not a substitute for investigating prostatic disease.",
    "conditions": [
      "traditional urinary / prostate comfort teas after serious disease is excluded"
    ],
    "mechanisms": [
      "Polyphenols (oenothein) discussed in research; not an alpha-blocker or 5-alpha-reductase inhibitor drug."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use with preliminary research. Not established urological-drug equivalence.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not tamsulosin or finasteride. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Red-flag prostate symptoms need medical assessment. Do not delay cancer pathway."
      }
    ],
    "monitoring": [
      "Urinary retention, bone pain, haematuria: medical care"
    ],
    "contraindications": [
      "Using tea instead of indicated urological investigation"
    ],
    "osirisRelevance": "If a patient reports Epilobium/Chamaenerion angustifolium, interpret lower-urinary/prostate comfort as polyphenol (oenothein) research-context tradition, not alpha-blocker or 5-alpha-reductase-inhibitor pharmacology. Retention, bone pain or haematuria still need urological investigation. Evidence is traditional with preliminary research, not drug equivalence.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "aerial parts",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "Traditional infusions exist; exact verified medicinal ratios are not displayed without labelled products",
        "parametersVerified": false,
        "sourceNote": "Traditional Epilobium",
        "safetyLimitations": "Not a prostate-cancer treatment.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      }
    ],
    "traditionalUses": "Traditional aerial herb.",
    "notAReplacement": true,
    "galleryKey": "fireweed",
    "id": "fireweed"
  },
  "bladderwrack": {
    "botanicaOnly": true,
    "commonName": "Bladderwrack",
    "botanicalName": "Fucus vesiculosus",
    "botanicalProfile": "Fucus vesiculosus L. (Fucaceae). Dried thallus. Iodine content is variable and can disturb thyroid function. Heavy-metal contamination is a seaweed quality issue.",
    "conditions": [
      "traditional iodine-containing seaweed; not a safe ‘thyroid booster’ to improvise"
    ],
    "mechanisms": [
      "Iodine load affecting thyroid hormone synthesis; alginates bind in the gut — not levothyroxine and not an anti-obesity drug."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional use. Clinical evidence for weight or thyroid disease is insufficient and iodine harm is real.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not levothyroxine; not an antithyroid drug; not a licensed weight-loss medicine. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Hyperthyroidism, iodine sensitivity, concurrent thyroid medicines, pregnancy iodine excess, lithium, amiodarone. Use only tested food-grade / authorised products — foraging can concentrate contaminants."
      }
    ],
    "monitoring": [
      "Thyroid-Stimulating Hormone (TSH) if thyroid disease or thyroid medicines are present — clinician-directed",
      "Do not self-dose iodine"
    ],
    "contraindications": [
      "Unsupervised use in thyroid disease",
      "Pregnancy self-dosing of iodine"
    ],
    "osirisRelevance": "If a patient reports Fucus vesiculosus, interpret thyroid tests as possible iodine load affecting hormone synthesis, and distinguish alginates (gut binding) from levothyroxine or anti-obesity drugs. Interactions: hyperthyroidism, iodine sensitivity, thyroid medicines, pregnancy iodine excess, lithium, amiodarone; foraging contaminant risk. Evidence for weight/thyroid treatment is insufficient; iodine harm is real. Useful OSIRIS series: Thyroid-Stimulating Hormone (TSH) under clinician direction — do not self-dose iodine.",
    "preparations": [
      {
        "type": "Dried thallus products only as labelled",
        "plantPart": "whole thallus",
        "materialState": "dried seaweed",
        "parametersVerified": false,
        "form": "finished seaweed preparations with iodine labelling preferred",
        "sourceNote": "Iodine variability; contamination risk",
        "safetyLimitations": "No household ‘kelp tea’ gram protocol is provided because iodine dose cannot be controlled from wild weed. Not a thyroid treatment.",
        "route": "only as labelled food/supplement after clinical advice if thyroid disease"
      }
    ],
    "traditionalUses": "Traditional seaweed; iodine is the risk.",
    "notAReplacement": true,
    "galleryKey": "bladderwrack",
    "id": "bladderwrack"
  },
  "black-cumin": {
    "botanicaOnly": true,
    "commonName": "Black Cumin",
    "botanicalName": "Nigella sativa",
    "botanicalProfile": "Nigella sativa L. (Ranunculaceae). Seed and expressed oil. Not Nigella damascena. Not a COVID or diabetes medicine claim.",
    "conditions": [
      "traditional seed; some limited clinical work on oil/seed for metabolic and atopic themes is product-specific"
    ],
    "mechanisms": [
      "Thymoquinone-containing oil; not metformin, not an inhaled corticosteroid."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence for some seed-oil products. Traditional culinary seed is not those trial products. Not established disease-modifying therapy.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not metformin, insulin, or steroid-sparing therapy. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "May affect Blood Pressure (BP) and glycaemia modestly in some studies — monitor if on antihypertensives or diabetes medicines; do not stop those medicines. Quality of oil varies (oxidation)."
      }
    ],
    "monitoring": [
      "Glucose if diabetic and using concentrated oil",
      "Blood Pressure (BP) if hypotensive"
    ],
    "contraindications": [
      "Using oil in place of indicated diabetes or asthma medicines"
    ],
    "osirisRelevance": "If a patient reports Nigella sativa concentrated oil/seed (not a pinch of culinary seed), limited product-specific trials discuss modest BP and glucose effects via thymoquinone-containing oil — not metformin or inhaled corticosteroid pharmacology. Monitor glucose and BP if diabetes or antihypertensive medicines are present; do not stop those medicines. Oil quality/oxidation varies. Evidence is limited and product-specific.",
    "preparations": [
      {
        "type": "Culinary seed",
        "plantPart": "seed",
        "materialState": "dried whole seed as food",
        "parametersVerified": false,
        "form": "food amounts are not a trial-standardised oil dose",
        "sourceNote": "Culinary seed versus expressed oil trials",
        "safetyLimitations": "No kitchen solvent extraction. Oil millilitres from social-media ‘protocols’ are not verified here.",
        "route": "food"
      },
      {
        "type": "Expressed oil (finished products)",
        "plantPart": "seed",
        "materialState": "expressed oil as labelled",
        "parametersVerified": false,
        "form": "finished oil",
        "sourceNote": "Trial products are specific",
        "safetyLimitations": "Not a substitute for indicated metabolic medicines.",
        "route": "oral as labelled"
      }
    ],
    "traditionalUses": "Culinary seed; oil is separate.",
    "notAReplacement": true,
    "galleryKey": "black-cumin",
    "id": "black-cumin"
  },
  "black-pepper": {
    "botanicaOnly": true,
    "commonName": "Black Pepper",
    "botanicalName": "Piper nigrum",
    "botanicalProfile": "Piper nigrum L. (Piperaceae). Fruit (peppercorn). Piperine alters drug absorption (including some medicines and curcumin). Culinary pinch ≠ extract.",
    "conditions": [
      "culinary spice; piperine is a pharmacokinetic potentiator, not a reason to make extracts"
    ],
    "mechanisms": [
      "Piperine inhibits some drug-metabolising / transport pathways; can raise levels of co-administered substances."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Culinary use is long-standing. Concentrated piperine is a pharmacokinetic issue, not a therapeutic class analogue.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a bioavailability ‘hack’ to replace dose adjustment by clinicians. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "May increase absorption of some medicines and supplements (including some phenytoin / theophylline discussions in literature — clinician if on narrow-index drugs). Avoid homemade piperine extracts."
      }
    ],
    "monitoring": [
      "Narrow-therapeutic-index medicines: do not add piperine capsules without a pharmacist"
    ],
    "contraindications": [
      "Unsupervised piperine extracts with narrow-index medicines"
    ],
    "osirisRelevance": "Culinary Piper nigrum is usually irrelevant to labs; concentrated piperine is a pharmacokinetic potentiator (can raise levels of some co-administered medicines/supplements, including narrow-index discussions such as phenytoin/theophylline in literature). Interpret unexpected drug-level toxicity or apparent potency change if piperine capsules were added. Culinary use is long-standing; concentrated piperine is the interaction issue, not a therapeutic class analogue.",
    "preparations": [
      {
        "type": "Culinary fruit (peppercorn)",
        "plantPart": "dried unripe/ripe fruit as spice",
        "materialState": "whole or ground as food",
        "parametersVerified": false,
        "form": "food seasoning",
        "sourceNote": "Culinary spice; concentrated extracts not recommended to improvise",
        "safetyLimitations": "No medicinal decoction ratio. Piperine capsules are not kitchen pepper.",
        "route": "food"
      }
    ],
    "traditionalUses": "Culinary spice.",
    "notAReplacement": true,
    "galleryKey": "black-pepper",
    "id": "black-pepper"
  },
  "blue-lotus": {
    "botanicaOnly": true,
    "commonName": "Blue Lotus",
    "botanicalName": "Nymphaea caerulea",
    "botanicalProfile": "Nymphaea caerulea Savigny (Nymphaeaceae). Sold as a psychoactive smoking/tea product in unregulated markets. Alkaloid content is poorly standardised; safety is not established.",
    "conditions": [
      "recreational / folkloric psychoactive use — not an OSIRIS medicine"
    ],
    "mechanisms": [
      "Aporphine alkaloids (e.g. apomorphine-related discussion in popular literature) are not a reason to self-dose; evidence quality is poor."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient reliable clinical evidence. Unregulated psychoactive marketing is not a monograph.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an anxiolytic or erectile-dysfunction medicine analogue. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Sedation, driving impairment, unknown alkaloids, possible contamination. Do not combine with Central Nervous System (CNS) depressants or alcohol as an experiment."
      }
    ],
    "monitoring": [
      "Do not drive",
      "Unregulated product risk"
    ],
    "contraindications": [
      "Driving",
      "Mixing with sedatives"
    ],
    "osirisRelevance": "If Nymphaea caerulea products are reported, interpret sedation, impaired attention and possible psychiatric/perceptual change as poorly characterised aporphine-alkaloid exposure in unregulated products — not a validated anxiolytic. Additive CNS depression with alcohol or sedatives is relevant. Driving impairment matters. Clinical evidence is insufficient. Do not treat this as a documented receptor-specific OSIRIS therapy; correlate mental status and sedation as unknown psychoactive exposure.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "flower",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Unregulated psychoactive plant material. No household tea, wine, or smoking preparation is provided. Insufficient quality and safety standardisation.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Historical/ritual mentions do not equal safety.",
    "notAReplacement": true,
    "galleryKey": "blue-lotus",
    "id": "blue-lotus"
  },
  "boneset": {
    "botanicaOnly": true,
    "commonName": "Boneset",
    "botanicalName": "Eupatorium perfoliatum",
    "botanicalProfile": "Eupatorium perfoliatum L. (Asteraceae). Related Eupatorium species may contain pyrrolizidine alkaloids; ‘boneset’ is not a fracture medicine (doctrine of signatures).",
    "conditions": [
      "folk febrile-cold teas — PA and hepatotoxicity concerns dominate"
    ],
    "mechanisms": [
      "Immunostimulant folklore; PA risk in the genus is the clinically important point."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Folk use. Insufficient safe self-care evidence. Name does not heal bones.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not an antipyretic drug or fracture treatment. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Pyrrolizidine alkaloid / liver risk. Asteraceae allergy. Do not use for ‘breaking fevers’ in children."
      }
    ],
    "monitoring": [
      "Liver symptoms",
      "High fever: medical care"
    ],
    "contraindications": [
      "Internal self-preparation",
      "Liver disease"
    ],
    "osirisRelevance": "If Eupatorium perfoliatum internal use is reported, interpret febrile-cold folklore against pyrrolizidine-alkaloid / hepatotoxicity concern in the genus and Asteraceae allergy. It is not an immunostimulant drug and does not ‘break bones’ or safely break fevers in children. Evidence for safe self-care is insufficient. Useful OSIRIS series: hepatic enzymes if internal folk tea was used, and fever red flags as infection.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "aerial parts",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Eupatorium ‘boneset’ is not provided as a household tea because of hepatotoxicity concerns in this genus and because the English name does not indicate fracture care.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Folk name; not osteology.",
    "notAReplacement": true,
    "galleryKey": "boneset",
    "id": "boneset"
  },
  "acai-berry": {
    "botanicaOnly": true,
    "commonName": "Acai Berry",
    "botanicalName": "Euterpe oleracea",
    "botanicalProfile": "Euterpe oleracea Mart. (Arecaceae). Fruit pulp as food. Freeze-dried powders are foods/supplements, not pharmacopoeial teas.",
    "conditions": [
      "food antioxidant marketing; insufficient medicinal evidence for disease claims"
    ],
    "mechanisms": [
      "Polyphenols as in many fruits; not a licensed cardiometabolic drug."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Food. Preliminary marketing evidence is not established clinical evidence for treating disease.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a statin, antihypertensive, or antidiabetic medicine. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Sugar content of sweetened juices. Food allergy. Contamination/quality of powders varies."
      }
    ],
    "monitoring": [
      "Glycaemia if using sweetened acai bowls as ‘health doses’"
    ],
    "contraindications": [
      "Treating disease with smoothie marketing"
    ],
    "osirisRelevance": "Euterpe oleracea is a food fruit; polyphenols do not establish cardiometabolic drug effects. Sweetened juices/bowls can raise glucose independent of any ‘antioxidant’ marketing. Powder quality varies. Clinical evidence for treating disease is insufficient. Correlate glycaemia with sugar load and do not attribute lipid or CRP changes to acai as a medicine.",
    "preparations": [
      {
        "type": "Food pulp / powder",
        "plantPart": "fruit pulp",
        "materialState": "frozen pulp or dried powder as food",
        "parametersVerified": false,
        "form": "food, not a medicinal infusion ratio",
        "sourceNote": "Food product; no Ph. Eur. medicinal tea posology applied",
        "safetyLimitations": "No medicinal decoction. Powders are not standardised drugs.",
        "route": "oral as food"
      }
    ],
    "traditionalUses": "Amazonian food fruit.",
    "notAReplacement": true,
    "galleryKey": "acai-berry",
    "id": "acai-berry"
  },
  "red-onion": {
    "botanicaOnly": true,
    "commonName": "Red Onion",
    "botanicalName": "Allium cepa",
    "botanicalProfile": "Allium cepa L. (Amaryllidaceae). Culinary bulb. Not garlic (Allium sativum) and not equivalent to garlic library evidence.",
    "conditions": [
      "culinary food; some quercetin research does not make onion tea a medicine"
    ],
    "mechanisms": [
      "Organosulfur compounds and flavonols (quercetin); culinary amounts differ from extracts."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Culinary use. Limited clinical evidence for extracts is not onion-soup posology.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not garlic, not an antihypertensive class substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Allium allergy. Theoretical antiplatelet overlap at concentrated extract doses — food onion is usually culinary. Gastro-oesophageal reflux can worsen."
      }
    ],
    "monitoring": [
      "Culinary tolerance"
    ],
    "contraindications": [
      "Using fried onion as antihypertensive therapy"
    ],
    "osirisRelevance": "Culinary Allium cepa provides organosulfur compounds and quercetin at food doses that are not extract trials. Concentrated extracts have theoretical antiplatelet overlap; food onion more often worsens reflux. Allergy is relevant. Limited extract evidence is not soup posology. Interpret bleeding only if concentrated extracts were used; otherwise correlate GI tolerance and culinary Allium intake.",
    "preparations": [
      {
        "type": "Culinary bulb",
        "plantPart": "bulb",
        "materialState": "fresh culinary",
        "parametersVerified": false,
        "form": "food",
        "sourceNote": "Food; not Allium sativum monograph",
        "safetyLimitations": "No medicinal maceration ratio. Not a garlic-extract substitute.",
        "route": "food"
      }
    ],
    "traditionalUses": "Culinary bulb.",
    "notAReplacement": true,
    "galleryKey": "red-onion",
    "id": "red-onion"
  },
  "wild-garlic-flowers": {
    "botanicaOnly": true,
    "commonName": "Wild Garlic Flowers",
    "botanicalName": "Allium ursinum (flowers)",
    "botanicalProfile": "Allium ursinum L. (Amaryllidaceae) flowers. Leaves are the more common culinary part. Lily-of-the-valley and colchicum lookalikes have caused poisonings when foraging leaves — flowers still require certain identity.",
    "conditions": [
      "culinary garnish; not garlic bulb medicine"
    ],
    "mechanisms": [
      "Allium sulfur compounds at culinary levels; not Allium sativum powdered-bulb trials."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Culinary flowers. Insufficient medicinal evidence; foraging misidentification is the main hazard.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a garlic-bulb extract or antihypertensive substitute. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Foraging lookalikes can be fatal. Not a standardised allicin product."
      }
    ],
    "monitoring": [
      "Only use if identity is certain from cultivation"
    ],
    "contraindications": [
      "Uncertain wild identity"
    ],
    "osirisRelevance": "Allium ursinum flowers are culinary garnish, not Allium sativum bulb-extract trials (no transferable allicin-dose platelet/BP evidence). The main diagnostic hazard is fatal lookalike foraging. Evidence for medicinal effects of flowers is insufficient. If illness follows wild collection, interpret misidentification/toxicity first, not garlic-supplement pharmacology.",
    "preparations": [
      {
        "type": "Culinary flower if identity is certain",
        "plantPart": "flower",
        "materialState": "fresh culinary",
        "parametersVerified": false,
        "form": "food garnish, not a medicinal ratio",
        "sourceNote": "Not Allium sativum HMPC bulb",
        "safetyLimitations": "No medicinal infusion protocol. Foraging errors are dangerous.",
        "route": "food"
      }
    ],
    "traditionalUses": "Culinary wild Allium, part-specific.",
    "notAReplacement": true,
    "galleryKey": "wild-garlic-flowers",
    "id": "wild-garlic-flowers"
  },
  "wild-rose": {
    "botanicaOnly": true,
    "commonName": "Wild Rose",
    "botanicalName": "Rosa canina / Rosa spp.",
    "botanicalProfile": "Rosa canina L. (Rosaceae) hips (Rosae pseudofructus) are the usual vitamin-C-containing herbal substance; petals are a different, more cosmetic/traditional article.",
    "conditions": [
      "traditional hip tea as a vitamin C-containing food-like tea; not a cold cure guaranteed"
    ],
    "mechanisms": [
      "Ascorbic acid and galactolipids discussed in some hip powders; not an antiviral."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional hip tea/food. Some clinical work on specific rosehip powders for osteoarthritis is product-specific and not a garden-hip simmer by default.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a Non-Steroidal Anti-Inflammatory Drug (NSAID) substitute even where powder trials exist. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Remove irritating hairs inside hips (itch). Sugar in syrups. Allergy. Powder trials ≠ homemade decoction."
      }
    ],
    "monitoring": [
      "Strain hairs",
      "Joint disease still needs a medical plan"
    ],
    "contraindications": [
      "Ignoring labelled hair-straining"
    ],
    "osirisRelevance": "If a patient reports rose hips, interpret as a vitamin C–containing food-like tea; some powders discuss galactolipids in osteoarthritis — that is product-specific, not garden-hip simmer. Irritant hairs explain rectal/throat itch if unstrained. Not an antiviral. Evidence: traditional food-tea plus limited powder trials. Correlate straining/itch and do not assume joint-disease modification from homemade decoction.",
    "preparations": [
      {
        "type": "Infusion / brief decoction (hips)",
        "plantPart": "pseudofruit (hip), seeds/hairs removed or strained",
        "materialState": "dried, crushed hips",
        "solvent": "water",
        "temperature": "hot water; hips are often briefly simmered in traditional pharmacy because they are hard fruits — follow labelled tea",
        "time": "labelled product; not invented here as a single unofficial minute count",
        "finishing": "strain thoroughly to remove hairs",
        "parametersVerified": false,
        "form": "hip tea",
        "sourceNote": "Traditional / EU rose hip herbal teas; specialised osteoarthritis powders are different",
        "safetyLimitations": "Petals are not hips. Standardised powders are not this tea.",
        "route": "oral"
      }
    ],
    "traditionalUses": "Traditional hips; petals separate.",
    "notAReplacement": true,
    "galleryKey": "wild-rose",
    "id": "wild-rose"
  },
  "rue-anise": {
    "botanicaOnly": true,
    "commonName": "Rue Anise",
    "botanicalName": "ambiguous gallery identity (Ruta / Pimpinella / Illicium not assumed)",
    "botanicalProfile": "The gallery label Rue Anise is ambiguous. Rue is Ruta graveolens (phototoxic, abortifacient, toxic). Anise is Pimpinella anisum. Star anise is Illicium verum (and toxic I. anisatum adulterant). These are not one plant.",
    "conditions": [
      "cannot assign a single therapeutic use without species"
    ],
    "mechanisms": [
      "No single mechanism for an ambiguous label."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Insufficient: identity is not a single botanical monograph.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not mapped to any medicine class. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Ruta graveolens is unsafe to self-prepare (phototoxicity, pregnancy). Japanese star anise adulteration of teas has caused neurotoxicity. Do not improvise."
      }
    ],
    "monitoring": [
      "Do not use until the packet Latin name is known"
    ],
    "contraindications": [
      "Any use without Latin-name identification",
      "Pregnancy if the material were rue"
    ],
    "osirisRelevance": "This label is not a single species. Ruta graveolens would make phototoxicity and pregnancy toxicity relevant; Illicium anisatum (star-anise adulterant) is neurotoxic; Pimpinella/Illicium verum are different again. Human evidence cannot be applied without the packet Latin name. If used, interpret as unidentified botanical exposure (GI, neurological, phototoxic, or pregnancy-risk depending on what it actually was).",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "unknown",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "safetyLimitations": "Ambiguous gallery name covering multiple unrelated plants, including toxic rue and lookalike star anise. No preparation method is provided.",
        "sourceNote": "Toxic, restricted or otherwise unsafe for unsupervised household preparation. No recipe is provided.",
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Name is not a plant.",
    "notAReplacement": true,
    "galleryKey": "rue-anise",
    "id": "rue-anise"
  },
  "young-barley": {
    "botanicaOnly": true,
    "commonName": "Young Barley",
    "botanicalName": "Hordeum vulgare (young grass)",
    "botanicalProfile": "Hordeum vulgare L. (Poaceae), harvested as young green shoots before grain fill. This is a food-type grass powder, not barley grain malt or beer, and not a pharmacopoeial herbal tea in the HMPC leafy-herb sense.",
    "conditions": [
      "food-type chlorophyll / nutrient powder; not a disease-modifying herbal drug"
    ],
    "mechanisms": [
      "Nutrient and antioxidant content typical of young cereal grass; not a licensed detox medicine."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional/food use as a green powder. Clinical evidence for specific disease treatment is insufficient. Existing gallery prose describes food forms, not a Ph. Eur. medicinal infusion.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a chelation, liver-failure, or cancer therapy. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Grass/cereal allergy including gluten-related disorders: barley grass products may not be suitable (labelling varies; coeliac advice is product-specific). Contamination (microbes, heavy metals) depends on manufacturer testing. Juice powders are not sterile medicines."
      }
    ],
    "monitoring": [
      "Allergy",
      "Do not use as a substitute for indicated nutrition or medicines"
    ],
    "contraindications": [
      "Known barley/grass allergy unless a clinician and the label clearly allow a specific product"
    ],
    "osirisRelevance": "Hordeum young-grass powders are food-type greens, not a detox drug. Grass/cereal allergy and gluten-related disorders may apply (labelling varies). Microbial/metal contamination is product-dependent. Clinical evidence for disease treatment is insufficient. Correlate allergy and do not attribute laboratory ‘detox’ changes to chlorophyll powders.",
    "preparations": [
      {
        "type": "Powder",
        "plantPart": "young green shoots (leaf blades before ear fill)",
        "materialState": "dried, powdered young grass",
        "solvent": "mixed into water, juice or food at labelled scoop size — no pharmacopoeial plant-to-water medicinal ratio is claimed",
        "parametersVerified": false,
        "form": "powder mixed into drinks or food",
        "finishing": "stir into liquid; follow labelled scoop",
        "storage": "dry, follow manufacturer (typically cool and dry, sealed)",
        "route": "oral as food-type powder",
        "sourceNote": "Existing BOTANICA gallery preparation prose; not an EMA/HMPC herbal-tea posology",
        "safetyLimitations": "This is food-form use. Exact medicinal infusion grams, simmering times and tincture strengths are not established in a pharmacopoeial monograph applied here. Not equivalent to barley grain decoctions or to medicinal herbal teas of unrelated plants."
      },
      {
        "type": "Juice / tablet / capsule (manufactured)",
        "plantPart": "young shoots",
        "materialState": "juiced or dried into dose forms as labelled",
        "parametersVerified": false,
        "form": "finished juice shots, tablets or capsules",
        "sourceNote": "Manufacturer processes; not a household extraction procedure",
        "safetyLimitations": "Do not improvise solvent extracts of grass. Follow labelled products only.",
        "route": "oral as labelled"
      }
    ],
    "traditionalUses": "Young cereal-grass food powder.",
    "notAReplacement": true,
    "galleryKey": "young-barley",
    "id": "young-barley"
  },
  "chicory": {
    "botanicaOnly": true,
    "commonName": "Chicory",
    "botanicalName": "Cichorium intybus",
    "botanicalProfile": "Cichorium intybus L. (Asteraceae). Root (roasted as coffee substitute) versus leaf (salad) versus medicinal root extracts are not equivalent.",
    "conditions": [
      "traditional bitter root for dyspepsia; inulin fibre in root is a food prebiotic, not a liver ‘cleanse’"
    ],
    "mechanisms": [
      "Bitter sesquiterpene lactones; inulin (fructan) in root; not a bile-duct procedure or a caffeine-free medicine for liver failure."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional bitter. Inulin is a food fibre. Insufficient evidence as hepatoprotective drug.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a Proton-Pump Inhibitor (PPI) or ursodeoxycholic-acid analogue. Herbal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Asteraceae allergy. Biliary obstruction. Inulin can cause bloating. Roasted coffee-substitute is not a standardised extract."
      }
    ],
    "monitoring": [
      "Biliary pain: medical care",
      "Bloating with inulin"
    ],
    "contraindications": [
      "Biliary obstruction",
      "Asteraceae allergy"
    ],
    "osirisRelevance": "If a patient reports Cichorium intybus root, interpret dyspepsia as bitter sesquiterpene lactones and bloating/gas as inulin (fructan) fermentation — not a liver cleanse or bile-duct procedure. Asteraceae allergy and biliary obstruction are relevant. Roasted coffee-substitute ≠ standardised extract. Evidence is traditional; hepatoprotective-drug evidence is insufficient. Correlate biliary pain and GI gas, not ALT as ‘proof of cleanse’.",
    "preparations": [
      {
        "type": "Infusion / decoction (root)",
        "plantPart": "root",
        "materialState": "dried cut, or roasted as a food drink — roasting is a food process, not automatically the medicinal extract",
        "solvent": "water",
        "parametersVerified": false,
        "form": "root tea or roasted-root drink as labelled",
        "sourceNote": "Traditional Cichorium root; roasted beverage ≠ medicinal extract",
        "safetyLimitations": "Exact unofficial ratios not displayed. Leaf salad is not root decoction.",
        "route": "oral"
      }
    ],
    "traditionalUses": "Traditional bitter root; roasted food drink separate.",
    "notAReplacement": true,
    "galleryKey": "chicory",
    "id": "chicory"
  },
  "birch-polypore": {
    "botanicaOnly": true,
    "commonName": "Birch Polypore",
    "botanicalName": "Fomitopsis betulina",
    "botanicalProfile": "Fomitopsis betulina (Bull.) B.K.Cui, M.L.Han & Y.C.Dai (Fomitopsidaceae), formerly Piptoporus betulinus. This is a birch-restricted polypore. The medicinal material in traditional European use is the mature basidiocarp (fruiting body), not birch wood and not unrelated white bracket fungi. Correct field identification is essential.",
    "conditions": [
      "traditional topical styptic and folk internal use for minor infectious complaints after serious infection has been excluded — not an antibiotic indication"
    ],
    "mechanisms": [
      "Polyporenic acids, piptamine-type metabolites and fungal beta-glucans have in-vitro antimicrobial and immunomodulatory activity in laboratory studies. This is not beta-lactam, macrolide or other licensed antimicrobial pharmacology and is not a reason to delay indicated antibiotics."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional and ethnomycological use (including archaeological association with Fomitopsis betulina). Preclinical in-vitro work exists. Clinical evidence is insufficient to treat this fungus as an established antimicrobial or wound medicine. Traditional use, preclinical findings and established clinical evidence are not equivalent.",
    "relationshipLabel": "Educational mycological context only — not used by OSIRIS Treatment / Prevention selection. Not an antibiotic, antiviral or antiseptic-drug analogue. Fungal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Insufficient clinical interaction data for crude birch-polypore tea. Do not use as cover for bacterial infection instead of indicated antimicrobials. Theoretical immune-modulating overlap with immunosuppressants is unquantified — clinician review if transplanted or on potent immunosuppression."
      }
    ],
    "monitoring": [
      "Worsening fever, spreading redness or wound sepsis: medical care, not more fungus",
      "Gastrointestinal (GI) intolerance if someone has already used a labelled product"
    ],
    "contraindications": [
      "Using this fungus instead of indicated antimicrobials",
      "Unidentified wild bracket fungi",
      "Known polypore / mushroom allergy"
    ],
    "osirisRelevance": "If a patient reports Fomitopsis betulina, interpret traditional styptic/folk antimicrobial use against in-vitro polyporenic acids, piptamine-type metabolites and beta-glucans — not beta-lactam pharmacology. Immune-modulating overlap with immunosuppression is unquantified. Clinical evidence is insufficient to treat this as an established antimicrobial. Spreading infection is not a fungus-failure problem. Correlate fever/wound sepsis as bacterial disease; GI intolerance if a labelled product was used.",
    "preparations": [
      {
        "type": "Decoction (dried fruiting body, traditional)",
        "plantPart": "basidiocarp (fruiting body), typically harvested from birch and dried",
        "materialState": "dried, sliced or broken fruiting body (leathery polypore tissue is not treated as a delicate leaf infusion)",
        "solvent": "water",
        "temperature": "simmering water is the traditional hard-tissue method; an exact official simmering temperature is not set in a European Union herbal monograph for this species",
        "time": "Exact simmering minutes are not displayed. No European Medicines Agency / Committee on Herbal Medicinal Products (EMA/HMPC) posology was applied here.",
        "ratio": "No verified plant-to-water medicinal ratio is displayed. Folk handful measures are not pharmacopoeial doses.",
        "finishing": "strain; the decoction is not a sterile wound fluid",
        "form": "aqueous decoction for oral use only if a labelled food/supplement product exists — not a hospital antiseptic",
        "storage": "Prepare freshly unless a labelled product states otherwise",
        "route": "oral as labelled; do not pour homemade decoction into deep wounds",
        "parametersVerified": false,
        "sourceNote": "Ethnomycological traditional use of Fomitopsis betulina fruiting body; no EMA/HMPC monograph posology used",
        "safetyLimitations": "Not therapeutically equivalent to commercial extracts or to isolated metabolites. Misidentification of polypores can be dangerous. Not a substitute for wound-infection care."
      },
      {
        "type": "Powder / commercial extract",
        "plantPart": "fruiting body",
        "materialState": "dried powder or manufactured extract as labelled",
        "parametersVerified": false,
        "form": "finished powder or extract",
        "sourceNote": "Commercial products are process-specific; dual extracts and teas are not interchangeable",
        "safetyLimitations": "No household ethanol extraction procedure is provided. Follow labelled products only.",
        "route": "oral as labelled"
      }
    ],
    "traditionalUses": "Traditional European birch polypore; styptic and folk antimicrobial lore.",
    "activeConstituents": [
      "polyporenic acids",
      "piptamine-type metabolites (research context)",
      "fungal beta-glucans"
    ],
    "notAReplacement": true,
    "galleryKey": "birch-polypore",
    "id": "birch-polypore"
  },
  "chaga": {
    "botanicaOnly": true,
    "commonName": "Chaga",
    "botanicalName": "Inonotus obliquus",
    "botanicalProfile": "Inonotus obliquus (Fr.) Pilát (Hymenochaetaceae). The article used in traditional Siberian practice is the sterile black sclerotium (conk) growing on birch, not the fertile resupinate fruiting body and not random tree charcoal. Host tree and correct fungal identity matter.",
    "conditions": [
      "traditional tonic decoction; marketing anticancer claims are not established clinical indications"
    ],
    "mechanisms": [
      "Melanin-rich sclerotium, fungal polysaccharides and triterpenes (including inotodiol and betulin-related compounds from the birch association) show antioxidant and immunomodulatory activity in preclinical models. This is not cytotoxic chemotherapy, checkpoint-inhibitor or tyrosine-kinase-inhibitor pharmacology."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Long traditional use as a birch-sclerotium decoction. Preclinical (in-vitro and animal) literature is substantial. Human clinical evidence for treating cancer or other diseases with kitchen chaga is insufficient. Traditional use and preclinical findings are not established clinical evidence and are not equivalent to licensed oncology medicines.",
    "relationshipLabel": "Educational mycological context only — not used by OSIRIS Treatment / Prevention selection. Not an anticancer-drug analogue and not a licensed immunomodulator substitute. Fungal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Oxalate load from concentrated chaga preparations has been linked in case reports to oxalate nephropathy — particular caution with known kidney stone disease, chronic kidney disease, or high-oxalate diets. Theoretical additive effects on glucose and on bleeding with antihyperglycaemics or anticoagulants are not a reason to stop those medicines; they are a reason for clinician review before concentrated products. Immune stimulation is a caution with transplant immunosuppression."
      }
    ],
    "monitoring": [
      "Kidney symptoms (flank pain, haematuria) if concentrated products are already in use — seek care",
      "Glucose if diabetic and using concentrated extracts",
      "Do not self-monitor chaga as cancer therapy"
    ],
    "contraindications": [
      "Using chaga in place of indicated cancer or infection treatment",
      "Unsupervised high-dose sclerotium tea in known oxalate kidney-stone disease",
      "Mushroom / polypore allergy"
    ],
    "osirisRelevance": "If a patient reports Inonotus obliquus, interpret concentrated sclerotium use for oxalate nephropathy risk (flank pain, haematuria, renal function) and theoretical glucose/bleeding and immune-stimulation cautions with antihyperglycaemics, anticoagulants or transplant drugs. Melanin/polysaccharide/triterpene preclinical antioxidant activity is not chemotherapy. Human clinical evidence for treating cancer with kitchen chaga is insufficient. Useful OSIRIS series: renal function/oxalate-related symptoms, glucose if diabetic, and do not self-monitor as oncology.",
    "preparations": [
      {
        "type": "Decoction (sclerotium chunks, traditional)",
        "plantPart": "sterile sclerotium (conk), typically from birch",
        "materialState": "dried, broken or coarsely ground sclerotium — not a leaf infusion",
        "solvent": "water",
        "temperature": "traditional use is prolonged hot-water extraction of a hard sclerotium; an exact official temperature is not set in an EMA/HMPC monograph for this fungus",
        "time": "Folk sources describe long simmering; exact minutes are not displayed because they are not pharmacopoeial posology.",
        "ratio": "No verified sclerotium-to-water medicinal ratio is displayed.",
        "finishing": "strain; do not treat the liquid as a sterile medicine",
        "form": "dark aqueous decoction",
        "storage": "Prepare freshly unless a labelled product states otherwise",
        "route": "oral as traditional tea / labelled food-type product",
        "parametersVerified": false,
        "sourceNote": "Traditional Siberian / northern Eurasian sclerotium decoction; no EMA/HMPC gram posology applied",
        "safetyLimitations": "Aqueous decoction is not equivalent to dual water–ethanol commercial extracts or to isolated triterpenes. Concentrated homemade ‘strong’ boils increase oxalate exposure without a verified dose. Not an oncology protocol."
      },
      {
        "type": "Dual / standardised commercial extract",
        "plantPart": "sclerotium",
        "materialState": "manufactured water and/or ethanol extracts as labelled",
        "solvent": "product-specific; ethanol concentration is not a kitchen parameter",
        "parametersVerified": false,
        "form": "finished extract, powder or capsules",
        "sourceNote": "Industrial dual extraction is not reproduced by adding vodka to simmered chaga at home",
        "safetyLimitations": "No household alcohol-extraction recipe is provided. Different Drug Extract Ratio (DER) products are not interchangeable with tea.",
        "route": "oral as labelled"
      }
    ],
    "traditionalUses": "Traditional birch-sclerotium tonic decoction.",
    "activeConstituents": [
      "melanins",
      "fungal polysaccharides",
      "inotodiol and related lanostane triterpenes"
    ],
    "notAReplacement": true,
    "galleryKey": "chaga",
    "id": "chaga"
  },
  "lions-mane": {
    "botanicaOnly": true,
    "commonName": "Lion's Mane",
    "botanicalName": "Hericium erinaceus",
    "botanicalProfile": "Hericium erinaceus (Bull.) Pers. (Hericiaceae). Medicinal and culinary material is usually the fruiting body (the ‘mane’ of icicle-like spines). Cultured mycelium on grain is a different article: hericenones are more associated with fruiting body and erinacines more with mycelium in the research literature. They are not assumed therapeutically equivalent.",
    "conditions": [
      "culinary mushroom; limited clinical work on specific extracts for mild cognitive or mood complaints is product-specific and not a dementia-drug indication"
    ],
    "mechanisms": [
      "Hericenones and erinacines are studied for nerve growth factor (NGF)–related signalling in preclinical models. This is not acetylcholinesterase-inhibitor, memantine or licensed antidepressant pharmacology."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Culinary traditional use of the fruiting body. Limited clinical trials exist for some standardised Lion’s Mane products on subjective cognition or mood; samples are small and products differ. That limited clinical evidence is not established evidence equivalent to licensed dementia or psychiatric medicines, and it does not transfer automatically to an uncharacterised kitchen powder.",
    "relationshipLabel": "Educational mycological context only — not used by OSIRIS Treatment / Prevention selection. Not an acetylcholinesterase-inhibitor or antidepressant analogue. Fungal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Clinical interaction data are sparse. Additive gastrointestinal (GI) effects possible. Theoretical bleeding or glucose effects are not established as equivalent to antiplatelet or antidiabetic drugs — clinician review if using concentrated extracts with those medicines. Do not stop indicated cognitive or psychiatric medicines."
      }
    ],
    "monitoring": [
      "GI upset",
      "Cognitive red flags (rapid decline, focal neurology) need medical assessment, not more mushroom"
    ],
    "contraindications": [
      "Known mushroom allergy",
      "Using Lion’s Mane instead of indicated dementia, stroke or psychiatric treatment"
    ],
    "osirisRelevance": "If a patient reports Hericium erinaceus, distinguish culinary fruiting body from concentrated extracts studied for hericenones/erinacines (nerve growth factor–related preclinical signalling). Limited small trials on subjective cognition/mood are product-specific and are not acetylcholinesterase-inhibitor, memantine or antidepressant pharmacology. GI upset is common; theoretical bleeding/glucose effects with extracts are not established drug-equivalence. Rapid cognitive decline or focal neurology needs medical assessment. Evidence is limited clinical for extracts only.",
    "preparations": [
      {
        "type": "Culinary fruiting body (cooked)",
        "plantPart": "fresh fruiting body",
        "materialState": "fresh, cooked as food — raw wild mushrooms should not be assumed safe as a ‘medicinal dose’",
        "parametersVerified": false,
        "form": "food",
        "sourceNote": "Culinary use of Hericium erinaceus fruiting body; cooking is food practice, not a pharmacopoeial extract",
        "safetyLimitations": "Food portions are not equivalent to quantified hericenone/erinacine extracts. Mycelium-on-grain powders are not this preparation.",
        "route": "oral as food"
      },
      {
        "type": "Dried powder / hot-water extract (labelled products)",
        "plantPart": "fruiting body or mycelium — must match the label",
        "materialState": "dried powder or manufactured aqueous extract as labelled",
        "solvent": "water for hot-water extracts; exact grams per cup are product-specific",
        "temperature": "hot water as labelled for teas/extracts; not a verified unofficial simmering protocol",
        "ratio": "No single unofficial fruiting-body-to-water ratio is displayed. Trial products used specific extracts.",
        "parametersVerified": false,
        "form": "powder, capsule or labelled tea-type extract",
        "sourceNote": "Limited clinical work is extract-specific; EMA/HMPC herbal-tea posology is not applied to this fungus",
        "safetyLimitations": "Fruiting-body powder, mycelium powder and dual ethanol–water extracts are not interchangeable. No household dual-extract recipe is provided.",
        "route": "oral as labelled"
      }
    ],
    "traditionalUses": "East Asian culinary and traditional medicinal fruiting body.",
    "activeConstituents": [
      "hericenones (fruiting-body research context)",
      "erinacines (mycelium research context)",
      "fungal beta-glucans"
    ],
    "notAReplacement": true,
    "galleryKey": "lions-mane",
    "id": "lions-mane"
  },
  "psilocybe": {
    "botanicaOnly": true,
    "commonName": "Psilocybe",
    "botanicalName": "Psilocybe cubensis",
    "botanicalProfile": "Psilocybe cubensis (Earle) Singer (Hymenogastraceae), the species named on this gallery image. Related Psilocybe species also contain psilocybin. In the United Kingdom, psilocybin and psilocin are controlled Class A substances. This monograph is educational mycology and evidence context only. It is not a use, cultivation or supply instruction.",
    "conditions": [
      "not a self-care herbal indication; pharmaceutical-grade psilocybin is researched only in supervised clinical trials for selected psychiatric indications"
    ],
    "mechanisms": [
      "Psilocybin is a prodrug converted to psilocin, a serotonin 2A (5-HT2A) receptor agonist. That receptor pharmacology is not a Selective Serotonin Reuptake Inhibitor (SSRI) and is not a licence for unsupervised use. Intense perceptual, autonomic and psychiatric effects can occur."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence exists for synthesised or pharmaceutical-grade psilocybin given with psychological support in regulated trials (for example selected depression protocols). That evidence does not apply to foraged or homemade Psilocybe cubensis, is not established as equivalent to licensed antidepressants, and does not authorise household use. Traditional ceremonial contexts are not United Kingdom lawful self-care and are not a dosing standard.",
    "relationshipLabel": "Educational mycological context only — not used by OSIRIS Treatment / Prevention selection. Not a Selective Serotonin Reuptake Inhibitor (SSRI), not a benzodiazepine, and not a licensed psychedelic medicine analogue for substitution. This fungus must not replace indicated psychiatric or emergency care.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Serotonergic medicines including Selective Serotonin Reuptake Inhibitors (SSRIs), Monoamine Oxidase Inhibitors (MAOIs) and other serotonergic agents: unpredictable interaction and serotonin-toxicity risk in unsupervised use. Lithium and some other psychiatric medicines: serious reported adverse combinations in illicit-use literature. Alcohol and other Central Nervous System (CNS) depressants or stimulants compound harm. Do not combine as an experiment."
      }
    ],
    "monitoring": [
      "This mushroom is not for self-monitoring as a herbal therapy",
      "Suspected poisoning, severe agitation, psychosis or suicidality: emergency care"
    ],
    "contraindications": [
      "Any unsupervised medicinal or recreational use",
      "Personal or family serious psychotic illness",
      "Driving or operating machinery",
      "Pregnancy",
      "Children"
    ],
    "osirisRelevance": "If Psilocybe / psilocybin exposure is reported, interpret perceptual change, autonomic shift, anxiety or psychosis-spectrum symptoms as psilocin serotonin 2A (5-HT2A) agonism — not SSRI pharmacology and not a self-care pathway. Unsupervised combinations with SSRI/MAOI/other serotonergic agents, lithium, alcohol or stimulants can produce unpredictable toxicity. Trial evidence for pharmaceutical psilocybin with psychological support does not apply to foraged material. Correlate mental status, suicidality, heart rate and emergency risk; do not provide recreational-use instruction.",
    "preparations": [
      {
        "type": "Not for self-preparation",
        "plantPart": "fruiting body (psilocybin-containing tissue) — identified for education only",
        "materialState": "Not applicable for household use",
        "parametersVerified": false,
        "form": "No household medicinal preparation is described",
        "route": "Do not self-prepare",
        "sourceNote": "United Kingdom controlled-substance status; clinical trial products are manufactured pharmaceutical psilocybin, not kitchen mushroom",
        "safetyLimitations": "Do not provide or follow cultivation, drying-as-drug, tea, lemon-tek, extract, chocolate or capsule recipes. Those are drug-preparation instructions and are not given here. Foraging misidentification can include lethal Galerina and other toxic lookalikes. Lawful clinical research uses controlled products under specialist supervision, which is not this gallery fungus."
      }
    ],
    "traditionalUses": "Historical ceremonial mentions do not authorise household preparation or United Kingdom self-supply.",
    "activeConstituents": [
      "psilocybin",
      "psilocin"
    ],
    "notAReplacement": true,
    "galleryKey": "psilocybe",
    "id": "psilocybe"
  },
  "turkey-tail": {
    "botanicaOnly": true,
    "commonName": "Turkey Tail",
    "botanicalName": "Trametes versicolor",
    "botanicalProfile": "Trametes versicolor (L.) Lloyd (Polyporaceae), also known as Coriolus versicolor / Yun Zhi. The basidiocarp is a thin, zoned bracket. Polysaccharide-K (PSK, Krestin) and polysaccharopeptide (PSP) are industrial, characterised extracts. A homemade fruiting-body decoction is not PSK or PSP.",
    "conditions": [
      "traditional medicinal mushroom; characterised PSK extracts have been used as oncology adjuncts in some jurisdictions — that is not a kitchen-turkey-tail indication"
    ],
    "mechanisms": [
      "Beta-glucan and protein-bound polysaccharide fractions can modulate innate immune signalling in experimental systems. Licensed PSK, where it exists, is a specific extract. This is not cytotoxic chemotherapy, radiotherapy or checkpoint-inhibitor pharmacology."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Traditional East Asian use of the fruiting body. Limited to more substantial clinical evidence applies to specific manufactured extracts such as Polysaccharide-K (PSK), not to unstandardised homemade decoctions. Traditional fruiting-body tea, preclinical beta-glucan data and extract-trial data are not equivalent. PSK is not a substitute for indicated cancer treatment and is not reproduced by simmering foraged brackets.",
    "relationshipLabel": "Educational mycological context only — not used by OSIRIS Treatment / Prevention selection. Not a chemotherapy, targeted-therapy or colony-stimulating-factor analogue. Fungal preparations are not direct replacements for prescribed medicines unless a specific authorised indication and evidence say otherwise.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Immune-modulating extracts may theoretically antagonise transplant immunosuppression — clinician review. Insufficient data to treat kitchen decoction as having PSK’s clinical interaction profile. Do not stop anticancer medicines. Mushroom allergy."
      }
    ],
    "monitoring": [
      "Oncology care remains the treating team’s pathway",
      "Fever or infection on immunosuppression: medical care"
    ],
    "contraindications": [
      "Using foraged turkey tail instead of indicated cancer treatment",
      "Unidentified wild brackets",
      "Mushroom allergy",
      "Unsupervised use after solid-organ transplant unless the treating clinician agrees"
    ],
    "osirisRelevance": "If a patient reports Trametes versicolor, distinguish kitchen decoction from manufactured protein-bound polysaccharide extracts (PSK/PSP) used as oncology adjuncts in some jurisdictions. Beta-glucan immune signalling in experimental systems is not cytotoxic chemotherapy. Immune-modulating extracts may theoretically conflict with transplant immunosuppression. Clinical evidence for PSK does not transfer to foraged tea. Correlate oncology/infection pathways with the treating team; fever on immunosuppression is medical, not mushroom-adjustable.",
    "preparations": [
      {
        "type": "Decoction (fruiting body, traditional)",
        "plantPart": "basidiocarp (thin bracket fruiting body)",
        "materialState": "dried, broken fruiting body",
        "solvent": "water",
        "temperature": "traditional hard-tissue decoction in simmering water; exact official temperature not set in an EMA/HMPC monograph for this species",
        "time": "Exact simmering minutes are not displayed.",
        "ratio": "No verified fruiting-body-to-water medicinal ratio is displayed.",
        "finishing": "strain",
        "form": "aqueous decoction",
        "storage": "Prepare freshly unless a labelled product states otherwise",
        "route": "oral as traditional tea / labelled food-type product",
        "parametersVerified": false,
        "sourceNote": "Traditional Yun Zhi fruiting-body decoction; this is not the Polysaccharide-K (PSK) manufacturing process",
        "safetyLimitations": "Not therapeutically equivalent to PSK or polysaccharopeptide (PSP). Misidentification of lookalike brackets is a risk. Not an oncology protocol."
      },
      {
        "type": "Standardised extract (PSK / PSP-type manufactured products)",
        "plantPart": "cultured mycelium or specified fungal biomass as in the licensed/characterised product",
        "materialState": "industrially extracted protein-bound polysaccharide as labelled",
        "solvent": "manufacturing solvents and Drug Extract Ratio (DER) are product-specific — not a household method",
        "parametersVerified": false,
        "form": "finished characterised extract (for example PSK where a product exists)",
        "sourceNote": "Clinical literature on PSK refers to manufactured extract, not kitchen turkey-tail tea",
        "safetyLimitations": "Do not attempt to ‘make PSK’ at home. Use only labelled products under the same clinical supervision as any other adjunct in cancer care. Not interchangeable with decoction.",
        "route": "oral as labelled, clinician-reviewed in oncology contexts"
      }
    ],
    "traditionalUses": "Traditional Yun Zhi fruiting body; industrial PSK/PSP are separate articles.",
    "activeConstituents": [
      "beta-glucans",
      "protein-bound polysaccharides (PSK/PSP in manufactured extracts only)"
    ],
    "notAReplacement": true,
    "galleryKey": "turkey-tail",
    "id": "turkey-tail"
  },
  "artichoke": {
    "botanicaOnly": false,
    "commonName": "Artichoke leaf",
    "botanicalName": "Cynara scolymus",
    "botanicalProfile": "Cynara scolymus L. / Cynara cardunculus L. (Asteraceae). The medicinal herbal substance in European traditional-use monographs is typically the dried leaf (Cynarae folium), not the culinary flower-head (globe artichoke vegetable).",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "leaf (folium)",
        "materialState": "dried, comminuted",
        "solvent": "water",
        "temperature": "boiling water poured onto the herbal substance",
        "time": "usually 5 to 15 minutes if not otherwise specified in the plant monograph (HMPC herbal-tea glossary)",
        "finishing": "strain / filter before drinking",
        "form": "herbal tea (infusion) for oral use",
        "ratio": "Comminuted herbal substance as a herbal infusion in the gram-range single doses listed in the European Union herbal monograph / labelled traditional product — not a culinary vegetable serving",
        "parametersVerified": true,
        "sourceNote": "EMA/HMPC European Union herbal monograph on Cynarae folium (traditional use; herbal tea and other preparations listed separately)",
        "safetyLimitations": "Not a Proton-Pump Inhibitor (PPI) or a treatment for biliary obstruction / acute gallstone crisis. Asteraceae allergy. Leaf tea is not equivalent to standardised leaf extracts.",
        "route": "oral",
        "storage": "Prepare freshly; do not store leftover tea as a sterile medicine"
      },
      {
        "type": "Standardised extract",
        "plantPart": "leaf",
        "materialState": "dry or liquid extract as labelled",
        "parametersVerified": false,
        "form": "authorised / registered leaf extract (not a kitchen preparation)",
        "ratio": "Not a household ratio; use only the labelled finished extract",
        "sourceNote": "Extract solvents and Drug Extract Ratio (DER) are product-specific",
        "safetyLimitations": "Extracts are not interchangeable with herbal tea or with culinary artichoke hearts.",
        "route": "oral, as labelled"
      }
    ],
    "galleryKey": "artichoke",
    "id": "artichoke",
    "conditions": [
      "functional dyspepsia",
      "bile-flow load"
    ],
    "mechanisms": [
      "Choleretic / dyspepsia-support physiology; not prokinetic or bile-acid sequestrant pharmacology."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional use together with limited clinical evidence. Traditional use, limited clinical evidence and established clinical evidence are not equivalent. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "supportive option for functional dyspepsia / bile-flow load — NOT therapeutically equivalent to proton-pump inhibitors or biliary procedures; must not replace indicated pharmaceutical treatment",
    "correspondingPharmaClasses": [
      "ppi"
    ],
    "medicineInteractions": [
      {
        "note": "Does not replace Proton-Pump Inhibitor (PPI) therapy. Concurrent use is not an instruction to stop a PPI."
      }
    ],
    "monitoring": [
      "dyspepsia",
      "biliary pain"
    ],
    "contraindications": [
      "Biliary obstruction",
      "Active gallstone crisis"
    ],
    "traditionalUses": "Traditional bitter for dyspepsia and bile flow.",
    "activeConstituents": [
      "cynarin",
      "chlorogenic acid"
    ],
    "osirisRelevance": "If a patient reports artichoke leaf (not merely eating the vegetable), interpret functional dyspepsia and bile-flow symptoms in a cynarin/chlorogenic-acid bitter frame, not Proton-Pump Inhibitor (PPI) pharmacology. Biliary colic, jaundice or obstruction must not be attributed to ‘failed bitters’. Evidence is traditional plus limited clinical. Useful OSIRIS series: gastrointestinal (GI) symptoms and, if hepatic enzymes were the linked finding, ALT/AST — not as proof the leaf treats the liver."
  },
  "ashwagandha": {
    "botanicaOnly": false,
    "commonName": "Ashwagandha",
    "botanicalName": "Withania somnifera",
    "botanicalProfile": "Withania somnifera (L.) Dunal (Solanaceae). Medicinal material in contemporary products is typically the dried root (Withaniae somniferae radix). Leaf, berry and root extracts are not equivalent. This is not Atropa or other tropane-toxic Solanaceae.",
    "preparations": [
      {
        "type": "Standardised root extract",
        "plantPart": "root",
        "materialState": "dry extract as labelled (withanolide standardisation is product-specific)",
        "parametersVerified": false,
        "form": "finished extract / capsule as labelled",
        "ratio": "Not a household ratio; kitchen decoction of unspecified root does not reproduce trial extracts",
        "sourceNote": "Clinical literature refers to characterised root extracts; EMA/HMPC does not supply a single interchangeable household tea posology for this record",
        "safetyLimitations": "Not a Selective Serotonin Reuptake Inhibitor (SSRI), benzodiazepine or levothyroxine substitute. Thyroid-axis and pregnancy cautions. Do not invent gram-per-cup kitchen doses.",
        "route": "oral, as labelled"
      },
      {
        "type": "Traditional root decoction",
        "plantPart": "root",
        "materialState": "dried",
        "solvent": "water",
        "parametersVerified": false,
        "form": "traditional decoction where a labelled product is not used",
        "sourceNote": "Traditional Rasayana use; exact household quantities, times and temperatures are not established in this OSIRIS record",
        "safetyLimitations": "Traditional decoction is not equivalent to standardised withanolide extracts.",
        "route": "oral"
      }
    ],
    "galleryKey": "ashwagandha",
    "id": "ashwagandha",
    "conditions": [
      "stress / HPA-adjacent autonomic load"
    ],
    "mechanisms": [
      "Adaptogenic / Hypothalamic-Pituitary-Adrenal (HPA)-adjacent calming physiology; not SSRI, benzodiazepine or levothyroxine pharmacology."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional use together with limited clinical evidence. Traditional use, limited clinical evidence and established clinical evidence are not equivalent. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "supportive option for stress / autonomic load — NOT a potential alternative to levothyroxine, SSRIs or benzodiazepines; NOT therapeutically equivalent; must not replace indicated pharmaceutical treatment",
    "correspondingPharmaClasses": [
      "ssri",
      "levothyroxine"
    ],
    "medicineInteractions": [
      {
        "note": "Not an antidepressant substitute."
      },
      {
        "note": "Thyroid-axis overlap possible — not levothyroxine replacement; clinician review if thyroid medicines are in use."
      },
      {
        "note": "May increase sedation with Central Nervous System (CNS) depressants."
      }
    ],
    "monitoring": [
      "autonomic / sleep symptoms",
      "Thyroid-Stimulating Hormone (TSH) if thyroid medicines or marked TSH disturbance are present"
    ],
    "contraindications": [
      "Hyperthyroid context",
      "Pregnancy",
      "Autoimmune disease unless clinician reviews"
    ],
    "traditionalUses": "Traditional Rasayana root for stress load.",
    "activeConstituents": [
      "withanolides"
    ],
    "osirisRelevance": "If a patient reports ashwagandha root products, interpret sleep, stress-arousal and Thyroid-Stimulating Hormone (TSH) in a withanolide / adaptogenic frame, not Selective Serotonin Reuptake Inhibitor (SSRI) or levothyroxine pharmacology. Additive Central Nervous System (CNS) sedation with hypnotics is relevant. Evidence is traditional plus limited clinical. Useful OSIRIS series: pulse if tachycardia was linked, sleep/autonomic symptoms, and TSH when thyroid medicines are present."
  },
  "bacopa": {
    "botanicaOnly": true,
    "commonName": "Bacopa",
    "botanicalName": "Bacopa monnieri",
    "botanicalProfile": "Bacopa monnieri (L.) Wettst. (Plantaginaceae), also called Brahmi in some traditions (the name Brahmi is also applied to other plants — identity must be Bacopa monnieri). Medicinal material in studied products is typically the dried aerial parts. This is not a licensed acetylcholinesterase-inhibitor.",
    "preparations": [
      {
        "type": "Standardised aerial extract",
        "plantPart": "aerial parts",
        "materialState": "dry extract as labelled (bacoside standardisation is product-specific)",
        "parametersVerified": false,
        "form": "finished extract as labelled",
        "ratio": "Not a household ratio; kitchen teas do not reproduce bacoside-standardised trial products",
        "sourceNote": "Limited clinical work refers to characterised extracts; this record does not invent a pharmacopoeial household infusion posology",
        "safetyLimitations": "Gastrointestinal (GI) upset is common with some extracts. Not a dementia-drug or licensed stimulant. Do not stop indicated cognitive or psychiatric medicines.",
        "route": "oral, as labelled"
      }
    ],
    "galleryKey": "bacopa",
    "id": "bacopa",
    "conditions": [
      "subjective cognitive / attention load after serious disease is excluded"
    ],
    "mechanisms": [
      "Bacosides are studied for synaptic/cholinergic-adjacent signalling in preclinical models; this is not acetylcholinesterase-inhibitor, memantine or licensed stimulant pharmacology."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence for some standardised Bacopa products on attention or memory tasks; samples and products differ. That limited clinical evidence is not established evidence equivalent to licensed cognitive medicines.",
    "relationshipLabel": "supportive option for subjective cognitive/attention load only — NOT therapeutically equivalent to acetylcholinesterase inhibitors or stimulants; must not replace indicated pharmaceutical treatment",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Clinical interaction data are sparse. Additive Gastrointestinal (GI) effects possible. Thyroid-axis discussions exist in some literature — clinician review if thyroid medicines are in use. Not a cholinergic-drug substitute."
      }
    ],
    "monitoring": [
      "Gastrointestinal (GI) tolerance",
      "Cognitive red flags (rapid decline, focal neurology) need medical assessment, not more Bacopa"
    ],
    "contraindications": [
      "Using Bacopa instead of indicated dementia, stroke or psychiatric treatment",
      "Unidentified ‘Brahmi’ material"
    ],
    "traditionalUses": "Traditional Ayurvedic medhya rasayana aerial herb.",
    "activeConstituents": [
      "bacosides"
    ],
    "osirisRelevance": "If a patient reports Bacopa monnieri (characterised extracts, not an unidentified Brahmi), interpret subjective attention/memory complaints and Gastrointestinal (GI) upset in a bacoside frame. Human clinical evidence is limited and product-specific; this should not be interpreted as an established dementia-drug effect. Thyroid medicines warrant clinician review. Useful OSIRIS series: cognitive red flags remain neurological assessment, not herb response."
  },
  "barberry": {
    "botanicaOnly": false,
    "commonName": "Barberry",
    "botanicalName": "Berberis spp.",
    "botanicalProfile": "Berberis spp. (Berberidaceae). Traditional medicinal articles include stem bark, root bark and, in some products, fruit. Contemporary glycaemic discussion usually concerns berberine-containing extracts, which are not equivalent to culinary barberry berries (zereshk) or to a garden-hedge tea. Treatment / Prevention continues to use the clinical library identity berberis.",
    "preparations": [
      {
        "type": "Standardised berberine-containing extract",
        "plantPart": "root / stem bark as specified by the manufacturer",
        "materialState": "finished extract / isolated berberine salt as labelled",
        "parametersVerified": false,
        "form": "labelled clinician-reviewed product",
        "ratio": "Not a household bark decoction; do not invent a kitchen berberine extraction",
        "sourceNote": "Limited clinical glycaemic literature concerns characterised berberine preparations, not unspecified Berberis hedge tea",
        "safetyLimitations": "Gastrointestinal (GI) intolerance is common. Pregnancy. Cytochrome P450 / transporter interaction potential. Not metformin or insulin. Culinary dried berries are not those extracts.",
        "route": "oral, as labelled"
      }
    ],
    "galleryKey": "barberry",
    "id": "barberry",
    "libraryKey": "berberis",
    "conditions": [
      "elevated glucose",
      "elevated Hemoglobin A1c (HbA1c)"
    ],
    "mechanisms": [
      "AMP-activated protein kinase (AMPK)-overlapping glycaemic handling; not biguanide, Sodium-Glucose Co-transporter 2 (SGLT2), Glucagon-Like Peptide-1 (GLP-1) or insulin pharmacology."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence for some berberine preparations. Traditional bitter use and berberine-extract trials are not equivalent. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "functional analogue for glycaemic / AMPK-overlapping physiology — complementary / adjunct at most; NOT therapeutically equivalent to metformin, insulin or GLP-1 agonists; must not replace indicated pharmaceutical treatment",
    "correspondingPharmaClasses": [
      "metformin"
    ],
    "medicineInteractions": [
      {
        "note": "May increase glycaemic-lowering physiological effect alongside metformin — hypoglycaemia risk is a medicine issue; this is not permission to stop metformin."
      },
      {
        "note": "Concurrent insulin or sulfonylureas: overlapping glucose-lowering physiology, not substitution."
      }
    ],
    "monitoring": [
      "Glucose / Hemoglobin A1c (HbA1c)",
      "gastrointestinal tolerance",
      "hepatic enzymes"
    ],
    "contraindications": [
      "Pregnancy",
      "Significant hepatic impairment unless clinician reviews",
      "Unsupervised combination with intensive insulin / sulfonylurea regimens"
    ],
    "traditionalUses": "Traditional bitter bark / root used metabolically in several systems.",
    "activeConstituents": [
      "berberine"
    ],
    "osirisRelevance": "If a patient reports barberry / berberine products (not only culinary berries), interpret glucose and Hemoglobin A1c (HbA1c) in an AMP-activated protein kinase (AMPK)-overlapping frame, not metformin pharmacology. Gastrointestinal (GI) upset can appear as a new symptom. Hypoglycaemia remains a medicine issue if antihyperglycaemics are combined. Evidence for extracts is limited clinical. Useful OSIRIS series: glucose, HbA1c, GI tolerance, hepatic enzymes."
  },
  "boswellia": {
    "botanicaOnly": false,
    "commonName": "Boswellia",
    "botanicalName": "Boswellia serrata",
    "botanicalProfile": "Boswellia serrata Roxb. ex Colebr. (Burseraceae). Medicinal material is the gum-resin (olibanum / frankincense resin), not a leaf tea. Different Boswellia species and boswellic-acid standardisations are not interchangeable.",
    "preparations": [
      {
        "type": "Standardised gum-resin extract",
        "plantPart": "gum-resin",
        "materialState": "dry extract as labelled (boswellic-acid standardisation is product-specific)",
        "parametersVerified": false,
        "form": "finished extract as labelled",
        "ratio": "Not a household incense or kitchen simmer; use only the labelled finished extract",
        "sourceNote": "Limited clinical joint-load literature concerns characterised resin extracts, not burned frankincense or unspecified decoctions",
        "safetyLimitations": "Not a Non-Steroidal Anti-Inflammatory Drug (NSAID), corticosteroid or Disease-Modifying Antirheumatic Drug (DMARD). Gastrointestinal (GI) intolerance. Resin incense smoke is not an oral extract.",
        "route": "oral, as labelled"
      }
    ],
    "galleryKey": "boswellia",
    "id": "boswellia",
    "conditions": [
      "musculoskeletal inflammatory load",
      "raised C-Reactive Protein (CRP)"
    ],
    "mechanisms": [
      "5-lipoxygenase (LOX)-adjacent inflammatory-tone support; not NSAID cyclo-oxygenase (COX) blockade or DMARD immunology."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence for some standardised gum-resin extracts. Traditional incense use is not those extracts. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "complementary / adjunct option for joint inflammatory tone — NOT therapeutically equivalent to NSAIDs, corticosteroids or DMARDs; must not replace indicated pharmaceutical treatment",
    "correspondingPharmaClasses": [
      "nsaid"
    ],
    "medicineInteractions": [
      {
        "note": "Inflammatory-tone overlap with Non-Steroidal Anti-Inflammatory Drugs (NSAIDs) is not therapeutic equivalence and is not a reason to stop indicated NSAID / gastroprotection."
      }
    ],
    "monitoring": [
      "joint symptoms",
      "C-Reactive Protein (CRP) if that was the linked finding"
    ],
    "contraindications": [
      "Active GI bleeding"
    ],
    "traditionalUses": "Traditional resin for joint inflammatory load.",
    "activeConstituents": [
      "boswellic acids"
    ],
    "osirisRelevance": "If a patient reports Boswellia serrata extracts, interpret joint symptoms and C-Reactive Protein (CRP) in a boswellic-acid / 5-lipoxygenase (LOX)-adjacent frame, not Non-Steroidal Anti-Inflammatory Drug (NSAID) pharmacology. Evidence is limited and product-specific. Useful OSIRIS series: CRP if inflammation was linked, and Gastrointestinal (GI) bleeding red flags remain medical, not herb-adjustable."
  },
  "cranberry": {
    "botanicaOnly": false,
    "commonName": "Cranberry",
    "botanicalName": "Vaccinium macrocarpon",
    "botanicalProfile": "Vaccinium macrocarpon Aiton (Ericaceae). Medicinal discussion concerns berry juice or proanthocyanidin-characterised products. Sweetened supermarket juice, dried fruit and standardised extracts are not equivalent. This is not blueberry (V. corymbosum) or lingonberry as a single interchangeable article.",
    "preparations": [
      {
        "type": "Juice / standardised extract",
        "plantPart": "fruit",
        "materialState": "juice or dry extract as labelled",
        "parametersVerified": false,
        "form": "juice or finished extract as labelled",
        "ratio": "Proanthocyanidin content is product-specific; kitchen cranberry sauce is not a characterised extract",
        "sourceNote": "Limited clinical anti-adhesion literature uses specified juice or extract products, not an OSIRIS-invented household recipe",
        "safetyLimitations": "Not an antibiotic for febrile urinary tract infection (UTI) or pyelonephritis. Sugar load in sweetened juices is relevant to glucose. Oxalate / stone caution with large volumes. Warfarin International Normalised Ratio (INR) case reports exist.",
        "route": "oral"
      }
    ],
    "galleryKey": "cranberry",
    "id": "cranberry",
    "conditions": [
      "uroepithelial adhesion load"
    ],
    "mechanisms": [
      "Proanthocyanidin anti-adhesion on uroepithelium; not bactericidal antibiotic pharmacology."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence for some juice/extract products on recurrent-adhesion context. This is not established treatment of acute pyelonephritis. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "supportive option for uroepithelial anti-adhesion — NOT a potential alternative to antibiotics; NOT therapeutically equivalent; must not replace indicated antimicrobial treatment of urinary tract infection",
    "correspondingPharmaClasses": [
      "antibiotic"
    ],
    "medicineInteractions": [
      {
        "note": "Cranberry–warfarin International Normalised Ratio (INR) case reports exist — monitor, do not treat cranberry as anticoagulation or as antibiotic replacement."
      }
    ],
    "monitoring": [
      "urinary symptoms",
      "International Normalised Ratio (INR) if on warfarin",
      "fever / flank pain as red flags for antibiotic pathway"
    ],
    "contraindications": [
      "Warfarin instability without INR review"
    ],
    "traditionalUses": "Traditional berry for urinary comfort / adhesion load.",
    "activeConstituents": [
      "A-type proanthocyanidins"
    ],
    "osirisRelevance": "If a patient reports cranberry juice or extracts, interpret urinary symptoms as possible anti-adhesion context, not antimicrobial killing. Fever, flank pain or suspected pyelonephritis remain an antibiotic pathway. Sweetened juice can affect glucose. Warfarin users: International Normalised Ratio (INR) case reports exist. Evidence is limited clinical. Useful OSIRIS series: urinary red flags, glucose if juice is sugary, INR if anticoagulated."
  },
  "echinacea": {
    "botanicaOnly": false,
    "commonName": "Echinacea",
    "botanicalName": "Echinacea spp.",
    "botanicalProfile": "Echinacea purpurea, E. angustifolia and E. pallida (Asteraceae) are not automatically interchangeable. European traditional-use articles include aerial parts and/or root depending on the species monograph. Expressed juice, dry extracts and herbal teas are not equivalent.",
    "preparations": [
      {
        "type": "Authorised traditional preparation",
        "plantPart": "aerial parts and/or root as specified by species and product",
        "materialState": "expressed juice, comminuted herb, or extract as labelled",
        "parametersVerified": false,
        "form": "labelled traditional / registered product",
        "ratio": "Species, plant part, solvent and Drug Extract Ratio (DER) are product-specific; no single kitchen recipe is provided",
        "sourceNote": "EMA/HMPC species-specific Echinacea monographs list several preparations; they are not mixed as if one plant-part tea",
        "safetyLimitations": "Asteraceae allergy. Autoimmune / immunosuppressant caution. Not an antibiotic or antiviral drug. Do not delay indicated antimicrobials.",
        "route": "oral, as labelled"
      }
    ],
    "galleryKey": "echinacea",
    "id": "echinacea",
    "conditions": [
      "innate host-response load",
      "upper-respiratory inflammatory context"
    ],
    "mechanisms": [
      "Innate immune-tone support; not bactericidal / virucidal drug pharmacology."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional use together with limited clinical evidence for some products. Traditional use, limited clinical evidence and established clinical evidence are not equivalent. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "supportive option for innate host-response tone — NOT a potential alternative to antimicrobials; NOT therapeutically equivalent; must not replace indicated antibiotic or antiviral treatment",
    "correspondingPharmaClasses": [
      "antibiotic"
    ],
    "medicineInteractions": [
      {
        "note": "Theoretical immune-tone conflict with immunosuppressants — clinician review; not an antimicrobial substitute."
      }
    ],
    "monitoring": [
      "symptom trajectory",
      "fever / C-Reactive Protein (CRP) / white-cell trend if infection markers are in the Global context"
    ],
    "contraindications": [
      "Systemic autoimmune disease unless clinician reviews",
      "Asteraceae allergy"
    ],
    "traditionalUses": "Traditional host-response plant for early infectious load.",
    "activeConstituents": [
      "alkamides",
      "caffeic acid derivatives",
      "polysaccharides"
    ],
    "osirisRelevance": "If a patient reports Echinacea, interpret early respiratory/host-response symptoms in an innate immune-tone frame (alkamides, caffeic derivatives), not antibiotic pharmacology. Asteraceae allergy can explain rash. Immunosuppressant context needs clinician review. C-Reactive Protein (CRP) or fever still mark infection trajectories. Evidence is traditional plus limited clinical. Useful OSIRIS series: CRP, white-cell trend, fever — not as proof the herb treated infection."
  },
  "fenugreek": {
    "botanicaOnly": false,
    "commonName": "Fenugreek",
    "botanicalName": "Trigonella foenum-graecum",
    "botanicalProfile": "Trigonella foenum-graecum L. (Fabaceae). Medicinal / culinary material is the dried seed. Culinary spice amounts, aqueous infusions and concentrated seed-powder products are not equivalent.",
    "preparations": [
      {
        "type": "Culinary seed / infusion",
        "plantPart": "seed",
        "materialState": "dried seed, whole or coarsely comminuted",
        "solvent": "water when prepared as an infusion / decoction",
        "parametersVerified": false,
        "form": "culinary seed or traditional aqueous preparation",
        "ratio": "Exact household gram-per-cup medicinal doses are not established in this record; culinary amounts differ from concentrated powders used in some trials",
        "sourceNote": "Traditional culinary/metabolic seed use; limited clinical glycaemic work is often powder/extract-specific",
        "safetyLimitations": "Fabaceae allergy. Pregnancy (traditional uterine-activity caution). Coumarin-related anticoagulant review. Maple-syrup body-odour can appear and is not a disease marker. Not insulin.",
        "route": "oral"
      }
    ],
    "galleryKey": "fenugreek",
    "id": "fenugreek",
    "conditions": [
      "elevated glucose",
      "elevated Hemoglobin A1c (HbA1c)"
    ],
    "mechanisms": [
      "Viscous galactomannan and insulin-sensitivity-support physiology; not insulin or sulfonylurea pharmacology."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional use together with limited clinical evidence. Traditional use, limited clinical evidence and established clinical evidence are not equivalent. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "complementary / adjunct option for glycaemic load — NOT therapeutically equivalent to insulin or metformin; must not replace indicated pharmaceutical treatment",
    "correspondingPharmaClasses": [
      "metformin"
    ],
    "medicineInteractions": [
      {
        "note": "May increase glycaemic-lowering physiological effect — not metformin replacement."
      },
      {
        "note": "Coumarin-containing seed — bleeding review with anticoagulants, not replacement."
      }
    ],
    "monitoring": [
      "Glucose / Hemoglobin A1c (HbA1c)"
    ],
    "contraindications": [
      "Pregnancy (uterine-activity tradition)",
      "Allergy to Fabaceae"
    ],
    "traditionalUses": "Traditional metabolic and culinary seed.",
    "activeConstituents": [
      "galactomannan fibre",
      "4-hydroxyisoleucine"
    ],
    "osirisRelevance": "If a patient reports fenugreek seed (especially concentrated powder), interpret glucose and Hemoglobin A1c (HbA1c) in a viscous-galactomannan frame, not insulin pharmacology. Anticoagulant bleeding review is relevant. Maple-syrup odour can be a fenugreek artefact. Evidence is traditional plus limited clinical. Useful OSIRIS series: glucose / HbA1c."
  },
  "ginkgo": {
    "botanicaOnly": false,
    "commonName": "Ginkgo",
    "botanicalName": "Ginkgo biloba",
    "botanicalProfile": "Ginkgo biloba L. (Ginkgoaceae). Medicinal products typically use standardised dried-leaf extracts. Raw seed (ginkgo nut) has a different toxicity profile (4'-O-methylpyridoxine) and is not the leaf-extract article. Fallen garden leaves are not a pharmacopoeial extract.",
    "preparations": [
      {
        "type": "Standardised leaf extract",
        "plantPart": "leaf",
        "materialState": "dry extract as labelled (flavone glycoside / terpene-lactone standardisation is product-specific)",
        "parametersVerified": false,
        "form": "finished extract as labelled",
        "ratio": "Not a household leaf tea; trial products are specific extracts (for example acetone or ethanol extracts with defined marker ranges)",
        "sourceNote": "Limited clinical microcirculatory / cognitive literature concerns characterised leaf extracts, not garden infusion",
        "safetyLimitations": "Bleeding tendency with anticoagulants / antiplatelets. Seeds are a separate toxicology issue. Not an antiplatelet drug or acetylcholinesterase inhibitor. Stop before surgery on clinical advice.",
        "route": "oral, as labelled"
      }
    ],
    "galleryKey": "ginkgo",
    "id": "ginkgo",
    "conditions": [
      "microcirculatory / neural perfusion load"
    ],
    "mechanisms": [
      "Flavone glycosides and terpene lactones discussed for microcirculatory tone; not antiplatelet-drug or acetylcholinesterase-inhibitor pharmacology."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence for some standardised leaf extracts. Garden leaf tea is not those extracts. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "supportive option for microcirculatory flow — NOT a potential alternative to antiplatelet or anticoagulant drugs; NOT therapeutically equivalent; must not replace indicated pharmaceutical treatment",
    "correspondingPharmaClasses": [
      "anticoagulant"
    ],
    "medicineInteractions": [
      {
        "note": "May increase bleeding tendency with anticoagulants / antiplatelets — overlapping effect, not therapeutic replacement."
      }
    ],
    "monitoring": [
      "bleeding / bruising",
      "neural symptoms if neural subsystem was the linked finding"
    ],
    "contraindications": [
      "Active bleeding / haemorrhagic context"
    ],
    "traditionalUses": "Leaf extracts in contemporary phytotherapy; traditional seed food is a different, potentially toxic article.",
    "activeConstituents": [
      "ginkgo flavone glycosides",
      "terpene lactones"
    ],
    "osirisRelevance": "If a patient reports Ginkgo biloba leaf extracts, interpret bleeding/bruising and neural/microcirculatory symptoms in a flavone/terpene-lactone frame, not antiplatelet-drug pharmacology. Seeds are a separate toxicity pattern. Evidence for extracts is limited clinical. Useful OSIRIS series: bleeding, and neural findings if that subsystem was linked — not as a stroke-drug substitute."
  },
  "hibiscus": {
    "botanicaOnly": false,
    "commonName": "Hibiscus",
    "botanicalName": "Hibiscus sabdariffa",
    "botanicalProfile": "Hibiscus sabdariffa L. (Malvaceae). The medicinal / traditional sour-tea article is typically the dried calyx (Hibisci sabdariffae flos / calyx), not ornamental Hibiscus rosa-sinensis as if interchangeable, and not the leaf as a substitute for calyx.",
    "preparations": [
      {
        "type": "Infusion",
        "plantPart": "calyx / flower",
        "materialState": "dried",
        "solvent": "water",
        "temperature": "boiling or hot water as in traditional sour-tea practice",
        "time": "exact household steeping times for a medicinal (as opposed to beverage) dose are not established as a single OSIRIS recipe",
        "finishing": "strain",
        "form": "herbal tea (karkadé) for oral use",
        "parametersVerified": false,
        "ratio": "Beverage-strength calyx tea is not a standardised antihypertensive extract; gram-range traditional amounts vary by product/monograph where one exists",
        "sourceNote": "Traditional calyx tea; limited clinical Blood Pressure (BP) work is product- and preparation-specific",
        "safetyLimitations": "Not an Angiotensin-Converting Enzyme (ACE) inhibitor or Angiotensin II Receptor Blocker (ARB). Pregnancy caution in some traditional sources. May increase hypotensive effect with antihypertensives. Not ornamental hibiscus.",
        "route": "oral",
        "storage": "Prepare freshly"
      }
    ],
    "galleryKey": "hibiscus",
    "id": "hibiscus",
    "conditions": [
      "sustained hypertension"
    ],
    "mechanisms": [
      "Overlapping effect on vascular tone and ACE-adjacent vascular signalling; not ACE-inhibitor or ARB pharmacology."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence. This is not established clinical evidence equivalent to a licensed medicine, and it is not a basis to replace prescribed treatment.",
    "relationshipLabel": "complementary / adjunct option for vascular-tone / arterial-load overlap — NOT therapeutically equivalent to antihypertensive drugs; must not replace indicated pharmacological treatment",
    "correspondingPharmaClasses": [
      "acei",
      "arb",
      "ccb",
      "thiazide"
    ],
    "medicineInteractions": [
      {
        "note": "May increase hypotensive physiological effect with antihypertensives — overlapping tone, not additive-equivalence."
      }
    ],
    "monitoring": [
      "Blood Pressure (BP) series",
      "light-headedness"
    ],
    "contraindications": [
      "Symptomatic hypotension",
      "Pregnancy unless a clinician explicitly reviews"
    ],
    "traditionalUses": "Traditional sour tea used as circulatory support.",
    "activeConstituents": [
      "anthocyanins",
      "hibiscus acids"
    ],
    "osirisRelevance": "If a patient reports Hibiscus sabdariffa calyx tea, interpret Blood Pressure (BP) in an anthocyanin / hibiscus-acid vascular-tone frame, not Angiotensin-Converting Enzyme (ACE) inhibitor pharmacology. Concurrent antihypertensives may increase hypotensive effect (light-headedness). Evidence is limited clinical. Useful OSIRIS series: BP and symptoms of hypotension."
  },
  "ivy": {
    "botanicaOnly": false,
    "commonName": "Ivy leaf",
    "botanicalName": "Hedera helix",
    "botanicalProfile": "Hedera helix L. (Araliaceae). The medicinal herbal substance in European products is typically the dried leaf (Hederae helicis folium). Berries and ornamental climbing stems are not the authorised leaf article. Fresh sap can irritate skin; that is not the oral extract.",
    "preparations": [
      {
        "type": "Standardised leaf extract",
        "plantPart": "leaf",
        "materialState": "dry extract as labelled (hederacoside C standardisation is common in authorised products)",
        "parametersVerified": true,
        "form": "authorised / registered ivy-leaf extract (syrup, drops, tablets as labelled)",
        "ratio": "Not a household leaf tea; EU herbal monographs / product information specify extracts and paediatric/adult labelled doses — follow the pack",
        "sourceNote": "EMA/HMPC Hedera helix leaf monograph (extracts for cough / bronchial secretion); herbal tea is not treated here as equivalent to those extracts",
        "safetyLimitations": "Hedera allergy. Not a short-acting beta-2 agonist (SABA), anticholinergic or inhaled corticosteroid. Not an antibiotic. Do not use berries. Contact dermatitis from sap is a separate issue.",
        "route": "oral, as labelled"
      }
    ],
    "galleryKey": "ivy",
    "id": "ivy",
    "conditions": [
      "bronchial secretory / mucociliary load"
    ],
    "mechanisms": [
      "Saponin-related secretolytic / mild spasmolytic airway physiology; not beta-agonist, anticholinergic or inhaled-corticosteroid pharmacology."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence for some standardised leaf extracts. Garden climbing ivy is not those extracts. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "complementary / adjunct option for mucociliary / bronchial secretory load — NOT therapeutically equivalent to bronchodilators, inhaled corticosteroids or antimicrobials; must not replace indicated pharmaceutical treatment",
    "correspondingPharmaClasses": [
      "saba"
    ],
    "medicineInteractions": [
      {
        "note": "Does not replace bronchodilators or inhaled corticosteroids. Concurrent use is not an instruction to reduce indicated inhalers."
      }
    ],
    "monitoring": [
      "cough / sputum",
      "oxygen saturation if hypoxaemia was in the Global context"
    ],
    "contraindications": [
      "Known Hedera allergy"
    ],
    "traditionalUses": "Traditional leaf for productive cough / bronchial load.",
    "activeConstituents": [
      "hederacoside C",
      "alpha-hederin"
    ],
    "osirisRelevance": "If a patient reports ivy-leaf (Hedera helix) extracts, interpret cough and bronchial secretion in a saponin (hederacoside C / alpha-hederin) secretolytic frame, not salbutamol or steroid pharmacology. SpO2 still marks gas-exchange; do not read improved cough as resolved hypoxaemia. Evidence for extracts is limited clinical. Useful OSIRIS series: cough/sputum and oxygen saturation if hypoxaemia was in the Global context."
  },
  "oliveleaf": {
    "botanicaOnly": false,
    "commonName": "Olive leaf",
    "botanicalName": "Olea europaea",
    "botanicalProfile": "Olea europaea L. (Oleaceae). Medicinal discussion concerns the leaf (Oleae folium), not olive oil and not the fruit as if they were the same herbal substance. Oleuropein content of leaf preparations is product-specific.",
    "preparations": [
      {
        "type": "Leaf infusion / extract",
        "plantPart": "leaf",
        "materialState": "dried leaf or finished extract as labelled",
        "solvent": "water for traditional infusion; extract solvents are product-specific",
        "parametersVerified": false,
        "form": "herbal tea or labelled extract",
        "ratio": "Exact household medicinal infusion quantities are not established as a single OSIRIS recipe; labelled extracts are not kitchen teas",
        "sourceNote": "Traditional Mediterranean leaf use; limited clinical Blood Pressure (BP) work is extract-specific",
        "safetyLimitations": "Not an Angiotensin-Converting Enzyme (ACE) inhibitor, Angiotensin II Receptor Blocker (ARB) or Calcium Channel Blocker (CCB). May increase hypotensive effect with antihypertensives. Olive oil is not leaf extract.",
        "route": "oral"
      }
    ],
    "galleryKey": "oliveleaf",
    "id": "oliveleaf",
    "conditions": [
      "sustained hypertension",
      "cardiometabolic vascular load"
    ],
    "mechanisms": [
      "Oleuropein-related endothelial / vascular-tone support; not Calcium Channel Blocker (CCB) or ACE-inhibitor pharmacology."
    ],
    "evidenceLevel": "traditional_plus_limited_clinical",
    "evidenceText": "Traditional use together with limited clinical evidence. Traditional use, limited clinical evidence and established clinical evidence are not equivalent. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "complementary / adjunct option for endothelial / vascular-tone support — NOT therapeutically equivalent; must not replace indicated antihypertensive treatment",
    "correspondingPharmaClasses": [
      "acei",
      "arb",
      "ccb"
    ],
    "medicineInteractions": [
      {
        "note": "May increase hypotensive physiological effect with antihypertensives."
      }
    ],
    "monitoring": [
      "Blood Pressure (BP) series"
    ],
    "contraindications": [
      "Symptomatic hypotension"
    ],
    "traditionalUses": "Mediterranean traditional circulatory leaf.",
    "activeConstituents": [
      "oleuropein",
      "hydroxytyrosol"
    ],
    "osirisRelevance": "If a patient reports olive leaf (not olive oil), interpret Blood Pressure (BP) in an oleuropein / endothelial-tone frame, not ACE-inhibitor or Calcium Channel Blocker (CCB) pharmacology. Concurrent antihypertensives may increase hypotensive effect. Evidence is traditional plus limited clinical. Useful OSIRIS series: BP series."
  },
  "psyllium": {
    "botanicaOnly": false,
    "commonName": "Psyllium",
    "botanicalName": "Plantago ovata",
    "botanicalProfile": "Plantago ovata Forssk. (Plantaginaceae). The medicinal article is typically the seed husk (ispaghula husk; Plantaginis ovatae seminis tegumentum), not Plantago lanceolata leaf (ribwort plantain), which is a different herbal substance in BOTANICA.",
    "preparations": [
      {
        "type": "Husk in water",
        "plantPart": "seed husk (testa)",
        "materialState": "dried husk / powder as labelled",
        "solvent": "water (must be taken with a full glass; inadequate water is a choking / obstruction hazard)",
        "parametersVerified": true,
        "form": "bulk-forming oral husk / powder",
        "ratio": "Use labelled ispaghula/psyllium product quantities; do not invent a dry-powder swallow. Separate from other oral medicines (often by a few hours) because viscous fibre can reduce absorption.",
        "sourceNote": "EMA/HMPC / pharmacopoeial ispaghula husk traditional and well-established use as a bulk-forming laxative; glycaemic/lipid effects in trials are product- and dose-specific",
        "safetyLimitations": "Bowel obstruction / impaction. Swallowing impairment. Take with adequate water. Not metformin, insulin, a statin or a stimulant laxative. Not Plantago lanceolata leaf tea.",
        "route": "oral",
        "storage": "Keep dry as labelled; mix immediately before swallowing"
      }
    ],
    "galleryKey": "psyllium",
    "id": "psyllium",
    "conditions": [
      "luminal bulk / constipation load",
      "glycaemic and bile-acid excursion"
    ],
    "mechanisms": [
      "Viscous fibre binding bile acids and slowing carbohydrate absorption; not metformin, statin or stimulant-laxative pharmacology."
    ],
    "evidenceLevel": "limited_clinical",
    "evidenceText": "Limited clinical evidence for husk products on stool bulk and, in some trials, modest Low-Density Lipoprotein (LDL) or post-prandial glucose effects. This is not a basis to replace prescribed treatment.",
    "relationshipLabel": "complementary / adjunct option for luminal bulk and modest glycaemic / bile-acid load — NOT therapeutically equivalent to metformin, insulin, statins or stimulant laxatives; must not replace indicated pharmaceutical treatment",
    "correspondingPharmaClasses": [
      "metformin",
      "statin"
    ],
    "medicineInteractions": [
      {
        "note": "May modestly blunt glycaemic excursion alongside antihyperglycaemics — hypoglycaemia remains a medicine issue; not metformin replacement."
      },
      {
        "note": "Bile-acid binding is not statin equivalence. Separate from other oral medicines by a few hours if absorption is a concern."
      }
    ],
    "monitoring": [
      "stool pattern",
      "Glucose / Hemoglobin A1c (HbA1c) if glycaemic load was the linked finding",
      "LDL if lipid load was linked"
    ],
    "contraindications": [
      "Swallowing impairment without water",
      "Bowel obstruction",
      "Faecal impaction without medical review"
    ],
    "traditionalUses": "Traditional bulk-forming seed husk.",
    "activeConstituents": [
      "arabinoxylan viscous fibre"
    ],
    "osirisRelevance": "If a patient reports psyllium / ispaghula husk, interpret stool pattern, glucose and Low-Density Lipoprotein (LDL) in a viscous-fibre frame, not metformin or statin pharmacology. Timing versus other oral medicines matters when interpreting drug levels or apparent non-response. Inadequate water is an obstruction risk. This is not Plantago lanceolata (ribwort) leaf. Evidence is limited clinical for husk products. Useful OSIRIS series: stool pattern, glucose / HbA1c, LDL."
  },
  "birch-bark": {
    "botanicaOnly": true,
    "commonName": "Birch Bark",
    "botanicalName": "Betula spp.",
    "botanicalProfile": "Betula pendula Roth / Betula pubescens Ehrh. and related birches (Betulaceae). The article here is the bark, especially the white outer bark (phellem) that is rich in the triterpene betulin. This is not Fomitopsis betulina (birch polypore), not Inonotus obliquus (chaga), and not isolated betulinic acid. Inner bark, outer bark, birch leaf and birch sap are different materials.",
    "conditions": [
      "traditional bark material; betulin-containing outer bark is a starting tissue for characterised triterpenes — not a self-care anticancer tea"
    ],
    "mechanisms": [
      "Outer birch bark contains betulin with smaller amounts of related lupane triterpenes. Isolated betulinic acid is a further oxidative/processing derivative studied in laboratories. Crude bark tea is not equivalent to those isolates or to licensed cytotoxics."
    ],
    "evidenceLevel": "traditional",
    "evidenceText": "Traditional European use of birch (often leaf more than bark in authorised herbal teas). Outer-bark chemistry is well described (betulin). Laboratory work on betulin and betulinic acid is not established clinical evidence that kitchen bark decoction treats cancer or infection. Traditional use, phytochemistry and isolate pharmacology are not equivalent.",
    "relationshipLabel": "Educational botanical context only — not used by OSIRIS Treatment / Prevention selection. Not a cytotoxic, anti-inflammatory-drug or diuretic analogue. Bark preparations are not direct replacements for prescribed medicines.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "Insufficient clinical interaction data for crude birch-bark tea. Do not use as cover for infection or malignancy. Birch pollen / salicylate-related sensitivity can overlap in atopic patients. Distilates such as birch tar are industrial/phenolic products, not a household medicine."
      }
    ],
    "monitoring": [
      "Skin irritation from tars or crude poultices",
      "Allergy in birch-sensitised people"
    ],
    "contraindications": [
      "Using bark tea in place of indicated cancer or infection treatment",
      "Unsupervised solvent extraction intended to isolate triterpenes",
      "Swallowing industrial birch tar"
    ],
    "osirisRelevance": "If a patient reports Betula bark, distinguish outer-bark betulin chemistry from Fomitopsis betulina or chaga, and from laboratory betulinic acid. Traditional bark use and leaf teas are not equivalent. Crude decoction is not cytotoxic pharmacology. Allergy and tar/phenolic irritation are the practical risks. Correlate the actual article used (leaf vs bark vs tar vs isolate).",
    "preparations": [
      {
        "type": "Traditional aqueous decoction (bark)",
        "plantPart": "bark (inner bark in some folk teas; white outer bark is the betulin-rich layer)",
        "materialState": "dried, cut bark",
        "solvent": "water",
        "temperature": "traditional hard-tissue decoction in simmering water; no EMA/HMPC bark-tea posology is applied here",
        "time": "Exact unofficial simmering minutes are not displayed.",
        "ratio": "No verified medicinal bark-to-water ratio is displayed.",
        "finishing": "strain",
        "form": "aqueous decoction",
        "parametersVerified": false,
        "sourceNote": "Traditional Betula bark use; authorised EU herbal teas more often concern birch leaf, which is a different herbal substance",
        "safetyLimitations": "Leaf tea, inner-bark decoction, outer-bark material and birch tar are not interchangeable. This is not a method for concentrating betulin or making betulinic acid.",
        "route": "oral as traditional tea / labelled product only",
        "storage": "Prepare freshly unless a labelled product states otherwise"
      },
      {
        "type": "Manufactured extract / characterised isolate (not household)",
        "plantPart": "outer bark as industrial starting material",
        "materialState": "processed extract or isolated triterpene as labelled",
        "parametersVerified": false,
        "form": "finished extract only",
        "sourceNote": "Betulin isolation is an industrial process from outer birch bark",
        "safetyLimitations": "Do not improvise organic-solvent extraction, acid conversion to betulinic acid, or birch-tar distillation at home. Follow labelled products only.",
        "route": "oral or as labelled — not a kitchen process"
      }
    ],
    "traditionalUses": "Traditional northern European bark and leaf birch materials; outer bark is the betulin-rich tissue.",
    "activeConstituents": [
      "betulin (outer bark)",
      "related lupane triterpenes in smaller amounts",
      "suberin / bark phenolics"
    ],
    "notAReplacement": true,
    "galleryKey": "birch-bark",
    "id": "birch-bark"
  },
  "betulinic-acid": {
    "botanicaOnly": true,
    "commonName": "Betulinic Acid",
    "botanicalName": "betulinic acid (lupane triterpenoid)",
    "botanicalProfile": "Betulinic acid is an isolated lupane-type triterpenoid (3β-hydroxy-lup-20(29)-en-28-oic acid), not a plant. It occurs in small amounts in some barks (including birch outer bark) and is typically obtained by industrial processing of betulin-rich Betula outer bark. This record is not Betula bark, not birch polypore, and not chaga, even though those materials may contain related triterpenes.",
    "conditions": [
      "laboratory / pharmaceutical research compound — not a self-care botanical tea"
    ],
    "mechanisms": [
      "In experimental systems betulinic acid has been studied for mitochondrial apoptosis-related and other cellular effects. That preclinical pharmacology is not a licensed cytotoxic regimen and is not reproduced by drinking birch-bark tea."
    ],
    "evidenceLevel": "insufficient",
    "evidenceText": "Phytochemical identity is established. Preclinical literature is substantial. There is insufficient evidence to treat household material or unlicensed powders as an established cancer or antiviral medicine. Isolate pharmacology, bark tea and fungal birch associates are not equivalent.",
    "relationshipLabel": "Educational phytochemical context only — not used by OSIRIS Treatment / Prevention selection. Not a chemotherapy analogue. Isolated compounds are not direct replacements for prescribed medicines.",
    "correspondingPharmaClasses": [],
    "medicineInteractions": [
      {
        "note": "No household interaction table is provided. Research-grade or unlicensed isolates can have uncharacterised clinical interactions. Do not combine as self-experimentation with cytotoxics, anticoagulants or other prescription medicines."
      }
    ],
    "monitoring": [
      "This isolate is not for self-monitoring as a herbal therapy"
    ],
    "contraindications": [
      "Any unsupervised medicinal use of unlicensed isolate",
      "Using a powder labelled betulinic acid in place of indicated cancer treatment",
      "Household chemical conversion of birch bark"
    ],
    "osirisRelevance": "If a patient reports betulinic acid, interpret it as an isolated triterpenoid research compound, not as Betula tea and not as Fomitopsis or Inonotus. Preclinical mitochondrial/apoptosis literature is not licensed oncology. Correlate the actual product (bark, fungus, labelled isolate) rather than assuming they are the same exposure.",
    "preparations": [
      {
        "type": "Not a household botanical preparation",
        "plantPart": "not applicable — this is an isolated compound, historically sourced from Betula outer bark industrially",
        "materialState": "Not applicable for unsupervised preparation",
        "parametersVerified": false,
        "form": "No kitchen tea, tincture, maceration or extraction method is described",
        "sourceNote": "Betulinic acid used in research is a characterised isolate, not a folk decoction",
        "safetyLimitations": "Do not provide or follow home recipes for extracting betulin from bark or converting it to betulinic acid. Unlicensed isolate powders are not standardised medicines. Licensed chemotherapy, where indicated, is not replaced by this compound.",
        "route": "Do not self-prepare"
      }
    ],
    "traditionalUses": "Not a traditional herbal tea article; a characterised triterpenoid associated with birch outer-bark chemistry and laboratory research.",
    "activeConstituents": [
      "betulinic acid (the isolate itself)",
      "industrially related to betulin from Betula outer bark"
    ],
    "notAReplacement": true,
    "galleryKey": "betulinic-acid",
    "id": "betulinic-acid"
  }
}
  ;
})(typeof window !== "undefined" ? window : this);