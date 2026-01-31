# GUIDE DE MERGE - QUEL CODE GARDER

## EN CAS DE CONFLIT SUR `src/aggregator.js`

### **GARDER: "INCOMING" (la nouvelle version)**

**POURQUOI?**
- ✅ 12 sources
- ✅ UTM corrects: `utm_medium=reader` et `utm_campaign=article` (TES utm)
- ✅ Catégories: `ai` et `cybersecurity` au lieu de `ai`, `tech`, `research`


---

## CHOIX DANS L'INTERFACE GITHUB

Quand tu vois:
```
<<<<<<< HEAD (Current Change)
[ancien code]
=======
[nouveau code]
>>>>>>> incoming change
```

**ACTION:** Clique sur **"Accept Incoming Change"** ou **"Accept Incoming"**

---

## CE QUE ÇA VA CHANGER

### Sources:
- Medium AI
- Towards Data Science
- AI News
- TechCrunch AI ← NOUVEAU
- VentureBeat AI ← NOUVEAU
- Google AI Blog ← NOUVEAU
- Dark Reading (CVE) ← NOUVEAU
- SecurityWeek (CVE) ← NOUVEAU
- Threatpost (CVE) ← NOUVEAU

### UTM qui changent:
- `?utm_source=ai-pulse&utm_medium=reader&utm_campaign=article&utm_content=ai`

### Freedium ajouté:
- Tous les liens Medium passent par `https://freedium.cloud/`

---

## APRÈS LE MERGE

1. Le workflow se déclenche automatiquement
2. Il va fetcher les 12 sources RSS
3. Il génère le README avec les articles
4. Commit automatique sur main

---

## EN RÉSUMÉ

**Si tu vois un conflit:**
- Choisis **"Accept Incoming"**
- OU choisis **"Accept Incoming Change"**
- NE CHOISIS PAS "Current" ou "Both"

**Si GitHub te demande de résoudre les conflits dans l'éditeur web:**
- Supprime les lignes avec `<<<<<<<`, `=======`, `>>>>>>>`
- Garde SEULEMENT le code entre `=======` et `>>>>>>>`
