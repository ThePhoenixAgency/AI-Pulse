/**
 * URL Tokenizer Engine - Moteur universel de tokenisation d'URLs
 * 
 * Ce module permet d'injecter automatiquement des tokens d'affiliation
 * dans n'importe quelle URL selon des règles configurables.
 * 
 * @module URLTokenizerEngine
 * @version 1.0.0
 * @author ThePhoenixAgency
 */

export class URLTokenizerEngine {
    constructor(config = {}) {
        this.config = {
            debug: config.debug || false,
            tokenPatterns: config.tokenPatterns || {},
            excludedDomains: config.excludedDomains || [],
            maxDepth: config.maxDepth || 10
        };
        
        this.stats = {
            processed: 0,
            modified: 0,
            errors: 0
        };
    }

    /**
     * Initialise l'engine et commence le monitoring
     */
    init() {
        if (this.config.debug) {
            console.log('🚀 URL Tokenizer Engine - Initialisation...');
        }
        
        // Observer les changements du DOM
        this.observeDOM();
        
        // Traiter les liens existants
        this.processExistingLinks();
        
        if (this.config.debug) {
            console.log('✅ Engine initialisé avec succès');
        }
    }

    /**
     * Observe les changements du DOM pour détecter les nouveaux liens
     */
    observeDOM() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) { // Element node
                            this.processNode(node);
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        this.observer = observer;
    }

    /**
     * Traite un noeud du DOM
     */
    processNode(node) {
        if (node.tagName === 'A') {
            this.processLink(node);
        } else if (node.querySelectorAll) {
            const links = node.querySelectorAll('a');
            links.forEach(link => this.processLink(link));
        }
    }

    /**
     * Traite tous les liens existants dans la page
     */
    processExistingLinks() {
        const links = document.querySelectorAll('a[href]');
        links.forEach(link => this.processLink(link));
    }

    /**
     * Traite un lien individuel
     */
    processLink(link) {
        try {
            this.stats.processed++;
            
            const originalHref = link.getAttribute('href');
            
            // Skip les liens internes, ancres et les schémas dangereux
            if (!originalHref || 
                originalHref.startsWith('#') || 
                originalHref.startsWith('javascript:') ||
                originalHref.startsWith('data:') ||
                originalHref.startsWith('vbscript:') ||
                originalHref.startsWith('mailto:') ||
                originalHref.startsWith('tel:')) {
                return;
            }

            // Vérifier si le domaine est exclu
            if (this.isExcludedDomain(originalHref)) {
                return;
            }

            // Tokeniser l'URL
            const tokenizedUrl = this.tokenizeURL(originalHref);
            
            if (tokenizedUrl !== originalHref) {
                link.setAttribute('href', tokenizedUrl);
                link.setAttribute('data-original-href', originalHref);
                this.stats.modified++;
                
                if (this.config.debug) {
                    console.log(`🔗 ${originalHref} → ${tokenizedUrl}`);
                }
            }
        } catch (error) {
            this.stats.errors++;
            if (this.config.debug) {
                console.error('❌ Erreur lors du traitement du lien:', error);
            }
        }
    }

    /**
     * Vérifie si le domaine est exclu
     */
    isExcludedDomain(url) {
        try {
            const urlObj = new URL(url, window.location.href);
            const hostname = urlObj.hostname.toLowerCase();
            
            return this.config.excludedDomains.some(domain => 
                hostname.includes(domain.toLowerCase())
            );
        } catch {
            return false;
        }
    }

    /**
     * Tokenise une URL selon les règles configurées
     */
    tokenizeURL(url) {
        try {
            const urlObj = new URL(url, window.location.href);
            const hostname = urlObj.hostname.toLowerCase();
            
            // Trouver les patterns correspondants
            for (const [domain, config] of Object.entries(this.config.tokenPatterns)) {
                if (hostname.includes(domain.toLowerCase())) {
                    return this.applyTokenPattern(urlObj, config);
                }
            }
            
            return url;
        } catch {
            return url;
        }
    }

    /**
     * Applique un pattern de token à une URL
     */
    applyTokenPattern(urlObj, config) {
        const params = new URLSearchParams(urlObj.search);
        
        // Ajouter ou remplacer les paramètres
        Object.entries(config.params || {}).forEach(([key, value]) => {
            params.set(key, value);
        });
        
        urlObj.search = params.toString();
        return urlObj.toString();
    }

    /**
     * Arrête l'engine
     */
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        
        if (this.config.debug) {
            console.log('📊 Statistiques finales:', this.stats);
        }
    }

    /**
     * Retourne les statistiques
     */
    getStats() {
        return { ...this.stats };
    }
}

// Export singleton
export default URLTokenizerEngine;
