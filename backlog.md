# BACKLOG AI-PULSE

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
