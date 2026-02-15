# BACKLOG

Last updated: 2026-02-15

## En cours

- [ ] Reader UX: filtrage local (stockage local) + langue par defaut (GeoIP si dispo, sinon navigateur)
  - Le stockage se cree a la premiere visite et se met a jour lors des filtres

- [ ] Reader UX: clic sur tag (mot-cle) pour ancrer vers categorie et eviter le scroll long

- [ ] Fix: mini logo casse dans le header de `privacy.html` (corriger `./assets/logo_text.png` -> `./assets/logo_final.png`)


## Termine

- [x] Stats: ne pas compter un visiteur 2 fois pendant une session
  - Cookie de session (30 min, expiration glissante)
  - Recompter une session si retour apres expiration
  - Conserver `visitorId` en localStorage

- [x] UI Reader: bouton Personnaliser non intrusif (dans la barre du haut, mobile-first)
