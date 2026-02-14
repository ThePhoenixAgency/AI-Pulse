/**
 * ================================================================================
 * AI-PULSE - GESTIONNAIRE D'INTERFACE UTILISATEUR (ui.js)
 * ================================================================================
 *
 * DESCRIPTION:
 *     Ce fichier gère les interactions de l'interface utilisateur communes
 *     à toutes les pages du site.
 *
 * FONCTIONNALITÉS:
 *     1. Mise en surbrillance du lien de navigation actif
 *     2. Curseur personnalisé (désactivé actuellement)
 *
 * UTILISATION:
 *     Ce script est chargé dans toutes les pages HTML via :
 *     <script src="./js/ui.js"></script>
 *
 *     Il s'exécute automatiquement quand la page est chargée.
 *
 * VERSION: 1.0.0
 * DERNIÈRE MISE À JOUR: Février 2026
 * ================================================================================
 */


/**
 * =============================================================================
 * POINT D'ENTRÉE PRINCIPAL
 * =============================================================================
 *
 * Ce bloc s'exécute quand le DOM (la structure HTML) est complètement chargé.
 *
 * POURQUOI ATTENDRE ?
 * Si on exécute le code avant que le HTML soit chargé, les éléments
 * comme .nav-links n'existeront pas encore et le code échouera.
 *
 * "DOMContentLoaded" garantit que tout le HTML est prêt.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser le curseur personnalisé (désactivé)
    initCursor();

    // Mettre en surbrillance le lien de la page actuelle
    highlightActiveLink();
});


/**
 * =============================================================================
 * FONCTION : initCursor()
 * =============================================================================
 *
 * DESCRIPTION:
 *     Cette fonction était utilisée pour afficher un curseur personnalisé
 *     (un cercle animé qui suit la souris au lieu de la flèche standard).
 *
 *     Elle est actuellement DÉSACTIVÉE car le curseur par défaut
 *     est plus adapté à l'accessibilité.
 *
 * POURQUOI DÉSACTIVÉ ?
 *     - Accessibilité : certains utilisateurs ont besoin du curseur standard
 *     - Performance : le curseur personnalisé consomme plus de ressources
 *     - Compatibilité : ne fonctionne pas sur tous les appareils
 *
 * POUR RÉACTIVER:
 *     Supprimer le "return;" et ajouter le code du curseur personnalisé.
 */
function initCursor() {
    // Curseur personnalisé désactivé sur demande de l'utilisateur
    return;

    /* CODE DU CURSEUR PERSONNALISÉ (commenté)

    // Créer un élément div pour le curseur
    const cursor = document.createElement('div');
    cursor.id = 'cursor';
    document.body.appendChild(cursor);

    // Suivre la position de la souris
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    */
}


/**
 * =============================================================================
 * FONCTION : highlightActiveLink()
 * =============================================================================
 *
 * DESCRIPTION:
 *     Met en surbrillance le lien de navigation correspondant à la page actuelle.
 *     Par exemple, si on est sur "about.html", le lien "About" sera en cyan.
 *
 * FONCTIONNEMENT:
 *     1. Récupère le nom du fichier actuel depuis l'URL
 *        (ex: "https://site.com/about.html" → "about.html")
 *     2. Parcourt tous les liens de navigation
 *     3. Ajoute la classe "active" au lien correspondant
 *
 * CLASSE CSS "active":
 *     Définie dans style.css, elle change la couleur du lien en cyan
 *     et ajoute un effet de lueur.
 *
 * EXEMPLE:
 *     URL actuelle : https://site.com/about.html
 *     Lien trouvé : <a href="about.html">About</a>
 *     Résultat : <a href="about.html" class="active">About</a>
 */
function highlightActiveLink() {
    // -------------------------------------------------------------------------
    // ÉTAPE 1 : Récupérer le nom du fichier actuel
    // -------------------------------------------------------------------------
    // window.location.pathname donne le chemin de l'URL
    // Exemple : "/AI-Pulse/about.html"
    //
    // .split('/') divise par "/" : ["", "AI-Pulse", "about.html"]
    // .pop() prend le dernier élément : "about.html"
    //
    // || 'index.html' : si le résultat est vide (page d'accueil sans nom),
    //                   on utilise "index.html" par défaut
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // -------------------------------------------------------------------------
    // ÉTAPE 2 : Sélectionner tous les liens de navigation
    // -------------------------------------------------------------------------
    // document.querySelectorAll() trouve tous les éléments qui correspondent
    // au sélecteur CSS donné.
    //
    // '.nav-links a' = tous les <a> à l'intérieur d'un élément .nav-links
    const links = document.querySelectorAll('.nav-links a');

    // -------------------------------------------------------------------------
    // ÉTAPE 3 : Parcourir les liens et marquer celui qui correspond
    // -------------------------------------------------------------------------
    // .forEach() exécute une fonction pour chaque élément de la liste
    links.forEach(link => {
        // Comparer l'attribut href du lien avec le chemin actuel
        // link.getAttribute('href') retourne la valeur de l'attribut href
        // Exemple : "about.html"
        if (link.getAttribute('href') === currentPath) {
            // Ajouter la classe "active" si ça correspond
            link.classList.add('active');
        }
    });
}
