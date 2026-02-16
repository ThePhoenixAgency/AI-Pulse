# Guide de Configuration - config.json

**Version:** 1.0.0
**Dernière mise à jour:** Février 2026
**Fichier concerné:** `/config.json`

---

## Table des matières

1. [Présentation générale](#présentation-générale)
2. [Structure du fichier](#structure-du-fichier)
3. [Section "settings"](#section-settings)
4. [Section "categories"](#section-categories)
5. [Section "keywords"](#section-keywords)
6. [Comment ajouter une source](#comment-ajouter-une-source)
7. [Comment créer une catégorie](#comment-créer-une-catégorie)
8. [Comment modifier l'ordre des catégories](#comment-modifier-lordre-des-catégories)
9. [Comment ajouter des mots-clés](#comment-ajouter-des-mots-clés)

---

## Présentation générale

Le fichier `config.json` est le **cerveau** de AI-Pulse. Il contrôle :
- Quelles sources d'actualités sont récupérées (flux RSS)
- Comment les articles sont organisés par catégorie
- Les mots-clés utilisés pour filtrer et classer les articles
- Les paramètres de déduplication (éviter les doublons)

**Emplacement:** `/config.json` (à la racine du projet)

---

## Structure du fichier

Le fichier est divisé en **3 sections principales** :

```json
{
  "settings": { ... },      // Paramètres généraux
  "categories": { ... },    // Catégories et sources RSS
  "keywords": { ... }       // Mots-clés pour le filtrage
}
```

---

## Section "settings"

Cette section contient les **paramètres généraux** de l'agrégateur.

```json
"settings": {
  "articlesPerFeed": 80,
  "maxArticlesPerCategory": 80,
  "summaryMaxLength": 600,
  "deduplication": {
    "enabled": true,
    "similarityThreshold": 0.7,
    "contentThreshold": 0.5
  }
}
```

### Explication de chaque paramètre :

| Paramètre | Valeur par défaut | Description |
|-----------|-------------------|-------------|
| `articlesPerFeed` | 80 | Nombre maximum d'articles récupérés **par source RSS**. Si une source a 50 articles, seuls les 80 plus récents sont gardés. |
| `maxArticlesPerCategory` | 80 | Nombre maximum d'articles affichés **par catégorie** sur le site. Même si on a 100 articles IA, on n'en montre que 80. |
| `summaryMaxLength` | 600 | Longueur maximale du résumé d'un article (en caractères). Les résumés trop longs sont coupés. |

### Sous-section "deduplication" :

La déduplication empêche d'afficher le même article plusieurs fois (quand plusieurs sources parlent de la même news).

| Paramètre | Valeur | Description |
|-----------|--------|-------------|
| `enabled` | true/false | Active ou désactive la détection des doublons. Mettre `true` pour éviter les répétitions. |
| `similarityThreshold` | 0.7 | Seuil de similarité des titres (0 à 1). À 0.7, deux titres similaires à 70% sont considérés comme doublons. |
| `contentThreshold` | 0.5 | Seuil de similarité du contenu (0 à 1). Vérifie si le contenu des articles est identique. |

**Conseil :** Plus le seuil est élevé (proche de 1), plus il faut que les articles soient identiques pour être considérés comme doublons.

---

## Section "categories"

Cette section définit les **catégories d'actualités** et leurs **sources RSS**.

### Structure d'une catégorie :

```json
"ai": {                                                    // Identifiant unique (en minuscules, sans espaces)
  "labels": {
    "en": "AI - Artificial Intelligence",                  // Nom affiché en anglais
    "fr": "IA - Intelligence Artificielle"                 // Nom affiché en français
  },
  "icon": "brain",                                         // Icône (nom Feather Icons)
  "priority": 1,                                           // Ordre d'affichage (1 = premier)
  "feeds": [                                               // Liste des sources RSS
    {
      "name": "TechCrunch AI",                             // Nom de la source
      "url": "https://techcrunch.com/.../feed/",           // URL du flux RSS
      "tags": ["AI", "Startups", "Tech"],                  // Tags pour le filtrage
      "lang": "en"                                         // Langue (en = anglais, fr = français)
    }
  ]
}
```

### Liste des catégories actuelles :

| ID | Nom français | Priorité | Description |
|----|--------------|----------|-------------|
| `ai` | IA - Intelligence Artificielle | 1 | Actualités sur l'IA, ChatGPT, LLM, etc. |
| `cybersecurity` | Cybersécurité | 2 | Sécurité informatique, failles, alertes |
| `iot` | Internet des Objets | 3 | Raspberry Pi, Arduino, domotique |
| `windows` | Windows | 4 | Actualités Microsoft Windows |
| `mac` | Mac / Apple | 5 | Actualités Apple, macOS, iOS |
| `linux` | Linux | 6 | Distributions Linux, open source |
| `tech` | Tech Générale | 7 | Actualités tech générales |
| `entrepreneurship` | Entrepreneuriat | 8 | Startups, levées de fonds |
| `finance` | Bourse & Finance | 9 | Marchés financiers, actions |
| `crypto` | Crypto & Blockchain | 10 | Bitcoin, Ethereum, DeFi |
| `opensource` | Open Source & GitHub | 11 | Projets GitHub, outils open source |
| `products` | Produits & Innovation | 12 | Nouveaux produits, Product Hunt |

### Icônes disponibles :

Les icônes utilisent la bibliothèque [Feather Icons](https://feathericons.com/). Voici les plus courantes :

- `brain` : cerveau (IA)
- `shield` : bouclier (sécurité)
- `cpu` : processeur (IoT)
- `monitor` : écran (Windows)
- `apple` : pomme (Mac)
- `terminal` : terminal (Linux)
- `zap` : éclair (tech)
- `rocket` : fusée (startups)
- `trending-up` : courbe montante (finance)
- `link` : chaîne (crypto)
- `git-branch` : branche git (open source)
- `package` : paquet (produits)

---

## Section "keywords"

Les mots-clés servent à **identifier** et **classer** les articles.

### Structure :

```json
"keywords": {
  "universal": [...],      // Mots-clés utilisés dans toutes les langues
  "localized": {...}       // Mots-clés traduits (anglais/français)
}
```

### Mots-clés universels :

Ce sont des mots qui s'écrivent pareil en anglais et français :

```json
"universal": [
  "LLM", "GPT", "ChatGPT", "Docker", "Python", "GitHub", ...
]
```

### Mots-clés localisés :

Ce sont des mots traduits selon la langue :

```json
"localized": {
  "artificial_intelligence": {
    "en": "Artificial Intelligence",
    "fr": "Intelligence Artificielle"
  }
}
```

---

## Comment ajouter une source

### Étape 1 : Trouver le flux RSS de la source

La plupart des sites ont un flux RSS. L'URL se termine souvent par `/feed/`, `/rss/`, ou `/rss.xml`.

Exemples :
- `https://example.com/feed/`
- `https://example.com/rss.xml`
- `https://example.com/blog/feed`

### Étape 2 : Ajouter la source dans la bonne catégorie

Ouvrir `config.json` et trouver la catégorie appropriée. Ajouter un nouvel objet dans le tableau `feeds` :

```json
{
  "name": "Nom de la source",
  "url": "https://example.com/feed/",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "lang": "fr"
}
```

### Champs obligatoires :

| Champ | Description | Exemple |
|-------|-------------|---------|
| `name` | Nom affiché de la source | "Le Monde Tech" |
| `url` | URL du flux RSS | "https://lemonde.fr/tech/rss.xml" |
| `tags` | Liste de 3 tags maximum | ["Tech", "France", "News"] |
| `lang` | Code langue | "fr" ou "en" |

### Exemple complet :

Pour ajouter "Le Monde Tech" dans la catégorie "tech" :

```json
"tech": {
  "feeds": [
    // ... sources existantes ...
    {
      "name": "Le Monde Tech",
      "url": "https://www.lemonde.fr/pixels/rss_full.xml",
      "tags": ["Tech", "France", "Actualités"],
      "lang": "fr"
    }
  ]
}
```

---

## Comment créer une catégorie

### Étape 1 : Choisir un identifiant unique

L'identifiant doit être :
- En minuscules
- Sans espaces (utiliser des tirets si besoin)
- Court et descriptif

Exemples : `gaming`, `science`, `mobile`, `cloud`

### Étape 2 : Ajouter la catégorie dans config.json

```json
"categories": {
  // ... catégories existantes ...

  "gaming": {
    "labels": {
      "en": "Gaming & Esports",
      "fr": "Jeux Vidéo & Esport"
    },
    "icon": "play",
    "priority": 13,
    "feeds": [
      {
        "name": "Jeuxvideo.com",
        "url": "https://www.jeuxvideo.com/rss/rss.xml",
        "tags": ["Gaming", "Actualités", "France"],
        "lang": "fr"
      }
    ]
  }
}
```

---

## Comment modifier l'ordre des catégories

L'ordre d'affichage est contrôlé par le champ `priority`.

- `priority: 1` = affiché en premier
- `priority: 2` = affiché en deuxième
- etc.

### Pour changer l'ordre :

1. Ouvrir `config.json`
2. Trouver la catégorie à déplacer
3. Modifier sa valeur `priority`
4. Ajuster les autres priorités si nécessaire

### Exemple :

Pour mettre "Cybersécurité" en premier et "IA" en deuxième :

```json
"ai": {
  "priority": 2,    // Était 1, devient 2
  ...
},
"cybersecurity": {
  "priority": 1,    // Était 2, devient 1
  ...
}
```

---

## Comment ajouter des mots-clés

### Ajouter un mot-clé universel :

Si le mot s'écrit pareil en anglais et français, l'ajouter dans `universal` :

```json
"universal": [
  "LLM", "GPT", "ChatGPT", ...,
  "NouveauMotClé"    // Ajouter ici
]
```

### Ajouter un mot-clé traduit :

Si le mot a des traductions différentes :

```json
"localized": {
  // ... mots existants ...

  "augmented_reality": {
    "en": "Augmented Reality",
    "fr": "Réalité Augmentée"
  }
}
```

---

## Conseils et bonnes pratiques

1. **Toujours tester les flux RSS** avant de les ajouter. Utiliser un lecteur RSS ou ouvrir l'URL dans un navigateur.

2. **Ne pas surcharger les catégories** : 10-15 sources par catégorie est un bon maximum.

3. **Équilibrer les langues** : essayer d'avoir autant de sources françaises qu'anglaises.

4. **Sauvegarder avant de modifier** : faire une copie de `config.json` avant toute modification importante.

5. **Valider le JSON** : utiliser un outil comme [JSONLint](https://jsonlint.com/) pour vérifier que le fichier est valide après modification.

---

## Résolution de problèmes

### "Le flux RSS ne fonctionne pas"

- Vérifier que l'URL est correcte
- Tester l'URL dans un navigateur
- Certains sites bloquent les requêtes automatiques

### "Les articles ne s'affichent pas"

- Vérifier que la catégorie a bien une `priority`
- Vérifier que le flux RSS contient des articles récents
- Regarder les logs de l'agrégateur pour les erreurs

### "Erreur de syntaxe JSON"

- Vérifier les virgules (pas de virgule après le dernier élément d'une liste)
- Vérifier les guillemets (utiliser des guillemets droits " et non "")
- Utiliser un validateur JSON en ligne

---

*Documentation générée pour AI-Pulse - Février 2026*
