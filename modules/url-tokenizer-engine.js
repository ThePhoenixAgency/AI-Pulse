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
      defaultToken: config.defaultToken || '',
      rules: config.rules || [],
      debug: config.debug || false
    };
    
    this.stats = {
      totalProcessed: 0,
      successfulTokenizations: 0,
      failedTokenizations: 0
    };
  }

  /**
   * Ajoute une règle de tokenisation
   * @param {Object} rule - Règle de tokenisation
   * @param {string} rule.pattern - Pattern de l'URL (regex ou string)
   * @param {string} rule.paramName - Nom du paramètre à ajouter
   * @param {string} rule.token - Token à injecter
   * @param {string} rule.position - Position: 'query', 'path', 'hash'
   * @param {Function} rule.transformer - Fonction de transformation optionnelle
   */
  addRule(rule) {
    if (!rule.pattern || !rule.token) {
      throw new Error('Une règle doit contenir au minimum un pattern et un token');
    }
    
    this.config.rules.push({
      pattern: rule.pattern,
      paramName: rule.paramName || 'ref',
      token: rule.token,
      position: rule.position || 'query',
      transformer: rule.transformer || null,
      priority: rule.priority || 0
    });
    
    // Trier par priorité (plus haute en premier)
    this.config.rules.sort((a, b) => b.priority - a.priority);
    
    if (this.config.debug) {
      console.log('[URLTokenizer] Règle ajoutée:', rule);
    }
  }

  /**
   * Tokenise une URL selon les règles configurées
   * @param {string} url - URL à tokeniser
   * @param {Object} options - Options supplémentaires
   * @returns {string} URL tokenisée
   */
  tokenize(url, options = {}) {
    this.stats.totalProcessed++;
    
    try {
      const urlObj = new URL(url);
      let matchedRule = null;
      
      // Recherche de la règle correspondante
      for (const rule of this.config.rules) {
        if (this._matchesPattern(urlObj, rule.pattern)) {
          matchedRule = rule;
          break;
        }
      }
      
      if (!matchedRule) {
        if (this.config.debug) {
          console.log('[URLTokenizer] Aucune règle trouvée pour:', url);
        }
        return url;
      }
      
      // Application de la tokenisation
      const tokenizedUrl = this._applyToken(urlObj, matchedRule, options);
      this.stats.successfulTokenizations++;
      
      if (this.config.debug) {
        console.log('[URLTokenizer] URL tokenisée:', {
          original: url,
          tokenized: tokenizedUrl,
          rule: matchedRule
        });
      }
      
      return tokenizedUrl;
      
    } catch (error) {
      this.stats.failedTokenizations++;
      
      if (this.config.debug) {
        console.error('[URLTokenizer] Erreur lors de la tokenisation:', error);
      }
      
      return url; // Retourne l'URL originale en cas d'erreur
    }
  }

  /**
   * Tokenise toutes les URLs dans un texte HTML
   * @param {string} html - Contenu HTML
   * @returns {string} HTML avec URLs tokenisées
   */
  tokenizeHTML(html) {
    const linkRegex = /href=["']([^"']+)["']/gi;
    
    return html.replace(linkRegex, (match, url) => {
      const tokenizedUrl = this.tokenize(url);
      return `href="${tokenizedUrl}"`;
    });
  }

  /**
   * Tokenise tous les liens dans le DOM
   * @param {HTMLElement} container - Conteneur des liens (par défaut: document)
   */
  tokenizeDOM(container = document) {
    const links = container.querySelectorAll('a[href]');
    let count = 0;
    
    links.forEach(link => {
      const originalHref = link.getAttribute('href');
      
      // Skip les liens internes et les ancres
      if (originalHref.startsWith('#') || originalHref.startsWith('javascript:')) {
        return;
      }
      
      try {
        const tokenizedUrl = this.tokenize(originalHref);
        
        if (tokenizedUrl !== originalHref) {
          link.setAttribute('href', tokenizedUrl);
          link.setAttribute('data-original-href', originalHref);
          count++;
        }
      } catch (error) {
        if (this.config.debug) {
          console.warn('[URLTokenizer] Erreur sur le lien:', originalHref, error);
        }
      }
    });
    
    if (this.config.debug) {
      console.log(`[URLTokenizer] ${count} liens tokenisés dans le DOM`);
    }
    
    return count;
  }

  /**
   * Vérifie si une URL correspond au pattern
   * @private
   */
  _matchesPattern(urlObj, pattern) {
    if (pattern instanceof RegExp) {
      return pattern.test(urlObj.href);
    }
    
    if (typeof pattern === 'string') {
      return urlObj.hostname.includes(pattern) || urlObj.href.includes(pattern);
    }
    
    if (typeof pattern === 'function') {
      return pattern(urlObj);
    }
    
    return false;
  }

  /**
   * Applique le token à l'URL
   * @private
   */
  _applyToken(urlObj, rule, options) {
    let token = options.token || rule.token;
    
    // Transformation du token si nécessaire
    if (rule.transformer) {
      token = rule.transformer(token, urlObj);
    }
    
    switch (rule.position) {
      case 'query':
        urlObj.searchParams.set(rule.paramName, token);
        break;
        
      case 'path':
        // Ajoute le token au path
        urlObj.pathname += `/${rule.paramName}/${token}`;
        break;
        
      case 'hash':
        // Ajoute le token au hash
        urlObj.hash = `${rule.paramName}=${token}`;
        break;
        
      case 'subdomain':
        // Ajoute le token comme sous-domaine
        urlObj.hostname = `${token}.${urlObj.hostname}`;
        break;
    }
    
    return urlObj.toString();
  }

  /**
   * Retourne les statistiques d'utilisation
   */
  getStats() {
    return {
      ...this.stats,
      successRate: this.stats.totalProcessed > 0 
        ? (this.stats.successfulTokenizations / this.stats.totalProcessed * 100).toFixed(2) + '%'
        : '0%'
    };
  }

  /**
   * Réinitialise les statistiques
   */
  resetStats() {
    this.stats = {
      totalProcessed: 0,
      successfulTokenizations: 0,
      failedTokenizations: 0
    };
  }

  /**
   * Exporte la configuration
   */
  exportConfig() {
    return JSON.stringify({
      defaultToken: this.config.defaultToken,
      rules: this.config.rules.map(rule => ({
        pattern: rule.pattern.toString(),
        paramName: rule.paramName,
        token: rule.token,
        position: rule.position,
        priority: rule.priority
      }))
    }, null, 2);
  }

  /**
   * Importe une configuration
   */
  importConfig(configJson) {
    try {
      const config = JSON.parse(configJson);
      this.config.defaultToken = config.defaultToken;
      this.config.rules = [];
      
      config.rules.forEach(rule => {
        this.addRule({
          ...rule,
          pattern: new RegExp(rule.pattern)
        });
      });
      
      return true;
    } catch (error) {
      console.error('[URLTokenizer] Erreur lors de l\'importation:', error);
      return false;
    }
  }
}

// Export d'une instance par défaut
export const urlTokenizer = new URLTokenizerEngine();
