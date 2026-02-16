# BACKLOG

Last updated: 2026-02-16

## En cours

- [ ] Reader UX: filtrage local (stockage local) + langue par defaut (GeoIP si dispo, sinon navigateur)
  - Le stockage se cree a la premiere visite et se met a jour lors des filtres

- [ ] Reader UX: clic sur tag (mot-cle) pour ancrer vers categorie et eviter le scroll long


## Termine

- [x] Fix: mini logo casse dans le header de `privacy.html` (corrige `./assets/logo_text.png` -> `./assets/logo_final.png`)

- [x] Reader UX: menu "Aller a" alimente automatiquement depuis les sections detectees
  - Fallback automatique si le markdown ne contient pas de `<section data-category>`
  - Bouton "Personnaliser" compact renomme "Filtres"

- [x] Stats: ne pas compter un visiteur 2 fois pendant une session
  - Cookie de session (30 min, expiration glissante)
  - Recompter une session si retour apres expiration
  - Conserver `visitorId` en localStorage

- [x] UI Reader: bouton Personnaliser non intrusif (dans la barre du haut, mobile-first)
