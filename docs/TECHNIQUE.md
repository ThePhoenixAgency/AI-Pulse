# AI-Pulse Technical Documentation

<div align="center">

**Language / Langue:**
[🇬🇧 English](#english) | [🇫🇷 Français](#francais)

</div>

---

<a id="english"></a>

# 🇬🇧 English

## Overview

AI-Pulse is an **RSS feed aggregator** specialized in **AI, Cybersecurity, IoT, and Mac/Apple** news. The site automatically collects articles from RSS sources, cleans them, enriches them, and publishes them on a modern web interface.

---

## Project Architecture

### File Structure

```
AI-Pulse/
├── index.html              # Home page
├── app.html                # Article reader
├── about.html              # About page
├── stats.html              # Statistics
├── privacy.html            # Privacy policy
├── 404.html                # Error page
├── manifest.json           # PWA configuration
├── css/
│   └── style.css           # Global styles (cyberpunk theme)
├── js/
│   ├── ui.js               # UI interactions
│   └── tracker.js          # Visit tracking
├── assets/
│   ├── banner.png          # Main banner
│   ├── icon.png            # App icon
│   └── logo_final.png      # Site logo
├── src/
│   └── aggregator.js       # Node.js RSS collection script
├── data/
│   └── articles/           # Extracted articles (auto-generated)
└── .github/workflows/
    ├── update-ai-pulse.yml # Auto-update workflow
    └── deploy-pages.yml    # GitHub Pages deployment
```

---

## How It Works

### 1. Article Collection (Backend)

**File:** `src/aggregator.js`

#### Configured RSS Sources

Sources are organized by category in `FEED_CATEGORIES`:

```javascript
const FEED_CATEGORIES = {
  mac: [
    { name: 'MacRumors', url: 'https://feeds.macrumors.com/MacRumors-All', tags: ['Mac', 'Apple'] },
    { name: '9to5Mac', url: 'https://9to5mac.com/feed/', tags: ['Mac', 'Apple', 'iOS'] },
    { name: 'Mac4Ever', url: 'https://www.mac4ever.com/rss', tags: ['Mac', 'Apple', 'FR'] },
  ],
  iot: [
    { name: 'Raspberry Pi', url: 'https://www.raspberrypi.com/news/feed/', tags: ['IoT'] },
    { name: 'Arduino Blog', url: 'https://blog.arduino.cc/feed/', tags: ['IoT', 'Arduino'] },
  ],
  ai: [
    { name: 'Medium AI', url: 'https://medium.com/tag/artificial-intelligence/feed', tags: ['AI', 'ML'] },
    { name: 'Google AI Blog', url: 'https://ai.googleblog.com/feeds/posts/default', tags: ['AI'] },
  ],
  cybersecurity: [
    { name: 'The Hacker News', url: 'https://feeds.feedburner.com/TheHackersNews', tags: ['Security'] },
    { name: 'Bleeping Computer', url: 'https://www.bleepingcomputer.com/feed/', tags: ['Security'] },
  ]
};
```

#### Collection Process

1. **RSS Parsing**: Uses `rss-parser` to read each feed
2. **HTML Cleaning**: `sanitize-html` removes scripts and dangerous tags
3. **Content Extraction**: `@mozilla/readability` + `jsdom` for main text extraction
4. **Deduplication**: MD5 hash of title to avoid duplicates
5. **Enrichment**: Adding tags, categories, timestamps
6. **Anchors**: Each category has an anchor link (`#mac`, `#ai`, `#cybersecurity`, `#iot`)

#### Commands

```bash
npm install          # Install dependencies
npm start            # Run collection manually
```

---

### 2. Automatic Update (GitHub Actions)

**File:** `.github/workflows/update-ai-pulse.yml`

#### Triggers

- **Manual**: Triggered manually via workflow_dispatch
- **Cron**: Every 3 hours (`0 */3 * * *`)

#### Workflow Steps

1. Code checkout
2. Node.js installation
3. npm dependencies installation
4. Execute `src/aggregator.js`
5. Commit new README.md
6. Auto push to `main`

---

### 3. User Interface (Frontend)

#### Article Reader (`app.html`)

**Features:**
- Category filtering (Mac, AI, IoT, Cybersecurity)
- Real-time search
- Tag display
- Links to original sources
- Anchor navigation to each section

#### Design (CSS)

**Cyberpunk theme:**
- Primary colors: Cyan (`#00d9ff`) and Violet (`#825ee4`)
- Dark background: `#0a0e27`
- Glow effects and gradients
- Hover animations
- Responsive (mobile-friendly)

---

## Deployment

### GitHub Pages

**File:** `.github/workflows/deploy-pages.yml`

1. Enable in Settings → Pages → Source: GitHub Actions
2. Workflow triggers on each push to `main`
3. Site published at `https://thephoenixagency.github.io/AI-Pulse/`

---

## Technologies Used

| Technology | Usage |
|------------|-------|
| **Node.js** | RSS collection backend |
| **rss-parser** | RSS feed parsing |
| **sanitize-html** | HTML cleaning |
| **@mozilla/readability** | Content extraction |
| **GitHub Actions** | Automation and CI/CD |
| **GitHub Pages** | Free hosting |
| **Vanilla JS** | Frontend (no framework) |
| **CSS Grid/Flexbox** | Responsive layout |

---

<a id="francais"></a>

# 🇫🇷 Français

## Vue d'ensemble

AI-Pulse est un **agrégateur de flux RSS** spécialisé dans l'actualité **IA, Cybersécurité, IoT et Mac/Apple**. Le site collecte automatiquement des articles depuis des sources RSS, les nettoie, les enrichit et les publie sur une interface web moderne.

---

## Architecture du Projet

### Structure des fichiers

```
AI-Pulse/
├── index.html              # Page d'accueil
├── app.html                # Lecteur d'articles
├── about.html              # Page À propos
├── stats.html              # Statistiques
├── privacy.html            # Politique de confidentialité
├── 404.html                # Page d'erreur
├── manifest.json           # Configuration PWA
├── css/
│   └── style.css           # Styles globaux (thème cyberpunk)
├── js/
│   ├── ui.js               # Interactions UI
│   └── tracker.js          # Tracking des visites
├── assets/
│   ├── banner.png          # Bannière principale
│   ├── icon.png            # Icône de l'application
│   └── logo_final.png      # Logo du site
├── src/
│   └── aggregator.js       # Script Node.js de collecte RSS
├── data/
│   └── articles/           # Articles extraits (généré automatiquement)
└── .github/workflows/
    ├── update-ai-pulse.yml # Workflow de mise à jour automatique
    └── deploy-pages.yml    # Déploiement GitHub Pages
```

---

## Fonctionnement Technique

### 1. Collecte des Articles (Backend)

**Fichier:** `src/aggregator.js`

#### Sources RSS configurées

Les sources sont organisées par catégorie dans `FEED_CATEGORIES`:

```javascript
const FEED_CATEGORIES = {
  mac: [
    { name: 'MacRumors', url: 'https://feeds.macrumors.com/MacRumors-All', tags: ['Mac', 'Apple'] },
    { name: '9to5Mac', url: 'https://9to5mac.com/feed/', tags: ['Mac', 'Apple', 'iOS'] },
    { name: 'Mac4Ever', url: 'https://www.mac4ever.com/rss', tags: ['Mac', 'Apple', 'FR'] },
  ],
  iot: [
    { name: 'Raspberry Pi', url: 'https://www.raspberrypi.com/news/feed/', tags: ['IoT'] },
    { name: 'Arduino Blog', url: 'https://blog.arduino.cc/feed/', tags: ['IoT', 'Arduino'] },
  ],
  ai: [
    { name: 'Medium AI', url: 'https://medium.com/tag/artificial-intelligence/feed', tags: ['AI', 'ML'] },
    { name: 'Google AI Blog', url: 'https://ai.googleblog.com/feeds/posts/default', tags: ['AI'] },
  ],
  cybersecurity: [
    { name: 'The Hacker News', url: 'https://feeds.feedburner.com/TheHackersNews', tags: ['Security'] },
    { name: 'Bleeping Computer', url: 'https://www.bleepingcomputer.com/feed/', tags: ['Security'] },
  ]
};
```

#### Processus de collecte

1. **Parsing RSS** : Utilise `rss-parser` pour lire chaque flux
2. **Nettoyage HTML** : `sanitize-html` supprime les scripts et balises dangereuses
3. **Extraction de contenu** : `@mozilla/readability` + `jsdom` pour extraire le texte principal
4. **Déduplication** : Hash MD5 du titre pour éviter les doublons
5. **Enrichissement** : Ajout de tags, catégories, timestamps
6. **Ancres** : Chaque catégorie a un lien ancre (`#mac`, `#ai`, `#cybersecurity`, `#iot`)

#### Commandes

```bash
npm install          # Installer les dépendances
npm start            # Lancer la collecte manuellement
```

---

### 2. Mise à Jour Automatique (GitHub Actions)

**Fichier:** `.github/workflows/update-ai-pulse.yml`

#### Déclencheurs

- **Manuel** : Déclenché manuellement via workflow_dispatch
- **Cron** : Toutes les 3 heures (`0 */3 * * *`)

#### Étapes du workflow

1. Checkout du code
2. Installation de Node.js
3. Installation des dépendances npm
4. Exécution de `src/aggregator.js`
5. Commit du nouveau README.md
6. Push automatique vers `main`

---

### 3. Interface Utilisateur (Frontend)

#### Lecteur d'articles (`app.html`)

**Fonctionnalités :**
- Filtrage par catégorie (Mac, AI, IoT, Cybersecurity)
- Recherche en temps réel
- Affichage des tags
- Liens vers les sources originales
- Navigation par ancres vers chaque section

#### Design (CSS)

**Thème cyberpunk :**
- Couleurs principales : Cyan (`#00d9ff`) et Violet (`#825ee4`)
- Fond sombre : `#0a0e27`
- Effets de glow et gradients
- Animations au survol
- Mode responsive (mobile-friendly)

---

## Déploiement

### GitHub Pages

**Fichier:** `.github/workflows/deploy-pages.yml`

1. Activation dans Settings → Pages → Source: GitHub Actions
2. Le workflow se déclenche à chaque push sur `main`
3. Le site est publié sur `https://thephoenixagency.github.io/AI-Pulse/`

---

## Technologies Utilisées

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

**Created by ThePhoenixAgency** | [GitHub](https://github.com/ThePhoenixAgency/AI-Pulse)
