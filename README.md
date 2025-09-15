# 🛡️ AI Trustmark Rubric (v0.1)

**Version:** 0.1  
**Status:** Hardened baseline (open for review / contributions)  
**License:** Apache 2.0 (recommended for open-source use)  

---

## 🎯 Purpose

The **AI Trustmark Rubric** is an open, vendor-agnostic framework for assessing **AI service providers** (consumer or enterprise LLMs).  

It is designed as an **independent lens** for enterprises:  
- To evaluate providers consistently  
- To highlight security, compliance, and people impact risks  
- To complement (not replace) internal audits or regulatory reviews  

---

## ⚖️ Pillars & Weightings

The rubric covers **3 pillars**, each weighted to reflect importance:

1. **Security** — 30%  
   - MFA enforced  
   - RBAC / least privilege  
   - Delegated privilege controls  
   - Identity federation / SSO  
   - OWASP AI threats tested  
   - Multi-vendor AI inventory  
   - Continuous monitoring & vulnerability management  

2. **Compliance** — 25%  
   - Data residency / jurisdiction compliance  
   - No vendor training on enterprise data  
   - Prompt & response logging policy  
   - ISO/IEC 42001 (or equivalent) mapping  
   - Sector-specific compliance controls  

3. **People Impact & Sustainability** — 45%  
   - Accuracy & reliability guardrails (HITL, evaluations)  
   - Fairness & bias mitigation  
   - Transparency & explainability (model/system cards)  
   - Wellbeing & societal impact (misinfo, displacement)  
   - Environmental sustainability disclosure  

---

## 📊 Scoring

- Each **criterion** scored 0–5  
- Pillar totals normalized  
- Weighted into a **composite score (0–100)**  
- Grades assigned as follows:  
  - **A** — 86–100 (Leading practice)  
  - **B** — 71–85 (Strong assurance)  
  - **C** — 50–70 (Moderate assurance)  
  - **D** — 41–49 (Weak assurance)  
  - **E** — 0–40 (High risk)  

---

## 📚 References

The rubric is anchored to existing standards and frameworks, including:  
- **OWASP AI Security & Privacy Guide**  
- **ISO/IEC 42001:2023** (AI Management Systems)  
- **NIST AI RMF 1.0** + Generative AI Profile  
- **IEEE 7001-2021** (Transparency), **IEEE 7003-2024** (Bias)  
- **EU AI Act (2024/1689)**  
- **Green Software Foundation SCI**  

---

## 🤝 Contributing

This rubric is open for review, critique, and improvement.  
- New rubric versions should be stored as `rubric_vX_Y.json`  
- All changes must be documented in `CHANGELOG.md`  
- External input from security, compliance, and ethics experts is especially welcome  

---

© 2025. Released under Apache 2.0.
