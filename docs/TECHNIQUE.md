# Documentation Technique - AI-Pulse

## 📋 Vue d'ensemble

AI-Pulse est un **agrégateur de flux RSS** spécialisé dans l'actualité **IA, Cybersécurité et IoT**. Le site collecte automatiquement des articles depuis des sources RSS, les nettoie, les enrichit et les publie sur une interface web moderne.

---

## 🏗️ Architecture du Projet

### Structure des fichiers

```
AI-Pulse/
├── index.html              # Page d'accueil
├── app.html                # Lecteur d'articles (reader)
├── about.html              # Page À propos
├── stats.html              # Statistiques
├── privacy.html            # Politique de confidentialité
├── 404.html                # Page d'erreur
├── manifest.json           # Configuration PWA (icônes, couleurs)
├── css/
│   └── style.css           # Styles globaux (cyberpunk theme)
├── js/
│   ├── ui.js               # Interactions UI (scroll, animations)
│   └── tracker.js          # Tracking des visites
├── assets/
│   ├── banner.png          # Bannière principale
│   ├── icon.png            # Icône de l'application
│   └── logo_final.png      # Logo du site
├── src/
│   └── aggregator.js       # Script Node.js de collecte RSS
├── data/
│   └── articles.json       # Articles collectés (généré automatiquement)
└── .github/workflows/
    ├── update-ai-pulse.yml # Workflow de mise à jour automatique
    └── deploy-pages.yml    # Déploiement GitHub Pages
```

---

## 🔧 Fonctionnement Technique

### 1. Collecte des Articles (Backend)

**Fichier:** `src/aggregator.js`

#### Sources RSS configurées

Les sources sont organisées par catégorie dans `FEED_CATEGORIES`:

```javascript
const FEED_CATEGORIES = {
  iot: [
    { name: 'Raspberry Pi', url: 'https://www.raspberrypi.com/news/feed/', tags: ['IoT', 'RaspberryPi'] },
    { name: 'Arduino Blog', url: 'https://blog.arduino.cc/feed/', tags: ['IoT', 'Arduino'] },
    // ... autres sources IoT
  ],
  ai: [
    { name: 'Medium AI', url: 'https://medium.com/tag/artificial-intelligence/feed', tags: ['AI', 'ML'] },
    { name: 'Google AI Blog', url: 'https://ai.googleblog.com/feeds/posts/default', tags: ['AI', 'Research'] },
    // ... autres sources IA
  ],
  cybersecurity: [
    { name: 'The Hacker News', url: 'https://feeds.feedburner.com/TheHackersNews', tags: ['Security'] },
    { name: 'Bleeping Computer', url: 'https://www.bleepingcomputer.com/feed/', tags: ['Security', 'Malware'] },
    // ... autres sources Cybersécurité
  ]
};
```

#### Processus de collecte

1. **Parsing RSS** : Utilise `rss-parser` pour lire chaque flux
2. **Nettoyage HTML** : `sanitize-html` supprime les scripts et balises dangereuses
3. **Extraction de contenu** : `@mozilla/readability` + `jsdom` pour extraire le texte principal
4. **Déduplication** : Hash MD5 du titre pour éviter les doublons
5. **Enrichissement** : Ajout de tags, catégories, timestamps
6. **Sauvegarde** : Écriture dans `data/articles.json`

#### Commandes

```bash
npm install          # Installer les dépendances
npm start            # Lancer la collecte manuellement
```

---

### 2. Mise à Jour Automatique (GitHub Actions)

**Fichier:** `.github/workflows/update-ai-pulse.yml`

#### Déclencheurs

- **Webhook** : Déclenché manuellement ou par un service externe
- **Cron** : Toutes les 6 heures (`0 */6 * * *`)

#### Étapes du workflow

1. Checkout du code
2. Installation de Node.js
3. Installation des dépendances npm
4. Exécution de `src/aggregator.js`
5. Commit des nouveaux articles dans `data/articles.json`
6. Push automatique vers `main`

---

### 3. Interface Utilisateur (Frontend)

#### Page d'accueil (`index.html`)

- Bannière principale
- Présentation des fonctionnalités
- Bouton d'accès au lecteur
- Lien vers l'application GitHub

#### Lecteur d'articles (`app.html`)

**Chargement dynamique :**

```javascript
fetch('./data/articles.json')
  .then(response => response.json())
  .then(articles => {
    // Tri par date (plus récent en premier)
    articles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    
    // Affichage des cartes d'articles
    articles.forEach(article => {
      const card = createArticleCard(article);
      container.appendChild(card);
    });
  });
```

**Fonctionnalités :**
- Filtrage par catégorie (AI, IoT, Cybersecurity)
- Recherche en temps réel
- Affichage des tags
- Liens vers les sources originales

#### Design (CSS)

**Thème cyberpunk :**
- Couleurs principales : Cyan (`#00d9ff`) et Violet (`#825ee4`)
- Fond sombre : `#0a0e27`
- Effets de glow et gradients
- Animations au survol
- Mode responsive (mobile-friendly)

---

## 🚀 Déploiement

### GitHub Pages

**Fichier:** `.github/workflows/deploy-pages.yml`

1. Activation dans Settings → Pages → Source: GitHub Actions
2. Le workflow se déclenche à chaque push sur `main`
3. Le site est publié sur `https://thephoenixagency.github.io/AI-Pulse/`

### Configuration PWA (Progressive Web App)

**Fichier:** `manifest.json`

```json
{
  "name": "AI-Pulse",
  "short_name": "AI-Pulse",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0e27",
  "theme_color": "#00d9ff",
  "icons": [
    {
      "src": "./assets/icon.png",
      "sizes": "1024x1024",
      "type": "image/png"
    }
  ]
}
```

**Permet :**
- Installation sur l'écran d'accueil (mobile)
- Fonctionnement en mode "app" (sans barre d'adresse)
- Icône personnalisée

---

## 🔄 Recréer un Projet Similaire

### Étape 1 : Structure de base

```bash
mkdir mon-agregateur
cd mon-agregateur
npm init -y
npm install rss-parser axios @octokit/rest sanitize-html @mozilla/readability jsdom
```

### Étape 2 : Configurer vos sources RSS

Créez `src/aggregator.js` et définissez vos flux :

```javascript
const FEED_CATEGORIES = {
  tech: [
    { name: 'TechCrunch', url: 'https://techcrunch.com/feed/', tags: ['Tech', 'Startups'] },
    { name: 'The Verge', url: 'https://www.theverge.com/rss/index.xml', tags: ['Tech', 'Reviews'] }
  ],
  // Ajoutez vos catégories ici
};
```

### Étape 3 : Script de collecte

Copiez la logique de `src/aggregator.js` :
- Parser les flux RSS
- Nettoyer le HTML
- Sauvegarder dans `data/articles.json`

### Étape 4 : Interface web

Créez `index.html` et `app.html` :
- Chargez `articles.json` avec `fetch()`
- Affichez les articles dans des cartes
- Ajoutez filtres et recherche

### Étape 5 : Automatisation GitHub Actions

Créez `.github/workflows/update.yml` :

```yaml
name: Update Articles
on:
  schedule:
    - cron: '0 */6 * * *'  # Toutes les 6 heures
  workflow_dispatch:

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: node src/aggregator.js
      - run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add data/articles.json
          git commit -m "Update articles" || exit 0
          git push
```

### Étape 6 : Déploiement

1. Activez GitHub Pages dans Settings
2. Créez `.github/workflows/deploy-pages.yml` (voir fichier existant)
3. Poussez votre code → le site se déploie automatiquement

---

## 📝 Personnalisation

### Changer les sources RSS

Modifiez `FEED_CATEGORIES` dans `src/aggregator.js` :

```javascript
const FEED_CATEGORIES = {
  ma_categorie: [
    { 
      name: 'Mon Site Préféré', 
      url: 'https://example.com/feed.xml', 
      tags: ['Tag1', 'Tag2'] 
    }
  ]
};
```

### Modifier le design

Éditez `css/style.css` :
- Variables CSS en haut du fichier (`--primary`, `--bg-dark`, etc.)
- Changez les couleurs, polices, espacements

### Ajouter des fonctionnalités

- **Favoris** : Stockage dans `localStorage`
- **Mode sombre/clair** : Toggle avec classe CSS
- **Notifications** : API Notification du navigateur
- **Partage** : API Web Share

---

## 🛠️ Technologies Utilisées

| Technologie | Usage |
|------------|-------|
| **Node.js** | Backend de collecte RSS |
| **rss-parser** | Parsing des flux RSS |
| **sanitize-html** | Nettoyage du HTML |
| **@mozilla/readability** | Extraction de contenu |
| **GitHub Actions** | Automatisation et CI/CD |
| **GitHub Pages** | Hébergement gratuit |
| **Vanilla JS** | Frontend (pas de framework) |
| **CSS Grid/Flexbox** | Layout responsive |

---

## 📊 Limites et Améliorations Possibles

### Limites actuelles

- Pas de base de données (tout en JSON)
- Pas d'authentification utilisateur
- Pas de backend temps réel
- Dépend de GitHub Actions (quotas gratuits)

### Améliorations futures

1. **Backend API** : Express.js + MongoDB
2. **Authentification** : Firebase Auth ou Supabase
3. **Temps réel** : WebSockets pour les nouveaux articles
4. **Recommandations** : Algorithme ML basé sur les lectures
5. **Multilingue** : Support i18n (français, anglais, etc.)

---

## 🔗 Ressources Utiles

- [RSS Parser Documentation](https://www.npmjs.com/package/rss-parser)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [PWA Guide](https://web.dev/progressive-web-apps/)
- [Readability.js](https://github.com/mozilla/readability)

---

**Créé par ThePhoenixAgency** | [GitHub](https://github.com/ThePhoenixAgency/AI-Pulse)
