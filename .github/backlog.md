# BACKLOG AI-PULSE

## 🚀 PRIORITÉS ACTUELLES (2026-02-16)

### A. Continuité des articles (EN COURS)
- **Objectif** : Toujours afficher des articles même en cas d'erreur partielle.
- **Fait** :
  - Workflow durci: fallback `README.BACKUP.md` si agrégation échoue ou README généré invalide.
  - Agrégateur durci: une catégorie en erreur ne bloque plus les autres catégories.
  - RSS/email en best-effort: erreurs non bloquantes pour la publication.
- **Reste à faire** :
  - Ajouter un test CI dédié qui simule une source cassée et vérifie que des articles restent publiés.
  - Vérifier sur un run GitHub Actions complet (logs + README publié).
  - Ajouter un contrôle d'intégrité des sections bilingues côté templates et parser de soumission.
  - Ajouter un test navigateur local (`file://`) pour valider le fallback iframe de `readme-viewer`.
  - Ajouter un test UI dédié pour s'assurer que la barre titre article reste masquée dans `reader.html`.
  - Ajouter un test UI anti-boucle iframe (détection de reloads successifs et fallback erreur).
  - Ajouter un test UI de navigation retour article -> liste pour éviter les régressions 404.
  - Ajouter un test de liens directs `data/articles/*` (sans encapsulation iframe).
  - Validation visuelle finale utilisateur sur footer template dans `reader.html`.

- **Correctifs appliqués (session en cours)** :
  - UX mobile: quick-tags limités + scroll horizontal pour garder un header compact sur mobile.
  - Mots-clés: passage à un mot-clé unique par article via mapping JSON (`data/keyword-mapping.json`).
  - Catégories dédiées: ajout `openclaw` et `raspberrypi` avec filtrage strict par mots-clés.
  - Sources éditoriales: ajout des catégories `france` et `international` (journaux fiables).
  - UX mobile: quick-tags limités + scroll horizontal pour garder un header compact sur mobile.
  - Mots-clés: passage à un mot-clé unique par article via mapping JSON (`data/keyword-mapping.json`).
  - Catégories dédiées: ajout `openclaw` et `raspberrypi` avec filtrage strict par mots-clés.
  - Reader: mapping `URL source -> article local` via `data/article-map.json` pour éviter l’encapsulation de site externe.
  - Articles: coupe de fin non éditoriale (pub/slogans/comments/avis/related) dans le pipeline et nettoyage rétroactif.
  - Articles: flèches locales `▲/▼` ajoutées dans chaque HTML généré + support `postMessage` `AI_PULSE_SCROLL`.
  - Reader/Articles: mode article-only appliqué (masquage footer site en vue article + suppression footer injecté dans les pages d’articles).
  - Sources locales: ajout catégorie `local` (Grenoble/Isère + météo locale).
  - Journaux: ajout catégories `france` et `international` pour renforcer la couverture généraliste fiable.
  - Apple/Mac: renforcement des flux pour éviter les catégories vides (Apple Newsroom, Macworld, The Verge Apple + URLs FR corrigées).

### B. Flux dépendances automatique (EN COURS)
- **Objectif** : aligner le pipeline auto sur `dependencies -> main` sans conflits.
- **Fait** :
  - PR legacy `security` fermée.
  - Nouvelle PR `dependencies -> main` ouverte.
  - Workflow Dependabot migré pour `target-branch: dependencies`.
- **Reste à faire** :
  - Confirmer le merge auto bout-en-bout en production (checks + auto-merge).
  - Nettoyer les checks historiques legacy encore visibles.

### C. Soumissions bilingues (EN COURS)
- **Objectif** : Garantir un texte FR/EN homogène sur les formulaires de soumission.
- **Fait** :
  - Templates `subscribe` et `new-source` harmonisés FR/EN.
  - Parser `manage-subscriber` rendu tolérant aux variantes de libellés FR/EN.
- **Reste à faire** :
  - Ajouter un test automatique qui valide la correspondance labels template ↔ mapping workflow.

## 🔴 PROBLÈMES CRITIQUES À CORRIGER

### 1. Double logo (EN COURS)
- **Problème** : Deux logos "AI-PULSE" apparaissent sur la page (un dans index.html, un dans reader.html iframe)
- **Cause** : reader.html a encore du CSS pour .header même si le HTML a été supprimé
- **Solution** : Supprimer TOUT le CSS .header, .logo, .nav-tabs de reader.html
- **Status** : CSS supprimé, attente déploiement GitHub Pages (2-10 min)

### 2. Fausses statistiques
- **Problème** : Stats affichent des valeurs fake (1247, 42, 5893, 28) au lieu des vraies données
- **Cause** : Valeurs hardcodées dans stats.html ligne 180-183
- **Solution** : Remplacé par 1 pour toutes les valeurs (visiteur actuel)
- **Status** : Modifié, attente déploiement GitHub Pages
- **TODO** : Connecter Google Analytics API pour vraies stats temps réel

### 3. Factorisation header/navigation
- **Problème** : Header dupliqué dans privacy.html, reader.html, stats.html
- **Solution** : TOUT doit être dans index.html uniquement, les autres pages chargées en iframe
- **Status** : ✅ HTML supprimé de privacy.html et reader.html
- **Status** : ❌ CSS encore présent dans reader.html (supprimé mais déploiement en attente)

## 🟡 AMÉLIORATIONS À FAIRE

### 4. Logo image réel
- **Besoin** : Remplacer le texte "AI-PULSE" par une vraie image SVG/PNG
- **Fichier** : logo.svg existe mais pas utilisé dans index.html
- **Action** : Changer `<h1>AI-PULSE</h1>` en `<img src="./logo.svg" alt="AI-PULSE" />`

### 5. Statistiques Google Analytics réelles
- **Besoin** : Connecter l'API Google Analytics pour afficher les vraies données
- **ID** : G-LWN1RSPQMJ
- **Action** : Utiliser Google Analytics Reporting API v4 ou Data API
- **Données à récupérer** :
  - Total visitors (ga:users)
  - Active sessions (ga:activeUsers)
  - Page views (ga:pageviews)
  - Countries (ga:country)

### 6. Privacy policy page
- **Status** : Page existe mais header supprimé
- **Action** : Vérifier que privacy.html charge correctement dans iframe de index.html

### 7. Stats page
- **Status** : Page existe avec fausses données
- **Action** : Implémenter vraies stats depuis Google Analytics

## 📋 CHECKLIST DÉPLOIEMENT

- [x] Supprimer HTML header de privacy.html
- [x] Supprimer HTML header de reader.html
- [x] Supprimer HTML nav-tabs de reader.html
- [x] Supprimer CSS .header, .logo, .nav-tabs de reader.html
- [x] Remplacer fausses stats par valeur 1 (visiteur actuel)
- [ ] Vérifier déploiement GitHub Pages (attente 2-10 min)
- [ ] Implémenter Google Analytics API pour vraies stats
- [ ] Ajouter vraie image logo dans index.html
- [ ] Tester navigation Privacy/Stats depuis index.html
- [ ] Vérifier responsive design mobile

## 🐛 BUGS CONNUS

1. **Cache navigateur** : Utilisateurs voient encore anciennes versions
   - Solution : Attendre déploiement + forcer refresh (Cmd+Shift+R)

2. **GitHub Pages délai** : Changements prennent 2-10 minutes à apparaître
   - Solution : Patience!

## 💡 IDÉES FUTURES

- Ajouter filtre par catégorie (AI, Cybersecurity, etc.)
- Implémenter système de favoris
- Ajouter mode sombre/clair
- Créer API backend pour stats custom
- Ajouter notifications push pour nouveaux articles


## ✅ TÂCHES COMPLÉTÉES (15 Jan 2026)

### Thème et Design
- ✅ Appliqué le thème dark du site partout (gradient #0a0e27 → #1a1e47, accents cyan #00d9ff)
- ✅ Harmonisé les couleurs de index.html et home.html
- ✅ Créé readme-viewer.html avec le même thème que le reste du site

### Liens et Navigation
- ✅ Modifié src/aggregator.js pour wrapper les liens articles avec reader.html?url=...
- ✅ Ajouté paramètres UTM automatiques: utm_source=ai-pulse&utm_medium=aggregator&utm_campaign=feed
- ✅ Supprimé target="_blank" pour compatibilité iframe
- ✅ Ajouté fonction UTM dans readme-viewer.html pour liens externes

### Corrections Techniques
- ✅ Corrigé erreur YAML workflow (indentation ligne push:)
- ✅ Workflow update-ai-pulse.yml maintenant fonctionnel
- ✅ README chargé via GitHub API au lieu d'iframe (contournement X-Frame-Options)

### Fichiers Modifiés
1. `src/aggregator.js` - Middleware UTM + iframe handler
2. `readme-viewer.html` - Thème + conversion liens en iframe
3. `index.html` - Gradient background uniforme
4. `.github/workflows/update-ai-pulse.yml` - Fix indentation push trigger

### À Tester
- ⏳ Attendre prochain run workflow (toutes les 3h) pour voir les nouveaux liens avec reader.html
- ⏳ Vérifier que les articles s'ouvrent correctement dans l'iframe avec UTM

## 🔧 Demandes Utilisateur Restantes (session)

- [ ] Corriger définitivement la régression Investing signalée (analyst-ratings) + test dédié.
- [ ] Zéro 404 article visible: fallback local obligatoire si source échoue.
- [ ] Rendu article unifié pour toutes catégories (même template, même UX de navigation).
- [ ] Retour article -> liste fonctionnel partout (haut et bas de page).
- [ ] Footer template global présent et stylé correctement dans toutes les pages article.
- [ ] Flèches article (haut/bas) fiabilisées et testées sur l'ensemble des articles générés.
- [ ] Validation production de l'auto-détection langue IP/navigateur + switch manuel.
- [ ] Validation production des catégories `openclaw` et `raspberrypi` (quantité/qualité/tri).
- [ ] Durcissement des sources finance/crypto pour réduire contenu faible qualité.
- [ ] Vérifier cohérence des liens doc Supabase dans README/workflows avec chemin réel.

## Update 2026-02-16 18:24 UTC

### Done
- Added dedicated `Local News / Informations locales` category with FR/EN-compatible sources.
- Added dedicated `Weather / Météo` category with valid FR/EN feeds.
- Added trusted French Open Source feeds in `opensource` category.
- Added localized keyword mapping for `openclaw`, `local_news`, `weather`, `opensource`.
- Ran feed-health check on all configured feeds: **135 total / 115 OK / 20 BAD**.

### Remaining
- Replace remaining 20 failing feeds (iot/windows/mac/finance/products) and re-run feed-health check.

## Update 2026-03-07

### Done
- Removed 4 duplicate feed entries in `opensource` category (LibHunt Selfhosted, Developpez.com, LinuxFr, Programmez were duplicated)
- Total feeds: 155 → 151 (141 unique URLs)
