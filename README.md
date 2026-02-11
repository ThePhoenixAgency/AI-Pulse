# AI-Pulse - Agrégateur d'Actualités Tech

<!--
================================================================================
AI-PULSE - FICHIER README PRINCIPAL
================================================================================

DESCRIPTION:
    Ce fichier est le point d'entrée de la documentation du projet AI-Pulse.
    Il explique comment fonctionne le projet, comment le configurer et
    comment l'utiliser.

VERSION: 1.0.0
DERNIÈRE MISE À JOUR: Février 2026
AUTEUR: ThePhoenixAgency

STRUCTURE DE CE FICHIER:
    1. Présentation du projet
    2. Fonctionnalités
    3. Installation
    4. Configuration
    5. Utilisation
    6. Structure des fichiers
    7. Comment contribuer
    8. Licence

================================================================================
-->

<div align="center">

<img src="assets/banner.png" alt="AI-PULSE Banner" width="100%">

> Agrégateur d'actualités tech - Contenu sélectionné des meilleures sources

[![GitHub](https://img.shields.io/badge/GitHub-ThePhoenixAgency-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency)
[![Live Reader](https://img.shields.io/badge/Lecteur-En_Ligne-blueviolet?style=for-the-badge&logo=readthedocs)](https://thephoenixagency.github.io/AI-Pulse/app.html)
[![Documentation](https://img.shields.io/badge/Documentation-Guide-blue?style=for-the-badge&logo=googledocs)](docs/CONFIG_GUIDE.md)

</div>

---

## Qu'est-ce que AI-Pulse ?

<!--
EXPLICATION SIMPLE:
    AI-Pulse est comme un journal automatique qui récupère les dernières
    nouvelles de sites tech et les affiche sur une seule page web.

    Il fonctionne tout seul grâce à GitHub Actions (des robots qui
    exécutent du code automatiquement).
-->

**AI-Pulse** est un agrégateur d'actualités technologiques qui :

1. **Récupère** automatiquement les articles de +80 sources (TechCrunch, The Verge, Korben, etc.)
2. **Classe** les articles par catégorie (IA, Cybersécurité, IoT, etc.)
3. **Affiche** tout sur un site web simple et rapide
4. **Met à jour** le contenu automatiquement toutes les 2 heures

**Aucune base de données** - Tout fonctionne avec des fichiers JSON et GitHub Actions.

---

## Fonctionnalités

<!--
LISTE DES FONCTIONNALITÉS:
    Chaque fonctionnalité ci-dessous correspond à une partie du code.
    Les emojis aident à identifier rapidement le type de fonctionnalité.
-->

| Fonctionnalité | Description |
|----------------|-------------|
| 📰 **Agrégation RSS** | Récupère les flux RSS de +80 sources tech |
| 🏷️ **12 catégories** | IA, Cybersécurité, IoT, Windows, Mac, Linux, Tech, Entrepreneuriat, Finance, Crypto, Open Source, Produits |
| 🌍 **Bilingue** | Sources en français et anglais |
| 🔄 **Mise à jour auto** | Toutes les 2 heures via GitHub Actions |
| 🔍 **Déduplication** | Évite les articles en double |
| 📧 **Newsletter** | Envoi d'emails aux abonnés (optionnel) |
| 📊 **Statistiques** | Page de stats avec graphiques |
| 🌙 **Mode sombre** | Interface adaptée à vos yeux |

---

## Structure du Projet

<!--
ARBORESCENCE DES FICHIERS:
    Cette section explique où se trouve chaque fichier et à quoi il sert.
    C'est essentiel pour comprendre le projet.
-->

```
AI-Pulse/
│
├── 📄 index.html              # Page d'accueil du site
├── 📄 app.html                # Application principale (lecteur d'articles)
├── 📄 about.html              # Page "À propos"
├── 📄 privacy.html            # Politique de confidentialité
├── 📄 stats.html              # Page de statistiques
├── 📄 portfolio.html          # Portfolio du développeur
├── 📄 reader.html             # Lecteur d'articles individuel
├── 📄 404.html                # Page d'erreur 404
│
├── 📁 css/
│   └── style.css              # Tous les styles du site
│
├── 📁 js/
│   ├── ui.js                  # Logique de l'interface utilisateur
│   └── tracker.js             # Suivi des statistiques
│
├── 📁 src/
│   ├── aggregator.js          # Script principal qui récupère les articles
│   └── linkedin-helper.js     # Aide pour les posts LinkedIn
│
├── 📁 modules/
│   ├── url-health-monitor.js  # Vérifie que les URLs fonctionnent
│   └── url-tokenizer-engine.js # Analyse les URLs
│
├── 📁 data/
│   ├── posted-links.json      # Articles déjà publiés
│   └── subscribers.json       # Liste des abonnés à la newsletter
│
├── 📁 docs/
│   ├── CONFIG_GUIDE.md        # Guide de configuration détaillé
│   ├── TECHNIQUE.md           # Documentation technique
│   └── ACTION_README.md       # Documentation des GitHub Actions
│
├── 📁 .github/
│   └── workflows/             # Automatisations GitHub Actions
│       ├── update-ai-pulse.yml    # Mise à jour des articles
│       ├── deploy-pages.yml       # Déploiement du site
│       └── ...                    # Autres workflows
│
├── 📄 config.json             # ⭐ FICHIER PRINCIPAL DE CONFIGURATION
├── 📄 package.json            # Dépendances Node.js
└── 📄 README.md               # Ce fichier
```

---

## Configuration

<!--
COMMENT CONFIGURER LE PROJET:
    Cette section explique les étapes pour personnaliser AI-Pulse.
    Le fichier config.json est le plus important.
-->

### Fichier Principal : `config.json`

Ce fichier contrôle **tout** le projet. Voir le [Guide de Configuration](docs/CONFIG_GUIDE.md) pour les détails.

#### Modifier les paramètres généraux

```json
{
  "settings": {
    "articlesPerFeed": 15,        // Articles par source (max 15)
    "maxArticlesPerCategory": 30, // Articles par catégorie (max 30)
    "summaryMaxLength": 600       // Longueur max des résumés
  }
}
```

#### Ajouter une source RSS

1. Ouvrir `config.json`
2. Trouver la catégorie voulue (ex: `"ai"` pour Intelligence Artificielle)
3. Ajouter dans le tableau `"feeds"` :

```json
{
  "name": "Nom de la source",
  "url": "https://site.com/feed/",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "lang": "fr"
}
```

#### Changer l'ordre des catégories

Modifier la valeur `"priority"` de chaque catégorie :
- `priority: 1` = affiché en premier
- `priority: 2` = affiché en deuxième
- etc.

---

## Pages du Site

<!--
DESCRIPTION DE CHAQUE PAGE:
    Chaque page HTML a un rôle spécifique.
-->

| Page | URL | Description |
|------|-----|-------------|
| **Accueil** | `index.html` | Page de présentation avec les dernières news |
| **Lecteur** | `app.html` | Application principale pour lire les articles |
| **À propos** | `about.html` | Informations sur le projet |
| **Stats** | `stats.html` | Statistiques et graphiques |
| **Confidentialité** | `privacy.html` | Politique de confidentialité |
| **Portfolio** | `portfolio.html` | Portfolio du développeur |

---

## GitHub Actions (Automatisation)

<!--
EXPLICATION DES GITHUB ACTIONS:
    Les GitHub Actions sont des "robots" qui exécutent du code
    automatiquement selon un planning ou des événements.
-->

Les automatisations se trouvent dans `.github/workflows/` :

| Workflow | Fichier | Description |
|----------|---------|-------------|
| **Mise à jour** | `update-ai-pulse.yml` | Récupère les nouveaux articles toutes les 2h |
| **Déploiement** | `deploy-pages.yml` | Publie le site sur GitHub Pages |
| **Sécurité** | `codeql.yml` | Analyse le code pour trouver des failles |
| **Newsletter** | `manage-subscriber.yml` | Gère les abonnements email |

### Comment fonctionne la mise à jour automatique ?

```
┌─────────────────────────────────────────────────────────────┐
│                    TOUTES LES 2 HEURES                      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 1. GitHub Action démarre le script src/aggregator.js       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Le script lit config.json pour connaître les sources    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. Pour chaque source RSS, récupère les derniers articles  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. Supprime les doublons (articles similaires)              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. Met à jour README.md avec les nouveaux articles          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 6. Commit et push les changements sur GitHub                │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 7. GitHub Pages redéploie le site automatiquement           │
└─────────────────────────────────────────────────────────────┘
```

---

## Installation Locale

<!--
POUR LES DÉVELOPPEURS:
    Ces étapes permettent de faire tourner le projet sur votre ordinateur.
-->

### Prérequis

- [Node.js](https://nodejs.org/) version 18 ou supérieure
- [Git](https://git-scm.com/)

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/ThePhoenixAgency/AI-Pulse.git

# 2. Aller dans le dossier
cd AI-Pulse

# 3. Installer les dépendances
npm install

# 4. Lancer l'agrégateur manuellement
node src/aggregator.js
```

---

## Fichiers de Données

<!--
FICHIERS JSON:
    Ces fichiers stockent les données du projet.
-->

### `data/posted-links.json`

Stocke les liens déjà publiés pour éviter les doublons.

```json
[
  "https://example.com/article-1",
  "https://example.com/article-2"
]
```

### `data/subscribers.json`

Liste des abonnés à la newsletter (emails hashés pour la confidentialité).

---

## Sécurité

<!--
MESURES DE SÉCURITÉ:
    Le projet a été conçu avec la sécurité en tête.
-->

- ✅ Pas de base de données exposée
- ✅ Emails des abonnés hashés (SHA-256)
- ✅ Analyse de sécurité automatique (CodeQL)
- ✅ Dépendances vérifiées (Dependabot)
- ✅ Pas de collecte de données personnelles

---

## Contribuer

<!--
COMMENT AIDER:
    Les contributions sont les bienvenues !
-->

1. **Fork** le projet
2. Créer une **branche** (`git checkout -b feature/ma-fonctionnalite`)
3. **Commit** vos changements (`git commit -m 'Ajout de ma fonctionnalité'`)
4. **Push** sur la branche (`git push origin feature/ma-fonctionnalite`)
5. Ouvrir une **Pull Request**

---

## Documentation Complète

| Document | Description |
|----------|-------------|
| [Guide de Configuration](docs/CONFIG_GUIDE.md) | Comment configurer config.json |
| [Documentation Technique](docs/TECHNIQUE.md) | Architecture et détails techniques |
| [Changelog](CHANGELOG.md) | Historique des versions |

---

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">

**Développé avec ❤️ par [ThePhoenixAgency](https://github.com/ThePhoenixAgency)**

[![GitHub](https://img.shields.io/badge/GitHub-ThePhoenixAgency-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency)

</div>
