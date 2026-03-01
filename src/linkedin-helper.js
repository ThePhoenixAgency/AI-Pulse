const axios = require('axios');
const fs = require('fs');
const path = require('path');

class LinkedInHelper {
    constructor() {
        this.accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
        this.userId = process.env.LINKEDIN_USER_ID;
        this.openaiKey = process.env.OPENAI_API_KEY;
        this.historyPath = path.join(__dirname, '..', 'data', 'posted-links.json');
        this.openai = null;

        // Charger OpenAI uniquement si la clé est présente
        if (this.openaiKey) {
            try {
                const OpenAI = require('openai');
                this.openai = new OpenAI({ apiKey: this.openaiKey });
            } catch (e) {
                // Silencieux si le module n'est pas installé ou échoue
            }
        }

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
            console.error('Failed to update post history:', e.message);
        }
    }

    async generatePost(article) {
        if (!this.openai) {
            // Silencieux - pas de clé OpenAI configurée
            return null;
        }

        try {
            const prompt = `
        As an AI & Cybersecurity expert from ThePhoenixAgency, write a high-impact LinkedIn post with a strong introductory "texte d'accompagnement".
        
        Article Details:
        - Title: ${article.title}
        - Source: ${article.source}
        - Summary: ${article.summary}
        
        Structure:
        1. **Texte d'accompagnement** (Hook/Intro): A catchy, visionary introduction that highlights WHY this news matters for the industry.
        2. **Core Insights**: 3 key takeaways formatted with bullet points/emojis.
        3. **Expert Opinion**: A brief sentence on the long-term impact.
        4. **Call to Action**: Invite readers to explore more on our AI-Pulse reader.
        5. **Hashtags**: #AI #CyberSecurity #Tech #ThePhoenixAgency #Innovation
        
        Tone: Professional, expert, visionary. Use emojis sparingly but effectively.
        Constraint: 800-1100 characters max.
      `;

            const response = await this.openai.chat.completions.create({
                model: "gpt-4o",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 600
            });

            return response.choices[0].message.content.trim();
        } catch (error) {
            console.error('Error generating LinkedIn post:', error.message);
            return `New update in ${article.category}: ${article.title}. Read more at ${article.link}`;
        }
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
            console.error('Error posting to LinkedIn:', error.response?.data || error.message);
            return null;
        }
    }
}

module.exports = new LinkedInHelper();
