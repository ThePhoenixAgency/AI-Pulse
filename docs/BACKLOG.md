# BACKLOG

Last updated: 2026-02-16

## En cours

- [ ] Reader: valider en local utilisateur le rendu footer strictement identique au template global
  - Variables CSS template alignées dans `reader.html` (`--primary`, `--text-dim`, `--bg-dark`)
  - Contrôle visuel final en attente côté utilisateur

- [ ] Agrégation: valider en run réel la fiabilité des nouvelles sources France/International/Local
  - Vérifier taux d'échec RSS des flux ajoutés
  - Remplacer les endpoints instables si nécessaire

## Termine

- [x] Reader/Articles: suppression du panneau bloquant injecté en lecture
  - `reader.html`: overlay de chargement/erreur rendu non bloquant (plus d'affichage panneau)
  - `reader.html`: suppression active des overlays/modales/paywalls/cookie dans l'iframe
  - `src/aggregator.js`: nettoyage renforcé des panneaux bloquants à la génération des articles

- [x] Reader: cache persistant des articles locaux pour accélérer les refresh
  - `reader.html`: lecture prioritaire cache `localStorage` puis `sessionStorage`
  - `reader.html`: index LRU simple (max 40 entrées) pour éviter la croissance infinie
  - `tests/reader_routing.test.js`: garde anti-régression sur l'usage du cache persistant

- [x] Sources: ajout catégorie `local` (Grenoble + météo locale)
  - France 3 Alpes, Le Dauphiné Grenoble, Place Gre'net, Actu Grenoble, Météo France Grenoble

- [x] Sources: ajout catégories `france` et `international`
  - Journaux France: Le Monde, Le Figaro, Libération, Franceinfo, Ouest-France
  - Journaux internationaux: Reuters, BBC, AP, Le Monde International, France 24

- [x] Sources Apple: durcissement catégorie `mac` pour éviter les trous de contenu
  - Ajout Apple Newsroom, Macworld, The Verge Apple
  - Mise à jour URL MacGeneration/iGeneration vers endpoints RSS actifs

- [x] Dependabot flow: unification du nom de branche en `security` (plus `securite`)
  - Auto-merge, auto-commit et auto-PR aligns sur `security -> main`

- [x] Security: UUID session/visitor en v4 RFC4122 avec source aleatoire cryptographique quand disponible
  - `crypto.getRandomValues` prioritaire
  - Fallback legacy sur `Math.random` pour compatibilite

- [x] Reader UX: clic sur tag (mot-cle/categorie) pour ancrer vers section et eviter le scroll long
  - Tags de navigation rapides (quick-nav) construits automatiquement depuis les sections visibles

- [x] Reader UX: langue par defaut auto (GeoIP stats locale si dispo, sinon navigateur)
  - Switch rapide FR/EN dans la barre du reader
  - Choix utilisateur persiste en localStorage

- [x] Fix: mini logo casse dans le header de `privacy.html` (corrige `./assets/logo_text.png` -> `./assets/logo_final.png`)

- [x] Reader UX: menu "Aller a" alimente automatiquement depuis les sections detectees
  - Fallback automatique si le markdown ne contient pas de `<section data-category>`
  - Bouton "Personnaliser" compact renomme "Filtres"

- [x] Stats: ne pas compter un visiteur 2 fois pendant une session
  - Cookie de session (30 min, expiration glissante)
  - Recompter une session si retour apres expiration
  - Conserver `visitorId` en localStorage

- [x] UI Reader: bouton Personnaliser non intrusif (dans la barre du haut, mobile-first)

- [x] Reader: résolution des URLs externes vers versions locales rendues
  - `reader.html` lit `data/article-map.json` avant affichage article
  - Mapping généré localement pour éviter l'encapsulation du site source quand version locale disponible

- [x] Articles: nettoyage des queues non éditoriales
  - Suppression publicité, slogans, commentaires/avis, blocs related en fin d’article
  - Nettoyage rétroactif appliqué sur les HTML déjà générés

- [x] Articles: flèches de navigation natives dans chaque article rendu
  - Ajout `▲/▼` in-page + écoute `postMessage` (`AI_PULSE_SCROLL`)
  - Patch rétroactif appliqué sur tous les `data/articles/*.html`

- [x] Reader/Articles: mode lecture “article seul” (sans bas de page parasite)
  - Footer site masqué en vue article dans `reader.html`
  - Footer injecté retiré des templates `src/aggregator.js`
  - Nettoyage rétroactif des articles existants (suppression footer injecté)

- [x] UX mobile: limitation des quick-tags visibles + scroll horizontal pour éviter la surcharge
  - Affichage compact des sections en haut de page

- [x] Keywords: affichage réduit à 1 mot-clé par article via mapping JSON
  - Fichier `data/keyword-mapping.json`
  - Affichage README: `Keyword` unique au lieu de `Tags` multiples

- [x] Catégories éditoriales: ajout `openclaw` et `raspberrypi`
  - Filtrage strict par mots-clés pour éviter le bruit

- [x] Sources éditoriales: ajout des catégories `france` et `international`
  - Renforcement des journaux FR et internationaux

## Demandes non faites (à traiter)

- [ ] Vérifier et corriger la régression Investing signalée (URL analyst-ratings) dans le flux finance.
- [ ] Supprimer les 404 restants en finance/crypto et garantir un fallback article local systématique.
- [ ] Garantir le comportement homogène de toutes les catégories (même rendu, même navigation, même résumé).
- [ ] Garantir qu'un ajout de source soit géré automatiquement sans régression UI.
- [ ] Vérifier et corriger la navigation retour article -> liste (header + bas de page) dans tous les cas.
- [ ] Vérifier la flèche de remontée/descente dans les pages article sur tous les templates générés.
- [ ] Vérifier l'affichage du footer template identique site dans toutes les vues article.
- [ ] Durcir la qualité éditoriale finance/crypto (sources fiables priorisées, suppression des sources non souhaitées).
- [ ] Ajouter contrôle automatique anti-régression: aucun lien article externe dans README, uniquement `data/articles/*`.
- [ ] Ajouter contrôle automatique anti-régression: aucun article cliquable ne doit rediriger vers 404 sans fallback.
- [ ] Vérifier la détection langue auto IP/navigateur en local et en déploiement, corriger incohérences.
- [ ] Synchroniser strictement mots-clés/sections dans la langue active uniquement (fallback EN sans double affichage).
- [ ] Valider la catégorie OpenClaw en production (volume, priorité d'affichage, qualité sources).
- [ ] Valider la catégorie Raspberry Pi (volume suffisant et liens valides).
- [ ] Vérifier l'alignement des chemins de doc Supabase (`docs/SUPABASE_MIGRATION.md` vs liens README/workflows).

## Mise a jour 2026-02-16 18:24

- [x] Categorie `local` normalisee en `Informations locales / Local News` avec sources valides (Le Dauphine Isere/Isere Sud/Une + France24 FR/EN France).
- [x] Nouvelle categorie `weather` ajoutee (`Meteo / Weather`) avec sources valides (`meteo-paris`, `france24` FR/EN).
- [x] Categorie `opensource` renforcee avec sources FR fiables (`Developpez.com`, `LinuxFr`, `Programmez`).
- [x] Mots-cles localises ajoutes: `openclaw`, `local_news`, `weather`, `opensource`.
- [x] Test reseau des flux execute: 135 flux testes, 115 OK, 20 KO (rapport en sortie de commande).
- [ ] Remplacer les 20 flux KO restants identifies (iot/windows/mac/finance/products) pour reduire fortement les `failed fetch`.
