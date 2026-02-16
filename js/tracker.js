/**
 * ================================================================================
 * AI-PULSE - GESTIONNAIRE DE STATISTIQUES ET PRÉFÉRENCES (tracker.js)
 * ================================================================================
 *
 * DESCRIPTION:
 *     Ce fichier gère toutes les données stockées localement dans le navigateur
 *     de l'utilisateur. Aucune donnée n'est envoyée à un serveur externe.
 *
 * FONCTIONNALITÉS:
 *     1. Tracker : Statistiques de visite (pages vues, sessions)
 *     2. PrefsManager : Préférences utilisateur (langue, filtres)
 *     3. ReadHistory : Historique des articles lus
 *     4. Bookmarks : Articles sauvegardés (favoris)
 *
 * STOCKAGE:
 *     Toutes les données sont stockées dans localStorage, qui est :
 *     - Local : Les données restent sur l'ordinateur de l'utilisateur
 *     - Persistant : Les données sont conservées même après fermeture du navigateur
 *     - Limité : Maximum ~5MB par site
 *
 * CONFIDENTIALITÉ:
 *     - Aucun cookie de tracking externe
 *     - Aucune donnée envoyée à des tiers
 *     - L'utilisateur peut effacer ses données à tout moment
 *
 * VERSION: 1.0.0
 * DERNIÈRE MISE À JOUR: Février 2026
 * ================================================================================
 */


/**
 * =============================================================================
 * OBJET : Tracker
 * =============================================================================
 *
 * DESCRIPTION:
 *     Gère les statistiques de visite du site.
 *     Permet de compter les pages vues, les sessions, etc.
 *
 * DONNÉES STOCKÉES (localStorage: 'ai_pulse_stats'):
 *     - visitorId : Identifiant unique (généré localement, pas traçable)
 *     - sessions : Nombre de visites (une session = une visite après 30min d'inactivité)
 *     - pageViews : Nombre total de pages vues
 *     - lastVisit : Date de la dernière visite
 *     - firstVisit : Date de la première visite
 *     - locations : Villes/pays d'où l'utilisateur a visité
 *     - articleClicks : Nombre d'articles cliqués
 *
 * CONFIDENTIALITÉ:
 *     Les données restent sur l'ordinateur de l'utilisateur.
 *     Le visitorId est généré localement et ne permet pas d'identifier la personne.
 */

// Cookie de session first-party (expiration glissante) pour ne pas recompter
// plusieurs fois une session pendant que l'utilisateur navigue.
const AI_PULSE_SESSION_COOKIE = 'ai_pulse_session';
const AI_PULSE_SESSION_MAX_AGE_SEC = 30 * 60; // 30 minutes

const Tracker = {
    // Check if localStorage is available
    isLocalStorageAvailable: function() {
        try {
            const test = '__localStorage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    },

    init: function () {
        if (!this.isLocalStorageAvailable()) {
            console.warn('localStorage is not available. Tracking features will be disabled.');
            return;
        }
        this.trackVisit();

        // Afficher des infos de débogage dans la console
        this.logDebugInfo();
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : getSecureRandomValues()
     * -------------------------------------------------------------------------
     * Remplit un tableau typé avec des valeurs aléatoires.
     *
     * Utilise un générateur cryptographiquement sûr (crypto.getRandomValues)
     * lorsqu'il est disponible, et retombe sur Math.random() sinon.
     */
    getSecureRandomValues: function (typedArray) {
        // Navigateur moderne ou environnement avec crypto.getRandomValues
        var cryptoObj = (typeof globalThis !== 'undefined' && globalThis.crypto) ||
                        (typeof window !== 'undefined' && window.crypto) ||
                        (typeof self !== 'undefined' && self.crypto);

        if (cryptoObj && typeof cryptoObj.getRandomValues === 'function') {
            return cryptoObj.getRandomValues(typedArray);
        }

        // Fallback : utiliser Math.random() (moins sûr, mais garantit le fonctionnement)
        for (var i = 0; i < typedArray.length; i++) {
            typedArray[i] = Math.floor(Math.random() * 256);
        }
        return typedArray;
    },

    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : generateUUID()
     * -------------------------------------------------------------------------
     * Génère un identifiant unique universel (UUID v4).
     *
     * EXEMPLE DE RÉSULTAT:
     *     "a1b2c3d4-e5f6-4789-a012-b34567890abc"
     *
     * FORMAT:
     *     xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
     *     - Le 4 indique la version 4 (basée sur des nombres aléatoires)
     *     - x = chiffre hexadécimal (0-9, a-f)
     *     - y = 8, 9, a, ou b (variante DCE)
     *
     * UTILISATION:
     *     Cet ID est stocké localement et sert à distinguer les visiteurs
     *     dans les statistiques locales. Il ne permet PAS d'identifier
     *     la personne car il n'est pas partagé avec des serveurs.
     */
    generateUUID: function () {
        // Générer 16 octets aléatoires
        var bytes = new Uint8Array(16);
        this.getSecureRandomValues(bytes);

        // Ajuster la version (4) et la variante (RFC 4122)
        bytes[6] = (bytes[6] & 0x0f) | 0x40; // version 4
        bytes[8] = (bytes[8] & 0x3f) | 0x80; // variante 10xxxxxx

        // Convertir en chaîne hexadécimale UUID
        var hex = [];
        for (var i = 0; i < bytes.length; i++) {
            var h = bytes[i].toString(16);
            if (h.length === 1) {
                h = '0' + h;
            }
            hex.push(h);
        }

        return (
            hex[0] + hex[1] + hex[2] + hex[3] + '-' +
            hex[4] + hex[5] + '-' +
            hex[6] + hex[7] + '-' +
            hex[8] + hex[9] + '-' +
            hex[10] + hex[11] + hex[12] + hex[13] + hex[14] + hex[15]
        );
    },

    getCookie: function (name) {
        if (typeof document === 'undefined' || !document.cookie) return null;
        const prefix = name + '=';
        const parts = document.cookie.split(';');
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i].trim();
            if (part.startsWith(prefix)) {
                return decodeURIComponent(part.slice(prefix.length));
            }
        }
        return null;
    },

    // Cree ou rafraichit le cookie de session. Retourne true si nouvelle session.
    ensureSession: function () {
        const existing = this.getCookie(AI_PULSE_SESSION_COOKIE);
        const isNewSession = !existing;
        const sessionId = existing || this.generateUUID();

        if (typeof document !== 'undefined') {
            document.cookie =
                AI_PULSE_SESSION_COOKIE + '=' + encodeURIComponent(sessionId) +
                '; Max-Age=' + AI_PULSE_SESSION_MAX_AGE_SEC +
                '; Path=/; SameSite=Lax';
        }

        return isNewSession;
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : trackVisit()
     * -------------------------------------------------------------------------
     * Enregistre une visite de page.
     *
     * LOGIQUE:
     * 1. Récupère les stats existantes ou crée un nouvel objet
     * 2. Vérifie si c'est une nouvelle session (>30min depuis la dernière visite)
     * 3. Incrémente les compteurs
     * 4. Récupère la localisation (optionnel, max 1x par semaine)
     * 5. Sauvegarde dans localStorage
     */
    trackVisit: function () {
        if (!this.isLocalStorageAvailable()) return;
        
        try {
            let stats = JSON.parse(localStorage.getItem('ai_pulse_stats')) || {
            visitorId: this.generateUUID(),
            sessions: 0,
            pageViews: 0,
            lastVisit: 0,
            firstVisit: Date.now(),
            locations: [],
            articleClicks: 0
        };

        const now = Date.now();

        // Nouvelle session si cookie absent. Le cookie a une expiration glissante.
        if (this.ensureSession()) {
            stats.sessions++;
        }

        // Incrémenter le compteur de pages vues
        stats.pageViews++;

        // Mettre à jour le timestamp de dernière visite
        stats.lastVisit = now;

        // Récupérer la localisation si nécessaire
        // (première visite ou plus de 7 jours depuis la dernière mise à jour)
        if (stats.locations.length === 0 || (now - (stats.lastLocUpdate || 0) > 7 * 24 * 60 * 60 * 1000)) {
            this.fetchLocation(stats);
        } else {
            localStorage.setItem('ai_pulse_stats', JSON.stringify(stats));
        }

        // Sauvegarder immédiatement (au cas où fetchLocation prend du temps)
        localStorage.setItem('ai_pulse_stats', JSON.stringify(stats));

        // Rendre les stats accessibles depuis d'autres scripts
        window.aiPulseStats = stats;
        window.aiPulseTracker = this;
        } catch (e) {
            console.error('Error tracking visit:', e);
        }
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : fetchLocation(stats)
     * -------------------------------------------------------------------------
     * Récupère la localisation approximative de l'utilisateur.
     *
     * FONCTIONNEMENT:
     *     Utilise l'API ipapi.co pour obtenir la ville et le pays
     *     basés sur l'adresse IP publique.
     *
     * CONFIDENTIALITÉ:
     *     - La requête est faite à un service tiers (ipapi.co)
     *     - Seules la ville et le pays sont stockés (pas l'IP)
     *     - Limité à 1 requête par semaine pour éviter le spam
     *
     * @param {Object} stats - Objet de statistiques à mettre à jour
     */
    fetchLocation: function (stats) {
        // Appel à l'API de géolocalisation par IP
        // Important: ne jamais envoyer de cookies a un tiers.
        fetch('https://ipapi.co/json/', { credentials: 'omit', cache: 'no-store' })
            .then(res => res.json())
            .then(data => {
                // Si erreur dans la réponse, ne rien faire
                if (!data || data.error) return;

                // Créer un objet avec les infos de localisation
                const locationObj = {
                    city: data.city,           // Ville
                    country: data.country_name, // Pays
                    timestamp: Date.now()       // Quand cette info a été récupérée
                };

                // Vérifier si cette localisation existe déjà
                const exists = stats.locations.some(l =>
                    l.city === data.city && l.country === data.country_name
                );

                // Ajouter seulement si nouvelle
                if (!exists) {
                    // Réinitialiser si l'ancien format était une chaîne simple
                    if (typeof stats.locations[0] === 'string') {
                        stats.locations = [];
                    }
                    stats.locations.push(locationObj);
                }

                // Noter quand on a fait la dernière mise à jour
                stats.lastLocUpdate = Date.now();

                // Sauvegarder
                localStorage.setItem('ai_pulse_stats', JSON.stringify(stats));
            })
            .catch(() => {
                // Ne jamais casser l'experience si GeoIP est indisponible.
            });
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : trackArticleClick(articleData)
     * -------------------------------------------------------------------------
     * Enregistre un clic sur un article.
     *
     * @param {Object} articleData - Données de l'article
     *   - articleData.url : URL de l'article
     *   - articleData.title : Titre de l'article
     *
     * ACTIONS:
     * 1. Incrémente le compteur de clics
     * 2. Ajoute l'article à l'historique de lecture
     */
    trackArticleClick: function (articleData) {
        if (!this.isLocalStorageAvailable()) return;
        
        try {
            let stats = this.getStats();
            stats.articleClicks = (stats.articleClicks || 0) + 1;
            localStorage.setItem('ai_pulse_stats', JSON.stringify(stats));

            // Also add to read history
            if (
                articleData.url &&
                typeof ReadHistory !== 'undefined' &&
                typeof ReadHistory.markRead === 'function'
            ) {
                ReadHistory.markRead(articleData.url, articleData.title || 'Unknown');
            }

            console.log("Article tracked:", articleData.title);
        } catch (e) {
            console.error('Error tracking article click:', e);
        }
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : getStats()
     * -------------------------------------------------------------------------
     * Récupère les statistiques actuelles.
     *
     * @returns {Object} Objet contenant toutes les statistiques
     */
    getStats: function () {
        return JSON.parse(localStorage.getItem('ai_pulse_stats')) || {
            visitorId: 'Unknown',
            sessions: 0,
            pageViews: 0,
            locations: [],
            articleClicks: 0
        };
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : logDebugInfo()
     * -------------------------------------------------------------------------
     * Affiche des informations de débogage dans la console du navigateur.
     * Utile pour vérifier que le tracker fonctionne.
     */
    logDebugInfo: function () {
        console.log("AI-Pulse Tracker Active. Visitor ID:", this.getStats().visitorId);
    }
};


/**
 * =============================================================================
 * OBJET : PrefsManager
 * =============================================================================
 *
 * DESCRIPTION:
 *     Gère les préférences de l'utilisateur.
 *     Ces préférences sont utilisées pour filtrer les articles affichés.
 *
 * DONNÉES STOCKÉES (localStorage: 'ai_pulse_preferences'):
 *     - lang : Langue préférée ('all', 'en', 'fr')
 *     - categories : Catégories activées/désactivées
 *     - keywords : Mots-clés pour filtrer
 *     - maxArticles : Nombre maximum d'articles à afficher
 */
const PrefsManager = {

    // Clé utilisée pour stocker les préférences dans localStorage
    STORAGE_KEY: 'ai_pulse_preferences',


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : getDefaults()
     * -------------------------------------------------------------------------
     * Retourne les valeurs par défaut des préférences.
     */
    getDefaults: function () {
        return {
            lang: 'all',        // Toutes les langues
            categories: {},     // Toutes les catégories (objet vide = toutes)
            keywords: '',       // Pas de filtrage par mots-clés
            maxArticles: 30     // 30 articles maximum par catégorie
        };
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : load()
     * -------------------------------------------------------------------------
     * Charge les préférences depuis localStorage.
     * Si aucune préférence n'existe, retourne les valeurs par défaut.
     *
     * @returns {Object} Préférences de l'utilisateur
     */
    load: function () {
        try {
            var stored = localStorage.getItem(this.STORAGE_KEY);

            if (stored) {
                var parsed = JSON.parse(stored);

                // S'assurer que toutes les clés par défaut existent
                var defaults = this.getDefaults();
                for (var key in defaults) {
                    if (!(key in parsed)) {
                        parsed[key] = defaults[key];
                    }
                }
                return parsed;
            }
        } catch (e) {
            // Erreur de parsing, ignorer et retourner les défauts
        }

        return this.getDefaults();
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : save(prefs)
     * -------------------------------------------------------------------------
     * Sauvegarde les préférences dans localStorage.
     *
     * @param {Object} prefs - Préférences à sauvegarder
     */
    save: function (prefs) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(prefs));
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : reset()
     * -------------------------------------------------------------------------
     * Supprime les préférences sauvegardées.
     * La prochaine lecture retournera les valeurs par défaut.
     */
    reset: function () {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};


/**
 * =============================================================================
 * OBJET : ReadHistory
 * =============================================================================
 *
 * DESCRIPTION:
 *     Suit les articles que l'utilisateur a déjà lus.
 *     Permet d'afficher une indication visuelle (ex: titre grisé).
 *
 * DONNÉES STOCKÉES (localStorage: 'ai_pulse_read_articles'):
 *     Tableau d'objets avec :
 *     - url : URL de l'article
 *     - title : Titre de l'article
 *     - readAt : Timestamp de lecture
 *
 * LIMITE:
 *     Maximum 500 articles pour éviter de surcharger localStorage.
 */
const ReadHistory = {

    // Clé utilisée pour stocker l'historique dans localStorage
    STORAGE_KEY: 'ai_pulse_read_articles',


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : normalizeUrl(url)
     * -------------------------------------------------------------------------
     * Normalise une URL pour la comparaison.
     * Supprime les paramètres de requête et les slashs finaux.
     *
     * EXEMPLES:
     *     "https://site.com/article?id=1" → "https://site.com/article"
     *     "data/articles/abc123.html" → "article:abc123"
     *
     * @param {string} url - URL à normaliser
     * @returns {string} URL normalisée
     */
    normalizeUrl: function (url) {
        if (!url) return '';

        try {
            // Pour les articles locaux, extraire le hash du nom de fichier
            if (url.includes('data/articles/')) {
                var match = url.match(/data\/articles\/([a-f0-9]+)\.html/);
                if (match) return 'article:' + match[1];
            }

            // Pour les URLs externes, garder seulement le chemin sans paramètres
            var parsed = new URL(url, window.location.origin);
            return parsed.origin + parsed.pathname.replace(/\/$/, '');
        } catch (e) {
            // Fallback simple : couper au ? et supprimer le slash final
            return url.split('?')[0].replace(/\/$/, '');
        }
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : normalizeTitle(title)
     * -------------------------------------------------------------------------
     * Normalise un titre pour la comparaison.
     * Convertit en minuscules et supprime les caractères spéciaux.
     *
     * @param {string} title - Titre à normaliser
     * @returns {string} Titre normalisé
     */
    normalizeTitle: function (title) {
        if (!title) return '';

        return title.toLowerCase()
            .replace(/[^\w\s]/g, ' ')  // Remplacer les caractères spéciaux par des espaces
            .replace(/\s+/g, ' ')       // Regrouper les espaces multiples
            .trim();                     // Supprimer les espaces aux extrémités
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : getAll()
     * -------------------------------------------------------------------------
     * Récupère tous les articles lus.
     *
     * @returns {Array} Liste des articles lus
     */
    getAll: function () {
        try {
            return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
        } catch (e) {
            return [];
        }
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : isRead(url, title)
     * -------------------------------------------------------------------------
     * Vérifie si un article a déjà été lu.
     * Compare par URL ET par titre (pour détecter les doublons).
     *
     * @param {string} url - URL de l'article
     * @param {string} title - Titre de l'article
     * @returns {boolean} true si l'article a été lu
     */
    isRead: function (url, title) {
        var normalizedUrl = this.normalizeUrl(url);
        var normalizedTitle = this.normalizeTitle(title);
        var self = this;

        return this.getAll().some(function (a) {
            // Correspondance par URL OU par titre similaire
            var urlMatch = self.normalizeUrl(a.url) === normalizedUrl;
            var titleMatch = normalizedTitle && self.normalizeTitle(a.title) === normalizedTitle;
            return urlMatch || titleMatch;
        });
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : markRead(url, title)
     * -------------------------------------------------------------------------
     * Marque un article comme lu.
     *
     * @param {string} url - URL de l'article
     * @param {string} title - Titre de l'article
     */
    markRead: function (url, title) {
        try {
            if (!Tracker.isLocalStorageAvailable()) return;
            
            var articles = this.getAll();
            if (!articles.some(function (a) { return a.url === url; })) {
                articles.push({ url: url, title: title, readAt: Date.now() });
                // Keep max 500 entries to avoid localStorage bloat
                // Average article entry ~200 bytes, 500 * 200 = 100KB (well within 5-10MB limit)
                if (articles.length > 500) {
                    articles = articles.slice(-500);
                }
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(articles));
            }
        } catch (e) {
            console.error('Error marking article as read:', e);
            // If localStorage is full, remove oldest entries and try again
            try {
                var articles = this.getAll();
                articles = articles.slice(-250); // Keep only recent 250
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(articles));
            } catch (e2) {
                console.error('Failed to recover from localStorage error:', e2);
            }
        }
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : getCount()
     * -------------------------------------------------------------------------
     * Retourne le nombre d'articles lus.
     */
    getCount: function () {
        return this.getAll().length;
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : clear()
     * -------------------------------------------------------------------------
     * Efface tout l'historique de lecture.
     */
    clear: function () {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};


/**
 * =============================================================================
 * OBJET : Bookmarks
 * =============================================================================
 *
 * DESCRIPTION:
 *     Gère les articles sauvegardés (favoris) par l'utilisateur.
 *
 * DONNÉES STOCKÉES (localStorage: 'ai_pulse_bookmarks'):
 *     Tableau d'objets avec :
 *     - url : URL de l'article
 *     - title : Titre de l'article
 *     - source : Nom de la source
 *     - savedAt : Timestamp de sauvegarde
 */
const Bookmarks = {

    // Clé utilisée pour stocker les favoris dans localStorage
    STORAGE_KEY: 'ai_pulse_bookmarks',


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : getAll()
     * -------------------------------------------------------------------------
     * Récupère tous les articles favoris.
     *
     * @returns {Array} Liste des favoris
     */
    getAll: function () {
        try {
            return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
        } catch (e) {
            return [];
        }
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : isBookmarked(url)
     * -------------------------------------------------------------------------
     * Vérifie si un article est dans les favoris.
     *
     * @param {string} url - URL de l'article
     * @returns {boolean} true si l'article est favori
     */
    isBookmarked: function (url) {
        return this.getAll().some(function (b) {
            return b.url === url;
        });
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : toggle(url, title, source)
     * -------------------------------------------------------------------------
     * Ajoute ou retire un article des favoris.
     *
     * @param {string} url - URL de l'article
     * @param {string} title - Titre de l'article
     * @param {string} source - Nom de la source
     * @returns {boolean} true si ajouté, false si retiré
     */
    toggle: function (url, title, source) {
        var bookmarks = this.getAll();

        // Chercher si l'article existe déjà
        var index = bookmarks.findIndex(function (b) {
            return b.url === url;
        });

        if (index >= 0) {
            // L'article existe, le supprimer
            bookmarks.splice(index, 1);
        } else {
            // L'article n'existe pas, l'ajouter
            bookmarks.push({
                url: url,
                title: title || '',
                source: source || '',
                savedAt: Date.now()
            });
        }

        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookmarks));

        // Retourner true si ajouté, false si supprimé
        return index < 0;
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : remove(url)
     * -------------------------------------------------------------------------
     * Supprime un article des favoris.
     *
     * @param {string} url - URL de l'article à supprimer
     */
    remove: function (url) {
        var bookmarks = this.getAll().filter(function (b) {
            return b.url !== url;
        });
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookmarks));
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : getCount()
     * -------------------------------------------------------------------------
     * Retourne le nombre de favoris.
     */
    getCount: function () {
        return this.getAll().length;
    },


    /**
     * -------------------------------------------------------------------------
     * MÉTHODE : clear()
     * -------------------------------------------------------------------------
     * Efface tous les favoris.
     */
    clear: function () {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};


// =============================================================================
// EXPOSITION GLOBALE
// =============================================================================
// Rendre ces objets accessibles depuis d'autres scripts
// via window.PrefsManager, window.ReadHistory, window.Bookmarks

window.PrefsManager = PrefsManager;
window.ReadHistory = ReadHistory;
window.Bookmarks = Bookmarks;


// =============================================================================
// INITIALISATION
// =============================================================================
// Démarrer le tracker automatiquement au chargement du script

Tracker.init();
