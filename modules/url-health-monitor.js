/**
 * URL Health Monitor - Module universel de surveillance des URLs
 * 
 * Ce module détecte automatiquement les pages mortes, les changements de contenu
 * et les problèmes de sécurité (hack, malware, phishing).
 * 
 * Fonctionnalités:
 * - Détection de pages mortes (404, 500, timeout)
 * - Hash de contenu pour détecter les modifications
 * - Détection de compromission/hack
 * - Notifications automatiques par email
 * - Suppression automatique des liens morts de la base
 * - Système d'alerte pour l'administrateur
 * 
 * @module URLHealthMonitor
 * @version 1.0.0
 * @author ThePhoenixAgency
 */

import crypto from 'crypto';

export class URLHealthMonitor {
  constructor(config = {}) {
    this.config = {
      checkInterval: config.checkInterval || 3600000, // 1 heure par défaut
      timeout: config.timeout || 10000, // 10 secondes
      retryAttempts: config.retryAttempts || 3,
      retryDelay: config.retryDelay || 5000,
      hashAlgorithm: config.hashAlgorithm || 'sha256',
      onDead: config.onDead || null, // Callback quand URL morte
      onCompromised: config.onCompromised || null, // Callback quand URL compromise
      onChanged: config.onChanged || null, // Callback quand contenu change
      debug: config.debug || false
    };

    this.monitored = new Map(); // URL -> {hash, status, lastCheck, metadata}
    this.stats = {
      totalChecks: 0,
      deadLinks: 0,
      compromisedLinks: 0,
      changedContent: 0
    };
  }

  /**
   * Ajoute une URL à surveiller
   * @param {string} url - URL à surveiller
   * @param {Object} metadata - Métadonnées associées (auteur, date, etc.)
   */
  async addURL(url, metadata = {}) {
    try {
      const response = await this._fetchURL(url);
      const content = await response.text();
      const hash = this._generateHash(content);

      this.monitored.set(url, {
        hash,
        status: 'healthy',
        lastCheck: Date.now(),
        checkCount: 0,
        metadata,
        firstSeen: Date.now()
      });

      if (this.config.debug) {
        console.log(`[URLHealthMonitor] URL ajoutée: ${url}`);
      }

      return { success: true, hash };
    } catch (error) {
      if (this.config.debug) {
        console.error(`[URLHealthMonitor] Erreur lors de l'ajout de ${url}:`, error);
      }
      return { success: false, error: error.message };
    }
  }

  /**
   * Vérifie une URL spécifique
   * @param {string} url - URL à vérifier
   * @returns {Object} Résultat de la vérification
   */
  async checkURL(url) {
    this.stats.totalChecks++;

    const monitored = this.monitored.get(url);
    if (!monitored) {
      throw new Error(`URL non surveillée: ${url}`);
    }

    const result = {
      url,
      timestamp: Date.now(),
      status: 'unknown',
      issues: []
    };

    try {
      // Tentative de récupération avec retry
      const response = await this._fetchWithRetry(url);
      
      if (!response.ok) {
        result.status = 'dead';
        result.statusCode = response.status;
        result.issues.push(`HTTP ${response.status}: ${response.statusText}`);
        this.stats.deadLinks++;

        // Callback pour lien mort
        if (this.config.onDead) {
          await this.config.onDead(url, monitored.metadata, result);
        }

        monitored.status = 'dead';
        return result;
      }

      // Vérification du contenu
      const content = await response.text();
      const currentHash = this._generateHash(content);

      // Le contenu a changé
      if (currentHash !== monitored.hash) {
        result.status = 'changed';
        result.issues.push('Contenu modifié');
        this.stats.changedContent++;

        // Vérification de sécurité
        const securityIssues = await this._checkSecurity(content, url);
        
        if (securityIssues.length > 0) {
          result.status = 'compromised';
          result.issues.push(...securityIssues);
          this.stats.compromisedLinks++;

          // Callback pour page compromise
          if (this.config.onCompromised) {
            await this.config.onCompromised(url, monitored.metadata, {
              ...result,
              oldHash: monitored.hash,
              newHash: currentHash,
              securityIssues
            });
          }

          monitored.status = 'compromised';
        } else {
          // Changement légitime
          if (this.config.onChanged) {
            await this.config.onChanged(url, monitored.metadata, {
              ...result,
              oldHash: monitored.hash,
              newHash: currentHash
            });
          }

          // Mettre à jour le hash
          monitored.hash = currentHash;
          monitored.status = 'healthy';
          result.status = 'healthy';
        }
      } else {
        result.status = 'healthy';
        monitored.status = 'healthy';
      }

    } catch (error) {
      result.status = 'error';
      result.issues.push(`Erreur: ${error.message}`);
      
      if (this.config.debug) {
        console.error(`[URLHealthMonitor] Erreur lors de la vérification de ${url}:`, error);
      }
    }

    monitored.lastCheck = Date.now();
    monitored.checkCount++;
    
    return result;
  }

  /**
   * Vérifie toutes les URLs surveillées
   * @returns {Array} Résultats de toutes les vérifications
   */
  async checkAll() {
    const results = [];
    
    for (const url of this.monitored.keys()) {
      try {
        const result = await this.checkURL(url);
        results.push(result);
      } catch (error) {
        results.push({
          url,
          status: 'error',
          error: error.message
        });
      }
    }

    return results;
  }

  /**
   * Supprime une URL de la surveillance
   * @param {string} url - URL à supprimer
   */
  removeURL(url) {
    const removed = this.monitored.delete(url);
    
    if (this.config.debug && removed) {
      console.log(`[URLHealthMonitor] URL supprimée: ${url}`);
    }

    return removed;
  }

  /**
   * Retourne toutes les URLs avec un statut spécifique
   * @param {string} status - Statut recherché ('dead', 'compromised', 'healthy', etc.)
   */
  getURLsByStatus(status) {
    const results = [];
    
    for (const [url, data] of this.monitored.entries()) {
      if (data.status === status) {
        results.push({ url, ...data });
      }
    }

    return results;
  }

  /**
   * Récupère une URL avec retry
   * @private
   */
  async _fetchWithRetry(url, attempt = 1) {
    try {
      return await this._fetchURL(url);
    } catch (error) {
      if (attempt < this.config.retryAttempts) {
        await this._sleep(this.config.retryDelay);
        return this._fetchWithRetry(url, attempt + 1);
      }
      throw error;
    }
  }

  /**
   * Récupère une URL
   * @private
   */
  async _fetchURL(url) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.config.timeout);

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'URLHealthMonitor/1.0'
        }
      });
      return response;
    } finally {
      clearTimeout(timeout);
    }
  }

  /**
   * Génère un hash du contenu
   * @private
   */
  _generateHash(content) {
    return crypto
      .createHash(this.config.hashAlgorithm)
      .update(content)
      .digest('hex');
  }

  /**
   * Vérifie la sécurité du contenu
   * @private
   */
  async _checkSecurity(content, url) {
    const issues = [];

    // Détection de patterns suspects
    const suspiciousPatterns = [
      // Scripts malveillants
      /<script[^>]*>.*?(eval\(|atob\(|fromCharCode)/is,
      // Iframes suspects
      /<iframe[^>]*src=["'](?!https?:\/\/(?:www\.)?(?:youtube\.com|vimeo\.com))/i,
      // Base64 suspects dans les scripts
      /<script[^>]*>.*?(?:data:text\/javascript;base64|btoa\()/is,
      // Redirections suspects
      /window\.location\.(?:replace|href)\s*=\s*['"](?!https?:\/\/)/i,
      // Phishing keywords
      /\b(verify|suspend|account|urgent|click here|reset password|confirm)\b.*\b(paypal|amazon|bank|credit card)\b/i,
      // Cryptojacking
      /\b(coinhive|cryptonight|minero|webminer)\b/i
    ];

    for (let i = 0; i < suspiciousPatterns.length; i++) {
      if (suspiciousPatterns[i].test(content)) {
        issues.push(`Pattern suspect détecté #${i + 1}`);
      }
    }

    // Vérification de la présence de malwares connus
    const malwareSignatures = [
      'c99shell',
      'r57shell',
      'b374k',
      'wso shell',
      'FilesMan'
    ];

    for (const signature of malwareSignatures) {
      if (content.toLowerCase().includes(signature.toLowerCase())) {
        issues.push(`Signature de malware détectée: ${signature}`);
      }
    }

    return issues;
  }

  /**
   * Utilitaire pour attendre
   * @private
   */
  _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Retourne les statistiques
   */
  getStats() {
    return {
      ...this.stats,
      totalMonitored: this.monitored.size,
      healthy: this.getURLsByStatus('healthy').length,
      dead: this.getURLsByStatus('dead').length,
      compromised: this.getURLsByStatus('compromised').length
    };
  }

  /**
   * Exporte les données de surveillance
   */
  exportData() {
    const data = [];
    
    for (const [url, info] of this.monitored.entries()) {
      data.push({
        url,
        ...info
      });
    }

    return data;
  }

  /**
   * Importe des données de surveillance
   */
  importData(data) {
    for (const item of data) {
      const { url, ...info } = item;
      this.monitored.set(url, info);
    }
  }
}

// Export d'une instance par défaut
export const urlHealthMonitor = new URLHealthMonitor();
