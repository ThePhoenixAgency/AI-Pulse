/**
 * AI-Pulse Anonymous Analytics Tracker
 * Privacy-first analytics with country-level geolocation only
 */

class AIPlulseTracker {
    constructor() {
        this.sessionId = this.getOrCreateSession();
        this.startTime = Date.now();
        this.country = null;
        this.apiEndpoint = 'https://api.github.com'; // Will be replaced with Supabase
        this.initialized = false;
    }

    /**
     * Generate or retrieve session ID from localStorage
     * Session expires after 30 minutes of inactivity
     */
    getOrCreateSession() {
        const SESSION_DURATION = 30 * 60 * 1000; // 30 minutes
        const stored = localStorage.getItem('aipulse_session');

        if (stored) {
            const session = JSON.parse(stored);
            const now = Date.now();

            // Check if session is still valid
            if (now - session.lastActivity < SESSION_DURATION) {
                session.lastActivity = now;
                localStorage.setItem('aipulse_session', JSON.stringify(session));
                return session.id;
            }
        }

        // Create new session
        const newSession = {
            id: this.generateSessionId(),
            created: Date.now(),
            lastActivity: Date.now()
        };

        localStorage.setItem('aipulse_session', JSON.stringify(newSession));
        return newSession.id;
    }

    /**
     * Generate a unique session ID using cryptographically secure randomness
     * (not personally identifiable)
     */
    generateSessionId() {
        // Use crypto.getRandomValues for secure randomness instead of Math.random()
        const randomBytes = new Uint8Array(6);
        crypto.getRandomValues(randomBytes);
        const randomHex = Array.from(randomBytes).map(b => b.toString(16).padStart(2, '0')).join('');
        return 'sess_' + Date.now() + '_' + randomHex;
    }

    /**
     * Get country from IP using free geolocation API
     * Only stores country code, no IP address is ever stored
     */
    async getCountry() {
        if (this.country) return this.country;

        try {
            // Using ipapi.co free tier (no API key needed, 1000 req/day)
            const response = await fetch('https://ipapi.co/json/', {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                const data = await response.json();
                this.country = {
                    code: data.country_code || 'UNKNOWN',
                    name: data.country_name || 'Unknown'
                };
            } else {
                this.country = { code: 'UNKNOWN', name: 'Unknown' };
            }
        } catch (error) {
            console.log('Geolocation unavailable, using UNKNOWN');
            this.country = { code: 'UNKNOWN', name: 'Unknown' };
        }

        return this.country;
    }

    /**
     * Initialize tracker - called once per page load
     */
    async init() {
        if (this.initialized) return;

        await this.getCountry();
        await this.trackPageView();
        this.setupBeforeUnload();
        this.initialized = true;
    }

    /**
     * Track page view (visit)
     */
    async trackPageView() {
        const isNewSession = !localStorage.getItem('aipulse_tracked_session');

        // Only count as new visit if it's a new session
        if (!isNewSession) {
            console.log('Session already tracked, skipping duplicate');
            return;
        }

        const visitData = {
            session_id: this.sessionId,
            country_code: this.country.code,
            country_name: this.country.name,
            timestamp: new Date().toISOString(),
            user_agent: this.getSimpleUserAgent(),
            referrer: document.referrer || 'direct',
            page_url: window.location.pathname
        };

        // Mark this session as tracked
        localStorage.setItem('aipulse_tracked_session', 'true');

        await this.sendToBackend('pageview', visitData);
    }

    /**
     * Track article click
     */
    async trackArticleClick(articleData) {
        const clickData = {
            session_id: this.sessionId,
            article_title: articleData.title || 'Unknown',
            article_source: articleData.source || 'Unknown',
            article_url: articleData.url || '',
            timestamp: new Date().toISOString(),
            country_code: this.country?.code || 'UNKNOWN'
        };

        await this.sendToBackend('article_click', clickData);
    }

    /**
     * Track time spent on site (called on page unload)
     */
    async trackTimeSpent() {
        const timeSpent = Math.floor((Date.now() - this.startTime) / 1000); // in seconds

        const timeData = {
            session_id: this.sessionId,
            time_spent_seconds: timeSpent,
            timestamp: new Date().toISOString()
        };

        // Use sendBeacon for reliable delivery on page unload
        const blob = new Blob([JSON.stringify(timeData)], { type: 'application/json' });

        if (navigator.sendBeacon) {
            navigator.sendBeacon('/api/track/time', blob);
        } else {
            await this.sendToBackend('time_spent', timeData);
        }
    }

    /**
     * Get simplified user agent (browser + OS, no version numbers)
     */
    getSimpleUserAgent() {
        const ua = navigator.userAgent;
        let browser = 'Unknown';
        let os = 'Unknown';

        // Detect browser
        if (ua.includes('Firefox')) browser = 'Firefox';
        else if (ua.includes('Chrome')) browser = 'Chrome';
        else if (ua.includes('Safari')) browser = 'Safari';
        else if (ua.includes('Edge')) browser = 'Edge';

        // Detect OS
        if (ua.includes('Windows')) os = 'Windows';
        else if (ua.includes('Mac')) os = 'macOS';
        else if (ua.includes('Linux')) os = 'Linux';
        else if (ua.includes('Android')) os = 'Android';
        else if (ua.includes('iOS')) os = 'iOS';

        return `${browser} on ${os}`;
    }

    /**
     * Setup beforeunload handler to track time spent
     */
    setupBeforeUnload() {
        window.addEventListener('beforeunload', () => {
            this.trackTimeSpent();
        });

        // Also track on visibility change (mobile browsers)
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                this.trackTimeSpent();
            }
        });
    }

    /**
     * Send data to backend (Supabase or API endpoint)
     */
    async sendToBackend(eventType, data) {
        // Store locally for now (will be replaced with Supabase)
        const stats = this.getLocalStats();

        if (!stats[eventType]) {
            stats[eventType] = [];
        }

        stats[eventType].push(data);

        // Keep only last 1000 events per type
        if (stats[eventType].length > 1000) {
            stats[eventType] = stats[eventType].slice(-1000);
        }

        localStorage.setItem('aipulse_stats', JSON.stringify(stats));

        console.log(`📊 Tracked ${eventType}:`, data);

        // TODO: Send to Supabase when configured
        // await fetch(SUPABASE_URL, { method: 'POST', body: JSON.stringify(data) });
    }

    /**
     * Get stats from localStorage
     */
    getLocalStats() {
        const stored = localStorage.getItem('aipulse_stats');
        return stored ? JSON.parse(stored) : {};
    }

    /**
     * Get aggregated stats for stats page
     */
    getAggregatedStats() {
        const stats = this.getLocalStats();
        const pageviews = stats.pageview || [];
        const articleClicks = stats.article_click || [];
        const timeSpent = stats.time_spent || [];

        // Count unique sessions
        const uniqueSessions = new Set(pageviews.map(p => p.session_id));

        // Group by country
        const countryStats = {};
        pageviews.forEach(view => {
            const country = view.country_name || 'Unknown';
            if (!countryStats[country]) {
                countryStats[country] = 0;
            }
            countryStats[country]++;
        });

        // Calculate average time spent
        const avgTimeSpent = timeSpent.length > 0
            ? Math.floor(timeSpent.reduce((sum, t) => sum + t.time_spent_seconds, 0) / timeSpent.length)
            : 0;

        // Top articles
        const articleStats = {};
        articleClicks.forEach(click => {
            const title = click.article_title;
            if (!articleStats[title]) {
                articleStats[title] = {
                    title: title,
                    source: click.article_source,
                    clicks: 0
                };
            }
            articleStats[title].clicks++;
        });

        const topArticles = Object.values(articleStats)
            .sort((a, b) => b.clicks - a.clicks)
            .slice(0, 10);

        return {
            totalVisits: uniqueSessions.size,
            totalPageViews: pageviews.length,
            totalArticleClicks: articleClicks.length,
            averageTimeSpent: avgTimeSpent,
            countryStats: countryStats,
            topArticles: topArticles,
            browserStats: this.aggregateByField(pageviews, 'user_agent')
        };
    }

    /**
     * Helper to aggregate by field
     */
    aggregateByField(data, field) {
        const result = {};
        data.forEach(item => {
            const value = item[field] || 'Unknown';
            result[value] = (result[value] || 0) + 1;
        });
        return result;
    }
}

// Global instance
window.aiPulseTracker = new AIPlulseTracker();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.aiPulseTracker.init();
    });
} else {
    window.aiPulseTracker.init();
}
