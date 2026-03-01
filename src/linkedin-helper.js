const axios = require('axios');
const fs = require('fs');
const path = require('path');

class LinkedInHelper {
    constructor() {
        this.accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
        this.userId = process.env.LINKEDIN_USER_ID;
        this.historyPath = path.join(__dirname, '..', 'data', 'posted-links.json');

        this._ensureHistoryExists();
    }

    _ensureHistoryExists() {
        const dir = path.dirname(this.historyPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        if (!fs.existsSync(this.historyPath)) {
            fs.writeFileSync(this.historyPath, JSON.stringify([], null, 2));
        }
    }

    isAlreadyPosted(url) {
        try {
            const history = JSON.parse(fs.readFileSync(this.historyPath, 'utf8'));
            return history.includes(url);
        } catch (e) {
            return false;
        }
    }

    markAsPosted(url) {
        try {
            const history = JSON.parse(fs.readFileSync(this.historyPath, 'utf8'));
            if (!history.includes(url)) {
                history.push(url);
                // Keep only last 100 posts to avoid file bloat
                const limitedHistory = history.slice(-100);
                fs.writeFileSync(this.historyPath, JSON.stringify(limitedHistory, null, 2));
            }
        } catch (e) {
            // Silencieux
        }
    }

    async generatePost(article) {
        // Génération simple sans IA - gratuit !
        const emoji = article.category === 'ai' ? '🤖' :
                      article.category === 'cybersecurity' ? '🔒' :
                      article.category === 'raspberrypi' ? '🍓' : '📰';

        return `${emoji} ${article.title}\n\n${article.summary?.substring(0, 200) || ''}\n\n#AI #CyberSecurity #Tech #ThePhoenixAgency`;
    }

    async postToLinkedIn(text, articleUrl) {
        if (!this.accessToken || !this.userId) {
            // Silencieux - pas de credentials LinkedIn configurés
            return null;
        }

        try {
            const response = await axios.post(
                'https://api.linkedin.com/v2/ugcPosts',
                {
                    author: `urn:li:person:${this.userId}`,
                    lifecycleState: 'PUBLISHED',
                    specificContent: {
                        'com.linkedin.ugc.ShareContent': {
                            shareCommentary: { text: text },
                            shareMediaCategory: 'ARTICLE',
                            media: [
                                {
                                    status: 'READY',
                                    description: { text: 'AI-Pulse Daily Update' },
                                    originalUrl: articleUrl,
                                    title: { text: 'Latest from AI-Pulse' }
                                }
                            ]
                        }
                    },
                    visibility: {
                        'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
                    }
                },
                {
                    headers: {
                        'Authorization': `Bearer ${this.accessToken}`,
                        'X-Restli-Protocol-Version': '2.0.0',
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('Successfully posted to LinkedIn:', response.data.id);
            return response.data.id;
        } catch (error) {
            // Silencieux en cas d'erreur
            return null;
        }
    }
}

module.exports = new LinkedInHelper();
