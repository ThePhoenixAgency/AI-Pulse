# Plan de Migration et Refonte AI-Pulse

Ce document détaille les étapes de correction et d'amélioration du site AI-Pulse pour résoudre les problèmes de navigation, de cohérence visuelle, d'ergonomie et de logique statistique.

## Phase 1 : Consolidation Structurelle (Pages & Navigation)
> **Objectif** : Rétablir un flux de navigation logique et corriger les liens brisés.

1.  **Inversion Index/Home** :
    *   Renommer `index.html` (actuellement le lecteur avec iframe) en `app.html`.
    *   Renommer `home.html` (actuellement la landing page) en `index.html`.
    *   Mettre à jour les liens de navigation pour pointer vers la nouvelle structure.
2.  **Création des Pages Manquantes** :
    *   Créer `about.html` (basé sur le template unifié).
    *   S'assurer que toutes les pages (y compris `404.html`) disposent du menu/footer de navigation.
3.  **Correction de la 404** :
    *   Uniformiser le design.
    *   Corriger le lien de retour pour qu'il pointe vers la racine (`/`) et non une URL absolue qui force un rechargement complet ou des erreurs d'iframe.

## Phase 2 : Uniformisation du Design & Ergonomie
> **Objectif** : Créer une identité visuelle cohérente et corriger les problèmes d'UX (curseur).

1.  **Architecture CSS** :
    *   Créer un fichier `css/style.css` centralisant les variables (couleurs, polices) et les styles communs (reset, boutons, cards).
    *   Nettoyer les styles `<style>` inline dans chaque fichier HTML.
2.  **Curseur Personnalisé & Accessibilité** :
    *   Supprimer `cursor: none` global qui rend la navigation difficile.
    *   Implémenter un curseur personnalisé (flèche stylisée "Cyberpunk") via CSS/JS qui reste visible et contrasté (blanc avec bordure noire ou inversement selon le fond).
    *   S'assurer que le curseur change d'état au survol des liens (pointer).
3.  **Composants Communs** :
    *   Injecter le Header et le Footer de manière consistante sur toutes les pages.

## Phase 3 : Refonte des Statistiques
> **Objectif** : Rendre la page de statistiques fonctionnelle et utile.

1.  **Logique de Tracking (Client-side)** :
    *   Créer `js/tracker.js` à inclure sur toutes les pages.
    *   Utiliser `localStorage` pour persister :
        *   ID Visiteur unique (généré à la première visite).
        *   Nombre de sessions.
        *   Historique des pages vues.
        *   Simulation/Mock de géolocalisation (API tierce ou saisie manuelle stockée) car pas de backend réel.
2.  **Dashboard des Stats** :
    *   Refondre `stats.html` pour lire les données du `localStorage`.
    *   Afficher des vrais graphiques ou indicateurs distincts (Visiteurs Uniques, Pages Vues, Session Actuelle, Origine).

## Phase 4 : Nettoyage & Validation
1.  Supprimer les fichiers obsolètes ou dupliqués (ex: ancienne version stats claire).
2.  Vérifier la navigation complète en local.
3.  Valider le contraste WCAG des textes et du curseur.

---
**Note** : Cette migration se fera sur la branche `fix/site-overhaul`.
