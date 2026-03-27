# OSIRIS Diagnostic System - PRD

## Project Overview
**Name:** Wellbeing Design - OSIRIS Health Diagnostics  
**URL:** https://www.wellbeingdesign.uk/  
**Type:** Static HTML/CSS/JS Health Assessment Tool

## Original Problem Statement
User requested to finish their existing Wellbeing Design website (wellbeingdesign.uk). The site had comprehensive diagnostic questionnaires for various body systems, but the "Submit for Diagnosis" functionality was missing across all sections.

## What Was Implemented (March 27, 2026)

### 1. Core Diagnostic System (`diagnostics.js`)
Created a comprehensive diagnostic analysis system with ~2100 lines of JavaScript covering:

- **runDiagnostics()** - Main entry point that detects active section
- **analyzeUpperRespiratory()** - Temperature, infections, allergies, sore throat, ear pain analysis
- **analyzeLowerRespiratory()** - Cough, wheezing, mucus, oxygen saturation analysis
- **analyzeCardiovascular()** - Blood pressure, heart rate, chest pain, troponin, palpitations
- **analyzeRenal()** - eGFR calculation, electrolytes, acid-base, urinalysis, proteinuria
- **analyzeEndocrine()** - Thyroid (TSH, T4, T3), adrenal, hormonal dynamics
- **analyzeNeural()** - Headaches, dizziness, seizures, memory, vision, balance
- **analyzeGastrointestinal()** - Abdominal pain, nausea, GERD, blood in stool
- **analyzePsychological()** - Mood, sleep, stress, cognitive function, social impact
- **analyzePsychiatric()** - Trauma, perception, impulse control, self-harm assessment
- **analyzeMusculoskeletal()** - Joint pain, muscle weakness, stiffness, bone pain

### 2. HTML Updates
- Added diagnosis result containers for each section
- Fixed script loading order (diagnostics.js after script.js)
- Removed React main.js reference (not needed for static site)

### 3. CSS Enhancements  
- Styled diagnosis result boxes with dark theme
- Added severity-based styling (low/medium/high)
- Added pulse animation for high-severity results

### 4. Missing Functions Added
- `saveUserProfile()` - Saves to localStorage
- `loadUserProfile()` - Loads from localStorage  
- Global `userProfile` variable initialization

## Core Features

### Diagnostic Sections Available
1. **Upper Respiratory** - Fever, infections, allergies, sore throat, ear pain, hearing
2. **Lower Respiratory** - Cough, wheezing, oxygen saturation, breathing difficulties
3. **Cardiovascular** - Blood pressure, heart rate, chest pain, palpitations, ECG findings
4. **Renal** - eGFR calculation, electrolytes, urinalysis, proteinuria
5. **Endocrine** - Thyroid function, cortisol, hormones, temperature sensitivity
6. **Neural** - Headaches, tremors, seizures, memory, vision, balance
7. **Gastrointestinal** - Pain, nausea, bowel changes, blood in stool
8. **Psychological** - Mood, sleep, stress, cognition, social function
9. **Psychiatric** - Trauma, perceptions, impulse control, crisis assessment
10. **Musculoskeletal** - Joint pain, stiffness, weakness, bone pain

### Diagnosis Output Features
- Formatted report with findings and recommendations
- Severity levels (LOW, MEDIUM, HIGH)
- Color-coded results
- Urgent care warnings when appropriate
- Medical disclaimer

## Architecture

```
/app/frontend/public/
├── index.html        # Main HTML (7500+ lines)
├── styles.css        # Styling (2100+ lines)  
├── script.js         # Core functionality (22000+ lines)
├── diagnostics.js    # NEW: Diagnostic analysis (2100 lines)
└── [images/assets]   # Static resources
```

## Future Enhancements / Backlog

### P0 - Critical
- None currently

### P1 - High Priority  
- Add user authentication for saving diagnostic history
- Export diagnosis reports as PDF
- Add print-friendly styling

### P2 - Medium Priority
- Backend integration for storing diagnostic results
- Progress tracking across multiple assessments
- Add more specific condition screening (diabetes, hypertension, etc.)
- Email reports to healthcare providers

### P3 - Nice to Have
- AI-powered follow-up questions
- Integration with wearable health data
- Multi-language support
- Mobile app version

## Technical Notes
- Pure static HTML/CSS/JS - no backend required for current functionality
- All data stored in localStorage
- No external API dependencies
- Works offline after initial load
