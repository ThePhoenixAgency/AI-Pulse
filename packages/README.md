# 📦 PACKAGES - Architecture Modulaire Extractible

> **CRITICAL**: Chaque module est conçu comme un package autonome extractible vers d'autres repos.
> Pas de dépendances croisées - API/wrapper/MCP callable - Backend masqué - Iframe sandboxé.

## 🎯 Principes d'Architecture

### Isolation Totale
- **Aucune table partagée** - Chaque projet a ses propres tables préfixées
- **PhoenixOS_*** pour Labex
- **Bulletin_*** pour Météo  
- **Pulse_*** pour AI-Pulse
- **RLS activé** sur toutes les tables pour sécurité

### Modularité
- Chaque package dans son propre dossier
- Extractible vers autre repo sans modifications
- API/wrapper appelable depuis n'importe où
- Backend jamais exposé (gitignore)

### Sécurité
- Iframe encapsulé pour zéro injection
- Pas de headers révélateurs
- Stratégie masquée (README = epics seulement)
- GitHub Auth WHITELIST (utilisateur unique)

---

## 📁 Structure des Packages

```
packages/
├── url-tokenizer/          # Moteur universel de tokenisation d'URLs
├── url-health-monitor/     # Monitoring + alertes email compromission
├── newsletter-manager/     # Gestion prospects + token désabonnement
├── daily-ai-generator/     # Daily AI Content Generator multi-sources
├── seo-prerender/          # Middleware SEO (sitemap, meta, prerender.io-like)
├── bulletin-meteo/         # Package Bulletin Météo complet
├── phoenixos-labex/        # Package PhoenixOS/Labex complet
└── pulse-core/             # Package AI-Pulse core
```

---

## 🔧 Packages Détaillés

### 1. **url-tokenizer** 
**Moteur universel de tokenisation pour n'importe quel site**

**Tables**: `Pulse_tokenized_urls`

**Fonctionnalités**:
- Tokenisation universelle (Amazon, AliExpress, Booking, etc.)
- Tracking clics + revenus
- Hash content pour détection changements
- Detection pages 404 → auto-suppression

**API**:
```javascript
tokenize(url, platform) → tokenized_url
getStats(url_id) → {clicks, revenue}
checkStatus(url_id) → {active, compromised, dead}
```

---

### 2. **url-health-monitor**
**Monitoring santé URLs + alertes email**

**Tables**: `Pulse_url_health_checks`

**Fonctionnalités**:
- Vérification périodique status codes
- Comparaison hash (détection hack)
- Email alerts via addy.io si:
  - Page 404 → suppression auto
  - Hash changé → alerte audit
  - Site compromis → alerte urgente

**API**:
```javascript
monitorURL(url_id) → health_report
sendAlert(url_id, alert_type) → email_sent
```

---

### 3. **newsletter-manager**
**Gestion newsletter avec prospects permanents**

**Tables**: `Pulse_newsletter_prospects`

**Fonctionnalités**:
- **NEVER DELETE EMAILS** - mark unsubscribed only
- Token unique de désabonnement
- Tracking source d'inscription
- Metadata JSONB pour segmentation

**API**:
```javascript
subscribe(email, source) → {token, subscription_id}
unsubscribe(token) → success
getProspects(filters) → prospect_list
```

---

### 4. **daily-ai-generator**
**Daily AI Content Generator - Multi-sources → Multi-formats**

**Tables**: `Pulse_daily_ai_content`

**Fonctionnalités complètes** (specs verbatim preservées):

**Phase 1: News Gathering**
- Scrape 10+ sources AI (TechCrunch, VentureBeat, AI Business, etc.)
- Filter par keywords: AI, ML, LLM, GenAI, etc.
- Sélection item PLUS RÉCENT (48h max) + HIGH-IMPACT

**Phase 2: Content Generation**
- **Instagram Reel Script** (15-45s, hook+body+CTA)
- **LinkedIn Post** (800-1200 chars, pro tone, hashtags)
- **X Thread** (4-8 tweets, 280 chars max, emojis)

**Phase 3: Image + Email**
- Generate image (DALL-E/Midjourney/Stable Diffusion)
- Package email avec:
  - Subject: "[Daily AI] {news_title}"
  - Body: 3 formats + image inline + attached
  - Send via addy.io SMTP

**API**:
```javascript
generateDaily() → {content_id, email_sent}
getLatestContent() → content_object
```

**Workflow GitHub Action** (cron daily 8am CET)

---

### 5. **seo-prerender**
**Middleware SEO - Sitemap + Meta + Prerender**

**Fonctionnalités**:
- Sitemap.xml auto-généré
- Meta tags dynamiques (Open Graph, Twitter Cards)
- Prerender.io-like pour bots (Google, Facebook)
- Injection meta sans modification index.html

**API**:
```javascript
generateSitemap() → sitemap.xml
injectMeta(page_url) → meta_tags
handleBotRequest(user_agent) → prerendered_html
```

---

### 6. **bulletin-meteo**
**Package complet Bulletin Météo**

**Tables**: `Bulletin_*` (7 tables)

**Fonctionnalités**:
- Weather API integration
- Alerts management
- City photos
- Newsletter subscriptions

**Extractible vers repo séparé**

---

### 7. **phoenixos-labex**
**Package complet PhoenixOS/Labex**

**Tables**: `PhoenixOS_*` (10 tables)

**Fonctionnalités**:
- VM profiles + sessions
- Marketplace listings/transactions
- Injection scripts (profile-sync)
- User profiles + files

**Extractible vers repo séparé**

---

### 8. **pulse-core**
**Package core AI-Pulse**

**Tables**: `Pulse_*` (8 tables)

**Fonctionnalités**:
- News aggregation (6 sources premium)
- Anti-paywall system
- Webhook auto-update
- Paginated display
- URL tokenization integration
- Newsletter integration

---

## 🔐 Secrets Management

**GitHub Secrets requis** (already configured):

### Supabase
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

### Email (addy.io)
- `ADDY_IMAP_HOST`
- `ADDY_IMAP_USER` 
- `ADDY_IMAP_PASSWORD`
- `ADDY_SMTP_HOST`
- `ADDY_SMTP_PORT`
- `ADDY_SMTP_USER`
- `ADDY_SMTP_PASSWORD`

### AI Services
- `OPENAI_API_KEY` (pour Daily AI Generator)
- `ANTHROPIC_API_KEY` (backup)

---

## 🚀 Installation d'un Package

Chaque package est extractible:

```bash
# Copier le dossier vers autre repo
cp -r packages/url-tokenizer /path/to/other-repo/

# Installer dépendances
cd /path/to/other-repo/url-tokenizer
npm install

# Configurer .env
cp .env.example .env
# Remplir SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

# Run
npm start
```

---

## 📝 TODO

- [ ] Implémenter chaque package
- [ ] Tests unitaires par package
- [ ] Documentation API de chaque package
- [ ] GitHub Actions workflows
- [ ] Docker containers (optionnel)
- [ ] MCP wrappers (Model Context Protocol)

---

## 🎯 Backlog Questions

**3 questions à la fois, attendre réponse avant de continuer**:

1. API keys manquantes à configurer?
2. Priorité d'implémentation des packages (ordre)?
3. Autres intégrations nécessaires (Zapier, n8n, etc.)?
