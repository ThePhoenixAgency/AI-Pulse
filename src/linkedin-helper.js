const axios = require('axios');
const OpenAI = require('openai');

class LinkedInHelper {
    constructor() {
        this.accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
        this.userId = process.env.LINKEDIN_USER_ID;
        this.openaiKey = process.env.OPENAI_API_KEY;

        if (this.openaiKey) {
            this.openai = new OpenAI({ apiKey: this.openaiKey });
        }
    }

    async generatePost(article) {
        if (!this.openai) {
            console.error('OpenAI API Key missing. Skipping post generation.');
            return null;
        }

        try {
            const prompt = `
        As an AI & Cybersecurity expert from ThePhoenixAgency, write a high-impact LinkedIn post about this news:
        Title: ${article.title}
        Source: ${article.source}
        Summary: ${article.summary}
        
        Requirements:
        - Tone: Professional, visionary, slightly cyberpunk/tech-enthusiast.
        - Length: 800-1200 characters.
        - Include pertinent hashtags (#AI #CyberSecurity #Tech #ThePhoenixAgency).
        - Direct call to action to read more on AI-Pulse.
        - Structure: Hook, Body (3-4 points), Conclusion, Hashtags.
      `;

            const response = await this.openai.chat.completions.create({
                model: "gpt-4o",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 500
            });

            return response.choices[0].message.content.trim();
        } catch (error) {
            console.error('Error generating LinkedIn post:', error.message);
            return `New update in ${article.category}: ${article.title}. Read more at ${article.link}`;
        }
    }

    async postToLinkedIn(text, articleUrl) {
        if (!this.accessToken || !this.userId) {
            console.error('LinkedIn credentials missing. Skipping post.');
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
