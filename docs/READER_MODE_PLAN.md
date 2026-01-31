# Plan d'implémentation : Mode Lecteur (Reader Mode)

## Objectif
Permettre la lecture d'articles en mode texte seul, sans publicités ni images.

## Architecture proposée

### 1. Nouveau module : `src/reader-mode.js`
**Responsabilités :**
- Extraire le contenu principal d'une URL
- Nettoyer le HTML (supprimer pubs, scripts, styles)
- Retourner uniquement le texte et la structure de base

**Fonctions à implémenter :**
```javascript
async function fetchArticleContent(url)
function cleanHTML(html)
function extractMainContent(dom)
```

### 2. Tests unitaires : `tests/reader-mode.test.js`
**Tests à créer :**
- ✅ Extraction de contenu depuis une URL valide
- ✅ Nettoyage HTML (suppression scripts/styles/pubs)
- ✅ Gestion des erreurs (404, timeout, etc.)
- ✅ Validation du format de sortie

### 3. Endpoint API : `src/api/reader.js`
**Route :** `/api/reader?url=<article_url>`
**Réponse :**
```json
{
  "success": true,
  "title": "Article Title",
  "content": "Clean text content...",
  "author": "Author name",
  "publishDate": "2026-01-31"
}
```

### 4. Interface utilisateur : `reader-view.html`
**Fonctionnalités :**
- Affichage minimaliste du contenu
- Contrôles de lecture (taille police, thème)
- Lien vers l'article original

## Étapes d'implémentation

### Phase 1 : Module de base (SANS modifier le code existant)
1. Créer `src/reader-mode.js`
2. Créer `tests/reader-mode.test.js`
3. Valider que tous les tests passent
4. Commit : "feat: add reader-mode module with tests"

### Phase 2 : Intégration
1. Créer `src/api/reader.js`
2. Créer `tests/api-reader.test.js`
3. Valider que tous les tests passent
4. Commit : "feat: add reader API endpoint"

### Phase 3 : Interface
1. Créer `reader-view.html`
2. Tester manuellement avec plusieurs articles
3. Valider que l'affichage fonctionne
4. Commit : "feat: add reader view interface"

### Phase 4 : Intégration finale
1. Modifier les liens dans `README.md` pour pointer vers le reader
2. Tester l'ensemble du flux
3. Commit : "feat: integrate reader mode into main app"

## Dépendances nécessaires
```json
{
  "@mozilla/readability": "^0.5.0",
  "jsdom": "^24.0.0",
  "sanitize-html": "^2.12.1"
}
```

## Tests de validation finale

Avant chaque commit :
- [ ] Tous les tests unitaires passent
- [ ] L'app existante fonctionne toujours
- [ ] Le README s'affiche correctement
- [ ] Les liens ne sont pas cassés
- [ ] Aucune régression détectée

## Rollback plan

Si quelque chose casse :
1. `git reset --hard <last-working-commit>`
2. `git push origin main --force`
3. Analyser ce qui n'a pas marché
4. Corriger dans une branche séparée
5. Re-tester avant de merger

---

**Note importante :** Ne JAMAIS modifier le code de production directement.
Toujours créer un nouveau module, le tester, puis l'intégrer.
