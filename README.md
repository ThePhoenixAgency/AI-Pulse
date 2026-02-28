<div align="center">

<img src="assets/banner.png" alt="AI-PULSE Banner" width="100%">

> Curated content from the best sources

[![GitHub Profile](https://img.shields.io/badge/GitHub-ThePhoenixAgency-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency) [![Repository](https://img.shields.io/badge/Source-Repo-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse) [![Reader](https://img.shields.io/badge/Live-Reader-blueviolet?style=for-the-badge&logo=readthedocs)](https://thephoenixagency.github.io/AI-Pulse/app.html) [![Documentation](https://img.shields.io/badge/Documentation-Technical-blue?style=for-the-badge&logo=googledocs)](https://github.com/ThePhoenixAgency/AI-Pulse/blob/main/database/SUPABASE_MIGRATION.md) [![Support](https://img.shields.io/badge/Support-Issues-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse/issues)

**Last Update:** Sat, 28 Feb 2026 10:16:11 GMT

---

## About The Developer

**Built by [ThePhoenixAgency](https://github.com/ThePhoenixAgency)** - AI & Cybersecurity Specialist

> Passionate about building secure, privacy-first applications that make a difference.
> This project showcases my expertise in full-stack development, security engineering, and data privacy.

---

## Real-Time News Roundup

</div>

<section id="ai" data-category="ai">

## AI - Artificial Intelligence / IA - Intelligence Artificielle

<div class="article-item" data-lang="en" data-category="ai" data-source="VentureBeat AI">

### 1. `EN` [Claude Code costs up to $200 a month. Goose does the same thing for free.](data/articles/1bd5d5f60cc30b30eee498627c185f8f.html)
**Source:** VentureBeat AI
The artificial intelligence coding revolution comes with a catch: it's expensive.
Claude Code, Anthropic's terminal-based AI agent that can write, debug, and deploy code autonomously, has captured the imagination of software developers worldwide. But its pricing — ranging from $20 to $200 per month depending on usage — has sparked a growing rebellion among the very programmers it aims to serve.
Now, a free alternative is gaining traction. Goose, an open-source AI agent developed by Block (the financial technology company formerly known as Square), offers nearly identical functionality to Claude Code but runs entirely on a user's local machine. No subscription fees. No cloud dependency. No rate limits that reset every five hours.
"Your data stays with you, period," said Parth Sareen, a software engineer who demonstrated the tool during a recent livestream. The captures the core appeal: Goose gives developers complete control over their AI-powered workflow, including the ability to work offline — even on an airplane.
The project has exploded in popularity. Goose now boasts more than 26,100 stars on GitHub, the code-sharing platform, with 362 contributors and 102 releases since its launch. The latest version, 1.20.1, shipped on January 19, 2026, reflecting a development pace that rivals commercial products.
For developers frustrated by Claude Code's pricing structure and usage caps, Goose represents something increasingly rare in the AI industry: a genuinely free, no-strings-attached option for serious work. Anthropic's new rate limits spark a developer revolt
To understand why Goose matters, you need to understand the Claude Code pricing controversy.
Anthropic, the San Francisco artificial intelligence company founded by former OpenAI executives, offers Claude Code as part of its subscription tiers. The free plan provides no access whatsoever. The Pro plan, at $17 per month with annual billing (or $20 monthly), limits users to just 10 to 40 prompts every five hours — a constraint that serious developers exhaust within minutes of intensive work.
The Max plans, at $100 and $200 per month, offer more headroom: 50 to 200 prompts and 200 to 800 prompts respectively, plus access to Anthropic's most powerful model, Claude 4.5 Opus. But even these premium tiers come with restrictions that have inflamed the developer community.
In late July, Anthropic announced new weekly rate limits. Under the system, Pro users receive 40 to 80 hours of Sonnet 4 usage per week. Max users at the $200 tier get 240 to 480 hours of Sonnet 4, plus 24 to 40 hours of Opus 4. Nearly five months later, the frustration has not subsided.
The problem? Those "hours" are not actual hours. They represent token-based limits that vary wildly depending on codebase size, conversation length, and the complexity of the code being processed. Independent analysis suggests the actual per-session limits translate to roughly 44,000 tokens for Pro users and 220,000 tokens for the $200 Max plan.
"It's confusing and vague," one developer wrote in a widely shared analysis. "When they say '24-40 hours of Opus 4,' that doesn't really tell you anything useful about what you're actually getting."
The backlash on Reddit and developer forums has been fierce. Some users report hitting their daily limits within 30 minutes of intensive coding. Others have canceled their subscriptions entirely, calling the new restrictions "a joke" and "unusable for real work."
Anthropic has defended the changes, stating that the limits affect fewer than five percent of users and target people running Claude Code "continuously in the background, 24/7." But the company has not clarified whether that figure refers to five percent of Max subscribers or five percent of all users — a distinction that matters enormously.
How Block built a free AI coding agent that works offline
Goose takes a radically different approach to the same problem.
Built by Block, the payments company led by Jack Dorsey, Goose is what engineers call an "on-machine AI agent." Unlike Claude Code, which sends your queries to Anthropic's servers for processing, Goose can run entirely on your local computer using open-source language models that you download and control yourself.
The project's documentation describes it as going "beyond code suggestions" to "install, execute, edit, and test with any LLM." That last phrase — "any LLM" — is the key differentiator. Goose is model-agnostic by design.
You can connect Goose to Anthropic's Claude models if you have API access. You can use OpenAI's GPT-5 or Google's Gemini. You can route it through services like Groq or OpenRouter. Or — and this is where things get interesting — you can run it entirely locally using tools like Ollama, which let you download and execute open-source models on your own hardware.
The practical implications are significant. With a local setup, there are no subscription fees, no usage caps, no rate limits, and no concerns about your code being sent to external servers. Your conversations with the AI never leave your machine.
"I use Ollama all the time on planes — it's a lot of fun!" Sareen noted during a demonstration, highlighting how local models free developers from the constraints of internet connectivity.
What Goose can do that traditional code assistants can't
Goose operates as a command-line tool or desktop application that can autonomously perform complex development tasks. It can build entire projects from scratch, write and execute code, debug failures, orchestrate workflows across multiple files, and interact with external APIs — all without constant human oversight.
The architecture relies on what the AI industry calls "tool calling" or "function calling" — the ability for a language model to request specific actions from external systems. When you ask Goose to create a new file, run a test suite, or check the status of a GitHub pull request, it doesn't just generate text describing what should happen. It actually executes those operations.
This capability depends heavily on the underlying language model. Claude 4 models from Anthropic currently perform best at tool calling, according to the Berkeley Function-Calling Leaderboard, which ranks models on their ability to translate natural language requests into executable code and system commands.
But newer open-source models are catching up quickly. Goose's documentation highlights several options with strong tool-calling support: Meta's Llama series, Alibaba's Qwen models, Google's Gemma variants, and DeepSeek's reasoning-focused architectures.
The tool also integrates with the Model Context Protocol, or MCP, an emerging standard for connecting AI agents to external services. Through MCP, Goose can access databases, search engines, file systems, and third-party APIs — extending its capabilities far beyond what the base language model provides.
Setting Up Goose with a Local Model
For developers interested in a completely free, privacy-preserving setup, the process involves three main components: Goose itself, Ollama (a tool for running open-source models locally), and a compatible language model.
Step 1: Install Ollama
Ollama is an open-source project that dramatically simplifies the process of running large language models on personal hardware. It handles the complex work of downloading, optimizing, and serving models through a simple interface.
Download and install Ollama from ollama.com. Once installed, you can pull models with a single command. For coding tasks, Qwen 2.5 offers strong tool-calling support:
ollama run qwen2.5
The model downloads automatically and begins running on your machine.
Step 2: Install Goose
Goose is available as both a desktop application and a command-line interface. The desktop version provides a more visual experience, while the CLI appeals to developers who prefer working entirely in the terminal.

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="VentureBeat AI">

### 2. `EN` [Nous Research's NousCoder-14B is an open-source coding model landing right in the Claude Code moment](data/articles/b37d936464575171be4586234d600b41.html)
**Source:** VentureBeat AI
Nous Research, the open-source artificial intelligence startup backed by crypto venture firm Paradigm, released a new competitive programming model on Monday that it says matches or exceeds several larger proprietary systems — trained in just four days using 48 of Nvidia's latest B200 graphics processors.
The model, called NousCoder-14B, is another entry in a crowded field of AI coding assistants, but arrives at a particularly charged moment: Claude Code, the agentic programming tool from rival Anthropic, has dominated social media discussion since New Year's Day, with developers posting breathless testimonials about its capabilities. The simultaneous developments underscore how quickly AI-assisted software development is evolving — and how fiercely companies large and small are competing to capture what many believe will become a foundational technology for how software gets written.
type: embedded-entry-inline id: 74cSyrq6OUrp9SEQ5zOUSl
NousCoder-14B achieves a 67.87 percent accuracy rate on LiveCodeBench v6, a standardized evaluation that tests models on competitive programming problems published between August 2024 and May 2025. That figure represents a 7.08 percentage point improvement over the base model it was trained from, Alibaba's Qwen3-14B, according to Nous Research's technical report published alongside the release.
"I gave Claude Code a description of the problem, it generated what we built last year in an hour," wrote Jaana Dogan, a principal engineer at Google responsible for the Gemini API, in a viral post on X last week that captured the prevailing mood around AI coding tools. Dogan was describing a distributed agent orchestration system her team had spent a year developing — a system Claude Code approximated from a three-paragraph prompt.
The juxtaposition is instructive: while Anthropic's Claude Code has captured imaginations with demonstrations of end-to-end software development, Nous Research is betting that open-source alternatives trained on verifiable problems can close the gap — and that transparency in how these models are built matters as much as raw capability. How Nous Research built an AI coding model that anyone can replicate
What distinguishes the NousCoder-14B release from many competitor announcements is its radical openness. Nous Research published not just the model weights but the complete reinforcement learning environment, benchmark suite, and training harness — built on the company's Atropos framework — enabling any researcher with sufficient compute to reproduce or extend the work.
"Open-sourcing the Atropos stack provides the necessary infrastructure for reproducible olympiad-level reasoning research," noted one observer on X, summarizing the significance for the academic and open-source communities.
The model was trained by Joe Li, a researcher in residence at Nous Research and a former competitive programmer himself. Li's technical report reveals an unexpectedly personal dimension: he compared the model's improvement trajectory to his own journey on Codeforces, the competitive programming platform where participants earn ratings based on contest performance.
Based on rough estimates mapping LiveCodeBench scores to Codeforces ratings, Li calculated that NousCoder-14B's improvemen t— from approximately the 1600-1750 rating range to 2100-2200 — mirrors a leap that took him nearly two years of sustained practice between ages 14 and 16. The model accomplished the equivalent in four days.
"Watching that final training run unfold was quite a surreal experience," Li wrote in the technical report.
But Li was quick to note an important caveat that speaks to broader questions about AI efficiency: he solved roughly 1,000 problems during those two years, while the model required 24,000. Humans, at least for now, remain dramatically more sample-efficient learners. Inside the reinforcement learning system that trains on 24,000 competitive programming problems
NousCoder-14B's training process offers a window into the increasingly sophisticated techniques researchers use to improve AI reasoning capabilities through reinforcement learning.
The approach relies on what researchers call "verifiable rewards" — a system where the model generates code solutions, those solutions are executed against test cases, and the model receives a simple binary signal: correct or incorrect. This feedback loop, while conceptually straightforward, requires significant infrastructure to execute at scale.
Nous Research used Modal, a cloud computing platform, to run sandboxed code execution in parallel. Each of the 24,000 training problems contains hundreds of test cases on average, and the system must verify that generated code produces correct outputs within time and memory constraints — 15 seconds and 4 gigabytes, respectively.
The training employed a technique called DAPO (Dynamic Sampling Policy Optimization), which the researchers found performed slightly better than alternatives in their experiments. A key innovation involves "dynamic sampling" — discarding training examples where the model either solves all attempts or fails all attempts, since these provide no useful gradient signal for learning.
The researchers also adopted "iterative context extension," first training the model with a 32,000-token context window before expanding to 40,000 tokens. During evaluation, extending the context further to approximately 80,000 tokens produced the best results, with accuracy reaching 67.87 percent.
Perhaps most significantly, the training pipeline overlaps inference and verification — as soon as the model generates a solution, it begins work on the next problem while the previous solution is being checked. This pipelining, combined with asynchronous training where multiple model instances work in parallel, maximizes hardware utilization on expensive GPU clusters. The looming data shortage that could slow AI coding model progress
Buried in Li's technical report is a finding with significant implications for the future of AI development: the training dataset for NousCoder-14B encompasses "a significant portion of all readily available, verifiable competitive programming problems in a standardized dataset format."
In other words, for this particular domain, the researchers are approaching the limits of high-quality training data.
"The total number of competitive programming problems on the Internet is roughly the same order of magnitude," Li wrote, referring to the 24,000 problems used for training. "This suggests that within the competitive programming domain, we have approached the limits of high-quality data."
This observation echoes growing concern across the AI industry about data constraints. While compute continues to scale according to well-understood economic and engineering principles, training data is "increasingly finite," as Li put it.
"It appears that some of the most important research that needs to be done in the future will be in the areas of synthetic data generation and data efficient algorithms and architectures," he concluded.
The challenge is particularly acute for competitive programming because the domain requires problems with known correct solutions that can be verified automatically. Unlike natural language tasks where human evaluation or proxy metrics suffice, code either works or it doesn't — making synthetic data generation considerably more difficult.
Li identified one potential avenue: training models not just to solve problems but to generate solvable problems, enabling a form of self-play similar to techniques that proved successful in game-playing AI systems. "Once synthetic problem generation is solved, self-play becomes a very interesting direction," he wrote. A $65 million bet that open-source AI can compete with Big Tech

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="VentureBeat AI">

### 3. `EN` [Salesforce rolls out new Slackbot AI agent as it battles Microsoft and Google in workplace AI](data/articles/db7ff708ed2fd3ffb22714bc4e846e1c.html)
**Source:** VentureBeat AI
Salesforce on Tuesday launched an entirely rebuilt version of Slackbot, the company's workplace assistant, transforming it from a simple notification tool into what executives describe as a fully powered AI agent capable of searching enterprise data, drafting documents, and taking action on behalf of employees.
The new Slackbot, now generally available to Business+ and Enterprise+ customers, is Salesforce's most aggressive move yet to position Slack at the center of the emerging "agentic AI" movement — where software agents work alongside humans to complete complex tasks. The launch comes as Salesforce attempts to convince investors that artificial intelligence will bolster its products rather than render them obsolete.
"Slackbot isn't just another copilot or AI assistant," said Parker Harris, Salesforce co-founder and Slack's chief technology officer, in an exclusive interview with Salesforce. "It's the front door to the agentic enterprise, powered by Salesforce."
From tricycle to Porsche: Salesforce rebuilt Slackbot from the ground up
Harris was blunt about what distinguishes the new Slackbot from its predecessor: "The old Slackbot was, you know, a little tricycle, and the new Slackbot is like, you know, a Porsche."
The original Slackbot, which has existed since Slack's early days, performed basic algorithmic tasks — reminding users to add colleagues to documents, suggesting channel archives, and delivering simple notifications. The new version runs on an entirely different architecture built around a large language model and sophisticated search capabilities that can access Salesforce records, Google Drive files, calendar data, and years of Slack conversations.
"It's two different things," Harris explained. "The old Slackbot was algorithmic and fairly simple. The new Slackbot is brand new — it's based around an LLM and a very robust search engine, and connections to third-party search engines, third-party enterprise data."
Salesforce chose to retain the Slackbot brand despite the fundamental technical overhaul. "People know what Slackbot is, and so we wanted to carry that forward," Harris said.
Why Anthropic's Claude powers the new Slackbot — and which AI models could come next
The new Slackbot runs on Claude, Anthropic's large language model, a choice driven partly by compliance requirements. Slack's commercial service operates under FedRAMP Moderate certification to serve U.S. federal government customers, and Harris said Anthropic was "the only provider that could give us a compliant LLM" when Slack began building the new system.
But that exclusivity won't last. "We are, this year, going to support additional providers," Harris said. "We have a great relationship with Google. Gemini is incredible — performance is great, cost is great. So we're going to use Gemini for some things." He added that OpenAI remains a possibility as well.
Harris echoed Salesforce CEO Marc Benioff's view that large language models are becoming commoditized: "You've heard Marc talk about LLMs are commodities, that they're democratized. I call them CPUs."
On the sensitive question of training data, Harris was unequivocal: Salesforce does not train any models on customer data. "Models don't have any sort of security," he explained. "If we trained it on some confidential conversation that you and I have, I don't want Carolyn to know — if I train it into the LLM, there is no way for me to say you get to see the answer, but Carolyn doesn't."
Inside Salesforce's internal experiment: 80,000 employees tested Slackbot with striking results
Salesforce has been testing the new Slackbot internally for months, rolling it out to all 80,000 employees. According to Ryan Gavin, Slack's chief marketing officer, the results have been striking: "It's the fastest adopted product in Salesforce history."
Internal data shows that two-thirds of Salesforce employees have tried the new Slackbot, with 80% of those users continuing to use it regularly. Internal satisfaction rates reached 96% — the highest for any AI feature Slack has shipped. Employees report saving between two and 20 hours per week.
The adoption happened largely organically. "I think it was about five days, and a Canvas was developed by our employees called 'The Most Stealable Slackbot Prompts,'" Gavin said. "People just started adding to it organically. I think it's up to 250-plus prompts that are in this Canvas right now."
Kate Crotty, a principal UX researcher at Salesforce, found that 73% of internal adoption was driven by social sharing rather than top-down mandates. "Everybody is there to help each other learn and communicate hacks," she said.
How Slackbot transforms scattered enterprise data into executive-ready insights
During a product demonstration, Amy Bauer, Slack's product experience designer, showed how Slackbot can synthesize information across multiple sources. In one example, she asked Slackbot to analyze customer feedback from a pilot program, upload an image of a usage dashboard, and have Slackbot correlate the qualitative and quantitative data.
"This is where Slackbot really earns its keep for me," Bauer explained. "What it's doing is not just simply reading the image — it's actually looking at the image and comparing it to the insight it just generated for me."
Slackbot can then query Salesforce to find enterprise accounts with open deals that might be good candidates for early access, creating what Bauer called "a really great justification and plan to move forward." Finally, it can synthesize all that information into a Canvas — Slack's collaborative document format — and find calendar availability among stakeholders to schedule a review meeting.
"Up until this point, we have been working in a one-to-one capacity with Slackbot," Bauer said. "But one of the benefits that I can do now is take this insight and have it generate this into a Canvas, a shared workspace where I can iterate on it, refine it with Slackbot, or share it out with my team."
Rob Seaman, Slack's chief product officer, said the Canvas creation demonstrates where the product is heading: "This is making a tool call internally to Slack Canvas to actually write, effectively, a shared document. But it signals where we're going with Slackbot — we're eventually going to be adding in additional third-party tool calls."
MrBeast's company became a Slackbot guinea pig—and employees say they're saving 90 minutes a day
Among Salesforce's pilot customers is Beast Industries, the parent company of YouTube star MrBeast. Luis Madrigal, the company's chief information officer, joined the launch announcement to describe his experience.
"As somebody who has rolled out enterprise technologies for over two decades now, this was practically one of the easiest," Madrigal said. "The plumbing is there. Slack as an implementation, Enterprise Tools — being able to turn on the Slackbot and the Slack AI functionality was as simple as having my team go in, review, do a quick security review."
Madrigal said his security team signed off "rather quickly" — unusual for enterprise AI deployments — because Slackbot accesses only the information each individual user already has permission to view. "Given all the guardrails you guys have put into place for Slackbot to be unique and customized to only the information that each individual user has, only the conversations and the Slack rooms and Slack channels that they're part of—that made my security team sign off rather quickly."
One Beast Industries employee, Sinan, the head of Beast Games marketing, reported saving "at bare minimum, 90 minutes a day." Another employee, Spencer, a creative supervisor, described it as "an assistant who's paying attention when I'm not."
Other pilot customers include Slalom, reMarkable, Xero, Mercari, and Engine.

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="VentureBeat AI">

### 4. `EN` [Railway secures $100 million to challenge AWS with AI-native cloud infrastructure](data/articles/e670024b9a32e878ab282337aaddf6f9.html)
**Source:** VentureBeat AI
Railway, a San Francisco-based cloud platform that has quietly amassed two million developers without spending a dollar on marketing, announced Thursday that it raised $100 million in a Series B funding round, as surging demand for artificial intelligence applications exposes the limitations of legacy cloud infrastructure.
TQ Ventures led the round, with participation from FPV Ventures, Redpoint, and Unusual Ventures. The investment values Railway as one of the most significant infrastructure startups to emerge during the AI boom, capitalizing on developer frustration with the complexity and cost of traditional platforms like Amazon Web Services and Google Cloud.
"As AI models get better at writing code, more and more people are asking the age-old question: where, and how, do I run my applications?" said Jake Cooper, Railway's 28-year-old founder and chief executive, in an exclusive interview with VentureBeat. "The last generation of cloud primitives were slow and outdated, and now with AI moving everything faster, teams simply can't keep up."
The funding is a dramatic acceleration for a company that has charted an unconventional path through the cloud computing industry. Railway raised just $24 million in total before this round, including a $20 million Series A from Redpoint in 2022. The company now processes more than 10 million deployments monthly and handles over one trillion requests through its edge network — metrics that rival far larger and better-funded competitors.
Why three-minute deploy times have become unacceptable in the age of AI coding assistants
Railway's pitch rests on a simple observation: the tools developers use to deploy and manage software were designed for a slower era. A standard build-and-deploy cycle using Terraform, the industry-standard infrastructure tool, takes two to three minutes. That delay, once tolerable, has become a critical bottleneck as AI coding assistants like Claude, ChatGPT, and Cursor can generate working code in seconds.
"When godly intelligence is on tap and can solve any problem in three seconds, those amalgamations of systems become bottlenecks," Cooper told VentureBeat. "What was really cool for humans to deploy in 10 seconds or less is now table stakes for agents."
The company claims its platform delivers deployments in under one second — fast enough to keep pace with AI-generated code. Customers report a tenfold increase in developer velocity and up to 65 percent cost savings compared to traditional cloud providers.
These numbers come directly from enterprise clients, not internal benchmarks. Daniel Lobaton, chief technology officer at G2X, a platform serving 100,000 federal contractors, measured deployment speed improvements of seven times faster and an 87 percent cost reduction after migrating to Railway. His infrastructure bill dropped from $15,000 per month to approximately $1,000.
"The work that used to take me a week on our previous infrastructure, I can do in Railway in like a day," Lobaton said. "If I want to spin up a new service and test different architectures, it would take so long on our old setup. In Railway I can launch six services in two minutes."
Inside the controversial decision to abandon Google Cloud and build data centers from scratch
What distinguishes Railway from competitors like Render and Fly.io is the depth of its vertical integration. In 2024, the company made the unusual decision to abandon Google Cloud entirely and build its own data centers, a move that echoes the famous Alan Kay maxim: "People who are really serious about software should make their own hardware."
"We wanted to design hardware in a way where we could build a differentiated experience," Cooper said. "Having full control over the network, compute, and storage layers lets us do really fast build and deploy loops, the kind that allows us to move at 'agentic speed' while staying 100 percent the smoothest ride in town."
The approach paid dividends during recent widespread outages that affected major cloud providers — Railway remained online throughout.
This soup-to-nuts control enables pricing that undercuts the hyperscalers by roughly 50 percent and newer cloud startups by three to four times. Railway charges by the second for actual compute usage: $0.00000386 per gigabyte-second of memory, $0.00000772 per vCPU-second, and $0.00000006 per gigabyte-second of storage. There are no charges for idle virtual machines — a stark contrast to the traditional cloud model where customers pay for provisioned capacity whether they use it or not.
"The conventional wisdom is that the big guys have economies of scale to offer better pricing," Cooper noted. "But when they're charging for VMs that usually sit idle in the cloud, and we've purpose-built everything to fit much more density on these machines, you have a big opportunity."
How 30 employees built a platform generating tens of millions in annual revenue
Railway has achieved its scale with a team of just 30 employees generating tens of millions in annual revenue — a ratio of revenue per employee that would be exceptional even for established software companies. The company grew revenue 3.5 times last year and continues to expand at 15 percent month-over-month.
Cooper emphasized that the fundraise was strategic rather than necessary. "We're default alive; there's no reason for us to raise money," he said. "We raised because we see a massive opportunity to accelerate, not because we needed to survive."
The company hired its first salesperson only last year and employs just two solutions engineers. Nearly all of Railway's two million users discovered the platform through word of mouth — developers telling other developers about a tool that actually works.
"We basically did the standard engineering thing: if you build it, they will come," Cooper recalled. "And to some degree, they came."
From side projects to Fortune 500 deployments: Railway's unlikely corporate expansion
Despite its grassroots developer community, Railway has made significant inroads into large organizations. The company claims that 31 percent of Fortune 500 companies now use its platform, though deployments range from company-wide infrastructure to individual team projects.
Notable customers include Bilt, the loyalty program company; Intuit's GoCo subsidiary; TripAdvisor's Cruise Critic; and MGM Resorts. Kernel, a Y Combinator-backed startup providing AI infrastructure to over 1,000 companies, runs its entire customer-facing system on Railway for $444 per month.
"At my previous company Clever, which sold for $500 million, I had six full-time engineers just managing AWS," said Rafael Garcia, Kernel's chief technology officer. "Now I have six engineers total, and they all focus on product. Railway is exactly the tool I wish I had in 2012."
For enterprise customers, Railway offers security certifications including SOC 2 Type 2 compliance and HIPAA readiness, with business associate agreements available upon request. The platform provides single sign-on authentication, comprehensive audit logs, and the option to deploy within a customer's existing cloud environment through a "bring your own cloud" configuration.
Enterprise pricing starts at custom levels, with specific add-ons for extended log retention ($200 monthly), HIPAA BAAs ($1,000), enterprise support with SLOs ($2,000), and dedicated virtual machines ($10,000).
The startup's bold strategy to take on Amazon, Google, and a new generation of cloud rivals
Railway enters a crowded market that includes not only the hyperscale cloud providers—Amazon Web Services, Microsoft Azure, and Google Cloud Platform—but also a growing cohort of developer-focused platforms like Vercel, Render, Fly.io, and Heroku.
Cooper argues that Railway's competitors fall into two camps, neither of which has fully committed to the new infrastructure model that AI demands.

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="VentureBeat AI">

### 5. `EN` [Anthropic launches Cowork, a Claude Desktop agent that works in your files — no coding required](data/articles/a102a18a5efc083299a9baaa1b4a8378.html)
**Source:** VentureBeat AI
Anthropic released Cowork on Monday, a new AI agent capability that extends the power of its wildly successful Claude Code tool to non-technical users — and according to company insiders, the team built the entire feature in approximately a week and a half, largely using Claude Code itself.
The launch marks a major inflection point in the race to deliver practical AI agents to mainstream users, positioning Anthropic to compete not just with OpenAI and Google in conversational AI, but with Microsoft's Copilot in the burgeoning market for AI-powered productivity tools.
"Cowork lets you complete non-technical tasks much like how developers use Claude Code," the company announced via its official Claude account on X. The feature arrives as a research preview available exclusively to Claude Max subscribers — Anthropic's power-user tier priced between $100 and $200 per month — through the macOS desktop application.
For the past year, the industry narrative has focused on large language models that can write poetry or debug code. With Cowork, Anthropic is betting that the real enterprise value lies in an AI that can open a folder, read a messy pile of receipts, and generate a structured expense report without human hand-holding. How developers using a coding tool for vacation research inspired Anthropic's latest product
The genesis of Cowork lies in Anthropic's recent success with the developer community. In late 2024, the company released Claude Code, a terminal-based tool that allowed software engineers to automate rote programming tasks. The tool was a hit, but Anthropic noticed a peculiar trend: users were forcing the coding tool to perform non-coding labor.
According to Boris Cherny, an engineer at Anthropic, the company observed users deploying the developer tool for an unexpectedly diverse array of tasks. "Since we launched Claude Code, we saw people using it for all sorts of non-coding work: doing vacation research, building slide decks, cleaning up your email, cancelling subscriptions, recovering wedding photos from a hard drive, monitoring plant growth, controlling your oven," Cherny wrote on X. "These use cases are diverse and surprising — the reason is that the underlying Claude Agent is the best agent, and Opus 4.5 is the best model."
Recognizing this shadow usage, Anthropic effectively stripped the command-line complexity from their developer tool to create a consumer-friendly interface. In its blog post announcing the feature, Anthropic explained that developers "quickly began using it for almost everything else," which "prompted us to build Cowork: a simpler way for anyone — not just developers — to work with Claude in the very same way."
Inside the folder-based architecture that lets Claude read, edit, and create files on your computer
Unlike a standard chat interface where a user pastes text for analysis, Cowork requires a different level of trust and access. Users designate a specific folder on their local machine that Claude can access. Within that sandbox, the AI agent can read existing files, modify them, or create entirely new ones.
Anthropic offers several illustrative examples: reorganizing a cluttered downloads folder by sorting and intelligently renaming each file, generating a spreadsheet of expenses from a collection of receipt screenshots, or drafting a report from scattered notes across multiple documents.
"In Cowork, you give Claude access to a folder on your computer. Claude can then read, edit, or create files in that folder," the company explained on X. "Try it to create a spreadsheet from a pile of screenshots, or produce a first draft from scattered notes." The architecture relies on what is known as an "agentic loop." When a user assigns a task, the AI does not merely generate a text response. Instead, it formulates a plan, executes steps in parallel, checks its own work, and asks for clarification if it hits a roadblock. Users can queue multiple tasks and let Claude process them simultaneously — a workflow Anthropic describes as feeling "much less like a back-and-forth and much more like leaving messages for a coworker."
The system is built on Anthropic's Claude Agent SDK, meaning it shares the same underlying architecture as Claude Code. Anthropic notes that Cowork "can take on many of the same tasks that Claude Code can handle, but in a more approachable form for non-coding tasks."
The recursive loop where AI builds AI: Claude Code reportedly wrote much of Claude Cowork
Perhaps the most remarkable detail surrounding Cowork's launch is the speed at which the tool was reportedly built — highlighting a recursive feedback loop where AI tools are being used to build better AI tools.
During a livestream hosted by Dan Shipper, Felix Rieseberg, an Anthropic employee, confirmed that the team built Cowork in approximately a week and a half.
Alex Volkov, who covers AI developments, expressed surprise at the timeline: "Holy shit Anthropic built 'Cowork' in the last... week and a half?!" This prompted immediate speculation about how much of Cowork was itself built by Claude Code. Simon Smith, EVP of Generative AI at Klick Health, put it bluntly on X: "Claude Code wrote all of Claude Cowork. Can we all agree that we're in at least somewhat of a recursive improvement loop here?"
The implication is profound: Anthropic's AI coding agent may have substantially contributed to building its own non-technical sibling product. If true, this is one of the most visible examples yet of AI systems being used to accelerate their own development and expansion — a strategy that could widen the gap between AI labs that successfully deploy their own agents internally and those that do not.
Connectors, browser automation, and skills extend Cowork's reach beyond the local file system
Cowork doesn't operate in isolation. The feature integrates with Anthropic's existing ecosystem of connectors — tools that link Claude to external information sources and services such as Asana, Notion, PayPal, and other supported partners. Users who have configured these connections in the standard Claude interface can leverage them within Cowork sessions.
Additionally, Cowork can pair with Claude in Chrome, Anthropic's browser extension, to execute tasks requiring web access. This combination allows the agent to navigate websites, click buttons, fill forms, and extract information from the internet — all while operating from the desktop application.
"Cowork includes a number of novel UX and safety features that we think make the product really special," Cherny explained, highlighting "a built-in VM [virtual machine] for isolation, out of the box support for browser automation, support for all your claude.ai data connectors, asking you for clarification when it's unsure."
Anthropic has also introduced an initial set of "skills" specifically designed for Cowork that enhance Claude's ability to create documents, presentations, and other files. These build on the Skills for Claude framework the company announced in October, which provides specialized instruction sets Claude can load for particular types of tasks.
Why Anthropic is warning users that its own AI agent could delete their files
The transition from a chatbot that suggests edits to an agent that makes edits introduces significant risk. An AI that can organize files can, theoretically, delete them.
In a notable display of transparency, Anthropic devoted considerable space in its announcement to warning users about Cowork's potential dangers — an unusual approach for a product launch.
The company explicitly acknowledges that Claude "can take potentially destructive actions (such as deleting local files) if it's instructed to." Because Claude might occasionally misinterpret instructions, Anthropic urges users to provide "very clear guidance" about sensitive operations.

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 6. `EN` [Codex is Open Sourcing AI models](data/articles/6a47ac8b630197c4b24ace573addcfda.html)
**Source:** Hugging Face Blog
Back to Articles GOAL: End-to-end Machine Learning experiments Setup and Install Install Codex Install the Hugging Face Skills Connect to Hugging Face Your first AI Experiment Instruct Codex to do an end-to-end fine-tuning experiment Updating the Training Report Dataset Validation Review Before Submitting Track Progress using the Training Report Use Your Model Hardware and Cost What's Next Resources Codex Hugging Face Skills Building on our work to get Claude Code to train open source models, we are now getting Codex to go further. We gave Codex access to the Hugging Face Skills repository, which contains skills for Machine Learning and AI tasks such as training or evaluating models. With HF skills, a coding agent can: Fine-tune and apply RL alignment on language models
Review, explain, and act on live training metrics from Trackio
Evaluate checkpoints and act on evaluation results
Create reports from experiments
Export to and quantize models with GGUF for local deployment
Publish models to the Hub This tutorial dives even deeper and shows you how it works and how to use it yourself. So let's get started. Codex uses AGENTS.md files to accomplish specialized tasks, whilst Claude Code uses 'Skills'. Fortunately, 'HF-skills' is compatible with both approaches and works with major coding agents like Claude Code, Codex, or Gemini CLI. With HF-s

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 7. `EN` [IBM and UC Berkeley Diagnose Why Enterprise Agents Fail Using IT-Bench and MAST](data/articles/7df6e000ee06c0158a4b77af2e65854c.html)
**Source:** Hugging Face Blog
Back to Articles The "Black Box" Problem of Agent Benchmarks The Experiment: Diagnosing ITBench Agents Finding 1: Stronger models like Gemini-3-Flash shows surgical (isolated failure modes) per trace whereas open sourced Kimi-K2 and GPT-oss-120b show compounding failure patterns Finding 2: "Non-Fatal" vs. "Fatal" Failures The "Non-Fatal" (Benign) Flaws The "Fatal" Flaws Case Study: Gemini-3-Flash (Decisive but Overconfident) Case Study: GPT-OSS-120B A different (and more useful) way to read the plots: “fatal” vs “non-fatal” Recoverable / structural (show up even in successful traces) Fatal / decisive (strongly associated with failed traces) Conclusion Ayhan Sebin
Saurabh Jha
Rohan Arora
Daby Sow
Mert Cemri
Melissa Pan
Ion Stoica
ITBench HF Space
ITBench HF Dataset
MAST HF Dataset
ITBench Github
MAST Github
IBM Research and UC Berkeley collaborated to study how agentic LLM systems break in real-world IT automation, for tasks involving incident triage, logs/metrics queries, and Kubernetes actions in long-horizon tool loops.
Benchmarks typically reduce performance to a single number, telling you whether an agent failed but never why. To solve this black-box problem, we applied MAST (Multi-Agent System Failure Taxonomy), an emerging practice for diagnosing agentic reliability ). By leveraging MAST to analyze ITBench—the industry benchmark for SRE, Se

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="VentureBeat AI">

### 8. `EN` [Listen Labs raises $69M after viral billboard hiring stunt to scale AI customer interviews](data/articles/ca731494b19489d16b3acb90f6d3128d.html)
**Source:** VentureBeat AI
Alfred Wahlforss was running out of options. His startup, Listen Labs, needed to hire over 100 engineers, but competing against Mark Zuckerberg's $100 million offers seemed impossible. So he spent $5,000 — a fifth of his marketing budget — on a billboard in San Francisco displaying what looked like gibberish: five strings of random numbers.
The numbers were actually AI tokens. Decoded, they led to a coding challenge: build an algorithm to act as a digital bouncer at Berghain, the Berlin nightclub famous for rejecting nearly everyone at the door. Within days, thousands attempted the puzzle. 430 cracked it. Some got hired. The winner flew to Berlin, all expenses paid.
That unconventional approach has now attracted $69 million in Series B funding, led by Ribbit Capital with participation from Evantic and existing investors Sequoia Capital, Conviction, and Pear VC. The round values Listen Labs at $500 million and brings its total capital to $100 million. In nine months since launch, the company has grown annualized revenue by 15x to eight figures and conducted over one million AI-powered interviews. "When you obsess over customers, everything else follows," Wahlforss said in an interview with VentureBeat. "Teams that use Listen bring the customer into every decision, from marketing to product, and when the customer is delighted, everyone is."
Why traditional market research is broken, and what Listen Labs is building to fix it
Listen's AI researcher finds participants, conducts in-depth interviews, and delivers actionable insights in hours, not weeks. The platform replaces the traditional choice between quantitative surveys — which provide statistical precision but miss nuance—and qualitative interviews, which deliver depth but cannot scale.
Wahlforss explained the limitation of existing approaches: "Essentially surveys give you false precision because people end up answering the same question... You can't get the outliers. People are actually not honest on surveys." The alternative, one-on-one human interviews, "gives you a lot of depth. You can ask follow up questions. You can kind of double check if they actually know what they're talking about. And the problem is you can't scale that."
The platform works in four steps: users create a study with AI assistance, Listen recruits participants from its global network of 30 million people, an AI moderator conducts in-depth interviews with follow-up questions, and results are packaged into executive-ready reports including key themes, highlight reels, and slide decks.
What distinguishes Listen's approach is its use of open-ended video conversations rather than multiple-choice forms. "In a survey, you can kind of guess what you should answer, and you have four options," Wahlforss said. "Oh, they probably want me to buy high income. Let me click on that button versus an open ended response. It just generates much more honesty."
The dirty secret of the $140 billion market research industry: rampant fraud
Listen finds and qualifies the right participants in its global network of 30 million people. But building that panel required confronting what Wahlforss called "one of the most shocking things that we've learned when we entered this industry"—rampant fraud.
"Essentially, there's a financial transaction involved, which means there will be bad players," he explained. "We actually had some of the largest companies, some of them have billions in revenue, send us people who claim to be kind of enterprise buyers to our platform and our system immediately detected, like, fraud, fraud, fraud, fraud, fraud."
The company built what it calls a "quality guard" that cross-references LinkedIn profiles with video responses to verify identity, checks consistency across how participants answer questions, and flags suspicious patterns. The result, according to Wahlforss: "People talk three times more. They're much more honest when they talk about sensitive topics like politics and mental health."
Emeritus, an online education company that uses Listen, reported that approximately 20% of survey responses previously fell into the fraudulent or low-quality category. With Listen, they reduced this to almost zero. "We did not have to replace any responses because of fraud or gibberish information," said Gabrielli Tiburi, Assistant Manager of Customer Insights at Emeritus.
How Microsoft, Sweetgreen, and Chubbies are using AI interviews to build better products
The speed advantage has proven central to Listen's pitch. Traditional customer research at Microsoft could take four to six weeks to generate insights. "By the time we get to them, either the decision has been made or we lose out on the opportunity to actually influence it," said Romani Patel, Senior Research Manager at Microsoft.
With Listen, Microsoft can now get insights in days, and in many cases, within hours.
The platform has already powered several high-profile initiatives. Microsoft used Listen Labs to collect global customer stories for its 50th anniversary celebration. "We wanted users to share how Copilot is empowering them to bring their best self forward," Patel said, "and we were able to collect those user video stories within a day." Traditionally, that kind of work would have taken six to eight weeks.
Simple Modern, an Oklahoma-based drinkware company, used Listen to test a new product concept. The process took about an hour to write questions, an hour to launch the study, and 2.5 hours to receive feedback from 120 people across the country. "We went from 'Should we even have this product?' to 'How should we launch it?'" said Chris Hoyle, the company's Chief Marketing Officer.
Chubbies, the shorts brand, achieved a 24x increase in youth research participation—growing from 5 to 120 participants — by using Listen to overcome the scheduling challenges of traditional focus groups with children. "There's school, sports, dinner, and homework," explained Lauren Neville, Director of Insights and Innovation. "I had to find a way to hear from them that fit into their schedules."
The company also discovered product issues through AI interviews that might have gone undetected otherwise. Wahlforss described how the AI "through conversations, realized there were like issues with the the kids short line, and decided to, like, interview hundreds of kids. And I understand that there were issues in the liner of the shorts and that they were, like, scratchy, quote, unquote, according to the people interviewed." The redesigned product became "a blockbuster hit."
The Jevons paradox explains why cheaper research creates more demand, not less
Listen Labs is entering a massive but fragmented market. Wahlforss cited research from Andreessen Horowitz estimating the market research industry at roughly $140 billion annually, populated by legacy players — some with more than a billion dollars in revenue — that he believes are vulnerable to disruption.
"There are very much existing budget lines that we are replacing," Wahlforss said. "Why we're replacing them is that one, they're super costly. Two, they're kind of stuck in this old paradigm of choosing between a survey or interview, and they also take months to work with."
But the more intriguing dynamic may be that AI-powered research doesn't just replace existing spending — it creates new demand. Wahlforss invoked the Jevons paradox, an economic principle that occurs when technological advancements make a resource more efficient to use, but increased efficiency leads to increased overall consumption rather than decreased consumption.
"What I've noticed is that as something gets cheaper, you don't need less of it. You want more of it," Wahlforss explained. "There's infinite demand for customer understanding.

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="VentureBeat AI">

### 9. `EN` [The creator of Claude Code just revealed his workflow, and developers are losing their minds](data/articles/c2e433d6dc0060138f55b9de14c8a605.html)
**Source:** VentureBeat AI
When the creator of the world's most advanced coding agent speaks, Silicon Valley doesn't just listen — it takes notes.
For the past week, the engineering community has been dissecting a thread on X from Boris Cherny, the creator and head of Claude Code at Anthropic. What began as a casual sharing of his personal terminal setup has spiraled into a viral manifesto on the future of software development, with industry insiders calling it a watershed moment for the startup. "If you're not reading the Claude Code best practices straight from its creator, you're behind as a programmer," wrote Jeff Tang, a prominent voice in the developer community. Kyle McNease, another industry observer, went further, declaring that with Cherny's "game-changing updates," Anthropic is "on fire," potentially facing "their ChatGPT moment."
The excitement stems from a paradox: Cherny's workflow is surprisingly simple, yet it allows a single human to operate with the output capacity of a small engineering department. As one user noted on X after implementing Cherny's setup, the experience "feels more like Starcraft" than traditional coding — a shift from typing syntax to commanding autonomous units.
Here is an analysis of the workflow that is reshaping how software gets built, straight from the architect himself. How running five AI agents at once turns coding into a real-time strategy game
The most striking revelation from Cherny's disclosure is that he does not code in a linear fashion. In the traditional "inner loop" of development, a programmer writes a function, tests it, and moves to the next. Cherny, however, acts as a fleet commander.
"I run 5 Claudes in parallel in my terminal," Cherny wrote. "I number my tabs 1-5, and use system notifications to know when a Claude needs input."
By utilizing iTerm2 system notifications, Cherny effectively manages five simultaneous work streams. While one agent runs a test suite, another refactors a legacy module, and a third drafts documentation. He also runs "5-10 Claudes on claude.ai" in his browser, using a "teleport" command to hand off sessions between the web and his local machine.
This validates the "do more with less" strategy articulated by Anthropic President Daniela Amodei earlier this week. While competitors like OpenAI pursue trillion-dollar infrastructure build-outs, Anthropic is proving that superior orchestration of existing models can yield exponential productivity gains.
The counterintuitive case for choosing the slowest, smartest model
In a surprising move for an industry obsessed with latency, Cherny revealed that he exclusively uses Anthropic's heaviest, slowest model: Opus 4.5.
"I use Opus 4.5 with thinking for everything," Cherny explained. "It's the best coding model I've ever used, and even though it's bigger &amp; slower than Sonnet, since you have to steer it less and it's better at tool use, it is almost always faster than using a smaller model in the end."
For enterprise technology leaders, this is a critical insight. The bottleneck in modern AI development isn't the generation speed of the token; it is the human time spent correcting the AI's mistakes. Cherny's workflow suggests that paying the "compute tax" for a smarter model upfront eliminates the "correction tax" later.
One shared file turns every AI mistake into a permanent lesson
Cherny also detailed how his team solves the problem of AI amnesia. Standard large language models do not "remember" a company's specific coding style or architectural decisions from one session to the next.
To address this, Cherny's team maintains a single file named CLAUDE.md in their git repository. "Anytime we see Claude do something incorrectly we add it to the CLAUDE.md, so Claude knows not to do it next time," he wrote.

</div>

<div class="article-item" data-lang="fr" data-category="ai" data-source="Siecle Digital">

### 10. `FR` [Anthropic refuse un ultimatum du Pentagone sur l’usage militaire de son IA Claude](data/articles/11308f4cb8ade1452a7dffc1d857e23c.html)
**Source:** Siecle Digital
Aux États-Unis, Anthropic vient d’ouvrir un bras de fer inédit avec le ministère de la Défense, qui montre que l’intelligence artificielle s’invite désormais au coeur des arbitrages géopolitiques. En effet, comme le rapporte Le Figaro, l’administration Trump demande d’autoriser une utilisation sans restriction de Claude, son modèle d’IA, par le Pentagone. Une requête que l’entreprise […]

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 11. `EN` [LeRobot v0.4.0: Supercharging OSS Robot Learning](data/articles/9d667127d13fe08e8c0932e589340ee1.html)
**Source:** Hugging Face Blog
Back to Articles TL;DR Table-of-Contents Datasets: Ready for the Next Wave of Large-Scale Robot Learning What's New in Datasets v3.0? New Feature: Dataset Editing Tools! Simulation Environments: Expanding Your Training Grounds LIBERO Support Meta-World Integration Codebase: Powerful Tools For Everyone The New Pipeline for Data Processing Multi-GPU Training Made Easy Policies: Unleashing Open-World Generalization PI0 and PI0.5 GR00T N1.5 Robots: A New Era of Hardware Integration with the Plugin System Key Benefits Reachy 2 Integration Phone Integration The Hugging Face Robot Learning Course Deep Dive: The Modern Robot Learning Tutorial Final thoughts from the team We're thrilled to announce a series of significant advancements across LeRobot, designed to make open-source robot learning more powerful, scalable, and user-friendly than ever before! From revamped datasets to versatile editing tools, new simulation environments, and a groundbreaking plugin system for hardware, LeRobot is continuously evolving to meet the demands of cutting-edge embodied AI. TL;DR LeRobot v0.4.0 delivers a major upgrade for open-source robotics, introducing scalable Datasets v3.0, powerful new VLA models like PI0.5 and GR00T N1.5, and a new plugin system for easier hardware integration. The release also adds support for LI

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 12. `EN` [Hugging Face and VirusTotal collaborate to strengthen AI security](data/articles/e937302707a38d54a29f79a6d858aae2.html)
**Source:** Hugging Face Blog
Back to Articles Why this matters How the collaboration works Benefits for the community Join us We’re excited to announce a new collaboration between Hugging Face and VirusTotal, the world’s leading threat-intelligence and malware analysis platform.
This collaboration enhances the security of files shared across the Hugging Face Hub, helping protect the machine learning community from malicious or compromised assets. As of today HF Hub hosts 2.2 Million Public model artifacts. As we continue to grow into the world’s largest open platform for Machine Learning models and datasets, ensuring that shared assets remain safe is essential.
Threats can take many forms: Malicious payloads disguised as model files or archives
Files that have been compromised before upload
Binary assets linked to known malware campaigns
Dependencies or serialized objects that execute unsafe code when loaded By collaborating with VirusTotal, we’re adding an extra layer of protection and visibility by enabling files shared through H

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 13. `EN` [Google Cloud C4 Brings a 70% TCO improvement on GPT OSS with Intel and Hugging Face](data/articles/55fdbfbced3dc38ec5da8d6bc7860c4f.html)
**Source:** Hugging Face Blog
Back to Articles Intel and Hugging Face collaborated to demonstrate the real-world value of upgrading to Google’s latest C4 Virtual Machine (VM) running on Intel Xeon 6 processors (codenamed Granite Rapids (GNR)). We specifically wanted to benchmark improvements in the text generation performance of OpenAI GPT OSS Large Language Model(LLM). The results are in, and they are impressive, demonstrating a 1.7x improvement in Total Cost of Ownership(TCO) over the previous-generation Google C3 VM instances. The Google Cloud C4 VM instance further resulted in: 1.4x to 1.7x TPOT throughput/vCPU/dollar
Lower price per hour over C3 VM Introduction GPT OSS is a common name for an open-source Mixture of Experts (MoE) model released by OpenAI. An MoE model is a deep neural network architecture that uses specialized “expert” sub-networks and a “gating network” to decide which experts to use for a given input. MoE models allow you to scale your model capacity efficiently without linearly scaling compute costs. They also allow for specialization, where different “experts” learn different skills, allowing them to adapt to diverse data distributions.
Even with very large parameters, only a small subset of experts is activated per token, making CPU inference viable.
Intel and Hugging Face collaborated to merge an expert execution optimization (PR #40304)

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 14. `EN` [Smol2Operator: Post-Training GUI Agents for Computer Use](data/articles/3a64644c5419c6665bca960445b262df.html)
**Source:** Hugging Face Blog
Back to Articles TL;DR: This work shows how a lightweight vision–language model can acquire GUI-grounded skills and evolve into an agentic GUI coder. We release all training recipes, data-processing tools, resulting model, demo and datasets to enable full reproducibility and foster further research . Find the collection here. This video demonstrates the model obtained through the recipe described below, executing a task end-to-end. Table of Contents Introduction
1. Data Transformation and Unified Action Space
The Challenge of Inconsistent Action Spaces
Our Unified Approach
Example Data Transformation
Custom Action Space Adaptation with Action Space Converter
Key Features
Usage Example
Transformed and Released Datasets 2. Phase 1: From Zero to Perception
Training Data
Optimization Experiments
Image Resolution and Coordinate System Analysis
Key Findings
Phase 1 Results 3. Phase 2: From Perception to Cognition
Training Data
Phase 2 Results 4. All you need is Open Source
5. Conclusion
What's Next? Introduction Graphical User Interface (GUI) automation is one of the most challenging frontiers in computer vision. Developing models that see and interact with user interfaces enables AI agents to navigate mobile, desktop, and web platforms. This will reshape the future of digital interaction.
In th

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 15. `EN` [SAIR: Accelerating Pharma R&amp;D with AI-Powered Structural Intelligence](data/articles/b3dfa77083e8e00e297f4b5616e187d9.html)
**Source:** Hugging Face Blog
Back to Articles Accessing SAIR 1. Install essentials 2. Authenticate 3. Load the main table (sair.parquet) 4. (Optional) List available structure archives 5. (Optional) Download and extract structures Questions? This summer, SandboxAQ released the Structurally Augmented IC50 Repository (SAIR), the largest dataset of co-folded 3D protein-ligand structures paired with experimentally measured IC₅₀ labels, directly linking molecular structure to drug potency and overcoming a longstanding scarcity in training data. This dataset is now available on Hugging Face, and for the first time, researchers have open access to more than 5 million AI‑generated, high‑accuracy protein-ligand 3D structures, each paired with validated empirical binding potency data. SAIR is an open-sourced dataset and is publicly available for free under a permissive CC BY 4.0 license, making it immediately actionable for commercial and non-commercial R&amp;D pipelines. More than just a dataset, SAIR is a strategic asset that bridges the long-standing data gap in AI-powered drug design. It empowers pharmaceutical, biotech, and tech‑bio leaders to accelerate R&amp;D, expand target horizons, and supercharge AI models – moving more of the costly, lengthy drug design and optimization from the wet lab to in silico. This means shorter hit‑to‑lead timelines, more efficient lead optimization, fewer

</div>

<div class="article-item" data-lang="fr" data-category="ai" data-source="Siecle Digital">

### 16. `FR` [Londres s’impose comme capitale européenne de l’IA après la décision stratégique d’OpenAI](data/articles/7e5465b6bbf699bd0db8ed9edfc0ec39.html)
**Source:** Siecle Digital
Si l’Europe veut s’imposer comme un terrain stratégique pour les géants de l’intelligence artificielle, entre les ambitions politiques, les talents et les infrastructures technologiques, les capitales rivalisent pour attirer les laboratoires de recherche les plus avancés. Comme le rapporte Reuters, OpenAI a décidé de transformer son bureau londonien en son plus grand centre de recherche […]

</div>

<div class="article-item" data-lang="fr" data-category="ai" data-source="Siecle Digital">

### 17. `FR` [Google transforme Gemini en agent capable d’exécuter des tâches directement dans vos apps](data/articles/7e635342a0e52ce577f6ad473710a96c.html)
**Source:** Siecle Digital
Avec une nouvelle mise à jour annoncée par Google, Gemini change de dimension sur Android, l’intelligence artificielle devient un véritable agent capable d’agir directement dans les applications. Une évolution qui esquisse le futur de l’assistance mobile, où l’IA ne se contente plus de répondre, mais exécute. Cette fonctionnalité marque une étape supplémentaire dans la stratégie […]

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Towards Data Science">

### 18. `EN` [Scaling Feature Engineering Pipelines with Feast and Ray](data/articles/89777976b68a9f43472626b15f3a4e44.html)
**Source:** Towards Data Science
Utilizing feature stores like Feast and distributed compute frameworks like Ray in production machine learning systems

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Towards Data Science">

### 19. `EN` [Optimizing Deep Learning Models with SAM](data/articles/c73c04f1c1b9561fddfa6ad69749900d.html)
**Source:** Towards Data Science
A deep dive into the Sharpness-Aware-Minimization (SAM) algorithm and how it improves the generalizability of modern deep learning models

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 20. `EN` [The Future of the Global Open-Source AI Ecosystem: From DeepSeek to AI+](data/articles/74bdaef6b67f320ff6161c79d469de34.html)
**Source:** Hugging Face Blog
Back to Articles China's Organic Open Source AI Ecosystem The Established The Normalcy of "DeepSeek Moments" Foundations for the Future Looking Back to Look Forward This is the third and final blog in a three-part series on China's open source community's historical advancements since January 2025's "DeepSeek Moment." The first blog on strategic changes and open artifact growth is available here, and the second blog on architectural and hardware shifts is available here.
In this third article, we examine paths and trajectories of prominent Chinese AI organizations, and posit future directions for open source.
For AI researchers and developers contributing to and relying on the open source ecosystem and for policymakers understanding the rapidly changing environment, due to intraorganizational and global community gains, open source is the dominant and popular approach for Chinese AI organizations for the near future. Openly sharing artifacts from models to papers to deployment infrastructure maps to a strategy with the goal of large-scale deployment and integration. China's Organic Open Source AI Ecosystem Having examined strategic and architectural changes since DeepSeek's R1, we get a glimpse for the first time at how an organic open source AI ecosystem is taking shape in China. A culmination of powerful players, some established in open

</div>

<div class="article-item" data-lang="nl" data-category="ai" data-source="Hugging Face Blog">

### 21. `EN` [We Got Claude to Build CUDA Kernels and teach open models!](data/articles/419cdcf844282d47cb9508b7897864c6.html)
**Source:** Hugging Face Blog
Back to Articles What are agent skills? 1. Get the teacher (Claude Opus 4.5) to build a kernel 2. Make an agent skill from the trace 3. Take your skill to an open source, smaller, or cheaper model Deep dive tutorial into building kernels with agent skills Setup and Install Skill Generation Generate the Skill Evaluate on a Different Model How the evaluation in upskill works What's Next Resources The best thing about agent skills is upskilling your agents on hard problems. There are two ways to look at that: You can take Opus 4.5 or other SOTA models and tackle the hardest problems out there. You can take models that run on your laptop and upskill them to harder problems. In this blog post, we’ll show you how to take on the latter. This blog post walks through the process of using a new tool, upskill, to generate and evaluate agent skills with large models and use them with smaller models. We will benchmark upskill on the task of writing CUDA kernels for diffusers models, but the process is generally useful for cutting costs, or using smaller models on hard and domain-specific problems. What are agent skills? In case you missed it, agent skills are taking the coding agent game by storm. In fact, they’re a straightforward concept to define model context as files, like instructions as markdown and code as scripts. The file for

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 22. `EN` [One Year Since the “DeepSeek Moment”](data/articles/0235c23c484ad0b5bad50b080341d27d.html)
**Source:** Hugging Face Blog
Back to Articles The Seeds of China’s Organic Open Source AI Ecosystem DeepSeek R1: A Turning Point From DeepSeek to AI+: Strategic Realignmentt Global Reception and Response This is the first blog in a series that will examine China’s open source community’s historical advancements in the past year and its reverberations in shaping the entire ecosystem. Much of 2025’s progress can be traced back to January’s “DeepSeek Moment”, when Hangzhou-based AI company DeepSeek released their R-1 model. The first blog addresses strategic changes and the explosion of new open models and open source players. The second covers architectural and hardware choices largely by Chinese companies made in the wake of a growing open ecosystem, available here. The third analyzes prominent organizations’ trajectories and the future of the global open source ecosystem, available here.
For AI researchers and developers contributing to and relying on the open source ecosystem and for policymakers understanding the rapidly changing environment, there has never been a better time to build and release open models and artifacts, as proven by the past year’s immense growth catalyzed by DeepSeek. Notably, geopolitics has driven adoption; while models developed in China have been dominating across metrics throughout 2025 and new players leapfrogging each other, Western AI communities are see

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 23. `EN` [Introducing Falcon-H1-Arabic: Pushing the Boundaries of Arabic Language AI with Hybrid Architecture](data/articles/650e8a5e81a87d883c496555c8dbdd26.html)
**Source:** Hugging Face Blog
Back to Articles Discover more in our official blogpost, featuring an interactive experience The journey of building world-class Arabic language models has been one of continuous learning and iteration. Today, we're excited to announce Falcon-H1-Arabic, our most advanced Arabic language model family to date, representing a significant leap forward in both architecture and capabilities. This release embodies months of research, community feedback, and technical innovation, culminating in three powerful models that set new standards for Arabic natural language processing. Building on Success: The Evolution from Falcon-Arabic When we launched Falcon-Arabic a few months ago, the response from the community was both humbling and enlightening. Developers, researchers and students across the Arab world used the model for real use cases, pushing them to its limits and providing invaluable feedback. We learned where the model excelled and, more importantly, where it struggled. Long-context understanding, dialectal variations, mathematical reasoning, and domain-specific knowledge emerged as key areas requiring deeper attention.
We didn't just want to make incremental improvements, we wanted to fundamentally rethink our approach. The result is Falcon-H1-Arabic, a model family that addresses every piece of feedback we received while

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 24. `EN` [Join the AMD Open Robotics Hackathon](data/articles/3272be1f91a86ef16f6df887502cf674.html)
**Source:** Hugging Face Blog
Back to Articles Looking to show off your robotics aptitude? The AMD Open Robotics Hackathon hosted by AMD, Hugging Face, and Data Monsters is the place to do it. Whether you’re a student, hobbyist, startup founder, or seasoned engineer, this event brings together makers, coders, and roboticists for a fast-paced, hands-on competition that turns bold ideas into functioning demos.
The first of two in-person hackathons will take place from December 5-7, 2025 in Tokyo Japan. Our next stop will be in Paris France from December 12-14, 2025.
Preparing for the Hackathon:
Form a team of up to four roboticists (ages 18+) to take on two missions over the course of 3 days.
Mission 1 — An instructor-led exploration and preparation session. Learn how to set up the LeRobot development environment using AMD AI solutions
Mission 2 — Build your own creative solution to a real-world problem. Your team has two days to develop an innovative freestyle project using LeRobot technical proficiency:
•	Strong Linux development skills and experience with Python and related tooling and containerization
•	Machine learning skills, familiarity with PyTorch, and hands-on experience with model training and inference
•	Bonus if your team has experience with ROCm, LeRobot, and embedded development.
Hardware will be provided to contestants in the form of SO-101 robotics kits, AMD Ryz

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 25. `EN` [On the Shifting Global Compute Landscape](data/articles/376820da5860b54a24a128ba5e2c5d09.html)
**Source:** Hugging Face Blog
Back to Articles Summary The State of Global Compute The Beginning of a Rewiring The Reaction: Powering Chinese AI How China’s Compute Landscape Catalyzed the Cambrian Explosion of Open Models Advances in Compute-Constrained Environments Pushing the Technical Frontier The Aftermath: Hardware, Software and Soft Power From Sufficient to Demanded Domestic Synergy A New Software Landscape Looking Ahead Acknowledgements Appendix: A Timeline of Chip Usage and Controls Summary The status quo of AI chip usage, that was once almost entirely U.S.-based, is changing. China’s immense progress in open-weight AI development is now being met with rapid domestic AI chip development. In the past few months, highly performant open-weight AI models’ inference in China has started to be powered by chips such as Huawei’s Ascend and Cambricon, with some models starting to be trained using domestic chips. There are two large implications for policymakers and AI researchers and developers respectively: U.S. export controls correlates with expedited Chinese chip production, and chip scarcity in China likely incentivized many of the innovations that are open-sourced and shaping global AI development.
China’s chip development correlates highly with stronger export controls from the U.S. Under uncertainty of chip access, Chinese companies have innovated wit

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 26. `EN` [How to Build a Healthcare Robot from Simulation to Deployment with NVIDIA Isaac for Healthcare](data/articles/c4aeff990b2385fc3ef945306d231e9a.html)
**Source:** Hugging Face Blog
Back to Articles A hands-on guide to collecting data, training policies, and deploying autonomous medical robotics workflows on real hardware SO-ARM Starter Workflow; Building an Embodied Surgical Assistant Technical Implementation Sim-to-Real Mixed Training Approach Hardware Requirements Data Collection Implementation Simulation Teleoperation Controls Model Training Pipeline End-to-End Sim Collect–Train–Eval Pipelines Generate Synthetic Data in Simulation Train and Evaluate Policies Convert Models to TensorRT Getting Started Resources A hands-on guide to collecting data, training policies, and deploying autonomous medical robotics workflows on real hardware Simulation has been a cornerstone in medical imaging to address the data gap. However, in healthcare robotics until now, it's often been too slow, siloed, or difficult to translate into real-world systems. That’s now changing. With new advances in GPU-accelerated simulation and digital twins, developers can design, test, and validate robotic workflows entirely in virtual environments - reducing prototyping time from months to days, improving model accuracy, and enabling safer, faster innovation before a single device reaches the operating room.
That's why NVIDIA introduced Isaac for Healthcare earlier this year, a developer framework for AI healthcare robotics, that enables develope

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 27. `EN` [huggingface_hub v1.0: Five Years of Building the Foundation of Open Machine Learning](data/articles/10e206b36474a5194b9af21801258cd1.html)
**Source:** Hugging Face Blog
Back to Articles The Story Behind the Library The Foundation Years (2020-2021) The Great Shift: Git to HTTP (2022) An Expanding API Surface (2022–2024) Ready. Xet. Go! (2024-2025) Measuring Growth and Impact Building for the Next Decade Modern HTTP Infrastructure with httpx and hf_xet Agents Made Simple with MCP and Tiny-Agents A Fully-Featured CLI for Modern Workflows Cleaning House for the Future The Migration Guide Acknowledgments TL;DR: After five years of development, huggingface_hub has reached v1.0 - a milestone that marks the library's maturity as the Python package powering 200,000 dependent libraries and providing core functionality for accessing over 2 million public models, 0.5 million public datasets, and 1 million public Spaces. This release introduces breaking changes designed to support the next decade of open machine learning, driven by a global community of almost 300 contributors and millions of users. We highly recommend upgrading to v1.0 to benefit from major performance improvements and new capabilities.
pip install --upgrade huggingface_hub Major changes in this release include the migration to httpx as the backend library, a completely redesigned hf CLI (which replaces the deprecated huggingface-cli) featuring a Typer-based interface with a significantly expanded feature set, and full adoption of hf_xet for file t

</div>

<div class="article-item" data-lang="nl" data-category="ai" data-source="Hugging Face Blog">

### 28. `EN` [Get your VLM running in 3 simple steps on Intel CPUs](data/articles/4076498c2a777b9b673cd6a4ddc0ac36.html)
**Source:** Hugging Face Blog
Back to Articles With the growing capability of large language models (LLMs), a new class of models has emerged: Vision Language Models (VLMs). These models can analyze images and videos to describe scenes, create captions, and answer questions about visual content.
While running AI models on your own device can be difficult as these models are often computationally demanding, it also offers significant benefits: including improved privacy since your data stays on your machine, and enhanced speed and reliability because you're not dependent on an internet connection or external servers. This is where tools like Optimum Intel and OpenVINO come in, along with a small, efficient model like SmolVLM. In this blog post, we'll walk you through three easy steps to get a VLM running locally, with no expensive hardware or GPUs required (though you can run all the code samples from this blog post on Intel GPUs). Deploy your model with Optimum Small models like SmolVLM are built for low-resource consumption, but they can be further optimized. In this blog post we will see how to optimize your model, to lower memory usage and speedup inference, making it more efficient for deployment on devices with limited resources.
To follow this tutorial, you need to install optimum and openvino, which you can do with:
pip install optimum-intel[openvino] transf

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 29. `EN` [Fine-tune Any LLM from the Hugging Face Hub with Together AI](data/articles/12060dce30fd7f6c8882ca870577eff5.html)
**Source:** Hugging Face Blog
Back to Articles Getting Started in 5 Minutes How It Works: What This Means for Developers How Teams Are Using This Feature? Show Us What You Build! The pace of AI development today is breathtaking. Every single day, hundreds of new models appear on the Hugging Face Hub, some are specialized variants of popular base models like Llama or Qwen, others feature novel architectures or have been trained from scratch for specific domains. Whether it's a medical AI trained on clinical data, a coding assistant optimized for a particular programming language, or a multilingual model fine-tuned for specific cultural contexts, the Hugging Face Hub has become the beating heart of open-source AI innovation.
But here's the challenge: finding an amazing model is just the beginning. What happens when you discover a model that's 90% perfect for your use case, but you need that extra 10% of customization? Traditional fine-tuning infrastructure is complex, expensive, and often requires significant DevOps expertise to set up and maintain.
This is exactly the gap that Together AI and Hugging Face are bridging today. We're announcing a powerful new capability that makes the entire Hugging Face Hub available for fine-tuning using Together AI's infrastructure. Now, any compatible LLM on the Hub, whether it's from Meta or an individual contributor, can be fine-tuned with

</div>

<div class="article-item" data-lang="es" data-category="ai" data-source="Hugging Face Blog">

### 30. `EN` [mmBERT: ModernBERT goes Multilingual](data/articles/03f3c0f73735e0d065aa18b587bc69d5.html)
**Source:** Hugging Face Blog
Back to Articles TL;DR Training Data Training Recipe and Novel Components Architecture Three-Phase Training Approach Novel Training Techniques Results Natural Language Understanding (NLU) Retrieval Performance Learning Languages in the Decay Phase Efficiency Improvements Usage Examples Fine-tuning Examples Encoders Model Family and Links TL;DR This blog post introduces mmBERT, a state-of-the-art massively multilingual encoder model trained on 3T+ tokens of text in over 1800 languages. It shows significant performance and speed improvements over previous multilingual models, being the first to improve upon XLM-R, while also developing new strategies for effectively learning low-resource languages. mmBERT builds upon ModernBERT for a blazingly fast architecture, and adds novel components to enable efficient multilingual learning.
If you are interested in trying out the models yourself, some example boilerplate is available at the end of this blogpost! Training Data Figure 1: the training data is progressively annealed to include more languages and more uniform sampling throughout training. mmBERT was trained on a carefully curated multilingual dataset totaling over 3T tokens across three distinct training phases. The foundation of our training data consists of three primary open-source and high

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 31. `EN` [Kimina-Prover-RL](data/articles/b41b550c30c6e72e6c9fb66a9fd77079.html)
**Source:** Hugging Face Blog
Back to Articles A slimmed-down training pipeline from Kimina Prover, with core features and full compatibility with verl. We are happy to introduce kimina-prover-rl, an open-source training pipeline for formal theorem proving in Lean 4, based on a structured reasoning-then-generation paradigm inspired by DeepSeek-R1.
This training pipelinee is a simplified version of the system we used to train Kimina Prover, preserving the key components of the system and offering full compatibility with the open-source Verl framework.
It is released as part of a fork of Verl containing the complete training recipe in recipe/kimina-prover-rl, allowing anyone to reproduce our experiments or adapt the setup to their own models and datasets. All information to setup and launch the pipeline can be found in the README of the recipe.
As a result of this training pipeline, we are releasing two models: AI-MO/Kimina-Prover-RL-1.7B, a 1.7B-parameter model that achieves 76.63% Pass@32 on the MiniF2F benchmark — setting a new state of the art for open-source models in this size category
AI-MO/Kimina-Prover-RL-0.6B, a 0.6B-parameter model that achieves 71.30% Pass@32 on the MiniF2F benchmark — also setting a new state of the art for open-source models in this size category. Introduction kimina-prover-rl i

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 32. `EN` [Neural Super Sampling is here!](data/articles/2f93aa5f10c47d4d85d789acc078f68d.html)
**Source:** Hugging Face Blog
Back to Articles Elevated by machine learning Learn about our NSS Model How we trained the model Get started experimenting with NSS today! Neural Super Sampling (NSS), a next-generation AI-powered upscaling solution from Arm is released for graphics and gaming developers to start experimenting today! Elevated by machine learning NSS is designed for real-time performance on future mobile devices with Arm Neural Technology. However, latency depends on implementation factors such as GPU configuration, resolution, and use case. In our Enchanted Castle demo video below, NSS reduced GPU workload by 50 percent. The model rendered at 540p and upscaled to 1080p in just 4ms in sustained performance setup. Your browser does not support the video tag. Learn about our NSS Model Neural Super Sampling (NSS) is a parameter prediction model for real-time temporal super sampling developed by Arm, optimized for execution on Neural Accelerators (NX) in mobile GPUs. It enables high-resolution rendering at a lower compute cost by reconstructing high-quality output frames from low-resolution temporal inputs. NSS is particularly suited for mobile gaming, XR, and other power-constrained graphics use cases.
Get started with our NSS model today.
If you want to go deeper check out the following resources: Technical Blog: How Neural Super Sampl

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 33. `EN` [Measuring Open-Source Llama Nemotron Models on DeepResearch Bench](data/articles/92e6cf93ec91513708d696cfc86ea6fd.html)
**Source:** Hugging Face Blog
Measuring Open-Source Llama Nemotron Models on DeepResearch Bench

</div>

<div class="article-item" data-lang="fr" data-category="ai" data-source="Siecle Digital">

### 34. `FR` [Mistral AI s’allie à Accenture pour accélérer le déploiement massif de l’IA en entreprise](data/articles/75b1c8d0f1b9c5a8446509a6c994a3d1.html)
**Source:** Siecle Digital
Alors que de nombreuses entreprises multiplient les expérimentations autour de l’intelligence artificielle, le passage à l’échelle reste encore complexe, comme en témoigne une récente étude du MIT. Entre les projets avortés qui s’enchaînent et les déploiements réellement industrialisés, le fossé est bien réel. Face à ce constat, les éditeurs d’IA cherchent de nouveaux relais de […]

</div>

<div class="article-item" data-lang="fr" data-category="ai" data-source="Numerama Tech">

### 35. `FR` [Fou, faucon calculateur et Dr Jekyll et M. Hyde : les profils terrifiants des IA quand elles ont des armes nucléaires](data/articles/ccf53511e4e8a64f41e38f0899842225.html)
**Source:** Numerama Tech
Dans le film culte Wargames, un supercalculateur menaçait de lancer une guerre nucléaire. En 2026, la réalité dresse un constat tout aussi plus inquiétant : placées aux commandes de simulations géopolitiques, les intelligences artificielles de pointe comme GPT-5.2 ou Gemini 3 Flash choisissent l'escalade atomique dans 95 % des cas.

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Towards Data Science">

### 36. `EN` [Detecting and Editing Visual Objects with Gemini](data/articles/24880b7593e202ca7e44643e7081a138.html)
**Source:** Towards Data Science
A practical guide to identifying, restoring, and transforming elements within your images

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Towards Data Science">

### 37. `EN` [Take a Deep Dive into Filtering in DAX](data/articles/5e082b78e95fac43d2d7a1af832c25db.html)
**Source:** Towards Data Science
Have you ever wondered what happens when you apply a filter in a DAX expression? Well, Today I will take you on a deep dive into this fascinating topic, with examples to help you learn something new and surprising.

</div>

<div class="article-item" data-lang="fr" data-category="ai" data-source="Siecle Digital">

### 38. `FR` [L’intelligence artificielle menace-t-elle vraiment le modèle économique des éditeurs de logiciels ?](data/articles/fc7956414759fcd90b0a4ceb06f7dbb3.html)
**Source:** Siecle Digital
La technologie n’est plus le refuge automatique qu’elle était devenue. Après plusieurs années d’euphorie, portées par la promesse d’une intelligence artificielle capable de transformer tous les secteurs, les marchés ont brutalement changé de ton récemment. L’IA, hier moteur incontesté de croissance, est soudain apparue comme une menace potentielle pour une partie des modèles économiques des […]

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Towards Data Science">

### 39. `EN` [Aliasing in Audio, Easily Explained: From Wagon Wheels to Waveforms](data/articles/a276735be239f1afe76b64f5cfcb9741.html)
**Source:** Towards Data Science
Understanding the foundational distortion of digital audio from first principles, with worked examples and visual intuition

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Towards Data Science">

### 40. `EN` [AI Bots Formed a Cartel. No One Told Them To.](data/articles/f8f4ae7c73e359365ee112ab2ad9c2af.html)
**Source:** Towards Data Science
Inside the research that shows algorithmic price-fixing isn't a bug in the code. It's a feature of the math.

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Towards Data Science">

### 41. `EN` [Build Effective Internal Tooling with Claude Code](data/articles/27e7f8b6a9ea94d7a6e21617f9971908.html)
**Source:** Towards Data Science
Use Claude Code to quickly build completely personalized applications

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 42. `EN` [Train AI models with Unsloth and Hugging Face Jobs for FREE](data/articles/8464cde736df074ca570c5c52bb9ed72.html)
**Source:** Hugging Face Blog
Back to Articles This blog post covers how to use Unsloth and Hugging Face Jobs for fast LLM fine-tuning (specifically LiquidAI/LFM2.5-1.2B-Instruct ) through coding agents like Claude Code and Codex. Unsloth provides ~2x faster training and ~60% less VRAM usage compared to standard methods, so training small models can cost just a few dollars.
Why a small model? Small language models like LFM2.5-1.2B-Instruct are ideal candidates for fine-tuning. They are cheap to train, fast to iterate on, and increasingly competitive with much larger models on focused tasks. LFM2.5-1.2B-Instruct runs under 1GB of memory and is optimized for on-device deployment, so what you fine-tune can be served on CPUs, phones, and laptops. You will need We are giving away free credits to fine-tune models on Hugging Face Jobs. Join the Unsloth Jobs Explorers organization to claim your free credits and one-month Pro subscription. A Hugging Face account (required for HF Jobs) Billing setup (for verification, you can monitor your usage and manage your billing in your billing page).
A Hugging Face token with write permissions
(optional) A coding agent (Open Code, Claude Code, or Codex) Run the Job If you want to train a model using HF Jobs and Unsloth, you can simply use the hf jobs CLI to submit a job.
First, you need to install the hf CLI.

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 43. `EN` [Custom Kernels for All from Codex and Claude](data/articles/7553ddfa4241b1318c80c67db03b5ff6.html)
**Source:** Hugging Face Blog
Back to Articles tl;dr: We built an agent skill that teaches coding agents how to write production CUDA kernels. Then we pointed Claude and Codex at two real targets: a diffusers pipeline and a transformers model. The agents produced working kernels for both, with correct PyTorch bindings and benchmarks, end to end.
Writing CUDA kernels is hard. Writing CUDA kernels that correctly integrate with transformers and diffusers is harder. There are architecture-specific memory access patterns, vectorization strategies, warp shuffle reductions, and a dozen integration pitfalls that trip up even experienced developers. It is exactly the kind of specialized, high-stakes problem where agent skills shine.
We gave coding agents the domain knowledge they need, like which GPU architecture to target, how to structure a kernel-builder project, when to use shared memory versus registers, and how to write PyTorch bindings. The agents did the rest. If you have used the LLM training skill or read We Got Claude to Teach Open Models, the pattern will feel familiar: package domain expertise into a skill, point the agent at a problem, and let it work. Why a skill for kernels? The Kernel Hub solved the distribution of custom hardware kernels. You can load pre-compiled kernels from the Hub with a single get_kernel call. No builds, no flags. However, someone still

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 44. `EN` [OpenEnv in Practice: Evaluating Tool-Using Agents in Real-World Environments](data/articles/a09280a19158c371ffe917883d12d42c.html)
**Source:** Hugging Face Blog
Back to Articles What Is OpenEnv? The Calendar Gym: A Production-Grade Benchmark What We Learned Looking Ahead Appendix: Common error cases in tool use Specific error cases found in the wild AI agents often perform impressively in controlled research settings, yet struggle when deployed in real-world systems where they must reason across multiple steps, interact with real tools and APIs, operate under partial information, and recover from errors in stateful, permissioned environments—highlighting a persistent gap between research success and production reliability.
OpenEnv is an open-source framework from Meta and Hugging Face designed to address this challenge by standardizing how agents interact with real environments. As part of this collaboration, Turing contributed a production-grade calendar management environment to study tool-using agents under realistic constraints such as access control, temporal reasoning, and multi-agent coordination.
In this post, we explore how OpenEnv works in practice, why calendars serve as a powerful benchmark for real-world agent evaluation, and what our findings reveal about the current limitations of tool-using agents. What Is OpenEnv? OpenEnv is a framework for evaluating AI agents against real systems rather than simulations. It provides a standardized way to connect agents to real tools and

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 45. `EN` [Introducing SyGra Studio](data/articles/4b956a170e779a88bfa5657dd6178350.html)
**Source:** Hugging Face Blog
Back to Articles Step 1: Configure the data source Step 2: Build the flow visually Step 3: Review and run See it in action! Running Existing Workflows Run the Glaive Code Assistant workflow Get started SyGra 2.0.0 introduces Studio, an interactive environment that turns synthetic data generation into a transparent, visual craft. Instead of juggling YAML files and terminals, you compose flows directly on the canvas, preview datasets before committing, tune prompts with inline variable hints, and watch executions stream live—all from a single pane. Under the hood it’s the same platform, so everything you do visually generates the corresponding SyGra compatible graph config and task executor scripts. What Studio lets you do Configure and validate models with guided forms (OpenAI, Azure OpenAI, Ollama, Vertex, Bedrock, vLLM, custom endpoints).
Connect Hugging Face, file-system, or ServiceNow data sources and preview rows before execution.
Configure nodes by selecting models, writing prompts (with auto-suggested variables), and defining outputs or structured schemas.
Design downstream outputs using shared state variables and Pydantic-powered mappings.

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 46. `EN` [Community Evals: Because we're done trusting black-box leaderboards over the community](data/articles/54a2e4d63e7f2c9f9eeb830439ab32e8.html)
**Source:** Hugging Face Blog
Back to Articles Evaluation is broken What We're Shipping Why This Matters Get Started TL;DR: Benchmark datasets on Hugging Face can now host leaderboards. Models store their own eval scores. Everything links together. The community can submit results via PR. Verified badges prove that the results can be reproduced. Evaluation is broken Let's be real about where we are with evals in 2026. MMLU is saturated above 91%. GSM8K hit 94%+. HumanEval is conquered. Yet some models that ace benchmarks still can't reliably browse the web, write production code, or handle multi-step tasks without hallucinating, based on usage reports. There is a clear gap between benchmark scores and real-world performance.
Furthermore, there is another gap within reported benchmark scores. Multiple sources report different results. From Model Cards, to papers, to evaluation platforms, there is no alignment in reported scores. The result is that the community lacks a single source of truth. What We're Shipping Decentralized and transparent evaluation reporting.
We are going to take evaluations on the Hugging Face Hub in a new direction by decentralizing reporting and allowing the entire community to openly report scores for benchmarks. At first, we will start with a shortlist of 4 benchmarks and over time we’ll expand to the most relev

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 47. `EN` [Architectural Choices in China's Open-Source AI Ecosystem: Building Beyond DeepSeek](data/articles/c2236e93c437ab6285f85bacbd57e344.html)
**Source:** Hugging Face Blog
Architectural Choices in China's Open-Source AI Ecosystem: Building Beyond DeepSeek

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 48. `EN` [The Open Evaluation Standard: Benchmarking NVIDIA Nemotron 3 Nano with NeMo Evaluator](data/articles/c1fd5fcd7f1c01ccaf2db310506edfdb.html)
**Source:** Hugging Face Blog
Back to Articles It has become increasingly challenging to assess whether a model’s
reported improvements reflect genuine advances or variations in
evaluation conditions, dataset composition, or training data that
mirrors benchmark tasks. The NVIDIA Nemotron approach to openness
addresses this by publishing transparent and reproducible evaluation
recipes that make results independently verifiable.
NVIDIA released Nemotron 3 Nano 30B
A3B
with an explicitly open evaluation approach to make that distinction
clear. Alongside the model card, we are publishing the complete
evaluation recipe used to generate the results, built with the
NVIDIA NeMo
Evaluator library, so
anyone can rerun the evaluation pipeline, inspect the artifacts, and
analyze the outcomes independently.
We believe that open innovation is the foundation of AI progress. This
level of transparency matters because most model evaluations omit
critical details. Configs, prompts, harness versions, runtime settings,
and logs are often missing or underspecified, and even small differences
in these parameters can materially change results. Without a complete
recipe, it’s nearly impossible to tell whether a model is genuinely
more intelligent or simply optimized for a benchmark.
This blog shows developers exactly how to reproduce the evaluation
behind Nemotron 3 Nano 30B
A3B
usin

</div>

<div class="article-item" data-lang="fr" data-category="ai" data-source="Hugging Face Blog">

### 49. `FR` [CUGA on Hugging Face: Democratizing Configurable AI Agents](data/articles/ff468cdfcbd0ef94f8e08fcc68d8a36e.html)
**Source:** Hugging Face Blog
Back to Articles Introduction Introduction What is CUGA? Open Source and Open Models Integration with Langflow: Visual Agent Design Made Simple Try the Hugging Face Demo: A Hands-On Preview Conclusion and Call to Action AI agents are rapidly becoming essential for building intelligent applications, but creating robust, adaptable agents that scale across domains remains a challenge. Many existing frameworks struggle with brittleness, tool misuse, and failures when faced with complex workflows.
CUGA (Configurable Generalist Agent) was designed to overcome these limitations. It's an open-source, AI Agent that combines flexibility, reliability, and ease of use for enterprise use cases. By abstracting orchestration complexity, CUGA empowers developers to focus on domain requirements rather than the internals of agent building. And now, with its integration into Hugging Face Spaces, experimenting with CUGA and open models has never been easier. What is CUGA? CUGA is a configurable, general-purpose AI agent that supports complex, multi-step tasks across web and API environments. It has achieved state-of-the-art performance on leading benchmarks: #1 on AppWorld - a benchmark with 750 real-world tasks across 457 APIs Top-tier on WebArena (#1 from 02/25 - 09/25) - showcases CUGA Computer Use capabilities with a compl

</div>

<div class="article-item" data-lang="fr" data-category="ai" data-source="Hugging Face Blog">

### 50. `FR` [We Got Claude to Fine-Tune an Open Source LLM](data/articles/e4d18feec6ae5b53de8bf454a116fc70.html)
**Source:** Hugging Face Blog
We Got Claude to Fine-Tune an Open Source LLM

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 51. `EN` [Introducing AnyLanguageModel: One API for Local and Remote LLMs on Apple Platforms](data/articles/d0e47e1fa6f211a165f23b45cebc2168.html)
**Source:** Hugging Face Blog
Back to Articles The Solution Why Foundation Models as the Base API Package Traits: Include Only What You Need Image Support (and API Design Trade-offs) Try It Out: chat-ui-swift What's Next Get Involved Links LLMs have become essential tools for building software.
But for Apple developers, integrating them remains unnecessarily painful.
Developers building AI-powered apps typically take a hybrid approach,
adopting some combination of: Local models using Core ML or MLX for privacy and offline capability
Cloud providers like OpenAI or Anthropic for frontier capabilities
Apple's Foundation Models as a system-level fallback Each comes with different APIs, different requirements, different integration patterns.
It's a lot, and it adds up quickly.
When I interviewed developers about building AI-powered apps,
friction with model integration came up immediately.
One developer put it bluntly: I thought I'd quickly use the demo for a test and maybe a quick and dirty build
but instead wasted so much time.
Drove me nuts. The cost to experiment is high,
which discourages developers from discovering that
local, open-source models might actually work great for their use case.
Today we're announcing AnyLanguageModel,
a Swift package that provides a drop-in replacement for Apple's Foundation Models framework
with support for multiple model providers.
Our goal is to reduc

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 52. `EN` [Voice Cloning with Consent](data/articles/e4cbf13488696e0deed63f3dc509d03e.html)
**Source:** Hugging Face Blog
Back to Articles Ethics in Practice: Consent as System Infrastructure The Technical Details Approach Unlocking the Voice Consent Gate In this blog post, we introduce the idea of a 'voice consent gate' to support voice cloning with consent. We provide an example Space and accompanying code to start the ball rolling on the idea.
Realistic voice generation technology has gotten uncannily good in the past few years. In some situations, it’s possible to generate a synthetic voice that sounds almost exactly like the voice of a real person. And today, what once felt like science fiction is reality: Voice cloning. With just a few seconds of recorded speech, anyone’s voice can be made to say almost anything. Voice generation, and in particular the subtask of voice cloning, has notable risks and benefits. The risks of “deepfakes”, such as the cloned voice of former President Biden used in robocalls, can mislead people into thinking that people have said things that they haven’t said. On the other hand, voice cloning can be a powerful beneficial tool, helping people who’ve lost the ability to speak communicate in their own voice again, or assisting people in learning new languages and dialects.
So how do we create meaningful use without malicious use? We’re exploring one possible answer: a voice consent gate. That’s a system where a voice can be cloned only when the

</div>

<div class="article-item" data-lang="fr" data-category="ai" data-source="Hugging Face Blog">

### 53. `FR` [Streaming datasets: 100x More Efficient](data/articles/69efa858b7d4dad088b218d0fe4cf6d8.html)
**Source:** Hugging Face Blog
Back to Articles TLDR Streaming: The Same Easy API The Challenge: Streaming at Scale Under the Hood: What We Improved How are we faster than plain S3: Xet Need a custom streaming pipeline ? Push streaming to the limit Get Started and See the Difference TLDR We boosted load_dataset('dataset', streaming=True), streaming datasets without downloading them with one line of code!
Start training on multi-TB datasets immediately, without complex setups, downloading, no "disk out of space", or 429 “stop requesting!” errors.It's super fast! Outrunning our local SSDs when training on 64xH100 with 256 workers downloading data.
We've improved streaming to have 100x fewer requests, → 10× faster data resolution → 2x sample/sec, → 0 worker crashes at 256 concurrent workers. Loading data, especially at the terabyte scale, is a major pain in any machine learning workflow. We suffered this while training SmolLM3, at one point we had to wait 3 hours before each run to download enough data. Streaming has always been possible in the datasets library, but large scale training with massive datasets remained a challenge. That changes today . We spent a few months improving the backend, focusing on streaming datasets to make it faster and more efficient.
What did we do exactly? Streaming: The Same Easy API First things first: our

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 54. `EN` [Sentence Transformers is joining Hugging Face!](data/articles/ff3cbd8a3bd98d11f0a0b18065d535ff.html)
**Source:** Hugging Face Blog
Back to Articles Project History Acknowledgements Getting Started Today, we are announcing that Sentence Transformers is transitioning from Iryna Gurevych’s Ubiquitous Knowledge Processing (UKP) Lab at the TU Darmstadt to Hugging Face. Hugging Face's Tom Aarsen has already been maintaining the library since late 2023 and will continue to lead the project. At its new home, Sentence Transformers will benefit from Hugging Face's robust infrastructure, including continuous integration and testing, ensuring that it stays up-to-date with the latest advancements in Information Retrieval and Natural Language Processing.
Sentence Transformers (a.k.a. SentenceBERT or SBERT) is a popular open-source library for generating high-quality embeddings that capture semantic meaning. Since its inception by Nils Reimers in 2019, Sentence Transformers has been widely adopted by researchers and practitioners for various natural language processing (NLP) tasks, including semantic search, semantic textual similarity, clustering, and paraphrase mining. After years of development and training by and for the community, over 16,000 Sentence Transformers models are publicly available on the Hugging Face Hub, serving more than a million monthly unique users.
"Sentence Transformers has been a huge success story and a culmination of our long-standing research on computing semantic similarities

</div>

<div class="article-item" data-lang="nl" data-category="ai" data-source="Hugging Face Blog">

### 55. `EN` [Supercharge your OCR Pipelines with Open Models](data/articles/d74c14ff51b09c5a645ec2a0bb4a532c.html)
**Source:** Hugging Face Blog
Back to Articles We have added Chandra and OlmOCR-2 to this blog, as well as OlmOCR Scores of the models TL;DR: The rise of powerful vision-language models has transformed document AI. Each model comes with unique strengths, making it tricky to choose the right one. Open-weight models offer better cost efficiency and privacy. To help you get started with them, we’ve put together this guide.
In this guide, you’ll learn: The landscape of current models and their capabilities When to fine-tune models vs. use models out-of-the-box Key factors to consider when selecting a model for your use case How to move beyond OCR with multimodal retrieval and document QA By the end, you’ll know how to choose the right OCR model, start building with it, and gain deeper insights into document AI. Let’s go! Table-of-Contents Supercharge your OCR Pipelines with Open Models
Brief Introduction to Modern OCR
Model Capabilities
Transcription
Handling complex components in documents
Output formats
Locality Awareness in OCR
Model Prompting Cutting-edge Open OCR Models
Comparing Latest Models
Evaluating Models
Benchmarks
Cost-efficiency
Open OCR Datasets Tools to Run Models
Locally
Remotely Going Beyond OCR
Visual Document Retrievers
Using Vision Language Models for Document Question Answering Wrapping up Brief Int

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 56. `EN` [Unlock the power of images with AI Sheets](data/articles/d90682f3281d2c3b7b5fb1c149636858.html)
**Source:** Hugging Face Blog
The Wayback Machine is an initiative of the Internet Archive, a 501(c)(3) non-profit, building a digital library of Internet sites and other cultural artifacts in digital form. Other projects include Open Library &amp; archive-it.org. Your use of the Wayback Machine is subject to the Internet Archive's Terms of Use.

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 57. `EN` [AI for Food Allergies](data/articles/e1f0c29a70402c03d92347aa13a87a8c.html)
**Source:** Hugging Face Blog
Back to Articles Current State of The Art: Where AI Meets Food Allergy Research The need for data Collection release The Protein and Molecular Allergenicity Layer The Clinical, Immunological, and Therapeutic Layer The Food, Ingredient, and Regulatory Layer Accessing the collection What’s coming next? Final remarks Appendix SDAP 2.0: Structural Database of Allergenic Proteins DAVIS: Kinase inhibitor binding affinities QsarDB: repository for (Q)SAR models e-Drug3D Database Stanford Drug Data: Offsides/Twosides DrugCentral: open drug information repository MedKG: medical knowledge graph PDBBind+: protein-ligand binding database Human Metabolome Database (HMDB) Therapeutic Target Database Therapeutic Data Commons (TDC) STITCH: Chemical–Protein Interaction Database M3-20M Multi-Modal Molecule Dataset SAIR (Structurally Augmented IC Repository) AllerBase AlgPred 2.0 Dataset AllerCatPro 2.0 AllergenAI NetAllergen QM9: Molecular Property Prediction Dataset for Quantum Chemistry Let’s get straight to the point: worldwide, an estimated 220 million people suffer from at least one food allergy, and in the United States alone, this accounts for roughly 10% of the population. This means that if you don’t have an allergy, you’ll likely know someone who does — and it’s not a pleasant situation to be in. This condition affects no

</div>

<div class="article-item" data-lang="it" data-category="ai" data-source="Hugging Face Blog">

### 58. `EN` [Nemotron-Personas-India: Synthesized Data for Sovereign AI](data/articles/8194bcba2ae838e056fa6af41227a55d.html)
**Source:** Hugging Face Blog
Back to Articles Open Data for India's AI Future What’s in the Dataset? How We Built It Data Generation Pipeline Embedded Cultural Context Private By Design Who This Is For Practical AI Applications Why It Matters Start Building with Nemotron-Personas-India A compound AI approach to Indian personas grounded in real-world distributions Open Data for India's AI Future India represents one of the world's largest AI opportunities — with over 700 million internet users, a multitude of languages, and a rapidly growing developer ecosystem. Yet, most open datasets reflect Western norms and English-only contexts, creating a data gap that limits AI adoption in India's multilingual, multi-script environment.
Today, we're releasing Nemotron-Personas-India, the first open synthetic dataset of Indic personas aligned to India's real-world demographic, geographic, and cultural distributions. Licensed under CC BY 4.0, this dataset offers a privacy-preserving, regulation-ready foundation for scaling AI systems that reflect Indian society—without relying on sensitive personal data.
Built with NeMo Data Designer, NVIDIA's enterprise-grade synthetic data generation microservice, Nemotron-Personas-India extends our global collection of Sovereign AI datasets. It builds on the success of our US and Japan persona datasets and includes

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 59. `EN` [Gaia2 and ARE: Empowering the community to study agents](data/articles/e2bc7f122bb31bcf0f78241efdc8b2b2.html)
**Source:** Hugging Face Blog
Back to Articles Gaia2: Agentic Evaluation on Real Life Assistant Tasks How does Gaia2 run? Results Compare with your favorite models! Evaluating on Gaia2 Beyond Gaia2: study your agents with ARE 1) Testing an agent on a simple task: event organisation 2) Understanding agents: deep diving the traces 3) Playing around and extending the demo: Connecting the agent to your own MCPs Conclusion In an ideal world, AI agents would be reliable assistants. When given a query, they would easily manage ambiguity in instructions, construct step-by-step plans, correctly identify necessary resources, execute those plans without getting sidetracked, and adapt to unexpected events, all while maintaining accuracy and avoiding hallucinations.
However, developing agents and testing these behaviors is no small feat: if you have ever tried to debug your own agent, you’ve probably observed how tedious and frustrating this can be. Existing evaluation environments are tightly coupled with the tasks they evaluate, lack real-world flexibility, and do not reflect the messy reality of open-world agents: simulated pages never fail to load, events don’t spontaneously emerge, and asynchronous chaos is absent.
That’s why we’re very happy to introduce Gaia2, the follow-up to the agentic benchmark GAIA, allowing analysis of considerably more complex be

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 60. `EN` [Jupyter Agents: training LLMs to reason with notebooks](data/articles/6d0a334604ba5945433f7c37780471bb.html)
**Source:** Hugging Face Blog
Back to Articles The past year has been all about giving LLMs more tools and autonomy to solve more complex and open ended tasks. The goal of the Jupyter Agent is to give the model the ultimate tool: code execution. A natural way to display multi-step code execution together with reasoning is within a Jupyter Notebook, which consists of code and markdown cells. So we built Jupyter Agent to act as an agent that can execute code directly inside a Jupyter notebook and use this environment to solve data analysis and data science tasks. Think of it like Cursor, but living natively inside your data science workflow.We built a demo of this vision with Qwen-3 Coder, currently one of the strongest coding models. This is a follow-up to our earlier work on jupyter-agent (v1).
While large models are starting to show useful behavior, the key question is how we can continue improving them. To this end, we focus on strengthening smaller models to perform well on agentic data science tasks as they currently struggle to compete with the large models.
The goal of this project is to build a pipeline to first generate high-quality training data, then fine-tune an existing small model, and finally evaluate whether the model's performance improves on relevant benchmarks.
Let’s begin with the last step: selecting a strong benchmark for evaluating models on data science tasks.

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 61. `EN` [NVIDIA Releases 6 Million Multi-Lingual Reasoning Dataset](data/articles/81cf759c2a074ca515a86da273b557fd.html)
**Source:** Hugging Face Blog
Back to Articles Authors: Dhruv Nathawani, Shuoyang Ding US, Vitaly Lavrukhin US, Jane Polak Scowcroft US, Oleksii Kuchaiev US NVIDIA continues releasing permissive datasets in support of the open ecosystem with 6 Million Multilingual Reasoning Dataset.
Continuing the success of the recent Nemotron Post-Training Dataset v1 release used in Llama Nemotron Super model, and our Llama Nemotron Post-Training Dataset release earlier this year, we’re excited to release the reasoning dataset translated into five target languages: French, Spanish, German, Italian, and Japanese.
The newly released NVIDIA Nemotron Nano 2 9B brings these capabilities to the edge with leading accuracy and efficiency with a hybrid Transformer–Mamba architecture and a configurable thinking budget—so you can dial accuracy, throughput, and cost to match your real‑world needs. Model Highlights (TL;DR) Model size: 9B parameters
Architecture: Hybrid Transformer–Mamba (Mamba‑2 + a small number of attention layers) for higher throughput at similar accuracy to Transformer‑only peers
Throughput: Up to 6× higher token generation than other leading models in its size class
Cost: Thinking budget lets you control how many “thinking” tokens are used—saving up to 60% lower reasoning costs
Target: Agents for customer service, support chatbots, analytics copilots, and edge/RTX dep

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 62. `EN` [MCP for Research: How to Connect AI to Research Tools](data/articles/eaf4a179e68438b8ae437a5f7d641bf7.html)
**Source:** Hugging Face Blog
Back to Articles Research Discovery: Three Layers of Abstraction 1. Manual Research 2. Scripted Tools 3. MCP Integration Setup and Usage Quick Setup Learn More Academic research involves frequent research discovery: finding papers, code, related models and datasets. This typically means switching between platforms like arXiv, GitHub, and Hugging Face, manually piecing together connections.
The Model Context Protocol (MCP) is a standard that allows agentic models to communicate with external tools and data sources. For research discovery, this means AI can use research tools through natural language requests, automating platform switching and cross-referencing. Research Discovery: Three Layers of Abstraction Much like software development, research discovery can be framed in terms of layers of abstraction. 1. Manual Research At the lowest level of abstraction, researchers search manually and cross-reference by hand.
# Typical workflow:
1. Find paper on arXiv
2. Search GitHub for implementations
3. Check Hugging Face for models/datasets
4. Cross-reference authors and citations

</div>

<div class="article-item" data-lang="de" data-category="ai" data-source="Hugging Face Blog">

### 63. `EN` [🇵🇭 FilBench - Can LLMs Understand and Generate Filipino?](data/articles/7c07efa4a8fa8ee922acbe460a5a9032.html)
**Source:** Hugging Face Blog
Back to Articles FilBench What did we learn from FilBench? Finding #1: Although region-specific LLMs still lag behind GPT-4, collecting data to train these models is still a promising direction Finding #2: Filipino translation is still a difficult task for LLMs Finding #3: Open LLMs Remain a Cost-Effective Choice for Filipino Language Tasks Does your LLM work on Philippine Languages? Try it on FilBench! Acknowledgements Citation As large language models (LLMs) become increasingly integrated into our lives, it becomes crucial to assess whether they reflect the nuances and capabilities of specific language communities.
For example, Filipinos are among the most active ChatGPT users globally, ranking fourth in ChatGPT traffic (behind the United States, India, and Brazil [1] [2]), but despite this strong usage, we lack a clear understanding of how LLMs perform for their languages, such as Tagalog and Cebuano.
Most of the existing evidence is anecdotal, such as screenshots of ChatGPT responding in Filipino as proof that it is fluent.
What we need instead is a systematic evaluation of LLM capabilities in Philippine languages. That’s why we developed FilBench: a comprehensive evaluation suite to assess the capabilities of LLMs for Tagalog, Filipino (the standardized form of Tagalog), and Cebuano, on fluency, linguistic and translati

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 64. `EN` [Five Big Improvements to Gradio MCP Servers](data/articles/4d7ed9232debcab2517b8220452b0f20.html)
**Source:** Hugging Face Blog
Back to Articles Seamless Local File Support Real-time Progress Notifications Transform OpenAPI Specs to MCP in One Line Improvements to Authentication Modifying Tool Descriptions Conclusion Gradio is an open-source Python package for creating AI-powered web applications. Gradio is compliant with the MCP server protocol and powers thousands of MCP servers hosted on Hugging Face Spaces. The Gradio team is betting big on Gradio and Spaces being the best way to build and host AI-powered MCP servers.
To that end, here are some of the big improvements we've added to Gradio MCP servers as of version 5.38.0. Seamless Local File Support If you've tried to use a remote Gradio MCP server that takes a file as input (image, video, audio), you've probably encountered this error:
This happens because the Gradio server is hosted on a different machine, meaning any input files must be accessible via a public URL so they can be downloaded remotely.
While many ways exist to host files online, they all add a manual step to your workflow. In the age of LLM agents, shouldn't we expect them to handle this for you?
Gradio now includes a "File Upload" MCP server that agents can use to upload files directly to your Gradio application. If any tools in your Gradio MCP server require file inputs, the connection documentation will now show you how to start the "File Upload"

</div>

<div class="article-item" data-lang="de" data-category="ai" data-source="Hugging Face Blog">

### 65. `EN` [Ettin Suite: SoTA Paired Encoders and Decoders](data/articles/f91504cfe5f184d44d708a79977457a6.html)
**Source:** Hugging Face Blog
Back to Articles TL;DR Encoders vs Decoders: The Architecture Divide Training Recipe: Modern Techniques for Both Architectures Sizes Three-Phase Training Process Modern Architecture Components Data Sources and Quality Encoder Results: Beating ModernBERT Decoder Results: Beating Llama 3.2 and SmolLM2 Fair Fight: Encoders vs Decoders on Even Ground Architecture-Specific Advantages Persist Cross-Objective Training Falls Short Beyond Performance: Understanding Model Behavior Usage Examples Encoders Decoders Fine-tuning Examples Encoders Decoders Model Family and Links TL;DR What would happen if you took the ModernBERT recipe and applied it to a decoder-only model? Turns out, a state-of-the-art decoder language model that beats Llama 3.2 1B and SmolLM2! We introduce a new open-data training recipe to reproduce the encoder-only ModernBERT model (and actually beat it!). We then apply the exact same recipe to decoder-only models. For the first time, we have two state-of-the-art models trained in the same setup but with two different training objectives: masked language modeling (MLM), and causal language modeling (CLM).
This blog post introduces Ettin, the first suite of SoTA paired encoder-only and decoder-only models (17M-1B params) trained with identical data (2T tokens), architecture, and training recipes. Ettin e

</div>

<div class="article-item" data-lang="en" data-category="ai" data-source="Hugging Face Blog">

### 66. `EN` [Kimina-Prover: Applying Test-time RL Search on Large Formal Reasoning Models](data/articles/d3ffeb6bb40ec82d708cbc8f2e5ba97e.html)
**Source:** Hugging Face Blog
Back to Articles Numina &amp; Kimi Team Figure 1: Performance comparison of theorem proving models on the miniF2F-test dataset. We're excited to announce the release of Kimina-Prover-72B, our state-of-the-art theorem proving model trained with the Kimi k1.5[1] RL pipeline based on Qwen2.5-72B [2]. Alongside it, we are also releasing two distilled variants: Kimina-Prover-Distill-8B and 1.7B (based on Qwen3-8B and Qwen3-1.7B[3] respectively).
Our key innovations include: Test-Time Reinforcement Learning Search: A trainable agentic proving framework that enables the model to recursively discover, combine and apply multiple lemmas to construct complex proofs, building on a novel lemma-enabled pattern. Error-Fixing Capability: Kimina-Prover can read and interpret Lean’s error messages and propose targeted fixes, demonstrating significantly higher sample efficiency compared to regenerating proofs from scratch. These advancements enable Kimina-Prover to solve challenging mathematical problems and surpass prior methods. As shown in Figure 1, on the widely used miniF2F benchmark, Kimina-Prover achieves a state-of-the-art pass rate of 92.2%. Introduction We focus on automated theorem proving (ATP) in the Lean 4 language, aiming to automate the construction of formal mat

</div>

</section>

---

<section id="openclaw" data-category="openclaw">

## OpenClaw

<div class="article-item" data-lang="fr" data-category="openclaw" data-source="Gladys Assistant (Forum)">

### 1. `FR` [J'ai laissé l'IA OpenClaw contrôler ma Maison](data/articles/c914d79f26cb05f0f28bb1670d3e59eb.html)
**Source:** Gladys Assistant (Forum)
Salut à tous !
Vous avez sûrement entendu parler d’OpenClaw, le framework IA qui a explosé sur GitHub il y a quelques semaines, et qui vient d’être racheté par OpenAI.
J’ai fait le test de connecter OpenClaw à Gladys pour tester les possibilités, et c’est vraiment bluffant Je vous en dis plus en vidéo :
J'ai laissé l'IA OpenClaw contrôler ma Maison (C'est fou)
Note : Je vous déconseille d’installer OpenClaw sur votre serveur Gladys, c’est un logiciel encore en début de vie, qui touche un peu à tout et qui a été pas mal décrié pour ses failles de sécurité. Pour ce test, j’ai déployé OpenClaw sur une VM dans le Cloud pour rester dans un environnement isolé 5 messages - 3 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="openclaw" data-source="Its FOSS">

### 2. `EN` [FOSS Weekly #26.09: Linux Mint Shortcuts, OpenClaw Alternatives, Ladybird's Rust Move, Super Productivity and More](data/articles/b8c4718f98e9f62774e4abfec1bc0a43.html)
**Source:** Its FOSS
What One Year of AI Has Already Changed

</div>

</section>

---

<section id="cybersecurity" data-category="cybersecurity">

## Cybersecurity / Cybersécurité

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="SecurityWeek">

### 1. `EN` [Critical Flaws Exposed Gardyn Smart Gardens to Remote Hacking](data/articles/64fd5e1cec2d0f44d9b530bf20d33b5d.html)
**Source:** SecurityWeek
CISA has released an advisory to warn about four vulnerabilities discovered by a researcher in Gardyn Home and Gardyn Studio.

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 2. `EN` [Claude Code Flaws Allow Remote Code Execution and API Key Exfiltration](data/articles/a740d371f2b8c0f60eee1a8644864ef6.html)
**Source:** The Hacker News
Cybersecurity researchers have disclosed multiple security vulnerabilities in Anthropic's Claude Code, an artificial intelligence (AI)-powered coding assistant, that could result in remote code execution and theft of API credentials.
"The vulnerabilities exploit various configuration mechanisms, including Hooks, Model Context Protocol (MCP) servers, and environment variables – executing

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 3. `EN` [Malicious NuGet Packages Stole ASP.NET Data; npm Package Dropped Malware](data/articles/26c7802a3619f823fcba7ee9047de29b.html)
**Source:** The Hacker News
Cybersecurity researchers have discovered four malicious NuGet packages that are designed to target ASP.NET web application developers to steal sensitive data.
The campaign, discovered by Socket, exfiltrates ASP.NET Identity data, including user accounts, role assignments, and permission mappings, as well as manipulates authorization rules to create persistent backdoors in victim applications.

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 4. `EN` [ClickFix Campaign Abuses Compromised Sites to Deploy MIMICRAT Malware](data/articles/20d20ad1ad6835b6cb5b565db016ffe2.html)
**Source:** The Hacker News
Cybersecurity researchers have disclosed details of a new ClickFix campaign that abuses compromised legitimate sites to deliver a previously undocumented remote access trojan (RAT) called MIMICRAT (aka AstarionRAT).
"The campaign demonstrates a high level of operational sophistication: compromised sites spanning multiple industries and geographies serve as delivery infrastructure, a multi-stage

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 5. `EN` [PromptSpy Android Malware Abuses Gemini AI to Automate Recent-Apps Persistence](data/articles/d407ebda9a82651fd841ffa8caab0012.html)
**Source:** The Hacker News
Cybersecurity researchers have discovered what they say is the first Android malware that abuses Gemini, Google's generative artificial intelligence (AI) chatbot, as part of its execution flow and achieves persistence.
The malware has been codenamed PromptSpy by ESET. The malware is equipped to capture lockscreen data, block uninstallation efforts, gather device information, take screenshots,

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="Bleeping Computer">

### 6. `EN` [CISA warns that RESURGE malware can be dormant on Ivanti devices](data/articles/0cb405ed9ebe82e20a2434fb596af5be.html)
**Source:** Bleeping Computer
The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has released new details about RESURGE, a malicious implant used in zero-day attacks exploiting CVE-2025-0282 to breach Ivanti Connect Secure devices. [...]

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 7. `EN` [Malicious Go Crypto Module Steals Passwords, Deploys Rekoobe Backdoor](data/articles/a1ae46a8a2adda6b42527cf2ca3c8b94.html)
**Source:** The Hacker News
Cybersecurity researchers have disclosed details of a malicious Go module that's designed to harvest passwords, create persistent access via SSH, and deliver a Linux backdoor named Rekoobe.
The Go module, github[.]com/xinfeisoft/crypto, impersonates the legitimate "golang.org/x/crypto" codebase, but injects malicious code that's responsible for exfiltrating secrets entered via terminal password

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 8. `EN` [Aeternum C2 Botnet Stores Encrypted Commands on Polygon Blockchain to Evade Takedown](data/articles/261a9d852af62f71ed335c6d8dfede41.html)
**Source:** The Hacker News
Cybersecurity researchers have disclosed details of a new botnet loader called Aeternum C2 that uses a blockchain-based command-and-control (C2) infrastructure to make it resilient to takedown efforts.
"Instead of relying on traditional servers or domains for command-and-control, Aeternum stores its instructions on the public Polygon blockchain," Qrator Labs said in a report shared with The

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 9. `EN` [Malicious StripeApi NuGet Package Mimicked Official Library and Stole API Tokens](data/articles/ad3648e2726abd67b678e1f1cfcd9939.html)
**Source:** The Hacker News
Cybersecurity researchers have disclosed details of a new malicious package discovered on the NuGet Gallery, impersonating a library from financial services firm Stripe in an attempt to target the financial sector.
The package, codenamed StripeApi.Net, attempts to masquerade as Stripe.net, a legitimate library from Stripe that has over 75 million downloads. It was uploaded by a user named

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 10. `EN` [CISA Confirms Active Exploitation of FileZen CVE-2026-25108 Vulnerability](data/articles/5ccaaed8a805d85f537b6998d891797e.html)
**Source:** The Hacker News
The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Tuesday added a recently disclosed vulnerability in FileZen to its Known Exploited Vulnerabilities (KEV) catalog, citing evidence of active exploitation.
The vulnerability, tracked as CVE-2026-25108 (CVSS v4 score: 8.7), is a case of operating system (OS) command injection that could allow an authenticated user to execute

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 11. `EN` [Wormable XMRig Campaign Uses BYOVD Exploit and Time-Based Logic Bomb](data/articles/34b7d3bf4b92d07e08d663a42624c3e3.html)
**Source:** The Hacker News
Cybersecurity researchers have disclosed details of a new cryptojacking campaign that uses pirated software bundles as lures to deploy a bespoke XMRig miner program on compromised hosts.
"Analysis of the recovered dropper, persistence triggers, and mining payload reveals a sophisticated, multi-stage infection prioritizing maximum cryptocurrency mining hashrate, often destabilizing the victim

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 12. `EN` [Weekly Recap: Double-Tap Skimmers, PromptSpy AI, 30Tbps DDoS, Docker Malware &amp; More](data/articles/a40bd4b7536dbccd57bd38daec588a71.html)
**Source:** The Hacker News
Security news rarely moves in a straight line. This week, it feels more like a series of sharp turns, some happening quietly in the background, others playing out in public view. The details are different, but the pressure points are familiar.
Across devices, cloud services, research labs, and even everyday apps, the line between normal behavior and hidden risk keeps getting thinner. Tools

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 13. `EN` [Malicious npm Packages Harvest Crypto Keys, CI Secrets, and API Tokens](data/articles/02fdd569450c32350cc07e5795e155f8.html)
**Source:** The Hacker News
Cybersecurity researchers have disclosed what they say is an active "Shai-Hulud-like" supply chain worm campaign that has leveraged a cluster of at least 19 malicious npm packages to enable credential harvesting and cryptocurrency key theft.
The campaign has been codenamed SANDWORM_MODE by supply chain security company Socket. As with prior Shai-Hulud attack waves, the malicious code embedded

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 14. `EN` [Anthropic Launches Claude Code Security for AI-Powered Vulnerability Scanning](data/articles/27364126306ff136061c9daa9724768b.html)
**Source:** The Hacker News
Artificial intelligence (AI) company Anthropic has begun to roll out a new security feature for Claude Code that can scan a user's software codebase for vulnerabilities and suggest patches.
The capability, called Claude Code Security, is currently available in a limited research preview to Enterprise and Team customers.
"It scans codebases for security vulnerabilities and suggests targeted

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="PortSwigger Research">

### 15. `EN` [Top 10 web hacking techniques of 2025](data/articles/172a06e844f385e57a2c5a241c5eb23d.html)
**Source:** PortSwigger Research
Welcome to the Top 10 Web Hacking Techniques of 2025, the 19th edition of our annual community-powered effort to identify the most innovative must-read web security research published in the last year

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="PortSwigger Research">

### 16. `EN` [Top 10 web hacking techniques of 2024: nominations open](data/articles/69cf566a33c63330c6c9cf2e5ab3e225.html)
**Source:** PortSwigger Research
Nominations are now open for the top 10 new web hacking techniques of 2024! Every year, security researchers from all over the world share their latest findings via blog posts, presentations, PoCs, an

</div>

<div class="article-item" data-lang="fr" data-category="cybersecurity" data-source="CERT-FR">

### 17. `FR` [Vulnérabilité dans Stormshield Network Security (27 février 2026)](data/articles/5ba3842cf0cc81a223eb6da0d4b98f8e.html)
**Source:** CERT-FR
Une vulnérabilité a été découverte dans Stormshield Network Security. Elle permet à un attaquant de provoquer un contournement de la politique de sécurité.

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 18. `EN` [Microsoft Warns Developers of Fake Next.js Job Repos Delivering In-Memory Malware](data/articles/72bc7ff6d3de1a7bdaed108ccbc17471.html)
**Source:** The Hacker News
A "coordinated developer-targeting campaign" is using malicious repositories disguised as legitimate Next.js projects and technical assessments to trick victims into executing them and establish persistent access to compromised machines.
"The activity aligns with a broader cluster of threats that use job-themed lures to blend into routine developer workflows and increase the likelihood of code

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="Bleeping Computer">

### 19. `EN` [Medical device maker UFP Technologies warns of data stolen in cyberattack](data/articles/8d9ea9797d896bc05661ae003dab1f24.html)
**Source:** Bleeping Computer
American manufacturer of medical devices, UFP Technologies, has disclosed that a cybersecurity incident has compromised its IT systems and data. [...]

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 20. `EN` [SolarWinds Patches 4 Critical Serv-U 15.5 Flaws Allowing Root Code Execution](data/articles/200b4371b39daf8796249f79ae52f31f.html)
**Source:** The Hacker News
SolarWinds has released updates to address four critical security flaws in its Serv-U file transfer software that, if successfully exploited, could result in remote code execution.
The vulnerabilities, all rated 9.1 on the CVSS scoring system, are listed below - CVE-2025-40538 - A broken access control vulnerability that allows an attacker to create a system admin user and execute arbitrary

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 21. `EN` [MuddyWater Targets MENA Organizations with GhostFetch, CHAR, and HTTP_VIP](data/articles/9219784c6ddf9373d58afdd17ed8568e.html)
**Source:** The Hacker News
The Iranian hacking group known as MuddyWater (aka Earth Vetala, Mango Sandstorm, and MUDDYCOAST) has targeted several organizations and individuals mainly located across the Middle East and North Africa (MENA) region as part of a new campaign codenamed Operation Olalampo.
The activity, first observed on January 26, 2026, has resulted in the deployment of new malware families that share

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 22. `EN` [EC-Council Expands AI Certification Portfolio to Strengthen U.S. AI Workforce Readiness and Security](data/articles/c65ae078495abde8353634ad5bdce814.html)
**Source:** The Hacker News
With $5.5 trillion in global AI risk exposure and 700,000 U.S. workers needing reskilling, four new AI certifications and Certified CISO v4 help close the gap between AI adoption and workforce readiness.
EC-Council, creator of the world-renowned Certified Ethical Hacker (CEH) credential and a global leader in applied cybersecurity education, today launched its Enterprise AI Credential Suite,

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="The Hacker News">

### 23. `EN` [ThreatsDay Bulletin: OpenSSL RCE, Foxit 0-Days, Copilot Leak, AI Password Flaws &amp; 20+ Stories](data/articles/0cb2d0883debe90b121d73ebc19261b4.html)
**Source:** The Hacker News
The cyber threat space doesn’t pause, and this week makes that clear. New risks, new tactics, and new security gaps are showing up across platforms, tools, and industries — often all at the same time.
Some developments are headline-level. Others sit in the background but carry long-term impact. Together, they shape how defenders need to think about exposure, response, and preparedness right now

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="Krebs on Security">

### 24. `EN` [Patch Tuesday, February 2026 Edition](data/articles/d39cb96c8d24a487942391ee9863e958.html)
**Source:** Krebs on Security
Microsoft today released updates to fix more than 50 security holes in its Windows operating systems and other software, including patches for a whopping six "zero-day" vulnerabilities that attackers are already exploiting in the wild.

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="Krebs on Security">

### 25. `EN` [Kimwolf Botnet Lurking in Corporate, Govt. Networks](data/articles/47049a7169772dd6a23256ccf18b9e70.html)
**Source:** Krebs on Security
A new Internet-of-Things botnet called Kimwolf has spread to more than 2 million devices, forcing infected systems to participate in massive distributed denial-of-service (DDoS) attacks and to relay other malicious and abusive Internet traffic. Kimwolf's ability to scan the local networks of compromised systems for other IoT devices to infect makes it a sobering threat to organizations, and new research reveals Kimwolf is surprisingly prevalent in government and corporate networks.

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="Krebs on Security">

### 26. `EN` [Who Benefited from the Aisuru and Kimwolf Botnets?](data/articles/598dddf8979263e19f2d2ab62b0729d8.html)
**Source:** Krebs on Security
Our first story of 2026 revealed how a destructive new botnet called Kimwolf rapidly grew to infect more than two million devices by mass-compromising a vast number of unofficial Android TV streaming boxes. Today, we'll dig through digital clues left behind by the hackers, network operators, and cybercrime services that appear to have benefitted from Kimwolf's spread.

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="Krebs on Security">

### 27. `EN` [Happy 16th Birthday, KrebsOnSecurity.com!](data/articles/9b5b343e667526a31963ee7ed03f89f1.html)
**Source:** Krebs on Security
KrebsOnSecurity.com celebrates its 16th anniversary today! A huge "thank you" to all of our readers -- newcomers, long-timers and drive-by critics alike. Your engagement this past year here has been tremendous and truly a salve on a handful of dark days. Happily, comeuppance was a strong theme running through our coverage in 2025, with a primary focus on entities that enabled complex and globally-dispersed cybercrime services.

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="PortSwigger Research">

### 28. `EN` [Repeater Strike: manual testing, amplified](data/articles/ef15b8bd8f5ffacd1eba3f3b1e723b32.html)
**Source:** PortSwigger Research
Manual testing doesn't have to be repetitive. In this post, we're introducing Repeater Strike - a new AI-powered Burp Suite extension designed to automate the hunt for IDOR and similar vulnerabilities

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="PortSwigger Research">

### 29. `EN` [Document My Pentest: you hack, the AI writes it up!](data/articles/96d7edc6060d0157abab8ac6c74e4603.html)
**Source:** PortSwigger Research
Tired of repeating yourself? Automate your web security audit trail. In this post I'll introduce a new Burp AI extension that takes the boring bits out of your pen test. Web security testing can be a

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="PortSwigger Research">

### 30. `EN` [Shadow Repeater:AI-enhanced manual testing](data/articles/27f3c70f90b99bd8c0c2c49533b5d0ec.html)
**Source:** PortSwigger Research
Have you ever wondered how many vulnerabilities you've missed by a hair's breadth, due to a single flawed choice? We've just released Shadow Repeater, which enhances your manual testing with AI-powere

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="PortSwigger Research">

### 31. `EN` [Bypassing WAFs with the phantom $Version cookie](data/articles/ec441ce1e6453a91eb769a3e79f44acd.html)
**Source:** PortSwigger Research
HTTP cookies often control critical website features, but their long and convoluted history exposes them to parser discrepancy vulnerabilities. In this post, I'll explore some dangerous, lesser-known

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="PortSwigger Research">

### 32. `EN` [New crazy payloads in the URL Validation Bypass Cheat Sheet](data/articles/77252eb92d815bc858f6fbfc49dab7ec.html)
**Source:** PortSwigger Research
The strength of our URL Validation Bypass Cheat Sheet lies in the contributions from the web security community, and today’s update is no exception. We are excited to introduce a new and improved IP a

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="PortSwigger Research">

### 33. `EN` [A hacking hat-trick: previewing three PortSwigger Research publications coming to DEF CON &amp; Black Hat USA](data/articles/3f6af8160261e453a9cbc2e04d8d6799.html)
**Source:** PortSwigger Research
We're delighted to announce three major research releases from PortSwigger Research will be published at both Black Hat USA and DEF CON 32. In this post, we'll offer a quick teaser of each talk, info

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="PortSwigger Research">

### 34. `EN` [Finding that one weird endpoint, with Bambdas](data/articles/d4694b13a82a5c322398643bcd43e3a0.html)
**Source:** PortSwigger Research
Security research involves a lot of failure. It's a perpetual balancing act between taking small steps with a predictable but boring outcome, and trying out wild concepts that are so crazy they might

</div>

<div class="article-item" data-lang="en" data-category="cybersecurity" data-source="PortSwigger Research">

### 35. `EN` [How to build custom scanners for web security research automation](data/articles/5e738bfb3946eac2d1edab797a240506.html)
**Source:** PortSwigger Research
In this post, I'll share my approach to developing custom automation to aid research into under-appreciated attack classes and (hopefully) push the boundaries of web security. As a worked example, I'l

</div>

</section>

---

<section id="local" data-category="local">

## Local News (IP-based) / Informations locales (basées IP)

<div class="article-item" data-lang="fr" data-category="local" data-source="Le Dauphiné Isère Sud">

### 1. `FR` [Isère. Le 28 octobre 2012, le jour où Grenoble a été paralysée par la neige](data/articles/e9e0486516af882afadf07822e55ed60.html)
**Source:** Le Dauphiné Isère Sud
Ce dimanche 28 octobre 2012, des chutes de neige abondantes surprennent tout le monde. Une telle quantité tombée à Grenoble en octobre, c'est du "jamais vu depuis au moins 70 ans", selon les météorologues de MeteoNews. Avec la couche épaisse de poudreuse sur les routes, la pagaille gagne rapidement le centre-ville de la capitale des Alpes. Retour en images.

</div>

<div class="article-item" data-lang="fr" data-category="local" data-source="Le Dauphiné Isère">

### 2. `FR` [Football - Ligue 2. GF38 : Benet trop discret, Zahui trop neutre… Les notes du piètre match nul face à Boulogne](data/articles/8090a02ec4fe16afa2dd1089f21e307d.html)
**Source:** Le Dauphiné Isère
Dans le cadre de la 25e journée de Ligue 2, le Grenoble Foot 38 a concédé un triste résultat nul face à Boulogne-sur-Mer vendredi soir au Stade des Alpes (0-0). Retrouvez les notes des joueurs grenoblois.

</div>

<div class="article-item" data-lang="fr" data-category="local" data-source="Le Dauphiné Isère Sud">

### 3. `FR` [Football (Coupe de France). Il y a 6 ans, l'exploit de Grenoble face au grand Olympique de Marseille](data/articles/7c2f8dd9c2afd9184d74aaa7a24516b3.html)
**Source:** Le Dauphiné Isère Sud
Le week-end dernier auraient dû avoir lieu les 32e de finale de Coupe de France de football. Mais le Covid-19 est passé par là... Alors, pour le plaisir, on vous propose de revivre, en images, l'un des plus grands exploits de l'histoire de la compétition. C'était il y a 6 ans, jour pour jour. Dans un Stade des Alpes en fusion, le GF38 de Bengriba et Cattier éliminait l'OM de Bielsa et Thauvin, alors leader de Ligue 1. Inoubliable.

</div>

<div class="article-item" data-lang="fr" data-category="local" data-source="Le Dauphiné Isère Sud">

### 4. `FR` [Rugby / Le web remonte le temps. [EN IMAGES] Pro D2 : il y a un an, Grenoble et Valence/Romans s'affrontaient pour la première fois de leur histoire](data/articles/142d74fa0ba3940ea1c5fb7c6a47cb5a.html)
**Source:** Le Dauphiné Isère Sud
Pour la première fois de leur histoire, le FCG et le VRDR se croisaient sur un terrain de rugby en octobre 2019 au Stade des Alpes. Ce "derby du Dauphiné" inédit tournait largement en faveur des Isérois (49-8). Retour en images sur la soirée dans l'enceinte grenobloise.

</div>

<div class="article-item" data-lang="fr" data-category="local" data-source="Le Dauphiné Isère">

### 5. `FR` [Rugby - Pro D2. FCG : des finisseurs en furie, Lilian Rossi imprécis... Les tops et flops de la précieuse victoire à Nevers](data/articles/220fe9b176dd46716726a553a1bbc48d.html)
**Source:** Le Dauphiné Isère
Le FC Grenoble s'est impoosé à Nevers (26-27) lors de la 22e journée de Pro D2 ce vendredi 27 février. Voici les tops et flops de la rencontre.

</div>

<div class="article-item" data-lang="fr" data-category="local" data-source="Le Dauphiné Isère">

### 6. `FR` [Grenoble. « C’est comme un petit-cousin » : ils parrainent des étudiants pour qu'ils ne sautent plus de repas](data/articles/6c281c55462aa36c4320633e0ea8643d.html)
**Source:** Le Dauphiné Isère
Au total, 5 000 étudiants grenoblois vivent sous le seuil de pauvreté. Tout en essayant de réussir leurs études, ils doivent également batailler pour remplir leur réfrigérateur et conserver une vie sociale. Pour les aider, l’association 1 cabas pour 1 étudiant les met en relation avec un parrain, pleinement intégré dans la vie active. Témoignages de l’un d’eux et de son filleul, qui a vu son quotidien changer.

</div>

<div class="article-item" data-lang="fr" data-category="local" data-source="Le Dauphiné Isère">

### 7. `FR` [Hockey sur glace - Ligue Magnus. Comment les Brûleurs de loups de Grenoble ont consolidé leur place de dauphin à Marseille](data/articles/c992c8e01c02597f6fb64a1620c39b35.html)
**Source:** Le Dauphiné Isère
Dans une patinoire à guichets fermés, les Brûleurs de loups l’ont emporté assez logiquement face aux Spartiates de Marseille (4-1), vendredi soir, lors de la 41e journée de la Ligue Magnus. Avec ce succès mérité, Grenoble consolide sa 2e place en vue des play-offs.

</div>

<div class="article-item" data-lang="fr" data-category="local" data-source="Le Dauphiné Isère">

### 8. `FR` [Hockey sur glace - Ligue Magnus. Gap explose avant le derby, Grenoble enchaîne... tous les résultats de la 41e journée](data/articles/7fa65a6b2eb92d63c2f14e7cca6849f5.html)
**Source:** Le Dauphiné Isère
Retrouvez tous les résultats de la 41e journée de la Ligue Magnus disputée ce vendredi.

</div>

<div class="article-item" data-lang="fr" data-category="local" data-source="Le Dauphiné Isère">

### 9. `FR` [Municipales 2026. Grenoble : « Nous allons nettoyer les rues des tags et des dealers », assure le candidat RN Valentin Gabriac](data/articles/1cee329a93ce0d9b0d3f7d966ceea0e3.html)
**Source:** Le Dauphiné Isère
Alors qu’une manifestation se tenait à l’extérieur, le candidat RN Valentin Gabriac a présenté sa liste aux élections municipales lors d’un meeting à l’office de tourisme.

</div>

<div class="article-item" data-lang="fr" data-category="local" data-source="Le Dauphiné Isère">

### 10. `FR` [Échirolles. Échange de coups de feu près du lycée Marie-Curie : les “victimes” ont menti, elles sont en garde à vue](data/articles/a1472e575a056d937b2fbb1bf6e003e7.html)
**Source:** Le Dauphiné Isère
Les deux frères arrêtés jeudi 26 février, l’un à Grenoble et l’autre en Meurthe-et-Moselle, sont ceux qui avaient prétendu avoir été visés sans raison par des tirs alors qu’ils étaient à bord d’un fourgon, dimanche soir rue Normandie-Niemen à Échirolles. La vidéosurveillance a révélé qu’ils avaient eux aussi fait usage d’armes à feu et qu’ils étaient avec un troisième homme, lequel a également été interpellé.

</div>

<div class="article-item" data-lang="fr" data-category="local" data-source="Le Dauphiné Isère Sud">

### 11. `FR` [Catastrophe. Le Teil, Vercors, Annecy... Les séismes les plus puissants dans nos départements](data/articles/cd9a5eb7145c5c207b65e1fbf22493c0.html)
**Source:** Le Dauphiné Isère Sud
Les séismes de magnitude égale ou supérieure à 5 sur l’échelle de Richter sont inhabituels en France. Dans le grand Sud-Est, ce seuil n’a été dépassé que cinq fois au cours des 60 dernières années : en Ardèche, en Isère, dans les Alpes-de-Haute-Provence et les Hautes-Alpes, ainsi qu’en Haute-Savoie. Voici les tremblements de terre les plus puissants enregistrés dans nos départements.

</div>

<div class="article-item" data-lang="fr" data-category="local" data-source="Le Dauphiné Isère Sud">

### 12. `FR` [En images - Rugby. Quand le FCG affrontait Valence et Romans avant le VRDR](data/articles/8234b6fdebe21fa6d42b29f716b2cb7c.html)
**Source:** Le Dauphiné Isère Sud
Le FC Grenoble Rugby reçoit ce vendredi 10 novembre à 21 h, pour la compte de la 10e journée de Pro D2, son "voisin" de Valence Romans Drôme Rugby. Il ne s'agit que de la quatrième confrontation entre ces deux équipes, le VRDR ayant vu le jour en 2016. En revanche, les matches depuis les années 50 jusqu'aux années 90 n'ont pas manqué entre les Isérois et les Drômois de Valence et de Romans. Retour en images sur ces "derbys" d'antan et de maintenant.

</div>

<div class="article-item" data-lang="fr" data-category="local" data-source="Le Dauphiné Isère Sud">

### 13. `FR` [En images . Il y a sept ans, dans nos villes, l'hommage aux victimes des attentats de Paris](data/articles/457741786cc6e2c99cda7597743275e4.html)
**Source:** Le Dauphiné Isère Sud
Le soir du 13 novembre 2015, neuf hommes ont mené une série d’attaques aux abords du Stade de France à Saint-Denis, de terrasses de restaurants et dans la salle de concerts du Bataclan à Paris, faisant 130 morts et plus de 350 blessés. Après l'horreur, dans les jours qui ont suivi, des rassemblements avaient été organisés à Grenoble, Valence ou encore Annecy. Dans d'autres villes, on a pleuré la perte de proches tués lors de ces attentats comme à Gap, Jarrie ou Gilly-sur-Isère. Retour en images sur ces moments de recueillement.

</div>

<div class="article-item" data-lang="fr" data-category="local" data-source="Le Dauphiné Isère Sud">

### 14. `FR` [En images. Alain Carignon qui fait du toboggan... : la Foire des Rameaux ressemblait à ça dans les années 80](data/articles/4e11121d9a95cc51d143cf69df2c2cfb.html)
**Source:** Le Dauphiné Isère Sud
Alors que la Foire des Rameaux revient ce week-end à Grenoble, nous faisons une dernière plongée dans nos archives. On remonte le temps jusque dans les années 1980 avec un forain qui menace de s'immoler par le feu et Alain Carignon qui fait du toboggan. Retour en images.

</div>

</section>

---

<section id="gouvernemental" data-category="gouvernemental">

## French Government / Gouvernement & Services Publics

<div class="article-item" data-lang="fr" data-category="gouvernemental" data-source="ANSSI (CERT-FR)">

### 1. `FR` [Multiples vulnérabilités dans les produits Microsoft (27 février 2026)](data/articles/7c62a92a48222b15970ef7446e555463.html)
**Source:** ANSSI (CERT-FR)
De multiples vulnérabilités ont été découvertes dans les produits Microsoft. Certaines d'entre elles permettent à un attaquant de provoquer un déni de service à distance, une atteinte à la confidentialité des données et un contournement de la politique de sécurité.

</div>

<div class="article-item" data-lang="fr" data-category="gouvernemental" data-source="ANSSI (CERT-FR)">

### 2. `FR` [[MàJ] Vulnérabilité dans Cisco Catalyst SD-WAN (25 février 2026)](data/articles/4fa18c16487fbffe33dcceb6dfbe460d.html)
**Source:** ANSSI (CERT-FR)
Une vulnérabilité a été découverte dans Cisco Catalyst SD-WAN. Elle permet à un attaquant de provoquer un contournement de la politique de sécurité. Cisco indique que la vulnérabilité CVE-2026-20127 est activement exploitée.

</div>

<div class="article-item" data-lang="fr" data-category="gouvernemental" data-source="ANSSI (CERT-FR)">

### 3. `FR` [Bulletin d'actualité CERTFR-2026-ACT-008 (23 février 2026)](data/articles/be694de1f7a6702ee612dcd2c56c60aa.html)
**Source:** ANSSI (CERT-FR)
Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des et alertes publiés par le CERT-FR dans le cadre d'une analyse de risques pour prioriser l'application des...

</div>

</section>

---

<section id="france" data-category="france">

## France News / Journaux France

<div class="article-item" data-lang="fr" data-category="france" data-source="Ouest-France">

### 1. `FR` [CAN 2026. « Libérez nos supporters ! » : l’appel des joueurs du Sénégal pour leurs supporters emprisonnés au Maroc](data/articles/f57d38269c6f649b8a3841f1e3694cad.html)
**Source:** Ouest-France
Le 19 février 2026, le Maroc a condamné les 18 supporters sénégalais impliqués dans les échauffourées en marge de la dernière finale de la Coupe d’Afrique des nations à des peines allant de trois mois à un an de prison. Dans un communiqué vocal publié vendredi 27 février, l’équipe nationale du Sénégal a réagi par la voix de son capitaine Kalidou Koulibaly, réclamant la libération de leurs compatriotes.

</div>

<div class="article-item" data-lang="fr" data-category="france" data-source="Le Figaro">

### 2. `FR` [Déclarations de Mélenchon sur Epstein : Villepin regrette le «sacrifice de la gauche de la gauche» et fustige un «acte d’irresponsabilité politique»](data/articles/86d7159164b5056ba44540714082b706.html)
**Source:** Le Figaro
L’ancien premier ministre, dans la continuité des principaux leaders politiques, a condamné dans un long texte publié sur X les propos tenus jeudi soir à Lyon par le chef de file des Insoumis.

</div>

<div class="article-item" data-lang="fr" data-category="france" data-source="Franceinfo">

### 3. `FR` [Frappes en Iran : "Israël et les Etats-Unis veulent poursuivre les négociations par la guerre", analyse un spécialiste de l'Iran](data/articles/0248cc376dfd67c510835d7119e4f672.html)
**Source:** Franceinfo
Après des semaines de menaces d'intervention militaire, Israël et les Etats-Unis ont lancé samedi matin des frappes conjointes sur la République islamique. L'Iran a répliqué par des tirs de missiles sur l'Etat hébreu. Publié le 28/02/2026 09:39 Temps de lecture : 1min Des frappes israéliennes et américaines sur Téhéran (Iran) le 28 février 2026 (AFP) "Israël et les Etats-Unis veulent poursuivre les négociations par la guerre", analyse samedi 28 février sur franceinfo Thierry Coville, chercheur à l'IRIS (l'Institut de relations internationales et stratégiques), spécialiste de l'Iran. Selon lui, le président américain Donald Trump "veut un changement de régime en Iran", via cette intervention militaire. "Donald Trump attaque dès qu'on ne lui cède pas", dit-il. Dans un message vidéo sur sa plateforme Truth social, le président américain a en effet annoncé que les Etats-Unis avaient la

</div>

<div class="article-item" data-lang="fr" data-category="france" data-source="Le Figaro">

### 4. `FR` [Anthropic face aux représailles du Pentagone, après avoir restreint l’utilisation de son IA pour l’armée](data/articles/13685f9968771083ea0f8fab0f8072b4.html)
**Source:** Le Figaro
DÉCRYPTAGE - La start-up refuse de laisser le Pentagone utiliser ses modèles d’IA à des fins de surveillance de masse ou pour la création d’armes autonomes. En réaction, le département américain de la Défense va désigner l’entreprise comme présentant un risque pour la sécurité nationale.

</div>

<div class="article-item" data-lang="fr" data-category="france" data-source="Le Monde">

### 5. `FR` [James Char, spécialiste de l’armée chinoise : « L’ampleur des mises à l’écart sous Xi Jinping dépasse de loin ce qu’ont fait ses prédécesseurs »](data/articles/d43c1204dcf715c3f2854ff89b751a28.html)
**Source:** Le Monde
L’éviction, en janvier, du général le plus haut gradé de l’Armée populaire de libération témoigne de la volonté du président chinois d’assurer sa prééminence politique et de lutter contre la corruption, bien réelle, des élites, décrypte le chercheur James Char dans un entretien au « Monde ».

</div>

</section>

---

<section id="weather" data-category="weather">

## Weather / Météo

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 1. `FR` [Un blizzard new-yorkais est-il possible en France ?](data/articles/0d7c7eab8fb22f98fbebe91dd638f90b.html)
**Source:** Météo-Paris
Le blizzard de la fin du mois de décembre 1970 qui a provoqué un chaos monumental sur l'autoroute du soleil entre Valence et Montélimar. Une tempête de neige de l'ampleur qu'a connu New-York ces derniers jours. archives meteo-paris.com (photo colorisée) New York vient de subir sa plus forte tempête de neige depuis plusieurs décennies avec 50 cm à Central Park ! Un tel blizzard peut-il se produire en FraIA nce ? Notre article vous apporte les explications. Un demi-mètre de neige à New York ! New York n'est pas étrangère aux tempêtes de neige. Malgré tout, celle qui est survenue ce lundi 23 février 2026 a présenté une intensité peu commune. Les cumuls de neige atteignent 50 centimètres à Central Park dans le cœur de la ville et 58 cm à la station de l'aéroport de La Guardia ! Une tempête de neige d'une telle intensité est rare, ne se produisant en moyenne que tous les 25 ans sur New York ! L'île de Long Island fut encore plus touchée avec jusqu'à 74 cm mesurés à l'aéroport MacArthur, un cumul inédit depuis 1963 ! 50 cm de neige ont recouvert New York (USA) ce lundi 23 février 2026 - photo Pictures of New York Malgré tout, il ne s'agit pas de la tempête la plus importante sur New York. En effet, la plus forte tempête est survenue les 22 et 23 janvier 2016, il y a seulement 10 ans. À l'époque, il était tombé 70 centimètres de neige à Central Park, un cumul qui n'avait jamais été mesuré depuis le début des relevés météorologiques en 1869 ! La vie locale avait été fortement ralentie et les voitures avaient été ensevelies sous ce manteau neigeux inédit. 70 cm de neige à New York après la tempête de janvier 2016, un record ! - photo Jackson Krule De telles tempêtes de neige sont-elles possibles en France ? Des tempêtes de neige de la dimension de celle qui vient de toucher le nord-est des USA ne sont pas véritablement possibles en France et ce pour des raisons géographiques. En effet, lorsque l'air polaire descend sur le nord-est des États-Unis, il atteint l'océan Atlantique sans avoir rencontré de mer. Ainsi, il est encore particulièrement froid. Cet air glacial crée un gros contraste thermique avec les eaux douces de l'Atlantique, ce qui peut générer une cyclogenèse explosive au dessus de l'océan avec des dépressions se creusant très rapidement et générant des tempêtes de neige de forte intensité sur la côte est américaine, comme ce fut le cas ce lundi 23 février 2026. Image satellite sur l'est des USA et l'Atlantique le lundi 23 février 2026 - NASA En France, la donne est différente car notre pays est entouré par plusieurs mers et par l'Atlantique. Il est donc impossible pour une masse d'air polaire d'atteindre notre pays intacte. Les coulées d'air froid touchant l'hexagone sont beaucoup moins intenses que celles qui touchent le nord de l'Amérique et le contraste avec la douceur des eaux océaniques s'en trouve donc réduit, ce qui donne des dépressions moins intenses. Malgré tout, on peut tout de même observer des creusements dépressionnaires à la rencontre entre air doux et air froid, qui peuvent engendrer de fortes tempêtes de neige et du blizzard, comme ce fut le cas en Normandie en mars 2013. On peut également évoquer le blizzard survenu au début du mois de janvier 1979, entre la Beauce et Paris, ainsi que celui de février 1986, qui a touché pratiquement les mêmes régions. Par ailleurs, durant la nuit du 25 au 26 février 1958, un violent blizzard a frappé le Nord-Pas-de-Calais, entraînant la formation de congères pouvant dépasser deux mètres de hauteur. Dans le sud-est de la France, les épisodes de blizzard résultent généralement de la combinaison d’une profonde dépression en Méditerranée et d’une masse d’air polaire. La situation fut particulièrement chaotique en février 1954, aux alentours de Perpignan, en février 1956 en Provence, ainsi qu’à la fin du mois de décembre 1970 dans la moyenne vallée du Rhône. Cette liste n’est bien sûr pas exhaustive : de nombreux autres épisodes ont également provoqué, dans nos régions de plaine, la formation de congères atteignant plusieurs mètres de hauteur. Congères de 2 mètres à Gonneville dans le Cotentin le 13 mars 2013 - via infoclimat.fr En résumé : les tempêtes de neige qui touchent la France sont liées à des dépressions généralement moins creuses et moins vastes qu'aux États-Unis, à cause de conflits thermiques moins exacerbés entre air polaire et air océanique. En plus d'être généralement moins fortes, elles sont aussi bien moins fréquentes que de l'autre côté de l'Atlantique où elles surviennent chaque hiver. Malgré tout, les conflits de masses d'air qui concernent l'Europe peuvent tout de même aboutir à des épisodes neigeux majeurs. À lire également : &gt;&gt;&gt; 80 cm de neige dans le Var : la pagaille de la fin février 2001 &gt;&gt;&gt; L'hiver sans fin... de la mi-novembre à la mi-mars ! &gt;&gt;&gt; Les stations des Alpes ensevelies sous plusieurs mètres de neige ! &gt;&gt;&gt; Et si le mois de mars était très sec ? &gt;&gt;&gt; Notre bulletin météo réactualisé quotidiennement &gt;&gt;&gt; Notre compte Twitter très suivi et référence dans tous les médias ! Auteur : Alexandre Slowik

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 2. `FR` [Le Top 4 des pires tempêtes de neige à New-York](data/articles/63b7df5131151c82ca4517b5f75dcf38.html)
**Source:** Météo-Paris
Congères impressionnantes dans les rues de New York en mars 1888 - archives New York vient de vivre une impressionnante tempête de neige. Toutefois, la ville a connu des blizzards encore plus impressionnants par le passé. Notre article vous propose de découvrir les quatre tempêtes les plus marquantes de l'histoire new-yorkaise. #4 - Tempête de Mars 1888 : 53 cm En terme de conséquences directes, il s'agit de la tempête de neige la plus dévastatrice de l'histoire de New York ! Et pourtant, elle ne se classe qu'au 4ème rang en terme de quantité de neige tombée avec un cumul de 53 cm sur la ville. Malgré tout, elle est marquée par des vents très violents, ayant formé des congères atteignant parfois 1 à 2 mètres au cœur de la ville ! À l'époque, il n'y a pas de prévision météo et personne ne se prépare à cet épisode. La ville s'en trouve paralysée et les lignes électriques sont endommagées. Cette tempête causera plus de 400 décès, dont environ 200 à New York City. Les rues de New York après la tempête de neige remarquable de mars 1888 - archives #3 - Tempête de Décembre 1947 : 67 cm La tempête de neige survenue au lendemain de Noël 1947 reste à ce jour sur le podium des plus fortes à avoir frappé New York. Le 26 décembre 1947, la ville se retrouve ensevelie sous un manteau neigeux de 67 cm ! La ville se retrouve alors totalement paralysée. De plus, ce blizzard avait été très mal anticipé par les services météo de l'époque, qui n'avaient pas prévenu la population. Cette tempête de neige a coûté la vie à 77 personnes dans le nord-est des USA. 67 cm de neige dans les rues de New York après la tempête de neige le 27 décembre 1947 - photo Al Fenn #2 - Tempête de Février 2006 : 68 cm Parmi les tempêtes de neige les plus marquantes sur New York, celle survenue les 11 et 12 février 2006 a marqué les esprits. À l'époque, une dépression se creuse autour de 970 hPa au large des côtes américaines et des chutes de neige particulièrement forte affectent les États du nord-est des USA. New York est particulièrement touchée et reçoit 68 centimètres de neige, un cumul qui - à l'époque - établit un record absolu ! New York City estime que les opérations massives de déneigement ont coûté environ 27 millions de dollars à la ville. New York sous le blizzard lors de la tempête du 12 février 2006, apportant 68 cm ! - photo Wikipedia #1 - Tempête de Janvier 2016 : 70 cm Si les tempêtes pré-citées ont été remarquables, elles ne sont pas - climatologiquement parlant - celles ayant apporté le plus gros cumul de neige. La plus importante tempête de neige à New York est récente puisqu'elle est survenue les 22 et 23 janvier 2016, il y a seulement 10 ans. À l'époque, il était tombé 70 centimètres de neige à Central Park, un cumul qui n'avait jamais été mesuré depuis le début des relevés météorologiques en 1869 ! La vie locale avait été fortement ralentie et les voitures avaient été ensevelies sous ce manteau neigeux inédit. 70 cm de neige à New York après la tempête de janvier 2016, un record ! - photo Jackson Krule Précision : Les chiffres cités dans cet article sont issus des mesures de la hauteur de neige à Central Park, qui sert de référence pour la ville de New York. Ainsi, les météorologues et climatologues américains classent l'importance des blizzards new-yorkais sur cette base. À lire également : &gt;&gt;&gt; 80 cm de neige dans le Var : la pagaille de la fin février 2001 &gt;&gt;&gt; L'hiver sans fin... de la mi-novembre à la mi-mars ! &gt;&gt;&gt; Les stations des Alpes ensevelies sous plusieurs mètres de neige ! &gt;&gt;&gt; Et si le mois de mars était très sec ? &gt;&gt;&gt; Notre bulletin météo réactualisé quotidiennement &gt;&gt;&gt; Notre compte Twitter très suivi et référence dans tous les médias ! Auteur : Alexandre Slowik

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 3. `FR` [L'hiver va-t-il se venger après cette douceur précoce ?](data/articles/c586fa615db85cecce762389e7a557df.html)
**Source:** Météo-Paris
Le froid et la neige pourront-ils revenir dans les prochaines semaines sur la France ? - Image d'illustration Cette année, le printemps semble avoir pris de l’avance sur la France. La fin février est particulièrement douce, voire chaude, avec des températures exceptionnellement élevées sur de nombreuses régions cette semaine. Ces températures anormalement élevées annoncent-elles la fin de l’hiver et l’absence de retour du froid en France ? Probablement pas... Quel temps pour le mois de mars ? Pour le moment, la majorité des modèles saisonniers s'accordent sur le fait que le mois de mars devrait se montrer plus doux que la normale sur la France mais également plus sec. Les anomalies de températures restent en effet positives sur la France tout comme sur une large partie de l'Europe alors que les anomalies de précipitations restent négatives sur la majorité du pays, excepté près de la Méditerranée où le temps pourrait se montrer plus régulièrement humide. Anomalies de températures et de précipitations sur la France pour le mois de mars 2026 – via TropicalTidBits Dans ce contexte, nous devrions donc retrouver un mois de mars régulièrement anticyclonique sur la majorité de la France avec un temps doux ou très doux en moyenne sur le mois. Aucun signal de retour du froid plus ou moins durable n'est pour le moment envisagé pour ce premier mois du printemps 2026. Mais cela veut-il dire que l'hiver est bel et bien terminé ? Des coups de froid restent-ils possibles ? Une douceur précoce et marquée dès la fin du mois de février ne rime pas forcément avec la fin de l'hiver sur la France. Par le passé, certains pics de douceur durant cette période ont été suivis de retour plus ou moins marqué du froid et même de la neige sur notre pays durant le mois de mars, parfois même plus tardivement. 2021 : Le printemps en février, l'hiver en mars ! Durant la seconde quinzaine du mois de février 2021 par exemple, le printemps semblait déjà s'installer alors même que l'hiver n'était pas encore terminé. Du 16 au 25 février, une douceur exceptionnelle a en effet concerné la France avec des températures restant bien au-dessus des normales de la période. Températures maximales relevées sur la France le 24 février 2021 – Via Infoclimat Le 24 février 2021, on dépassait ainsi les 15-20°C sur la totalité du pays, souvent plus de 21-22°C sur la moitié sud et parfois plus de 24-25°C entre le sud-ouest et le Massif Central. De nombreux records mensuels de chaleur avaient ainsi été battus durant cette période et beaucoup pensaient que l'hiver avait bel et bien pris fin. Pourtant, trois semaines plus tard, entre le 15 et le 23 mars 2021, la neige et le froid avaient décidé de faire leur retour sur notre pays. Sous un flux ayant basculé au nord/nord-ouest puis au nord-est en altitude, de l'air bien froid pour la période s'était en effet engouffré sur la France, apportant d'abord d'abondantes chutes de neige en montagne avant que la neige ne s'invite jusqu'en plaine peu avant l'équinoxe de printemps. On avait en effet pu relever 4-5cm de neige à Clermont-Ferrand le 19 mars alors qu'on y relevait plus de 22°C un mois plus tôt. 4 à 5cm de neige le vendredi 19 mars 2021 au matin à Clermont-Ferrand – Photographie : Daniel Paquet via Twitter : @Danieldeclerm Des chutes de neige avaient également pu être observées à basse voire très basse altitude jusque sur le sud-est de la France, ainsi que du côté des Pyrénées avant un retour au sec par la suite sous un froid persistant. Des gelées étaient en effet observées sur les ¾ de la France alors que le printemps calendaire débutait. 1960 : l'été en février avant le retour de la neige et du gel à la fin du printemps ! La fin du mois de février s'était également montrée anormalement chaude sur la France. Entre le 27 et le 29 février, de l'air chaud en provenance du Sahara avait envahit tout le pays, apportant des températures dignes d'une fin de printemps voire même d'un début d'été. . Durant cette période, les températures se sont également élevées jusqu’à 29°C à Biarritz, 28°C à Pau, 26°C à Clermont-Ferrand, 24°C à Nevers, 22°C à Reims et 21°C à Paris. Sous un effet de foehn, on avait même pu relever jusqu'à 31°C à Saint-Girons en Ariège, un record pour un mois de février en France. La douceur /chaleur de la fin février 1960 près du lac du bois de Boulogne, à Paris – Archives Météo-Villes Malgré tout, l'hiver n'avait pas dit son dernier mot sur notre pays. En effet, le froid avait fait un retour brutal et remarqué à la fin du mois d'avril. Du 26 avril au 5 mai, de l'air particulièrement froid pour la période avait réussi à s'engouffrer jusqu'à la France, apportant des chutes de neige jusqu'en plaine sur certaines régions. Le 29 avril, il tombe 5 cm de neige à Belfort et 4 cm à Luxeuil-les-Bains dans les Vosges. Le lendemain, les gelées sont généralisées sur le pays avec -4°C à Limoges, -3°C à Nevers. Ce temps froid persiste jusqu'à début mai, engendrant d'importants dégâts sur les cultures. On peut encore citer d'autres exemples de douceur précoce suivie de coups de froids tardifs, comme l'année 1998 où une douceur exceptionnelle avait concerné la France à la fin du mois de février avant un retour temporaire du froid et de la neige pour Pâques. Ainsi, une période de douceur exceptionnelle ne rime pas forcément avec la fin de l'hiver, des coups de froid temporaires restant encore possibles jusqu'au mois d'avril voire même jusqu'au début du mois de mai. À lire également : &gt;&gt;&gt; Près de 140 records de chaleur battus ce mercredi en France ! &gt;&gt;&gt; Et si le mois de mars était très sec ? &gt;&gt;&gt; Un blizzard new-yorkais est-il possible en France ? &gt;&gt;&gt; La sécheresse va-t-elle succéder aux inondations ? &gt;&gt;&gt; Notre bulletin météo réactualisé quotidiennement &gt;&gt;&gt; Notre compte Twitter très suivi et référence dans tous les médias ! Auteur : Tristan Bergen

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 4. `FR` [Pourquoi l'hiver n'est pas forcément terminé](data/articles/c0b6d13901d9ff9adf95a8d108f1937e.html)
**Source:** Météo-Paris
Alors que la douceur va s'affirmer dans les prochains jours, on se demande si l'hiver est terminé en France. Toutefois, le passé lointain comme récent nous ont montré que l'hiver peut encore se manifester bien au delà du mois de février. Congères de 2 mètres à Gonneville dans le Cotentin (50) le 13 mars 2013 - via infoclimat.fr D'importantes coulées froides peuvent encore survenir Lorsque les jours rallongent et que le pôle Nord se réchauffe, le vortex polaire - qui concentre la majorité de l'air froid aux hautes latitudes - devient moins stable. C'est à dire qu'il devient de moins en moins compact. Il peut alors se déformer et entraîne avec lui des ondulations plus importantes du courant jet. Ainsi, des coulées d'air froid peuvent d'échapper du pôle en direction des latitudes moyennes comme la France. Il est donc tout à fait classique d'observer des coups de froid tardifs sur nos régions en mars, ce pourquoi il ne faut jamais enterrer l'hiver trop vite. Schéma d'un vortex polaire instable et d'un courant jet ondulant (classique au printemps) - NOAA Il suffit de regarder les relevés du passé pour se rendre compte qu'un froid marqué peut encore survenir au cours du mois de mars. À Paris-Montsouris, on peut encore descendre sous les -5°C durant la première partie du mois. L'exemple le plus récent date du 13 mars 2013 avec une température qui affichait -5,5°C à l'aube. De plus, on peut encore assister à des journées sans dégel jusqu'à début mars. D'ailleurs, le jour sans dégel le plus tardif est assez récent puisqu'il s'agissait également du 13 mars 2023 où le thermomètre n'avait pas dépassé -1,4°C dans la capitale ! Températures minimales et maximales les plus basses mesurées à Paris-Montsouris en mars depuis 1886 - infoclimat.fr Offensives hivernales en mars : des exemples récents Il est donc important de rappeler qu'il est beaucoup trop tôt pour enterrer l'hiver. Si l'hiver météorologique s'achève au 28 février, le froid et la neige en plaine peuvent encore se manifester bien après ! Rappelons qu'il peut encore neiger sur toute la France au cours du mois de mars. Il n'y a d'ailleurs pas besoin d'aller fouiller dans les archives lointaines pour retrouver des épisodes hivernaux marquants en mars. En 2010, l'agglomération de Perpignan s'était retrouvée sous 25 à 40 cm de neige le 8 mars et les températures plongeaient localement jusqu'à -10°C dans le nord-est de l'hexagone ! 30 à 40 cm de neige sur l'agglomération de Perpignan (66) le lundi 8 mars 2010 - Météo Villes Encore plus près de nous, on peut évoquer la tempête de neige historique qui s'était produite de la Bretagne à la Belgique le 12 mars 2013. La Normandie avait été la région la plus touchée et Météo France avait même déclenché la vigilance ROUGE neige dans la Manche et le Calvados. Le vent violent avait causé des congères atteignant 1 à 2 mètres de haut ! Par endroits, les véhicules étaient littéralement ensevelis ! Hors-congères, il était tombé 20 à 40 cm de façon généralisé dans ces départements. Le village des Pieux dans le Cotentin (50), dans la tempête de neige du 13 mars 2013 - via infoclimat.fr S'il n'y a pour le moment pas de réel signal vers un retour du froid, ce dernier ne peut aucunement être exclu alors que nous ne sommes qu'en février. Ces exemples passés nous rappellent que des coulées d'air froid peuvent suivre les premiers pics de douceur printanière. À lire également : &gt;&gt;&gt; Les stations des Alpes ensevelies sous plusieurs mètres de neige ! &gt;&gt;&gt; Et si le mois de mars était très sec ? &gt;&gt;&gt; Tempête Pedro : la goutte d'eau de trop ! &gt;&gt;&gt; 1 mort et de gros dégâts : la tempête Nils a frappé fort ! &gt;&gt;&gt; Notre bulletin météo réactualisé quotidiennement &gt;&gt;&gt; Notre compte Twitter très suivi et référence dans tous les médias ! Auteur : Alexandre Slowik

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 5. `FR` [L'hiver sans fin... de la mi-novembre à la mi-mars !](data/articles/8193eba90484312cf6c3f2bd7f477717.html)
**Source:** Météo-Paris
À la fin de l’hiver 1963, l’épaisseur du manteau neigeux est parfois spectaculaire dans les massifs montagneux, notamment dans les Vosges, où elle dépasse localement 10 mètres sur les plus hautes crêtes. Archives meteo-paris.com L'hiver 1962-63 fut le plus long depuis des siècles Après une fin des années 1950 et un début des années 1960 relativement cléments, l’hiver 1962-1963 s’impose comme l’un des plus longs et des plus marquants du XXe siècle. À Paris, il devient le plus froid enregistré depuis l’hiver 1879-1880. Le gel apparaît dès la mi-novembre 1962 et s’installe durablement, ne s’interrompant que brièvement jusqu’au début du mois de mars 1963. Au même moment, la guerre d’Algérie s’achève, provoquant l’exode massif des pieds-noirs vers la métropole. Habitués à des hivers plus doux, ils découvrent une France au climat presque polaire. À Marseille, les paquebots Ville-d’Oran et Hairouan voient même leur départ pour Alger retardé d’une journée en raison de la neige et du froid intense. Partout, le pays se fige. À Deauville, les yachts restent prisonniers des glaces, tandis que des milliers de péniches sont immobilisées sur des canaux et des rivières gelés. Dès la fin décembre, le Rhin, le Rhône et la Seine charrient des glaçons, bientôt rejoints par la Garonne et la Loire. La Bretagne est loin d'échapper à cette vague de froid monumentale... ici, à l'entrée de Rennes, à la fin du mois de février 1963- archives meteo-paris.com La période du 12 janvier au 6 février est la plus rigoureuse Car cet épisode est arquée par un gel quasi permanent. Les températures atteignent des niveaux exceptionnels : -27 °C à Ambérieux, -26 °C à Vichy, -23 °C à Lyon, -18 °C à Montpellier, -14 °C à Dinard et -13 °C à Paris. Marseille connaît sa quatrième chute de neige de l’hiver, avec encore 20 cm supplémentaires. La pénurie de combustibles refait surface : la consommation de charbon augmente de 40 % et celle de fuel double. Début février, de nombreux locataires des HLM parisiens se retrouvent sans chauffage. L’Union des Vieux de France réclame une allocation d’urgence pour les personnes âgées. Aux confins de la Bourgogne, du Berry, de la Lorraine et de l’Isère, quelques loups venus d’Europe de l’Est sont aperçus, poussés par le froid. Mieux vaut tirer partie de la situation… À Carcassonne, sous plusieurs dizaines de centimètres de neige au mois de février 1963 - photo colorisée - archives meteo-paris.com - 29°C dans l'Hérault... une banquise sur le littoral de la Mer du Nord... ! L’intensité du gel est telle qu’une banquise se forme sur le littoral de la mer du Nord, de Dunkerque jusqu’à La Panne, en Belgique. La mer gèle également en Charente-Maritime, à La Courbe. Tous les grands fleuves charrient des glaçons, certains se retrouvant même localement totalement pris par les glaces. Le 4 février, une violente tempête de neige paralyse le Languedoc-Roussillon et la Corse. Des usines s’effondrent sous le poids de la neige. À Saint-Martin-de-Londres, la température chute à -29 °C, détruisant des vergers entiers. Sur la Côte d’Azur, la production florale des serres d’Antibes est anéantie. Un redoux temporaire, les 6 et 7 février, laisse espérer une amélioration, mais le froid reprend rapidement ses droits. Les 19 et 20 février, de nouvelles chutes de neige recouvrent le pays. En région parisienne, 15 à 20 cm de poudreuse transforment les pentes en pistes de ski improvisées. Des skieurs sur l'esplanade du Trocadéro, devant la Tour Eiffel, après les chutes de neige de la fin du mois de février 1963 - photo colorisée - archives meteo-paris.com De très nombreux décès... et un dégel très tardif En mars, le dégel provoque d’importants dégâts sur les routes. Si l’agriculture souffre moins qu’en 1956, les blés d’hiver sont partiellement détruits. En France, le nombre de décès liés à cet hiver exceptionnel atteint 30 000, un bilan alarmant en raison de la durée et de l’intensité du froid. Cet hiver 1962-1963 se révèle également remarquable par son ampleur à l’échelle mondiale : l’Est des États-Unis, le Canada, la Chine, le Japon, la Sibérie et l’ensemble de l’Europe occidentale connaissent des conditions extrêmement rigoureuses, tandis que l’Alaska, l’Islande, l’Afrique du Nord, le Moyen-Orient et l’Inde bénéficient d’une douceur inhabituelle. &gt;&gt;&gt; Après la guerre, l’épreuve du grand froid de l’hiver 47-48 &gt;&gt;&gt; Le supplice du terrible hiver 1917 &gt;&gt;&gt; Jusqu'à 60 cm de neige sur la Côte d'Azur à la fin du mois de février ! &gt;&gt;&gt; -40 au vent à Marseille et Dunkerque bloqué par la banquise : c'est possible ! &gt;&gt;&gt; Février 1963 polaire, au terme de l'hiver le plus long du 20e siècle &gt;&gt;&gt; Février 1954 : une vague de froid pas comme les autres Auteur : Guillaume Séchet

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 6. `FR` [Hiver 2010 : le plus long et le plus neigeux depuis 1987](data/articles/c9060ec63a38c51265f5312c01036bf1.html)
**Source:** Météo-Paris
Le château de Versailles sous la neige dans une ambiance polaire le 15 février 2010 – Archives Météo-Villes Un mois de janvier exceptionnellement neigeux ! Après un automne 2009 plutôt doux, l'hiver a fait un retour remarqué dès le mois de décembre sur la France. Une première vague de froid s'est en effet propagée jusqu'à la France à partir du 13 décembre avec de l’air glacial venu de Russie envahissant tout le pays et de la neige sur de nombreuses régions, atteignant même la région de Nice le 18 décembre. Cette première vague de froid se termine quasiment le jour de Noël, mais la douceur qui caractérise les derniers jours de l’année ne sera que très éphémère. Après une courte pause plus douce donc, le froid revient de plus belle à partir du 31 décembre 2009. Le début du mois de janvier 2010 est ainsi très hivernal sur la quasi totalité de la France avec de première chutes de neige le 1er janvier entre les côtes de la Manche et l'Île-de-France (10cm en Seine-Maritime). Les 3 et 4 janvier, c'est sur le sud de la France que la neige se montre plus étendue, tombant du Poitou à la région Rhône-Alpes en passant par le Limousin et l'Auvergne, on mesure 20cm à Grenoble, 13cm à Lyon et 8cm à Clermont-Ferrand. 8 cm à Lyon le 4 janvier 2010 – Archives Météo-Villes Le 6 janvier, la neige tombe par averses en Normandie avec 20cm mesurés à Honfleur. Le lendemain, on mesure 30cm à Alençon, 20cm à Dreux, Chartres et entre le sud du 78, 91 et 77 au passage d'une goutte froide alors qu'il neige également sur le sud-est entre le Languedoc-Roussillon et la Camargue puis jusqu'en vallée du Rhône et dans les Alpes la nuit suivante. Alors que la matinée du 8 janvier est glaciale dans le nord du pays avec jusqu'à -20,6°C 0 Brétigny-sur-Orge, battant le record de 1985, de très fortes chutes de neige persistent sur le sud. On mesure jusqu'à 50cm à Gap, 35cm à Grenoble, 30cm à Orange et même 20cm en Camargue. Ces chutes persistent le lendemain avec des cumuls devenant impressionnants dans l'intérieur du Languedoc-Roussillon jusqu'au Tarn. Certains villages d'altitude sont coupés du monde avec parfois plus de 50 à 60cm cumulés ! 60cm de neige le 9 janvier 2010 aux Martys (900m) dans le département de l'Aude – Photographie : meteo81 La neige remonte d'ailleurs de nouveau sur le nord du pays durant cette journée, apportant 2 à 10cm supplémentaires jusqu'en Alsace, Bourgogne, Franche Comté et même en Bretagne. De très nombreuses région françaises sont ainsi sous la neige. Après une nouvelle perturbation accompagnée de neige (3 à 7cm sur une large partie du nord et de l'est du pays) et de pluie verglaçantes entre les Pays de la Loire, la Bretagne et la Basse-Normandie, le temps se montrera plus sec jusqu'au 20 janvier avec un redoux très progressif sur la majorité du pays. Celui-ci restera néanmoins une nouvelle-fois de courte durée. Une troisième vague de froid envahira en effet la France à partir du 25 janvier 2010. Le 28 janvier, de nouvelles averses de neige ont déjà lieu sur un large quart nord-est jusqu'au nord des Alpes avnat une perturbatioj plus active le lendemain, apportant des chutes plus franches en Champagne-Ardenne, Lorraine, Bourgogne, Franche-Comté et au sud de l’Alsace. La neige tient surtout au-dessus de 300m d’altitude. Le 31 janvier, la neige atteint de nouveau la Côte d'Azur avec plusieurs centimètres entre Nice et Fréjus, surtout entre Cannes et Saint-Raphaël où les plages sont bien blanchies. Dans le même temps, on mesure -14°C à Aurillac et -11°C à Nevers. Plages blanchies par la neige à Cannes le 31 janvier 2010 au matin – Archives Météo-Villes Un mois de février tout aussi hivernal ! Le mois de février débute donc sous le froid et la neige sur de nombreuses régions. Dès le 1er févier, des chutes de neige sont observées sur une partie du nord et de l'est avec par exemple 5/7cm à Lyon. Le 2 février, on mesure 30cm de neige dès 200m d'altitude dans le nord-est avant un net redoux entre le 3 et le 4 sur la totalité du pays. À La Mure, on passe par exemple de -16,9°C en début de nuit à 10.7°C durant la journée ! Encore une fois, le redoux restera temporaire puisque la 4ème vague de froid de la saison envahira la France le 9 février avec notamment le retour de la neige sur le nord dès la fin de journée. Le 10 février, on observe des averses de neige sur une large partie du nord et du centre du pays, plus fréquentes sur le Pas-de-Calais. C'est néanmoins le 11 février que la neige va se montrer plus généralisée et même parfois forte une nouvelle-fois sur la Côte d'Azur. On mesure en effet 5cm à Nice en fin de journée du 11 février, 10 à 15cm à Cannes et jusqu'à 30-40cm dans la région de Grasse dès 200m d'altitude ! Les jours suivants seront plus secs mais généralement glaciales sur la quasi-totalité du pays, excepté entre la pointe Bretonne, la Côte d'Azur et le littoral de la Corse avec des gelées généralisées et parfois fortes, les minimales descendant souvent sous les -10/-15°C. Les chutes de neige successives et le froid deviennent pesants pour bon nombre de français - Une du 10 février 2010 Cette 4ème vague de froid prendra fin le 17 février avec la reprise d'un flux océanique très perturbé mais aussi plus doux. Plusieurs tempêtes successives concerneront d'ailleurs la France à la fin du mois de février, notamment la fameuse tempête Xynthia le 27 février au soir. L'hiver n'avait néanmoins pas dit son dernier mot, celui-ci faisant un dernier retour durant le mois de mars. Ce début d'année 2010 fut donc exceptionnellement neigeux sur notre pays, le plus neigeux depuis l'hiver 1986-1987, si bien que peu de régions ont été épargnées par les flocons entre décembre, janvier et février. À lire également : &gt;&gt;&gt; Février 1991 : vague de froid et neige de la Bretagne à la côte d'Azur &gt;&gt;&gt; Février 1956 : la pire vague de froid du XXème siècle en France ! &gt;&gt;&gt; Février 1954 : une vague de froid pas comme les autres &gt;&gt;&gt; -20°C en plaine : retour sur la vague de froid de février 2012 &gt;&gt;&gt; Jusqu'à 70 cm de neige en plaine fin janvier en Roussillon ! &gt;&gt;&gt; Un premier hiver de la seconde guerre mondiale glacial ! Auteur : Tristan Bergen

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 7. `FR` [Après la guerre, l’épreuve du grand froid de l’hiver 47-48](data/articles/75e5cf92612d021341323cc8037af00b.html)
**Source:** Météo-Paris
Neige à Paris - Place de l'Opéra - fin février 1948 - archives meteo-paris.com Une descente froide polaire particulièrement puissante À la fin de janvier et au début de février 1948, une puissante cellule anticyclonique s’installe sur la Scandinavie et l’Europe du Nord. Cette configuration bloque les perturbations atlantiques et favorise un flux persistant d’air continental très froid en provenance d’Europe orientale et de Russie. Les masses d’air, sèches et glaciales, s’étendent vers l’ouest et le sud-ouest du continent. L'air glacial qui descend de la mer baltique vers la France, le 20 février 1948 - Source : Wetterzentrale Une vague de froid intense à la fin du mois de février Du 20 au 27 février 1948 : le froid et la neige envahissent toute la France - la Bretagne est particulièrement concernée par cette offensive hivernale et la température descend à -13° à Brest où la ville est recouverte d’un épais manteau blanc. Les 22 et 23 février 1948 , une tempête de neige d’une rare violence paralyse la moitié nord. La température descend à -20°C à Clermont-Ferrand et -10 à -12°C en Ile-de-France. La neige atteint même la Côte d’Azur. Les maximales restent fréquemment négatives pendant plusieurs jours consécutifs, et le froid est accentué par des vents parfois soutenus, augmentant la sensation de gel. Évolution des températures à Paris au cours du mois de février 1948 - source : site meteo-climat La capitale ainsi que d'autres grandes villes françaises sont paralysées La neige, parfois abondante, persiste au sol en raison des températures durablement négatives. Dans certaines zones, les cours d’eau gèlent partiellement et les sols restent pris par le gel sur une profondeur inhabituelle. Des chasse-neige font leur apparition dans les rues de Paris où la circulation devient praticable impraticable… La paralysie de la Capitale est donc un sujet majeur. L'utilisation de chasse-neige devenue nécessaire dans Paris à la fin du mois de février 1948 - archives meteo-paris.com Pénuries de charbon et infrastructures fragilisées La vague de froid de février 1948 survient dans un contexte d’après-guerre marqué par des infrastructures fragilisées et des pénuries, notamment de charbon et de combustible. Les transports ferroviaires et routiers sont fortement perturbés par la neige et le gel. L’approvisionnement en énergie devient difficile dans plusieurs régions, entraînant des coupures de chauffage. Sur le plan humain, le froid intense provoque une surmortalité, en particulier parmi les populations les plus vulnérables. L’agriculture subit également des dégâts notables, avec des cultures et des arbres fruitiers affectés par le gel prolongé. Une circulation difficile sur la place de la Concorde à la fin du mois de février 1948 - archives meteo-paris.com La vague de froid de février 1948 est souvent associée, dans les archives météorologiques, au « grand hiver 1947-1948 ». Elle demeure une référence pour l’étude des épisodes de froid extrême en Europe de l’Ouest, tant par sa durée que par son intensité et ses impacts socio-économiques. À lire également : &gt;&gt;&gt; Le dernier hiver de la guerre fut terriblement froid en France... &gt;&gt;&gt; Le supplice du terrible hiver 1917 &gt;&gt;&gt; Le blizzard meurtrier de la fin février 1958 &gt;&gt;&gt; Jusqu'à 60 cm de neige sur la Côte d'Azur à la fin du mois de février ! &gt;&gt;&gt; -40 au vent à Marseille et Dunkerque bloqué par la banquise : c'est possible ! &gt;&gt;&gt; Nos très nombreux articles (1 à 3 par jour) &gt;&gt;&gt; Notre almanach météo les principaux évènements climatiques en France depuis 1850 &gt;&gt;&gt; Notre chronique sur les évènements climatiques depuis 1709 &gt;&gt;&gt; Notre compte Twitter très suivi et référence dans tous les médias ! Auteur : Guillaume Séchet

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 8. `FR` [Près de 140 records de chaleur battus ce mercredi en France !](data/articles/7f993eae9f7a4b76f94a6cbd7910f7a0.html)
**Source:** Météo-Paris
La plage de La Ciotat (13) prise d'assaut le dimanche 22 février 2026 - photo mairie Les températures s'envolent à des niveaux records en cette fin de mois de février, atteignant 25°C dans le centre de la France et flirtant avec les 30°C au pied des Pyrénées. Les chaleurs précoces sont de plus en plus fréquentes et faciles à atteindre. Presque 30°C fin février ! Le printemps est déjà là, pour ne pas dire l'été ! Ces dernières heures, les températures s'envolent à des niveaux remarquables en France. Les premières chaleurs de l'année ont concerné le sud-ouest ce mardi 24 février 2026. Au pied des Pyrénées, la barre des 25°C a été allègrement dépassée et on s'est même approché des 30°C dans le Béarn avec une température maximale de 29,5°C mesurée à Saint-Gladie-Arrive-Munein, loin devant son record de 27,0°C en février 2020 ! On peut aussi noter 26,6°C à Biarritz, 26,2°C à Pau, 25,9°C à Saint-Girons ou encore 25,2°C à Dax. Températures maximales relevées au sud-ouest le mardi 24 février 2026 - meteociel.fr Cette surchauffe inhabituelle alors que nous sommes encore en hiver s'est poursuivie ce mercredi 25 février 2026 en s'étendant jusqu'au nord de la France. Le pays a vécu une journée hors norme avec jusqu'à 28°C dans le Pays Basque et des dizaines de records de douceur/chaleur battus jusqu'aux rivages de la Mer du Nord ! Parmi les records les plus marquants, on peut citer 26,5°C à Biscarrosse dans les Landes, 25,6°C à Tiranges en Haute-Loire, 25,2°C à Montgivray dans l'Indre, 25,1°C à Tulle en Corrèze, 24,7°C à Montluçon dans l'Allier, 22,4°C à Orléans dans le Loiret ou encore 22,3°C au Mans dans la Sarthe ! Températures maximales mesurées en France ce mercredi 25 février 2026 - Météo Villes Plus de 100 records mensuels battus le 25 février !! Plus de 100 records de douceur et chaleur ont été battus ce mercredi 25 février 2026, la preuve qu'il s'agissait bien de l'une des journées les plus chaudes, jamais enregistrée pour un mois de février. Par exemple 26,5°C à Biscarrosse (40), 25,6°C à Tiranges (43), 25,2°C à Montgivray (36), 25,1°C à Tulle (19), 24,7°C à Montluçon (03), 22,4°C à Orléans (45), 22,3°C au Mans (72). Beaucoup datent de la fin février 1960, 1990, 1998 ou 2019 &gt;&gt;&gt; liste des records de ce 25 février 2026 ici &gt;&gt;&gt; Carte des records mensuels de température battues le 25 février 2026 - Meteociel.fr Chaleur précoce de plus en plus facile à atteindre Lorsque l'on parle de chaleur précoce, il est difficile de ne pas évoquer les 31,2°C de Saint-Girons (Ariège) le 29 février 1960. Toutefois, il faut préciser que le flux de sud observé à l'époque était nettement plus marqué et que la température de la masse d'air à 1500m flirtait avec les 20°C sur la façade atlantique ! Hier, la masse d'air affichait "seulement" 12 à 14°C à 1500m en Aquitaine, ce qui n'a pas empêché le thermomètre d'approcher les 30°C ! Cela montre à quel point il devient facile d'atteindre des sommets thermiques, même sans masse d'air record. Si la même situation que fin février 1960 se produisait de nos jours, il est probable que nous atteindrions 32-33°C au pied des Pyrénées ! Comparatif des masses d'air observées les 29 février 1960 et 24 février 2026 - meteociel.fr Il faut dire que cela fait plusieurs années que la fin de l'hiver météorologique ressemble souvent au printemps. Nous sommes sur 8 mois de février consécutifs plus doux que la normale en France et avec des anomalies conséquentes puisque 5 des 8 derniers mois de février ont enregistré un écart thermique égal ou supérieur à +2°C ! On ne compte plus les pics de douceur/chaleur records. En février 2025, il avait fait 19,5°C en Belgique. En février 2024, 22°C dans le centre de la France. En février 2021, quasiment 23°C en Alsace. En février 2020, pas moins de 27°C sur la côte basque. Sans oublier la remarquable fin février 2019 avec 20 à 25°C sur la quasi-totalité du pays et 27°C en Aquitaine ! Anomalie thermique (aux normales 1991-2020) en France au mois de février de 1988 à 2026 - Météo France Avec le réchauffement climatique, le mois de février tend à perdre ses caractéristiques hivernales et devient de plus en plus un mois de printemps. Cela engendre un éveil précoce de la végétation, qui est alors surexposée au risque de gel tardif en mars et avril. Pour autant, il reste possible de vivre des mois de février froids en France, comme ce fut le cas pour la dernière fois en 2018. À lire également : &gt;&gt;&gt; Un blizzard new-yorkais est-il possible en France ? &gt;&gt;&gt; 80 cm de neige dans le Var : la pagaille de la fin février 2001 &gt;&gt;&gt; L'hiver sans fin... de la mi-novembre à la mi-mars ! &gt;&gt;&gt; Les stations des Alpes ensevelies sous plusieurs mètres de neige ! &gt;&gt;&gt; Et si le mois de mars était très sec ? &gt;&gt;&gt; Notre bulletin météo réactualisé quotidiennement &gt;&gt;&gt; Notre compte Twitter très suivi et référence dans tous les médias ! Auteur : Alexandre Slowik

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 9. `FR` [La sécheresse va-t-elle succéder aux inondations ?](data/articles/c0e2fafba4bf8a2511e4ddedc4eb2a34.html)
**Source:** Météo-Paris
Après un début d'année particulièrement arrosé, l'anticyclone rétablit un temps calme qui semble parti pour durer. Peut-on craindre une sécheresse malgré un hiver très pluvieux ? Notre article vous donne des éléments de réponse. Des nappes très bien rechargées ! Après un début 2026 particulièrement pluvieux, les nappes phréatiques ont pu se recharger efficacement. À quelques jours du printemps météorologique et à l'approche de la fin de saison de recharge des nappes, la situation est plus que satisfaisante dans la majeure partie des régions. 70% des nappes de France affichent des niveaux égaux ou supérieurs à la normale. Autre bonne nouvelle, l'Aude et les Pyrénées-Orientales - qui souffraient d'une sécheresse chronique - ont reçu des pluies très abondantes et leurs nappes sont remontées à des niveaux inédits depuis de longues années. Niveau des nappes phréatiques ce jeudi 26 février 2026 - info-secheresse.fr Outre la situation en profondeur, il faut également évoquer la situation en surface. Après ce début d'année 2026 exceptionnel : l'indice d'humidité des sols atteint des records ! Il y a quelques jours, l'indice à échelle nationale était à son plus haut niveau depuis le début des mesures pour cette époque de l'année ! D'ailleurs, il arrive même sur le podium des situations où les sols ont été les plus humides en France, toutes dates confondues. Seuls décembre 1982 et janvier 1994, théâtres de graves inondations, avaient connu une humidité moyenne légèrement supérieure à la situation actuelle. Indice d'humidité des sols en moyenne nationale du 18 février 2025 au 17 février 2026 - Météo France En résumé : en cette fin février 2026, nous sommes aux antipodes d'une situation de sécheresse avec des sols gorgés en humidité en surface couplés à des nappes phréatiques affichant des niveaux élevés dans de nombreuses régions. Une sécheresse reste-t-elle possible d'ici l'été ? Avec des nappes phréatiques à des niveaux souvent très satisfaisants, le spectre de la sécheresse est forcément moins important qu'il n'a pu l'être au cours des dernières années. Cependant, il faut surveiller le tournant actuel. En effet, il semblerait que le retour de conditions météorologiques plus sèches s'inscrive dans la durée. Les dernières tendances pour mars 2026 envisagent un mois sec en France, voire très sec dans la moitié sud où le déficit pluviométrique pourrait être marqué. À une saison où la végétation en éveil est gourmande en eau, les sols seront donc amenés à s'assécher. Anomalie pluviométrique envisagée en Europe en mars 2026 - NOAA Les nappes phréatiques hautes ne nous protègent pas d'un risque de sécheresse superficielle. Comme son nom l'indique, elle se traduit par un déficit prononcé d'humidité des sols en surface, pouvant altérer le bon développement de la végétation. C'est pourquoi on l'appelle souvent "sécheresse agricole". Contrairement à la sécheresse en profondeur (liée aux nappes), la sécheresse superficielle peut apparaître en seulement quelques semaines lorsque l'anticyclone s'installe et que la pluie manque, surtout si l'ensoleillement est important et que les températures sont élevées. La sécheresse superficielle des sols peut apparaître en quelques semaines - photo Fabrice Elsner Bien Ainsi, le risque d'une importante sécheresse en profondeur semble très limité cette année, grâce au niveau des nappes élevé en sortie d'hiver. En revanche, un printemps sec et chaud suffirait à assécher considérablement les sols en surface et pourrait occasionner une sécheresse de surface, même si les nappes sont hautes. Il est important de différencier ces deux types de sécheresses, qui peuvent se produire indépendamment l'une de l'autre. À lire également : &gt;&gt;&gt; Près de 140 records de chaleur battus ce mercredi en France ! &gt;&gt;&gt; Et si le mois de mars était très sec ? &gt;&gt;&gt; Un blizzard new-yorkais est-il possible en France ? &gt;&gt;&gt; 80 cm de neige dans le Var : la pagaille de la fin février 2001 &gt;&gt;&gt; L'hiver sans fin... de la mi-novembre à la mi-mars ! &gt;&gt;&gt; Notre bulletin météo réactualisé quotidiennement &gt;&gt;&gt; Notre compte Twitter très suivi et référence dans tous les médias ! Auteur : Alexandre Slowik

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 10. `FR` [Le retour du sable du Sahara sur la France](data/articles/7917174bafad61c376fb3aea6c908194.html)
**Source:** Météo-Paris
Schéma des remontées de sable du Sahara qui pourraient se produire sur le France, notamment au début de ce mois de mars 2026 - illustration, reprise dans le livre "Y a plus de saison", Guillaume Séchet, 2008 C'est le retour du sable du Sahara après quelques mois d'absence… Des quantités qui pourraient être plus massives au début du mois de mars. De premières remontées de sable en cours Avec le puissant courant océanique que nous avons connu au cours de ces dernières semaines, il était impossible que du sable du Sahara remonte vers nos régions. Mais la situation a bien évolué… Le vent s'est orienté au sud sur toute l’Europe occidentale et les remontées de sable du Sahara ont commencé à nous intéresser. Cependant, jusqu'à ce week-end, ces remontées de poussière saharienne resteront relativement limitées et peu visibles dans le ciel. Elles vont d'ailleurs s'évacuer vers l'est poussée par un léger courant océanique à partir de vendredi. Simulation des remontées de poussière saharienne à 3000 m d'altitude d'ici mercredi soir - Meteociel Des remontées beaucoup plus massives début mars Pour que ce phénomène soit beaucoup plus massif, il faut qu’une dépression se forme sur la péninsule Ibérique et plonge vers le désert marocain et algérien, happant avec elle d’importantes quantité de sable du Sahara qui traverse la Méditerranée et arrive jusque sur nos régions. Et ce sera justement et probablement le cas au début du mois de mars, lorsqu’une goutte froide s’installera sur l’Espagne et en engendrera d’importantes remontées de poussière vers la France. Si cette échéance est encore assez lointaine, le risque est assez élevé et les scénarios qui vont dans ce sens se suivent et se ressemblent. Prévisions des remontées de sable du Sahara entre le 1er et le 4 mars - météo grecque (université d'Athènes) Un phénomène assez fréquent à la fin de l'hiver et au printemps Le début du printemps est d’ailleurs une période assez favorable pour ce type de phénomènes car des gouttes froides viennent souvent s’isoler sur la péninsule Ibérique; et les remontées chaudes en provenance d’Afrique du Nord sont assez fréquentes. Ce fut par exemple le cas les : &gt;&gt;&gt; 20 mars 2025, &gt;&gt;&gt; 3 mars 2025, &gt;&gt;&gt; 17 février 2025, &gt;&gt;&gt; 6 avril 2024, &gt;&gt;&gt; 30 mars 2024, &gt;&gt;&gt; 20 février 2023, &gt;&gt;&gt; 26 mars 2022 &gt;&gt;&gt; 16 mars 2022 Grosses quantités de sable saharien dans le ciel d'Aguilas (sud-ouest de l'Espagne) ce 14 mars 2022 - photo Jose Gome Ros Auteur : Guillaume Séchet

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 11. `FR` [Douceur exceptionnelle entre mardi et mercredi](data/articles/02c06ff91d2fa196c96d3bff28527f72.html)
**Source:** Météo-Paris
Les anomalies de température prévue pour mercredi prochain seront très importantes : localement jusqu'à 12°C au-dessus des normales de saison ! Après de longues semaines marquées par une météo très agitée, entre pluies abondantes, vents violents et inondations, la situation commence enfin à s’améliorer. Même si l’hiver n’est pas encore terminé, la fin du mois de février annonce souvent les premiers signes du printemps — et c’est bien ce qui semble se profiler cette année. Retour de l'anticyclone des Açores Depuis plusieurs semaines, l’anticyclone des Açores nous délaisse. Positionné bien trop au sud, il laisse le courant perturbé océanique influencer l’ensemble de l’Europe, y compris la péninsule Ibérique. Dans ce contexte, la France connaît un temps particulièrement instable, ce qui explique des inondations de plus en plus étendues et marquées. La situation s’apprête toutefois à évoluer. Dès ce week-end, les hautes pressions devraient progressivement remonter vers l’Europe continentale. L’anticyclone se centrera alors sur l’Andalousie. Le flux d’ouest océanique restera présent sur la France, mais il sera nettement moins actif : les pluies se cantonneront principalement aux côtes de la Manche. Évolution de la masse d'air prévue entre mardi et mercredi - animation WRF Meteociel Parenthèse printanière d'une à deux journées À partir de lundi, et surtout mardi, les hautes pressions se décaleront davantage vers le continent. Le vent s’orientera au sud, favorisant la remontée d’un air très doux en provenance du Maroc. En cette fin février, le soleil gagne déjà en hauteur dans le ciel. Dans une telle configuration, les températures peuvent grimper plus facilement qu’au cœur de l’hiver. La période de la Saint-Valentin marque d’ailleurs souvent le début du réveil de la nature : certains oiseaux entament leur période de reproduction, ce qui serait à l’origine de cette fête. La fin du mois de février offre régulièrement une ou deux journées aux accents printaniers. Les journée de mardi et surtout mercredi devraient illustrer parfaitement cette tendance : le ciel sera enfin dégagé sur les trois quarts du pays et les températures dépasseront fréquemment les 15 °C l’après-midi. Avec un vent de sud soufflant au pied des Pyrénées, le seuil de chaleur pourrait même être approché, voire atteint localement, avec jusqu’à 25 °C sur le Pays basque. Prévisions des températures METEO-VILLES pour mercredi prochain Cette parenthèse printanière pourrait être d'assez courte durée. Dès jeudi, le courant perturbé océanique devrait reprendre le dessus, entraînant le retour des nuages, de quelques pluies par l’ouest et, mécaniquement, des températures un peu moins agréables, même si la douceur restera d’actualité. À lire également : &gt;&gt;&gt; Et si le mois de mars était très sec ? &gt;&gt;&gt; Les stations des Alpes ensevelies sous plusieurs mètres de neige ! &gt;&gt;&gt; Pourquoi pleut-il autant depuis le début de l'année ? &gt;&gt;&gt; Notre bulletin météo réactualisé quotidiennement &gt;&gt;&gt; Notre compte Twitter très suivi et référence dans tous les médias ! Auteur : Guillaume Séchet

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 12. `FR` [Le mois de février le plus froid après 1956...](data/articles/6ab4b66ec6e19a1d35ecf55c7973b431.html)
**Source:** Météo-Paris
La vague de froid début par 2 m de neige dans le Midi ! Le 30 janvier 1986, une tempête de neige d’une violence exceptionnelle s’abat sur le Languedoc-Roussillon, l’Ariège et le sud du Massif central. En l’espace d’à peine une journée et demie, les cumuls pulvérisent tous les records : près de deux mètres de neige à Loubaresse, en Ardèche, 1,70 mètre à Réal, dans les Pyrénées-Orientales, et jusqu’à 50 centimètres à Carcassonne. Les routes disparaissent, les villages se retrouvent coupés du monde. L’armée est appelée en renfort. Très vite, la situation devient critique. Un million de personnes sont plongées dans le noir. Le plan ORSEC est déclenché en Ardèche. Dans certaines communes du Massif central, l’électricité ne revient qu’au bout de trois semaines, déclenchant une vive polémique sur la gestion de la crise. L’Ardèche dans la tempête de neige extraordinaire du 30 janvier 1986 - archives meteo-paris.com Plusieurs jours de blizzard entre la Bretagne et la Beauce Cette tempête annonce un mois de février hors normes. Après l’hiver déjà mémorable de 1984-1985, le froid s’installe durablement. Sur la moitié nord du pays, février 1986 devient le mois le plus froid depuis 1956. La vague de froid débute le 5 février et ne lâche prise que le 28. Une durée exceptionnelle, aux conséquences dramatiques. Selon le climatologue Daniel Rousseau, près de 13 000 décès supplémentaires sont recensés par rapport à un hiver jugé « normal ». Les régions situées à la frontière de l’air glacial paient un lourd tribut. La Bretagne, les Pays de la Loire, le Centre, la Bourgogne et Rhône-Alpes sont régulièrement balayés par la neige et de véritables blizzards. Dans le Loiret, le plan ORSEC est à nouveau déclenché : les axes routiers sont paralysés, comme lors de l’hiver 1979. Sur la façade atlantique, les paysages deviennent irréels : 30 centimètres de neige à Pornic, 16 à Lorient. À La Baule ou à Quiberon, des skieurs arpentent les plages. Mi-février 1986 : Les agriculteurs viennent au secours des automobilistes piégés par la neige dans la Beauce - photo meteo-paris.com De la neige jusque sur le littoral de la Corse ! Plus au sud, le froid se fait plus bref, entre le 8 et le 14 février, mais suffisamment intense pour recouvrir de neige toute la Corse, y compris Ajaccio, ainsi que la Côte d’Azur. À Nice, le carnaval est annulé. Le 28 février marque la fin de cet épisode glacial, mais dans la brutalité. De fortes chutes de neige touchent toute la moitié nord, déposant 20 centimètres sur la région parisienne. En Bretagne, des pluies verglaçantes transforment routes et trottoirs en pièges mortels. À Lorient, l’hôpital accueille 75 blessés en seulement huit heures. Les trois quarts des écoles ferment leurs portes. L’hiver 1986 laisse derrière lui un pays éprouvé, figé par le froid et marqué durablement dans les mémoires. La neige à Ajaccio au début du mois de février 1986 - photo meteo-paris.com A lire également : &gt;&gt;&gt; Février 1956 : la pire vague de froid du XXème siècle en France ! &gt;&gt;&gt; Février 1986 : au cœur de trois hivers exceptionnels &gt;&gt;&gt; Notre chronique météo &gt;&gt;&gt; Notre almanach météo &gt;&gt;&gt; Nos bulletins météo réactualisés tous les jours &gt;&gt;&gt; Tendances saisonnières Auteur : Guillaume Séchet

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 13. `FR` [Retour sur l'intense vague de froid de février 1929](data/articles/2d2d35825e8826e49677225f33dfbd82.html)
**Source:** Météo-Paris
Température de la masse d'air vers 1500m le 13 février 1929 - réanalyse via meteociel.fr La vague de froid de février 1929 fait partie des plus intenses ayant touché la France au cours du XXième siècle. Les températures étaient descendues jusqu'à -30 degrés en plaine auvergnate ! Retour sur cet épisode marquant. -30°C en Auvergne : une vague de froid intense ! La vague de froid de février 1929 a été marquante, suivant un froid déjà marqué dès la fin janvier. En deuxième décade de février, un puissant anticyclone scandinave s'oppose à une dépression sur l'Italie, permettant la mise en place d'un véritable Moscou-Paris. Cet dernier advecte un air glacial vers la France et la masse d'air à 850 hPa (vers 1500 mètres d'altitude) atteint les -20°C dans l'est du pays, des niveaux rares ! Le pic de froid survient entre les 11 et 15 février 1929 avec des températures qui restent remarquablement basses de nuit comme de jour. La région de Genève est particulièrement concernée et le lac Léman gèle en grande partie ! La rade de Genève prise par la glace lors de la vague de froid de février 1929 - Chronique Météo Villes À Strasbourg, la moyenne des températures minimales sur l'ensemble du mois affiche -13°C et celle des maximales -3°C ! Cela correspond à un déficit mensuel de -11,5°C aux normales climatologiques modernes ! On enregistre pas moins de 5 nuits entre -20 et -22°C et les températures maximales plafonnent entre -12 et -15°C du 11 au 14 février 1929 ! C'est en Auvergne qu'il fait le plus froid. Le thermomètre chute jusqu'à -30°C en plaine de Limagne, dans la région de Clermont-Ferrand ! Températures minimales et maximales mesurées à Strasbourg (67) en février 1929 - infoclimat.fr Les fleuves pris dans la glace Avec un froid si intense et qui a débuté dès la dernière semaine de janvier 1929, de nombreuses rivières de France sont entièrement prises par les glaces. La Somme est entièrement gelée à Amiens, tout comme la Meuse, l'Aisne à Rethel, l'Yonne et la Seine en amont de Montereau, de nombreux tronçons de la Loire et une bonne partie du Rhône. Les régions méditerranéennes ne sont pas épargnées par cette vague de froid et certaines villes côtières subissent des chutes de neige. Le Rhône est d'ailleurs partiellement pris dans la glace jusqu'à Arles dans les Bouches-du-Rhône ! Le Rhône partiellement gelé à Arles (13) en février 1929 - Chronique Météo Villes Cette vague de froid rend la vie quotidienne particulièrement difficile. À la campagne, l'eau courante n'étant généralement pas encore installée à cette époque, il faut aller chercher l'eau aux fontaines mais la plupart ne fonctionnent plus ! On fait alors fondre des blocs de glace ou de la neige pour bénéficier de l'eau. Il faut dire qu'elle était abondante dans certaines régions. On relevait entre 10 et 20 cm de neige de la Bretagne au Lyonnais (10 cm à Angers, 17 cm à Clermont-Ferrand). La Saône gelée se traverse à la marche à Chalon-sur-Saône (71) en février 1929 - Chronique Météo Villes À lire également : &gt;&gt;&gt; 80 cm de neige dans le Var : la pagaille de la fin février 2001 &gt;&gt;&gt; L'hiver sans fin... de la mi-novembre à la mi-mars ! &gt;&gt;&gt; Les stations des Alpes ensevelies sous plusieurs mètres de neige ! &gt;&gt;&gt; Et si le mois de mars était très sec ? &gt;&gt;&gt; Notre bulletin météo réactualisé quotidiennement &gt;&gt;&gt; Notre compte Twitter très suivi et référence dans tous les médias ! Auteur : Alexandre Slowik

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 14. `FR` [Douceur après les pluies : les pollens explosent en France](data/articles/e72f81a4b8ad7fb0a400dd4c913588e5.html)
**Source:** Météo-Paris
La douceur couplée à l'humidité importante de ce mois de février permettent à la végétation de redémarrer très fortement et précocement. Par conséquent, les pollens se répandant et les allergiques subissent déjà leurs effets néfastes. Pic de douceur après les pluies : explosion des végétaux Les conditions météorologiques récentes et à venir réunissent tous les ingrédients pour l'explosion de la végétation. En effet, une grande douceur s'installe sur la France et va s'accentuer ces prochains jours avec un pic durant les mardi 24 et mercredi 25 février 2026. Les 20°C pourront être atteints jusque dans les régions du nord et on prévoit les premiers 25°C de la saison dans le sud de l'Aquitaine, le tout avec un beau soleil ! Avec des sols très humides suite aux pluies abondantes des dernières semaines et des températures dignes d'avril, la végétation croît très rapidement et les pollens se répandent. Températures maximales prévues les mardi 23 et mercredi 24 février 2026 - Météo Villes Par conséquent, les pollens font leur retour en force et les risques allergiques seront élevés en France durant cette semaine aux airs printaniers. Ce mardi 23 février 2026, le risque d'allergies sera d'un niveau jugé "élevé" par Atmo-France sur la majeure partie des régions, parfois un peu moindre dans certains secteurs du sud-ouest. Cette situation se répètera mercredi et jeudi, avant des risques moins élevés vendredi en raison du passage d'un front pluvieux. Carte du risque allergique valable pour le mardi 24 février 2026 - Atmo-France Cyprès et aulne : les principales menaces Si vous êtes allergiques, il est donc vivement recommandé de reprendre votre traitement ou de prendre rendez-vous chez votre médecin et/ou allergologue. Les personnes allergiques aux cyprès sont particulièrement concernées puisque ce pollen représente une menace importante cette semaine avec des concentrations très élevées dans les régions méditerranéennes, élevées dans le sud-ouest et modérées sur les autres régions. Le pollen de cyprès possède un pouvoir allergisant très important et génère souvent des rhino-conjonctivites. Les pollens de cyprès représentent une très forte menace allergique - photo d'illustration L'autre pollen qui pose problème aux quatre coins du pays est celui de l'aulne. Il est dégagé par ce que l'on appelle des chatons (photo ci-dessous), similaires à ceux du noisetier. Ce pollen est plus discret visuellement mais n'en demeure pas moins redoutable puisqu'il génère des rhino-conjonctivites et des crises d'asthme chez les sujets allergiques. Sa concentration est actuellement élevé et induit un risque de réaction allergique important dans la plupart des régions françaises. Les pollens d'aulne sont libérés par ce que l'on appelle des "chatons" - photo d'illustration Avec le retour du soleil et de températures particulièrement douces après de longues semaines de mauvais temps, beaucoup vont passer de longues heures en extérieur. Il convient donc d'être particulièrement vigilants face aux pollens. À lire également : &gt;&gt;&gt; Les stations des Alpes ensevelies sous plusieurs mètres de neige ! &gt;&gt;&gt; Et si le mois de mars était très sec ? &gt;&gt;&gt; Un air printanier en début de semaine prochaine ! &gt;&gt;&gt; Notre bulletin météo réactualisé quotidiennement &gt;&gt;&gt; Notre compte Twitter très suivi et référence dans tous les médias ! Auteur : Alexandre Slowik

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 15. `FR` [Vers le début d’une lente décrue](data/articles/a0ab6818820313c7eac6d402bf88039a.html)
**Source:** Météo-Paris
La décrue est en vue sur la France avec le retour de conditions bien plus sèches - Celle-ci s'annonce néanmoins lente dans certains secteurs. Images impressionnantes de la crue de la Charente à Saintes ce mercredi 18 février 2026, dont le niveau va continuer de grimper cette nuit et demain. (photos via EPTB Charente) La décrue s'amorce en cette fin de semaine Le temps se montre exceptionnellement perturbé et humide en France depuis maintenant plusieurs semaines. En conséquences, les crues sont nombreuses et parfois très importantes à travers le pays, notamment sur l'ouest et le sud-ouest de la France. Plusieurs tronçons sont d'ailleurs toujours placés en vigilance rouge par Vigicrues ce vendredi 20 février : - Les basses vallées angevines - La Loire aval - La Loire saumuroise - La Charente aval Sur ces secteurs, les niveaux des cours d'eau continuent d'augmenter en cette fin de semaine avant un pic de crue attendu ce week-end. À Saintes par exemple, la Charente devrait atteindre un pic dimanche 22 février autour de 6.60 m (record de 6.84 m en décembre 1982). Évolution du niveau de la Charente à Saintes du 8 au 22 février 2026 – Vigicrues Ce pic devrait être suivi d'une lente décrue sur ce secteur, comme sur la majorité des cours d'eau de l'ouest de la France. En effet, une poussée anticyclonique est observée dès ce vendredi sur la France, ce qui permettra le retour d'un temps plus calme et sec au moins jusqu'en milieu voire fin de semaine prochaine. Cumuls de précipitations attendus jusqu'au vendredi 27 février 2026 sur la France – Modèle GFS via meteociel Ce retour au sec devrait donc permettre aux niveaux des cours d'eau d'entamer une baisse plus ou moins marquée dès ce week-end et ce durant plusieurs jours, une bonne nouvelle pour les régions sinistrées. Une décrue qui s'annonce lente dans certains secteurs Toutefois, il ne faut pas s'attendre à un retour à la normal dès la semaine prochaine. La décrue s'annonce en effet lente à très lente sur la majorité des cours d'eau français. Il faut en effet attendre que toute l'eau des bassins versants s'évacue avant que les fleuves et rivières retrouvent des niveaux plus normaux, ce qui s'annonce long sachant que les sols sont complètement saturés d'eau sur la quasi-totalité du pays. Il est donc logique d'observer un temps de retard entre l'arrêt des pluies et le début de la décrue, le temps que la pluie tombée en amont des cours d'eau se propage en aval. Schéma d'explication d'un bassin versant – METEO-EXTREME À cela s'ajoute la fonte plus ou moins marquée du manteau neigeux attendue dans les prochains jours sur les reliefs. Cette période plus calme et sèche devrait en effet s'accompagner d'un regain de douceur printanière sur notre pays, que ce soit en basses couches mais également en montagne. Cette douceur devrait engendrer un début de fonte du manteau neigeux parfois exceptionnel présent sur nos reliefs. On relevait en effet souvent plus de 250 à 350 cm de neige en haute montagne du côté des Alpes ce 20 février, parfois 4 mètres du côté de l'Isère. Les Pyrénées sont également très enneigées avec en général 250 à 280 cm sur les sommets de la région. Ainsi, l'eau de fonte devrait donc de nouveau alimenter les cours d'eau et ainsi maintenir des niveaux assez hauts malgré l'arrêt des précipitations. La couche de neige dépasse les 250cm en haute montagne dans les Pyrénées en cette fin de semaine comme ici au col du Portalet - Via Twitter @CyNPirineos Enfin, il est important de noter que certains scénarios envisagent déjà le retour de l'influence océanique perturbée pour la fin de semaine prochaine avec des pluies de nouveau généralisées et des perturbations successives, ce qui pourrait engendrer une nouvelle hausse du niveau des cours d'eau. Cette tendance reste néanmoins incertaine et sera à confirmer dans les prochains jours. À lire également : &gt;&gt;&gt; Les stations des Alpes ensevelies sous plusieurs mètres de neige ! &gt;&gt;&gt; Et si le mois de mars était très sec ? &gt;&gt;&gt; Un air printanier en début de semaine prochaine ! &gt;&gt;&gt; Notre bulletin météo réactualisé quotidiennement &gt;&gt;&gt; Notre compte Twitter très suivi et référence dans tous les médias ! Auteur : Tristan Bergen

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 16. `FR` [Le supplice du terrible hiver 1917](data/articles/33dcd85412d6cc63cc25caa66b86b596.html)
**Source:** Météo-Paris
Vague de froid du mois de février 1917 à Paris : Même les chevaux ne résistent pas ! archives meteo-paris.com Les deux derniers hivers de la Première Guerre mondiale sont particulièrement rudes en France, déjà en partie dévastée par trois années de combats. Entre le 20 janvier et le 15 février 1917, une vague de froid exceptionnelle frappe surtout le Nord et l’Est du pays, atteignant son apogée au début de février avec des températures extrêmement glaciales. Dans « Le Monde Illustré » du 3 février 1917, on note que cet hiver renoue avec la tradition, car selon le journal « les grands hivers d’antan deviennent de plus en plus rares… ». Il est vrai que la courbe de l’évolution des températures hivernales en France indique un réchauffement du début du siècle à l’arrivée de la Première Guerre mondiale. Des conditions météo insoutenables pour le moral des troupes Les sols gelés de l’Aisne, paradoxalement, permettent des mouvements de troupes impossibles sur sols boueux en temps normal. Cependant, l’armée française souffre terriblement du froid, étant nettement sous-équipée pour y résister, contrairement à l’armée allemande. Les régiments ne disposent que de quelques peaux de bête, et certains tirailleurs algériens sont même chaussés de souliers découverts et vêtus de culottes courtes. Ces conditions difficiles affectent grandement le moral des troupes. La relève sous la neige durant la guerre - début 1917 - archives meteo-paris.com Jusqu’à -26°C dans les plaines et vallées de l'Est de la France ! Le froid atteint son point culminant au tout début du mois de février avec des températures glaciales : -26 °C à Bonneville, -23 °C à Commercy, -22 °C à Montbrison, -20 °C à Grenoble, -18 °C à Lyon, -17 °C à Alençon et Clermont-Ferrand, et -15,5 °C à Paris. Les dix premiers jours de février sont comparés à la situation de février 1895. A Paris, le déneigement des voies de circulation est très compliqué en raison du manque de main-d’œuvre. Les femmes sont alors réquisitionnées. Février 1917 - archives meteo-paris.com Les rivières gèlent peu à peu Les rivières de l’Est commencent à geler le 24 janvier, tandis que celles du Nord, y compris celles de la région parisienne, le sont dans les derniers jours de janvier, un phénomène inédit depuis 1895. La navigation devient impossible sur les canaux puis sur la Seine. Parallèlement, la forte demande en charbon engendre d’importantes difficultés d’approvisionnement à Paris, comme à Londres. Malgré l’utilisation de quelques brise-glace et la construction de barrages pour retenir les glaces près de Rouen, les péniches restent bloquées entre Rouen et Paris. Un service spécial de transports automobiles est alors mis en place. Rouen - 7 février 1917 - archives meteo-paris.com Le prix du charbon s'envole !! Les files d’attente pour acheter du charbon s’allongent, et les prix s’envolent. Même les bourgeoises des beaux quartiers doivent attendre des heures, ce qui ne manque pas de provoquer quelques grincements de dents, tant figurés que réels. La pénurie de charbon, alors que de nombreuses machines en dépendaient à l’époque, a de plus en plus d’impact sur l’activité économique. Des lignes de tramway sont interrompues, des usines ferment leurs portes, et les blanchisseries, chauffées au coke, cessent progressivement leurs activités. Certains journaux s’indignent même que les prisonniers allemands soient mieux chauffés que les Français. La rareté du charbon entraîne une flambée des prix du bois de chauffage dans les grandes villes. Il est alors vendu au kilo, après avoir été scié et pesé sur des balances à main. Par ailleurs, les fourrures en peau de lapin deviennent très bon marché. Déchargement par la main-d'œuvre après l'immobilisation par le gel - vague de froid 1917 - archives meteo-paris.com A lire également : &gt;&gt;&gt; Notre chronique météo de l'année 1917 &gt;&gt;&gt; Le dernier hiver de la guerre fut terriblement froid en France... &gt;&gt;&gt; Froid polaire pour fin janvier et jusqu'à 1 m de neige à Carcassonne ! &gt;&gt;&gt; Tous nos articles (en moyenne, deux par jour) &gt;&gt;&gt; Notre compte Twitter (référence pour les médias) Auteur : Guillaume Séchet

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 17. `FR` [L'incroyable chaos des 40 cm de neige de mars 1946 en Ile-de-France](data/articles/83902340f4896bb7be2ba82ca618be9d.html)
**Source:** Météo-Paris
A Ville d'Avray (ouest de Paris), la couche de neige atteint 55 cm ! photo d'archive meteo-paris.com Tempête de neige sur le nord de la France Dès la fin février 1946, l'anticyclone s'érige sur l'Atlantique et le Groenland, entraînant un décrochage d'air polaire qui envahit tout le nord de l'Europe et plonge en Mer du Nord. Au sud de cet air froid, une dépression se creuse vers le Portugal puis migre au dessus de la France où elle transite durant plusieurs jours début mars 1946. À l'avant de la dépression, l'air doux englobe le sud de l'hexagone tandis qu'elle rabat l'air froid sur les régions du nord. Un important conflit de masses d'air se produit avec en son centre un épisode neigeux actif et persistant des Pays de la Loire à la Belgique, frappant particulièrement l'Île-de-France ! Situation météo en Europe au 1er mars 1946 - Météo Villes On relève 40 cm de neige au sol à Paris, une épaisseur jamais mesurée depuis le début des relevés météo à Paris-Montsouris ! 80 ans plus tard, cette mesure n'a toujours pas été égalée. La presse de l'époque indique qu'il faut sans doute remonter à l'hiver 1829-1830 pour trouver trace d'une couche de neige semblable dans la région parisienne. La couche fut même encore plus importante à l'ouest de Paris, atteignant jusqu'à 55 cm dans les Yvelines ! Les photos d'époque montrent les terrasses parisiennes ensevelies sous la neige ! Paris sous 40 cm de neige, le 2 mars 1946 ! photo d'archive meteo-paris.com Paris paralysée par 40 cm de neige ! Début mars 1946, Paris s'était alors transformée en une véritable station de sports d'hiver ! De nombreux habitaient avaient chaussé les skis pour circuler dans les rues, dévalant les marches du Trocadéro jusqu'au pied de la Tour Eiffel ou encore les pentes de la butte Montmartre ! Six mois après la fin de la seconde guerre mondiale, les parisiens profitent pleinement de cet épisode exceptionnel. Pour autant, cette neige abondante cause aussi de nombreux problèmes, paralysant la circulation. Skieur descendant la butte Montmartre à Paris début mars 1946 - Chronique Météo Villes L’épaisseur de neige est telle que des toits et des verrières s’effondrent dans plusieurs quartiers de la capitale et que les denrées alimentaires peinent à être acheminées dans la région où les rayons se vident. Le trafic ferroviaire s'en trouve également paralysé. Les rues des villes sont difficilement praticables et de nombreuses chutes surviennent. Il faudra plusieurs jours pour assister à un retour progressif à la normale des activités. Neige abondante au métro Brochant de Paris début mars 1946 - Chronique Météo Villes Il s'agit, aujourd'hui encore, de l'épisode neigeux le plus important sur Paris depuis le début des relevés météorologiques. À lire également : &gt;&gt;&gt; Près de 140 records de chaleur battus ce mercredi en France ! &gt;&gt;&gt; Et si le mois de mars était très sec ? &gt;&gt;&gt; Un blizzard new-yorkais est-il possible en France ? &gt;&gt;&gt; 80 cm de neige dans le Var : la pagaille de la fin février 2001 &gt;&gt;&gt; L'hiver sans fin... de la mi-novembre à la mi-mars ! &gt;&gt;&gt; Notre bulletin météo réactualisé quotidiennement &gt;&gt;&gt; Notre compte Twitter très suivi et référence dans tous les médias ! Auteur : Alexandre Slowik

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 18. `FR` [Records de chaleur pour mercredi ?](data/articles/ed1fb5b2b344a6d87d9792130be8ac9c.html)
**Source:** Météo-Paris
Anomalies thermiques prévues entre le 23 février et le 2 mars 2026 - modèle ECMWF Si les températures ont déjà connu une légère hausse ces derniers jours, ce n’est rien en comparaison de ce qui nous attend cette semaine. Le courant va en effet se diriger vers le sud, permettant à l’air chaud en provenance du Maroc de se propager directement sur la France. La Belgique, l’Allemagne et la Suisse seront également touchées par cette vague de douceur en Europe occidentale. Jusqu'à 12°C au-dessus de la normale ! Tout au long de la semaine, les températures seront largement supérieures aux normales saisonnières pour une fin février, notamment entre mardi et mercredi, lorsque le soleil illuminera les trois quarts du pays. Les écarts à la normale pourraient atteindre sept à dix degrés mardi, et même dix à douze degrés mercredi ! Anomalies de températures maximales prévues mardi et mercredi Plus de 15° presque partout durant quatre jours Entre lundi et jeudi, les températures dépasseront les quinze degrés Celsius l’après-midi sur presque tout le territoire français. La journée la plus douce, voire localement chaude, sera probablement celle de mercredi, car la grande douceur qui aura déjà touché le quart sud-ouest la veille remontera vers les régions du Nord. Températures maximales prévues entre lundi 23 et jeudi 26 février selon METEO-VILLES.COM Peut-être quelques records mensuels battus ? Il sera difficile d’atteindre les records mensuels de douceur pour un mois de février, qui s’élèvent à près de trente degrés dans l’extrême Sud-Ouest et à vingt à vingt-trois degrés sur la plupart des régions. Néanmoins, à Paris, il est possible de se rapprocher des records pour une fin février. Le record pour la troisième décade de février est de 21,4 degrés en 1960. Pour un 24 février, le record est de 20,3 degrés en 1990, et pour un 25 février, il a fait jusqu’à 17,9 degrés à Paris Montsouris en 2019. Records de températures maximales pour un mois de février - Meteociel Pour une fin février, les années de référence sont donc 1960, 1990 et 2019. Pour la moitié sud, on peut également citer 2020 et 2012. Les quais de Seine à la fin du mois de février 2019 avec des températures autour de 18°C à l'ombre à Paris - archives meteo-paris.com &gt;&gt;&gt; Soleil et douceur favorisent floraisons et pollens &gt;&gt;&gt; Douceur exceptionnelle battant des records météo fin février &gt;&gt;&gt; Douceur : comme un air de printemps &gt;&gt;&gt; Douceur exceptionnelle entre mardi et mercredi Auteur : Guillaume Séchet

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 19. `FR` [Une fin février comme en plein été !](data/articles/47f034c2717d2c1a86fcf047188ef0ab.html)
**Source:** Météo-Paris
Certaines plages de la façade Atlantique sont bondées comme en plein été à la fin du mois de février 1990 - Archives Météo-Villes Un changement radical de temps Après trois semaines particulièrement agitées avec une succession de perturbations apportant notamment d'importantes quantités de neige en montagne, des pluies abondantes sur de nombreuses régions et même une puissante tempête sur le nord-ouest de la France, la situation change radicalement sur la France pour la dernière décade de février 1990. Une poussée anticyclonique se met en effet en place sur le pays à partir du 20 février, apportant le retour d'un temps calme et sec mais également un net regain de douceur avec la bascule du flux au sud/sud-ouest en altitude. Situation atmosphérique du 22 février 1990 sur l'Europe – Wetterzentrale Si les semaines précédentes s'était déjà montrées assez douces sous l'influence du flux océanique perturbé, les températures ont pris une toute autre mesure au début de la dernière décade de février 1990. De la chaleur en février ! À partir du 20 février donc, les températures s'envolent sur la totalité du pays. Une véritable vague de chaleur hivernale se met en effet en place sur la France sous ce puissant flux de sud/sud-ouest en altitude. Dès le 20 février, on atteint 20°C jusque dans les Hauts-de-France, 18,5°C à Paris et 19°C à Strasbourg, mais c'est notamment les journées des 23 et 24 février qui se montrent exceptionnellement douces sur la totalité du pays et même chaudes sur certaines régions. Le 23 février, le seuil de chaleur est régulièrement dépassé sur le sud-ouest de la France avec par exemple 25,7°C à Biarritz, 25,9 à Mont-de-Marsan et même 27,2°C à Dax ! Le 24 février, les 26/27°C sont dépassés sur le sud de l'Aquitaine avec jusqu'à 28°C à Peyrehorade (40) et même 28,1°C à Agnos (64). On relève également jusqu'à 25°C à Bordeaux, 23,5°C à Clermont-Ferrand, 22,6°C à Bourges, 22°C à Mulhouse, 21°C à Orléans et 20°C à Paris. Certaines stations du centre de la France atteignent également le seuil de chaleur. De très nombreux records sont observés. Températures maximales relevées sur la France le 24 février 1990 – archive Météo-Villes Cette vague de douceur/chaleur exceptionnelle pour la période prendra fin sur la majorité du pays dès le lendemain avec le retour d'air océanique moins doux. Seules les régions allant du Massif Central au nord-est conserveront des températures très douces avec 22,3°C à Saint-Étienne, 21,8°C à Colmar, 19,9°C à Vichy. Deux tempêtes toucheront ensuite la France entre le 26 et le 28 février. Le mois de février 1990 s'est montré dans l'ensemble exceptionnellement doux. La température moyenne nationale durant ce mois a en effet dépassé la normale 1981/2010 de + 4°C, ce qui n'a jamais été égalé jusqu'à aujourd'hui. Seul le mois de févier 2024 s'est rapproché de cette température moyenne mensuelle exceptionnelle avec une anomalie de + 3,6°C à l'échelle du pays. Anomalies de températures en février entre 1967 et 2016 sur la France – Météo-France À lire également : &gt;&gt;&gt; Les stations des Alpes ensevelies sous plusieurs mètres de neige ! &gt;&gt;&gt; Et si le mois de mars était très sec ? &gt;&gt;&gt; Un air printanier en début de semaine prochaine ! &gt;&gt;&gt; Notre bulletin météo réactualisé quotidiennement &gt;&gt;&gt; Notre compte Twitter très suivi et référence dans tous les médias ! Auteur : Tristan Bergen

</div>

<div class="article-item" data-lang="fr" data-category="weather" data-source="Météo-Paris">

### 20. `FR` [80 cm de neige dans les plaines du Var, fin février !](data/articles/73b03b5d5f5ad71eb6dbe51ca5432cc8.html)
**Source:** Météo-Paris
80 cm de neige et route paralysée dans la région de Saint-Maximin (Var) le 28 février 2001 - Chronique Météo Villes La fin du mois de février 2001 avait été marquée par des chutes de neige exceptionnelles dans le sud-est de la France. Il était tombé jusqu'à 80 cm dans le Var, causant une véritable paralysie sur les routes ! Retour sur cet épisode marquant. Tempête de neige au sud-est Fin février 2001, la France subit sa première véritable offensive hivernale depuis novembre 1999 ! Une dépression circule sur le bassin parisien et advecte de l'air froid sur le pays. Dans le même temps, un minimum dépressionnaire secondaire se creuse dans le golfe de Gênes, ce qui entraîne un retour d'est responsable de fortes précipitations persistantes sur le nord de l'Italie et le sud-est de la France. L'isothermie se met en place et il se met à neiger en plaine sur la Provence, particulièrement durant la nuit du 27 au 28 février 2001. Situation météo en Europe le mercredi 28 février 2001 - réanalyse via meteociel.fr Il neige alors dans tout le sud-est de la France mais les quantités sont surtout remarquables sur la Provence ainsi qu'en Ardèche. Le mercredi 28 février 2001, on mesure jusqu'à 80 centimètres de neige au sol à Saint-Maximin dans le Var, 65 cm à Sault dans le Vaucluse ou encore et 52 cm à Régusse (Var) ! De tels cumuls sont remarquables pour ces régions et la vie quotidienne s'en trouve particulièrement affectée. Manteau de neige remarquable à Saint-Maximin (83) le 28 février 2001 - Chronique Météo Villes Une véritable pagaille sur les routes ! Avec de telles quantités de neige dans une région si peu habituée à ce phénomène, circuler devient presque mission impossible dans certains secteurs ! Les axes secondaires sont rendus impraticables car recouverts par plusieurs dizaines de centimètres d'une neige lourde et collante ! Cette neige engendre également des dégâts et de nombreuses coupures d'électricité. Plus de 100.000 foyers sont privés de courant le 28 février 2001 ! Route ensevelie sous un épais manteau neigeux à Signes dans le Var le 28 février 2001 - Chronique Météo Villes La tempête de neige ayant frappé en pleine semaine, entre le mardi 27 et le mercredi 28 février 2001, beaucoup de travailleurs et de chauffeurs routiers se retrouvent coincés sur la route. Les grands axes ne sont pas épargnés. L'autoroute A8 est notamment paralysée dans le Var et plusieurs milliers de personnes deviennent des naufragés de la route, ce qui conduira rapidement à une polémique sur le manque de préparation face à un tel épisode. Des milliers de naufragés sur les routes de Provence le 28 février 2001 - Chronique Météo Villes À lire également : &gt;&gt;&gt; Les stations des Alpes ensevelies sous plusieurs mètres de neige ! &gt;&gt;&gt; Et si le mois de mars était très sec ? &gt;&gt;&gt; Un air printanier en début de semaine prochaine ! &gt;&gt;&gt; Notre bulletin météo réactualisé quotidiennement &gt;&gt;&gt; Notre compte Twitter très suivi et référence dans tous les médias ! Auteur : Alexandre Slowik

</div>

</section>

---

<section id="international" data-category="international">

## International News / Journaux internationaux

<div class="article-item" data-lang="en" data-category="international" data-source="The Guardian World">

### 1. `EN` [‘Crazy, without limits’: Paris disco haunt of Jagger and Grace Jones to reopen](data/articles/07e721707d514c276586229b68adea12.html)
**Source:** The Guardian World
Legendary nightclub Le Palace, where Serge Gainsbourg and Prince also performed, to rise again
In the late 1970s, Le Palace in Paris’s busy theatre district was one of continental Europe’s most famous nightclubs.
On the opening night on 1 March 1978, Grace Jones stunned VIP guests with her rendition of Edith Piaf’s classic La Vie en Rose. Later, Serge Gainsbourg and Prince came to perform, Bob Marley was photographed there and Mick Jagger, Andy Warhol and Karl Lagerfeld were part of a glittering cast of international celebrities, politicians, designers and models who came to drink and dance. Continue reading...

</div>

<div class="article-item" data-lang="en" data-category="international" data-source="The Guardian World">

### 2. `EN` [Albanese says Australia supports US action against Iran and stands with the Iranian people’s ‘struggle against oppression’](data/articles/c99b2cc5d5867ee75eb1847a41b92a1a.html)
**Source:** The Guardian World
Department of foreign affairs warns travellers of risk of reprisal attacks, further escalation and flight cancellations in Middle East Get our breaking news email, free app or daily news podcast Australia has declared its support for US action against Iran to prevent it from obtaining a nuclear weapon and “to prevent Iran continuing to threaten international peace and security”.
But Australia’s department of foreign affairs (Dfat) has warned of the risk of “reprisal attacks and further escalation” across the Middle East after the attack. Continue reading...

</div>

<div class="article-item" data-lang="en" data-category="international" data-source="The Guardian World">

### 3. `EN` [Russia may interfere in Danish election, exploiting chaos sewn by US, spies warn](data/articles/96b84959ef5672e849f7337e462fd5fa.html)
**Source:** The Guardian World
US threats to seize Greenland have created ‘new international fault lines’ that can be used to spread disinformation, Danish intelligence agencies say
Denmark’s intelligence services have warned that a foreign power may try to sway the general election on 24 March, saying the main threat was from Russia over support for Ukraine but also citing the chaos caused by US efforts to seize Greenland.
The PET police intelligence service and FE military intelligence said in a joint statement the election campaign could be marked by disinformation and cyberattacks “to sow division, influence the public debate or to target candidates, parties or specific political programmes”. Continue reading...

</div>

<div class="article-item" data-lang="en" data-category="international" data-source="New York Times World">

### 4. `EN` [Were Duterte’s Speeches Orders to Kill or Hyperbole?](data/articles/146e6737ec968f70669b465fa76105b2.html)
**Source:** New York Times World
Judges at the International Criminal Court have heard starkly different interpretations this week of the words of former President Rodrigo Duterte of the Philippines.

</div>

</section>

---

<section id="raspberrypi" data-category="raspberrypi">

## Raspberry Pi

<div class="article-item" data-lang="fr" data-category="raspberrypi" data-source="Framboise 314">

### 1. `FR` [Concours Mace Robotics : un Raspberry Pi 5 (et un Pico 2W) à gagner !](data/articles/a1c12d20abe7ca2913c8e979541f3408.html)
**Source:** Framboise 314
Derrière Macé Robotics, Nicolas mêle réparation électronique au composant et conception de cartes pour des besoins professionnels, tout en développant des robots mobiles pour l’éducation et la recherche. On trouve notamment des projets de robots basés sur Raspberry Pi et Raspberry Pi Pico (MRPi1, MR-Pico), accompagnés de contenus et documentations. Dans ce contexte, il organise […]
Cet article Concours Mace Robotics : un Raspberry Pi 5 (et un Pico 2W) à gagner ! a été publié en premier sur Framboise 314, le Raspberry Pi à la sauce française..... - Framboise 314, le Raspberry Pi à la sauce française.... - La référence du Raspberry Pi en France - Par l'auteur du livre "Raspberry Pi 4" paru aux Edts. ENI

</div>

<div class="article-item" data-lang="fr" data-category="raspberrypi" data-source="Framboise 314">

### 2. `FR` [Retrouvez nous sur Tech Inn’Vitré les 14 et 15 février 2026](data/articles/dc95a7dcdecf245fdac9d770e34051a8.html)
**Source:** Framboise 314
Les 14 et 15 février 2026, je vous donne rendez-vous à Vitré pour le salon Tech Inn’Vitré (Usages numériques), organisé par Vitré Communauté et Makeme. Deux jours pour découvrir des usages concrets du numérique, tester, manipuler… et surtout échanger “en vrai”. Tech Inn’Vitré 2026 : rendez-vous les 14 &amp; 15 février au Centre culturel de […]
Cet article Retrouvez nous sur Tech Inn’Vitré les 14 et 15 février 2026 a été publié en premier sur Framboise 314, le Raspberry Pi à la sauce française..... - Framboise 314, le Raspberry Pi à la sauce française.... - La référence du Raspberry Pi en France - Par l'auteur du livre "Raspberry Pi 4" paru aux Edts. ENI

</div>

<div class="article-item" data-lang="fr" data-category="raspberrypi" data-source="Framboise 314">

### 3. `FR` [SunFounder Fusion HAT+ : alimentation 2×18650, moteurs et contrôle “IA-ready” pour Raspberry Pi](data/articles/f668255e568fc1c50d4505be69156314.html)
**Source:** Framboise 314
La SunFounder Fusion HAT+ ressemble à un simple HAT pour Raspberry Pi… jusqu’au moment où vous réalisez que c’est plutôt un couteau suisse pour robot “assisté par IA”. Elle ne “fait” pas l’IA toute seule : les neurones restent sur le Raspberry Pi (un Pi 5 dans mon cas), mais la carte apporte le muscle […]
Cet article SunFounder Fusion HAT+ : alimentation 2×18650, moteurs et contrôle “IA-ready” pour Raspberry Pi a été publié en premier sur Framboise 314, le Raspberry Pi à la sauce française..... - Framboise 314, le Raspberry Pi à la sauce française.... - La référence du Raspberry Pi en France - Par l'auteur du livre "Raspberry Pi 4" paru aux Edts. ENI

</div>

<div class="article-item" data-lang="fr" data-category="raspberrypi" data-source="Framboise 314">

### 4. `FR` [Raspberry Pi AI HAT+ 2 : vision par ordinateur en vidéo avec Hailo-10H (Partie 2)](data/articles/73fcd13fa3152391fbc9c97c66adf252.html)
**Source:** Framboise 314
Dans cette seconde partie, le Raspberry Pi 5 passe à l’action avec la vidéo temps réel accélérée par Hailo-10H. Détection de personnes, cadrage dynamique, pose squelette et reconnaissance des mains : on enchaîne les modèles concrets. L’objectif est d’évaluer les performances réelles, les limites, et les bons compromis en situation réelle. Ici, pas de cloud […]
Cet article Raspberry Pi AI HAT+ 2 : vision par ordinateur en vidéo avec Hailo-10H (Partie 2) a été publié en premier sur Framboise 314, le Raspberry Pi à la sauce française..... - Framboise 314, le Raspberry Pi à la sauce française.... - La référence du Raspberry Pi en France - Par l'auteur du livre "Raspberry Pi 4" paru aux Edts. ENI

</div>

<div class="article-item" data-lang="fr" data-category="raspberrypi" data-source="Framboise 314">

### 5. `FR` [Raspberry Pi AI HAT+ 2 : présentation matérielle et installation sur Raspberry Pi 5](data/articles/9eb15ad07555db5001b2256986cf8da7.html)
**Source:** Framboise 314
Avec la carte Raspberry Pi AI HAT+ 2, la Fondation Raspberry Pi introduit une carte HAT+ intégrant l’accélérateur Hailo-10H et 8 Go de mémoire dédiée, conçue exclusivement pour le Raspberry Pi 5. Connectée en PCIe Gen 3, elle vise l’exécution locale de modèles d’IA sans dépendre du cloud. Dans ce premier article, je vous présente […]
Cet article Raspberry Pi AI HAT+ 2 : présentation matérielle et installation sur Raspberry Pi 5 a été publié en premier sur Framboise 314, le Raspberry Pi à la sauce française..... - Framboise 314, le Raspberry Pi à la sauce française.... - La référence du Raspberry Pi en France - Par l'auteur du livre "Raspberry Pi 4" paru aux Edts. ENI

</div>

<div class="article-item" data-lang="fr" data-category="raspberrypi" data-source="Framboise 314">

### 6. `FR` [Pimmich – Un cadre photo connecté open source basé sur Raspberry Pi](data/articles/8f00545b9937e339d22cecb693b8a668.html)
**Source:** Framboise 314
Aujourd’hui, je vous propose de découvrir Pimmich, un cadre photo connecté open source basé sur Raspberry Pi, pensé pour afficher vos souvenirs sans cloud ni abonnement, en restant 100% local. Avec les récents changements côté Google Photos, beaucoup d’entre vous ont dû revoir leurs habitudes… et Aurélien a eu le bon réflexe : s’appuyer sur […]
Cet article Pimmich – Un cadre photo connecté open source basé sur Raspberry Pi a été publié en premier sur Framboise 314, le Raspberry Pi à la sauce française..... - Framboise 314, le Raspberry Pi à la sauce française.... - La référence du Raspberry Pi en France - Par l'auteur du livre "Raspberry Pi 4" paru aux Edts. ENI

</div>

<div class="article-item" data-lang="fr" data-category="raspberrypi" data-source="Framboise 314">

### 7. `FR` [Raspberry Pi 5 + SSD : installer YunoHost, HTTPS Let’s Encrypt et WordPress (pas à pas)](data/articles/b4cf44ef56b76c94db7965ee52a3321f.html)
**Source:** Framboise 314
Installer un serveur perso chez soi, sur un Raspberry Pi 5 ou un Pi 500+, c’est à la portée de tout maker… à condition de suivre la bonne méthode. Dans cet article, on va poser YunoHost sur un SSD NVMe, faire la post-installation, installer une première appli (WordPress), puis rendre le serveur accessible depuis l’extérieur […]
Cet article Raspberry Pi 5 + SSD : installer YunoHost, HTTPS Let’s Encrypt et WordPress (pas à pas) a été publié en premier sur Framboise 314, le Raspberry Pi à la sauce française..... - Framboise 314, le Raspberry Pi à la sauce française.... - La référence du Raspberry Pi en France - Par l'auteur du livre "Raspberry Pi 4" paru aux Edts. ENI

</div>

<div class="article-item" data-lang="fr" data-category="raspberrypi" data-source="Framboise 314">

### 8. `FR` [Utiliser Google Earth sur Raspberry Pi : la solution Web qui fonctionne](data/articles/4b3465c4a8c95eb8e69edd96a1745155.html)
**Source:** Framboise 314
L’application Google Earth n’est plus réellement maintenue sous Linux, et elle n’existe plus du tout en version native pour les architectures ARM, comme celles des Raspberry Pi. La dernière version officielle pour Linux date de 2020, et son installation sur un Pi (ARM) est aujourd’hui vouée à l’échec. En pratique, pour utiliser Google Earth sous […]
Cet article Utiliser Google Earth sur Raspberry Pi : la solution Web qui fonctionne a été publié en premier sur Framboise 314, le Raspberry Pi à la sauce française..... - Framboise 314, le Raspberry Pi à la sauce française.... - La référence du Raspberry Pi en France - Par l'auteur du livre "Raspberry Pi 4" paru aux Edts. ENI

</div>

<div class="article-item" data-lang="fr" data-category="raspberrypi" data-source="Framboise 314">

### 9. `FR` [Raspberry Pi 5 : piloter des LEDs WS2812B de manière fiable avec le bus SPI](data/articles/631234ac03f25820fe7cc256cec61a29.html)
**Source:** Framboise 314
La question du pilotage des LEDs WS2812B sur Raspberry Pi 5 a récemment été soulevée par Victor lors d’un échange sur un réseau social. Le Raspberry Pi 5 introduit une nouvelle architecture matérielle qui complique le pilotage des LEDs WS2812B avec les bibliothèques historiques. Les solutions basées sur le PWM ou le DMA montrent rapidement […]
Cet article Raspberry Pi 5 : piloter des LEDs WS2812B de manière fiable avec le bus SPI a été publié en premier sur Framboise 314, le Raspberry Pi à la sauce française..... - Framboise 314, le Raspberry Pi à la sauce française.... - La référence du Raspberry Pi en France - Par l'auteur du livre "Raspberry Pi 4" paru aux Edts. ENI

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 10. `EN` [This Raspberry Pi transparent display is made using a glass dome](data/articles/4e17bcb2d7455e5654d07d3a7f771dcf.html)
**Source:** Toms Hardware Raspberry Pi
VEEB Projects has put together a cool transparent Raspberry Pi display using a glass dome and a program that replicates the Pepper's Ghost effect.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 11. `EN` [Dual Raspberry Pi Picos power this portable mini PC](data/articles/a144dcf6a74bb42a941a2de152501c62.html)
**Source:** Toms Hardware Raspberry Pi
Abe's Projects has put together a custom mini PC using two Raspberry Pi Picos featuring a touchscreen, custom apps, and a built in keyboard.

</div>

<div class="article-item" data-lang="fr" data-category="raspberrypi" data-source="RaspberryTips.fr">

### 12. `FR` [Les 13 meilleurs HATs Raspberry Pi à essayer en 2026](data/articles/3f8205a0987493f92c2b78a0b0425d2c.html)
**Source:** RaspberryTips.fr
Soyons honnêtes : j’ai acheté des HATs pour Raspberry Pi que j’ai à peine utilisés. Certains semblaient géniaux sur le papier, mais ne correspondaient pas du tout à mes projets. Avec autant de cartes disponibles, il est facile de se laisser distraire. J’ai donc décidé de me concentrer uniquement sur celles qui font vraiment la...

</div>

<div class="article-item" data-lang="fr" data-category="raspberrypi" data-source="RaspberryTips.fr">

### 13. `FR` [11 projets Raspberry Pi utiles sans matériel supplémentaire](data/articles/bea8af02208039786994774e8f7a5fba.html)
**Source:** RaspberryTips.fr
Vous n’avez pas besoin de capteurs, d’écrans ni de gadgets supplémentaires pour créer quelque chose de génial avec votre Raspberry Pi. En fait, de nombreux projets parmi les plus utiles et gratifiants peuvent être réalisés avec rien d’autre que votre Pi, une carte microSD et une alimentation. Le Raspberry Pi peut être utilisé comme serveur...

</div>

<div class="article-item" data-lang="fr" data-category="raspberrypi" data-source="RaspberryTips.fr">

### 14. `FR` [Top 25 des astuces Raspberry Pi que vous utiliserez vraiment](data/articles/f50d3e49dc5b68490997afdb36da9b89.html)
**Source:** RaspberryTips.fr
J’en ai installé un paquet, des Raspberry Pi… Et à force de bidouiller, j’ai trouvé plein de petits réglages qui changent tout. Si vous voulez un Pi plus rapide, plus stable et plus agréable à utiliser, voici 25 astuces qui font toute la différence. Ce guide rassemble 25 réglages et fonctions souvent oubliées, mais qui...

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Raspberry Pi">

### 15. `EN` [Accessibility improvements for screen readers on raspberrypi.com](data/articles/6c2c783d7e30f9727ab9058ad1ec4ad5.html)
**Source:** Raspberry Pi
We’ve updated our pages, forms, and CAPTCHA infrastructure on raspberrypi.com to improve accessibility for screen reader users.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 16. `EN` [Raspberry Pi 5 price increases drastically as AI shortage bites, 16GB version now $205 — second price increase in three months, over 70% more expensive than original MSRP](data/articles/b5fd37ee6cc5e618bcc3a68609d232ee.html)
**Source:** Toms Hardware Raspberry Pi
Raspberry Pi is increasing its prices again.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 17. `EN` [Alien fan builds a better Raspberry Pi cyberdeck — The MU/TH/UR of all homages to a classic movie series](data/articles/175445459258d23c6d2a58019f156f36.html)
**Source:** Toms Hardware Raspberry Pi
Powered by the Raspberry Pi Zero 2W, Jeff Merrick's slab of 1970 / 1980s aesthetic screams the "charm" of the worn and broken Alien universe that belies the powerful single board computer within.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 18. `EN` [Raspberry Pi AI HAT+ 2 Review: The brains and the brawn](data/articles/14e2a2e036494e59a09f20fb6993815f.html)
**Source:** Toms Hardware Raspberry Pi
Raspberry Pis latest AI accessory brings a more powerful Hailo NPU, capable of LLMs and image inference, but the price tag is a key deciding factor.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 19. `EN` [Raspberry Pi and mini PC home lab prices hit parity as DRAM costs skyrocket — price hikes force hobbyists to weigh up performance versus power consumption](data/articles/b84110806ab41e60c2a891e58b7c95cf.html)
**Source:** Toms Hardware Raspberry Pi
The price of a Raspberry Pi now has parity with Intel N100 mini PCs at just over $200, with flash memory price spikes continuing to push prices up across the board.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 20. `EN` [New York's Mayoral Inauguration bans Raspberry Pi and Flipper Zero — devices join explosives, guns, drones, and beach balls on prohibited items list](data/articles/11fb53de3e86c773dc081f5b3228a10f.html)
**Source:** Toms Hardware Raspberry Pi
The invitation to Mayor-elect Mamdani's inauguration lists Raspberry Pi and Flipper Zero as prohibited items but does not provide a reason.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 21. `EN` [Creator makes Wi-Fi sound like dial-up Internet — uses Raspberry Pi and 2-watt speaker to convert digital data into analog signals](data/articles/2266cd027d99a4d6d150f40561e401c6.html)
**Source:** Toms Hardware Raspberry Pi
This Raspberry Pi project captures Wi-Fi data and then blasts it out as sound to make it feel like you're connecting via a dial-up modem.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 22. `EN` [Raspberry Pi 500+ Review: RGB clicky keys and NVMe storage, but with a $200 price tag](data/articles/14c48b02eef1b61853ec68ae59bcbd7c.html)
**Source:** Toms Hardware Raspberry Pi
Raspberry Pi has released an updated version of the Raspberry Pi 500 and this time the omitted NVMe storage is present, as is an RGB mechanical keyboard.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 23. `EN` [Hardcore fan celebrates Alien: Earth by building a fully-working M314 Motion Tracker replica — DreamHAT+ Radar module and Raspberry Pi is effective up to 15 meters, complete with sounds and a display](data/articles/17a8589edeff70181a09d0fcf9406090.html)
**Source:** Toms Hardware Raspberry Pi
Electronics hobbyist Rob Smith has built a ‘fully working M314 Motion Tracker’.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 24. `EN` [Raspberry Pi releases smaller five-inch Touch Display 2 — lower in price, same resolution as larger model](data/articles/008cd6170c50e4997dd7150da1c47b61.html)
**Source:** Toms Hardware Raspberry Pi
Raspberry Pi releases a smaller model of its updated touch display. This time with $20 off the price but the same display as the larger model.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 25. `EN` [The dream of a Raspberry Pi laptop becomes a reality — ArgonOne Up Review](data/articles/d3fea831bb4ee8e98f53ee785ca9b100.html)
**Source:** Toms Hardware Raspberry Pi
Argon40’s new Raspberry Pi Compute Module 5-powered laptop has it all, but the price makes it a considered purchase.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 26. `EN` [Nephew of the ZX Spectrum inventor has created a handheld Raspberry Pi gaming console the size of a gift card — GamerCard features 4-inch square IPS screen and pre-loaded arcade games](data/articles/205bee83fe4c3af8b0b93e5e209fac6d.html)
**Source:** Toms Hardware Raspberry Pi
GamerCard is a retro gaming handheld so portable than it's literally the size of a gift card, so you can now casually spend $170 at checkout.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 27. `EN` [This Raspberry Pi Zero camera instantly prints photos using thermal paper](data/articles/8b14c15b0114051f9080f8a79122eb1a.html)
**Source:** Toms Hardware Raspberry Pi
Spacerower is using a Raspberry Pi Zero to power this custom 3D-printed camera that instantly prints out photos using thermal paper.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 28. `EN` [Raspberry Pi Pico fightstick randomly mashes buttons for fighting game combos](data/articles/c32e5d9df9bb4fc618e716151ede57e8.html)
**Source:** Toms Hardware Raspberry Pi
Goblinhan Yıkan has created a Raspberry Pi Pico-powered fight stick that has extra buttons for throwing random combos while playing fighting games.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 29. `EN` [Raspberry Pi Pico 2 FFT sound spectrum analyzer visualizes audio via OLED display](data/articles/27c2c257641f60352101fcdf61f1dbad.html)
**Source:** Toms Hardware Raspberry Pi
Dan McCreary shows off how to create your own FFT sound spectrum analyzer using our favorite microcontroller, the Raspberry Pi Pico 2.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 30. `EN` [Raspberry Pi's new PoE+ Injector supports all generations of PoE HATs](data/articles/e01dbabd10e6af1e938a71d06edb9a16.html)
**Source:** Toms Hardware Raspberry Pi
Raspberry Pi's new $25 PoE+ Injector bring power over Ethernet for the Raspberry Pi 3B+ and 4 via existing PoE HATs. The Raspberry Pi has to wait for the PoE+ HAT+ which has been in development since late 2023.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 31. `EN` [Maker builds Raspberry Pi ASCII camera, turning video frames into text-based imagery](data/articles/d31ea51d25638451c7c8cc90a73ecb72.html)
**Source:** Toms Hardware Raspberry Pi
André Esser is using a Raspberry Pi to power this ASCII camera project that he recently created for Pi Jam, celebrating Pi day.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 32. `EN` ['Pi Tin' retro gaming handheld is minty fresh thanks to a Raspberry Pi Zero 2 W](data/articles/d8b9d5d1f10a23532eeb77137f02edd7.html)
**Source:** Toms Hardware Raspberry Pi
Maker Jackw01 and Soaporsalad have put together a cool Raspberry Pi handheld featuring a Raspberry Pi 2 W that's small enough to fit in an Altoids tin.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 33. `EN` [Raspberry Pi 5 powered 'wall arcade' features a big, low-res RGB LED matrix display](data/articles/6233ce06fd24ceeaa2907720f281141e.html)
**Source:** Toms Hardware Raspberry Pi
John Park has created a cool Raspberry Pi-powered wall arcade that features multiple matrix panels as its main display.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 34. `EN` [Maker builds Raspberry Pi Pico smart clock with lots of cool features](data/articles/16d6ab50ca504c7e58b47a277bdded79.html)
**Source:** Toms Hardware Raspberry Pi
NeverCode has created a Raspberry Pi Pico smart clock and shared lots of details on how you can recreate it for yourself at home.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 35. `EN` [Raspberry Pi and ChatGPT bring AI conversations to your retro rotary phone](data/articles/3f0585d23f5908fff57bcb4f458308a2.html)
**Source:** Toms Hardware Raspberry Pi
Pollux Labs is using a Raspberry Pi to power this rotary phone project that integrates Chat GPT and remembers previous conversations.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 36. `EN` [Raspberry Pi Pico 2's RP2350 SoC goes on general sale](data/articles/c88690ea6a2a78d3b52da902e3694fa3.html)
**Source:** Toms Hardware Raspberry Pi
Raspberry Pi has announced the general availability of the RP2350 A and B, the SoC that powers the Raspberry Pi Pico 2 which features both an Arm and RISC-V CPU

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 37. `EN` [Raspberry Pi Pico powers $75 PicoCalc portable programming handheld](data/articles/af8024092d3b96d2000a3526279ae5fb.html)
**Source:** Toms Hardware Raspberry Pi
ClockworkPi has released a cool Raspberry Pi Pico kit that lets you create a calculator suitable for handling your math homework or playing games.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 38. `EN` [Raspberry Pi and AI power open source smart city monitoring project](data/articles/af4615c5ffb6dd50fd8238b7bdd435b9.html)
**Source:** Toms Hardware Raspberry Pi
Glossyio has created a Raspberry Pi-powered traffic monitor that uses AI to monitor traffic and look for statistics around specific travelers like cyclists and pedestrians.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 39. `EN` [Voice controlled Raspberry Pi paper towel dispenser turns a prank into reality](data/articles/e31cb488277d3c2fbce75fe9e5b25581.html)
**Source:** Toms Hardware Raspberry Pi
Maker 3megabytesofhotram is using a Raspberry Pi to power a voice-activated paper towel dispenser that makes it easier than ever to dry your hands.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 40. `EN` [This smart Raspberry Pi LED world map has global appeal](data/articles/6577687201abc8450c044a7159579ee2.html)
**Source:** Toms Hardware Raspberry Pi
Tribal2 is using a Raspberry Pi to drive this cool interactive LED world map that integrates with his smart home setup.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 41. `EN` [Raspberry Pi powers briefcase-sized PiEEG 'Bio Lab' project](data/articles/9aa7414ab28f2b22eadd27c410095648.html)
**Source:** Toms Hardware Raspberry Pi
Blink twice to control the robot arm

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 42. `EN` [Raspberry Pi 5 powers cyberpunk themed brain scanner in a custom 3D printed case](data/articles/26f2825896e36f8b9bb3db95150475f5.html)
**Source:** Toms Hardware Raspberry Pi
The Civitas Universe has put together a cool Raspberry Pi cyberdeck that scans brains and features a cool cyberpunk theme in a custom 3D-printed case.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 43. `EN` [Run Windows 11 on Raspberry Pi 5 with Botspot Virtual Machine](data/articles/52b62afa7f8ec61b1fd84ef2807cfdcd.html)
**Source:** Toms Hardware Raspberry Pi
Install Windows 11 for Arm on the Raspberry Pi 5 using the simplest installation method that we have ever encountered.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 44. `EN` [How to use an RFID reader with a Raspberry Pi Pico](data/articles/6fc4ae025c982c0ce4bf495c7e4d8a29.html)
**Source:** Toms Hardware Raspberry Pi
(Image credit: Tom's Hardware) RFID cards and tags are everywhere! We use them in buildings for access control. Printers and photocopiers can use them to identify staff members. Livestock tagging and pet identification tags all use a form of RFID. The tech to read an RFID device is cheap, for around $5 you can get the reader, and for $4, a Raspberry Pi Pico can read the IDs from the cards / tags.In this how to, we will learn how to read RFID tags and cards using an MFRC522 reader and a Raspberry Pi Pico, the goal will be to create a fictional RFID access control system that will allow users into a building, or alert security to remove them. Before we can do that, we need to identify the ID of our cards / tags. The first section of this how to will do just that, and then we will insert some code to control two LEDs to simulate the locking mechanism.For this how to you will needRaspberry Pi Pico running MicroPythonMFRC522 RFID readerLarge breadboard11 x Male to male jumper wiresGreen LEDRed LED2 x 100 Ohm resistors (Brown - Black - Brown - Gold)Building the Hardware (Image credit: Tom's Hardware)The hardware build is split into two sections. First is the wiring for the MFRC522 RFID reader. The reader uses SPI to communicate with the Raspberry Pi Pico and it requires seven pins to do so. Two are for power (3.3V and GND) and the rest are for SPI.Swipe to scroll hori

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 45. `EN` [This illuminating Raspberry Pi Pico project wants to improve your photos and YouTube videos](data/articles/69c22b6464e204d23c64ee93d694bcde.html)
**Source:** Toms Hardware Raspberry Pi
Arnov Sharma built a Raspberry Pi Pico studio light from scratch that can be controlled using push buttons to adjust the LEDs with precision.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 46. `EN` [This Raspberry Pi Pico protractor has all of the angles covered!](data/articles/536dd3d5ad033e2108ccab4aa745a54e.html)
**Source:** Toms Hardware Raspberry Pi
Yaluke has created a Raspberry Pi Pico-powered protractor that can be used to calculate rotation data for simulating steering wheels when driving.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 47. `EN` [Maker builds Raspberry Pi-powered temperature gun using a Pico 2](data/articles/101eee9f06675504007e7e292be78122.html)
**Source:** Toms Hardware Raspberry Pi
Arnov Sharma has created a temperature gun from scratch using a Raspberry Pi Pico 2 as the main board.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 48. `EN` [This Raspberry Pi Snake console totally bites — in a good way](data/articles/2fbdb8e2570aeb7c7fafee3e71399fb3.html)
**Source:** Toms Hardware Raspberry Pi
Arnov Sharma has put together a cool Raspberry Pi-powered handheld console for playing the classic game Snake on a Matrix.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 49. `EN` [Cozy cats live in a Raspberry Pi-powered luxury automated smart house](data/articles/569f7ca85a1b6b1c30ee6b5294b70f93.html)
**Source:** Toms Hardware Raspberry Pi
Visible_Turnover3952 has created a Raspberry Pi-powered cat house with luxurious smart home features and automated systems to keep them cozy.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 50. `EN` [Pineboards Modulo Series Review: All the extra features for your Raspberry Pi Compute Module 4 and 5](data/articles/c697f8b1d48ba41100ee1456de89e771.html)
**Source:** Toms Hardware Raspberry Pi
Three new carrier boards for your Compute Module 5 and the older Compute Module 4 which bring Raspberry Pi 5 accessories to the CM5, and PoE before Raspberry Pi releases its version.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 51. `EN` [Raspberry Pi 5 powers retro-futurism 1980s cyberdeck with custom milled keypad and wood finish](data/articles/b0b247ebb37812f0f474d31a9dbc5a72.html)
**Source:** Toms Hardware Raspberry Pi
Nicholas LaBonte is using a Raspberry Pi to power this custom cyberdeck handheld complete with custom-milled keys and wood finishing.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 52. `EN` [Raspberry Pi powers custom cyberdeck inspired music player](data/articles/0564022e25d54201f929aac19cc4fa90.html)
**Source:** Toms Hardware Raspberry Pi
Tonight-we-ride has put together a cool Raspberry Pi music player with a touchscreen and customizable interface with Winamp.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 53. `EN` [Argon40 teases the Raspberry Pi Compute Module 5 powered Argon One Up laptop (Updated)](data/articles/4cb45daaf1e609dcafe560a01674b90f.html)
**Source:** Toms Hardware Raspberry Pi
Coming soon is a Kickstarter that sees the Compute Module 5 inside of a custom designed laptop.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 54. `EN` [This Raspberry Pi Creeper robot is bringing our Minecraft nightmares to real life](data/articles/b8c615a54e8d32602f6252bf058cd0cc.html)
**Source:** Toms Hardware Raspberry Pi
Efren Lopez has created a Raspberry Pi-powered Creeper robot from the Minecraft universe complete with an AI chip and a motorized body.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 55. `EN` [Raspberry Pi Pico brings a 'WOPR' of a feature to a server rack](data/articles/ee35aeca216ded262ce722ea078f83d2.html)
**Source:** Toms Hardware Raspberry Pi
Aforsberg has created a cool LED matrix display for their 1U server rack that's decked out like the WOPR computer from the 1983 movie War Games.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 56. `EN` [The Raspberry Pi Pico's RP2040 has been certified for 200 MHz clock speeds, up from 133 MHz](data/articles/fbc7ee3a77969f66a2809da67482cba7.html)
**Source:** Toms Hardware Raspberry Pi
The Raspberry Pi 2040 now officially supports 200 MHz operation, thanks to the latest Pico-SDK release.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Toms Hardware Raspberry Pi">

### 57. `EN` [This Raspberry Pi map of Manhattan shows real-time subway train status](data/articles/a2d00f6a31568767a8a6e19c612d52c9.html)
**Source:** Toms Hardware Raspberry Pi
Bicapitate has created a custom Raspberry Pi-powered 3D-printed map of Manhattan that displays the location of subway trains in real time using LEDs and optical fiber.

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Raspberry Pi Spy">

### 58. `EN` [Pi Pico Pinout Display on the Command Line](data/articles/dc58a34a6749055867e999c3a89f1f11.html)
**Source:** Raspberry Pi Spy
Displaying the pinout of a Raspberry Pi Pico is possible using my “picopins” script. The script displays the pinout in a colour coded format showing the location of power, ground and GPIO pins. I find it useful if I’m coding Pico projects on my laptop or Pi 400 and need to check the location of [...]

</div>

<div class="article-item" data-lang="en" data-category="raspberrypi" data-source="Raspberry Pi Spy">

### 59. `EN` [Disable Auto-login in Raspberry Pi OS](data/articles/8444bae51d5e8fde736159e84ef2df5f.html)
**Source:** Raspberry Pi Spy
This guide explains how to disable auto-login on Raspberry Pi OS. By default when you install the Raspberry Pi OS with the desktop it will auto-login when you power-up the Pi. This is really convenient for lots of projects as it gets you straight to the desktop. If you are using your Pi as a [...]

</div>

</section>

---

<section id="iot" data-category="iot">

## IoT - Internet of Things / IdO - Internet des Objets

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 1. `FR` [Mutation HA &gt; Gladys](data/articles/c27bd6fbbbea5e23c6bce966840038e3.html)
**Source:** Gladys Assistant (Forum)
Bonjour tout le monde
Fabien 45 ans attiré par la gestion quotidienne de mon entourage de par la domotique, une connaissance ma installer home assistant il y a environ 2 ans car étant novice mes capacités informatiques ne me le permettait pas.
Aujourd’hui je découvre Gladys qui me paraît plus accessible pour mon niveau entre-temps j’ai aménagé dans une maison qui est beaucoup plus adaptée à la domotique que l’ancienne, un réseau Rj 45 à été totalement créé preseque dans toute les pièce et connecté à la fibre.
Je souhaite créer des automatisations et ajouter une surveillance vidéo. Actuellement sur Home assistant j’ai des capteurs de température , sonde , prise connectée, relais connecter le tout en ZigBee et Alexa en assistant vocal.
Novice je risque de vous casser les pieds 2 messages - 2 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 2. `EN` [Domoticz access blocked](data/articles/885644159f654cfa8d1359cd861682cf.html)
**Source:** Domoticz (Forum News)
Hi, I am using Domoticz on a Raspberry Pi. After an update, a login screen appears upon startup. It asks for a username and password. Then a message appears stating they are incorrect, and after three attempts, a screen appears with the message: "congratulations …….the end of the internet". The strange thing is that Domoticz is otherwise working fine; the lights are on. But Domoticz is inaccessible.
Software and hardware used:
Domoticz running on a Raspberry Pi.
What I have already found or tried:
I connect to the Raspberry Pi via SSH. I tried to repair Domoticz or completely reinstall it. Nothing helped.
Does anyone have a solution to my problem?
Statistics: Posted by miguell — Tuesday 24 February 2026 9:46 — Replies 3 — Views 370

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant (Blog officiel)">

### 3. `EN` [Heiman joins Works with Home Assistant](data/articles/33a1a951a4787deac1ef266f9a8bb610.html)
**Source:** Home Assistant (Blog officiel)
After an amazing 2025 that saw 12 new Works with Home Assistant partners join the program, it’s now time to say “Hei” to the first partner joining us this year: Heiman.
Founded back in 2005, Heiman specialize in smart home security devices, and are bringing an impressive selection of safety-focused sensors and alarms to the program: including the first Matter carbon monoxide alarms to be certified, along with smoke alarms designed for international markets.
Keep it local, keep it safe
If you’re new to the Works with Home Assistant program, it’s designed to help you identify devices that work brilliantly with Home Assistant, and support the Open Home Foundation’s principles of privacy, choice, and sustainability.
These values all pivot around local control, something that’s essential when it comes to home safety. Your smoke and CO alarms need to work when you need them most, regardless of your internet connection or cloud service status (though if you want to check in on your devices while away from home, Home Assistant Cloud provides secure remote access, and your subscription helps fund this very program, among other things!).
Our in-house team has thoroughly tested Heiman’s devices to ensure they meet this key requirement, and we’re happy to report they did! But Heiman has gone further still by using the Matter open connectivity standard…
Why this matters
Matter was launched to be a unifying connectivity type with interoperability at its heart. Instead of being locked into one company’s ecosystem, Matter devices work across Home Assistant, as well as other platforms like Google Home.
Heiman’s Matter devices work over Thread, which adds another layer of benefits. Thread is a low-power wireless mesh network protocol that creates resilient connectivity throughout your home, perfect for battery-powered sensors that need reliable communication while staying energy efficient. This is ideal for battery-powered sensors like Heiman’s that need to be energy efficient while maintaining reliable communication.
So why does all this matter for safety devices specifically? Well firstly, it’s important to know these smart devices will still work as “dumb” ones, so there’s always a failsafe if you decide to rebuild your Thread network, or start making tweaks. If your sensors integrate locally, it means you can automate basic checks, such as reminders to test an alarm once a month, or notifications of hardware faults. If you want to go even further, your smoke alarm could trigger emergency lighting, your CO detector could shut off your gas fireplace, or your leak sensor could close water valves, all without sending your private data through a third-party server. And this is just the sort of complete, interoperable ecosystem Heiman aims to provide.
"Our core goal has always been to enable every family to enjoy a safe and intelligent living experience. Home Assistant, as a world-leading open source smart home platform, has an open and inclusive ecological philosophy and strong compatibility with multi-brand and multi-protocol devices, which are highly consistent with the direction of our product research and development. We deeply understand that only by integrating into an open ecosystem can we break down device barriers and provide users with a truly seamless whole-house smart solution."
- Leo Xie, Software Engineer Manager at Heiman Working with the community
Heiman is showing they’re true to these ambitions. Beyond getting certified, they’re planning to take an active role in the Home Assistant community by participating in discussions, listening to real-world feedback, and continuously optimizing their products based on what users actually need. They’re also sharing their technical expertise in smart home security, collaborating with developers to explore innovative safety scenarios that benefit everyone.
Devices
Heiman’s commitment to openness and community is also reflected in the devices we’ve certified, which also meet strict safety regulations across the US, Europe, Asia and beyond. Before Heiman joined, we had one Zigbee smoke alarm in the program. Now there are Matter options for multiple regions, plus the first certified carbon monoxide alarms: more choice, more coverage.
What devices have been certified?
Heiman Smart Smoke Alarm (USA)
Heiman Smart Smoke Alarm (EU and China)
Heiman Smart Carbon Monoxide Alarm (USA)
Heiman Smart Carbon Monoxide Alarm (EU and China)
Heiman Motion Sensor
Heiman Water Leak Sensor
Heiman Humidity and Temperature Sensor
Also worth noting: Heiman’s global presence allows them to deliver quality devices at prices that won’t break the bank. Safety sensors and alarms shouldn’t be a luxury, and Heiman’s approach means they don’t have to be.
No more guessing games!
Accessible pricing is just one way Heiman expands choice for users. We’ve found they also deliver on the other core principles behind the Works with Home Assistant program: local control protects privacy, and open standards ensure sustainability. And that’s the whole point of our certification process: to make it easier for you to spot manufacturers who genuinely commit to these values, taking the guesswork out of building your open home. For full details of all Works with Home Assistant partners, check out our certified device list.
Welcome to the program, Heiman, we’re excited to see what the community builds with these devices!
Frequently asked questions
If I have a device that is not listed under Works with Home Assistant, does this mean it’s not supported?
No! It just means that it hasn’t gone through a testing schedule with our team, or doesn’t fit the requirements of the program. It might function perfectly well but be added to the testing schedule in the future.
OK, so what’s the point of the Works with program?
It highlights the devices we know work well with Home Assistant and the brands that make a long-term commitment to keeping support for these devices going. The certification agreement specifies that brands must continue to support the devices in the program.
How were these devices tested?
All devices in this list were tested using a standard Home Assistant Green Hub with the Home Assistant Connect ZBT-2 as the Thread Border Router and with our certified Matter integration.
Will you be adding more Heiman devices to the program?
Why not! We’re thrilled to foster a close relationship with the team at Heiman to work together on any upcoming releases or add in further products that are not yet listed here. We are also chatting with them about some exciting future plans.

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 4. `EN` [Airplane tracker plugin](data/articles/2b2d6fa88221cc09c859303c66a9bde1.html)
**Source:** Domoticz (Forum News)
I designed a plugin for Airplane Tracking based on the work of @janpep 'Script for Airplanes.live API'.
Installation is quite simple.
1) mkdir ~/domoticz/plugins/AirPlaneTracker
2) Copy the code to ~/domoticz/plugins/AirPlaneTracker/plugin.py
3) do a 'sudo systemctl restart domoticz'
4) Goto hardware and select the plugin 'Airplane Tracker', give it a name (adapt settings) and click on 'Add'
5) Goto the 'Utility'tab, find the Airplanes - Counter, click edit and change the counter Type from Energy to Custom
5) Off you go
The names of the sensors are made up of 2 parts.
- The name you give to the plugin @install
- the name of the sensor
Example: I gave the plugin the name Vliegtuigen so the name of the Tracker sensor is Vliegtuigen - Tracker
The sensors are:
Tracker - displays the planes flying over your head
Counter - counts the planes flying over your head
Types - Counts the types of planes flying over your head When you click on the CallSign of an plane like KLM1844 or RYR9HN or BAW979 in de Tracker sensor, a new Airplanes.live tab opens in your browser and shows the plane on the map. This is a one day score within 9 miles from my house. Code: # Airplane Tracker Plugin for Domoticz# Author: Hein""" Airplane Tracker Monitor live air traffic around your location using the airplanes.live API. Features Tracker: Shows the last 3 aircraft detected with details (altitude, speed, direction) Counter: Cumulative count of all aircraft seen (resets daily by Domoticz) Types: Daily summary of aircraft types detected Configuration Radius: Detection radius in miles around your Domoticz location API Interval: Time between API calls in seconds (default: 60). Log Unknown Types: Logs unclassified types to ~/unknown_aircraft_types.log. Log Level: Controls logging verbosity. Important - Counter Device: After creation, go to Devices, click Edit on the Counter, and change Type to Custom. """import Domoticzimport urllib.request, json, socket, time, math, osfrom datetime import datetimeclass BasePlugin: def __init__(self): self.last_seen_ts = {} self.tracker_buffer = {} self.type_counts = {} self.logged_unknowns = set() self.today = datetime.now().strftime('%Y-%m-%d') self.total_count = 0 self.home_dir = os.path.expanduser("~") self.last_api_call = 0 def should_log(self, level): log_level = Parameters.get("Mode6", "Error") if log_level == "Info": return True elif log_level == "Status": return level in ["Status", "Error"] else: return level == "Error" def classify_aircraft(self, t, desc): t = t.upper() if t else "" desc = desc.upper() if desc else "" # 1. Helicopters (Priority) if "HELICOPTER" in desc or "ROTORCRAFT" in desc or t in ["EC35", "EC45", "H135", "H145", "AS32", "EH10", "NH90", "CH47"]: return ("Helicopters", "helicopter") # 2. Special / Military / Large Transport if "RIVET" in desc or t == "R135": return ("Boeing RC-135 (Radar)", "known") if "AWACS" in desc or t == "E3TF": return ("Boeing E-3 AWACS", "known") if "GLOBEMASTER" in desc or t == "C17": return ("Boeing C-17 Globemaster", "known") if "ATLAS" in desc or t == "A400": return ("Airbus A400M Atlas", "known") if "HERCULES" in desc or t == "C130": return ("Lockheed C-130 Hercules", "known") if "STRATOTANKER" in desc or t == "K35R": return ("Boeing KC-135 Tanker", "known") # Specifiek voor A330 tankers (Voyager/MRTT) op basis van omschrijving if "VOYAGER" in desc or "MRTT" in desc: return ("Airbus A330 Tanker/Transport", "known") if "BELUGA" in desc or t in {"A3ST", "A337"}: return ("Airbus Beluga", "known") # 3. Airbus Families if t.startswith("A38") or "380" in desc: return ("Airbus A380", "known") if t.startswith("A35") or "350" in desc: return ("Airbus A350", "known") if t.startswith("A34") or "340" in desc: return ("Airbus A340", "known") # Algemene A330 check (vangt nu ook A332 op die niet Voyager is) if t.startswith("A33") or "330" in desc: return ("Airbus A330", "known") if (t.startswith("A31") or t.startswith("A32") or t.startswith("A2") or "A32" in desc or "A-32" in desc): return ("Airbus A320-family", "known") if t.startswith("BCS") or "A220" in desc: return ("Airbus A220", "known") # 4. Boeing Families if t.startswith("B73") or t.startswith("B3") or "737" in desc: return ("Boeing 737", "known") if t.startswith("B74") or "747" in desc: return ("Boeing 747", "known") if t.startswith("B77") or "777" in desc: return ("Boeing 777", "known") if t.startswith("B78") or "787" in desc: return ("Boeing 787", "known") if t.startswith("B75") or "757" in desc: return ("Boeing 757", "known") if t.startswith("B76") or "767" in desc: return ("Boeing 767", "known") # 5. Commercial Regional if (t.startswith("E17") or t.startswith("E19") or t.startswith("E2") or "E-JET" in desc or "E170" in desc or "E190" in desc): return ("Embraer E-Jet Family", "known") if t.startswith("DH8") or "DASH 8" in desc or "Q400" in desc: return ("Dash 8 / Q400", "known") if t.startswith("AT") or "ATR" in desc: return ("ATR 42/72", "known") if t.startswith("RJ") or t.startswith("B46") or "AVRO" in desc or "BAE 146" in desc: return ("Avro RJ / BAe 146", "known") if "FOKKER" in desc or t in ["F70", "F100"]: return ("Fokker 70/100", "known") # 6. Business &amp; Recreational if (t in ["E135", "E140", "E145", "ER3", "ER4", "ERJ"] or "ERJ-1" in desc or "ERJ 1" in desc): return ("Business &amp; Recreational", "small") small_codes = { "C25A", "C25B", "C25C", "C525", "C550", "C560", "C680", "C510", "C500", "C501", "C551", "GLF4", "GLF5", "GLF6", "G280", "GALX", "FA50", "FA7X", "FA20", "FA2K", "FA10", "LJ35", "LJ45", "LJ60", "BE20", "BE30", "BE40", "BE9L", "BE10", "PC12", "PC6", "PC24", "CL30", "CL35", "CL60", "GL5T", "H25B", "H25C", "HA4T", "SW4", "P28A", "P28R", "P28T", "PA46", "C172", "C182", "C208", "SR20", "SR22" } small_keywords = ["CITATION", "GULFSTREAM", "FALCON", "LEARJET", "HAWKER", "CHALLENGER", "PHENOM", "LEGACY", "BEECHCRAFT", "PILATUS", "CESSNA", "PIPER", "CIRRUS", "METRO", "KINGAIR"] if t in small_codes or any(k in desc for k in small_keywords): return ("Business &amp; Recreational", "small") # 7. Other Commercial / Classics if "MD11" in desc or t == "MD11": return ("McDonnell Douglas MD-11", "known") if "MD8" in desc or t.startswith("MD8"): return ("McDonnell Douglas MD-80", "known") return ("Other", "other") def log_unknown_type(self, hex_id, t, desc, reg): if Parameters.get("Mode3", "False") != "True": return log_key = f"{t}|{desc}" if log_key in self.logged_unknowns: return self.logged_unknowns.add(log_key) log_file = os.path.join(self.home_dir, "unknown_aircraft_types.log") timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S') log_entry = f"{timestamp} | hex={hex_id} | t={t} | desc={desc} | r={reg}\n" try: with open(log_file, 'a') as f: f.write(log_entry) except: pass def get_cardinal_dir(self, angle): directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"] return directions[int((angle + 11.25) / 22.5) % 16] def calculate_distance(self, lat1, lon1, lat2, lon2): R = 6371 dLat, dLon = math.radians(lat2 - lat1), math.radians(lon2 - lon1) a = math.sin(dLat/2)**2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dLon/2)**2 return R * 2 * math.atan2(math.sqrt(a), math.sqrt(1-a)) def onStart(self): if 1 not in Devices: Domoticz.Device(Name="Tracker", Unit=1, TypeName="Text", Used=1).Create() if 2 not in Devices: Domoticz.Device(Name="Counter", Unit=2, Type=113, Subtype=0, Used=1).Create() else: try: if Devices[2].sValue: self.total_count = int(Devices[2].sValue.split(';')[0]) except: self.total_count = 0 if 3 not in Devices: Domoticz.Device(Name="Types", Unit=3, TypeName="Text", Used=1).Create() Domoticz.Log("Airplane Tracker started.") def onHeartbeat(self): try: if "Location" not in Settings: return loc = Settings["Location"].split(";") my_lat, my_lon = float(loc[0]), float(loc[1]) now_ts, now_dt = time.time(), datetime.now() if now_dt.strftime('%Y-%m-%d') != self.today: self.today = now_dt.strftime('%Y-%m-%d') self.last_seen_ts.clear();

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant Community Forum (Latest)">

### 5. `EN` [PadSpan HA — Room-level BLE presence tracking with floor plans, 3D maps, and calibration — exiting alpha March 2026](data/articles/121472360a9e7cbd159ba00daf407da5.html)
**Source:** Home Assistant Community Forum (Latest)
Hey everyone,
I’ve been building PadSpan HA — a custom integration that turns your existing Bluetooth scanners into a full room-level presence tracking system — and it’s coming out of alpha in March 2026.
This started as a personal project because I wanted more than just “home” or “away.” I wanted to know which room my phone was in, see it on a floor plan, and get alerts when my kids’ trackers moved between rooms. Nothing out there did all of that, so I built it.
What’s in the alpha right now
Room-level BLE tracking with 5-second updates (not just home/away)
Upload floor plans and draw room boundary polygons right in the UI
3D multi-floor isometric maps with live object positions
Walk-around calibration system — k-NN fingerprint matching + path-loss model fitting
Follow mode — pick any tag, watch it move room to room with an animated map
Email alerts when a tracked device changes rooms
21 dedicated views (Basic mode for simplicity, Advanced for power users)
Full HA entities — area sensors, distance sensors, device trackers, binary sensors
Works with ESPresense, Bermuda proxies, or any HA Bluetooth proxy
Sample mode — explore every feature with synthetic data before plugging in hardware
11 languages (EN, ES, FR, DE, IT, PT, NL, ZH, JA, KO, RU)
Standalone phone-friendly calibration panel for walk-around data collection
Per-scanner signal quality metrics, WiFi SSID/IP display
Built-in Training Hub with guided walkthroughs
What’s coming for the beta
More details soon — but think tighter HA dashboard integration, automation blueprints, and some things I’m not ready to talk about yet.
Try the alpha now
HACS → Custom repositories → add gbroeckling/padspanHA (Integration)
Install PadSpan HA → Restart HA
Settings → Devices &amp; Services → Add Integration → PadSpan HA
Feedback and bug reports welcome — drop them here or open an issue on GitHub.
GitHub: GitHub - gbroeckling/padspanHA: PadSpan HA — BLE room-level presence tracking for Home Assistant
More coming in March.
1 post - 1 participant
Read full topic

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant Community Forum (Latest)">

### 6. `EN` [The 5‑year home automation post that made me rethink everything](data/articles/49418bc59255212d1729b832bc5b68e8.html)
**Source:** Home Assistant Community Forum (Latest)
Back in January I shared a 5‑year technical review of our home automation setup here. At the time, my goal was pretty simple: review the infrastructure that had to change, capture what held up, what didn’t, and what surprised me after living with a fairly complex system day to day.
What I didn’t expect was what writing that post would trigger.
Technically, most of the system worked.
But while writing the review, something uncomfortable became clear:
thinking about the house more than I wanted to.
Not because it was broken — but because it demanded attention:
checking whether things were behaving as expected
wondering what would happen during an internet outage
choreographing guest access
managing notifications instead of trusting them
treating privacy as something to actively manage
That post ended up being the moment I stopped asking
“How do I automate this?”
What would it mean for a home to actually behave well?
Not smarter.
That shift in framing changed very concrete things about the system:
automation stopped being about clever triggers and started being about policy
notifications were redesigned so silence actually meant something
guest access became time‑bound and self‑cleaning
outages stopped being stressful because behavior was predictable
privacy became an outcome of architecture, not a setting
I ended up writing a lot of this down, mostly to make sure I wasn’t just rationalizing decisions after the fact.
This was the original post that kicked off that rethinking: Technical Pivot 5‑Years Later
I’m not posting this as a how‑to, recommendation, or stack endorsement — just sharing the reflection in case it resonates with anyone else who’s been living with a system long enough to feel both proud of it and a little tired of it at the same time.
Happy to discuss if it’s useful.
2 posts - 2 participants
Read full topic

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant Community Forum (Latest)">

### 7. `EN` [Your support please - Improving HA's recorder, Database and associated user interface](data/articles/adf7845386269623b1c4dc77e3255842.html)
**Source:** Home Assistant Community Forum (Latest)
tl,dr: Here to seek your support for a feature request on improving how HA’s databases work, what goes into them, and how they are maintained.
After recently having a major blowout in my SQLite database (reaching 1.8 Gb), it prompted me to sit down and review a number of things related to recorder: and just what data was stored in my HA DB.
Doing so sent me further down a rabbit hole, thinking about how HA is setup from the start, what happens when new integrations and devices are added, and the high learning curve new users to the platform have when it comes to understanding what goes into the database and achieving an optimal configuration that doesn’t tax their hardware or storage.
Long story short: HA has some really great opportunities in this space to help users optimise the database for performance, size, and reduced load/storage device wear.
To this end, I have opened a significant and detailed Feature request, and I’d appreciate your support and/or discussion on it:
GitHub Database &amp; Recorder integration: Overhaul UI to permit reduced DB size...
Describe your core improvement Prompt at instance setup to configure settings for proper DB maintenance from the outset: As part of the onboarding/instance first time setup process, or at a later s... The feature request above covers all the usual topics, which I hope will assist you providing unqualified support, and discussion that might help drive better outcomes and faster update by the HA core team.
I also have a separate blog post that goes deeper into the detail on the topic, especially when it comes to the theory and practice of optimising an existing instance for others with the same dilemma I had.
Thanks in advance for your votes and discussions, it will be appreciated.
2 posts - 2 participants
Read full topic

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Gladys Assistant (Forum)">

### 8. `EN` [Amélioration re-calcul suivi de l'énergie](data/articles/eca54174bd2e95c1bee7f9957043d788.html)
**Source:** Gladys Assistant (Forum)
@pierre-gilles ,
Je rebondis sur ce sujet du coup, j’ai terminé la vérification pour la PR sur l’amélioration du recalcul du suivi de l’énergie. Je pense que tu peux review : github.com/GladysAssistant/Gladys Energy monitoring - New Add date range recalculation for energy monitoring with improved jobs and tests master ← Terdious:energy-recalc-date-and-multi-features 05:16PM - 06 Jan 26 UTC +3203 -428 ### Pull Request check-list To ensure your Pull Request can be accepted as fa…st as possible, make sure to review and check all of these items: - [x] If your changes affects code, did your write the tests?
- [x] Are tests passing? (`npm test` on both front/server)
- [x] Is the linter passing? (`npm run eslint` on both front/server)
- [x] Did you run prettier? (`npm run prettier` on both front/server)
- [x] If you are adding a new features/services, did you run integration comparator? (`npm run compare-translations` on front)
- [x] Did you test this pull request in real life? With real devices? If this development is a big feature or a new service, we recommend that you provide a Docker image to the community ([forum](https://community.gladysassistant.com/)) for testing before merging.
- [ ] If your changes modify the API (REST or Node.js), did you modify the API documentation? (Documentation is based on in code)
- [x] If you are adding a new features/services which needs explanation, did you modify the user documentation? See [the GitHub repo](https://github.com/GladysAssistant/v4-website) and the [website](https://gladysassistant.com).
- [ ] Did you add fake requests data for the demo mode (`front/src/config/demo.js`) so that the demo website is working without a backend? (if needed) See [https://demo.gladysassistant.com](https://demo.gladysassistant.com). NOTE: these things are not required to open a PR and can be done afterwards / while the PR is open. ### Description of change * **Translate** * +156 lines / -21 lines * **Front** * +923 lines / -137 lines * **Server** * +699 lines / -126 lines * **Tests** * +1232 lines / -129 lines - Add start/end date support for energy consumption and cost recalculation (full or selected features).
- Purge recalculated consumption states within the selected period before recomputing.
- Return job_id on recalculation endpoints and handle errors on the UI side.
- Display recalculation period in background jobs.

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 9. `FR` [J'ai laissé l'IA OpenClaw contrôler ma Maison](data/articles/c914d79f26cb05f0f28bb1670d3e59eb.html)
**Source:** Gladys Assistant (Forum)
Salut à tous !
Vous avez sûrement entendu parler d’OpenClaw, le framework IA qui a explosé sur GitHub il y a quelques semaines, et qui vient d’être racheté par OpenAI.
J’ai fait le test de connecter OpenClaw à Gladys pour tester les possibilités, et c’est vraiment bluffant Je vous en dis plus en vidéo :
J'ai laissé l'IA OpenClaw contrôler ma Maison (C'est fou)
Note : Je vous déconseille d’installer OpenClaw sur votre serveur Gladys, c’est un logiciel encore en début de vie, qui touche un peu à tout et qui a été pas mal décrié pour ses failles de sécurité. Pour ce test, j’ai déployé OpenClaw sur une VM dans le Cloud pour rester dans un environnement isolé 5 messages - 3 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Adafruit Blog">

### 10. `EN` [Motorized USB Solder Dispenser #3DThursday #3DPrinting](data/articles/ff4bad09e16cf979926afd050989b853.html)
**Source:** Adafruit Blog
Hodzinets shares: USB Solder dispenser is easy to print, no soldering required (ironically). download the files on: https://makerworld.com/en/models/2337723-motorized-usb-solder-dispenser Every Thursday is #3dthursday here at Adafruit! The DIY 3D printing community has passion and dedication for making solid objects from digital models. Recently, we have noticed electronics projects integrated with 3D printed enclosures, brackets, and sculptures, […]

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 11. `FR` [Install gladys sur box autre que FreeBox Delta](data/articles/2d34e4de7c82703970e4d02c4477c68d.html)
**Source:** Gladys Assistant (Forum)
Bonjour tout le monde, je découvre Gladys Assistant et c’est très intéressant. Est ce possible d’installer Gladys sur une box internet différente de FreeBox Delta ? Je pense qu’il faut au moins la fx VMs. Merci de vos et à bientôt !
2 messages - 2 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="openHAB Community (Latest)">

### 12. `EN` [Sonos Items work in eclipse, not in production. UPNP problem?](data/articles/4a9e70357f27a0156b1442dadce7d17f.html)
**Source:** openHAB Community (Latest)
I’ve been using the Sonos binding for years. I have about 12 amps and I play whole house music from a filesystem of MP3s on my local NAS. My openhab is a 5.1.3 installation on a Debian-based server at my house. I use 3 scripts:
A morning script that sets the volume of 10 different amps, joins them to a single “control” amp, and starts playback on that amp.
A later-in-the-morning script that increases the volume plus-one-at-a-time on a handful of those amps (the ones closer to my bedroom)
An evening script that decreases the volume minus-one-at-a-time on all amps, until they reach 0, then pauses the music, then resets the volumes to sane values for the next day.
I have been annoyed for some time, that the Coordinator value isn’t working right. It doesn’t properly reflect the “control” amp. Most of the amps either show NULL, or their own UDN as the value of the Coordinator. I was motivated recently to look at the code, because when I turn on the family room TV, I want the kitchen amp to change sources to family room TV (rather than the “control” amp playing the whole-house music). Having finished messing around with the Blink Binding, I decided to look at the Sonos Binding code.
I updated the demo distribution “app” xml to include the Sonos binding (alongside the Blink binding I’ve been developing). I struggled with the stupid dependency refresh buttons for an hour or two (translation: I don’t understand what it’s doing), and I got it working. I use a Mac laptop as my desktop / development environment. openhab calls itself a 5.2.0-SNAPSHOT version.
It found the Sonos amps, and I added the Things from the inbox, then created a number of Items.
To my surprise, it all works perfectly on the laptop instance of openhab running within eclipse.
I tried to copy the .jar file from the Mac to the server, just like I had done successfully with the Blink binding jar file, but it won’t run, it complains about a upnp package missing:
2026-02-25 00:55:12.669 [WARN ] [org.apache.felix.fileinstall ] - Error while starting bundle: file:/usr/share/openhab/addons/org.openhab.binding.sonos-5.2.0-SNAPSHOT.jar
org.osgi.framework.BundleException: Could not resolve module: org.openhab.binding.sonos [311] Unresolved requirement: Import-Package: org.openhab.core.config.discovery.upnp at org.eclipse.osgi.container.Module.start(Module.java:463) ~[org.eclipse.osgi-3.18.0.jar:?] at org.eclipse.osgi.internal.framework.EquinoxBundle.start(EquinoxBundle.java:445) ~[org.eclipse.osgi-3.18.0.jar:?] at org.apache.felix.fileinstall.internal.DirectoryWatcher.startBundle(DirectoryWatcher.java:1260) [bundleFile:3.7.4] Stymied by not being able to run the 5.2.0 SNAPSHOT version of Sonos on my server, I tried a different approach…
Guessing perhaps I had some stale Things in my server-based openhab 5.1.3 instance, I deleted all 66 Sonos Items, all Sonos Things, and uninstalled the Sonos Add-On. I reinstalled the add-on from the marketplace, and proceeded to recreate dozens of Things and Items.
It still doesn’t work. The volume Items are all NULL, and the Coordinator values are generally set to each amp’s own UDN. The controls work but the state updates back to the Items don’t:
If I use the MediaControl for the “control” amp, I can advance to the next song (good)
If I use debian server openhab to modify the volume of one amp, then the Item will show the new volume (good) (and also, the volume does change in the room)
If I use the Sonos app to modify the volume of one amp, then the debian server openhab Item does not change (bad), but the Mac/eclipse openhab Item does change (good)
So it’s probably not the Sonos Binding. But what is it? Server openhab Sonos Binding is not receiving incoming updates from the Sonos hardware, but Mac openhab Sonos Binding is.
Not even sure where to start.
The server is on wired ethernet, in the same IP network range as the MacBook’s wifi. They are both on a 192.168.192./18 network. Both the MacBook and the server are in 192.168.213. range and the Sonos amps are in 192.168.215.* range. Again, based on netmask these are the same network, it is a /18, NOT a /24.
During openhab startup on the server (but not on the MacBook), there is an ominous message:
2026-02-25 00:46:29.974 [INFO ] [.network.internal.utils.NetworkUtils] - CIDR prefix is smaller than /24 on interface with address 192.168.213.20/18, truncating to /24, some addresses might be lost But I don’t know who’s responsible for that message, so I don’t know the scope of what it affects. Might be relevant, but then again, the MacBook eclipse openhab works just fine on this same network range (and without the INFO log message).
Any ideas? Thanks in advance!
4 posts - 2 participants
Read full topic

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 13. `EN` [Incorrect lastUpdate.minutesAgo value in DzVents – 2025.2 (build 17252)](data/articles/c1d1d524143a9358386d8d8c1af92503.html)
**Source:** Domoticz (Forum News)
Domoticz version: 2025.2 (build 17252)
Platform: (Raspbian 13.2)
After upgrading to the latest beta version 2025.2 (build 17252), I noticed an issue with the lastUpdate.minutesAgo parameter in DzVents.
I am using OWFS 1-Wire temperature sensors.
The sensors update correctly — at least once per minute (confirmed in the device log and hardware level).
In my DzVents scripts, I check:
device.lastUpdate.minutesAgo
Since the last update, even though the sensor was updated less than a minute ago, Domoticz shows an increasing minutesAgo value indefinitely for randomly selected sensors.
The value keeps increasing as if the device had not been updated at all, while in reality:
The device value is changing correctly.
The device “Last Update” timestamp in the UI appears correct.
Only lastUpdate.minutesAgo in DzVents is incorrect.
The issue does not affect all sensors at once — it appears randomly on different OWFS devices. The same scripts worked correctly in previous versions.
Statistics: Posted by tomes — Tuesday 24 February 2026 23:19 — Replies 4 — Views 383

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 14. `FR` [Problème de configuration bt et mqtt](data/articles/1412dfe1bd71070c1b3fc5ed07040714.html)
**Source:** Gladys Assistant (Forum)
​Bonjour,
​Nouveau sur Gladys et habitué à bidouiller sur Home Assistant, j’ai voulu migrer pour plus de simplicité. Cependant, je rencontre plusieurs problèmes suite à une mauvaise configuration réseau qui a fait crasher mon serveur Unraid.
​Ma Configuration :
​Hardware : Lenovo ThinkCentre M710q.
​Stockage : DAS TerraMaster 4 baies (USB).
​Dongles : Zigbee (sur /dev/ttyACM0) et Bluetooth Asus BT500.
​Gladys : Installée via Docker sur Unraid (actuellement en mode Bridge sur le port 8006 pour éviter les conflits).
​Le problème :
Suite à une tentative de configuration du dongle Bluetooth, j’ai passé Gladys en mode réseau Host, ce qui a provoqué un crash total d’Unraid (conflit d’IP/Ports) et une corruption de ma clé de boot. J’ai dû recréer une « New Config » et supprimer l’image Docker corrompue.
​Depuis, j’ai deux soucis majeurs :
​Services MQTT et Zigbee : Les containers intégrés n’existent plus. J’ai tenté une réinstallation manuelle via l’onglet Apps d’Unraid, mais Gladys ne semble plus communiquer avec eux.
​Y a-t-il un moyen de forcer Gladys à réinstaller et gérer elle-même ces containers (Mosquitto/Zigbee2MQTT) pour retrouver le fonctionnement natif ?
​ m’assurer que les nouveaux containers pointent correctement vers mes anciennes données dans /mnt/user/appdata/ ?
​Bluetooth (Asus BT500) : Mon dongle n’est toujours pas reconnu dans l’interface Gladys (« Pas de dispositif trouvé »). J’ai pourtant activé le mode Privileged et tenté un passthrough USB via /dev/bus/usb, mais sans succès.
​Avez-vous une astuce pour stabiliser le Bluetooth sur Unraid et lier correctement les services MQTT/Zigbee après un tel crash ?
​Merci d’avance pour votre aide !
Cordialement,
Didier
5 messages - 3 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="openHAB Community (Latest)">

### 15. `EN` [Commands that are sent to Aqara H2EU Rollershutter are divided by 100](data/articles/dc038d7d0014df74595e471e35d3980e.html)
**Source:** openHAB Community (Latest)
Hi all,
I have several H2EU Rollershutter devices that I operate in Matter mode.
The devices have been correctly added to OpenHAB via Matter. I can see their state. If I close them manually via the hardware button, the state updates fine in OpenHAB to a value between 0 and 100 (where 100 is fully closed).
The weird thing happens, when I try to send commands to the device: Sending “100” as command closes the rollershutter exactly 1%. After the blinds stop moving, state in OpenHAB shows as “1”. Sending any other number between 0 and 99 drives the blinds to fully open state.
Consequently it seems as if the value is somehow divided by 100 before it is sent to the device. I tried multiplying my value by 100 (e.g. sending 5000), but anything &gt;100 is ignored completely.
Log, when sending “100”:
2026-02-23 17:48:45.261 [INFO ] [openhab.event.ItemCommandEvent ] - Item 'Rollo_WZ_links_Window_Covering_Lift' received command 100 (source: org.openhab.ui=&gt;org.openhab.core.io.rest$meph)
2026-02-23 17:48:45.261 [INFO ] [penhab.event.ItemStatePredictedEvent] - Item 'Rollo_WZ_links_Window_Covering_Lift' predicted to become 100
2026-02-23 17:48:45.262 [INFO ] [openhab.event.ItemStateChangedEvent ] - Item 'Rollo_WZ_links_Window_Covering_Lift' changed from 0 to 100 (source: org.openhab.core.autoupdate.optimistic)
2026-02-23 17:48:46.445 [INFO ] [openhab.event.ItemStateChangedEvent ] - Item 'Rollo_WZ_links_Active_Power' changed from 0 W to 97 W (source: org.openhab.core.thing$matter:node:0e7486ecf4:17811946753991212479:0#electricalpowermeasurement-activepower)
2026-02-23 17:48:46.461 [INFO ] [openhab.event.ItemStateChangedEvent ] - Item 'Rollo_WZ_links_Window_Covering_Lift' changed from 100 to 1 (source: org.openhab.core.thing$matter:node:0e7486ecf4:17811946753991212479:1#windowcovering-lift)
2026-02-23 17:48:47.449 [INFO ] [openhab.event.ItemStateChangedEvent ] - Item 'Rollo_WZ_links_Active_Power' changed from 97 W to 0 W (source: org.openhab.core.thing$matter:node:0e7486ecf4:17811946753991212479:0#electricalpowermeasurement-activepower) Log when sending “50” (after “100” was sent and blinds are 1% closed):
2026-02-23 17:48:58.093 [INFO ] [openhab.event.ItemCommandEvent ] - Item 'Rollo_WZ_links_Window_Covering_Lift' received command 50 (source: org.openhab.ui=&gt;org.openhab.core.io.rest$meph)
2026-02-23 17:48:58.095 [INFO ] [penhab.event.ItemStatePredictedEvent] - Item 'Rollo_WZ_links_Window_Covering_Lift' predicted to become 50
2026-02-23 17:48:58.096 [INFO ] [openhab.event.ItemStateChangedEvent ] - Item 'Rollo_WZ_links_Window_Covering_Lift' changed from 1 to 50 (source: org.openhab.core.autoupdate.optimistic)
2026-02-23 17:48:59.261 [INFO ] [openhab.event.ItemStateChangedEvent ] - Item 'Rollo_WZ_links_Active_Power' changed from 0 W to 3 W (source: org.openhab.core.thing$matter:node:0e7486ecf4:17811946753991212479:0#electricalpowermeasurement-activepower)
2026-02-23 17:49:00.280 [INFO ] [openhab.event.ItemStateChangedEvent ] - Item 'Rollo_WZ_links_Active_Power' changed from 3 W to 0 W (source: org.openhab.core.thing$matter:node:0e7486ecf4:17811946753991212479:0#electricalpowermeasurement-activepower)
2026-02-23 17:49:01.320 [INFO ] [openhab.event.ItemStateChangedEvent ] - Item 'Rollo_WZ_links_Window_Covering_Lift' changed from 50 to 0 (source: org.openhab.core.thing$matter:node:0e7486ecf4:17811946753991212479:1#windowcovering-lift) I also already tried applying a “|(input*100)” transformation to the channel. It did not really change a thing (other than 0 and 1 being the only “valid” numbers to send - still not able to lower the blinds below 1%).
Problem does not seem to be about the hardware of the device itself (I thought that first), since a parallel HomeAssistant installation can operate the rollershutter fine.
OpenHAB is on version 5.1.1 (running within docker container)
Firmware on all devices is upgraded to the current version.
I am really running out of ideas what else I can try. If anybody would have any ideas about this, it would be greatly appreciated.
5 posts - 2 participants
Read full topic

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 16. `FR` [Gladys Assistant 4.68 : Matterbridge, intégrations favorites et Tasmota amélioré](data/articles/cb0944ba84c72926078700d918c5fc18.html)
**Source:** Gladys Assistant (Forum)
Bonjour à tous,
Je viens de publier une nouvelle version de Gladys, avec plusieurs améliorations et corrections Nouveautés
Intégration Matterbridge : Gladys vous permet maintenant de lancer un container Matterbridge en un clic dans Gladys, ouvrant la porte à encore plus d’appareils compatibles. Si vous voulez savoir j’ai développé cette intégration avec l’IA, je vous en dis plus sur YouTube :
Claude AI a codé mon intégration domotique en 30 min (j'ai rien fait)
La documentation : Matterbridge | Gladys Assistant Attention, si vous avez déjà lancé Matterbridge sur votre instance, cela peut entraîner un conflit de port. Il n’y a pas de réel intérêt à vouloir lancer Matterbridge via Gladys si vous avez déjà pu le lancer vous-même en dehors de Gladys Favoris pour les intégrations : Vous pouvez désormais marquer vos intégrations préférées en favoris pour les retrouver plus facilement.
Tasmota : Découverte automatique de l’IP via MQTT, lien direct vers l’interface de l’appareil, et un meilleur tri lors de la découverte. Corrections et améliorations
Widget température dans les pièces : Les valeurs aberrantes de température sont désormais exclues, et la conversion en Fahrenheit pour la valeur maximale est corrigée.
Chat : Les espaces dans les messages sont maintenant correctement préservés grâce au pre-wrap.
Exemple: DuckDB mis à jour en version 1.4.4.
Correction de fautes de frappe dans les traductions.
Amélioration de la robustesse du service MCP.
Merci à tous les contributeurs : @bertrandda, @mutmut @Will_71 @qleg et @Terdious pour ce beau travail collaboratif ! Bonne mise à jour ! 12 messages - 5 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 17. `EN` [Missing data on EcoDevice (old generation)](data/articles/94917a04dc2f791b6145428491c0757c.html)
**Source:** Domoticz (Forum News)
Hello.
I have a problem with my Ecodevice (First génération) provided by GCE Electronics.
(2 inputs for téléinfo one and two and 2 others inputs for 2 counters)
It works perfectly when I connect only teleinfo1.
All devices are created: Teleinfo 1 Alerte courant,Teleinfo 1 Tarif en cours,Teleinfo 1 Pourcentage de Charge,Teleinfo 1 Courant, Teleinfo 1 kWh Total
(It's also OK for the 2 counters C1 and C2)
But when I connect the second signal téléinfo2, devices are also created, except 1 (the most important) : Teleinfo 2 kWh.
The datas for téleinfo1 are briefly displayed on the sensor Teleinfo 1 kWh but immediatly replaced with Teleinfo2's datas.
On the log, I have twice the line for Teleinfo 2 kWh Total (2 differents lines for others sensors like teleinfo courant)
2026-02-23 12:55:47.050 ECO-DEVICES: Fetching Teleinfo 1 data
2026-02-23 12:55:47.152 ECO-DEVICES: Fetching Teleinfo 2 data
2026-02-23 12:55:47.152 ECO-DEVICES: P1 Smart Meter (Teleinfo 2 kWh Total)
2026-02-23 12:55:47.257 ECO-DEVICES: P1 Smart Meter (Teleinfo 2 kWh Total)
...
2026-02-23 12:55:47.259 ECO-DEVICES: Current (Teleinfo 2 Courant)
2026-02-23 12:56:47.754 ECO-DEVICES: Current (Teleinfo 1 Courant)
...
Iknow that Ecodevice (first generation) is an old system.
I know also that this system is only used in France ,and for almost everyone only one teleinfo signal.
And perhaps the problem comes from GCE Electronics.
So I'm not sure someone can help me… But I still hope...
Patrick
Statistics: Posted by Pchatill — Monday 23 February 2026 13:06 — Replies 1 — Views 225

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 18. `FR` [Connexion clé SMLIGHT à Zigbee2Mqtt sur Gladys (Full SSL/TLS) (MQTT et Z2M externe)](data/articles/e5159c2931eaae75a4f1aff63ef2ed47.html)
**Source:** Gladys Assistant (Forum)
Bonjour,
Comme promis, voici un tutoriel afin de connecter une clé SMLIGHT à Gladys via le réseau et non via USB car sinon on perd tout l’intérêt de cette clé en la branchant en USB Gladys ne prenant en charge que le mode USB @pierre-gilles arrête moi si je me trompe , je suis partie sur une installation avec un MQTT et Z2M externe à Gladys.
@pierre-gilles ?
Ici pour z2m en https j’utilise le port 443 mais pour éviter tout conflit si vous décider de tout installer sur la même machine il faudrait modifier par le port 4343 par exemple J’avais déjà fais un tuto complet sur HAOS à l’époque ou je l’utilisais que vous pouvez retrouver ici : Home Assistant Communauté Francophone – 29 May 25 [Tuto] Installer HAOS sur Proxmox avec Z2M et MQTT (Full SSL/TLS - Lets Encrypt) Home Assistant - Tutoriels &amp; Partages Installation tutoriel L’idée de ce tutoriel est de regrouper un peu toutes les infos que j’ai pu trouver pour l’installation de HAOS, Z2M et MQTT sur des VM séparés au sein de Proxmox et le tout en full SSL/TLS (Lets encrypt) sur ce type de machine : ...
Temps de lecture: 7 mins J'aime: 15 Installation Mosquitto (Mqtt)
Installer une VM sous ubuntu 24.04, mettez la complétement à jour et lancez les commandes suivantes :
Pour installer docker :
curl -sSL https://get.docker.com/ | CHANNEL=stable sh
systemctl enable --now docker Ajouter un utilisateur docker_mosquitto par exemple :
adduser docker_mosquitto Récuperer son ID : (Ici 1002)
cat /etc/passwd [ grep docker_mosquitto Créer le dossier mosquitto dans /opt
mkdir /opt/mosquitto Créer le fichier docker-compose.yml avec le contenu suivant : (Remplacer 1002 par les ID que l’on a récupéré juste avant)
services: mosquitto: image: eclipse-mosquitto:2.0.22 container_name: mosquitto restart: unless-stopped user: "1002:1002" ports: - "1883:1883" # MQTT - "8883:8883" # MQTTS (secure) - "9001:9001" # WebSockets volumes: - ./mosquitto/config:/mosquitto/config - ./mosquitto/data:/mosquitto/data - ./mosquitto/log:/mosquitto/log - /etc/localtime:/etc/localtime:ro - /etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/chain.pem:/etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/chain.pem:ro - /etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/privkey.pem:/etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/privkey.pem:ro - /etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/cert.pem:/etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/cert.pem:ro Créer un dossier mosquitto et les sous dossiers et appliquer les droits : (Celui-ci contiendra la configuration les datas et les logs)
mkdir /opt/mosquitto/mosquitto
mkdir /opt/mosquitto/mosquitto/data
mkdir /opt/mosquitto/mosquitto/config
mkdir /opt/mosquitto/mosquitto/log
touch mkdir /opt/mosquitto/mosquitto/log/mosquitto.log
chown -R 1002:1002 /opt/mosquitto/mosquitto Créer le fichier de config dans /opt/mosquitto/mosquitto/config/mosquitto.conf
persistence true
persistence_location /mosquitto/data/ log_dest file /mosquitto/log/mosquitto.log listener 1883 localhost
allow_anonymous false
#password_file /mosquitto/config/passwd
tls_version tlsv1.3 listener 8883
certfile /etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/cert.pem
cafile /etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/chain.pem
keyfile /etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/privkey.pem listener 9001
protocol websockets
certfile /etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/cert.pem
cafile /etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/chain.pem
keyfile /etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/privkey.pem Activez le SSL : (A adapter en fonction du plugin que vous utilisez pour récupérer le certificat de votre nom de domaine) Ici il s’agit d’un exemple avec infomaniak
apt install certbot
apt install python3-pip pip install certbot-dns-infomaniak export INFOMANIAK_API_TOKEN=xxx certbot certonly \ --authenticator dns-infomaniak \ --server https://acme-v02.api.letsencrypt.org/directory \ --agree-tos \ --rsa-key-size 4096 \ -d 'mqtt.xxx.local.srv-home.fr' Par défaut, certbot installe un service qui renouvelle périodiquement ses certificats automatiquement. Pour ce faire, la commande doit connaître la clé API, sinon elle échouera silencieusement.
Afin d’activer le renouvellement automatique de vos certificats génériques, vous devrez modifier /lib/systemd/system/certbot.service. Ajoutez-y la ligne suivante dans Service, en remplaçant par votre jeton :
Environment="INFOMANIAK_API_TOKEN=" Ensuite ouvrez le fichier de config
nano /etc/letsencrypt/renewal/xxx.conf Ajouter
renew_hook = docker restart mosquitto chmod -R 755 /etc/letsencrypt/live
chmod -R 755 /etc/letsencrypt/archive Lancer le container
cd /opt/mosquitto
docker compose up -d Vous pouvez voir les logs du container docker :
docker logs mosquitto -f Activer l’authentification (Remplacer username par un utilisateur, par exemple « mqttuser »
docker exec -it mosquitto mosquitto_passwd -c /mosquitto/config/passwd username Décommenter la ligne « password_file /mosquitto/config/passwd » dans le fichier « /opt/mosquitto/mosquitto/config/mosquitto.conf » ce qui donner maintenant
persistence true
persistence_location /mosquitto/data/ log_dest file /mosquitto/log/mosquitto.log listener 1883 localhost
allow_anonymous false
password_file /mosquitto/config/passwd
tls_version tlsv1.3 listener 8883
certfile /etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/cert.pem
cafile /etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/chain.pem
keyfile /etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/privkey.pem listener 9001
protocol websockets
certfile /etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/cert.pem
cafile /etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/chain.pem
keyfile /etc/letsencrypt/live/mqtt.xxx.local.srv-home.fr/privkey.pem Relancer ensuite le container :
docker restart mosquitto Vous pourrez ensuite renseigner ce login dans Gladys et juste après dans zigbee2mqtt Installation Zigbee2mqtt
Installer une VM sous ubuntu 24.04, mettez la complétement à jour et suivre la procédure suivante :
Linux Docker | Zigbee2MQTT
Pour installer docker :
curl -sSL https://get.docker.com/ | CHANNEL=stable sh
systemctl enable --now docker Voici mon fichier docker-compose.yml :
services: zigbee2mqtt: container_name: zigbee2mqtt image: koenkk/zigbee2mqtt:2.8.0 restart: unless-stopped volumes: - ./data:/app/data - /run/udev:/run/udev:ro - /etc/localtime:/etc/localtime:ro - /etc/letsencrypt/live/z2m.xxx.local.srv-home.fr/fullchain.pem:/etc/letsencrypt/live/z2m.xxx.local.srv-home.fr/fullchain.pem:ro - /etc/letsencrypt/live/z2m.xxx.local.srv-home.fr/privkey.pem:/etc/letsencrypt/live/z2m.xxx.local.srv-home.fr/privkey.pem:ro
# devices:
# - /dev/serial/by-id/usb-Silicon_Labs_Sonoff_Zigbee_3.0_USB_Dongle_Plus_0001-if00-port0:/dev/serial/by-id/usb-Silicon_Labs_Sonoff_Zigbee_3.0_USB_Dongle_Plus_0001-if00-port0 ports: - "443:443" # Port externe 443 → port interne 443 environment: - TZ=Europe/Paris networks: - z2m_net networks: z2m_net: driver: bridge Voici mon fichier /opt/z2m/data/configuration.yaml à titre d’exemple, il faut modifier le auth_token qui vous permettra de vous connecter à l’interface web ainsi que le mot de passe de l’utilisateur z2m que l’on a mis précédemment lors de l’installation de MQTT
homeassistant: enabled: false
mqtt: base_topic: zigbee2mqtt server: mqtts://mqtt.xxx.local.srv-home.fr:8883 user: mqttuser password: achanger keepalive: 60 reject_unauthorized: true version: 4 include_device_information: true
serial: port: tcp://192.168.xx.xx:7638 baudrate: 460800 adapter: zstack disable_led: false
advanced: pan_id: GENERATE network_key: GENERATE channel: 25 homeassistant_legacy_entity_attributes: false legacy_api: false legacy_availability_payload: false log_level: info log_syslog: app_name: Zigbee2MQTT eol: /n host: localhost localhost: localhost path: /dev/log pid: process.pid port: 514 protocol: udp4 type: '5424' last_seen: ISO_8601
frontend: enabled: true package: zigbee2mqtt-windfront port: 443 host: 0.0.0.0 url: https://z2m.xxx.local.srv-home.fr ssl_cert:

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 19. `EN` [SOLVED: Hardware devices not enabled Python error in Docker (?) Beta 17204](data/articles/92951a8c8efd782480d14ea6e9817cc0.html)
**Source:** Domoticz (Forum News)
Hi all,
This morning my Docker container was updated to latest beta (17204). There seems to be a problem with a Python library if I interpret the log correctly: 2026-02-21 13:32:06.430 Status: Domoticz V2025.2 (build 17204) (c)2012-2026 GizMoCuz
2026-02-21 13:32:06.430 Status: Build Hash: 71a61ff22, Date: 2026-02-20 11:33:19
2026-02-21 13:32:06.431 Status: Startup Path: /opt/domoticz/
2026-02-21 13:32:06.511 Status: PluginSystem: Failed dynamic library load, install the latest libpython3.x library that is available for your platform.
2026-02-21 13:32:06.513 Status: PluginSystem: 'ConBee2' Registration ignored, Plugins are not enabled.
2026-02-21 13:32:06.513 Status: PluginSystem: 'SolarEdge' Registration ignored, Plugins are not enabled.
2026-02-21 13:32:06.513 Status: PluginSystem: 'Shelly MQTT' Registration ignored, Plugins are not enabled. Should not be related (because I use Docker) but I am running Docker on a headless Debia Trixie NUC.
I am posting this in the hope that this will be corrected in the next beta. I have no desire to go fiddle inside the container Statistics: Posted by Sjonnie2017 — Saturday 21 February 2026 13:40 — Replies 2 — Views 302

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 20. `EN` [Domoticz doesn't start after update beta](data/articles/c2a0b734865300713da7bc0801218ffb.html)
**Source:** Domoticz (Forum News)
After a update from beta 17099 to 17189 Domoticz did not restart. Did the update throuh the settingsscreen. Counter counted until 100, then the message update failed, no internet connection....
After a domoticz service restart was domoticz running normaal on the downloaded beta 17189. I thought this problem was solved? Attached the update.log and domoticz crash log domoticz_crash.log update.log
Statistics: Posted by Rik60 — Sunday 15 February 2026 20:21 — Replies 5 — Views 502

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 21. `EN` [Error in buienradar integration](data/articles/734b97c71b8ca534ba6a3d4f286865fc.html)
**Source:** Domoticz (Forum News)
Since yesterday I'm getting the following error on the buienradar integration:
Code: Error: Internet weer: Invalid data received (station measurement empty), or no data returned!
Started just somewhere during the day. Updated this morning to latest beta, did not resolve the issue. Any clue to the root cause? API change?
Statistics: Posted by JanJaap — Tuesday 10 February 2026 11:45 — Replies 2 — Views 186

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 22. `EN` [RasPi ZeroW :port8080 dead. New install[SOLVED]](data/articles/67468ad69531ca71a34ac11f44d3da6f.html)
**Source:** Domoticz (Forum News)
System:
Raspberry Pi ZeroW, Raspbian Bookworm Lite. It is a new, headless installation, no hardware attached. SSH is functional, but i am not sure if the port 8080 or 443 are opened. wget 192.162.1.82:8080 is not answering. Code: sudo service domoticz.sh statusdomoticz.service - LSB: Home Automation System Loaded: loaded (/etc/init.d/domoticz.sh; generated) Active: active (exited) since Sat 2026-02-07 19:54:02 CET; 7min ago Docs: man:systemd-sysv-generator(8) Process: 2666 ExecStart=/etc/init.d/domoticz.sh start (code=exited, status=0/SUCCESS) CPU: 331msFeb 07 19:54:00 haz11 systemd[1]: Starting domoticz.service - LSB: Home Automation System...Feb 07 19:54:01 haz11 domoticz.sh[2666]: Time synchronized, starting Domoticz...Feb 07 19:54:02 haz11 domoticz.sh[2666]: Illegal instruction &lt;------------------!!!!Feb 07 19:54:02 haz11 systemd[1]: Started domoticz.service - LSB: Home Automation System.
It seems to be a critical line:
Code: Feb 07 19:54:02 haz11 domoticz.sh[2666]: Illegal instruction: What is the problem there, and what is the solution?
Is the Pi Zero suitable for running domoticz?
If the current os or domoticz version is not suitable for the Pi Zero, which is the latest usable version?
Greetings to everyone and have nice Weekend
Statistics: Posted by rabbit — Saturday 07 February 2026 20:36 — Replies 26 — Views 833

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 23. `EN` [How to use Libre Hardware Monitor](data/articles/d261fdb0d0920b87de858ab24134a319.html)
**Source:** Domoticz (Forum News)
I used "Open Hardware Monitor" for a long time with a Domoticz "Motherboard" hardware entry. With my new PC "Open Hardware Monitor" doesn't support many of the motherboards sensors. Some older Domoticz release notes are showing that "Libre Hardware Monitor" is supported. However, if I try to use it like "Open Hardware Monitor" it seems not to be recogniced by Domoticz. Further more I couldn't find any how to hints. Can anyone give advise?
Addition: Domoticz Log shows "Warning, neither Libre Hardware Monitor nor Open Hardware Monitor are installed on this system."
However, Libre Hardware Monitor is running: Domoticz 2025.2 is running on Windows 11 as Libre Hardware Monitor 0.9.5
Statistics: Posted by Itschi — Friday 06 February 2026 8:51 — Replies 1 — Views 218

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 24. `EN` [Email is not send with a snapshot atttached](data/articles/465562196932fab92e561acda01579e2.html)
**Source:** Domoticz (Forum News)
Version: 2025.2
Platform: Pi4
Plugin/Hardware: RFXxl
Description:
E-mail notifications with a picture (security cam) do not work anymore. Errormessage is:
2026-02-03 17:16:09.188 Error: SMTP Mailer: Error sending Email to: !
2026-02-03 17:16:09.188 Error: libcurl: (55) 2026-02-03 17:16:09.188 Error: Send failure: Connection reset by peer settings screen attached
error messages and test e-mail are received ok.
Until recently the mail with a snapshot of the security cam where received.
the snapshot works in the camera settings menu
settings screen attached Statistics: Posted by Verdwaald — Tuesday 03 February 2026 22:15 — Replies 2 — Views 206

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="HomeGenie (GitHub Releases)">

### 25. `EN` [v2.0.2](data/articles/b235d7a1a2e2167ccf7810bafa5a1671.html)
**Source:** HomeGenie (GitHub Releases)
HomeGenie v2.0.2 — Advanced Energy Reporting &amp; Charting System Unleashed!
We are excited to announce the stable release of HomeGenie 2.0.2, bringing powerful new capabilities for data visualization and energy management to your programmable intelligence platform. This release focuses on transforming raw system data into clear, actionable insights directly within your HomeGenie dashboard. Key Highlights &amp; New Capabilities: Advanced Charting Widget &amp; UI:
Multi-Dataset Visualization: The Chart component now supports rendering multiple datasets simultaneously, allowing for mixed bar and line chart types to represent diverse data.
Intuitive Historical Navigation: Navigate through your historical data with ease using new Year and Day selectors, complete with convenient Prev/Next navigation buttons.
Dynamic Labels: X-axis labels now dynamically adapt based on the selected date range, enhancing data clarity and readability.
Optimized Performance: Refactored to employ a "One Worker per Dataset" logic for modular and parallel data fetching, ensuring responsive performance even with large historical logs.
UI/UX Improvements: Enhanced Chart.js integration provides theme-aware colors and opacity (supporting glassmorphism effects), alongside fixes for update synchronization and layout shifts. Daily Energy Reporting System (Backend):
New Automation Program: Introduced the Daily Energy Report program, designed to automatically aggregate and log Meter.Watts.Hour data from your devices.
YAML Persistence: Implemented robust data storage using daily YAML files (e.g., YYYY_DDD_daily_stats.yaml) for reliable historical tracking of energy consumption.
Dedicated APIs: Exposed Statistics.Providers/DailyEnergyReport for dynamic widget configuration, enabling seamless integration of daily data.
Added DataProcessing.Statistics/DailyEnergyReport APIs for efficient fetching of raw dataset values.
Flexible Data Retrieval: Implemented logic to retrieve specific energy data for chosen years and days via new API parameters.
Device Integration: Added the Include in Daily Wh report feature toggle, allowing users to easily select which devices contribute to the energy reports. Why HomeGenie 2.0.2?
This release further solidifies HomeGenie's commitment to empowering you with local-first, cloud-independent, and intelligent programmable systems. Gain unparalleled insights into your energy consumption and system behavior, enabling smarter automations and a more efficient environment—all managed privately on your own hardware.
Download the latest stable build of HomeGenie 2.0.2 from our repository today!
Happy Automating! Full Changelog: v2.0.1...v2.0.2

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="HomeGenie (GitHub Releases)">

### 26. `EN` [v2.0.1](data/articles/7908462352415e6e819e7a8282d5eb3c.html)
**Source:** HomeGenie (GitHub Releases)
HomeGenie v2.0.1 — Your Local AI-Powered Programmable Intelligence Unleashed!
We are thrilled to announce the official stable release of HomeGenie 2.0.1, culminating over three years of dedicated development into a completely re-imagined platform. HomeGenie has evolved into a robust, local-first, and privacy-centric system of programmable intelligence, with Agentic AI at its core.
This release empowers you with cutting-edge capabilities to transform any environment into a truly intelligent and autonomous system. Key Highlights &amp; New Capabilities: Local AI &amp; Lailama Agentic Engine:
Intelligent &amp; Adaptive: The Lailama engine dynamically optimizes its parameters (Context Window, Batch Size) based on your system's available RAM, ensuring stable and efficient operation across diverse hardware.
Granular AI Control: A brand-new, intuitive configuration UI (supporting both Light and Dark themes) allows you to fine-tune Lailama's behavior: Adjust Creativity (Temperature) from precise logic to creative responses.
Manage Working Memory (Context Window) for enhanced AI recall.
Control System Context Sharing to feed real-time module and sensor data to the AI for highly accurate agentic actions.
Enhanced Reasoning: Improved System Report formatting and refined system prompts for Lailama and Gemini providers lead to smarter intent recognition and execution.
AI Vision Suite: Full integration of YOLO (Object Detection, Instance Segmentation, Pose Estimation) directly on server and ESP32-CAM modules.
Agentic Scheduling (Genie Command): The Scheduler now hosts AI-driven tasks, allowing natural language commands to define complex automations autonomously.
Speech Recognition &amp; Synthesis: Improved microphone input and voice responses in the new AI chat interface.
Async Model Downloads: Robust Download Manager for GGUF models with pause/resume support. Developer API &amp; Framework:
New Licensing Model: Re-licensed to GNU Affero General Public License v3.0 for a protected open-source ecosystem.
Extended Widget Capabilities: zuix.d.ts is updated with new widget controller methods: this.apiCall(), this.showSettings(), and this.translate() for deeper integration.
Universal Fluent API Generator: Generates ready-to-use C#, JavaScript, and Python code with a unified syntax for module interaction.
ModuleField API: Added the .decimalValue property to ModuleField for simplified numeric handling in UI logic. User Interface (UI) &amp; Experience (UX) Overhaul:
Modernized UI: A sleek, responsive, and multilingual interface with full support for Light/Dark themes and enhanced readability.
Redesigned AI Chat: "Bottom sheet" style chat with explicit thought processes, smart scroll, token buffering, and unified "Stop" commands.
Customizable Dashboards: New preferences for custom wallpapers (including animated GIFs), widget card colors, opacity, and blur effects.
Quick Control Sheets: Implemented Floating Action Buttons (FABs) for rapid control of scenes, lights, colors, and shutters directly from the dashboard.
Smart Display Integration: ESP32/ESP32-S3 devices with touch displays now function as customizable and autonomous control centers.
Revamped Log Events Viewer: Interactive chart preview with seamless navigation for efficient log analysis.
Code Editor Minimap: Enabled for faster navigation within long scripts.
Clearer Visual Programming: The "VPL" entry has been renamed to "Visual Program" for improved clarity and accessibility. Why HomeGenie 2.0.1?
This release represents our unwavering commitment to empowering users with local-first, cloud-independent, and intelligent programmable systems. With Lailama, your HomeGenie server transforms into a truly autonomous agent, capable of understanding, reasoning, and acting on your unique environment or project—all while keeping your data private and secure on your hardware.
Happy Automating! Full Changelog: v2.0.0-rc.15...v2.0.1

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="HomeGenie (GitHub Releases)">

### 27. `EN` [v2.0.0-rc.15](data/articles/c3b90536c4ce90a07fec5904e3a815d6.html)
**Source:** HomeGenie (GitHub Releases)
HomeGenie Server v2.0.0-rc.15 - The Era of Local Agentic AI
This release introduces significant advancements in local AI integration and a refined developer experience for building integrated widgets and automation programs. Local AI &amp; Lailama Enhancements
The Lailama engine is now more intelligent, highly customizable, and fully context-aware.
Dynamic Memory Optimization: The engine now automatically optimizes model parameters (Context Window and Batch Size) based on the system's available RAM, ensuring stability across different hardware profiles.
Refined Configuration UI: A new, intuitive settings panel (supporting both Light and Dark themes) for granular AI control: Creativity (Temperature): Real-time adjustment from precise logic to creative responses.
Working Memory (Context Window): Manage how much information the AI can process simultaneously.
System Context Sharing: Toggle to provide the AI with real-time status of modules and sensors for precise agentic actions.
Improved Context Manager: Enhanced formatting for the System Report to reduce hallucinations and improve intent-to-API mapping.
System Prompt Tuning: Refined default prompts for both Lailama and Gemini providers to improve reasoning consistency. Developer API &amp; Framework (zuix.js)
We have extended the widget controller capabilities to allow deeper integration with the HomeGenie core.
New Controller Methods: Updated zuix.d.ts with built-in methods: apiCall: Directly invoke HomeGenie backend services and program APIs from a widget.
showSettings: Programmatically open the widget's configuration interface.
translate: Easily handle localized labels using the internal i18n engine.
ModuleField API: Added the .decimalValue property to the ModuleField object for simplified numeric handling in the UI layer. UI &amp; Editor Improvements
Code Editor: Enabled the minimap for faster navigation within long scripts and programs.
Chat UI: Fixed vertical message alignment to the bottom and optimized rendering during token streaming to eliminate Markdown flickering.
File Editor Fix: Resolved a layout issue where scrollable content could overlap dialog action buttons.
Visual Programming: Renamed the "VPL" entry to "Visual Program" for better clarity and accessibility.
Happy Automating! Full Changelog: v2.0.0-rc.14...v2.0.0-rc.15

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant (Blog officiel)">

### 28. `EN` [2026.1: Home is where the dashboard is](data/articles/3d735d6e0cbd96de06bb5eea0f292ffe.html)
**Source:** Home Assistant (Blog officiel)
Happy New Year! I hope you had a wonderful holiday, spending time with your loved ones. We’re kicking off 2026 with a smaller release, as our contributors and maintainers have been enjoying some well-deserved time off as well. But don’t worry, there’s still plenty of good stuff in this release!
Home Assistant 2026.1 brings a refreshed Home dashboard experience on mobile, with summary cards right at your fingertips without extra taps. We’ve also made it easier than ever to navigate to the protocol connecting your devices, such as Zigbee, Z-Wave, Thread and more.
For automation enthusiasts, we’re continuing our work on our even more “human-friendly” triggers, which can be enabled via Home Assistant Labs, so you can build automations using easy-to-understand language instead of technical state changes, like initiating automations if a button is pressed or someone arrives home.
On the integrations front, we welcome eight new integrations to the family, including pet tracking with Fressnapf, energy monitoring with eGauge, and smart heating control with Watts Vision +. Plus, improvements to existing integrations from our amazing community contributors.
I wish you a happy and healthy 2026! Enjoy the release!
../Frenck
Home dashboard improvements Streamlined mobile navigation
New devices page
Purpose-specific triggers and conditions progress
Easier navigation to protocol dashboards
Integrations New integrations
Noteworthy improvements to existing integrations
Integration quality scale achievements
Now available to set up from the UI
Other noteworthy changes Energy dashboard date picker
ESPHome action responses
Patch releases 2026.1.1 - January 12
2026.1.2 - January 16
2026.1.3 - January 23
Need help? Join the community
Backward-incompatible changes
All changes
A huge thank you to all the contributors who made this release possible! And a special shout-out to @bramkragten, @piitaya, and @abmantis who helped write the release notes for this release. Home dashboard improvements
The Home dashboard continues to evolve! In the previous release, we introduced a brand-new sidebar layout, weather tiles, and energy distribution summaries. This release takes it even further with a streamlined mobile experience and better device management.
Streamlined mobile navigation
On mobile devices, the Home dashboard now displays summary cards (like lights, climate, security, media players, weather, and energy) directly at the top of the view, followed by your favorites and areas. This replaces the previous tab-based navigation, giving you instant access to everything that matters without any extra taps.
The desktop experience remains unchanged, with summaries displayed in the sidebar under the For you heading.
New devices page
Ever wondered where your devices went after you removed them from an area? A new Devices page now appears on the Home dashboard, showing all devices that aren’t currently assigned to a specific area. This makes it easy to find and control those “orphaned” devices without hunting through the settings.
The new Devices page shows devices not assigned to any area.
Purpose-specific triggers and conditions progress
In the previous release, we introduced purpose-specific triggers and conditions. Instead of thinking in technical state changes, you can now simply pick things like “When a light turns on” or “If the climate is heating” when building your automations.
This feature is still being refined in Home Assistant Labs, but this release adds a lot more trigger types, making this new approach even more useful. Here is an overview of all the new triggers added in this release:
Button triggers fire when a button entity has been pressed.
Climate triggers now cover all common scenarios. You can trigger on HVAC mode changes, target temperature changes, or when the target temperature crosses a threshold. There are also triggers for current temperature and humidity changes, and even target humidity changes.
Device tracker triggers let you automate based on when a device entered or left home, with support for the first device arriving, last device leaving, or any change. Don’t worry, person-specific triggers are coming soon, the device tracker ones were simply available sooner.
Humidifier triggers will fire when a humidifier turns on or off, starts humidifying, or starts drying. You can also trigger on humidity changes or when humidity crosses a threshold.
Light triggers let you automate based on brightness changes or when brightness crosses a specific threshold.
Lock triggers can now fire when a lock is locked, unlocked, opened, or jammed.
Scene triggers fire when a scene is activated.
Siren triggers fire when sirens are turned on or off.
Update trigger fires when an update becomes available.
As the new purpose-specific triggers and conditions all support targeting something bigger than a simple entity (an area, a floor, or even a label), we also redesigned how the target gets displayed on the automation flow.
The goal of this change is to allow you to quickly glance at your automation, and understand its purpose.
Head over to Settings &gt; System &gt; Labs to enable purpose-specific triggers and conditions and give them a try!
Easier navigation to protocol dashboards
For an organization that loves the open standards that seamlessly connect our devices, we sure didn’t promote them enough! Most people didn’t even know that Home Assistant has dedicated dashboards for protocols like Zigbee, Z-Wave, and more.
This release reorganizes the Settings page to give these open protocols a more prominent spot. The protocols section now appears right after the core settings, making it much easier to find all the different ways you’re connecting your devices and quickly access some very useful protocol-specific configurations.
The menu items only appear when you have the corresponding integration set up, so you’ll only see what’s relevant to your setup.
Integrations
Thanks to our community for keeping pace with the new integrationsIntegrations connect and integrate Home Assistant with your devices, services, and more. [Learn more] and improvements to existing ones! You’re all awesome New integrations
We welcome the following new integrations in this release:
AirPatrol, added by @antondalgren
eGauge, added by @neggert
Fluss+, added by @Marcello17
Fish Audio, added by @noambav
Fressnapf Tracker, added by @eifinger
HomeLink, added by @ryanjones-gentex
Watts Vision +, added by @theobld-ww
WebRTC, added by @balloob
This release also has new virtual integrations. Virtual integrations are stubs that are handled by other (existing) integrations to help with findability. These ones are new:
Levoit, provided by VeSync, added by @timmo001
Noteworthy improvements to existing integrations
It is not just new integrationsIntegrations connect and integrate Home Assistant with your devices, services, and more. [Learn more] that have been added; existing ones are also being constantly improved. Here are some of the noteworthy changes to existing integrations:
The Matter integration gained three new diagnostic binary sensors for thermostat remote sensing status from @lboue, helping you keep an eye on your climate system.
@joostlek added lots of new sensors to the SmartThings integration, including air quality sensors for PM1, PM2.5, and PM10, hood filter usage tracking, fridge temperature sensors for One Door refrigerators, and fan speed control for range hoods.
Roborock owners with Q7 devices can now integrate them thanks to @Lash-L, who added basic read-only support with sensors for battery, status, and cleaning data.
@mib1185 improved the FRITZ!SmartHome integration by adding switch entities that let you enable or disable FRITZ! Smart Home routines (triggers) directly from Home Assistant.
The Ping integration now tracks packet loss, thanks to @mib1185. The new sensor shows packet loss as a percentage and is disabled by default.

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant (Blog officiel)">

### 29. `EN` [2025.11: Pick, automate, and a slice of pie](data/articles/3ce065ff42884fe1ee5a06c02a28be52.html)
**Source:** Home Assistant (Blog officiel)
Home Assistant 2025.11! November is here, and we’ve been hard at work refining some of the main experiences that you interact with every day, and I think you’re going to love what we’ve built.
My personal favorite this release? The brand new target picker. It’s one of those changes that seems simple on the surface, but makes such a huge difference in how you build automations. You can finally see exactly what you’re targeting, with full context about which device an entity belongs to and which area it’s in. No more guessing whether you’re controlling the right ceiling light when you have three of them!
But that’s just the beginning. We’re continuing with the automation editor improvements, this time with a completely redesigned dialog for adding triggers, conditions, and actions. It’s cleaner, easier to read, and sets the foundation for some really exciting stuff coming in future releases. And speaking of making things clearer, you can now control exactly how entity names appear on your dashboard cards. Want to show just the entity name? The device name? The area? Or combine them? Even if you rename things, your dashboards will stay perfectly in sync. No more manual updates needed!
Oh, and energy dashboard fans will appreciate the new pie chart view for device energy, complete with totals displayed in the corner of every energy card. Enjoy the release!
../Frenck
PS: Oh, and pssst… Don’t tell anyone , but there might be something exciting being released on November 19th. Hit the bell on this announced YouTube stream to not miss it. Stay tuned! A brand new target picker
A brand new way to add triggers, conditions, and actions in your automations
Naming entities on your dashboard
Energy pie
Progress for Home Assistant and Add-on updates
Integrations New integrations
Noteworthy improvements to existing integrations
Now available to set up from the UI
Integration quality scale achievements
Farewell to the following
Other noteworthy changes Improved logging efficiency
The new Home Dashboard keeps getting smarter
Patch releases 2025.11.1 - November 7
2025.11.2 - November 14
2025.11.3 - November 21
Need help? Join the community
Backward-incompatible changes
All changes
A huge thank you to all the contributors who made this release possible! And a special shout-out to @bramkragten, @JLo, @MindFreeze, @agners, and @piitaya who helped write the release notes this release. Also, @silamon and @GemPolisher for putting effort into tweaking its contents. Thanks to them, these release notes are in great shape. A brand new target picker
Have you ever been building an automation and wondered, “Wait, which ceiling light is this?” when you see three entities all named “Ceiling light”? Or tried to figure out how many lights you’re actually controlling when you target an entire floor or area?
We’ve all been there. Until now, the target picker didn’t show you the full picture. You couldn’t see which device an entity belonged to or which area it was assigned to. And when you selected a floor or area as your target, you had no idea how many entities you were actually affecting. This uncertainty meant many of you stuck with targeting individual entities, even though larger targets (like areas and floors) can make your automations much more flexible.
The new target picker changes all that. Now you get full context for everything you’re targeting, and you can see exactly how many entities will be affected by your action.
Want to dig deeper? You can expand any floor, area, or device to see exactly which entities are included and where they’re coming from.
This makes it so much easier to build automations that scale with your home. When you target an area or floor, your automation automatically adapts as you add or remove devices. No more updating your automations every time you add a new light or sensor. Your automations just work, which is exactly how it should be.
A brand new way to add triggers, conditions, and actions in your automations
It’s no secret that we’re currently working hard on making automations easier to create. After the release of the automation sidebar two releases ago, we are now introducing a new dialog to add triggers, conditions, and actions.
The changes are purely cosmetic: the dialog is bigger, so the description of each block is simpler to read, with a two-pane layout to ease both navigation and block selection.
The building blocks (which are used to perform more complex conditions or sequences of actions, such as repeating actions or branching out your sequence into multiple paths) have been moved into the main dialog on a second tab. There is now a single entry point to add something to an automation instead of two, greatly reducing the number of buttons in complex automations.
As mentioned above, these changes are purely cosmetic, for now! But this new dialog is the foundation of what’s coming next, and we cannot wait to present that to you once it finally lands.
Naming entities on your dashboard
A few releases ago, we gave the entity picker a big upgrade by adding more context so you could easily see where each entity belongs (May 2025 release). In this release, we’re bringing that same flexibility to your dashboards.
You can now choose how names appear on your cards: show the entity, device, area, floor, or even combine them. This gives you full control over how your dashboards look and feel. For example, in a dedicated section for a specific device, you might choose to display only the entity name to avoid repeating the device name on every card.
Of course, you can still set a custom name if you want complete control over the text shown.
And the best part? If you rename an entity or device, your dashboards will automatically stay in sync. No more manual edits needed; everything just updates itself.
Energy pie
We’ve added a new layout to the devices energy graph: “pie” . You can toggle between the regular bar chart and the new pie chart by clicking the icon in the top-right corner.
Doing this made the top-right corner of the other energy cards feel empty, so we used that space to display the total energy for the selected period. For example, if the date picker is set to today, the total solar energy for today will be displayed in the corner of the solar production graph card.
Progress for Home Assistant and Add-on updates
With this release, you can now track the progress of updates to Home Assistant and Add-ons (managed by the Supervisor)! The progress includes the stages of downloading and unpacking, so the time required will vary based on your internet speed, CPU performance, and system load. As a result, the progress is not reflected as perfectly linear, but it does still provide a good estimate of how far along the update is.
Integrations
Thanks to our community for keeping pace with the new integrationsIntegrations connect and integrate Home Assistant with your devices, services, and more. [Learn more] and improvements to existing ones! You’re all awesome. New integrations
We welcome the following new integrations in this release:
Actron Air, added by @kclif9
Sunricher DALI, added by @niracler
Sunricher DALI, a platform for managing and monitoring DALI-based lighting systems.
Fing, added by @Lorenzo-Gasparini
Fing integration provides network scanning, device detection, and presence monitoring capabilities using the Fing platform.
Firefly III, added by @erwindouna
Firefly III project, a free open source personal finance manager with full transaction management, budgets, categories, and reports.
iNELS, added by @epdevlab
iNELS smart home system to manage lighting, heating, and automation components for enhanced home control.
Lunatone Gateway, added by @MoonDevLT
Lunatone Gateway, enabling control and monitoring of DALI lighting systems through Lunatone’s DALI gateway interface.
Meteo.lt, added by @xE1H
Lithuanian Hydrometeorological Service (LHMT) to provide regional weather forecasts for locations in Lithuania.

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant (Blog officiel)">

### 30. `EN` [Happy 12th Birthday, Home Assistant!](data/articles/228d35a30b9cf7b73d1fa6c42136568c.html)
**Source:** Home Assistant (Blog officiel)
Every September, we celebrate the anniversary of Home Assistant’s first PR in 2013 – for our 12th birthday, we’re going all in on community again. Last month, we asked for submissions on how Home Assistant helps you, and today we will highlight our favorites! We will also take a look at all the cool milestones over the past year in the project, thanks to contributions from you all, and the new things coming up for the community. It’s a communal effort
When I (Missy Quarry) joined as the Community &amp; Social Media Manager in February 2024, I was still new to how an open source project the size of Home Assistant manages its community. Over the past 18 months, I’ve seen Home Assistant community members from all walks of life — whether DIY tinkerers or people simply looking to make small improvements at home — contribute in their own ways. By sharing your stories and inspiring others, you’ve helped the project grow. For our 12th birthday, I want to celebrate these contributions, no matter the size or complexity. Before I jump into celebrating all your amazing contributions and how they shape the projects managed by the Open Home Foundation, I have a couple of birthday presents for you. First, I’m thrilled to share our new Community website! Right now, it’s a simple hub to find community information with ease, but we expect to evolve this over the coming months (or so). You’ll find links to our official community platforms, information on events, and details on meetups, including how to get reimbursed for certain fees as a host. In the future, I’d like to include links to regional communities we’re aware of and showcase more of the kinds of stories I’ll be sharing today.
Feel like something’s missing from this new page? Let me know!
Next, we’ve been working hard to do more of our development in the open. Last September, I redesigned the Discord server and in doing so I gated the Developer category behind a role. This has made it more difficult to develop in the open with the channels hidden behind a role, so we’re switching things up.
As of this week, the Developer category is now read-only for every member. Want to take a peek into the future of Home Assistant? Head to the #projects channel and see what contributors are talking about! Want to join in and contribute with either your feedback or skills? I’ve created an info thread for the channel that explains how to assign yourself either the Developer or Designer role and unlock the ability to chat in the threads.
Let’s jump into those submitted stories now… Happily ever after
In my opinion, the best thing about Home Assistant is its flexibility - you can integrate such a wide range of devices into it and use their data to build a unique-to-your-home experience. And that’s exactly why I wanted to hear how you, the community, use it in your own home to benefit you. Here are my favorite stories you submitted - I hope one inspires your next project. A coffee automation to improve Home Approval Factor. Jordan made a morning automation to avoid having the coffee grinder grind his morning mood.
u/katschung helped their girlfriend fully accept Home Assistant by creating a dashboard with a retrogame-style floor plan. Sythsaz uses Home Assistant to make sure their pupper is fed. “I’ve managed to make it so my dog’s food auto emails the vet then the response to the email gets put on my calendar so I know how long a bag of food lasts as well as adding the receipts to Google Drive.”
Inspired by PowerDisplayESPHome, JannickBlmndl made an LED matrix that helps their household be more sustainable by being energy flexible. It displays the live energy prices from their energy provider. Tano Spirits in Melbourne, Australia, uses Home Assistant to automate their Japanese Shochu distillery, inspired by a small brewing company in Singapore. Several years ago, HillPhantom found that Home Assistant wasn’t quite ready for him. Over the past year, though, he’s now got Ollama set up with his Home Assistant Voice Preview Edition and has been building guides on how to make your own mmWave radar sensors in Home Assistant. 🏻
Over just a few weeks, Pieter van Kampen recently integrated 190 devices that respond to voice control and more than 1200 active entities from his KNX home to create over 30 automations to help with everything from mowing the lawn to controlling shades based on the sun’s location and intensity. MB used Zigbee buttons to help collect data for their son’s doctor after he developed some trouble sleeping. This gave excellent insight for the doctor to start looking into causes, and they even used the system remotely while doing further evaluation. Graham Hosking took automations to another level (before we did) with his AI Automation Suggester and Automation Inspector. It takes the load off your brain by helping come up with new, clever automations! Wessam Lauf fell down the rabbit hole that is Home Assistant once he got his setup running. Inspired by the Graphite theme and after some LLM vibe-coding, he wrote a template for his very own theme, Frosted Glass - now available in HACS. Too many of us anthropomorphize our homes, telling it to chill out when five things break the same day. Biofects took that to heart and created this Home Assistant avatar for his home (here’s a bonus, nightmare fuel first version). Developers! 🏻 Developers! 🏻 Developers! 🏻
Our community is more than developers, it’s true. But we wouldn’t be the largest open source project on GitHub if we didn’t have a vibrant and active developer community. This ship sails largely due to their contributions, and we genuinely appreciate all of their efforts.
That’s why we’re eager to interview community members when we open new roles at the foundation. We’ve employed community members like Joostlek (who designed the new Integration Quality Scale and helps onboard new integrations into Core), Timo (who is our first ever Android developer and has focused on polishing the Android app), and Maxim (a talented developer from the Music Assistant community who works on both Music Assistant and ESPHome and is one of our newest additions to the team). Their contributions have helped shape how things work around here, but it was their contributions as community members that helped pave the way for their joining the foundation. These are just a select few of the several new hires at the foundation who were active community members.
(Have you checked our jobs page recently to see what roles are open? )
With our community of contributors and working with Nabu Casa on the hardware design, we have successfully launched a few new pieces of hardware. The Home Assistant Voice Preview Edition brought in language experts from every corner of the world to help ensure our language coverage is the most robust in the industry. Thanks to contributors, we support languages like Greek, Icelandic, and more recently Irish Gaeilge! We had community contributors help make sure the Home Assistant Connect ZWA-2 was prepared for launch last month. Sincerely, we couldn’t be more grateful for your support and efforts in these spaces.
Here are some fun stats from our GitHub contributors (commits on our Core repo):
Last 12 months (Sept - Aug) - 14,385
Previous 12 months - 14,503
A SPECIAL CONGRATULATIONS to bdraco, who just last week surpassed balloob (the founder of Home Assistant) as the contributor with the most commits!
This is just a small peek into all the hard work that goes into maintaining Home Assistant - we have more repositories than just Core, and every single contribution is valued.
Honorable dev mention from the submitted community stories - I couldn’t leave Joostlek’s (joke) submission out. Our very own Head of Developer Relations (his words), Joost Lekkerkerker, says Home Assistant helps keep him off the street.

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant (Blog officiel)">

### 31. `EN` [Building the AI-powered local smart home](data/articles/72b69c1c16862c4512d8f271c3d84f16.html)
**Source:** Home Assistant (Blog officiel)
Last year, we laid out our vision for AI in the smart home, which opened up experimentation with AI in Home Assistant. In that update, we made it easier to integrate all sorts of local and cloud AI tools, and provided ways to use them to control and automate your home. A year has passed, a lot has happened in the AI space, and our community has made sure that Home Assistant has stayed at the frontier.
We beat big tech to the punch; we were the first to make AI useful in the home. We did it by giving our community complete control over how and when they use AI, making AI a powerful tool to use in the home. As opposed to something that takes over your home. Our community is taking advantage of AI’s unique abilities (for instance, its image recognition or summarizing skills), while having the ability to exclude it from mission-critical things they’d prefer it not to handle. Best of all, this can all be run locally, without any data leaving your home!
Moreover, if users don’t want AI in their homes, that’s their choice, and they can choose not to enable any of these features. I hope to see big tech take an approach this measured, but judging by their last couple of keynotes, I’m not holding my breath.
Over the past year, we’ve added many new AI features and made them easy to use directly through Home Assistant’s user interface. We have kept up with all the developments in AI land and are using the latest standard to integrate more models and tools than ever before. We’re also continuing to benchmark local and cloud models to give users an idea of what works best. Keep reading to check out everything new, and maybe you can teach your smart home some cool new tricks. Local AI is making the home very natural to control Big thanks to our AI community contributor team:
@AllenPorter, @shulyaka, @tronikos, @IvanLH, @Joostlek!
Supercharging voice control with AI
We were doing voice assistants before AI was cool. In 2023, we kicked off our Year of the Voice. Since then, we’ve worked towards our goal of building all the parts needed for a local, open, and private voice assistant. When AI became the rage, we were quick to integrate it.
Today, users can chat with any large language model (LLM) that is integrated into Home Assistant, whether that’s in the cloud or run locally via a service like Ollama. Where Assist, our home-grown (non-AI) voice assistant agent, is focused on a predetermined list of mostly home control commands, AI allows you to ask more open-ended questions. Summarize what’s happening across the smart home sensors you’ve exposed to Assist, or get answers to trivia questions. You can even give your LLM a personality!
Users can also leverage the power of AI to speak the way they speak, as LLMs are much better at understanding the intent behind the words. By default, Assist will handle commands first. Only questions or commands it can’t understand will be sent to the AI you’ve set up. For instance, “Turn on the kitchen light” can be handled by Assist, while “It’s dark in the kitchen, can you help?” could be processed by an AI. This speeds up response times for simple commands and makes for a more sustainable voice assistant.
Another powerful addition from the past year is context sharing between agents. So your Assist agent can share the most recent commands with your chosen AI agent. This shared context lets you say something like “Add milk to my shopping list,” which Assist will act on, and to add more items, just say “Add rice.” The AI agent understands that these commands are connected and can act accordingly. Here is an excellent walkthrough video of JLo's AI-powered home, showing many of these new features in action Another helpful addition keeps the conversation going; if the LLM asks you a question, your Assist hardware will listen for your reply. If you say something like “It’s dark”, it might ask whether you’d like to turn on some lights, and you could tell it to proceed. We have taken this even further than other voice assistants, as you can now have Home Assistant initiate conversations. For example, you could set up an automation that detects when the garage door is open and asks if you’d like to close it (though this can also be done without AI with a very clever Blueprint).
AI pushed us to completely revamp our Text-to-Speech (TTS) system to take advantage of streaming responses from LLMs. While local AI models can be slow, we use a simple trick to make the delay almost unnoticeable. Now, both Piper (our local TTS) and Home Assistant Cloud TTS can begin generating audio as soon as the LLM produces the first few words, improving the speed of the spoken response by a factor of ten.
Prompt: “Tell me a long story about a frog”
Setup
Time to start speaking Cloud, non-streaming
6.62 sec Cloud, streaming
0.51 sec (13x faster) Piper, non-streaming
5.31 sec Piper, streaming
0.56 sec (9.5x faster) Ollama gemma3:4b on an RTX 3090, and Piper on an i5
Great hardware to work with AI
People built some really cool voice hardware, from landline telephones to little talking robots, but the fact that it was so DIY was always a barrier to entry. To make our voice assistant available to everyone, we released the Home Assistant Voice Preview Edition. This is an easy and affordable way to try Home Assistant Voice. It has some seriously powerful audio processing hardware inside its sleek package. If you were on the fence about trying out voice, it really is the best way to get started.
It’s now easier than ever to set up your Assist hardware to work with LLMs with our Voice Assistants settings page, and you can even assign a different LLM to each device. The LLM can recognize the room it’s in and the devices within it, making its responses more relevant. Assist was built to be a great way to control devices in your home, but with AI, it becomes so much more.
AI-powered suggestions
Last month, Home Assistant launched a new opt-in feature to leverage the power of AI when automating with Home Assistant. The goal is to shorten the journey from a blank slate to your finished idea.
When saving an automation or script, users can now leverage the new Suggest button: When clicked, it will send your automation configuration along with the titles of your existing automations and labels to AI to suggest a name, description, category, and labels for your new automation. Over the coming months, we’re going to explore what other features can benefit from AI suggestions.
To opt-in to this feature, you need to take two steps. First, you need to configure an integration that provides an AI Tasks entity. For local AI, you can configure Ollama, or you can also leverage cloud-based AI like Google, OpenAI, or Anthropic. Once configured, you need to go to the new AI Task preferences pane under System -&gt; General and pick the AI Task entity to power suggestions in the UI. If you don’t configure an AI Tasks entity, the Suggest button will not be visible.
AI Tasks gets the job done
Enabling AI Tasks does more than quickly label and summarize your automations; its true superpower is making AI easy to use in templates, scripts, and automations. AI Tasks allow other code to leverage AI to generate data, including options to attach files and define how you want that data output (for instance, a JSON schema).
We have all seen those incredible community creations, where a user leverages AI image recognition and analysis to detect available parking spots or count the number of chickens in the chicken coop. It’s likely that AI Tasks can now help you easily do this in Home Assistant, without the need for complex scripts, extra add-ons, or HACS integrations.
Below is a template entity that counts chickens in a video feed, all via a short and simple set of instructions. template: - triggers: - trigger: homeassistant event: start - trigger: time_pattern minutes: "/5" actions: - action: ai_task.generate_data data: task_name: Count chickens instructions: &gt;- This is the inside of my coop.

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Blog officiel)">

### 32. `FR` [Une alarme complète débarque dans Gladys !](data/articles/d82acdd403ebf60bf49d89c50164af56.html)
**Source:** Gladys Assistant (Blog officiel)
La sécurité, c'est la base de la domotique. Aujourd'hui, une alarme complète débarque dans Gladys pour vous permettre de gérer la sécurité de votre maison.

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 33. `FR` [Blocage balenahetcher et ubuntu](data/articles/3c6d808cb3de0d45d96f8724c108b93e.html)
**Source:** Gladys Assistant (Forum)
Bonjour à tous
Novice j’ai réussi je ne sais à créé mon compte Gladys mais en activant essai de Gladys + j’ai du sauter des épisodes, depuis plus rien. Ça c’était sur mon pc perso.
Depuis j’ai récupéré un mini pc sur lequel y serra gladys.
Si je comprend bien on télécharge Ubuntu sur mon perso, balenahetcher, je flasch Ubuntu et quand je retourne sur balenahetcher plus de possibilités de sélectionner SELECT TARGET la flèche de ma souris est remplacé par un sens interdit.
Auriez vous une idée du problème.
1 message - 1 participant(e)
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant Community Forum (Latest)">

### 34. `EN` [Hue Hub Pro - what is Internet access for?](data/articles/09306eb601a36af4c0fc25eb86e334ee.html)
**Source:** Home Assistant Community Forum (Latest)
Recently moved from a hue hub to a hub pro. Everyting is working, both in the Hue iPhone app and Home assistant.
Going through HA under the Hue Hub pro I spotted a toggle for internet access - it is off and greyed out. Just wondering what it is or does and why it is greyed out. Everything seems to work, and I can’t test by toggling it on. 1 post - 1 participant
Read full topic

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 35. `FR` [Compatibilité Ugreen Dh2300](data/articles/18838638949b44a93fe2c2f405c35d27.html)
**Source:** Gladys Assistant (Forum)
Bonjour je souhaiterai m’équiper d’un Nas Ugreen DH2300 (Octo Core ARM Rockchip RK3576 cadencé à 2,2 GHz, accompagné de 4 Go de RAM DDR4) et j’aimerais savoir si Gladys pourrait tourner sur ce type de matériel en utilisant Docker ou ai je besoin d’un modèle plus puissant ?
@pierre-gilles
3 messages - 2 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="HomeGenie (GitHub Releases)">

### 36. `EN` [v2.0.7](data/articles/ba1ca3778c9baf0916648d256400e851.html)
**Source:** HomeGenie (GitHub Releases)
HomeGenie v2.0.7 - AI Vision &amp; Integrated NVR
Welcome to HomeGenie 2.0.7! This major update transforms your smart home setup into a cutting-edge, AI-powered video surveillance platform. We've completely rewritten how HomeGenie handles cameras and added a built-in Network Video Recorder (NVR) that works seamlessly with our newest Artificial Intelligence models.
Here is what’s new: Smarter, Faster AI
Next-Gen Object Detection: We have upgraded our AI engine to support YOLO26, the absolute latest generation of AI vision models. It is faster, more accurate, and catches details like never before.
Smarter Text Processing: The underlying LLamaSharp engine has been updated, making text-based automations and local LLM processing snappier.
Total Performance Control: Worried about AI using all your CPU/GPU? You can now set a "Max Requests Per Second" limit on Object Detection, Pose Estimation, and Segmentation. Your system stays perfectly responsive while still catching all the action. The "AI Vision Hub" Dashboard
Keep an eye on everything at once. We've introduced the AI Vision Hub, a brand-new dashboard tailored for security. You can pin up to 5 live camera feeds side-by-side, watching real-time AI bounding boxes and detections directly on the video streams. Built-in Smart NVR (Network Video Recorder)
You no longer need third-party software to record your cameras. HomeGenie now includes a highly optimized, enterprise-grade NVR system out of the box.
AI-Triggered Recording: Why record hours of empty rooms? HomeGenie’s NVR talks directly to the AI engine. You can set it to record only when a specific object (like a person or a car) is detected, saving massive amounts of disk space. Continuous recording is also available.
Ultra-Efficient Saving: If your camera supports standard video streams, HomeGenie saves the footage without re-encoding it. This means you can record dozens of HD cameras even on low-power devices like a Raspberry Pi without breaking a sweat.
Makes "Dumb" Cameras Smart: Got a cheap camera that only provides static JPEG snapshots? HomeGenie automatically stitches those images together in the background, turning them into a smooth, live video stream for your dashboards.
Beautiful Playback &amp; Organization: All recordings are neatly organized by day. The interface instantly loads durations, file sizes, and generates smart thumbnails for your clips so you can quickly find the exact moment you are looking for.
Set It and Forget It: Turn on the auto-cleanup feature, and HomeGenie will automatically delete footage older than your specified number of days, ensuring your hard drive never fills up.
Full Changelog: v2.0.6...v2.0.7

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant Community Forum (Latest)">

### 37. `EN` [Need help with a browser mod entity script service](data/articles/fa4f0b2bd9c0d2c358b9cb374a7c92c8.html)
**Source:** Home Assistant Community Forum (Latest)
so i use browser mod… and havent touched things in several years
here is a section of the code - type: custom:button-card template: bootstrap_button class: col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 entity: group.building_sound state_display: | [[[ var count = states['sensor.building_sound_on'].state; if (count == 1) return '1 Device On'; else return count + ' Devices On'; ]]] tap_action: action: fire-dom-event browser_mod: service: browser_mod.popup data: title: Building Sound large: true hide_header: false content: type: custom:bootstrap-grid-card global_col_class: col-xl-2 col-lg-2 col-md-3 col-xl-4 col-4 cards: - type: row cards: - entity: switch.stage_mixer_1 name: Stage Mixer type: entity-button icon: mdi:tune - entity: switch.stage_amp_1 name: Stage Amp type: entity-button icon: mdi:amplifier - entity: switch.building_door_1_speaker name: Building Door Speaker 1 type: entity-button icon: mdi:speaker - entity: script.turn_on_sound_equipment_and_am640 name: Turn On Equip &amp; 640 type: entity-button icon: mdi:speaker - service: script.turn_off_sound_equipment_and_am640 name: Turn Off Equip &amp; 640 type: button icon: mdi:speaker so i cant get the script to run.
1 post - 1 participant
Read full topic

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant Community Forum (Latest)">

### 38. `EN` [Notes on Migrating to Z-Wave 1.0.1](data/articles/83cd2124e2d216ea300c691d153f1dc6.html)
**Source:** Home Assistant Community Forum (Latest)
I just did a test migration to Z-Wave 1.0.1 following these instructions, which I realize might not be the final version.
I don’t know if this is helpful, but I took some notes about a few things I found confusing.
Overall, it was pretty smooth. Personally, I prefer configuring z-wave in ZUI and I’m not quite clear if that’s possible with the core app now. Will the old ZUI app still be available?
(click for more details) 8 posts - 3 participants
Read full topic

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Arduino Blog">

### 39. `EN` [Turning a climbing wall into an interactive game](data/articles/58c6a7f8ec7857221b4fbe07cd3db2e2.html)
**Source:** Arduino Blog
Artificial climbing walls are important for training, as few people can get to real rock walls regularly enough to keep up with practice. But like anything else, that can become boring if you’re just doing the same thing over and over again. To keep things fresh and fun, Superbender turned his indoor climbing wall into […]

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 40. `FR` [Premiere panne totale](data/articles/da14e98c89f0486ac87a16af72dbb621.html)
**Source:** Gladys Assistant (Forum)
bonjour.j’ai simplement lancé dans gladys une mise à jour en cliquant sur…mise à jour….et ma configuration a sauté.il ne reconnait plus mon mail.je suis temp-user…j’avais fait une copie du dossier gladys dans var/lib.est ce qu’une copie de ce dossier me redonnera l’acces? merci
21 messages - 3 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant Community Forum (Latest)">

### 41. `EN` [Recommendations for path forward on hardware for HA in small home](data/articles/ed3057421424fd8a160538648332b135.html)
**Source:** Home Assistant Community Forum (Latest)
I currently have a 1500 square foot 3 floor home with full wired and wireless network using VLAN’s and Home Assistant docker running on a 24/7 unRaid server. I currently have a number of Kasa WiFi switches and outlets in the system and would like to look at converting to Z-Wave for lighting control but have a couple of complications. There are 3 BLE ceiling fans with integrated lights that I would like to convert to Z-Wave control but haven’t figured out a simple way to accomplish this. I am also wondering if a standalone HA server would be better than running on the unRaid server?
6 posts - 3 participants
Read full topic

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Arduino Blog">

### 42. `EN` [Find out what’s Arduino’s big news at Embedded World 2026!](data/articles/f0b5d823c65999156ace0abcb5546eff.html)
**Source:** Arduino Blog
Mark your calendars: we’re heading to Embedded World 2026 (Nuremberg, Germany – March 10-12) and we can’t wait to see you there! Visit us in Hall 3, Booth #555 for live demos, hands-on experiences, and – here’s the big one – a major product announcement you won’t want to miss. We’re unveiling something revolutionary, and Embedded World […]

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 43. `FR` [Ouverture de la page Intégrations sur Favoris](data/articles/ff189825c41043caf09f65933fc301a7.html)
**Source:** Gladys Assistant (Forum)
Suite à la création d’une option “Favoris” dans les intégrations, je propose que l’ouverture de la page “Intégrations” se fasse par défaut sur les “Favoris” s’il y en a.
ref : Gladys Assistant 4.68 : Matterbridge, intégrations favorites et Tasmota amélioré Actualités 1 message - 1 participant(e)
Lire le sujet en entier

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 44. `FR` [Gladys Assistant 4.69 : Zigbee2mqtt passe sur Ember et suivi énergétique Tasmota](data/articles/0c527728486c00ad1c81d826e61adaa7.html)
**Source:** Gladys Assistant (Forum)
Bonjour à tous,
Une nouvelle version de Gladys Assistant est disponible Voici les nouveautés de cette version :
Zigbee2mqtt : Ajout du nouveau driver Ember
Zigbee2mqtt propose désormais un nouveau driver, Ember, pour certains dongles comme le dongle Sonoff ZBDongle-E par exemple.
L’intégration Zigbee2mqtt dans Gladys vous permet désormais de sélectionner ce driver Ember pour les dongles compatibles.
Si vous utilisez EZSP, Zigbee2mqtt ne touchera pas à votre installation sans action de votre part, pour éviter de casser votre installation. La stabilité est une valeur très importante du projet, et cette mise à jour a été pensé pour ne pas impacter votre quotidien.
Si vous souhaitez passer à Ember, c’est possible, mais il faudra sûrement mettre à jour le firmware de votre dongle Zigbee avant.
Par exemple, pour le Sonoff Dongle-E, l’intégration vous offre la possibilité de sélectionner le driver de votre choix entre « Ember » (le nouveau par défaut), et l’ancien EZSP : Si vous testez le nouveau driver, et que votre firmware n’est pas compatible, pas de panique, vous verrez un message : Vous pourrez alors soit mettre à jour le firmware, soit repartir sur EZSP en attendant.
N’hésitez pas si vous avez des questions Un grand merci à @cicoub13 pour cette contribution !
Dashboard : Amélioration de l’affichage des capteurs d’ouverture de porte
L’affichage des capteurs d’ouverture de porte sur le dashboard a été amélioré pour une meilleure lisibilité.
Désormais, on affiche « Ouvert/Fermé », au lieu de la petite icône de cadenas qui n’était pas très lisible.
Tasmota : Ajout du suivi énergétique
Les appareils Tasmota sont désormais intégrés au suivi de l’énergie.
Merci à @Terdious pour ce développement Pour mettre à jour, c’est automatique, ou vous pouvez forcer la mise à jour dans les paramètres.
Bonne fin de semaine à tous !
12 messages - 6 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="openHAB Community (Latest)">

### 45. `EN` [Ephemeris in dsl](data/articles/0dd5b0533727fd68f7c6bfb427905c13.html)
**Source:** openHAB Community (Latest)
Hi,
Can
If ( !Ephemeris.isWeekend() ) Work or its something AI made up?
Also, on the forum here I found info that I could use just isWeekend in dsl, without Ephemeris
So in that case, would !isWeekend() work to trigger only on the workdays?
3 posts - 3 participants
Read full topic

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 46. `EN` [Bad Domoticz restore... nothing new is saving..](data/articles/475a76e4a9f9cb326d1203964831edb0.html)
**Source:** Domoticz (Forum News)
After losing my system...
All of my auto backups where corrupt.
I had to go back to a backup from 2023 - with the new 2025 domoticz.
I've added back in all the new devices, and removed the old switches that are no-longer part of my system...
However - whenever I reset the windows pc that is running domoticz, all my newly added devices disappear, and the old switches come back.
Any ideas?
Statistics: Posted by binbo — Thursday 26 February 2026 23:20 — Replies 1 — Views 151

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 47. `EN` [Feature request: 3-phase voltage device](data/articles/99b5ef082b619bd055e30191e330c43f.html)
**Source:** Domoticz (Forum News)
Hi all,
I would like to request a new dummy device type in Domoticz for measuring 3-phase voltage.
Currently, we have a dummy device for a 3-phase current (ampere) meter, which works very well. It would be great to have a similar option for voltage, allowing users to input and display voltage values for all three phases.
Thanks for considering!
Statistics: Posted by highvoltage — Thursday 26 February 2026 22:14 — Replies 1 — Views 228

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Adafruit Blog">

### 48. `EN` [Cabinet – Wall Mount Trash Bag Holder #3Dprinting #3DThursday](data/articles/e1d525f57ae5be144ed4811e19eb0728.html)
**Source:** Adafruit Blog
LEM shared this project on MakerWorld! This is a useful and practical print, apparently I’m good at hiding things on the inside of cupboard doors. This solves the problem of those bulky boxes under your kitchen sink. We always buy the bulk pack to save a few coins, they take up a lot of space. […]

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 49. `FR` [Widget Scène : Pouvoir trier la liste](data/articles/2910ab6ec2ca54800f71d5354d9cf708.html)
**Source:** Gladys Assistant (Forum)
Ref cette discussion : Tri des scènes dans un widjet
Les scènes sont triées alphabétiquement dans un widget, ça serait cool de pouvoir les organiser de manière non alphabétique sans avoir à jongler avec les noms des scènes.
1 message - 1 participant(e)
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 50. `EN` [Custom graph enhancement](data/articles/2ca81e274f58c31c8763085cd4bc2488.html)
**Source:** Domoticz (Forum News)
Hello,
would it make sense to be able adding any analog values to the graph, not necessarily only related to environment sensors like values?
For example it would be interesting to be combining external temperature and gas consumption for examble.
By the way, what is the set point check box for? I don't have any values there although I do have thermostatic radiator valves with setpoint.
Statistics: Posted by Patricen — Thursday 26 February 2026 15:56 — Replies 0 — Views 134

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Arduino Blog">

### 51. `EN` [From theory to hardware: Cristian Castro Lagos on control engineering with Arduino](data/articles/e5a3e2f0cd2690356623bea7df96c34f.html)
**Source:** Arduino Blog
Control theory is beautiful on paper – elegant equations, perfectly modeled systems, textbook-perfect responses. But between the mathematical ideal and the physical system lies a gap that trips up many engineers: noise, timing constraints, actuator limits, and the stubborn reality of hardware that refuses to behave exactly as the model predicts. Cristian Castro Lagos, a […]

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 52. `EN` [Error: RFXCom: Error opening serial port!](data/articles/eac32c1293e31e3ba0619dbb5c2a4b3d.html)
**Source:** Domoticz (Forum News)
After some retries I succesfully migrated to beta build 17277 and converted to systemd control. Since that time my RFXCom won't start anymore stating that the serial port cannot be opened. The serial port is identified by serial/by-id and present in the harware configuration.
Is there a relation to the (many) latest changes? Are there ways to discover the cause of the problem?
Statistics: Posted by Doler — Thursday 26 February 2026 14:24 — Replies 2 — Views 175

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Adafruit Blog">

### 53. `EN` [Sweet Bow Silk Pen Holder #3DThursday #3DPrinting](data/articles/59cbe103223b1b156c4b98a39ca7e4c9.html)
**Source:** Adafruit Blog
user_1850721599 shares: I like to create cute things to make life better. If you like my work, I hope to get your support. Thank you~ I like to create cute things to make life better. If you like my work, I hope to get your support. Thank you~ download the files on: https://makerworld.com/en/models/2327118-sweet-bow-silk-pen-holder Every Thursday […]

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 54. `FR` [Tri des scènes dans un widjet](data/articles/fc59ee4af78b54fa9129c8914fddaeb8.html)
**Source:** Gladys Assistant (Forum)
J’appelle certaines scènes avec « On » et « Off » p.ex. “Salon On” et “Salon Off” : Rien de très original j’en convient, ce qui donne ça : J’aimerai pouvoir mettre le « On » au dessus… Est-ce qu’il est possible pouvoir choisir de l’ordre des scènes ou est-ce que je fais une demande de fonctionnalité ?
5 messages - 3 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 55. `EN` [How to find domoticz log file](data/articles/756b2c390d89c630e21949c5efeecbdc.html)
**Source:** Domoticz (Forum News)
Hello,
1 - Context
Domoticz V2025.2 (build 17277) running on bookworm
Build Hash fac6d8f
Compile Date 2026-02-26 06:42:05
dzVents Version 3.1.11
Python Version 3.11.2 (main, Apr 28 2025, 14:11:48) [GCC 12.2.0]
2 - How to find domoticz log file
I switched from the deprecated mean to create domoticz service using the /etc/init.d/domoticz.sh file to the preferred one in /etc/systemd/system/domoticz.service.
Previously i recorded domoticz messages in "/var/log/domoticz.log" by setting in domoticz.sh file the line: DAEMON_ARGS="$DAEMON_ARGS -log /var/log/domoticz.log"
Now when using /etc/systemd/system/domoticz.service I see the domoticz messages in domoticz UI but I am not able to find in which file they are stored. I also would like to define the file name supporting these messages.
I would be grateful if someone could help me or give me a hint.
BR
Statistics: Posted by meal — Thursday 26 February 2026 10:24 — Replies 7 — Views 331

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 56. `FR` [Icônes "cadenas" trop petite](data/articles/31ac1caee98cf10611969a89e59a6af5.html)
**Source:** Gladys Assistant (Forum)
Bonjour,
J’ai des capteurs d’ouverture, et je trouve l’icône de cadenas trop petite sur le tableau de bord, au point que j’ai du mal à distinguer un cadenas ouvert de fermé.
8 messages - 4 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 57. `FR` [Initialisation des paramètres d'un nouvel appareil](data/articles/bee5ad5debe9631964473b519bccd522.html)
**Source:** Gladys Assistant (Forum)
Bonjour à tous,
Lorsque j’ai ajouté en zigbee mon interrupteur pour volet roulant, j’aurai aimé que Gladys me propose à ce moment là de configurer ses paramètres de fonctionnement. Par exemple, j’ai un “temps de monté / descente” et le “sens du moteur” à configurer.
Ça serait cool si Gladys pouvait nous faciliter la tâche. Une fois que l’on sait que l’on peut le faire depuis Z2M ça va, mais ça rendrait Gladys plus accessible pour les nouveaux (comme moi)
3 messages - 3 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 58. `FR` [Jauges : améliorations](data/articles/52f9511ff811004a4b59ae4e56eee20c.html)
**Source:** Gladys Assistant (Forum)
J’ai enfin (re)mis en service mon système de mesure de la quantité d’eau restante dans mes citernes et ai quelques améliorations du widget à demander.
Serait-il possible que le nom soit éditable ou que la feature soit indiquée plutôt que le device ? Ici, je ne sais pas différencier les deux citernes sur le dashboard : Sur mobile, le widget empêche le défilement. J’explique… Si je mets mon doigt sur le widget, impossible de faire monter ou descendre la page, ce n’est pas “tactile”.
Est-il possible d’améliorer cela lors de la prochaine amélioration UX ?
3 messages - 3 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="openHAB Community (Latest)">

### 59. `EN` [Javascript in OH5.1.3](data/articles/24d84446f57cf82d285daf37a7636d75.html)
**Source:** openHAB Community (Latest)
Hi,
I’m trying to upgrade from 5.0.3 to 5.1.3, but the changes to javascript have broken some of my rules and I don’t understand enough to figure it out.
I have been using things like
items.metadata.itemchannellink.replaceItemChannelLink(name, channeluid)
items.getItem(nameofanitem).replaceMetadata(blah blah) and others from Home - openHAB JS
When upgrading to 5.1.3, these rules fail when hitting these parts.
Errors like:
Failed to execute rule systemBuilder-Lights: TypeError: undefined has no such function “replaceItemChannelLink”: TypeError: undefined has no such function “replaceItemChannelLink”
This feels like something to do with the new way things are injected? In the javascript settings page of the openhab UI, it looked like everything was set to automatic, but I don’t really understand what I’m looking at.
Can anyone help?
5 posts - 3 participants
Read full topic

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 60. `EN` [crash after Watchtower/Docker update to Domoticz V2025.2 (build 17268)](data/articles/1ada3d6cd042fc82da5c2a79c27fd9a4.html)
**Source:** Domoticz (Forum News)
NAS did a Watchtower update in Docker and Domoticz crashed
Log:
2026-02-25 13:00:28.418 Launch: Begin container self-repair
2026-02-25 13:00:28.630 Launch: End container self-repair
2026-02-25 13:00:28.632 Launch: Running customstart.sh
2026-02-25 13:00:28.650 Status: Domoticz V2025.2 (build 17268) (c)2012-2026 GizMoCuz
2026-02-25 13:00:28.650 Status: Build Hash: 5bae973be, Date: 2026-02-25 10:10:03
2026-02-25 13:00:28.650 Status: Startup Path: /opt/domoticz/
2026-02-25 13:00:28.665 Sunrise: 07:30:00 SunSet: 18:08:00
2026-02-25 13:00:28.665 Day length: 10:37:00 Sun at south: 12:49:00
2026-02-25 13:00:28.665 Civil twilight start: 06:56:00 Civil twilight end: 18:42:00
2026-02-25 13:00:28.665 Nautical twilight start: 06:17:00 Nautical twilight end: 19:21:00
2026-02-25 13:00:28.665 Astronomical twilight start: 05:38:00 Astronomical twilight end: 20:01:00
2026-02-25 13:00:28.706 Status: PluginSystem: Started, Python version '3.11.2', 4 plugin definitions loaded.
2026-02-25 13:00:28.716 Active notification Subsystems: email (1/13)
2026-02-25 13:00:28.718 Status: WebServer(HTTP) started on address: :: with port 80
corrupted size vs. prev_size
2026-02-25 13:00:28.719 Error: Domoticz(pid:1, tid:1('domoticz')) received fatal signal 6 (Aborted)
2026-02-25 13:00:28.719 Error: siginfo address=0x1, address=0x7f955511eeec
Statistics: Posted by Huntback — Wednesday 25 February 2026 13:31 — Replies 7 — Views 346

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 61. `EN` [2025.2 beta 17265 fails to start](data/articles/8b4a8bcca6d2fb5fa86fe914bc04f64b.html)
**Source:** Domoticz (Forum News)
Just updated my test system from 2025.2 17252 to 17265 and it fails to restart. Update counter goes all the way to 99 which is unusual. First i thought we had the old issue back again so did a stop and start from cmd line but nothing. Performing a stop and start and then a systemctl status gets me this, but no gui and despite it saying it's started none of my switches work so i'd say it's not actually running.
Feb 25 07:21:47 domoticz systemd[1]: Starting domoticz.service - LSB: Home Automation System...
Feb 25 07:21:47 domoticz domoticz.sh[1699517]: Time synchronized, starting Domoticz...
Feb 25 07:21:47 domoticz domoticz.sh[1699525]: 2026-02-25 07:21:47.607 Status: Domoticz V2025.2 (build 17265) (c)2012-2026 GizMoCuz
Feb 25 07:21:47 domoticz domoticz.sh[1699525]: 2026-02-25 07:21:47.608 Status: Build Hash: 66fd1d463, Date: 2026-02-25 05:51:29
Feb 25 07:21:47 domoticz domoticz.sh[1699525]: 2026-02-25 07:21:47.608 Status: Startup Path: /home/pi/domoticz/
Feb 25 07:21:47 domoticz domoticz.sh[1699525]: domoticz: Domoticz is starting up....
Feb 25 07:21:47 domoticz domoticz[1699525]: Domoticz is starting up....
Feb 25 07:21:47 domoticz systemd[1]: Started domoticz.service - LSB: Home Automation System.
Update. Rolled back to 17252 and all good.
Statistics: Posted by Dave21w — Wednesday 25 February 2026 8:25 — Replies 17 — Views 559

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="openHAB Community (Latest)">

### 62. `EN` [OH3 all timestamps/graphs 30 minutes behind real time](data/articles/735a9d921dd22c0b96ba802a80ccdd34.html)
**Source:** openHAB Community (Latest)
Hello.
I found out that my OH3 has an delay of 30minutes in all Timestamps like network:ping last seen, in graphs created from values of Modbus (Smartmeter, frequency, Power, U,I) but it shows the correct ntp-time. The Result is that frequency and Powercharts are everytime shown half an hour behind the real local time and it seems OH-internal Timestamps (rrd-recordings) did the same. I checked the regional and ephemerial settings in the UI but i can’t find a misconfigured point.
I need Help to find the point where this could be wrong sat up.
Sorry, Did not write often in english (Germany) and the editor here is much slower as OH on my old Netbook there.
Platform information: Hardware: Acer Aspire one (Atom 32bit)
OS: Lubuntu
openHAB version: 3.4.2
4 posts - 2 participants
Read full topic

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="openHAB Community (Latest)">

### 63. `EN` [Managing openHAB Rules Like Production Software: Testing, Automation, and Troubleshooting](data/articles/5b0e256a93fc65dc399628d45072c0de.html)
**Source:** openHAB Community (Latest)
Hi all,
as I’m using openHAB since more than 10 year regressions problems, and troubleshooting after upgrades are well known to me. So - as I tried to leverage AI agents to create a system to create testable rules and widgets - and I’m quite happy with the result. As usual, my time is very limited - especially as I want to finish the Jellyfin binding to make it available to all users (locally it is under testing with 5.1.2) … So I dared to task the AI to describe the setup - not ideal maybe, but I hope it serves as an inspiration on how to achieve a stable setup over time; and preferred to not sharing the idea at all.
Note: There are quite some simplifications in the summary - as the whole container, network setup and AI agent setup is omitted.
with kind regards,
And now I give the word to Claude: Note: This article was automatically generated with AI. The rule modifications, tests, and troubleshooting workflows themselves are developed and refined using AI agents as coding partners. The approach documented here reflects our operational practices, not necessarily universal “best practices.”
Introduction
Home automation rules are complex. They integrate multiple devices, handle edge cases, and run 24/7 with minimal supervision. Yet many openHAB users manage rules the way they manage configuration files—manually, with minimal testing, and with limited visibility into execution.
Our Setup: 90 production rule files, 6 shared library modules, 92 unit tests—all deployed and managed using the testing and deployment pipeline described below.
This article describes our approach: automated regression testing with Jest, system endpoint testing with Puppeteer, live interaction via the openHAB REST API, and interactive troubleshooting with Karaf. Each tool addresses a specific part of the development lifecycle.
Overview: The Rule Development Workflow
Rule Code (JavaScript) ↓ Local Unit Tests (Jest) ↓ System Integration Tests (Puppeteer + REST API) ↓ Deploy to openHAB ↓ Live Troubleshooting (Karaf Console) Each tool serves a specific purpose:
Jest → unit tests catch logic errors before deployment
Puppeteer + REST API → integration tests validate end-to-end behavior
Karaf → interactive debugging when things go wrong
Part 1: Regression Testing with Jest
Jest runs unit tests in milliseconds without requiring an openHAB instance. It handles the core logic layer: parsing, decision-making, state coordination. openHAB injects runtime globals (items, rules, events), so tests mock these to isolate the code under test.
Test Structure: Unit Tests vs. Integration Tests
(click for more details)
Integration Tests: Testing System Interaction (click for more details)
Setup: Package Configuration
(click for more details)
Testing Approach: Mocking and Isolation
(click for more details) Part 2: End-to-End Testing with REST API and Puppeteer
Integration tests validate the full lifecycle: command → item updates → rule triggers → side effects occur. The REST API and Puppeteer are the test interfaces to a real openHAB instance.
Using the REST API for Integration Tests
The openHAB REST API provides endpoints for items, rules, and logs. From Node.js:
// Get item state
const getItemState = async (itemName) =&gt; { const response = await fetch(`http://localhost:8080/rest/items/${itemName}`); return response.json();
}; // Trigger a rule
const triggerRule = async (ruleUid) =&gt; { return fetch(`http://localhost:8080/rest/rules/${ruleUid}/runnow`, { method: "POST" });
}; These calls simulate what a user’s dashboard or external system would do. They verify rules respond correctly to real events.
Puppeteer for UI Testing
Puppeteer automates a browser to test dashboards and sitemap pages. Key techniques:
page.goto() → navigate to openHAB
page.click() → simulate user interaction
page.waitForFunction() → wait for async state updates
page.$eval() → query and verify DOM content
The pattern is: send a REST command → wait for UI to update → verify the change is visible:
// E2E: Verify UI reflects item state change
await fetch(`http://localhost:8080/rest/items/Light`, { method: "POST", body: "ON"
}); await page.waitForFunction(() =&gt; { const element = document.querySelector("[data-item='Light']"); return element?.textContent.includes("ON");
}); This catches issues that pure API tests miss: slow UI updates, missing bindings, incorrect state formatting.
Part 3: Deployment: Rules vs. Libraries
openHAB rules and shared libraries are deployed using fundamentally different mechanisms. This distinction matters: it affects how you structure code, how you test, and how you troubleshoot.
Architecture: How Tests Feed into Deployment
Before any code reaches openHAB, the deployment system performs comprehensive sanity checks:
Source Code (rules/*.js + metadata, lib/*.js) ↓ [Test Assert] npm test - unit tests, error paths, edge cases ↓ [Sanity Check] Verify GraalVM compatibility (JSDoc + IIFE incompatibility) ↓ [Sanity Check] Verify dependencies exist (all required shared modules) ↓ [Sanity Check] Verify metadata IDs are present (triggers, actions must have IDs) ↓
[Rules] Strip IIFE wrapper + construct REST payload with metadata
[Libs] rsync to node_modules with checksum verification ↓ REST API POST/PUT with proper action/trigger configuration ↓ [Sanity Check] Verify rule status transitions to IDLE (not UNINITIALIZED) ↓ [Production] Enable rule Shared Libraries: rsync Deployment with Verification
Shared libraries (modules in lib/) deploy via rsync to the remote openHAB server’s node_modules directory:
(click for more details)
Rules: IIFE Stripping and REST API Deployment
Rules require transformation:
IIFE wrapper stripped (added for Jest, not needed in openHAB)
Metadata merged (triggers, actions, tags from JSON)
IDs generated for triggers and actions
REST payload constructed with proper structure
GraalVM cache cleared (delete/recreate)
(click for more details)
Metadata Separation and ID Generation (click for more details)
GraalVM Cache Bypass Strategy (click for more details)
Pre-Deployment Sanity Checks
Before any REST API call, the deployment script validates:
Check
Failure Mode Files exist
Obvious error, deployment stops Tests pass
Catch logic errors in Jest before live Dependencies deployed
Missing library → require() fails at runtime Trigger/action IDs present
Missing IDs → rule status UNINITIALIZED Action type is correct
Must be script.ScriptAction, not application/javascript No GraalVM incompatibilities
JSDoc+IIFE pattern → silent execution skip Server responds
API accessible, auth valid Rule reaches IDLE
Indicates successful initialization Example: Missing Dependency Check
# Verify required modules are deployed
for module in openhab-utils alert-tracker multimedia-constants; do if grep -q "require('$module')" rules/012d853fc5.js; then ssh openhab-host ls conf/automation/js/node_modules/$module/index.js || { echo " Module not deployed: $module" exit 1 } fi
done Live Interaction: REST API for Testing and Monitoring
After deployment, the REST API is your window into rule execution:
# Trigger a rule manually
curl -X POST http://localhost:8080/rest/rules/012d853fc5/runnow # Check rule status
curl http://localhost:8080/rest/rules/012d853fc5 | jq '.statusInfo' # List all rules and their status
curl http://localhost:8080/rest/rules | jq '.[] | {uid, name, enabled, statusInfo}' // After stripping: rules/alert-stale-items.js (deployed to openHAB) ("use strict"); const alertTracker = require("alert-tracker");
const { safeGetItem } = require("openhab-utils"); const checkStaleItems = () =&gt; { // ... implementation ...
}; // Direct call (openHAB rule engine triggers this)
checkStaleItems(); How Stripping Works:
The deployment script uses Python regex to detect and remove the IIFE:
Arrow IIFE: ((exports) =&gt; { ... })(...)
Removes the outer wrapper
Removes the inner if (exports) { ... } export block
Replaces the if (typeof event !== "undefined") { runRule(); } guard with direct call
Function IIFE: (function () { ...

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 64. `FR` [Problème visualiation docker page systeme](data/articles/43624d8318b062ddd1b8a309432aab6a.html)
**Source:** Gladys Assistant (Forum)
Bonsoir,
Je viens de remarquer que je vois des conteneurs dans la page système de Gladys : Alors que j’ai que ceci : Je pense qu’il y a un petit problème 4 messages - 2 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 65. `FR` [Problème de remontée prise Zigbee](data/articles/b618f9df495774f78f5446d4c2cbc470.html)
**Source:** Gladys Assistant (Forum)
Bonsoir,
Précision sur le matériel utilisé :
Pc kit de démarrage via @pierre-gilles
Dongle zigbee sonoff P
Prise zigbee IKEA
Depuis hier après-midi mes prises ne remontent plus en temps réel la consommation, voire même elle se fige à une donnée.
Une idée pour résoudre ce problème, s’il vous plaît ? Machine à laver éteinte.
26 messages - 4 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 66. `FR` [Erreur démarrage Z2m](data/articles/ccee57b6f1f50c01364349f358ded69f.html)
**Source:** Gladys Assistant (Forum)
Bonsoir,
J’ai dû déplacer mon serveur et en le remontant, j’ai dû me tromper de port USB pour mon dongle Sonoff… et donc lorsque je redémarre le tout, j’ai maintenant :
Gladys log : Z2m log : J’ai essayé de troubleshooter mais je ne suis pas au top avec tout ça.
Je veux bien une petite séance de troubleshootage qui pourra servir à tous j’espère Merci d’avance.
13 messages - 3 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 67. `EN` ["Off Delay" no longer works..](data/articles/2525ced2079d99a5a781fb19e0dc070c.html)
**Source:** Domoticz (Forum News)
I've just updated my copy of domoticz.
Stupidly - i have no idea what version I had.
But I've updated to the latest version...
2025.2.16812 And i've noticed a device that used to work perfectly with an "off delay" of 1 second.
Now triggers for too long - and no longer works.
Statistics: Posted by binbo — Monday 23 February 2026 19:46 — Replies 7 — Views 397

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 68. `FR` [Zigbee2mqtt non fonctionnel](data/articles/174f67647aaf8a0431346cb347255df6.html)
**Source:** Gladys Assistant (Forum)
Hello,
Je ne sais pas si c’est depuis la mise à jour ou bien depuis ma modification de mqtt que j’ai passé dans docker mais plus aucun appareil zigbee2mqtt n’est controlable dans Gladys.
J’ai pas mal de logs comme ceci dans les logs :
2026-02-23T19:05:07+0100 handleMqttMessage.js:109 () Failed to convert value for device Prise baie informatique: Error: Zigbee2mqqt expose not found on device "Prise baie informatique" with property "linkquality". at Zigbee2mqttManager.readValue (/src/server/services/zigbee2mqtt/lib/readValue.js:16:11) at /src/server/services/zigbee2mqtt/lib/handleMqttMessage.js:105:31 at Array.forEach () at Zigbee2mqttManager.handleMqttMessage (/src/server/services/zigbee2mqtt/lib/handleMqttMessage.js:97:41) at MqttClient. (/src/server/services/zigbee2mqtt/lib/connect.js:60:12) at MqttClient.emit (node:events:519:28) at MqttClient._handlePublish (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:1277:12) at MqttClient._handlePacket (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:410:12) at work (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:321:12) at Writable.writable._write (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:335:5) at doWrite (/src/server/services/zigbee2mqtt/node_modules/readable-stream/lib/_stream_writable.js:409:139) at writeOrBuffer (/src/server/services/zigbee2mqtt/node_modules/readable-stream/lib/_stream_writable.js:398:5) at Writable.write (/src/server/services/zigbee2mqtt/node_modules/readable-stream/lib/_stream_writable.js:307:11) at TLSSocket.ondata (node:internal/streams/readable:1009:22) at TLSSocket.emit (node:events:519:28) at addChunk (node:internal/streams/readable:561:12) at readableAddChunkPushByteMode (node:internal/streams/readable:512:3) at TLSSocket.Readable.push (node:internal/streams/readable:392:5) at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23)
2026-02-23T19:05:07+0100 handleMqttMessage.js:109 () Failed to convert value for device Prise baie informatique: Error: Zigbee2mqqt expose not found on device "Prise baie informatique" with property "power". at Zigbee2mqttManager.readValue (/src/server/services/zigbee2mqtt/lib/readValue.js:16:11) at /src/server/services/zigbee2mqtt/lib/handleMqttMessage.js:105:31 at Array.forEach () at Zigbee2mqttManager.handleMqttMessage (/src/server/services/zigbee2mqtt/lib/handleMqttMessage.js:97:41) at MqttClient. (/src/server/services/zigbee2mqtt/lib/connect.js:60:12) at MqttClient.emit (node:events:519:28) at MqttClient._handlePublish (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:1277:12) at MqttClient._handlePacket (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:410:12) at work (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:321:12) at Writable.writable._write (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:335:5) at doWrite (/src/server/services/zigbee2mqtt/node_modules/readable-stream/lib/_stream_writable.js:409:139) at writeOrBuffer (/src/server/services/zigbee2mqtt/node_modules/readable-stream/lib/_stream_writable.js:398:5) at Writable.write (/src/server/services/zigbee2mqtt/node_modules/readable-stream/lib/_stream_writable.js:307:11) at TLSSocket.ondata (node:internal/streams/readable:1009:22) at TLSSocket.emit (node:events:519:28) at addChunk (node:internal/streams/readable:561:12) at readableAddChunkPushByteMode (node:internal/streams/readable:512:3) at TLSSocket.Readable.push (node:internal/streams/readable:392:5) at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23)
2026-02-23T19:05:07+0100 handleMqttMessage.js:109 () Failed to convert value for device Prise baie informatique: Error: Zigbee2mqqt expose not found on device "Prise baie informatique" with property "state". at Zigbee2mqttManager.readValue (/src/server/services/zigbee2mqtt/lib/readValue.js:16:11) at /src/server/services/zigbee2mqtt/lib/handleMqttMessage.js:105:31 at Array.forEach () at Zigbee2mqttManager.handleMqttMessage (/src/server/services/zigbee2mqtt/lib/handleMqttMessage.js:97:41) at MqttClient. (/src/server/services/zigbee2mqtt/lib/connect.js:60:12) at MqttClient.emit (node:events:519:28) at MqttClient._handlePublish (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:1277:12) at MqttClient._handlePacket (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:410:12) at work (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:321:12) at Writable.writable._write (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:335:5) at doWrite (/src/server/services/zigbee2mqtt/node_modules/readable-stream/lib/_stream_writable.js:409:139) at writeOrBuffer (/src/server/services/zigbee2mqtt/node_modules/readable-stream/lib/_stream_writable.js:398:5) at Writable.write (/src/server/services/zigbee2mqtt/node_modules/readable-stream/lib/_stream_writable.js:307:11) at TLSSocket.ondata (node:internal/streams/readable:1009:22) at TLSSocket.emit (node:events:519:28) at addChunk (node:internal/streams/readable:561:12) at readableAddChunkPushByteMode (node:internal/streams/readable:512:3) at TLSSocket.Readable.push (node:internal/streams/readable:392:5) at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23)
2026-02-23T19:05:07+0100 handleMqttMessage.js:109 () Failed to convert value for device Prise baie informatique: Error: Zigbee2mqqt expose not found on device "Prise baie informatique" with property "voltage". at Zigbee2mqttManager.readValue (/src/server/services/zigbee2mqtt/lib/readValue.js:16:11) at /src/server/services/zigbee2mqtt/lib/handleMqttMessage.js:105:31 at Array.forEach () at Zigbee2mqttManager.handleMqttMessage (/src/server/services/zigbee2mqtt/lib/handleMqttMessage.js:97:41) at MqttClient. (/src/server/services/zigbee2mqtt/lib/connect.js:60:12) at MqttClient.emit (node:events:519:28) at MqttClient._handlePublish (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:1277:12) at MqttClient._handlePacket (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:410:12) at work (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:321:12) at Writable.writable._write (/src/server/services/zigbee2mqtt/node_modules/mqtt/lib/client.js:335:5) at doWrite (/src/server/services/zigbee2mqtt/node_modules/readable-stream/lib/_stream_writable.js:409:139) at writeOrBuffer (/src/server/services/zigbee2mqtt/node_modules/readable-stream/lib/_stream_writable.js:398:5) at Writable.write (/src/server/services/zigbee2mqtt/node_modules/readable-stream/lib/_stream_writable.js:307:11) at TLSSocket.ondata (node:internal/streams/readable:1009:22) at TLSSocket.emit (node:events:519:28) at addChunk (node:internal/streams/readable:561:12) at readableAddChunkPushByteMode (node:internal/streams/readable:512:3) at TLSSocket.Readable.push (node:internal/streams/readable:392:5) at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23)
2026-02-23T19:05:09+0100 handleMqttMessage.js:109 () Failed to convert value for device Capteur air salon: Error: Zigbee2mqqt expose not found on device "Capteur air salon" with property "humidity". at Zigbee2mqttManager.readValue (/src/server/services/zigbee2mqtt/lib/readValue.js:16:11) at /src/server/services/zigbee2mqtt/lib/handleMqttMessage.js:105:31 at Array.forEach () at Zigbee2mqttManager.handleMqttMessage (/src/server/services/zigbee2mqtt/lib/handleMqttMessage.js:97:41) at MqttClient.

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 69. `EN` [3 fase Amp meter shows just one zero iso 0,0,0](data/articles/fa9c94c2e4f0ebb7b4df8a3e9cad9312.html)
**Source:** Domoticz (Forum News)
Hi I am using a 3 fase Amp device Type " Current, CM113,Electrisave ".
It shows as expected the Amp values but if no current in all fases it just shows only one time zero. Is this as intended or is it a bug.
-Bart
Statistics: Posted by BartSr — Monday 23 February 2026 14:01 — Replies 2 — Views 242

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 70. `FR` [Erreur découverte Sonos](data/articles/ecfd46afa789e694d3bed98356f5fcd1.html)
**Source:** Gladys Assistant (Forum)
Bonjour,
J’essaie de découvrir mon Sonos Ray et je vois dans les logs ceci après plusieurs échecs :
2026-02-23T10:25:32+0100 errorMiddleware.js:68 (errorMiddleware) SonosDiscoveryError: No players found
@svrooij/sonos/lib/sonos-device-discovery.js:96:24)
@svrooij/sonos/lib/sonos-device-discovery.js:84:25)
Il y a clairement un timeout mais cette erreur vient trop vite &lt;10s.
Merci d’avance.
11 messages - 3 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 71. `FR` [Prise en charge des clés SMLIGHT via réseau](data/articles/8eb86e8037c4ae93a07837d5b214687b.html)
**Source:** Gladys Assistant (Forum)
Bonjour,
Suite à mon tutoriel ici :
https://community.gladysassistant.com/t/connexion-cle-smlight-a-zigbee2mqtt-sur-gladys-full-ssl-tls-mqtt-et-z2m-externe
J’ouvre cette demande de fonctionnalité concernant la prise en charge des clés SMLIGHT via le réseau sur le zigbee2mqtt de gladys Merci
1 message - 1 participant(e)
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 72. `EN` [email don't work](data/articles/f2a8ff12120847cb088ef96e619934aa.html)
**Source:** Domoticz (Forum News)
Hello,
"domoticz.email" was working fine until early February. But strangely, no emails have been sent since. I haven't changed any settings. The "Test" function in the settings works correctly. Thinking it might be a problem with my ISP, I changed the email address, but it didn't help.
A Python script on the same Raspberry Pi sends emails correctly using the original address. What's the problem?
Notice that I stay in beta 17099, due to recent problem with the beta versions.
Thank you
Statistics: Posted by Filnet — Monday 23 February 2026 9:51 — Replies 4 — Views 419

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 73. `EN` [unknown - still executing](data/articles/9a3af2174f46a9b0ae2623272205515e.html)
**Source:** Domoticz (Forum News)
Hello, Code: 2026-02-23 00:00:10.144 Error: EventSystem: Warning!, lua script dzVents script (unknown - still executing) has been running for more than 10 seconds2026-02-23 01:00:10.088 Error: EventSystem: Warning!, lua script dzVents script (unknown - still executing) has been running for more than 10 seconds2026-02-23 02:00:10.037 Error: EventSystem: Warning!, lua script dzVents script (unknown - still executing) has been running for more than 10 seconds2026-02-23 02:11:10.555 Error: EventSystem: Warning!, lua script dzVents script (unknown - still executing) has been running for more than 10 seconds2026-02-23 02:21:10.077 Error: EventSystem: Warning!, lua script dzVents script (unknown - still executing) has been running for more than 10 seconds2026-02-23 04:00:14.835 Error: EventSystem: Warning!, lua script dzVents script (unknown - still executing) has been running for more than 10 seconds2026-02-23 05:00:10.101 Error: EventSystem: Warning!, lua script dzVents script (unknown - still executing) has been running for more than 10 seconds2026-02-23 07:00:10.274 Error: EventSystem: Warning!, lua script dzVents script (unknown - still executing) has been running for more than 10 seconds2026-02-23 08:00:10.399 Error: EventSystem: Warning!, lua script dzVents script (unknown - still executing) has been running for more than 10 seconds2026-02-23 08:36:10.203 Error: EventSystem: Warning!, lua script dzVents script (unknown - still executing) has been running for more than 10 seconds2026-02-23 09:00:13.276 Error: EventSystem: Warning!, lua script dzVents script (unknown - still executing) has been running for more than 10 seconds
How find this "unknown''?
Command "executeShellCommand" should be the reason?
Thank for your help
Statistics: Posted by Filnet — Monday 23 February 2026 9:40 — Replies 0 — Views 245

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="openHAB Community (Latest)">

### 74. `EN` [VS Code - Error while connecting to the openHAB REST API](data/articles/d015b33bbe8841474cf649951bfccffe.html)
**Source:** openHAB Community (Latest)
Hi, everyone.
I’m running OH 4.3.1 on a Raspberry Pi (CENTOS 9).
For a while, I haven’t been able to connect to my OH from Visual Studio Code (macOS Tahoe 26.2), but I didn’t need it much before. Now I need it for code completion, but I can’t seem to get it to work. I keep getting the following errors:
openHAB Extension Output
openHAB vscode extension has been activated [Error - 4:14:14 PM] Connection to server is erroring. Shutting down server. [Error - 4:14:14 PM] Connection to server is erroring. Shutting down server. Could not reload items for HoverProvider Could not reload items for Items Explorer Could not reload items for Things Explorer --- Error: Error while connecting to openHAB REST API. Message: Error: connect EHOSTUNREACH 10.18.18.102:8080 - Local (10.18.18.4:53185) --- --- Error: Error while connecting to openHAB REST API. Message: Error: connect EHOSTUNREACH 10.18.18.102:8080 - Local (10.18.18.4:53186) --- openHAB Language Server Output
(node:11365) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. (Use `Code Helper (Plugin) --trace-deprecation ...` to show where the warning was created) Error: getaddrinfo ENOTFOUND openhabianpi at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:122:26) { errno: -3008, code: 'ENOTFOUND', syscall: 'getaddrinfo', hostname: 'openhabianpi' } OH is running. I can connect via a web browser and via SSH from my Mac’s Terminal.
I have deleted all global (User) connection settings and left only the ones at the Workspace level (.vscode/settings.json), as suggested in VS Code OH5 - Error while connecting to openHAB REST API. I also tried the other way around, with the connection strings in the User configuration, to no avail.
"openhab.connection.host": "10.18.18.102", "openhab.connection.authToken": "oh.VisualStudioCL.a0XXXXXXXXXXXXX”, "openhab.connection.port": 8080 The other settings are not in the textual configuration, and adding them there doesn’t change the outcome. I have checked that the ports are open in the firewall, and that they are listening using TCP
ss -tuln Netid State Recv-Q Send-Q Local Address:Port Peer Address:Port
tcp LISTEN 0 50 *:5007 *:*
tcp LISTEN 0 50 *:8080 *:*
tcp LISTEN 0 128 [::]:22 [::]:*
tcp LISTEN 0 50 *:8443 *:*
On OH, the LSP is listening on the same port: I even deleted the old token and created a new one.
However, I have not configured any ‘openhabianpi’ anywhere, so I don’t know where the LSP is getting that from.
I have restarted VS Code multiple times, as well as deleted the extension and installed it again.
What else am I overlooking?
2 posts - 1 participant
Read full topic

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 75. `FR` [Remplacement des icônes Feather par Lucide](data/articles/ce181926b409e4d2e785ac8c38d53fd2.html)
**Source:** Gladys Assistant (Forum)
Feature Thermostat complète
trouver une autre icone pour le mode Hors Gel, je voulais juste un flocon mais pas présente dans le jeux d’icône Feather)
Apparemment il nous manque 25 icônes par rapport à la dernière version (4.29.0) mais pas vu de flocons non plus.
3 messages - 2 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 76. `FR` [Changement lib Airplay](data/articles/e8d578d2addb1fb9631063f67ba184af.html)
**Source:** Gladys Assistant (Forum)
Bonjour à tous, dernièrement on a eu quelques soucis avec l’intégration Airplay. La lib utilisée pour se connecter à l’enceinte était un peu vieille, je l’ai forkée pour essayer de la garder à jour et la faire fonctionner avec les dernières versions de Node, mais une grosse partie du code n’est pas propre et ça passait par le binding de fonctions C++ ce qui rendait la maintenance complexe.
nouvelle lib qui fait la même chose en 100% Typescript, j’ai basculé dessus ça fonctionne aussi bien et ça sera plus simple à maintenir plus tard. Si certains utilisateurs Airplay veulent tester une image docker est disponible bertrandda/gladys:airplay.
2 messages - 2 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 77. `FR` [Mise à jour des tarifs énergétiques pour le suivi d'énergie](data/articles/688d4b04d1b1aa9035701d127fe8833d.html)
**Source:** Gladys Assistant (Forum)
Hello, On pourra ainsi archiver les anciens sujets si c’est utile et permettre à @pierre-gilles d’y accéder plus rapidement.
5 messages - 4 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 78. `EN` [Cannot start the domoticz daemon in systemd but can be started in terminal](data/articles/fcd2907d9f82f0bc32013b79029cc653.html)
**Source:** Domoticz (Forum News)
The systemd script in /etc/systemd/system is:
Code: [Unit]Description=Domoticz Home Automation ServiceAfter=network-online.target[Service]Type=simpleUser=piGroup=piWorkingDirectory=/home/pi/domoticzExecStart=/home/pi/domoticz/domoticz -daemon -www 8080 -sslwww 443 -pidfile /var/run/domoticz/domoticz.pidRestart=on-failure[Install]WantedBy=multi-user.target
The result of starting the systemd script: Code: domoticz.service - Domoticz Home Automation Service Loaded: loaded (/etc/systemd/system/domoticz.service; enabled; preset: enabled) Active: inactive (dead) since Sun 2026-02-22 14:10:25 GMT; 5min ago Duration: 191ms Invocation: 25c5fb4ab80c413489635312fe0ac205 Process: 1079 ExecStart=/home/pi/domoticz/domoticz -daemon -www 8080 -sslwww 443 -pidfile /var/run/domoticz/domoticz.pid (code=exited&gt; Main PID: 1079 (code=exited, status=0/SUCCESS) CPU: 545msFeb 22 14:10:23 rpidhcpserver systemd[1]: Started domoticz.service - Domoticz Home Automation Service.Feb 22 14:10:23 rpidhcpserver domoticz[1079]: 2026-02-22 14:10:23.847 Status: Domoticz V2025.2 (c)2012-2025 GizMoCuzFeb 22 14:10:23 rpidhcpserver domoticz[1079]: 2026-02-22 14:10:23.847 Status: Build Hash: e63981b18, Date: 2025-10-13 10:42:57Feb 22 14:10:23 rpidhcpserver domoticz[1079]: 2026-02-22 14:10:23.847 Status: Startup Path: /home/pi/domoticz/Feb 22 14:10:23 rpidhcpserver domoticz[1079]: domoticz: Domoticz is starting up....Feb 22 14:10:23 rpidhcpserver domoticz[1079]: Domoticz is starting up....Feb 22 14:10:23 rpidhcpserver domoticz[1080]: Domoticz is exiting...Feb 22 14:10:25 rpidhcpserver systemd[1]: domoticz.service: Deactivated successfully.
If I run the execstart code in the command line, the domoticz daemon is created. Why can't systemd do the same? Code: home/pi/domoticz/domoticz -daemon -www 8080 -sslwww 443 -pidfile /var/run/domoticz/domoticz.pid
Result of running in commandline as user pi: Code: pi@rpidhcpserver:~/domoticz $ /home/pi/domoticz/domoticz -daemon -www 8080 -sslwww 443 -pidfile /var/run/domoticz/domoticz.pid2026-02-22 14:17:42.839 Status: Domoticz V2025.2 (c)2012-2025 GizMoCuz2026-02-22 14:17:42.839 Status: Build Hash: e63981b18, Date: 2025-10-13 10:42:572026-02-22 14:17:42.839 Status: Startup Path: /home/pi/domoticz/domoticz: Domoticz is starting up....
I did use systemd tmpfiles.d to create /run/domoticz. /etc/tmpfiles.d/domoticz.conf contains Code: #Type Path Mode UID GID Age Argumentd /run/domoticz 0755 pi pi - -
Thanks, Chris
Statistics: Posted by cmisip — Sunday 22 February 2026 15:21 — Replies 1 — Views 354

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 79. `FR` [Dongle z-wave non reconnu](data/articles/cd2fa15cbc0be2043cd7b69f4a334a18.html)
**Source:** Gladys Assistant (Forum)
Bonjour,
le dongle “sonoff z-wave 800 dongle plus” model: dongle-PZG23 n’est pas reconnu par gladys dans Z-WAVE JS UI.
Merci
2 messages - 2 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 80. `EN` [Gets gas consumption from the electrical energy of the gas boiler](data/articles/5c53723cac3c3435d3e4434d86a7833b.html)
**Source:** Domoticz (Forum News)
Hi,
Below I will explain how I managed to obtain an approximate daily gas consumption by transforming the electrical energy consumed by the gas boiler.
The boiler is monitored by a smart plug and I created a custom sensor in domoticz that records daily gas consumption.
To be able to obtain an approximate gas consumption, you must first monitor the consumption on the gas meter for a day. Similarly, you monitor the energy consumption in Kw for that day.
Daily Gas consumption = Daily energy consumption of the gas boiler (in Kilowatt) x Multiplier
Calculate daily consumption smart plug (counterToday in domoticz) x Multiplier, for example in my case the multiplier value is 21 to obtain the approximate gas consumption, but you can also test with other values ​​until it gives the correct result.
Then create the following dzvents script: Code: return {active = true,on = {devices = { 139 } -- idx smart plug},execute = function(domoticz, device)------------------------------------------------------- CONFIGURATION-----------------------------------------------------local MULTIPLICATOR = 21 -- multiplier replace with your own valuelocal GAZ_IDX = 520 -- replace with the idx of your sensor Custom Sensor "Estimated Gas Consumption"---------------------------------------------------------------------- MAIN LOGIC--------------------------------------------------------------------local val = device.counterToday or 0local consumKWh = 0if type(val) == "string" thenconsumKWh = tonumber(val:match("([%d%.]+)")) or 0elseconsumKWh = tonumber(val) or 0endlocal consumGaz = consumKWh * MULTIPLICATORlocal gazDevice = domoticz.devices(GAZ_IDX)if gazDevice thengazDevice.updateCustomSensor(consumGaz)domoticz.log(string.format("idx[%d]: %.3f kWh → Gas estimated: %.3f m³ (x%.3f)",device.id, consumKWh, consumGaz, MULTIPLICATOR), domoticz.LOG_INFO)elsedomoticz.log(string.format("Error: we did not find the device with idx %d", GAZ_IDX), domoticz.LOG_ERROR)endend}
LE: in my case only the gas boiler using gas.
I hope it helps you too.
Statistics: Posted by pfloryann — Saturday 21 February 2026 12:25 — Replies 5 — Views 428

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 81. `EN` [Enphase lan stoped getting info](data/articles/5a8226a9809691777c7b590a3387cfcb.html)
**Source:** Domoticz (Forum News)
2026-02-21 09:45:32.250 [e6df21e0] Error: SamSam: Error getting http data! (info)
This is all I get from the debug logging, not much info. Tried with my second pi with domoticz, the same
Statistics: Posted by tonbor — Saturday 21 February 2026 9:51 — Replies 3 — Views 258

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 82. `EN` [Docker: PluginSystem: Failed dynamic library load](data/articles/0209fa1260470887638d40c4c13af417.html)
**Source:** Domoticz (Forum News)
Hello I'm running Domoticz in docker and I see this in the startup log Code: Status: PluginSystem: Failed dynamic library load, install the latest libpython3.x library that is available for your platform.
About Domoticz
v2025.2 (build 17204)
System Information
Build Hash
71a61ff22
Compile Date
2026-02-20 11:33:19
dzVents Version
3.1.8
Python Version
None
I enter the command prompt for the docker and it said it's installed. root@a78701199ed2:/opt/domoticz# apt install libpython3-stdlib
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
libpython3-stdlib is already the newest version (3.11.2-1+b1).
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
Statistics: Posted by Varazir — Friday 20 February 2026 22:20 — Replies 4 — Views 380

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 83. `EN` [New Theme &gt; Dashboard 2026](data/articles/23b56e9b6daae7ba3bcdaaad08356f69.html)
**Source:** Domoticz (Forum News)
Hi,
As the title says, I’m currently working on a new theme for personal use. It doesn’t have a name yet.
The theme is fully responsive and works on both desktop and mobile devices. All settings are stored in a virtual text device. The blocks can be moved between columns within the same column structure, and columns themselves can also be repositioned.
Column reordering is only available on desktop. On mobile, the layout follows the saved (static) configuration and cannot be rearranged. This is mainly to prevent conflicts with swipe gestures on phones and tablets.
The weather icons dynamically reflect the current conditions. For example, freezing temperatures show an ice icon, rain displays a rain icon, and so on.
Development has only just started, so please don’t ask for a download yet — it’s not finished.
At the moment, it uses a room with favorites, but switching to another room is straightforward and easy to configure via a config file.
It takes all (favorite) devices/sensors automatically from inside the room.
Each block includes an instant update “glow” indicator with a timestamp of the last update, so you can instantly see live activity.
So far i made it as test, but we using it on all phones and tables and it works great.
Still needs work to do, but for what we need, it works excellent.
If you’re interested, let me know. Depending on any feedback or tips, I might take this to the next level and consider sharing it.
Barry
Desktop: Mobile: Statistics: Posted by BarryT — Friday 20 February 2026 19:34 — Replies 12 — Views 634

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 84. `FR` [Dongle Sonoff pour intégration Matter](data/articles/511b004640216b49c99a17a0643f7d50.html)
**Source:** Gladys Assistant (Forum)
Hello,
J’ai actuellement un dongle SONOFF Zigbee 3.0 USB Dongle Plus ZBDongle-P qui me sert à appairer tous mes appareils Zigbee.
J’aimerais maintenant appairer mes appareils Matter Ikea, et je voulais avoir la confirmation que je dois soit :
acheter une passerelle DIRIGERA Ikea par exemple
flasher mon dongle avec un firmware qui permet de prendre en compte Matter
acheter un autre dongle SONOFF Zigbee 3.0 USB Dongle Plus ZBDongle-E qui lui gère Matter
???
Merci d’avance,
2 messages - 2 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 85. `FR` [Limitation temporelle action détecteur de présence](data/articles/e0c2eda7b399abb1244ee6bd5a3e7ec1.html)
**Source:** Gladys Assistant (Forum)
Hello,
J’aimerais que mon détecteur de présence Zigbee n’allume le salon automatiquement que s’il est déclenché avant le lever du soleil ou après son coucher.
J’ai essayé de faire ça : mais je me dis que faire ça pour chaque jour n’est pas très pratique.
Est-ce que je m’y prends mal ? Y a-t-il une solution plus simple et élégante ?
Merci d’avance
3 messages - 2 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="fr" data-category="iot" data-source="Gladys Assistant (Forum)">

### 86. `FR` [Accès à l'URL de Z2M](data/articles/c4814320e6352102addf2162e1c53ff5.html)
**Source:** Gladys Assistant (Forum)
Hello,
Tout fonctionne bien, mais j’aimerais accéder à l’UTL de Z2M donné ici : J’ai testé avec 2 browsers, avec l’IP ou le nom du server, mais timeout chaque fois.
Je ne sais pas ce qui se passe. Merci d’avance.
3 messages - 2 participant(e)s
Lire le sujet en entier

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 87. `EN` [The rainfall report has disappeared](data/articles/99dd1b3543ba705be6a0018efb10c5da.html)
**Source:** Domoticz (Forum News)
Version: 2025.2 (build 17175)
Platform: Docker on NAS
Hello, since the last update, the button for viewing a rainfall report, which used to be located in the top right corner of the rain sensor log screen, has disappeared. Will it be possible to restore it in the next version?
Thank you.
Statistics: Posted by Bimnomercy — Friday 20 February 2026 7:16 — Replies 4 — Views 361

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 88. `EN` [dzvents lua scripts are not triggered anymore (build 17186)](data/articles/09c7dc4360ccc813b981c72f8a37cd3e.html)
**Source:** Domoticz (Forum News)
Hi all,
since the update to v2025.2 (build 17186), all my dzvents lua automations are not triggered anymore. For example I see that a switch changes state, but the lua script is not triggered. (Also the CPU is much lower than before the update)
Anybody else seeing the same issue?
Statistics: Posted by rugspin — Thursday 19 February 2026 19:27 — Replies 6 — Views 388

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 89. `EN` [What is the "comparitive" graph for a power widget ?](data/articles/e14a6fff3d3a13591b8caf500706754d.html)
**Source:** Domoticz (Forum News)
Hello, I have a power widget, used only for power, it mesure 700W during 3 hours by days.
It working fine, no problem with him, but if I go to logs, the last one if the "comparative" by years, but what is the value compared, it's something like 7 000, 00 W
It's the power * hour * days ? but the value is not the good one.
I realy have no clue where this value is from ....
Statistics: Posted by Thorgal789 — Thursday 19 February 2026 17:33 — Replies 6 — Views 413

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Embedded.com">

### 90. `EN` [Renesas Demonstrates Configurable 3-nm TCAM](data/articles/b5d774e5f4e7f886d07f02b12a0d902c.html)
**Source:** Embedded.com
Renesas Electronics Corporation has announced the development of a configurable ternary content-addressable memory (TCAM) implemented using a 3-nm FinFET manufacturing process. The new design combines increased storage density, reduced power consumption, and enhanced functional safety, positioning it for use in automotive environments. The company presented its results at the International Solid-State Circuits Conference 2026, held [...]

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 91. `EN` [LG ThinQ smart devices](data/articles/8fc048f268fbbd3e0d74cbff7009af79.html)
**Source:** Domoticz (Forum News)
Hi,
Has anyone managed to integrate LG ThinQ into Domoticz?
Statistics: Posted by pfloryann — Wednesday 18 February 2026 17:23 — Replies 0 — Views 205

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 92. `EN` [problem using json in container](data/articles/e65e709056155a817f0b3b1c06ecfd77.html)
**Source:** Domoticz (Forum News)
Hi! I am facing problems when I try to use json Domoticz in docker.
Code: services: domoticz: image: domoticz/domoticz:stable container_name: domoticz restart: unless-stopped # Pass devices to container devices: - "/dev/serial/by-id/usb-RFXCOM_RFXtrx433_A1BFAMG-if00-port0:/dev/ttyUSB0" ports: - "8080:8080" volumes: - ./config:/opt/domoticz/userdata/ # regel toegevoegd om extra schermen (custom) te bereiken - ./custom:/opt/domoticz/www/custom environment: - TZ=Europe/Amsterdam #- LOG_PATH=/opt/domoticz/userdata/domoticz.log
This does not work (404 error) (input from browser IP# and port are correct)
Code: http://192.168.2.100:8080/domoticz/json.htm?type=devices
Chatgpt says
Code: Important PointIn the Domoticz Docker image domoticz/domoticz:stable from version 2025.2:The old /json.htm API is not available in this container build.This image is mainly intended for GUI + plugins.Any scripts that try to fetch data via /json.htm will always return 404.So, regardless of roomplan or idx, you cannot use this API.
any idea? chatgpt propose to downgrade to older container which I don't think being a real solution
any suggestions?
Statistics: Posted by BartSr — Wednesday 18 February 2026 12:10 — Replies 6 — Views 372

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 93. `EN` [Notifications, source?](data/articles/7ffba1c6d6c4aff4694494340a2f1d80.html)
**Source:** Domoticz (Forum News)
Hello, i'm receiving notifications through Telegram but i'm unable to find where they are coming from. The history: I do have trvs that were "eating" batteries. I then decided to send a notification with a specific message as soon as the temperature was not reported after a certain time. I fixed the issue for the trvs, removed the notification but i'm still receiving it. Any clue? Thanks
Statistics: Posted by Patricen — Tuesday 17 February 2026 19:41 — Replies 4 — Views 298

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="IoT Business News">

### 94. `EN` [Telit Cinterion Showcases CMB100 and eSIM at MWC 2026](data/articles/a715652e7335c5bb055974d910b9fdc6.html)
**Source:** IoT Business News
At MWC Barcelona 2026, Telit Cinterion will demonstrate its CMB100 embedded modem and NExT eSIM technology, highlighting innovations in IoT connectivity, global deployments, and edge intelligence for mission-critical applications.

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 95. `EN` [Database P1](data/articles/b11872e2bf0b85fe8f44ff7844248736.html)
**Source:** Domoticz (Forum News)
Hello,
I had problems with the USB P1 interface- CRC errors . I changed to a LAN interface. It now records data correctly.
The annual consumption is shown correctly, but the comparison is incorrect. Since the CRC problems start with october 2025, I have incorrect comparisons of october and december. November is shown correctly. The same is for january 2026.
How can i repair data for compared usage.
The same is for Gas and Electricity. Statistics: Posted by nabru99 — Tuesday 17 February 2026 10:12 — Replies 0 — Views 247

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 96. `EN` [Domoticz crash after database restore](data/articles/b2e2e29e285f61c30797afdc7a88a197.html)
**Source:** Domoticz (Forum News)
After a database restore Domoticz doesn't come online, no devices found or no communication...
Did a service restart, after that domoticz was running normal. Tried this with a database backup and restore (no database changes) and after a powercycle of the Rpi3B+. Seen this also on earlier versions of the beta (2025.2 17057, 2025.2 17099 and 2502.2 17189).
Attached is a crash log after a database restore. domoticz_crash.log
Statistics: Posted by Rik60 — Monday 16 February 2026 10:11 — Replies 5 — Views 350

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 97. `EN` [Python debug](data/articles/0457787dfa1d75caf72300f8792d318a.html)
**Source:** Domoticz (Forum News)
Hello ,
I have many lines like that in my journald logs and wonder how to prevent that !
No debug are enabled on the python plugin
and domoticz process is started like that
[code]root 984 1 53 10:39 ? 00:02:50 /home/pi/domoticz/domoticz -daemon -www 8080 -sslwww 443 -syslog[/code]
[quote]Feb 14 10:29:28 CasaiaProV4-test domoticz[10799]: Python: Changed: ID: 912 Name: Piscine - Filtration, Type: 244, subType: 73, switchType: 0, s_value: , n_value: 0, n_value_string: Off, last_update_string: 2026-02-14 10:29:28
Feb 14 10:29:29 CasaiaProV4-test domoticz[10799]: Python: Changed: ID: 917 Name: Piscine - PH Value, Type: 243, subType: 31, switchType: 0, s_value: 0, n_value: 0, n_value_string: 0, last_update_string: 2026-02-14 10:29:28
Feb 14 10:29:29 CasaiaProV4-test domoticz[10799]: Python: Changed: ID: 916 Name: Piscine - PH, Type: 243, subType: 22, switchType: 0, s_value: Waiting values, n_value: 0, n_value_string: Waiting values, last_update_string: 2026-02-14 10:29:28
Feb 14 10:29:29 CasaiaProV4-test domoticz[10799]: Python: Changed: ID: 919 Name: Piscine - Redox Value, Type: 243, subType: 31, switchType: 0, s_value: 0, n_value: 0, n_value_string: 0, last_update_string: 2026-02-14 10:29:28
Feb 14 10:29:29 CasaiaProV4-test domoticz[10799]: Python: Changed: ID: 918 Name: Piscine - Redox, Type: 243, subType: 22, switchType: 0, s_value: Waiting values, n_value: 0, n_value_string: Waiting values, last_update_string: 2026-02-14 10:29:28
Feb 14 10:29:29 CasaiaProV4-test domoticz[10799]: Python: Changed: ID: 900 Name: General Elec - Total, Type: 243, subType: 29, switchType: 0, s_value: 2081;10052200, n_value: 0, n_value_string: 2081;10052200, last_update_string: 2026-02-14 10:29:28
Feb 14 10:29:30 CasaiaProV4-test domoticz[10799]: Python: Changed: ID: 769 Name: ECS - SHW Control, Type: 244, subType: 62, switchType: 18, s_value: 20, n_value: 1, n_value_string: Auto, last_update_string: 2026-02-14 10:29:28
Feb 14 10:29:30 CasaiaProV4-test sudo[11131]: pam_unix(sudo:session): session closed for user root
Feb 14 10:29:30 CasaiaProV4-test domoticz[10799]: Python: Changed: ID: 770 Name: ECS - SHW Setpoint, Type: 242, subType: 1, switchType: 0, s_value: 65, n_value: 1, n_value_string: 65, last_update_string: 2026-02-14 10:29:28[/quote]
Statistics: Posted by pipiche — Saturday 14 February 2026 10:45 — Replies 0 — Views 186

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="HomeGenie (GitHub Releases)">

### 98. `EN` [v2.0.6](data/articles/5347293f30fcddb4241882e4a2cf7f7e.html)
**Source:** HomeGenie (GitHub Releases)
HomeGenie v2.0.6: Dive Deeper into Your Movies!
This update brings a significant enhancement to the HomeFlix widget, making your media experience even richer.
What's New:
New Movie Detail Screen: You can now access detailed information for each title. Cast &amp; Crew: View director and production details.
Meet the Stars: Browse through actor names and photos directly from the UI.
UI Optimizations: Various small tweaks and performance improvements for a smoother navigation experience.
Full Changelog: v2.0.5...v2.0.6

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 99. `EN` [Correcting database month total value](data/articles/9c0a891c8a7d9482d54abd85ea98cceb.html)
**Source:** Domoticz (Forum News)
Last year february 12 I moved house. Now these values are in the database causing a huge usage in feb 2025: Code: sqlite&gt; SELECT * FROM Meter_calendar WHERE DeviceRowID=8 AND Date&gt;='2025-01-28' AND Date&lt;'2025-03-08';DeviceRowID|Value|Counter|Date8|2534|3087874|2025-01-288|1387|3089261|2025-01-298|2728|3091989|2025-01-308|2265|3099687|2025-02-038|2912|3102599|2025-02-048|1616|3104215|2025-02-058|1983|3106198|2025-02-068|3332|3109530|2025-02-078|2014|3113587|2025-02-098|3627|3117214|2025-02-108|1126|3654334|2025-02-13 &lt;&lt;&lt;8|4587|3658921|2025-02-148|4498|3663419|2025-02-158|2373|3665792|2025-02-168|2933|3668725|2025-02-178|2762|3671487|2025-02-188|3337|3674824|2025-02-198|4906|3679730|2025-02-208|798|3680528|2025-02-218|2299|3682827|2025-02-228|363|3683190|2025-02-238|2116|3685306|2025-02-248|2492|3687798|2025-02-258|975|3688773|2025-02-268|1184|3689957|2025-02-278|879|3690836|2025-02-288|3994|3694830|2025-03-018|1689|3696519|2025-03-028|589|3697108|2025-03-03
The actual usage is around 60 m3 and not 600 m3 that is in the graph. To get an idea how the month total is calculated I shift-clicked removed a few day -totals. That did not make a difference in the month total.
My question is: Can the feb month value be corrected by changing Counter -numbers? Without touching the January and March month totals. Probably the '2025-02-03' ? Thanks.
Statistics: Posted by hans1612 — Friday 13 February 2026 14:53 — Replies 3 — Views 197

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="IoT Business News">

### 100. `EN` [Everyday Productivity Challenges in IoT Projects and How Teams Solve Them](data/articles/e375e65767dd3e22ef4a18bdc600ec45.html)
**Source:** IoT Business News
IoT project teams face challenges like device integration delays, data inconsistencies, and security disruptions. Adopting standards, automation, and scalable practices improves productivity and project success.

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 101. `EN` [Energy dashboard: Placement of custom widgets also to solar](data/articles/fbf0d71fdc0f2c9d32c032e93dc09411.html)
**Source:** Domoticz (Forum News)
My "wishlist" for an update of the energy dashboard:
1.
In the settings for the energy dashboard you can define up to three custom widgets that are visually linked to the home consumption bubble on the right hand side. This is fine for consuming device like a heat pump (see screenshot).
But for devices that are producing power it would be more logical to link them to the upper bubble with solar power. In my case, this is the sum of a small + big solar power plant.
2.
And it would be nice if the font size of the text device is bigger (in my case the weather description)
Statistics: Posted by imautohuttraeger — Thursday 12 February 2026 9:25 — Replies 0 — Views 253

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 102. `EN` [No logging of variable updates](data/articles/006bd2af01c410045de6a1a55643b1bf.html)
**Source:** Domoticz (Forum News)
I have a Dzvents script that will update a user variable every minute and makes a note of the variable update in the log:
2026-02-11 13:51:00.735 Status: Set UserVariable nomotionCounter = 380
Is it possible not to update the log with (this) User variable updates? As this is information that I don't really need in the log.
Statistics: Posted by jberinga — Wednesday 11 February 2026 14:42 — Replies 5 — Views 206

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 103. `EN` [Tasmota device ("Hichi" infraread head) brings error](data/articles/64ffa98d1af67ea0a27349b50d505bf7.html)
**Source:** Domoticz (Forum News)
I have an infraread reading head on my electric meter ("Hichi" with Tasmota). Transfering the data via MQTT to Domotics works, but for at least one of the figures I get this error:
Error: Invalid Number sValue: '%' for device idx: '%'
Error: GetJSonDevices: exception occurred : 'stoull'
For those of you who are savvy with Tasmota: This is the code of the customized script that runs there and it displays correct data in the Tasmota web interface:
&gt;D
&gt;B
=&gt;sensor53 r
&gt;M 1
+1,3,s,0,9600,,1
1,77070100010800FF@100000000,Zählerstand Import ,kWh,1_8_0,8
1,77070100010801FF@1000,Zählerstand Import T1 ,kWh,1_8_1,8
;1,77070100010802FF@100000000,Energie Bezug T2,kWh,1_8_2,8
1,77070100020800FF@100000000,Zählerstand Export,kWh,2_8_0,8
1,77070100100700FF@1,Summe Verbrauch ,W,16_7_0,16
1,77070100240700FF@1,akt. Verbrauch L1,W,36_7_0,16
1,77070100380700FF@1,akt. Verbrauch L2,W,56_7_0,16
1,770701004C0700FF@1,akt. Verbrauch L3,W,76_7_0,16
#
But even the non-customized Script from the Tasmota wiki shows the same error:
https://tasmota.github.io/docs/Smart-Me ... d3-obissml
Any hints are highly welcome
Statistics: Posted by imautohuttraeger — Tuesday 10 February 2026 12:30 — Replies 10 — Views 304

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 104. `EN` [Domoticz stops with error.](data/articles/ff71dd0e8841998c274f8f811612e249.html)
**Source:** Domoticz (Forum News)
When I stop domoticz manually I get this error, anyone any idea how to solve this or what the cause is?
Code: 2026-02-08 11:11:03.286 Error: Domoticz(pid:677, tid:677('domoticz')) received fatal signal 6 (Aborted)2026-02-08 11:11:03.286 Error: siginfo address=0x2a5, address=0x7f04e28c495c2026-02-08 11:11:03.295 Error: Failed to start gdb, will use backtrace() for printing stack frame2026-02-08 11:11:03.300 Error: #0 /home/eddy/domoticz/domoticz : + 0x454b23 [0x557cbca5cb23]2026-02-08 11:11:03.300 Error: #1 /home/eddy/domoticz/domoticz : signal_handler(int, siginfo_t*, void*) + 0x245 [0x557cbca5d5b5]2026-02-08 11:11:03.300 Error: #2 /lib/x86_64-linux-gnu/libc.so.6 : + 0x3fdf0 [0x7f04e286fdf0]2026-02-08 11:11:03.300 Error: #3 /lib/x86_64-linux-gnu/libc.so.6 : + 0x9495c [0x7f04e28c495c]2026-02-08 11:11:03.300 Error: #4 /lib/x86_64-linux-gnu/libc.so.6 : gsignal + 0x12 [0x7f04e286fcc2]2026-02-08 11:11:03.300 Error: #5 /lib/x86_64-linux-gnu/libc.so.6 : abort + 0x22 [0x7f04e28584ac]2026-02-08 11:11:03.300 Error: #6 /lib/x86_64-linux-gnu/libpython3.13.so : + 0x99fa3 [0x7f04e1499fa3]2026-02-08 11:11:03.300 Error: #7 /lib/x86_64-linux-gnu/libpython3.13.so : + 0x2b15f7 [0x7f04e16b15f7]2026-02-08 11:11:03.300 Error: #8 /lib/x86_64-linux-gnu/libpython3.13.so : PyEval_RestoreThread + 0xab [0x7f04e1684ecb]2026-02-08 11:11:03.300 Error: #9 /home/eddy/domoticz/domoticz : Plugins::CPluginSystem::StopPluginSystem() + 0xbb [0x557cbcf58d9b]2026-02-08 11:11:03.300 Error: #10 /home/eddy/domoticz/domoticz : MainWorker::Stop() + 0x15c [0x557cbca23a3c]2026-02-08 11:11:03.300 Error: #11 /home/eddy/domoticz/domoticz : main + 0x5c5 [0x557cbc922e75]2026-02-08 11:11:03.300 Error: #12 /lib/x86_64-linux-gnu/libc.so.6 : + 0x29ca8 [0x7f04e2859ca8]2026-02-08 11:11:03.300 Error: #13 /lib/x86_64-linux-gnu/libc.so.6 : __libc_start_main + 0x85 [0x7f04e2859d65]2026-02-08 11:11:03.300 Error: #14 /home/eddy/domoticz/domoticz : _start + 0x21 [0x557cbc949b41]
My system is Dietpi running as VM under Proxmox with:
Code: 2026-02-08 11:16:29.414 Status: Domoticz V2025.2 (build 17082) (c)2012-2026 GizMoCuz2026-02-08 11:16:29.414 Status: Build Hash: 0776fa964, Date: 2026-02-07 15:03:33 Code: PRETTY_NAME="Debian GNU/Linux 13 (trixie)"NAME="Debian GNU/Linux"VERSION_ID="13"VERSION="13 (trixie)"VERSION_CODENAME=trixieDEBIAN_VERSION_FULL=13.3ID=debianHOME_URL="https://www.debian.org/"SUPPORT_URL="https://www.debian.org/support"BUG_REPORT_URL="https://bugs.debian.org/" Code: Linux domoprox 6.12.63+deb13-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.12.63-1 (2025-12-30) x86_64 GNU/Linux Statistics: Posted by Kedi — Sunday 08 February 2026 11:20 — Replies 6 — Views 455

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 105. `EN` [Tuya TS0601_knob_dimmer_switch](data/articles/c0eb32f5b87c6b696031b312ab617d8b.html)
**Source:** Domoticz (Forum News)
I have https://www.zigbee2mqtt.io/devices/TS06 ... witch.html. Zigbee2mqtt supports it and I can get intensity as well as color temperature data.{ "adjustment_mode": "brightness", "color_temp": 178, "group_id": null, "linkquality": 174, "mode": null, "power_on_behavior": null, "state": null, "state_l1": null, "state_l2": null, "switch_mode_l1": null, "switch_mode_l2": null, "brightness": 140
}In Domoticz I can't get a CCT value. Am I doing something wrong? How can I get a CCT(color_temp) value in a Domoticz?
Statistics: Posted by palnic — Friday 06 February 2026 17:09 — Replies 0 — Views 231

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 106. `EN` [Deleting values from power meter](data/articles/a48bb1ab091c9941acb4e99da0e2f297.html)
**Source:** Domoticz (Forum News)
Hey,
I have a power meter where I sometimes see weird values, this is caused by my input script, fixing that separately. But when I try to delete it from the graph, it doesn't work, only when deleting it using sqlite. See database value below. Can this be improved? It is the line dated 2026-02-06 05:40:00 that is wrong. Code: 499|30221370|0|2026-02-06 05:30:00|0.2515499|30221370|0|2026-02-06 05:35:00|0.2515499|22256300|0|2026-02-06 05:40:00|0.2515499|30221370|0|2026-02-06 05:45:00|0.2515499|30221370|0|2026-02-06 05:50:00|0.2515 Statistics: Posted by JanJaap — Friday 06 February 2026 14:57 — Replies 0 — Views 223

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant (Blog officiel)">

### 107. `EN` [2026.2: Home, sweet overview](data/articles/b1e5628d6a9d870d361057fc0cd5593d.html)
**Source:** Home Assistant (Blog officiel)
Home Assistant 2026.2! February is the month of love, and this release is here to share it!
The new Home Dashboard is now the official default for all new installations. If you’ve been using Home Assistant for a while and never customized your default view, you’ll get a suggestion to switch; give it a try!
I also need your help! The Open Home Foundation device database is being built as a community-powered resource to help everyone make informed decisions about smart home devices. Head to Home Assistant Labs to opt in and contribute your anonymized device data. Add-ons are now called Apps! After a lot of community discussion, it was time to use terminology that everyone understands. Your TV has apps, your phone has apps, and now Home Assistant has apps too.
My personal favorite this release? The completely redesigned Quick search! If you’re like me and navigate Home Assistant using your keyboard, you’re going to love this one. Press ⌘ + K (or Ctrl + K on Windows/Linux) and you have instant access to everything. Enjoy the release!
../Frenck
A new way to view your home Discovered devices at a glance
Area assignments made easy
Faster area edits
UX and visual upgrades
Device database: We need your help! Help us out and share your devices
See the data in action
Join us in building something meaningful
Add-ons are now called Apps A faster, snappier Apps panel
Purpose-specific triggers and conditions progress New triggers
New conditions
A brand new card: The distribution card
Quick search: The fastest way to anything Your favorite shortcuts still work
Integrations New integrations
Noteworthy improvements to existing integrations
Integration quality scale achievements
Now available to set up from the UI
Other noteworthy changes Add buttons to your heading card
Pick specific entities in your area card
Patch releases 2026.2.1 - February 6
2026.2.2 - February 13
2026.2.3 - February 20
Need help? Join the community
Backward-incompatible changes
All changes
A huge thank you to all the contributors who made this release possible! And a special shout-out to @laupalombi and @mkerstner who helped write the release notes this release. Also, @wollew, @Diegorro98, and @MindFreeze for putting effort into tweaking its contents. Thanks to them, these release notes are in great shape. A new way to view your home
The Home Dashboard is now Overview as it becomes the official default standard, replacing the old “Overview” for all new instances. If you’re a long-time user who never customized your default view, we’ll suggest the switch to you; otherwise, you can find it in Settings &gt; Dashboards to try it out whenever you’re ready.
Liked the old Overview as a way to build your custom dashboards? You can still do it. Go to Settings &gt; Dashboards, select Create, and pick the Overview (legacy) template.
Discovered devices at a glance
Check out the new card in the For You section! It instantly displays any new devices your Home Assistant has discovered, allowing you to add them on the spot or jump straight to device management without digging through menus.
Area assignments made easy
In the last release, we added a dedicated Devices area within the Home Dashboard to catch everything currently unassigned. Now this section provides quick prompts to help you categorize your devices into the right rooms, keeping your setup organized with minimal effort.
Faster area edits
Need to swap the area temperature sensor? Area pages now feature a shortcut in the Edit button. This lets you jump straight to the area’s configuration to update primary sensors like humidity or temperature in seconds.
We’ve also tidied up the interface by removing awkward empty spaces and fixing issues with some back arrows. Navigating through your sub-menus should now feel as smooth and predictable as you’d expect.
UX and visual upgrades
Modern look in the default theme: We’ve retired the old blue top bar in favor of a clean, consistent theme that matches our Settings page. This distraction-free design lets your cards and data take center stage.
Personalized themes per user: Themes have moved! You can now find and toggle your favorite looks directly within your User profile, making it easier to set up a theme that works for you in any device you are logged in.
Device database: We need your help!
Finding reliable information about smart home devices before you buy them can be challenging. That’s why we’re building the Open Home Foundation device database: a community-powered resource that helps you make informed decisions based on real-world data.
We’ve been working with early contributors to lay the groundwork, and the results are already impressive: over 10,000 unique devices across more than 260 integrations have been submitted by Home Assistant users who opted in to share their anonymized data.
Help us out and share your devices
Since we’re still in the early stages, the device database lives in Home Assistant Labs, where you can opt in to share anonymized information about the devices in your home.
We have also added a new section called Device analytics to Home Assistant Analytics, which shows up when you enable it in Home Assistant Labs. If you opt in, you are, of course, able to opt out at any time.
Privacy is our foundation. We collect zero personal data, period. Only aggregated, anonymized device information is shared if someone chooses to opt in, providing valuable insights while keeping your privacy intact. You can preview what is being sent using the Preview device analytics option available in the top-right corner on the Analytics page. Read our Data Use Statement for complete details.
See the data in action
We’ve launched an initial public dashboard where you can explore aggregated statistics as it grows. This is just our first step. We want to build what comes next together with you.
Join us in building something meaningful
Head to Settings &gt; System &gt; Labs to enable device analytics and start contributing your real-world anonymized device data to help others make better choices.
Read our blog post for more details and join the conversation in our Discord project channel; we’d love to hear your ideas, feedback, and questions as we shape this resource together.
Add-ons are now called Apps
Starting with this release, add-ons are now called apps! You might be wondering: why change the name? The answer comes down to making Home Assistant more approachable for everyone, especially newcomers.
When you first open Home Assistant, you see two sections that sound very similar: “Add-ons” and “Integrations.” Both names imply something you add to extend Home Assistant, but they serve fundamentally different purposes. For those of us who’ve been in the ecosystem for a while, this distinction is second nature. But we keep seeing new users getting confused, attempting to install add-ons when they need integrations, or vice versa.
This is where the rename helps: use terminology that people already understand. Most people know what an “app” is. You open your phone’s app store, you pick an app, you install it. Your TV has an app store. Your NAS has apps. Heck, even some fridges have apps these days. It’s a concept everyone understands. The same mental model now applies to Home Assistant:
Apps are standalone applications that run alongside Home Assistant.
Integrations are connections that connect Home Assistant to your devices and services.
Apps are separate software managed by your Home Assistant Operating System, running next to Home Assistant itself. They can be things like code editors, media servers, MQTT brokers, or database tools. Some apps even pair with integrations: for example, the Mosquitto MQTT broker app provides the service, while the MQTT integration connects Home Assistant to it.
Existing documentation, community posts, and tutorials will continue to reference “add-ons” for some time. Search engines and AI assistants will also need time to catch up.

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 108. `EN` [P1 troubles](data/articles/7fa5775115b39f649b35272b01ff696b.html)
**Source:** Domoticz (Forum News)
For years domoticz is stable running.
Recently two ratio solar chargers for EV's have been installed. Homewizzard P1 splitter (external supplied too) provides data for EV chargers and Domoticz. P1 now fails
Both for domoticz and EV's.
Chatgpt says this is because of how domoticz uses P1.
Any idea to solve this problem?
Statistics: Posted by BartSr — Tuesday 03 February 2026 16:55 — Replies 19 — Views 577

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 109. `EN` [Make offpeak hours available in Domoticz Settings](data/articles/461dba9af7595826a50f31b2b162c483.html)
**Source:** Domoticz (Forum News)
Please make off-peak hours available in Domoticz Settings so that plugins and scripts can use the values
Some people may have up to 3 off-peak hours per day, in my country
Statistics: Posted by lemassykoi — Tuesday 03 February 2026 0:28 — Replies 23 — Views 662

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="HomeGenie (GitHub Releases)">

### 110. `EN` [v2.0.5](data/articles/e03babe6378a44faa2a3f941dcf53cea.html)
**Source:** HomeGenie (GitHub Releases)
HomeGenie v2.0.5: Essential Framework Upgrade and Performance Boost
This release focuses on the critical upgrade to the .NET 10 framework, ensuring long-term stability and delivering significant performance improvements.
Full Changelog: v2.0.2...v2.0.5

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 111. `EN` [Enphase plugin stopt](data/articles/6b921c0c1e169f88840c0899be6310e2.html)
**Source:** Domoticz (Forum News)
Hello,
Has anyone managed to get Enphase Envoy solar panels working in Domoticz 2025.2 with Trixie? It used to work with the Enphase native plugin, but it stopped working. The Enphase version is V8.
Statistics: Posted by Fredom — Monday 02 February 2026 16:34 — Replies 2 — Views 212

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 112. `EN` [Matter having it's own forum section?](data/articles/0103f3637cad5218dafa02052ec7cfcb.html)
**Source:** Domoticz (Forum News)
Now more and more manufactures going over to matter, should it have own section like zigbee and zwave ?
Statistics: Posted by Varazir — Sunday 01 February 2026 20:54 — Replies 3 — Views 317

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Domoticz (Forum News)">

### 113. `EN` [Unable to update](data/articles/10d67b041bc20eeb147e7f8a5bf1c7eb.html)
**Source:** Domoticz (Forum News)
Hello everyone,
I am unable to update Domoticz. When I try to do so via the web page, I get an error message and it corrupts Domoticz. When I try to do so via the SSH terminal, I get no error message, but Domoticz is also corrupted.
Here is the information for the functional Domoticz:
Version: 2025.1
Build Hash: 89d5c900d
Compile Date: 2025-05-05 09:02:49
dzVents Version: 3.1.8
Python Version: 3.9.2 (default, Mar 20 2025, 22:21:41) [GCC 10.2.1 20210110]
Another issue is that I have to switch to “sudo su” to be able to extract the backup.
Can you help me? Translated with DeepL.com (free version)
Statistics: Posted by MicMac7351 — Saturday 31 January 2026 18:09 — Replies 1 — Views 186

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="HomeGenie (GitHub Releases)">

### 114. `EN` [v2.0.4](data/articles/45195e5a12fd903a33c4106f11011149.html)
**Source:** HomeGenie (GitHub Releases)
HomeGenie v2.0.4 - Visual Program Editor Fix
This release addresses a bug in Visual Program Editor.
Changelog: Fixed: VPE parameter value code generation (by @genemars in https://github.com/genielabs/HomeGenie/pull/488) Full Changelog: v2.0.3...v2.0.4

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="HomeGenie (GitHub Releases)">

### 115. `EN` [v2.0.3](data/articles/3c625e0eedf80e370ee6c405b3e71206.html)
**Source:** HomeGenie (GitHub Releases)
HomeGenie v2.0.3 - Dashboard Fix
This maintenance release addresses a UI issue introduced in v2.0.2.
Changelog: Fixed: Resolved an issue where the "Add Widget" button was unresponsive on default dashboard layouts. Users can now customize the default dashboards as expected. Full Changelog: v2.0.2...v2.0.3

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="HomeGenie (GitHub Releases)">

### 116. `EN` [v2.0.0-rc.14](data/articles/369d51d72069093880bad9c6474ea7fd.html)
**Source:** HomeGenie (GitHub Releases)
HomeGenie Server v2.0.0-rc.14 - The "Agentic Automations" Update This release candidate bridges the gap between conversation and execution, bringing Agentic AI directly into the HomeGenie Scheduler. It enables the system to not only respond to your queries but to reason and act autonomously through recurring, natural language-driven tasks. Lailama: Enhanced Reasoning &amp; Memory Management
The Lailama Local AI engine receives a major architectural update focused on long-term stability and granular control.
Intelligent Memory Pruning: Introduced Max Turns configuration to prevent context bloat. The engine now automatically resets the history after a defined number of turns, ensuring 100% stable performance and preventing the "looping" issues common in long-session LLMs.
Customizable Context Window: Users can now manually adjust the Context Size (n_ctx) via a new slider (up to 8192 tokens), allowing for massive device inventories and complex system reports.
Privacy-First Context Toggle: A new "Include device list" option allows users to decide exactly when to share the home’s status with the AI, optimizing token usage and privacy.
Prompt.Schedule API: A new synchronous API method designed for background tasks, allowing the AI to execute logic without "polluting" the primary chat history. Scheduler 2.0: The "Genie Command"
The Scheduler is no longer just a timer; it’s now an Agentic Host.
Genie Command Preset: Introducing a new preset action that lets you define automations in plain language. Instead of writing code, you can now schedule tasks like: "Check the porch light and set it to a random color different from the last one.", "Set the heat to 22° and start the Sunrise scene"
Enhanced Scripting Host: For power users, the Scheduler now supports the $$.api.call (ApiHelper) method, enabling deep integration between custom scripts and the internal API bus. Security &amp; Core Refactor
Security System 2.0: The Security Alarm System has been refactored into its own dedicated domain: HomeAutomation.SecuritySystem/Main. BREAKING CHANGE: Any manual scripts or widgets referencing the old security module address must be updated to the new fully qualified path.
Energy Monitor: Fixed a minor logic bug in the energy tracking program to improve aggregation accuracy during peak load shifts. UI &amp; UX Refinements
Streamlined Rendering: Fixed a rendering delay in Voice Control messages, ensuring that transcriptions appear instantly as they are processed.
Consistent API Blocks: Improved the rendering of subsequent API blocks in the chat interface, ensuring that complex multi-step AI responses are displayed clearly and remain fully interactive.
Responsive Resize: Further refinements to the chat's drag-to-resize bar for better handling on touch devices and high-DPI screens. IMPORTANT NOTE
This RC is the final stepping stone towards the stable v2.0. We recommend all users on rc.13 to upgrade to test the new Lailama memory management features.
Building the future of local, private, and agentic automation. Enjoy HomeGenie 2.0! Full Changelog: v2.0.0-rc.12...v2.0.0-rc.14

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant (Blog officiel)">

### 117. `EN` [More devices, more choice: celebrating a massive year for certification](data/articles/8a8584e4bd4388a05d24d5c039c6989e.html)
**Source:** Home Assistant (Blog officiel)
If you’re ever in need of a device that works great with Home Assistant, well, I have just the program for you. Works with Home Assistant is our certification program that ensures devices work seamlessly and locally, all with brands that back them up.
Did you know that this year the Works with Home Assistant program has certified 12 partners across 12 months? That’s more than were certified in the two years since the program launched in 2022! The full list of devices is insanely long now (luckily, we made it searchable). To make all this happen over just one year, a lot of important things have been happening behind the scenes.
Moving to a non-profit foundation
In August 2024, the Open Home Foundation took over Works with Home Assistant. This helped reinforce that this program is not a commercial venture: it exists solely to connect our users with brands that support the foundation’s core values of privacy, choice, and sustainability.
When we moved it over to the foundation, we also took that chance to beef-up our processes, with robust legal contracts that ensure every partner who joins the program formally commits to things like offering users long-term support and easy updates.
It’s all about the devices
When we started the program we certified brands, but now we certify devices. This means you know exactly which sensors, switches, or other gadgets have been rigorously tested by us to ensure the best experience with Home Assistant. Each certified device has to work locally, without the need for cloud subscriptions or control.
We can now certify in phases, rather than overwhelming our testers with a truckload of devices in order to launch one partner. Also, if a manufacturer has one device that is cloud-controlled, it doesn’t blacklist any remaining items they have that could operate perfectly well locally. It sometimes means that sometimes your favorite devices aren’t part of the first wave of certification but, trust us, the partners check the .
Making it easy to find certified devices
Here’s a conundrum: the more products that are certified, the harder it is for you to see and find them. The good news is I think we’ve cracked it!
Last week, we published the first version of our new searchable certified device list. Previously, you’d have to hunt around for info by checking the integration page or digging through launch blogs to see if a device was certified. Now, certified devices are kept up to date in one central, easy-to-use location, with extra information on the region they’re available in, the protocol we’ve certified them under, and notes about any secondary functionality we’re still working on.
The badge had a makeover
Every certified device earns the right to display our badge on its packaging, proudly announcing it Works with Home Assistant. If you’re not part of the program, you’re not allowed to use the Home Assistant logo. We used to have different versions of the badges depending on whether the device used Matter, Zigbee, or Z-Wave, and so on, but – let’s be honest – they were overcomplicated and impossible to actually read on a box!
Since the badge is such an important signal when you’re browsing products, we decided to simplify it and focus purely on that mark of quality. Now we have just two versions: a color badge and a monochrome design that are easier to read on any packaging.
Companies of all sizes
For 2025, our goal was simple: we wanted both the big names and passionate community projects to be able to join. Yes, we’re thrilled to have major smart home players such as Shelly and Reolink committing to the program, but it’s equally important for us to connect with smaller, community-built projects – the start-ups or developers who keep open source at the heart of everything they do, like AirGradient and Apollo Automation.
This commitment to inclusivity is a big reason why we keep the annual fee for joining the program deliberately low, at only 500 CHF (per partner, not device) per year. We want to ensure being part of Works with Home Assistant is achievable for everyone who shares our vision.
Improving testing
Testing hasn’t always been perfect – we knew we needed to make improvements, and the community has been amazing in helping us find things we need to look at. Like everything we do, we learn as we go, we iterate, and we improve. Previously, everyone was testing in their own way, but now we’ve standardized the way we test and give feedback to partners. This means testing is more consistent, exacting, and able to handle higher volumes – one of the reasons why we’ve been able to increase the number of devices we’ve certified so radically!
A lot of devices that come across our desks don’t pass certification, and it’s often due to organizations not fully understanding the requirements of joining. While this can vary greatly depending on the device and protocol, it was clear we needed to be more transparent. So as well as publishing our Works with Home Assistant Working Group Resolution, we’re also publishing further testing information: this sample testing report for a simple smart plug shows you the process we follow.
Keeping Home Assistant on the bleeding edge
Because we get to see and test new devices in advance, and receive feedback from our certified partners as part of the process, we have a sneak peek into what vendors have in mind for 2026 and beyond. This allows us to look at our product roadmap and see where we need to realign with innovations in the market. By testing today’s devices, we’re guiding tomorrow’s Home Assistant features!
What can be controlled in Home Assistant
A core aim of the program is to ensure all certified devices have their “key functionality” available within Home Assistant. So how do we decide what aspects are controllable in Home Assistant and what doesn’t make the cut?
Key: First, we look at the functionality as a whole. Let’s use a door lock for example. The door should lock and unlock from within Home Assistant. That’s key functionality, get it? Secondary: If the lock also chimes when it locks or unlocks, we think of that as “secondary” functionality. We recommend that the manufacturer has it as an “exposed feature” in Home Assistant, so you can turn it off during quiet hours for example, but it wouldn’t block certification.
We have to look at what’s actually supported by the open standard that we’re testing against too. If a feature is not currently supported by the specification, there’s no way for the manufacturer to actually implement it. This is one of the major challenges in certifying against ‘younger’ specifications such as Matter.
We use our best judgment on this, but we also want your feedback, because everyone has a slightly different point of view, even within our team and testers – so look out for our user research requests, or please share your thoughts in our below!
Connecting with our community
For all this talk of testing, Works with Home Assistant is primarily about people and partnerships! As a foundation, we’re focused on making sure the program stays deeply connected with the community it serves, both online and in person.
We’ve been stepping up our presence at meetups and events around the world, so we can share the latest developments and gather your valuable feedback. From gigantic trade shows like CES in Las Vegas to small, local get-togethers, you can expect to see us there! We also want to do this online, so you can ask partners questions on streams, or in – keep an eye out for more of this in future.
On to 2026
So that was 2025 in a (big) nutshell. As for 2026, we want to kick it off with some wonderful Zigbee partners we’ve been working really hard on – particularly after the awesome launch of Connect ZBT-2. Even though Zigbee is one of the longest-established protocols, it’s actually one of the hardest for us to test and certify because so many devices operate outside the official specification.

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant (Blog officiel)">

### 118. `EN` [2025.12: Triggering the holidays](data/articles/8c32d68012f7f93565c8650b173414e9.html)
**Source:** Home Assistant (Blog officiel)
Home Assistant 2025.12! As the year winds down and the holidays approach, we’re closing out 2025 with a release that’s all about giving you more control and a little bit of magic. This month, we’re unveiling Home Assistant Labs, a brand-new space where you can preview features before they go mainstream. And what better way to kick it off than with Winter mode? Enable it and watch snowflakes drift across your dashboard. It’s completely unnecessary, utterly delightful, and exactly the kind of thing we love to build. But that’s just the beginning. We’ve been working on making automationsAutomations in Home Assistant allow you to automatically respond to things that happen in and around your home. [Learn more] more intuitive over the past releases, and this release finally delivers purpose-specific triggers and conditions. Instead of thinking in (numeric) states, you can now simply say “When a light turns on” or “If the climate is heating”. It’s automation building the way our mind works, as it should be. Oh, and if you’re looking to level up your Zigbee or Thread network, check out the Home Assistant Connect ZBT-2 we released last month. It’s four times faster and has a gorgeous new antenna design that you’ll actually want to display on your desk. From all of us working on Home Assistant:
Thank you for an amazing 2025! Happy holidays, and enjoy the release!
../Frenck
A little holiday cheer Jingle Labs by Frenck and Darren
Dashing through the code,
Chorus
Jingle Labs, jingle Labs,
Power graphs are live,
Xbox got some love,
Chorus
Jingle Labs, jingle Labs,
Home Assistant Labs Purpose-specific triggers and conditions
More dashboard improvements! Set a system-wide default dashboard
Reorder areas and floors
Experimental dashboards have graduated
Home dashboard improvements
Undo and redo in the dashboard editor
Power and water in the Energy dashboard Real-time power monitoring
Downstream water meters
New energy layout
Integrations New integrations
Noteworthy improvements to existing integrations
Integration quality scale achievements
Now available to set up from the UI
Farewell to the following
Other noteworthy changes Get insight into your AI conversations
Add entities to Android widgets and favorites
Patch releases 2025.12.1 - December 5
2025.12.2 - December 8
2025.12.3 - December 12
2025.12.4 - December 19
2025.12.5 - December 29
Need help? Join the community
Backward-incompatible changes
All changes
A huge thank you to all the contributors who made this release possible! And a special shout-out to @TimoPtr, @laupalombi, @jlpouffier, and @MindFreeze who helped write these release notes. Also, @edenhaus, @tr4nt0r, @jpbede, @RaHehl, @bieniu, @arturpragacz, and @piitaya for putting effort into tweaking its contents. Thanks to them, these release notes are in great shape. Home Assistant Labs When we develop new features for Home Assistant, we often find ourselves in a tricky spot. A feature might be fully built and tested, but we’re not entirely sure if it’s the right fit for everyone just yet. Maybe we want to gather some real-world feedback first, or perhaps we want to see how the community uses it before committing to keeping it around forever.
That’s where Home Assistant Labs comes in! Labs is a brand-new place in Home Assistant that gives you a sneak peek at features we’re working on. These are not unfinished experiments or unstable beta features. They are fully functional and tested, but they might change or even disappear based on feedback. We are committed to building in the open, and we want to give more people the choice to hop into the lab with us. By joining us, your feedback will directly help refine these features for the entire community.
The very first preview feature available in Labs is Winter mode , inspired by a community post on Reddit originally created by u/Possible-Week-5815. Enable it, and watch your Home Assistant interface transform into a winter wonderland with falling snow. A fun way to get into the holiday spirit!
When you enable a preview feature, you can also choose to create a backup first, just to be safe. And if you change your mind? Simply disable it again. No restart required!
Preview features are off by default, and enabling them won’t affect your existing setup. It’s completely optional, so if you prefer to stick with the battle-proven experience, that’s totally fine. But if you’re curious and want to explore what’s coming next, Labs is the place to be.
But what was the first Labs preview feature we put in there? Well, it’s a big one… Purpose-specific triggers and conditions
Almost two years ago, we released a new automationAutomations in Home Assistant allow you to automatically respond to things that happen in and around your home. [Learn more] editor that unwrapped all our actionsActions are used in several places in Home Assistant. As part of a script or automation, actions define what is going to happen once a trigger is activated. In scripts, an action is called sequence. [Learn more] and made them easier to understand. Instead of a single, obscure “Call service” action, you now see clear options like “Light: Turn on” or “Media Player: Set Volume”.
Ever since, we’ve been wondering: could we do the same for triggersA trigger is a set of values or conditions of a platform that are defined to cause an automation to run. [Learn more] and conditionsConditions are an optional part of an automation that will prevent an action from firing if they are not met. [Learn more]? Instead of relying on technical, state-based options, what if we could offer intuitive alternatives that just make sense? Options like “When a light turns on” or “If a light is on”.
That idea set a two-year plan in motion, and today it’s finally becoming a reality.
Along the way, we discovered something interesting: many of you take a “target-first” approach when building automationsAutomations in Home Assistant allow you to automatically respond to things that happen in and around your home. [Learn more]. You think about what you want to automate (a deviceA device is a model representing a physical or logical unit that contains entities., an entityAn entity represents a sensor, actor, or function in Home Assistant. Entities are used to monitor physical properties or to control other entities. An entity is usually part of a device or a service. [Learn more], or an areaAn area in Home Assistant is a logical grouping of devices and entities that are meant to match areas (or rooms) in the physical world: your home. For example, the living room area groups devices and entities in your living room. [Learn more]) before thinking about how to automate it (which action to perform or which trigger to use). This release embraces that mindset with a completely new way to build automations.
Purpose-specific triggers and conditions are now provided directly by domainsEach integration in Home Assistant has a unique identifier: The domain. It is often shown as the first part (before the dot) of entity IDs. like Light, Climate, Fan, and others, covering the most common automation use cases.
These new triggers and conditions fully support targeting. This means you can trigger an automation when any light in your living room turns on, without having to list them one by one or create a group beforehand. Targeting an area keeps things simple: it’s always aligned with how your home is organized, and you don’t have to update anything when you add or remove devices.
LabelsLabels in Home Assistant allow grouping elements irrespective of their physical location or type. Labels can be assigned to areas, devices, entities, automations, scenes, scripts, and helpers. Labels can be used in automations and scripts as a target for actions. Labels can also be used to filter data. [Learn more] are supported too! You can now check if any of your Christmas lights are on. Perfect timing for the holidays!

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant (Blog officiel)">

### 119. `EN` [The best gets better - Home Assistant Connect ZBT-2](data/articles/0f1c94c81faf5bb72c861a97534c8399.html)
**Source:** Home Assistant (Blog officiel)
The easiest way to start with Zigbee or Thread just got even better, with Home Assistant Connect ZBT-2. This USB adapter plugs into your Home Assistant system and opens up a world of smart device options. Between its precisely tuned antenna and next-generation chip, it’s a big step up for anyone looking to connect Zigbee, Thread, or Matter devices directly to Home Assistant.
For all our Zigbee fans, this might be the best upgrade you’ll make all year. We’ve squeezed every inch out of this technology, giving it the best range, speed, and stability possible. The same can be said for our Thread-heads out there (yeah, I just came up with that cool nickname ), making Matter or ESPHome Thread connections rock-solid. Pick whether to dedicate your Connect ZBT-2 to run a Zigbee or Thread network, and it’ll provide the best experience for that protocol (and if all these names just sound like new streaming services to you, check out our explainer below).
If you’re one of those people still rocking three different hubs, what are you waiting for… another giant server outage to take down your smart home? Ditch those cloud hubs and take back your privacy today. As an added bonus, your devices will likely get more controls, range, and resilience.
Available today starting at $49 and €45 (that’s the MSRP, and pricing will vary by retailer). Designed and built by Nabu Casa and the Open Home Foundation, every purchase helps fund the development of Home Assistant. For quick specs, details, and where to buy, visit our beautiful Home Assistant Connect ZBT-2 page.
What are Zigbee, Thread, and Matter? The short answer is they’re all open standards that let smart devices talk directly to your smart hub of choice, like Home Assistant. We love open standards because they don’t rely on the cloud, which means your devices are fully under your control at home, with no risk of turning into a paperweight if the manufacturer gets bored of paying the server fees. Also, when used with Home Assistant, your smart home data never needs to leave your home, which is always better for privacy.
Zigbee is a wireless standard that’s been a cornerstone of smart home technology for nearly two decades, with thousands of devices from brands like Philips Hue, IKEA, Aqara, Sonoff, frient, and ThirdReality. There’s a good chance you already have some of these devices in your home, and they’ll have their own hubs, which frankly are just taking up extra space, as everything is better connected right to Home Assistant .
Matter is the big new standard – its tech is cutting-edge, and growing really fast. It can use Wi-Fi to talk to devices, but if that device is battery-powered, it’ll probably use Thread instead. Matter devices that use Thread are getting really good, and many are Works with Home Assistant certified, including devices from Nuki, Eve, MotionBlinds, and Aqara.
Whether you set up your Connect ZBT-2 to use Zigbee or Thread, you can’t really go wrong, as both standards have devices for nearly every smart home need. Both give devices great battery life, take some strain off your Wi-Fi, and counterintuitively, the more devices you have, the better the range and stability can be.
Standing on the shoulders of giants
In 2022, we released Home Assistant Connect ZBT-1 (originally called SkyConnect), our first product in the Connect line and first USB adapter. Connect ZBT-1 was designed to be the easiest, most stable way to connect Zigbee devices to Home Assistant. It also came with Thread connectivity support, which was very new at the time. All these years later, it continues to receive software support and is a community favorite.
Sales of Connect ZBT-1 helped fund Home Assistant’s development, and we learned so much that has influenced its next iteration. Alas, as much as we love our little Connect ZBT-1, today we’re saying goodbye. We have now ended production of Connect ZBT-1, but software support will continue. If you’re still using Connect ZBT-1, expect it to keep working far into the future.
If you are looking to upgrade your Zigbee network with a Connect ZBT-2, don’t forget you can continue to use your Connect ZBT-1 as a way to dip your toes into the world of Thread – it’s very easy to switch operating modes.
Upgrading everything
Compared to its predecessor, this version has upgraded everything. First off, we’ve doubled the product number from ZBT-1 to ZBT-2… that’s 2x better already! But there’s definitely more.
Stick with an antenna
First off, to achieve peak performance, we moved away from the small “stick” form factor. Small USB sticks are convenient, but USB ports and nearby electronics can create interference that weakens the signal. With Connect ZBT-1, we using a USB extension cable to keep the adapter away from noise.
With Connect ZBT-2, we’ve designed away this issue. It’s much easier to properly position as it’s now a free-standing antenna and base, which is perfectly tuned for Zigbee and Thread. The larger antenna is not only good at broadcasting to further away devices, but is also good at listening out for faint signals from far away devices. We even optimized the base, which acts as a “ground plane”, boosting the antenna’s performance. It includes a 1.5 m (4.9 ft) USB cable that lets you place it in a good spot to avoid any interference.
Four times the speed
Inside Connect ZBT-2 is the Silicon Labs MG24, an advanced Zigbee/Thread system-on-chip. Compared to the MG21 used in Connect ZBT-1, it brings higher processing power and better sensitivity to weak signals.
We also took the opportunity to quadruple the internal communications speed of the chip – taking the baud rate from 115,200 bps to 460,800 bps. In our testing, we saw consistent improvements in device responsiveness. Don’t expect your devices to turn on four times faster, but you’ll feel the difference when turning on several devices simultaneously.
Built for Home Assistant
It is really easy to take advantage of all this performance, as we always work to make Home Assistant hardware super easy to start with. Just plug in the device via the included cable into a spare USB port on your Home Assistant system, and the setup wizard will guide you through everything. This all works so well because the same people who built Zigbee and Thread into Home Assistant also helped build Connect ZBT-2.
You can start a new Zigbee or Thread network in minutes, or use our improved migration tools to move an existing network over. It’s a very easy upgrade, and most adapters migrate with just a few clicks. Best of all, every Home Assistant user upgrading to new adapters will benefit from these new migration tools. Just another example of how hardware sales help level up our software development.
Compatibility and flexibility
Home Assistant Connect ZBT-2 supports Zigbee 3.0 (and yes, we’re looking at Zigbee 4.0 support as well) and is keeping pace with Thread’s rapid development. We’ve tested it working great with ZHA, zigpy-cli, Zigbee2MQTT, matter.js, and OpenThread Border Router, giving you the flexibility to choose how you manage your network.
If it’s a Zigbee-certified device or Matter-certified device that uses Thread, it should work out of the box. Home Assistant already has one of the widest compatibility lists in the world, and our community continuously expands it with every new release. For brands that support the functionality, there are also Over-the-Air (OTA) firmware updates for devices.
Just note: Connect ZBT-2 can only use one protocol at a time, meaning you must choose either Zigbee or Thread. We’ve done extensive testing in the past on running both at the same time, and found it just doesn’t work well for a whole list of reasons.
Second-generation power
Our second-generation Connect line products are all about being open and performant, and one addition that fulfills this promise is our inclusion of the ESP32 chip.

</div>

<div class="article-item" data-lang="en" data-category="iot" data-source="Home Assistant (Blog officiel)">

### 120. `EN` [Ending production of Home Assistant Yellow](data/articles/4e360ad6dcf7fcc700e3b9dd01d0cc5c.html)
**Source:** Home Assistant (Blog officiel)
Today, we’re announcing that we will no longer be producing Home Assistant Yellow. Rest assured, it will continue to receive software support far into the future.
I’m Carl, Vice President of Commercial at Nabu Casa, the organization that builds and sells official hardware for the Open Home Foundation. I couldn’t be more proud of our hardware achievements over the past 12 months, including Voice Preview Edition and Connect ZWA-2 (including its cool new Wi-Fi and PoE experimental firmware).
Home Assistant Yellow was similarly groundbreaking at launch and helped fund Home Assistant’s development. However, for reasons I’ll explain below, the time has come to end production. This means that if you were considering buying a Home Assistant Yellow, you’ll need to act fast, as stock will not be replenished (check the Order Now button on the Home Assistant Yellow page to see if your local retailer still has stock).
Nabu Casa is now exploring what hardware could replace Home Assistant Yellow, so if you have any suggestions on what we should do next, please tell us in the ! In the meantime, the good news is that there are already plenty of other great ways to run Home Assistant. For example, if you’re looking for hardware that’s both easy to start with and supports the Open Home Foundation, we’d recommend the Home Assistant Green.
A golden era
There is a long yellow brick road that brought us to today. All the way back in 2021, we announced Home Assistant Yellow (originally called Amber). It included some pretty unique features, including its built-in Zigbee or Thread adapter, optional PoE, and overall expandable approach. As it used the Raspberry Pi Compute Module platform, included GPIO, and had an NVMe slot, there were a lot of different ways you could upgrade it over time (including people being able to upgrade from CM4 to CM5, which was quite the speed bump ).
It wasn’t all smooth sailing with Home Assistant Yellow. We essentially launched the device in the middle of the great Pi shortage. It definitely complicated things for a time, but it all eventually stabilized. In late 2023, we launched Home Assistant Green, which became the easiest way to get started with Home Assistant. This new product led us to end the sale of Home Assistant Yellow devices that shipped with a CM4 already installed (called the Home Assistant Yellow Standard), which allowed us to focus the product line on the kit versions.
Home Assistant Green continues to have strong sales, but Home Assistant Yellow sales have been naturally slowing down, as happens a couple of years into any product’s life. This month, it finally reached the point where it no longer made sense to have another production run, which ultimately pushed us to discontinue Home Assistant Yellow.
Technology changes, and small-form-factor computing has always moved fast. For instance, in the early days of Home Assistant, the community’s de facto recommendation was always the most recent Raspberry Pi device, but we’re seeing more people gravitate towards Mini PCs. We’re now exploring what we could build next for our power users, but we’re still some way off, so don’t wait if you need something today.
Software support continues
As long as it’s possible to run Home Assistant on Yellow, we will continue to provide builds. If you want living proof of this commitment, take our first hardware device: Home Assistant Blue. It ended production in 2022, but still receives new builds of Home Assistant, something that shows no signs of changing for a long time. We continue to streamline and make Home Assistant more efficient, as it’s our goal for you to run it on the hardware you have.
Say ‘ellow to the future
I’d just like to take a moment to thank everyone who bought a Home Assistant Yellow over the years, and for all the great feedback you shared with us. We’re sad to say goodbye to our trusty little expandable powerhouse, but it’s had a good run and we’re super proud of how far we’ve come. Also, we’ll soon be announcing the date of our next hardware product (not a computing device… but something very cool nonetheless), so stay tuned!

</div>

</section>

---

<section id="windows" data-category="windows">

## Windows

<div class="article-item" data-lang="en" data-category="windows" data-source="BleepingComputer Windows">

### 1. `EN` [Microsoft testing Windows 11 batch file security improvements](data/articles/ba152f8acd1889107812979662e2dc10.html)
**Source:** BleepingComputer Windows
Microsoft is rolling out new Windows 11 Insider Preview builds that improve security and performance during batch file or CMD script execution. [...]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Windows Latest">

### 2. `EN` [Microsoft says 2026 is the moment for AI PCs, touts Windows 11 Recall, Copilot, and “the highest standard” of security](data/articles/f4a1eeedc342833cc5e3a76aa6a5823f.html)
**Source:** Windows Latest
Microsoft says 2026 is the moment for AI computers, and it has listed some of the features you should look for.

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Neowin">

### 3. `EN` [Microsoft Office 2021 Professional Plus digital license at 84% off](data/articles/81f1e3b15b62ec3412b83a50dc9e6991.html)
**Source:** Neowin
Word, Excel, Teams, PowerPoint, Outlook, and OneNote! Get all these essential Microsoft apps for your Windows PC for a low one-time cost. ...

</div>

<div class="article-item" data-lang="fr" data-category="windows" data-source="GNT">

### 4. `FR` [Microsoft alerte sur une campagne de fausses offres ciblant les développeurs Next.js](data/articles/b1f654f183470d79c249bd5a40709042.html)
**Source:** GNT
Une nouvelle campagne de cyberattaque cible les développeurs Next.js via de faux projets de recrutement. Microsoft alerte sur ces dépôts de code piégés qui, sous couvert de tests techniques, installent des logiciels malveillants pour exfiltrer des données sensibles et prendre le contrôle des machines compromises.

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="BleepingComputer Windows">

### 5. `EN` [CISA warns that RESURGE malware can be dormant on Ivanti devices](data/articles/0cb405ed9ebe82e20a2434fb596af5be.html)
**Source:** BleepingComputer Windows
The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has released new details about RESURGE, a malicious implant used in zero-day attacks exploiting CVE-2025-0282 to breach Ivanti Connect Secure devices. [...]

</div>

<div class="article-item" data-lang="fr" data-category="windows" data-source="Next INpact">

### 6. `FR` [Windows Server va (enfin) permettre de démarrer sur une partition ReFS](data/articles/8901ad18c54fb8d2b73ad513d4907fa5.html)
**Source:** Next INpact
ReFS, pour Resilient File System, est le système de fichiers propriétaire conçu par Microsoft à destination des très grands espaces de stockage, avec une capacité maximale fixée à 35 Po par volume, contre 256 To en standard sur NTFS. Introduit sous Windows (8.1) et Windows Server (2012), il y a près de 14 ans, ReFS […]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Neowin">

### 7. `EN` [After 14 years, Windows Server finally gets ReFS boot support](data/articles/27190c75344ff67f9715396b68283812.html)
**Source:** Neowin
Microsoft has officially introduced boot support for the Resilient File System (ReFS) in the latest Windows Server Insider Preview builds. ...

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Neowin">

### 8. `EN` [Microsoft announces new “mini PCs” for Windows 365](data/articles/d556f459c5a3fe74910382ea2bb20434.html)
**Source:** Neowin
Microsoft is expanding the lineup of hardware designed to access Windows 365, its service that lets you rent a Windows PC in the cloud. ...

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="BleepingComputer Windows">

### 9. `EN` [Microsoft expands Windows restore to more enterprise devices](data/articles/a1f577bd63a9496769bee2de7b56d094.html)
**Source:** BleepingComputer Windows
Microsoft now allows more enterprise users to restore their personal settings and Microsoft Store apps from a previous Windows 11 device. [...]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="BleepingComputer Windows">

### 10. `EN` [Medical device maker UFP Technologies warns of data stolen in cyberattack](data/articles/8d9ea9797d896bc05661ae003dab1f24.html)
**Source:** BleepingComputer Windows
American manufacturer of medical devices, UFP Technologies, has disclosed that a cybersecurity incident has compromised its IT systems and data. [...]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Windows Latest">

### 11. `EN` [I tested Microsoft Edge’s AI tab organizer, and it’s shockingly good](data/articles/cdc5e3f1223c6e3337af28ebf9e7bef2.html)
**Source:** Windows Latest
Microsoft Edge Organize Tabs uses AI to auto-group tabs by topic and color. Here’s a hands-on test of how well it organizes 40+ messy tabs.

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Windows Latest">

### 12. `EN` [Privacy researcher debunks Microsoft Edge’s free VPN marketing, says it’s “NOT a VPN”](data/articles/fd4f3f6c9ab256e6f578ccc92f8c2518.html)
**Source:** Windows Latest
Microsoft promoted Edge Secure Network VPN as a free, built-in way to browse more securely, but a privacy researcher argues the feature only protects traffic inside the Edge browser.

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Windows Latest">

### 13. `EN` [Microsoft ranks Copilot as Windows 11’s top productivity app, above File Explorer and Snipping Tool](data/articles/68e81351df34bd3ee3175b492df6c5c5.html)
**Source:** Windows Latest
Microsoft lists Copilot as the number one productivity app for Windows 11, well above File Explorer and Snipping Tool.

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Windows Latest">

### 14. `EN` [Microsoft tests a Windows 11 taskbar feature that lets AI see your open apps when you share window](data/articles/a4e37e3e654ac56243d8b9be71e3b27c.html)
**Source:** Windows Latest
Microsoft is experimenting with a new Windows 11 taskbar setting that allows users to share any open app window directly with Copilot or other approved AI assistants. The feature builds on earlier “Share with Copilot” testing and shows how the taskbar is evolving into a dynamic hub for AI.

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Neowin">

### 15. `EN` [Microsoft: Copilot can now take care of meeting conflicts in Outlook](data/articles/bd6d31f3e89155ade000445e13f88f16.html)
**Source:** Neowin
Microsoft is launching an AI-driven Copilot feature for Outlook that automatically resolves calendar conflicts by rescheduling one-on-one meetings. ...

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="BleepingComputer Windows">

### 16. `EN` [APT37 hackers use new malware to breach air-gapped networks](data/articles/41eeba5035c59eb26f41e4eb50e43f7b.html)
**Source:** BleepingComputer Windows
North Korean hackers are deploying newly uncovered tools to move data between internet-connected and air-gapped systems, spread via removable drives, and conduct covert surveillance. [...]

</div>

<div class="article-item" data-lang="fr" data-category="windows" data-source="GNT">

### 17. `FR` [Fini les clés perdues, votre smartphone va tout déverrouiller grâce à Aliro](data/articles/d10388dbadebedf6f4c44fb582c9b9d4.html)
**Source:** GNT
La Connectivity Standards Alliance lance Aliro 1.0, un protocole unifié pour les clés numériques. Soutenu par Apple, Google et Samsung, il vise à standardiser l'ouverture des serrures connectées via smartphone ou montre, en utilisant NFC, Bluetooth et UWB. L'objectif est de mettre fin à la fragmentation du marché et de simplifier l'accès aux domiciles, bureaux et hôtels.

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Neowin">

### 18. `EN` [Windows 11 gets built-in network speed, improved dark mode, and more in build 28020.1673](data/articles/cfc2525ee80a7e1ef418f2e29833fe93.html)
**Source:** Neowin
Windows 11 build 28020.1673 is here for Canary users, offering them new emojis, a built-in network speed test (sort of), better dark mode, and more. ...

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="BleepingComputer Windows">

### 19. `EN` [Europol-led crackdown on The Com hackers leads to 30 arrests](data/articles/9b8ceb98f8b229f87807ad37cab6654c.html)
**Source:** BleepingComputer Windows
A yearlong Europol-coordinated operation dubbed "Project Compass" has led to 30 arrests and 179 suspects being tied to "The Com," an online cybercrime collective that targets children and teenagers. [...]

</div>

<div class="article-item" data-lang="fr" data-category="windows" data-source="GNT">

### 20. `FR` [Microsoft introduit Copilot Tasks pour agir à votre place](data/articles/cc21b09e857fab1f1e80a976109419f8.html)
**Source:** GNT
Impossible d'échapper à la mode de l'IA agentique. Microsoft ne fait pas exception en dévoilant Copilot Tasks pour l'évolution et la transformation de son assistant IA.

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Neowin">

### 21. `EN` [OpenAI signs a $50 billion deal with Amazon, partnership with Microsoft remains unchanged](data/articles/dca085c45a3c5e3014a81b59cdacc0b2.html)
**Source:** Neowin
As part of one of the largest private funding rounds in history, OpenAI secures a massive $50 billion infrastructure deal with Amazon, while maintaining its cooperation with Microsoft. ...

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Neowin">

### 22. `EN` [Microsoft and OpenAI clarify partnership terms as Amazon joins the fold](data/articles/2d349f044d3c2cb485b0f0f00195fbac.html)
**Source:** Neowin
The new AWS partnership signals a multi-cloud future for OpenAI, balancing its legacy ties with Microsoft including the revenue sharing agreement. ...

</div>

<div class="article-item" data-lang="fr" data-category="windows" data-source="Next INpact">

### 23. `FR` [OpenAI lève 110 milliards de dollars auprès d’Amazon, Softbank et NVIDIA](data/articles/a9163327da80677049c3fb5bbda878f4.html)
**Source:** Next INpact
La bourse attendra : OpenAI a dévoilé vendredi les modalités d’un nouveau tour de table record, avec 110 milliards de dollars réunis, sur la base d’une valorisation à 730 milliards de dollars. L’entreprise dirigée par Sam Altman en profite pour annoncer un partenariat renforcé avec Amazon, et assure que son accord avec Microsoft n’est pas […]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="BleepingComputer Windows">

### 24. `EN` [Third-Party Patching and the Business Footprint We All Share](data/articles/8b9f836f77be7cef7976300bf346748a.html)
**Source:** BleepingComputer Windows
Everyday tools like PDF readers, email clients, and archive utilities quietly define the real attack surface. Action1 explains how third-party software drift increases exploit risk and why consistent patching reduces exposure across endpoints. [...]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="BleepingComputer Windows">

### 25. `EN` [Ukrainian man pleads guilty to running AI-powered fake ID site](data/articles/f4dc847e1136e6405bbcdede19524606.html)
**Source:** BleepingComputer Windows
A Ukrainian man has pleaded guilty to operating OnlyFake, an AI-powered website that generated and sold more than 10,000 photos of fake identification documents to customers worldwide. [...]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Neowin">

### 26. `EN` [Android 17 Beta 2: New privacy controls and game performance tweaks](data/articles/1a064a284527bdc0382f7dd8ae589a5f.html)
**Source:** Neowin
Android 17 Beta 2 adds EyeDropper APIs, a 3-hour OTP security delay, and system-wide chat bubbles. Test SDK 37 before the June 2026 stable release. ...

</div>

<div class="article-item" data-lang="fr" data-category="windows" data-source="Next INpact">

### 27. `FR` [Face aux projets de centres de données, des résistances s’organisent](data/articles/d09c9f3c48f13442ac841cadbeff59c8.html)
**Source:** Next INpact
Alors que des contestations émergent autour de plusieurs projets de centres de données en France et ailleurs, des associations tentent de se saisir de ces occasions de visibilisation de l’infrastructure numérique pour ouvrir un débat sur la trajectoire technologique. « Méga datacenter, incinérateur, c’est non ! » À Vitry-sur-Seine, dans le Val-de-Marne, le remplacement d’un dépôt pétrolier […]

</div>

<div class="article-item" data-lang="fr" data-category="windows" data-source="Next INpact">

### 28. `FR` [Une fuite chez un éditeur de logiciels médicaux expose 11 à 15 millions de Français](data/articles/d8c3f0f914e70e1ca8f0feacfa76539c.html)
**Source:** Next INpact
Cegedim Santé a admis jeudi soir avoir été victime d’une intrusion réalisée au travers de son logiciel de santé MonLogicielMedical.com. Révélée par le 20 heures de France 2, la fuite de données pourrait toucher entre 11 et 15 millions de Français. Elle ne concernerait cependant que le dossier administratif des patients, et non leurs dossiers […]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Neowin">

### 29. `EN` [Microsoft introduces Copilot Tasks, a new way to get things done using AI](data/articles/d3da8e910a89897bd9c60566dee23b97.html)
**Source:** Neowin
Microsoft is entering the AI agent space with Copilot Tasks, a tool designed to execute background actions like web browsing and app coordination to get things done. ...

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="BleepingComputer Windows">

### 30. `EN` [Previously harmless Google API keys now expose Gemini AI data](data/articles/e9655cf046b130dd6f98865a20772499.html)
**Source:** BleepingComputer Windows
Google API keys for services like Maps embedded in accessible client-side code could be used to authenticate to the Gemini AI assistant and access private data. [...]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Neowin">

### 31. `EN` [Here are all the new features Microsoft added to Teams in February 2026](data/articles/12267878b8ee266a2bcfb83f87655f9b.html)
**Source:** Neowin
Teams keeps piling on the upgrades, and February 2026 brings a long list of new features across chat, meetings, and more. ...

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Neowin">

### 32. `EN` [Beware: Windows PCs are being sold with misleading storage specs on Amazon](data/articles/b4b4b2fc5fdfa0c3adf4f3a619ec7717.html)
**Source:** Neowin
Amazon sellers are quietly inflating Windows laptop storage by bundling OneDrive, and many buyers are missing the fine print. ...

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="BleepingComputer Windows">

### 33. `EN` [Trend Micro warns of critical Apex One code execution flaws](data/articles/a1e6bb058188ffc4f47d0bc5b4d2e55d.html)
**Source:** BleepingComputer Windows
Trend Micro has patched two critical Apex One vulnerabilities that allow attackers to gain remote code execution (RCE) on vulnerable Windows systems. [...]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="BleepingComputer Windows">

### 34. `EN` [European DYI chain ManoMano data breach impacts 38 million customers](data/articles/e35da055fe9a41b86edb5b2759b8e932.html)
**Source:** BleepingComputer Windows
DIY store chain ManoMano is notifying customers of a data breach personal data, which was caused by hackers compromising a third-party service provider. [...]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Neowin">

### 35. `EN` [Inside Cyber: How AI, 5G, IoT, and Quantum Computing Will Transform Privacy, Security](data/articles/c6018eb0c893d80a444e42d807b794d4.html)
**Source:** Neowin
Discover how to navigate the intersection of tech, cybersecurity, and commerce. ...

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="BleepingComputer Windows">

### 36. `EN` [Critical Juniper Networks PTX flaw allows full router takeover](data/articles/fdc3822d60a6a8c6ec3c33a4f8f71122.html)
**Source:** BleepingComputer Windows
A critical vulnerability in the Junos OS Evolved network operating system running on PTX Series routers from Juniper Networks could allow an unauthenticated attacker to execute code remotely with root privileges. [...]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="BleepingComputer Windows">

### 37. `EN` [Olympique Marseille confirms 'attempted' cyberattack after data leak](data/articles/57706e527f6de39e46b7c86b9e86acd4.html)
**Source:** BleepingComputer Windows
French professional football club Olympique de Marseille has confirmed a cyberattack after a threat actor claimed on Monday that it breached the club's systems earlier this month. [...]

</div>

<div class="article-item" data-lang="fr" data-category="windows" data-source="Next INpact">

### 38. `FR` [Arcom : nouvelle série de mesures de blocage de médias russes sous sanctions](data/articles/8433827df2ceb14102c2f7f0a961246b.html)
**Source:** Next INpact
L’Autorité de régulation de la communication audiovisuelle et numérique (Arcom) a annoncé jeudi avoir prononcé une nouvelle série de mesures de blocage et de déréférencement portant sur 35 sites de médias russes soumis à des sanctions européennes. Adressées aux fournisseurs d’accès à Internet, aux moteurs de recherche et aux fournisseurs de services DNS, ces mesures […]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Windows Latest">

### 39. `EN` [Exclusive: Lenovo Legion Go Fold is a handheld with foldable display, doubles as a PC](data/articles/c428b4522e2019982309678e50c41485.html)
**Source:** Windows Latest
Exclusive: Lenovo Legion Go Fold is a handheld with foldable display, doubles as a PC

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="BleepingComputer Windows">

### 40. `EN` [Ransomware payment rate drops to record low as attacks surge](data/articles/3fcf2da961e217bc3c3c5351bbd6850f.html)
**Source:** BleepingComputer Windows
The number of ransomware victims paying threat actors has dropped to 28% last year, an all-time low, despite a significant increase in the number of claimed attacks. [...]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Neowin">

### 41. `EN` [VMware finally fixes broken updates and other issues in the latest Workstation Pro release](data/articles/3ed411de53d9f82ef1601da9592623df.html)
**Source:** Neowin
A new update for VMware Workstation is now available, fixing the long-standing bug with updates and plenty of other issues. ...

</div>

<div class="article-item" data-lang="fr" data-category="windows" data-source="Next INpact">

### 42. `FR` [Les diplomates US sommés de lutter contre le RGPD et la souveraineté numérique](data/articles/0b1b05b91edb23103ef49bcee6e09ac3.html)
**Source:** Next INpact
Pour Marco Rubio, le RGPD impose « des restrictions inutiles et contraignantes en matière de traitement des données et des exigences en matière de flux transfrontaliers de données » qui pourraient nuire aux intérêts des entreprises technologiques états-uniennes. L’administration Trump vient d’ordonner aux diplomates états-uniens de faire pression contre les initiatives encourageant la souveraineté et […]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="BleepingComputer Windows">

### 43. `EN` [New York sues Valve for promoting illegal gambling via game loot boxes](data/articles/eb5623a69f65578dee2c7fc5a44d7123.html)
**Source:** BleepingComputer Windows
New York Attorney General Letitia James sued video game developer and publisher Valve Corporation for using game loot boxes to facilitate illegal gambling activities among children and teenagers. [...]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Windows Latest">

### 44. `EN` [Windows 11 KB5077241 adds Internet speed test, direct download links for offline installers (.msu)](data/articles/cb76dd5ff690e064b6e70ecde0b6fe83.html)
**Source:** Windows Latest
Windows 11 KB5077241 is now rolling out with new features, such as Emoji 16, which means you'll get a handful of new emojis.

</div>

<div class="article-item" data-lang="fr" data-category="windows" data-source="Next INpact">

### 45. `FR` [Après la cybersécurité, Claude Code fait trembler IBM en bourse en s’attaquant à Cobol](data/articles/9736746520d0f7e304385dfa84f94f7b.html)
**Source:** Next INpact
Anthropic a coup sur coup procédé à deux annonces qui ont fait l’effet de petits séismes sur les marchés financiers. Plusieurs grands noms de la cybersécurité ont ainsi vu leur cours de bourse chamboulé suite à l’annonce, vendredi, de Claude Code Security. Lundi, c’est le géant IBM qui a connu la plus mauvaise journée boursière […]

</div>

<div class="article-item" data-lang="fr" data-category="windows" data-source="Next INpact">

### 46. `FR` [Microsoft annonce quelques nouvelles possibilités dans son cloud « souverain »](data/articles/fa6b9c53aee7e7541c805f4eac498448.html)
**Source:** Next INpact
En juin dernier, Microsoft annonçait la disponibilité en Europe d’un nouveau programme qui faisait la promesse de données restant au sein des frontières de l’Union et donnait des assurances quant au contrôle assuré par un personnel européen. Huit mois plus tard, l’éditeur étatsunien ajoute quelques nouveautés à son offre. Ainsi, Microsoft met en avant la […]

</div>

<div class="article-item" data-lang="fr" data-category="windows" data-source="Next INpact">

### 47. `FR` [Mineurs sur Internet : « Réglementez les plateformes, pas les enfants »](data/articles/22f6149b0d2b49964d3a298907a0a29f.html)
**Source:** Next INpact
Réseaux sociaux, IA, jeux vidéo… alors que le gouvernement français s’affiche à la pointe de la régulation des usages du numérique par les enfants, le commissaire aux droits de l’homme du Conseil de l’Europe demande aux législateurs européens de diriger les réglementations sur les obligations des plateformes plutôt que sur les mineurs. « Alors que […]

</div>

<div class="article-item" data-lang="fr" data-category="windows" data-source="Next INpact">

### 48. `FR` [Pour Goldman Sachs, l’IA n’apporte pas grand-chose à l’économie des États-Unis](data/articles/a8590eadc43cc1a6db926d76dc7deb12.html)
**Source:** Next INpact
Plusieurs analystes financiers, dont ceux issus de Goldman Sachs, Morgan Stanley ou JP Morgan Chase remettent en cause la croissance que l’industrie de l’intelligence artificielle apporterait à l’économie américaine. En parallèle, les alertes sur la manière de comptabiliser le poids des infrastructures dans les investissements des géants numériques se multiplient, y compris de la part […]

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Windows Latest">

### 49. `EN` [WhatsApp is testing Windows 11 “Resume” to pick up chats from Android](data/articles/8c98b505a77c52c866c708966b12792b.html)
**Source:** Windows Latest
WhatsApp may soon let you continue Android conversations (and possibly calls) on Windows 11 via “Resume." This feature showed up on some PCs.

</div>

<div class="article-item" data-lang="en" data-category="windows" data-source="Windows Latest">

### 50. `EN` [Opinion: Windows 11 isn’t the disaster some claim – and it’s time to say so](data/articles/be6d363c475bc10697850e0b2f6d3230.html)
**Source:** Windows Latest
Windows 11 has faced loud criticism, especially after a turbulent 2025, but the narrative ignores historical context. Every Windows version has gone through similar update cycles, bug waves, and trust rebuilds. We examine how scale, visibility, and rapid servicing shape perception and why most systems continue running without major issues.

</div>

</section>

---

<section id="mac" data-category="mac">

## Mac / Apple

<div class="article-item" data-lang="en" data-category="mac" data-source="MacRumors">

### 1. `EN` [What to Expect From Apple's Big Week: iPhone 17e, Low-Cost MacBook, New iPads, and More](data/articles/ea6037dbf07201ce0c6b1e382bbbc981.html)
**Source:** MacRumors
What to Expect From Apple's Big Week: iPhone 17e, Low-Cost MacBook, New iPads, and More

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="MacRumors">

### 2. `EN` [Could Apple's OLED iPad Mini Finally Be a Kindle Killer?](data/articles/9b49073edba49f06a2a09b6aac319d6d.html)
**Source:** MacRumors
With a similar screen size and easy, one-handed grip, the iPad mini has always been the Apple device that overlaps most with dedicated e-readers. Now, amid rumors pointing to an OLED display for the next generation, could the ‌iPad mini‌ finally replace devices such as the Kindle and Kobo? The shift from LCD to OLED could make the ‌iPad mini‌ far more appealing as a reading device. OLED panels allow each pixel to turn off individually, producing true blacks and extremely high contrast. Text can appear sharper and more defined against a dark background, particularly in dark mode. Night reading is also typically more comfortable because the display can emit less light overall. Color reproduction and viewing angles also improve with OLED, which could make a big difference for comics, magazines, and illustrated books. Another benefit is power efficiency. OLED displays can consume less energy when displaying dark content. That could modestly extend battery life during reading sessions. iPad models have no official water resistance rating. By contrast, devices like the Amazon Kindle Paperwhite and Kobo Libra Color are typically rated to withstand immersion, allowing users to read in the bath, by the pool, or at the beach without concern. Rumors suggest Apple is exploring a more sealed design for the next ‌iPad mini‌, potentially using vibration-based speakers and fewer ingress points to add water resistance. This could remove one of the everyday practical advantages that e-readers currently hold over the ‌iPad mini‌. However, dedicated e-readers would still retain some major advantages over the ‌iPad mini‌. Kindle and Kobo devices use e-ink screens that reflect ambient light rather than emitting light directly toward the eyes, behaving much more like paper. Many readers find that e-ink screens cause less fatigue during long reading sessions. Outdoor readability is another area where e-ink remains superior, since they become easier to read as ambient light increases. Battery life is also dramatically different. Most e-readers last weeks on a single charge because the screen only uses power when the page changes. The ‌iPad mini‌ typically lasts for around a day or two of mixed use at most. E-readers are also intentionally limited devices that focus on reading, while tablets encourage multitasking, which can make focused reading more difficult for some users. Even if OLED improves the reading experience, the ‌iPad mini‌ would still compete in a different price category. The current ‌iPad mini‌ starts at $499, and rumors suggest the OLED version could cost up to $100 more. By contrast, many Kindle and Kobo models are much more accessible and cost between $110 and $300 depending on features. OLED would still make the ‌iPad mini‌ a significantly better reading device than it already is, but the physics of e-ink displays provide advantages that OLED cannot replicate, especially for reading. What OLED could do is shift the balance slightly; for casual readers, an OLED ‌iPad mini‌ may become good enough that buying a separate e-reader no longer feels necessary. A19 Pro chip in the second half of 2026.
This article, "Could Apple's OLED iPad Mini Finally Be a Kindle Killer?" first appeared on MacRumors.com
Discuss this article in our forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="MacRumors">

### 3. `EN` [MacRumors Giveaway: Win an iPhone 17 and an Anti-Reflective Fresh Coat Screen Protector From Astropad](data/articles/d5abf0955eff0a6560aa25524b8a7e81.html)
**Source:** MacRumors
For this week's giveaway, we've teamed up with Astropad to offer MacRumors readers a chance to win an iPhone 17 and an anti-reflective Fresh Coat screen protector from Astropad to go along with it. Fresh Coat is a screen protector that Astropad created with an optical-grade anti-reflective coating to reduce glare and provide a better iPhone viewing experience. The technology cuts reflections by 75 percent, while improving contrast and keeping colors vibrant. Unlike other anti-reflective screen protectors on the market, Fresh Coat adds no haze or distortion to the ‌iPhone‌'s display. Priced at $30, Fresh Coat is made from a scratch-proof tempered glass that provides protection for the ‌iPhone‌'s display in addition to cutting down on glare and reflections. It's slim and doesn't add bulk to the ‌iPhone‌ even though there are five layers of protective technology at work. From the top down, there's an anti-reflective coating, an oleophobic and hydrophobic coating, a layer of tempered glass, a dust barrier, and an impact-resistant "airbag" bonding. If you have an ‌iPhone 17‌, it comes with an anti-reflective coating added by Apple. What you might not know is that you can't use just any screen protector with the ‌iPhone 17‌. If you put a regular screen protector without an anti-reflective coating on, it nullifies the anti-reflective properties of that added coating. Since Fresh Coat has its own anti-reflective coating, it improves on Apple's included anti-reflective layer, reducing glare even further. With Fresh Coat, the ‌iPhone‌'s screen is easy to see in any lighting conditions, there's less eye strain, and if you use Dark Mode, it looks even darker. If you don't have an ‌iPhone 17‌, Fresh Coat can provide an ‌iPhone‌ 17-style display upgrade, mirroring Apple's own reflection-reducing display coating. Fresh Coat is available for all ‌iPhone 17‌ models, the iPhone 16 Pro and Pro Max, and the ‌iPhone‌ 15 Pro and Pro Max. Astropad designed an installation process that's impossible to mess up, so you get perfect alignment on your ‌iPhone‌ without the hassle that comes with most screen protectors. Fresh Coat screen protector for one lucky MacRumors reader. To enter to win, use the widget below and enter an email address. Email addresses will be used solely for contact purposes to reach the winner(s) and send the prize(s). You can earn additional entries by subscribing to our weekly newsletter, subscribing to our YouTube channel, following us on Twitter, following us on Instagram, following us on Threads, or visiting the MacRumors Facebook page. U.S. residents who are 18 years or older, UK residents who are 18 years or older, and Canadian residents who have reached the age of majority in their province or territory are eligible to enter. All federal, state, provincial, and/or local taxes, fees, and surcharges are the sole responsibility of the prize winner. To offer feedback or get more information on the giveaway restrictions, please refer to our Site Feedback section, as that is where discussion of the rules will be redirected. Astropad Giveaway The contest will run from today (February 27) at 9:00 a.m. Pacific Time through 9:00 a.m. Pacific Time on March 6. The winner will be chosen randomly on or shortly after March 6 and will be contacted by email. The winner will have 48 hours to respond and provide a shipping address before a new winner is chosen.
Tag: Giveaway
This article, "MacRumors Giveaway: Win an iPhone 17 and an Anti-Reflective Fresh Coat Screen Protector From Astropad" first appeared on MacRumors.com
Discuss this article in our forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="MacRumors">

### 4. `EN` [Best Apple Deals of the Week: Get $100 Off Apple Watch Series 11, Plus Save on iPhone 17 TechWoven Cases and More](data/articles/dea97561abfc14a4a87471240fdcc97b.html)
**Source:** MacRumors
This week we tracked quite a few deals across numerous Apple products, including low prices on Apple Watch Series 11, AirPods Max, and iPhone 17 TechWoven cases, all of which are still available today. You'll also find great discounts on portable power stations and Samsung's new Galaxy S26 smartphones below. Note: MacRumors is an affiliate partner with some of these vendors. When you click a link and make a purchase, we may receive a small payment, which helps us keep the site running. Apple Watch Series 11 What's the deal? Take $100 off Apple Watch Series 11 Where can I get it? Amazon Where can I find the original deal? Right here $100 OFF
Apple Watch Series 11 (42mm GPS) for $299.00 $100 OFF
Apple Watch Series 11 (46mm GPS) for $329.00 $100 OFF
Apple Watch Series 11 (42mm Cell) for $399.00 Amazon this week has all-time low prices on the Apple Watch Series 11, with $100 discounts across select models of the smartwatch. This time around, deals are more sparse and we're only tracking these discounts on three models of the smartwatch. iPhone Cases What's the deal? Take up to 30% off Where can I get it? Amazon Where can I find the original deal? Right here UP TO 30% OFF
iPhone 17 Cases at Amazon Clear, Silicone, and TechWoven Cases for the iPhone 17 and iPhone Air lineup. Items on sale include Clear, Silicone, and TechWoven Cases for the iPhone 17, iPhone 17 Pro, iPhone 17 Pro Max, and iPhone Air. We're also tracking a few discounts on other accessories like the FineWoven Wallet with MagSafe and Beats cases. AirPods What's the deal? Take $30 off AirPods 4 and $100 off AirPods Max Where can I get it? Amazon Where can I find the original deal? Right here $100 OFF
AirPods Max (USB-C) for $449.00 $30 OFF
AirPods 4 for $99.00 Amazon this week is back with a notable discount on the USB-C AirPods Max, available for $449.00 in all five colors, down from $549.00. This is one of the first times in a few weeks that we've tracked every color of the AirPods Max on sale at $99 off. Samsung What's the deal? Save on Samsung's newest Galaxy S26 smartphones Where can I get it? Samsung Where can I find the original deal? Right here UP TO $900 CREDIT
Samsung Galaxy Pre-Orders $600 OFF
65-inch The Frame for $1,199.99 $1,200 OFF
75-inch The Frame Pro for $1,999.99 newest line of Galaxy products, including the S26 smartphones and Galaxy Buds4. You can find a few early launch discounts on some of these products, plus discounts on Samsung's most popular monitors and TVs, with notable markdowns on products like The Frame TVs. Portable Power Stations What's the deal? Take up to 56% off Where can I get it? Amazon and Jackery Where can I find the original deal? Right here UP TO 56% OFF
Anker SOLIX Sale UP TO 54% OFF

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="MacRumors">

### 5. `EN` [Apple Asks Judge to Toss Fraud Claims Over Siri AI, Epic Compliance](data/articles/2e0e1073a7c5416209bf1fde34707e25.html)
**Source:** MacRumors
Apple has asked a federal judge to dismiss a proposed class action lawsuit accusing the company of defrauding shareholders by overstating Siri's Apple Intelligence capabilities and misrepresenting its compliance with the Epic Games App Store injunction. At WWDC in June 2024, Apple previewed two of Siri's most anticipated Apple Intelligence upgrades – personal context and onscreen awareness. The features were supposed to arrive as part of iOS 18 and were promoted the same year when launching the iPhone 16 models, but Apple is still working on them. In 2025, CEO Tim Cook acknowledged in 2025 that developing a "more personal" Siri was "taking a bit longer than we thought." Reuters, Apple argued there is no proof executives knew at the time that either feature would be significantly delayed. Epic Games injunction, which required the company to let developers link users to external purchase options outside the App Store's 30 percent commission structure. Judge Yvonne Gonzalez Rogers found Apple in "willful violation" of that injunction last year after the company introduced a new system that still charged developers a 27 percent fee on some external sales. A federal appeals court partially reversed her sanctions in December. Apple said it never guaranteed its compliance procedures would be foolproof, and argued the fraud claims were unsubstantiated. "It is no secret that Apple faced challenges and weathered ups and downs in its stock price in 2025, like many major companies," Apple said. "But plaintiff takes a massive and unsupported leap by claiming that securities fraud caused the temporary price drops."
The lawsuit covers shareholders who suffered losses between May 2024 and May 2025 and is led by South Korea's National Pension Service, the world's third-largest pension fund. Lawyers for the shareholders have not yet responded publicly to Apple's filing. Bloomberg's latest report suggests the ‌Siri‌ functionality will not be ready in time to be included in it, so the new features could be pushed to iOS 26.5 or iOS 27.
Tags: Apple Intelligence, Epic Games vs. Apple, Apple Lawsuits
This article, "Apple Asks Judge to Toss Fraud Claims Over Siri AI, Epic Compliance" first appeared on MacRumors.com
Discuss this article in our forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="MacRumors">

### 6. `EN` [New Low-Cost iPad Coming Next Week: What to Expect](data/articles/6c7c50c8d55737796a2af739c3c29af5.html)
**Source:** MacRumors
One of the new products that we could see next week is a refreshed version of the low-cost iPad. As with the iPad Air, we're not expecting major changes, but it is expected to get some meaningful internal upgrades. Design The 12th-generation ‌iPad‌ isn't going to get a design update this year, and we're expecting it to have the same 11-inch edge-to-edge display with Touch ID Side Button and thick bezels. iPad Pro and iPad Air models. It's still a relatively new design, and Apple doesn't update the low-cost ‌iPad‌'s chassis often. The low-cost ‌iPad‌ is only available in a single screen size, and it is Apple's thickest tablet at 7mm. It features a Retina LCD display with no ProMotion support, no P3 wide color, and no lamination (display technology that cuts down on glare, provides a more responsive feel, and allows for a thinner size) compared to Apple's other tablets. Apple makes the low-cost ‌iPad‌ in several fun colors, and we could see some new shades in 2026. Current colors include blue, pink, silver, and yellow. Apple Pencil. A-Series Processor The low-cost ‌iPad‌ will likely be equipped with Apple's A19 chip, which is the chip that Apple used for the iPhone 17. It is built on a 3-nanometer process and it will offer speed and efficiency improvements over the A16 chip that's in the current model. Apple Intelligence, but the A19 does, so that will mark a major update for Apple's affordable tablet. The 2026 model should be able to support ‌Apple Intelligence‌ features that are unavailable with the 2025 model. The A19 also offers hardware-accelerated ray tracing for gaming improvements. The 11th-generation ‌iPad‌ has 6GB RAM, but Apple will need to bump that up to 8GB for ‌Apple Intelligence‌. N1 Chip Apple introduced its own Wi-Fi and Bluetooth chip, called the N1, in the ‌iPhone 17‌ models. The N1 was added to the ‌iPad Pro‌, and it's possible that Apple plans to add the chip to all future devices coming in 2026 and beyond. The N1 chip supports Wi-Fi 7, Bluetooth 6, and Thread networking technology for smart home devices. its more premium devices, based on leaked internal code. If that's the case, the ‌iPad‌ won't include the N1 chip. Apple Modem Apple has designed C1 and C1X modem chips that it has used in iPhones and iPads in 2025, and the next-generation version of the ‌iPad‌ could also get an Apple-designed modem chip for cellular models. Apple's modem chips are more power efficient than Qualcomm chips while providing similar performance. Pricing The 11th-generation ‌iPad‌ is priced starting at $349 for 128GB of storage, and there are so far no indications that pricing is going to change for the 12th-generation model. Launch Date Apple will likely launch the low-cost ‌iPad‌ sometime next week, just ahead of the Special Experience planned for March 4.
Related Roundup: iPad
Buyer's Guide: iPad (Don't Buy)
Related Forum: iPad
This article, "New Low-Cost iPad Coming Next Week: What to Expect" first appeared on MacRumors.com
Discuss this article in our forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 7. `EN` [Three ways new Apple products next week will modernize iPhone, iPad, and Mac](data/articles/108751140f2e06228c273c3c2cdd7641.html)
**Source:** 9to5Mac
Apple officially confirmed that it will begin launching new products starting on Monday, March 2. With new iPhones, iPads, and Macs, Apple will modernize its hardware lineup in three ways by saying goodbye to some old technology decisions.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 8. `EN` [Photonics research firm Invrs.io &amp; its single employee acquired by Apple](data/articles/68e52b20fee5a90b80a66305020b2f85.html)
**Source:** AppleInsider
A new filing has revealed that Apple purchased Invrs.io, acquiring its assets along with the sole equityholder, founder, and employee. Apple has acquired another AI startup — Invrs.io
Following Apple's acquisition of the audio-focused startup Q.ai in January 2026, it has been revealed that another, much smaller company has moved under the Apple umbrella.
A notice on the European Commission website, spotted by MacRumors, says that the iPhone maker acquired the photonics research company Invrs.io, LLC back in October 2025. Photonics is the science and technology of generating, controlling, and detecting photons, or light particles. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 9. `FR` [Studio Display 2 : on sait enfin ce qui différencie les deux modèles qu’Apple prépare en secret](data/articles/37ebc9f88ea8983f6290387ca048ecf0.html)
**Source:** iPhoneAddict
L'un des deux écrans pourrait offrir un son digne du HomePod.

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="MacRumors">

### 10. `EN` [Apple Music Coming to Chocolate Bars](data/articles/719ad0293374a8193fee7694b9bd230c.html)
**Source:** MacRumors
Apple is working with German confectionary brand Ritter Sport to offer a unique Apple Music promotion. The collaboration, branded as "Limited Edition Ritter Sport x ‌Apple Music‌," involves promoting iconic albums on Ritter Sport's iconic 100g square chocolate bars (via Macerkopf). There will be a QR code on the back of each bar that links directly to the album on ‌Apple Music‌ and provides a free trial subscription to the service. Ritter Sport and ‌Apple Music‌ have selected five albums that have shaped German music history across different genres, including Cro's "RAOP," Marteria's "Happy for the Future II," Scorpions' "Crazy World," Sarah Connor's "Mother Tongue," and Helene Fischer's "Farbenspiel," for the series. They are each available on ‌Apple Music‌ in Dolby Atmos. Tags: Apple Music, Germany, Macerkopf
This article, "Apple Music Coming to Chocolate Bars" first appeared on MacRumors.com
Discuss this article in our forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 11. `EN` [Studio Display Pro rumors resurface after code references suggest a premium model](data/articles/42072b999d8189c419787558bdcf2876.html)
**Source:** AppleInsider
Code fragments found in the latest iOS 24.6 beta are being taken by some to mean that there will soon be two new models of the Studio Display, with one adding more ports and better speakers. Apple's current Studio Display, which has not been updated since its launch in 2022
Back in 2022 when the Apple Studio Display was first launched, it was seen as very good but very expensive. The monitor has not been updated since, but from practically the moment it was launched, there have been rumors of better versions to come.
Now according to Macworld, references in the code of the iOS 26 developer betas appear to be proof an update is finally coming. The references are to models with code names J427 and J527, which is a strong sign that there will be two versions of the display. Rumor Score: Possible Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 12. `EN` [New Studio Display may have higher-end model with these upgrades, per leak](data/articles/6dbc613818af4817319975a4959d4519.html)
**Source:** 9to5Mac
Rumors indicate Apple has two new Studio Display models in the works, launching as soon as next week. Here’s what leaked Apple code says the higher-end model might include.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="MacRumors">

### 13. `EN` [Two More Studio Display 2 Upgrades Leaked in New Report](data/articles/a25cb637ab2c8bb5b69b6a9f531247d0.html)
**Source:** MacRumors
Macworld's Filipe Espósito today again reported that Apple appears to be developing two new Studio Display models with different specs. Based on lines of code in "internal Apple files," which likely refers to a macOS Tahoe Kernel Debug Kit that leaked online last year, Espósito continues to believe that both of the new Studio Display models will feature ProMotion, enabling up to a 120Hz refresh rate, as well as HDR support for increased brightness and dynamic range. For the higher-end Studio Display, the report has revealed two more potential upgrades that had yet to be rumored until now, including superior speakers and more and/or higher-spec ports. Apple says the current Studio Display has a "high-fidelity six-speaker system" that supports Spatial Audio, and the monitor has one Thunderbolt 3 port that connects to and charges a Mac, and three USB-C ports for connecting accessories. will max out at 90Hz, so we will have to see which of these rumors is accurate. A boost to the current 60Hz refresh rate can make videos and scrolling look smoother to the eye. Espósito said that the higher-end Studio Display could have a 32-inch screen, whereas the lower-end model would likely stick with a 27-inch screen. However, this particular claim was merely speculation, rather than info from the internal Apple files. Keep in mind that with a 32-inch screen, 5K resolution would not be Retina quality, so the resolution would have to increase to 6K like on Apple's higher-end Pro Display XDR. would feature mini-LED backlighting. If so, perhaps Apple will opt to discontinue its Pro Display XDR with full-array LED backlighting and instead offer both lower-end and higher-end Studio Display configurations. But again, this is just speculation. an A19 or A19 Pro chip, up from the A13 Bionic chip in the current model. This would contribute to improved performance, camera enhancements, and more. Altogether, the full set of Studio Display upgrades could include a higher 120Hz refresh rate, HDR support for increased brightness and contrast ratio, improved speakers, Thunderbolt 5 support, mini-LED backlighting, a newer A19 or A19 Pro chip for performance and camera enhancements, and hopefully a larger 32-inch screen. No major design changes are expected. in the first half of 2026. The current Studio Display launched in March 2022, alongside the first Mac Studio, so there has been a long wait for a refresh. With a new Apple monitor surfacing in a regulatory database last month, a launch should finally be getting close.
Related Roundups: Apple Pro Display XDR, Apple Studio Display
Tag: Macworld
Related Forum: Mac Accessories
This article, "Two More Studio Display 2 Upgrades Leaked in New Report" first appeared on MacRumors.com
Discuss this article in our forums

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 14. `FR` [Ted Lasso : la date de sortie de la saison 4 révélée par l’une de ses stars](data/articles/3d271e9bf7bfa9a0b8edfc1cf7fadd8f.html)
**Source:** iPhoneAddict
Rendez-vous cet été pour suivre les nouvelles aventures de l'entraîneur de foot préféré des abonnés Apple TV+.

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="MacRumors">

### 15. `EN` [Blender iPad App Development Halted as Android Tablets Get Priority](data/articles/a990b9a9428d77641a04fb2a6157db91.html)
**Source:** MacRumors
Blender's work on a native iPad version of its open source 3D creation suite has been shelved, according to the development team. Back in July, Blender revealed that it was developing for iPad, with an iPad Pro version of its desktop software coming first, complete with a fully-featured multitouch interface and support for Apple Pencil Pro. No release date was announced at the time. Blender's GitHub page for iPad development saying that the project is on hold until further notice. YouTuber Brad Colbow, in a response to a offering help on the project, Blender developer Dalai Felinto said that the team was now focusing on Android tablets first instead. During the fall at SIGGRAPH in Vancouver, Blender showed a live tech demo of the software running on iPad, so there's still hope that the project isn't completely dead and will resume at some point. We'll update this story if we learn anything more about a development timeline. Blender website.
Tag: Blender
This article, "Blender iPad App Development Halted as Android Tablets Get Priority" first appeared on MacRumors.com
Discuss this article in our forums

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 16. `FR` [L’iPhone et l’iPad obtiennent une validation historique de l’OTAN](data/articles/f0207f42135f376aedbb11af80ac43e3.html)
**Source:** iPhoneAddict
Une reconnaissance pour les technologies de sécurité d'Apple.

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 17. `FR` [Tim Cook promet des annonces de folie : notez cette date tout de suite](data/articles/fd13220fcb95a884f7c85e7077bbe182.html)
**Source:** iPhoneAddict
Le teaser publié par Apple donne déjà envie d'y être.

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 18. `FR` [Apple Pay s’apprête à conquérir son plus grand marché de toute son histoire](data/articles/9bee16d4ce14ddbdf148dafe1612c6b0.html)
**Source:** iPhoneAddict
Plus d'un milliard de clients potentiels.

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 19. `FR` [Ram iPhone : coup de poker d’Apple face à Samsung ?](data/articles/6f7167fa22c0ef37e951e3d778c51217.html)
**Source:** iPhoneAddict
Le prix de la mémoire explose, Apple prend une décision radicale.

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 20. `EN` [iPhone could benefit from memory chip crisis in one key way: report](data/articles/acac9421ee1214136fe47b91a2dd17da.html)
**Source:** 9to5Mac
A new Bloomberg report covering IDC data offers a dire outlook for the smartphone market in 2026 due to the current memory chip crisis, but Apple and the iPhone could actually benefit in one key way.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 21. `EN` [Xcode with vibecoding AI agents to help build apps is now available](data/articles/ffc90197024e0461a0e012095b199261.html)
**Source:** AppleInsider
Apple has released Xcode 26.3 with support for autonomous coding agents, that can directly analyze projects, modify files, and assist developers inside the official development environment. Xcode now runs with AI agents
Xcode, Apple's central tool for building apps across various devices, is expanding its role with version 26.3. AI agents can actively participate in development, offering suggestions and documentation help.
The release includes Swift 6.2.3 and updated SDKs, but the defining change is agentic coding. Xcode is now a platform where AI helps developers plan, write, and maintain software. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 22. `EN` [A decade after US authorization, the iPhone is allowed to handle classified data for NATO](data/articles/4ae32b0d1867f841f456d6de2de27b0f.html)
**Source:** AppleInsider
In a press release largely devoid of details as you'd expect given the topic, Apple has announced that the iPhone and iPad are the only consumer-grade devices that comply with NATO classified data safeguard guidance. IPhone 17 Pro Max in Orange
The certification doesn't allow the iPhone to either put in-motion or store at-rest any level of classified data. Specifically, the devices, properly managed, are allowed to handle classified information up to the NATO restricted level without requiring special software or settings.
Apple says that on the whole, no other consumer mobile device has met this standard. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 23. `EN` [iPhone and iPad approved to handle classified NATO information without any third-party add-on solutions](data/articles/ce804d5bf1d7bbfe2be67b7e8a1d077d.html)
**Source:** 9to5Mac
Today, Apple announced that the iPhone and iPad have become the first consumer devices approved for use on classified NATO networks. This means an off-the-shelf iPhone running iOS 26 can access restricted NATO data without requiring any specialized security software or custom hardware modifications.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 24. `EN` [Deals: 1TB iPhone 16 Pro Max $650 off orig. price, 16-inch MacBook Pro up to $440 off, iPad keyboard, Ocean Band, more](data/articles/82a3ac132def2893f04714dd179dc455.html)
**Source:** 9to5Mac
Today’s 9to5Toys Lunch Break is ready to roll starting with a chance to land an unlocked 1TB iPhone 16 Pro Max courtesy of Amazon at $650 off the price of the comparable iPhone 17 Pro Max (and $320 under Apple refurb store). We also have all AirPods Max (USB-C) colors at $100 off, a chance to score a 24GB M4 Pro MacBook Pro at $440 off the list price, a sizable 57% price drop on ZAGG’s Pro Keys 2 for M4/M5 iPad Pro at $65, the best price of the year on Apple’s Neon Ocean Band with Black Titanium finish, and much more below. more…

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 25. `FR` [Bon plan Apple Watch Ultra : la montre haut de gamme tombe à un prix inédit de 364 €](data/articles/f9580d2d3b4d3c9fa9c123df5150bd04.html)
**Source:** iPhoneAddict
À ce prix-là, il n'y a pas une minute à perdre.

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 26. `EN` [One more iPhone 17 model launches next week: Here’s every new feature](data/articles/dbc6c9e33ce3438b727f42aa1dd15cce.html)
**Source:** 9to5Mac
Apple is launching new products next week, as confirmed this morning by CEO Tim Cook. iPhone 17e will be one of those launches, here are the new features to expect.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 27. `EN` [How to move and delete apps on Apple CarPlay](data/articles/9f3a278b63adbbb90cbec87e842acf45.html)
**Source:** 9to5Mac
Ever wish you could rearrange or delete apps from CarPlay? It turns out you can, although it works differently than rearranging your iPhone Home screen. The trick is in the Settings app on iPhone. Just don’t try to do this while driving. You don’t even need to be connected to CarPlay for it to work.
more…

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 28. `FR` [iOS 26.4 : votre iPhone peut connaître votre âge, et vous ne pourrez plus lui mentir](data/articles/723e964aa29033433ecf423fb560fd05.html)
**Source:** iPhoneAddict
Pour protéger les mineurs des contenus inappropriés, Apple lance la vérification automatique de l'âge au Royaume-Uni.

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 29. `EN` [RAM supply is so tight, Samsung may be charging Apple double](data/articles/6b5710a4a7956fa5e32f513ee5172fd3.html)
**Source:** AppleInsider
Apple has reportedly agreed to pay Samsung double what it used to for DRAM chips, the memory used in iPhones and Macs — even though it may not have needed to just yet. Examples of older DRAM modules — image credit: Samung
Massive worldwide demand for AI servers has meant all manufacturers having a hard time securing what they need in memory, storage, and processors. It's also meant Apple losing its previous ability to negotiate low prices and long-term deals.
The latest example of the pressures Apple and others are under concerns buying DRAM supplies from Samsung. DRAM is used as RAM in the iPhone and Apple Silicon Macs, and according to Dealsite, a South Korea financial news publication, Apple has just agreed to pay double what it has before. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 30. `EN` [Backed by Apple, Aliro 1.0 aims to do for enterprise access control what Matter did for the smart home](data/articles/1941dcc66576801f1e4c124b92beede9.html)
**Source:** 9to5Mac
Enterprise access control is what I would consider “legacy” technology. A lot of the systems are Windows-based and look like a fancy Access database. On top of that, you are still dealing with physical cards. It is a fragmented mess for users and an onboarding nightmare for IT departments as well. Today, the Connectivity Standards Alliance is stepping in to fix that with the official release of the Aliro 1.0 specification aiming to create a standard for how mobile devices unlock doors, badge in, etc.
more…

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 31. `FR` [MacBook pas cher : Apple a fait deux grosses concessions pour faire baisser le prix](data/articles/9f063c6edeb402fad8098253ee04086f.html)
**Source:** iPhoneAddict
Est-ce que le public va réussir à passer au-dessus celles-ci ?

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 32. `EN` [Apple Pay set for biggest ever expansion, likely to boost iPhone sales](data/articles/13df95ac705b0cb323346f662f53af62.html)
**Source:** 9to5Mac
Apple Pay has reportedly grown to become the second largest payment processing service in the world after Visa, handling 9.5 trillion transactions for more than 800 million customers. Those numbers now look set for a significant boost as Apple prepares for its biggest ever expansion of its mobile wallet service …
more…

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 33. `FR` [iPhone Fold : 3 nouvelles infos sur ce modèle inédit (écran, caméra et Face ID)](data/articles/23a81e6a49ba95b388980e260e2d0e4e.html)
**Source:** iPhoneAddict
Apple prépare la sortie de son iPhone Fold, toujours prévue pour la rentrée prochaine.

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 34. `EN` [U.S. lawmakers request briefing on the UK's iCloud encryption backdoor plans](data/articles/0cb4e61560eda275472d7810acbab56a.html)
**Source:** AppleInsider
The UK government's continued attempts to gain access to iCloud users' private data have prompted U.S. lawmakers to request a briefing about the issue. Apple's iPhone is encrypted to ensure no one can get in, good guys or bad
Apple is a company widely known and often praised for its privacy-first approach, but sometimes that very same philosophy is at odds with the goals of world governments. The iPhone maker famously fought against an FBI request for an encryption backdoor, and it did the same when the UK came up with similar demands of its own.
The drama surrounding the UK's seemingly never-ending pursuit of iCloud user data continues. On Wednesday, two U.S. lawmakers, U.S. House Judiciary Chair Jim Jordan and Foreign Affairs Chair Brian Mast, requested that the UK government hold a briefing about its planned iCloud encryption backdoor. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 35. `EN` [iPhone 17 Pro Max vs Samsung Galaxy S26 Ultra compared](data/articles/11f8e7a3c1d17fd6d7c37d466fe79ba1.html)
**Source:** AppleInsider
Samsung's latest high-powered flagship launched on Wednesday, with the Galaxy S26 Ultra taking aim at the iPhone 17 Pro Max. Here's the tale of the tape for the two smartphone heavyweights. iPhone 17 Pro Max [left[ vs Samsung Galaxy S26 Ultra [right]
Samsung Unpacked took place on February 25, and saw the South Korean electronics giant introduce its latest smartphone lineup. As usual, this included a lot under the Galaxy S26 brand, covering a wide range of performance levels and price points.
The highlight model is the Samsung Galaxy S26 Ultra, its highest-specification model and largest device on the roster. One that everyone will be comparing with Apple's similarly-framed model, the iPhone 17 Pro Max. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 36. `EN` [Compromises for affordability ahead: Code leak spills details on new MacBook](data/articles/73c5830ad08853c6030b69740666e53f.html)
**Source:** AppleInsider
Nobody claimed it was going to be equivalent to a MacBook Pro or even a MacBook Air. A code leak details the budget MacBook having an A18 Pro chip, limits on charging, no True Tone, and more. Multicolored MacBooks are on the way
Apple is preparing a new low-cost MacBook model for launch, switching out Apple Silicon's M-series chips for an A-series from the iPhone. While the rumor mill has settled on some core specifications, other measures will help bring the cost of production down for the company.
In a technical analysis of an internal test build of macOS shared with AppleInsider, there will be quite a few smaller changes in the smaller MacBook compared to the MacBook Air and MacBook Pro. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 37. `EN` [How age verification works in iOS 26.4](data/articles/58a6032999d8f97d8d3e88c758f1eff4.html)
**Source:** AppleInsider
The latest iOS 26.4 developer beta has introduced age verification, although so far only for the UK. You can postpone setting it up, but the whole process is absurdly fast to do. Apple has added age verification to the UK iOS 26.4 beta
Amongst features such as improved RCS messaging encryption, the latest iOS 26.4 beta has added age verification for the first time. For now, it's present in the UK beta because the country's Online Safety Act requires it.
Apple's implementation is not part of how the UK uses the act to mandate that adult sites verify users' ages. It's instead another aspect of how parents can already limit their children to age-appropriate apps on the iPhone. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 38. `EN` [Blizzard's 'Overwatch Rush' reminagines legendary shooter for iPhone](data/articles/96a2ba97e1d48f66e93588d531430ffa.html)
**Source:** AppleInsider
Blizzard's "Overwatch Rush" will bring the franchise to the iPhone, but gamers are getting something different instead of the original first-person-shooter action. Overwatch Rush - Image Credit: Blizzard
Despite Blizzard's history with Apple's platforms, Overwatch has frustratingly steered clear of the Mac. However, Blizzard is now planning a return via an iPhone game, that takes things in a different direction.
Overwatch Rush is an in-development title that Blizzard describes as an entirely new game made for mobile. Instead of being a first-person shooter, it's a "top-down hero shooter." Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 39. `EN` [Supply chain proves Apple is not immune to massive SSD cost increases](data/articles/8f0cea6e6e981c88fbbe64ce67e0cc11.html)
**Source:** AppleInsider
SSD storage is now a seller's market. Apple's huge buying power no longer means it can dictate better and long-term deals with its iPhone suppliers than anyone else — for now. The iPhone 18 Pro will cost Apple more to manufacture as NAND storage costs rise
Just as it used to buy out as much of TSMC's processor capacity as possible, Apple used to bulk-buy NAND storage. In 2009, for instance, it paid Toshiba $500 million for a long-term deal.
In 2012, Apple bought 23% of the world's NAND supply, paying around $0.67/GB. NAND prices fluctuate greatly, but Apple has almost always paid less than market rates — such as in 2018, when it was reportedly paying an incredibly discounted $0.25 per gigabyte. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 40. `EN` [iPhone Fold hinge crease will be about 1/4 the depth of the Galaxy Fold 7](data/articles/d6c3ae67596ad498c11ff5fe78c4107b.html)
**Source:** AppleInsider
Apple's focus on the iPhone Fold display will finally pay off when it is released, with the device rumored to have a tiny crease compared to other foldable smartphones. The iPhone Fold's screen should be crease-free — image credit: AppleInsider
The long-rumored iPhone Fold's key feature is its ability to fold its larger display in half. But, as other foldables have shown, there is a risk of there being a noticeable crease in the middle.
If a new leak is correct, Apple's work to minimize the crease has resulted in an exceptional display. If this rumor is correct, it will have a crease, but one only barely observable to its users. Rumor Score: Possible Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 41. `EN` [Apple is launching new products next week, here’s what’s coming](data/articles/3cefa1058adc0bfb2879e71e9d31365b.html)
**Source:** 9to5Mac
Apple is holding a hardware launch event next week on March 4, and rumors indicate several new products will debut in the days beforehand too. Here’s everything Apple is rumored to launch next week.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 42. `EN` [Apple age verification in iOS 26.4 beta 2 took less than 30 seconds](data/articles/d8b7fb0d9bb589004ffacdefdb67597c.html)
**Source:** 9to5Mac
The latest beta of iOS 26.4 has an extra step for iPhone owners based in the UK. Once installed, the Settings app will prompt you to confirm that you are 18+.
If Apple isn’t sure how old you are, you may need to scan a credit card or photo ID to confirm that you’re an adult. In my case, it was completely automatic and took less than 30 seconds …
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 43. `EN` [iPhone Fold leak details crease depth and folding angle](data/articles/c2306108b3611cef8150ca3802d3ce08.html)
**Source:** 9to5Mac
Leaker Fixed Focus Digital took to Weibo once again to spill some extra details on what to expect from Apple’s first foldable iPhone. Here’s what he said.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 44. `EN` [How Apple will target consumers with a lower-cost MacBook -- again](data/articles/6264997651e2ab582f3bf8e34ea5c69d.html)
**Source:** AppleInsider
Apple's expected less-expensive MacBook is one of the company's worst-kept secrets, but if it's priced right, it could become a huge hit — just as certain previous MacBooks did. The original MacBook from 2006 — image credit: Apple
This anticipated new MacBook is expected to be significant because it will use an iPhone processor instead of the Mac's now usual M-series ones. It is that lower-cost processor that means Apple may be able to compete with Chromebooks.
That's key now, and it was important when Apple would release a MacBook range in 2015. But back in 2006 with the follow up to the iBook, the MacBook, the budget-priced and low specification Chromebook was five years away. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 45. `EN` [Selling iPhones without chargers in Brazil cost Apple one second of global revenue in fines](data/articles/5aa0021d32b07d0502ebc23b8eaed3ee.html)
**Source:** AppleInsider
Apple has been fined a tiny $20,000 by Brazil, as the country continues to disagree with Apple's 2020 decision to stop selling power adapters with iPhones. Apple's 60W charger it introduced in September 2025
Government fines are usually quite sizable when dealing with a company at the scale of Apple. However, in one long-running legal disagreement with Brazil, the fine is unusually small.
State consumer protection watchdog Procon-AL has levied the fine against Apple over its continued lack of a power charger in the iPhone box that ships to consumers. Stemming from an environmental decision made in late 2020 that Apple still follows,the fine insists that it is an essential accessory that should be provided. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 46. `EN` [Apple fined in Brazil once again for selling iPhones without a charger](data/articles/06aabd48b76ec1046833f372edc53097.html)
**Source:** 9to5Mac
Consumer protection authorities in the Brazilian state of Alagoas have fined Apple R$101,627.50 (roughly $20,000) for selling iPhones without what they described as “an indispensable item for the regular use of the product.” Here are the details.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 47. `EN` [iPhone 18 Pro again rumored to feature a smaller, redesigned Dynamic Island](data/articles/aa09ee0f006bc75cd5d32e76ef5ce62a.html)
**Source:** AppleInsider
It's been said time and time again that the iPhone 18 Pro will sport a noticeably smaller Dynamic Island. Now, yet another report has reiterated the claim. A repeat rumor says the iPhone 18 Pro will have a smaller Dynamic Island.
While the iPhone 18 Pro isn't expected to feature any major design changes, Apple's next high-end iPhone is set to receive new under-display technology that will reduce the Dynamic Island.
Following a January 2026 post with alleged dimensions of the new-and-improved Dynamic Island, a repeat rumor now says the iPhone 18 Pro will indeed receive a modified camera cutout. Rumor Score: Likely Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 48. `EN` [Touch-screen MacBook Pro to get OLED, Dynamic Island, &amp; new alternative interface](data/articles/00f491f935010105fe8b40802aad792b.html)
**Source:** AppleInsider
The MacBook Pro lineup is about to get a big shakeup later in 2026 with touch-screen capabilities and new interface elements. However, Apple won't refer to them as touch-first. Touch is finally coming to MacBook displays
Rumors around Apple bringing touch to the Mac have gone on so long that the company had to share it had zero intention of merging iPad and Mac. Instead, it seems Apple will offer something in-between without sacrificing the experience already available.
According to a report from Bloomberg, the new 14-inch MacBook Pro and 16-inch MacBook Pro with touch screens will arrive by the end of 2026. These aren't going to be a part of the March releases, but instead, will be shared toward the end of the year. Rumor Score: Possible Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 49. `EN` [Price hike: 1Password increasing the cost of annual plans](data/articles/2c248f1ef97fcf9746556753870ead54.html)
**Source:** AppleInsider
Password management tool 1Password is raising its prices by $12 per year, making the free Apple Passwords more attractive to iPhone users. 1Password's raising its prices
Subscribers of 1Password have been warned by the company of upcoming price hikes to the password manager. Starting from March 27, users will be paying more for its yearly subscription plans.
The cost of the annual individual plan will be shifting from $35.88 per year to $47.88, representing a price rise of $12 per year, $1 per month, or a 33% increase. Similarly, the family plan will rise from $59.88 to $71.88. This is also a $12 per year increase, or a 20% price hike. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 50. `EN` [Chase explains why it won’t lose billions on Apple Card](data/articles/8c9c8d11a958c8dfc083a80795e2df25.html)
**Source:** 9to5Mac
Earlier this year, Apple officially confirmed that JP Morgan Chase will take over Apple Card from Goldman Sachs.
The transition is expected to occur in January 2028. In new this week, Chase revealed why it thinks it will fare better at managing Apple Card than Goldman Sachs.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 51. `EN` [Deals: Most affordable iPhone 16 Pro $300 off, 1TB M5 MacBook Pro $200 off, stainless steel Apple Watch $450 off, more](data/articles/db5477f8f5fc6bc4ff6b51946ce3caeb.html)
**Source:** 9to5Mac
Alongside the ongoing $100 price drops on the 46mm Jet Black Apple Watch Series 11, today’s 9to5Toys Lunch Break is starting off with some Amazon iPhone 16 Pro deals. Alongside up to $630 off iPhone 16 Pro Max, we also spotted the most affordable unlocked iPhone 16 Pro you can buy at $300 off via Amazon today (Renewed Premium). Those deals also join the M5 MacBook Pro with 1TB of storage sitting at the best price of the year ($200 off) and, if you don’t care about the latest and greatest, we have a giant price drop on the high-end stainless steel Apple Watch Series 9 – the originally $699 configs are just $249 Prime shipped right now. Scope it all out down below. more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 52. `EN` [iOS 26.4 release date: Here’s when to expect new iPhone features](data/articles/1496c9f6d8304f5ec711544a5ec85a2c.html)
**Source:** 9to5Mac
iOS 26.4 is a big update with plenty of new features for Apple Music, Podcasts, CarPlay, and more. The software is currently available in beta, here’s when to expect its public launch.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 53. `EN` [Apple TV’s next big sci-fi premiere is coming this week, first reviews here](data/articles/f7652590490551425ebb8e0cf34c4edf.html)
**Source:** 9to5Mac
Apple TV’s next big sci-fi premiere is coming this week, first reviews here

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 54. `EN` [What Apple product colors would you like to see offered in future? [Poll]](data/articles/c2f5660dd0fec0389af57342e80efc65.html)
**Source:** 9to5Mac
After mostly very muted iPhone Pro colors in the past, Apple struck out in a bold new direction with Cosmic Orange for the current model. That decision was credited with helping the company hit record iPhone sales last year.
We’re expecting to see the upcoming low-cost MacBook offered in several bright colors, and there’s also talk of a deep red option for the iPhone 18 Pro, so this seems a good time to talk about colors … more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="Apple Newsroom">

### 55. `EN` [Apple Sports adds golf to its lineup](data/articles/958099c47276b5d7589f45ae0aacff6d.html)
**Source:** Apple Newsroom
Apple Sports — the free app for iPhone — today added golf to its growing list of supported sports.

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 56. `EN` [How to use Reduce Interruptions on iOS 26 and what it does](data/articles/8bff122f6a85a4ed1ed78a2852b80c60.html)
**Source:** AppleInsider
The Reduce Interruptions Focus Mode aims to use Apple Intelligence to prioritize notifications to cut them down, yet not have you miss anything important. Here's how to use it. The Reduce Notifications Focus Mode
A strength of Apple Intelligence is that rather than some separate ChatGPT-like app, its features are woven into all aspects of the iPhone, iPad, and Mac. But that also makes it confusing when Apple promotes some feature but doesn't say where it fits.
"For example," said Craig Federighi at the WWDC 2024 launch, "your iPhone can prioritize your notifications to minimize unnecessary distractions while ensuring you don't miss something important." Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 57. `EN` [How to change the background in Messages for iOS 26 and iPadOS 26](data/articles/debfa96888a873d5004254922493e8de.html)
**Source:** AppleInsider
Bring more life and personalization to your group chats, by adding backgrounds to your conversations in Messages in iOS 26 and iPadOS 26. Here's how to change yours for the better. You can now change the backgrounds of conversations in Messages for iOS 26 and iPadOS 26
Messages is an essential app for iPhone users, with it used to communicate with your closest relations. However, people may be getting a bit bored of seeing the usual grey and blue (and sometimes green) speech bubbles floating up a plain white page.
During WWDC, Apple finally made a change to Messages, allowing users to select the background for conversations. A work chat could be jazzed up with corporate-approved branding, while speaking to parents can be done to a background of favorite pets, for example. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 58. `FR` [RAM : les iPhone n’ont jamais embarqué autant de mémoire vive, selon cette étude](data/articles/df9f7915876672101e80edd239ba2110.html)
**Source:** iPhoneAddict
Une étude révèle la quantité moyenne de RAM présente dans les iPhone, et le chiffre a de quoi surprendre.

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 59. `EN` [Apple Watch Ultra 4: Four rumored new features coming this fall](data/articles/1bce8c55aa82b373b1923fc8bd20dc0c.html)
**Source:** 9to5Mac
Apple has new products launching next week, but no Apple Watch models will be among them. Later this year though, Apple Watch Ultra 4 is coming, with four rumored new features so far.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 60. `EN` [I’m most excited about Apple’s affordable MacBook, with one concern](data/articles/27c734ee512ca680d939c52b61ff8f57.html)
**Source:** 9to5Mac
Apple has confirmed that we’re in for a series of product launches starting Monday, and the rumored MacBook is easily what I’m most excited to see. Almost none of the rumored compromises to make it more affordable worry me (and some actually sound like features).
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 61. `EN` [Apple says UK age verification message in iOS 26.4 beta 2 was a bug](data/articles/0ab30dc345239d6e95e82833b28d2903.html)
**Source:** 9to5Mac
Some users in the UK began seeing an age verification prompt after installing iOS 26.4 beta 2. Apple now says the message appeared in error. Here are the details.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 62. `EN` [Two affordable iPhone 17 Pro accessories worth trying](data/articles/979eb0cdddd8e0a96468d754bf9c4019.html)
**Source:** 9to5Mac
While my preferred way to use an iPhone is with no case or screen protector, I’m actually enjoying both on iPhone 17 Pro and can recommend them. They’re inexpensive enough to try without committing for a year or more.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 63. `EN` [HomeKit Weekly: This Matter smart bulb brings lighting control to Apple Home for under $10](data/articles/a1347030eaae4bbf75ef993edfb0c8c0.html)
**Source:** 9to5Mac
I have been a Philips Hue user for a number of years. They are rock solid, but they aren’t cheap. Recently, one of the bulbs in my hallway finally gave up the ghost. Instead of dropping $45 on a replacement, I decided to look at what the “Matter era” has brought to the table in terms of Wi-Fi only bulbs. I found a Matter-native option that costs less than $10 per bulb. It connects directly over Wi-Fi, requires no hub outside of a HomePod/Apple TV, and works with Apple Home right out of the box.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 64. `EN` [Apple Wallet adds time-saving iOS 26 credit card feature, here’s how to use it](data/articles/fa9d2a5592543a6f9d4d8001c3a76d23.html)
**Source:** 9to5Mac
Apple’s Wallet app received a variety of great features in iOS 26, but one of my favorites is a convenient new way to manage and access credit cards. Here’s how to use it.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 65. `EN` [The global RAM and SSD shortage crisis, explained](data/articles/6fc039a2d583de0b91e1cb89c2438d59.html)
**Source:** AppleInsider
A global shortage is responsible for every electronics and computer manufacturer in the world — including Apple — paying twice as much for RAM and flash storage as it did in 2025, and 10 times more than it paid in 2020. Here's why there is little hope of that improving anytime soon. Memory is in short supply globally — Image credit: SK Hynix
Apple has historically been able to closely control the cost of its components. Buying in huge numbers, from multiple suppliers has historically given an economy of scale that made Apple a sought-after customer for everything from display makers to storage vendors.
But that dynamic has changed. A global shortage of key components like memory and storage has seen the price of both skyrocket. Apple is far from the only company impacted. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 66. `EN` [iOS 26.4 gives Reminders’ best new feature the one thing it was missing](data/articles/da0931d450a5fa569b65374e7e612edb.html)
**Source:** 9to5Mac
Apple’s Reminders app recently got my favorite new feature in a long time: ‘Urgent’ reminders. And in iOS 26.4, the feature’s getting upgraded with the one thing it was missing: a dedicated smart list.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 67. `EN` [Get Apple's 15-inch MacBook Air M4 for $1,049 with this weekend deal](data/articles/394a9a63a2a38dcbbf7372ba832ed404.html)
**Source:** AppleInsider
Apple's current 15-inch MacBook Air equipped with the M4 chip has dropped to $1,049 as Amazon competes for your business this weekend. Grab weekend deals on Apple's M4 MacBook Air.
The 15-inch M4 MacBook Air features a 10-core GPU, with the standard model also equipped with 16GB of unified memory and a 256GB SSD. Amazon is discounting the standard spec to $1,049, representing a 13% markdown off MSRP.
Buy 15" MacBook Air for $1,049 Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 68. `EN` [Deals: AirPods Pro 3 nearly $100 off (open-box, 1-yr. warranty), M3 iPad Air $250 off, M5 iPad Pro, more](data/articles/2a2a4bc7e730085b599cc580777d0280.html)
**Source:** 9to5Mac
It’s all about Pokémon Day 2026 over at 9to5Toys today, but our Lunch Break deals are still ready to go with some solid deals on Apple gear and accessories. Firstly, we spotted a notable chance to score AirPods Pro 3 at nearly $100 off today in “excellent” open-box condition (if you’re fast) alongside up to $200 off M5 iPad Pro configs and a chance to land a particularly deep $250 price drop on this 1TB M3 iPad Air model as stock begins to disappear at Amazon. All of that and more awaits below. more…

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 69. `FR` [Tutoriel iPhone : comment changer le navigateur web par défaut ?](data/articles/35a7f98ff3da9da9fcd89330d30455ff.html)
**Source:** iPhoneAddict
Pour changer d'air et voir l'internet autrement que via Safari sur iPhone et iPad.

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 70. `EN` [Apple’s slow drip of Vision Pro immersive videos continues with third-ever edition of travel series](data/articles/9966711fab02479dea7f296f474e7746.html)
**Source:** 9to5Mac
Apple has released the third episode of Elevated, its original Immersive Video series for Apple Vision Pro that started in 2024. The latest entry offers viewers an otherwise impossible view of Switzerland from above.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 71. `EN` [visionOS 26 gets fix to keep F1 &amp; MLS streams looking crisp](data/articles/1aa8a4b7976bec9613420654c7fa4aeb.html)
**Source:** AppleInsider
Sports MultiView is one of those features that makes Apple Vision Pro a viable purchase, so of course Apple is willing to rush out the visionOS 26.3.1 update just to fix an issue with that feature. Sports MultiView is an excellent feature on Apple Vision Pro. Image source: Apple
It's been two years since Apple Vision Pro arrived on the market, and there still isn't a "killer app." That said, the product has a lot of small features that make it worthwhile, and one of them is sports MultiView.
Apple released visionOS 26.3.1 on Thursday evening with a fix specifically for sports MultiView. The release notes say that a flicker issue could occur while using MultiView in the Apple TV app. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 72. `EN` [An incredibly popular Mac app is putting its iPad port on hold to focus on Android](data/articles/4490e715d9b9668cff2a32c71c879cbe.html)
**Source:** 9to5Mac
Blender has long been a powerhouse application on the Mac, especially as Apple Silicon has unlocked new levels of 3D rendering performance for creative pros. That’s why it was so exciting last summer when the team behind the open-source software confirmed iPad Pro support was planned. Seven months later, however, the project appears to be on hold as an Android tablet version takes priority.
more…

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 73. `FR` [Beats Studio Pro : le casque sans fil premium pour iPhone à 240 € au lieu de 400](data/articles/0b294eba5898a30c46b3ee557e7035fd.html)
**Source:** iPhoneAddict
Tous les coloris sont concernés. Ne manquez surtout pas cette belle offre !

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 74. `EN` [What Apple's launching in March, and more on the AppleInsider Podcast](data/articles/1e93a22dd9e46c6fc160b59f4f6ed966.html)
**Source:** AppleInsider
Tim Cook made us want to skip the weekend and get straight to the new launches Apple has for us starting on Monday. That might include a low-cost MacBook, but then further ahead there's a hint of a touch-screen MacBook Pro later this year, all on the AppleInsider Podcast. If a MacBook is announced in March, it won't be a MacBook Pro — but a touch-screen one is expected later in 2026
What we actually know about next week is that there will be launches. Tim Cook doesn't hint if there's nothing much to say, but he also tagged his post #AppleLaunch.
So we know something is coming, and if you listen to the leaks, actually everything is coming. If you've ever heard it rumored, it's all due out next week for sure. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 75. `EN` [AirPods Pro 3 vs Sony XM6 earbuds: Personal audio compared](data/articles/5a5c4b0d1f2a3e49c9fe898ef5618b3f.html)
**Source:** AppleInsider
Sony's latest audio release, the WF-1000XM6, are flagship earbuds with improved active noise cancellation. Here's how Sony's flagship personal audio accessories compare against the AirPods Pro 3. AirPods Pro 3 vs Sony XM6 earbuds
February saw Sony bring out an update to its upper-tier earbuds. After a three-year wait, the WF-1000XM6 are the electronic company's new best option for in-ear audio.
The WF-1000XM6, not to be confused with the similarly-named WH-1000XM6 headphones, lean on the firm's heritage of audio quality, with improvements to noise cancellation also thrown in for good measure. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 76. `FR` [Nouveaux jeux iPhone : voici cinq pépites à ne surtout pas manquer !](data/articles/f5d97ce35784e84bd73f39390b903b37.html)
**Source:** iPhoneAddict
On adore le premier, mais tous les 5 sont d'excellente qualité !

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 77. `EN` [Would any of the reported MacBook compromises be a deal-breaker for you? [Poll]](data/articles/391d20637701b47f2fdc098731647061.html)
**Source:** 9to5Mac
Apple clearly needs some way of distinguishing the upcoming low-cost MacBook from the more expensive MacBook Air. We’d wondered whether color might be sufficient to limit cannibalization, but it’s been suggested that the new machine may have a number of compromises.
9to5Mac readers aren’t really the target market for an entry-level machine, but some might consider it as a second Mac, while others might recommend it to family and friends. However, would any of the rumoured compromises be a deal-breaker … ? more…

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 78. `FR` [Garmin fēnix 8 : grosse chute de prix pour la montre haut de gamme dernière génération](data/articles/19cf92217e6216d71fbeb8223e54deb3.html)
**Source:** iPhoneAddict
Si vous faites vite, vous pouvez économiser plus de 200 euros sur ce modèle premium.

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 79. `EN` [Apple at 50: Michael Scott, the company's first CEO, made bold and bad choices](data/articles/5dc713f7ca40b1783b882edeba5c87f9.html)
**Source:** AppleInsider
As Apple hits 50 years old, AppleInsider recounts the pivotal role of each of its CEOs, starting with the very first one, Michael Scott. He made bold choices, but he made them badly. Michael Scott, age unknown — image credit: Business Insider
Steve Jobs was not Apple's first Chief Executive Officer. While he founded the company on April 1, 1976, with Steve Wozniak and Ronald Wayne, Jobs had no experience running what was aiming to become a large company.
So a CEO was needed, but actually Apple's first two chief executives are tightly interlinked. Mike Markkula would become the second one, but he hired the first — and then later persuaded that first to leave. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="MacRumors">

### 80. `EN` [Netflix Walks Away From Warner Bros Deal, Paramount Set to Take Over](data/articles/2ea28b55e863fae984be05f997010662.html)
**Source:** MacRumors
Netflix has dropped out of the takeover battle for Warner Bros. Discovery, putting Paramount Skydance on course to win the whole WBD business. The world's largest streaming service had been pegged to land a deal in which it would acquire Warner Bros., HBO, and HBO Max in a cash-and-stock deal valued at $72 billion in equity and $82.7 billion, including debt. But after Paramount submitted a final offer, valuing WBD at $111bn including debt, Netflix declined to match it. announcement on Thursday, Netflix co-CEOs Ted Sarandos and Greg Peters said: The transaction we negotiated would have created shareholder value with a clear path to regulatory approval. However, we've always been disciplined, and at the price required to match Paramount Skydance's latest offer, the deal is no longer financially attractive, so we are declining to match the Paramount Skydance bid. Netflix shares surged by 8.5% in after-hours trading, indicating relief among investors that the streaming company has not risked overpaying for Warner Bros. Warner's board said Thursday night that it still recommends Netflix's offer, but now views Paramount's bid as "superior" – its first sign of backing for the suitor that it labeled hostile when the takeover battle began in December. Warner Bros. CEO David Zaslav said that Paramount's offer "will create tremendous value," and that WBD was "excited about the potential of a combined Paramount Skydance and Warner Bros Discovery." Tags: HBO, Netflix, Warner Brothers
This article, "Netflix Walks Away From Warner Bros Deal, Paramount Set to Take Over" first appeared on MacRumors.com
Discuss this article in our forums

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 81. `FR` [SFR : le prix de votre forfait en hausse après le rachat ? On a enfin la réponse](data/articles/4caaf0ec09bf4d39ba7abfb1b2e3b631.html)
**Source:** iPhoneAddict
Le directeur général de Bouygues Telecom répond aux inquiétudes des clients.

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 82. `FR` [Voici ce qu’iOS 26.3 fait à la batterie de votre iPhone (ça ne va pas vous plaire)](data/articles/5e1c5933d290545850da1b5b1ff88f4d.html)
**Source:** iPhoneAddict
Les doutes d'une partie de la communauté se confirment.

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 83. `EN` [Monarch: Legacy of Monsters season 2 now available on Apple TV](data/articles/e9de855d8efaf6b54c72bb296a9c6e4d.html)
**Source:** 9to5Mac
More than two years after its first season wrapped, Apple TV has finally premiered the long-awaited return of Monarch: Legacy of Monsters. Here’s what to expect.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 84. `EN` [Plaintiffs took 'unsupported leap' in lawsuit Apple hopes to get dismissed](data/articles/087b89a2cd058153630808cb3eba15aa.html)
**Source:** AppleInsider
Apple has requested that the lawsuit against its AI delays and response to an Epic injunction be dismissed. It cites that both counts are unsubstantiated. Apple's AI delays are fodder for class action lawsuits
There are multiple lawsuits around Apple's delay of a more personalized Siri. One class action suit is being led by South Korea's National Pension Service, and claims that Apple's recent actions have cost billions in stock market losses.
According to a report from Reuters, Apple is being targeted by two counts of defrauding shareholders. The first claim is that Apple is overpromising Siri capabilities, Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 85. `EN` [Netflix backs down, Paramount now likely to acquire Warner Bros.](data/articles/c6cfa8e0eb819ccc0ccd2e404bcc4173.html)
**Source:** AppleInsider
Paramount is now on track to acquire Warner Brothers Discovery, as Netflix has announced it will not provide a competing offer to purchase the studio. HBO Max could soon become property of Paramount.
Warner Bros. Discovery has been working to find the right buyer for months now. In October 2025, it was even reported that Apple TV was among the companies in discussions with Warner Bros. executives regarding a potential purchase agreement.
Two months later, Netflix emerged as the top contender and potential new owner of Warner Bros. Discovery. However, the enthusiasm was short-lived, as Paramount offered to buy the venerable Warner Bros studios and its extensive library for $31 per share, as part of an all-cash deal. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 86. `EN` [Apple asks court to dismiss proposed class action over Siri AI fraud claims](data/articles/d9c05876840d511174475cb57bbb2832.html)
**Source:** 9to5Mac
The lawsuit accuses Apple of having misled investors about the timeline and readiness of its Apple Intelligence and Siri features, as well as in relation to the Epic Games case. Here are the details.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 87. `EN` [Brazil is Apple TV's second largest market &amp; is growing fast, says Eddy Cue](data/articles/3727b54ddfdb06ee1d0b32934de5b609.html)
**Source:** AppleInsider
Apple TV is doing great in Brazil, but services chief Eddy Cue says Apple doesn't have any plans for new content developed in the country. Apple's SVP of services, Eddy Cue, says Brazil is Apple TV's fastest-growing market.
During a special press event on February 4, Apple previewed content coming to its streaming service in 2026, with several new films and series set to debut on Apple TV later in the year. However, we didn't hear much about Apple's international streaming-related endeavors — until now.
Apple's Senior Vice President of Services, Eddy Cue, revealed a few key details about the future of Apple TV in an interview with the Brazilian publication Folha de Sao Paulo, spotted by 9to5mac. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 88. `EN` [visionOS 26.3.1 now available with Apple TV app fix](data/articles/89022351af71873595a4acf5db902fe2.html)
**Source:** 9to5Mac
Apple has released visionOS 26.3.1 for Apple Vision Pro users today. The update fixes a flickering problem in the Apple TV app, according to the release notes. more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 89. `EN` [9to5Rewards: Win a MacBook Pro and BenQ’s 27″ 4K Nano Gloss Monitor [Giveaway]](data/articles/831921a5b2b8a6d6bb2d1296bffcdfd5.html)
**Source:** 9to5Mac
We’re giving away Apple’s latest MacBook Pro to one lucky reader this month courtesy of our friends at BenQ to celebrate the company’s MA series of monitors for Mac. The winner will also receive the new BenQ 27″ 4K Nano Gloss Monitor for MacBook! Head below to enter the giveaway and learn more about the new monitors.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 90. `EN` [New book explores Steve Jobs’ NeXT years and the road to his Apple comeback](data/articles/07c761e8c9228eef2610544e4767e7b2.html)
**Source:** 9to5Mac
In the upcoming book “Steve Jobs in Exile,” author Geoffrey Cain will explore the lesser-told story of the years that preceded, and ultimately prepared, Steve Jobs for his historic return to Apple. Here are the details.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 91. `EN` [iOS 26’s Apple Maps feature can save you from traffic, here’s how to set it up](data/articles/07b0fc4a670fc9fa05a161541d683dd1.html)
**Source:** 9to5Mac
iOS 26 brought several solid upgrades to Apple Maps, including a feature centered on your typical routes and patterns that might save you from unexpected traffic delays.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 92. `EN` [Blender shelves iPad app, says it's focusing on Android tablets first](data/articles/8e499d7c091489a599ce1f53650c9a28.html)
**Source:** AppleInsider
Blender's long-anticipated native iPad app has been placed on hold as developers shift tablet priorities elsewhere. A previous mockup of the potential Blender for iPad app
In June 2025, Blender announced that it would be creating a native iPad version of its popular 3D creation software. According to the team, they would be releasing the app for the iPad Pro — though they provide a timeline for release.
Unfortunately, it doesn't seem like we'll be getting one anytime soon, either. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 93. `EN` [Nearly one in four smartwatches shipped in 2025 was an Apple Watch: report](data/articles/507588fa1494d589438efa797d8bbbff.html)
**Source:** 9to5Mac
For the first time since 2022, Apple posted year-over-year growth in Apple Watch shipments in 2025, according to new data from Counterpoint Research. Here are the details.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 94. `EN` [Two unique new MacBook Pros are launching this year, starting next week](data/articles/eedd2907e45576f650e3ec1483a012fd.html)
**Source:** 9to5Mac
Apple will launch its newest MacBook Pro next week with M5, and there’s another distinct model coming later this year with M6. Here’s what to expect from Apple’s two unique MacBook Pro launches this year.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 95. `EN` [These Apple ‘magic moments’ show how well macOS and iPadOS work together [Video]](data/articles/9b98a37e048f23283a761f7ce3bfa626.html)
**Source:** 9to5Mac
I have been a hardcore iPad user for almost a decade now. I have used it as my main computer and dealt with all the ups and downs. But one of the biggest misconceptions about the iPad is that it is trying to compete with the MacBook when, in reality, they were built to work in tandem. It is not until you have them side by side that you start to see the magic and power that is the Apple walled garden. Features like Universal Control, Sidecar, Handoff, and continuity tools create “aha” moments that genuinely change how you work. So I wanted to put a list together of some of those amazing magic ecosystem moments that iPadOS and MacOS give you together.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 96. `EN` [Apple releases Xcode 26.3 with support for agentic coding](data/articles/39a764841f4f394111a9d9737784a062.html)
**Source:** 9to5Mac
Xcode 26.3 can now leverage tools such as Anthropic’s Claude Agent and OpenAI’s Codex to speed up all aspects of app development. Here are the details.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 97. `EN` [Apple Watch Series 11 drops to $299, plus grab deals on titanium styles](data/articles/3086d129cc5c6bd9f22d7d965b799339.html)
**Source:** AppleInsider
Amazon's popular $299 Apple Watch Series 11 deal has returned as February winds down, saving you $100 as shoppers embark on spring fitness journeys. Save up to $100 with month-end Apple Watch deals.
Amazon's Apple Watch deals have ramped up as the month reaches an end, with the Apple Watch Series 11 returning to the best price on record at $299.
Buy Apple Watch S11 for $299 Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 98. `EN` [Netflix's F1 'Drive to Survive' will stream on Apple TV in world-first deal](data/articles/d171dfefbdc8198c8c606c58b0e52c0c.html)
**Source:** AppleInsider
The popular Netflix Foruma 1 docuseries "Drive to Survive" will be available to stream on Apple TV in the United States as part of a surprise content-sharing deal. Apple has big plans for its F1 streaming service. Image source: Apple
Beginning with the season eight premiere on February 27, 2026, Apple TV subscribers will be able to watch "Drive to Survive" without a Netflix subscription. The move marks the first of its kind for Netflix, a company that normally offers its content exclusively on its own platform.
As part of the deal, The New York Times reports, Apple will allow one of its live F1 Grand Prix to air on Netflix. The Canadian Grand Prix will be offered to Netflix customers in the United States as well as on Apple TV. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 99. `FR` [iPhone 15 Pro : moins de 560 € et un rapport qualité-prix inédit pour cet iPhone sans faille](data/articles/9c5ea56e797655c8c2bfb4618d3e93da.html)
**Source:** iPhoneAddict
Un iPhone premium à seulement 559 euros ? C'est une offre qui ne se refuse pas.

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 100. `EN` ['Star City' brings Soviet perspective to 'For All Mankind' in May](data/articles/a288d473614a3cd599e36c83f7184d0f.html)
**Source:** AppleInsider
Apple is expanding its hit sci-fi drama "For All Mankind" into a full Apple TV franchise with "Star City," a Soviet-focused spinoff premiering in late May. "For All Mankind" on Apple TV
The company is turning one of its most durable science fiction dramas into a broader franchise. For All Mankind followed NASA and American astronauts, but Star City shifts the focus to the Soviet Union and reveals the parallel effort behind the Iron Curtain.
The timing reflects a coordinated expansion. Season five of For All Mankind premieres March 27, 2026, with Star City arriving just two months later to keep the franchise active. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 101. `EN` [Apple TV reveals new space-race thriller series is coming soon](data/articles/472978b350721f9a9cb946c45b33e870.html)
**Source:** 9to5Mac
Apple TV’s space drama For All Mankind returns next month, but the streamer just revealed that its spinoff—Star City—will premiere soon too. Here are the details.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 102. `EN` [App Store gaming revenue bulletproof, as mobile gaming slows overall](data/articles/696d02ced2ea19264df90cec88651c1d.html)
**Source:** AppleInsider
Mobile gaming downloads are falling worldwide, but higher player spending is making the App Store more profitable anyway. Apple Arcade
Mobile game downloads declined worldwide in 2025, but in-app spending remained strong. Rising player spending is reinforcing Apple's App Store revenue model.
Mobile games raked in $82 billion from in-app purchases in 2025, with an average of $1.62 per download, even though total downloads dropped. Developers are now focusing more on keeping players and boosting subscriptions rather than quickly gaining new ones. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 103. `EN` [Tim Cook takes to X to tease a big week of launches](data/articles/dac25e84af6d44eea94922c495ab13c8.html)
**Source:** AppleInsider
Tim Cook has posted to X a tantalizingly brief message about the start of March, saying that at long last, there will be multiple products debuting. Tim Cook at Apple Park
Ever since selected people were sent invitations to an "Apple Experience" taking place on March 4, 2026, it has been presumed that the company is about to make at least five announcements. Now Tim Cook appears to have confirmed this, with a post to X using the hashtag #AppleLaunch. A big week ahead. It all starts Monday morning! #AppleLaunch pic.twitter.com/PQ9gM2Gl2r
— Tim Cook (@tim_cook) February 26, 2026 Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 104. `EN` [New Apple product launch week starts Monday, Tim Cook confirms](data/articles/58a814b1e7df69407df88729a53be267.html)
**Source:** 9to5Mac
Apple CEO Tim Cook just confirmed that the company will announce new products starting “Monday morning.” This will be the start of a release cycle that includes a press “experience” on Wednesday. 9to5Mac’s Chance Miller will be in attendance in New York City.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 105. `EN` [Samsung’s equivalent of Apple Intelligence in the Galaxy S26 seems very underwhelming](data/articles/b2564e4f436b26128664959e612bc389.html)
**Source:** 9to5Mac
Samsung loves to launch new features before Apple, and it has partly done so with the new AI capabilities in the Galaxy S26. The latest version of Galaxy AI seeks to perform many of the same functions as Apple Intelligence.
As our sister site 9to5Google notes, however, the experience seems set to prove very underwhelming …
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 106. `EN` [Apple Home Key comes to everyone, everywhere with Aliro launch](data/articles/041c510e85d8a5c553b7b101a4e10ecc.html)
**Source:** AppleInsider
After years in development, the Connectivity Standards Alliance has announced the release of the 1.0 version of Aliro, bringing an Apple Home Key-like experience to everyone. Aliro brings the Apple Home Key experience to other ecosystems with this new open standard
The Connectivity Standards Alliance (CSA) is a member-driven organization that develops the Matter smart home standard. Matter was designed to enable smart home devices to work across different ecosystems, and Aliro is a new specification within that framework.
Not much has been shared about Aliro since the original announcement. Recently, interest has increased as manufacturers prepare Aliro-compatible products, such as those showcased at CES 2026. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 107. `EN` [Sketchy report claims Apple fell for Samsung negotiating ploy on memory](data/articles/fba90f1998e99545fd5cd87299951c1a.html)
**Source:** 9to5Mac
Apple almost always gets the better part of any negotiation with its suppliers, but a sketchy report claims that this wasn’t the case when it came to buying RAM from Samsung.
The report says Samsung had asked for a 100% increase in price, expecting to negotiate down to 60%, but Apple’s desperation was such that it agreed to the first demand … more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 108. `EN` [India may finally get Apple Pay by mid-2026](data/articles/d9d95570abe143a82dcdafac019499ad.html)
**Source:** AppleInsider
A new report backs up recent claims that India is shortly to get Apple Pay after years of complex negotiations. Apple Pay may finally come to India
In January 2026, it was rumored that Apple was in talks to get Apple Pay in India. Now Bloomberg is reporting which banks Apple is in discussions with, and when it may launch.
Apple is said to be in talks with three of the largest banks operating in the country: Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="fr" data-category="mac" data-source="iPhoneAddict">

### 109. `FR` [Overwatch Rush : ce drôle de jeu gratuit arrive sur iPhone](data/articles/900e52ea55e92499f99c1445bd7740a0.html)
**Source:** iPhoneAddict
Blizzard est-il en train de se perdre avec sa licence ?

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 110. `EN` [Experience F1 tracks with 3D art in Apple Maps ahead of each race](data/articles/f2555222bf810d6cf4fa7291a93ea3ed.html)
**Source:** AppleInsider
Apple Maps has been updated with a new "2026 Formula 1 Tracks Around the World" guide that showcases each racing location. Updated 3D art will be added throughout the season, starting now with Albert Park in Australia. Apple Maps gets F1 guide
It's almost time for the first F1 season distributed by Apple TV to begin. Apple is known for its vertical integration and brand synergy, and it hasn't wasted any time with F1 either.
As first discovered by 9to5Mac, Apple is promoting the F1 season in Apple Maps with a new guide. It is titled "2026 Formula 1 Tracks Around the World." Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 111. `EN` [Apple Vision Pro users will get to see Disney's 'Muppet*Vision 3D' in all its glory](data/articles/cb3a1cab5ab856243016c999903aed9c.html)
**Source:** AppleInsider
"The Muppet Show" rebirth has brought Jim Henson's creations back into the spotlight, and fans are awaiting news of the virtual return of the fan-favorite "Muppet*Vision 3D" via Apple Vision Pro. 'Muppet*Vision 3D' may have closed, but it's being kept alive in VR
Jim Henson was responsible for a lot of the world's most popular entertainment, and even Apple has some in their studio. We're not here to talk about Fraggle Rock, but instead, a green guy and his friends that are a little more popular.
It's a great time to be a Muppets fan, as Seth Rogen's new special seems to have successfully revived the brand. Long-time fans recently packed the theater for the first time in forever, and mourned the loss of the popular Muppet*Vision 3D attraction at Hollywood Studios in Orlando. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 112. `EN` [Grab Apple's M5 MacBook Pro for $1,449 before the month-end deals expire](data/articles/597c34547b066e49887237507f5b290d.html)
**Source:** AppleInsider
Grab a triple-digit discount on Apple's M5 14-inch MacBook Pro, as retailers engage in a month-end price war. Save $150 on numerous M5 MacBook Pro configurations - Image credit: Apple
Apple's standard 14-inch M5 MacBook Pro with 16GB of RAM and 512GB of storage is on sale for $1,449 at both B&amp;H and Amazon, as the retailers participate in a month-end price war.
Buy M5 MacBook Pro for $1,449 Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 113. `EN` [iOS 26 has made Apple Passwords the only password manager I need](data/articles/95ebd4603ca6213b0c1b7d7ee750fb0a.html)
**Source:** 9to5Mac
iOS 26 is packed with big and small changes, three of which have enabled me to make Apple’s Passwords app my one and only password manager.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 114. `EN` [Apple TV just added three new movies to expanding future lineup](data/articles/be11df1cde22a880cac9eac0aa5bb98c.html)
**Source:** 9to5Mac
Apple TV has been on a hot streak with new movies, and the streamer keeps strengthening its future lineup too. Here are three new movies that, per reporting today, are now part of Apple’s upcoming film plans.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 115. `EN` [Advanced Apple Silicon remains tied to Taiwan despite Arizona fab expansion](data/articles/27e3f8855e99403e280b2c1d195161d1.html)
**Source:** AppleInsider
A walk-through of Apple partners' chip fabrication lines practically demonstrates how the company's push to expand semiconductor manufacturing in Arizona and Texas is mainly aimed at reducing geopolitical risk, and less about bringing back large-scale U.S. factory jobs. TSMC workers
A February 25 report outlines how Apple and its suppliers are rebuilding parts of the U.S. chip supply chain, from silicon wafers in Texas to final assembly in Houston. The strategy centers on strengthening supply resilience after pandemic shortages and rising tension around Taiwan.
Apple Chief Executive Tim Cook has appeared alongside President Donald Trump to spotlight domestic investment. Chip fabrication plants today are highly automated operations powered by robotics and precision machinery. Continue Reading on AppleInsider | Discuss on our Forums

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 116. `EN` [Apple and Amazon accused of ignoring Spanish antitrust order for nearly two years](data/articles/88011158c3192f0a87dc299690ce0e87.html)
**Source:** 9to5Mac
Following a 2023 decision that fined Apple and Amazon over anti-competitive distribution clauses, Spain’s competition regulator now says the companies took too long to comply and may issue a new fine. Here are the details.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 117. `EN` [Apple’s low-cost MacBook might lack these features](data/articles/4ffac44c1c764027c7f0b1abc710ccc5.html)
**Source:** 9to5Mac
Apple’s new low-cost MacBook is set to have a number of compromises to help bring the cost of the machine down. A new rumor today outlines at least some of those compromises in detail …
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 118. `EN` [Apple reveals US chipmaking behind-the-scenes process](data/articles/e0bd3d76ac4f29a9872835cc3fd470fe.html)
**Source:** 9to5Mac
This week Apple announced an acceleration of its US manufacturing efforts, including some Mac mini production coming stateside. Now today via The Wall Street Journal, the company has offered a behind-the-scenes look at its US chipmaking process.
more…

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="AppleInsider">

### 119. `EN` [Spain antitrust dispute intensifies over late Apple &amp; Amazon compliance](data/articles/8ab5f6143e469f68f1ff9e877bd19e86.html)
**Source:** AppleInsider
Spanish antitrust authorities believe that Apple and Google took to long to comply with orders despite ongoing appeals, opening the door to millions more in fines. Facade of the CNMC corporate headquarters in Barcelona. Image credit: Grupo Castellvi
Spain's National Commission on Markets and Competition (CNMC), said Apple and Amazon didn't eliminate the disputed contractual provisions until May 2025, nearly two years after regulators ordered their removal. The finding opens the door to additional penalties if upheld.

</div>

<div class="article-item" data-lang="en" data-category="mac" data-source="9to5Mac">

### 120. `EN` [tvOS 26.4: Three new changes are coming for Apple TV 4K](data/articles/bc98f395b0ab6912b6751ce2edbe838e.html)
**Source:** 9to5Mac
tvOS 26.4 is currently in beta testing, with a launch expected next month. Here are three new changes that tvOS 26.4 will bring for Apple TV 4K users.
more…

</div>

</section>

---

<section id="linux" data-category="linux">

## Linux

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 1. `EN` [Benchmarking 18 Years Of Intel Laptop CPUs: Panther Lake As Much As 95x The Speed Of Penryn](data/articles/c9bd392ac74d8bfd7ffc05f31ae07c76.html)
**Source:** Phoronix
For those curious how far Intel laptop CPU performance has evolved over the past nearly two decades, here are power and performance numbers when re-benchmarking all of the Intel-powered laptop CPUs I have on hand that are still operational from Penryn to Panther Lake. A ThinkPad from 2008 with the Core 2 Duo T9300 "Penryn" was still firing up and working with the latest upstream Intel open-source Linux driver support on Ubuntu 26.04 development. On a geo mean basis over the past 18 years from Penryn to Panther Lake, the performance was at 21.5x in over 150 benchmarks. At the most extreme was a 95x difference going from Intel's 45nm Penryn to the 18A Panther Lake.

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="LinuxFr">

### 2. `FR` [Revue de presse de l’April pour la semaine 8 de l’année 2026](data/articles/ba3955018c3edd6affb24779fe5605a1.html)
**Source:** LinuxFr
Cette revue de presse sur Internet fait partie du travail de veille mené par l’April dans le cadre de son action de défense et de promotion du logiciel libre. Les positions exposées dans les articles sont celles de leurs auteurs et ne rejoignent pas forcément celles de l’April.
[ZDNET] Élections municipales: l'April propose son pacte du logiciel libre aux candidats
[TG+] Echirolles: l'écosystème open source isérois se rassemble à La Rampe+
[Numerama] «C’est un fiasco total», le code indigeste généré par IA épuise les modérateurs open-source
[Silicon.fr] Le virage open source que les entreprises ne peuvent plus ignorer
[ZDNET] l'Anssi veut soutenir l'open source, et en tirer profit lien nᵒ 1 : April
lien nᵒ 2 : Revue de presse de l'April
lien nᵒ 3 : Revue de presse de la semaine précédente
lien nᵒ 4 : Fils du Net [ZDNET] Élections municipales: l'April propose son pacte du logiciel libre aux candidats Thierry Noisette, le dimanche 22 février 2026.
L’association libriste propose aux candidats aux élections des 15 et 22 mars de signer un pacte autour de trois objectifs, dont la priorité aux logiciels libres et la contribution à leur pérennité.
Voir aussi: Candidats.fr
[TG+] Echirolles: l'écosystème open source isérois se rassemble à La Rampe+ Alexandre Martinez, le jeudi 19 février 2026.
À La Rampe, scène culturelle emblématique d’Échirolles, l’événement AlpOSS (Alpes Open Source Software) a une nouvelle fois réuni, mardi 17 février, éditeurs, prestataires, collectivités et utilisateurs autour de l’open source.
[Numerama] «C’est un fiasco total», le code indigeste généré par IA épuise les modérateurs open-source Amine Baba Aissa, le mercredi 18 février 2026.
Dans un article publié le 18 février 2026, le média britannique The Register revient sur l’exaspération de nombreux modérateurs open source confrontés au fait de devoir vérifier et corriger des demandes de modification de code boostées par IA. Une gronde qui pousse bon nombre de projets à adopter des mesures de précaution.
Et aussi: [01net.] Internet Archive et sa Wayback Machine sont en danger à cause de l'IA
[Silicon.fr] Le virage open source que les entreprises ne peuvent plus ignorer David Szegedi, le mardi 17 février 2026.
Si l’approche open source représente un territoire inconnu, notamment pour les organisations qui ne l’ont pas encore déployée et qui manquent de maturité en la matière, elle offre une véritable flexibilité.
[ZDNET] l'Anssi veut soutenir l'open source, et en tirer profit Gabriel Thierry, le lundi 16 février 2026.
L’agence de Vincent Strubel vient de mettre à jour sa politique sur ce sujet, un domaine où elle est active depuis plusieurs années.
Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="OMG! Ubuntu">

### 3. `EN` [ONLYOFFICE 9.3 makes document editing easier than ever](data/articles/9ecf3d37b9be6a8d5f5a4a0a37071654.html)
**Source:** OMG! Ubuntu
A new version of ONLYFFICE Desktop Editors, a open source office suite for Windows, macOS and Linux, is out with a fresh set of features and tools. ONLYOFFICE 9.3 adds more signature options for PDF forms, multipage view for documents, new solver tools and regex formulas in the spreadsheets and support for animated GIFs in presentation slides made with the suite’s PowerPoint equivalent. But there’s a less-obvious change lurking within that may have a more appreciable impact on day-to-day document editing. For a closer look at the changes this update brings, read on. ONLYOFFICE 9.3: Highlights ONLYOFFICE Desktop Editors provide […]
You're reading ONLYOFFICE 9.3 makes document editing easier than ever, a blog post from OMG! Ubuntu. Do not reproduce elsewhere without permission.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="LWN.net">

### 4. `EN` [Security updates for Friday](data/articles/a630e085ef2622c800cf9b76a6b99991.html)
**Source:** LWN.net
Security updates have been issued by AlmaLinux (389-ds-base, buildah, firefox, freerdp, golang-github-openprinting-ipp-usb, grafana-pcp, kernel, libpng15, munge, nodejs:20, nodejs:22, podman, protobuf, python-pyasn1, runc, and skopeo), Debian (chromium, nss, and python-django), Fedora (firefox, freerdp, gh, libmaxminddb, nss, python3.15, and udisks2), Oracle (buildah, firefox, freerdp, kernel, libpng, podman, python-pyasn1, skopeo, and valkey), Red Hat (container-tools:rhel8), SUSE (autogen, chromium, cockpit, cockpit-machines-348, cockpit-packages, cockpit-repos, cockpit-subscriptions, crun, docker, docker-compose, docker-stable, erlang, freerdp, frr, glib2, gpg2, kernel, kernel-firmware, libsodium, libsoup, libsoup2, openvswitch, python, python-pyasn1, python-urllib3, python-urllib3_1, python3, qemu, redis7, regclient, and ucode-intel), and Ubuntu (linux-aws, linux-aws-6.8, linux-ibm, linux-ibm-6.8, linux-xilinx, python-authlib, and ruby-rack).

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="LinuxFr">

### 5. `FR` [Les Journées du Logiciel Libre reviennent en 2026 !](data/articles/6f62e6e0f55d9fad23f1b3d061e21a9e.html)
**Source:** LinuxFr
Les Journées du Logiciel Libre 2026 auront lieu le week-end du 30-31 mai 2026 ! lien nᵒ 1 : Site web
lien nᵒ 2 : Fédiverse
lien nᵒ 3 : Appel à participation
lien nᵒ 4 : Sponsoring Citoyens et citoyennes engagées, associations, entreprises ou flâneurs et flâneuses avides de découvertes se retrouveront le week-end des 30 et 31 mai 2026, cette année encore au sein du campus de l’École Normale Supérieure de Lyon - Site René Descartes, et son superbe jardin (https://www.openstreetmap.org/way/5212492). L'entrée sera comme toujours libre et gratuite.
Les Journées du Logiciel Libre se déroulent chaque année à Lyon depuis 1998 et rassemblent spécialistes, adeptes, curieux et curieuses de tous niveaux venus de toute la France pour un week-end riche en conférences, ateliers et rencontres.
Vous souhaitez proposer une intervention (conférence, atelier ou stand) pour les JdLL 2026 ? Vous avez jusqu'au 15 mars 2026 pour déposer votre proposition ici : https://pretalx.jdll.org/jdll2026/cfp
Vous souhaitez sponsoriser l'évènement ? C'est par là : https://jdll.org/soutenir
Et si vous souhaitez suivre nos dernières actualités, c'est sur le Fédiverse : https://framapiaf.org/@jdll
N'hésitez pas à passer le message autour de vous !
Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 6. `EN` [NXP Posts New Linux Accelerator Driver For Their Neutron NPU](data/articles/b805d2b5e728d9acadfa623d9ee42032.html)
**Source:** Phoronix
The Linux kernel continues seeing more open-source kernel drivers emerge for supporting different AI accelerators / NPUs. The newest open-source driver breaking cover today is from NXP and is for enabling their Neutron neural processing unit...

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="Journal du Hacker">

### 7. `FR` [LibreOffice Online : Collabora et la Document Foundation s'affrontent sur l'avenir du projet](data/articles/acb682b74e3594f7575edb8c38398879.html)
**Source:** Journal du Hacker
Le fond du problème est plus structurel. En octobre 2020, Collabora avait officiellement sorti Collabora Online du périmètre de TDF, après des tensions croissantes autour du modèle économique du projet. À l'époque, Collabora représentait environ 95% du travail d'ingénierie sur LibreOffice Online. L'entreprise craignait qu'une version gratuite et estampillée LibreOffice, distribuée directement par TDF, ne cannibale ses propres revenus. En 2022, TDF avait finalement gelé le projet, un compromis qui satisfaisait temporairement tout le monde. Le vote de février 2026 a rouvert cette plaie.LibreOffice n'en est pas à son premier drama cette semaine. On se souvient que TDF avait récemment attaqué frontalement OnlyOffice, l'accusant d'être un « faux logiciel open source » qui renforce la dépendance aux formats Microsoft. Et du côté de Collabora, l'entreprise avait, il y a quelques mois, lancé Collabora Office Desktop, une suite locale qui partage exactement le même moteur que sa version web, cherchant à unifier son offre sur tous les environnements. Autant d'initiatives qui dessinent, en filigrane, une fondation et ses partenaires historique tirant chacun la couverture à soi.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 8. `EN` [Open source graphics drivers Mesa 26.0.1 released with various bug fixes and a security fix](data/articles/ca96a1650f332701e78c9dc108107908.html)
**Source:** GamingOnLinux
Developer Eric Engestrom announced the Mesa 26.0.1 update for open source graphics drivers, the first set of bug-fixes for the latest release. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="LWN.net">

### 9. `EN` [Security updates for Wednesday](data/articles/7bc6539e07c55cf493684e9f41ee6b52.html)
**Source:** LWN.net
Security updates have been issued by AlmaLinux (grafana and grafana-pcp), Debian (gnutls28), Fedora (chromium and yt-dlp), Oracle (389-ds-base, kernel, munge, and openssl), Red Hat (buildah, containernetworking-plugins, opentelemetry-collector, podman, runc, and skopeo), Slackware (mozilla), SUSE (chromium, cosign, firefox, freerdp, gimp, heroic-games-launcher, kernel, libopenssl-3-devel, libxml2, libxslt, mosquitto, openqa, os-autoinst, openqa-devel-container, openvswitch, phpunit, postgresql14, postgresql15, postgresql16, protobuf, python310, python311-PyPDF2, python36, snpguest, warewulf4, and weblate), and Ubuntu (curl, kernel, linux, linux-gcp, linux-gke, linux-gkeop, linux-intel-iotg, linux-intel-iotg-5.15, linux-kvm, linux-lowlatency, linux-lowlatency-hwe-5.15, linux-nvidia-tegra, linux-oracle, linux-xilinx-zynqmp, linux, linux-gkeop, linux-hwe-6.8, linux-lowlatency, linux-lowlatency-hwe-6.8, linux-oracle, linux-raspi, linux-fips, linux-fips, linux-gcp-fips, linux-gcp, linux-gcp-6.8, linux-gke, linux-oracle-6.8, linux-gcp-fips, linux-ibm, linux-ibm-6.8, linux-intel-iot-realtime, linux-realtime, linux-raspi-realtime, linux-realtime, linux-realtime-6.8, and linux-xilinx).

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 10. `EN` [Lutris v0.5.21 and v0.5.22 arrive with Valve's Sniper runtime support and new game runners](data/articles/5c04f31340cf33687fd44fb71a123bb0.html)
**Source:** GamingOnLinux
Lutris is an all-in-one open source game manager for launching games from various stores on Linux and emulators too - with multiple new versions released. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="LinuxFr">

### 11. `FR` [Workshops on Demand version 1.0.2](data/articles/8f99d1509825d7ca5991fb8bb0288510.html)
**Source:** LinuxFr
Nous avons travaillé dur avec mon collègue Frédéric Passeron pour préparer l'atelier donné lors du récent AlpOSS 2026 (gros succès au passage !) consacré à notre outillage Workshops on Demand (ou WoD). Maintenant que nous en avons le temps, nous avons publié la version 1.0.2 utilisée pour cet atelier que nous considérons comme stable et prête à être utilisée par toute structure pour proposer une plateforme de transfert de connaissances basée sur les NoteBooks Jupyter. lien nᵒ 1 : Projet WoD
lien nᵒ 2 : Live démo
lien nᵒ 3 : Présentation Pour rappel (ou découverte pour ceux découvrant notre projet !) nous fournissons une plateforme de 3 machines (frontend, API-DB, backend) que vous pouvez installer automatiquement (VM ou physique) et qui fournissent un portail d'enregistrement fonctionnel pour permettre l'accès à 20 Notebooks sur diverses technologies FLOSS (Open Source et/ou Libres) qui sont gérés par un JupyterHub sur le backend, le tout orchestré par des APIs REST et SMTP/procmail APIs (description simplifiée, plus de détails via notre USER GUIDE).
En déployant cette pile, vos utilisateurs pourront s'auto-enregistrer pour suivre un Notebook choisi dans notre+votre catalogue de sujets, dérouler le Noteboook pour acquérir les connaissances qui y sont décrites, sans intervention de votre part, la plateforme gérant les inscriptions et effacements de demandeurs en autonomie (mais sans IA dedans, juste de la logique, du code des APIs et une Base de Données !). Et comme pour tout bon projet construisant sa communauté, nous vous encourageons à souscrire à notre mailing-list pour recevoir de l'aide, apporter des retours, être informés des nouveautés,… Simple comme envoyer ce mail ou cliquer sur ce lien.
Et nous espérons des contributions, en particulier des contenus complémentaires que vous voudriez promouvoir au travers de notre solution WoD.
Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 12. `EN` [Widelands, the open source Settlers-like, devs plan to ban all AI generated contributions](data/articles/4bb0f952666be6afd3461e15d62f1c50.html)
**Source:** GamingOnLinux
Widelands is a free and open source Settlers-like strategy game, and their developers appear to be setting a firm stance against any AI generated contributions. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="LinuxFr">

### 13. `FR` [Concours - Gagnez une Raspberry Pi 5 avec Macé Robotics](data/articles/252fb89d752ed853c1cc0f0fe6036d60.html)
**Source:** LinuxFr
À l’occasion de ses 10 ans de Macé Robotics, l’entreprise organise un concours qui se déroulera jusqu'au 26 février 2026.
Macé Robotics est une entreprise individuelle fondée et gérée par moi-même (Nicolas), basée en Bretagne, spécialisée dans la conception et la réparation électronique, aussi bien pour les entreprises que pour les particuliers. Depuis 2016, je fabrique aussi du matériel Open Source également des robots mobiles Open Source destinés à l’enseignement supérieur et à la recherche. Ces robots sont basés sur un système Linux (Raspberry Pi OS), intégrant une carte Raspberry Pi ainsi qu’un microcontrôleur (Pico) dédié à la gestion des moteurs et des capteurs. J’utilise la suite logicielle KiCad sous licence GNU GPL (https://www.kicad.org/) pour la conception des circuits imprimés de ces robots. Attribution des lots par tirage au sort :
→ 1er lot : une carte Raspberry Pi 5 (2 Go) → 2e lot : une carte Raspberry Pi Pico 2W
La livraison est offerte en France. lien nᵒ 1 : Le concours pour participer Retour sur la course de robots – Saint-Brock Robot Race d'une dépêche précédente
Suite à la dépêche de décembre 2024 concernant l’organisation de la course de robots mobiles, voici quelques retours sur cet événement : malgré plusieurs annulations d’écoles survenues quelques semaines avant la compétition, la course a tout de même pu avoir lieu.
Environ quinze participants ont pris part à la compétition. Parmi les robots engagés, on comptait un robot DIY piloté par un microcontrôleur ESP32, aux côtés de plusieurs robots basé sur Raspberry Pi, offrant ainsi une belle diversité technologique.
Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="OMG! Ubuntu">

### 14. `EN` [Ubuntu 24.04.4 LTS released with Linux 6.17 + Mesa 25.2](data/articles/037061f2ea3675dc122d5f8fc7284b7d.html)
**Source:** OMG! Ubuntu
Ubuntu 24.04.4 LTS is now available to download. This fourth point release brings the Linux 6.17 HWE kernel and Mesa 25.2 graphics stack for better hardware support.
You're reading Ubuntu 24.04.4 LTS released with Linux 6.17 + Mesa 25.2, a blog post from OMG! Ubuntu. Do not reproduce elsewhere without permission.

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="Journal du Hacker">

### 15. `FR` [Début des test days de GLF OS Phoenix Pulsar](data/articles/97594c3fb510cb1124b78a38b61191cb.html)
**Source:** Journal du Hacker
Voici les dates durant lesquelles se dérouleront les test days pour la future version de GLF OS : Du 1er Mars au 10 Mars 2026 inclus Nouveautés dans Phoenix Pulsar En plus de l’outil graphique pour gérer le pare-feu « Nix Firewall Management » présenté précédemment, voici les autres nouveautés à découvrir et à valider durant ces journées de tests : Ajout des applications suivantes : Thunderbird, Shotwell/Digikam, Kcalc, Piper, Reaper + Calf (studio) Input Remapper qui permet de reconfigurer les touches de votre clavier, souris ou manette Faugus débarque ! Il vient remplacer Lutris (toujours disponible mais plus mis en avant par défaut) GOverlay fait son arrivée sur GLF OS pour configurer mangohud facilement en quelques clics ! Nix-Shared-Drive (développé par l’équipe GLF OS) permet de gérer vos disques samba avec une interface graphique dédiée. De nouvelles versions pour : Le kernel en 6.18 LTS optimise le gaming (latence, HDR, VRR), améliore la compatibilité matériel (AMD/Intel/Apple), et renforce la sécurité (chiffrement TCP, BPF signé), tout en offrant une base stable pour les années à venir — idéal pour GLF OS et ses utilisateurs exigeants. Les drivers NVIDIA en 590.48 pour Linux apportent des optimisations majeures pour les GPU RTX 50/40/30, avec un support amélioré pour le ray tracing, le DLSS 3.5, et une meilleure gestion de la latence

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="LinuxFr">

### 16. `FR` [Podcast Projets Libres : présenter l'April épisode 3 : l'émission de radio Libre à vous ! et le site de transcriptions Libre à lire !](data/articles/5f0a66abf90b8c48c6e6ce6dbfab4c27.html)
**Source:** LinuxFr
Troisième et dernier épisode de la série sur l'April, l'association de promotion du logiciel libre en France Après avoir parlé des missions actuelles de l'April, et de ses combats passés, Avec nos trois invitées Julie Chaumard, Isabella Vanni et Marie-Odile Morandi vous découvrirez se prépare et s'organise leur émission de radio hebdomadaire, mais aussi et pourquoi sont réalisées les transcriptions au sein du groupe de transcriptions de l'April.
Bonne écoute ou lecture. lien nᵒ 1 : L'épisode du podcast
lien nᵒ 2 : Le site de l'April
lien nᵒ 3 : Le site de l'émission Libre à vous !
lien nᵒ 4 : Le site Libre à lire !
lien nᵒ 5 : Soutenir le podcast
lien nᵒ 6 : Adhérer et soutenir l'April Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 17. `EN` [Mesa Developers Trying To Reach A Consensus On AI Policy](data/articles/5146a955ad36abb7523de52265d411c2.html)
**Source:** Phoronix
If all goes well, Mesa developers are hoping to reach a consensus or at least some common ground on an AI policy in March. Mesa is the latest open-source project making considerations around the growing activity around AI coding agents and the like and how to deal with them for this project that is crucial to the Linux desktop and open-source 3D graphics drivers at large...

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 18. `EN` [Frostrail gets a new trailer to showcase its freezing train-survival gameplay](data/articles/306c9f45b5a68daaea83739f0969566b.html)
**Source:** GamingOnLinux
Frostrail is another exciting game to keep an eye on, an open-world survival game where you and friends travel through a frozen world on a train. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="OMG! Ubuntu">

### 19. `EN` [Ubuntu 26.04 Snapshot 4 is now available to download](data/articles/73dec34bf285bf23b898a4143b0d34ef.html)
**Source:** OMG! Ubuntu
Canonical’s engineers have announced the fourth and final monthly snapshot of Ubuntu 26.04, ahead of next month’s all important beta release. Ubuntu 26.04 Snapshot 4, like all other monthly snapshots, not a blessed build intended for mainstream usage. It’s a “throwaway artifact” that enables the distro’s engineers to fine-tune and hone a new automated build system. Compared to the January release of snapshot 3, there’s more ‘of note’ packed inside of this one, like the Linux 6.19 kernel and more GNOME 50 beta components (Mutter, Files, Settings), though the new Showtime video player is not included – but is coming. […]
You're reading Ubuntu 26.04 Snapshot 4 is now available to download, a blog post from OMG! Ubuntu. Do not reproduce elsewhere without permission.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 20. `EN` [Longterm supported Linux kernels get a longer life](data/articles/224c11e5e31c6122bc7ec00ec33fa18b.html)
**Source:** GamingOnLinux
Linux developer Greg Kroah-Hartman announced that the Longterm supported Linux kernels are going to be supported for longer than previously announced. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="Journal du Hacker">

### 21. `FR` [NixOS, ou comment j'ai arrêté de bricoler mon Linux](data/articles/7708ca3b5c75064fbae373bf336e4776.html)
**Source:** Journal du Hacker
Une belle histoireDebian, on connaît tous. Mère de nombreuses distributions modernes, je l’utilise depuis 13 ans. Rien qu’avec cette phrase, j’ai pris un coup de vieux.J’ai débuté avec Debian stable, en supprimant le dual boot pour me forcer à rester sous Linux. Après un passage sous Ubuntu, je suis revenu sur Debian testing, qui cochait toutes les cases : ça marche, les paquets sont récents, pas de question à se poser.Assez vite, j’ai voulu automatiser l’installation et la configuration de mes machines pour ne pas perdre une journée à chaque réinstallation et partager mes configurations entre ordinateurs. J’ai tout passé sous Ansible (j’en ai parlé ici). C’est un peu lourd, mais en 4 ans je n’ai eu aucun souci majeur.Le problèmeSi tout roulait au quotidien, un souci prenait de plus en plus de poids : la gestion de mes logiciels. Malgré le large catalogue Debian, je me retrouvais souvent à bricoler. Un wget par-ci, un binaire copié par-là, asdf, npm, la release GitHub de Neovim… Bref, plein de méthodes d’installation hétérogènes. Tout packager en .deb aurait été une solution, mais le packaging Debian est lourd à maintenir.Autre souci, plus rare mais frustrant : deux mises à jour ont cassé des choses (ma stack PGP, puis le Bluetooth). Rien de gravissime, mais le rollback sous Debian testing, c’est à chaque fois identifier manuellement quel paquet a tout cassé. Du temps perdu jus

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="OMG! Ubuntu">

### 22. `EN` [Typhoon weather app clears up with Qt6 port](data/articles/6754dd631ce7ed4f8f6618ce08512627.html)
**Source:** OMG! Ubuntu
The forecast is looking Qt for fans of open-source weather app Typhoon, the latest update to which swaps its creaking GTK3 backend for a lithe Qt 6 one. What’s interesting about this change in Typhoon 1.7.x is that it doesn’t impact the UI in any noticeable way. The app still uses a colourful, borderless window with optional transparency, and conveys weather forecast data via stark white text and glyphs. Archisman Panigrahi, Typhoon’s developer, says the Qt port was needed since GTK3 is being deprecated, but that rewriting the app in GTK4 was a non-starter given it ‘does not play well […]
You're reading Typhoon weather app clears up with Qt6 port, a blog post from OMG! Ubuntu. Do not reproduce elsewhere without permission.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 23. `EN` [LLVM Clang 22 Compiler Performance Largely Unchanged Over Clang 21 On AMD Zen 5](data/articles/94a567704d223e92397ca8ce77a937d6.html)
**Source:** Phoronix
With yesterday's stable release of the LLVM Clang 22 compiler it didn't take long for Phoronix readers to begin asking about the performance of this half-year feature update to this prominent open-source C/C++ compiler. What I am seeing so far are no big surprises with the performance largely being similar to Clang 21 across various open-source C/C++ workloads in the testing thus far. This initial round of reference benchmark results between LLVM Clang 22, Clang 21, and Clang 20 were done on an AMD EPYC Turin (Zen 5) Linux server.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="LWN.net">

### 24. `EN` [[$] No hardware memory isolation for BPF programs](data/articles/e304719b3a14ae8b2a1c43d88193594d.html)
**Source:** LWN.net
On February 12, Yeoreum Yun posted a
suggestion
for an improvement to the security of the kernel's BPF implementation: use memory protection keys to prevent unauthorized access to memory by BPF
programs.
Yun wanted to put the topic on the list for discussion at the Linux
Storage, Filesystem, Memory Management, and BPF Summit in May, but the
lack of engagement makes that unlikely. They also have a patch set implementing
some of the proposed changes, but has not yet shared that with the mailing list.
Yun's proposal does not seem likely to be accepted in its
current form, but the kernel has added hardware-based hardening options in the
past, sometimes after substantial discussion.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 25. `EN` [Systing 1.0 Released For Rust-Based eBPF-Based Tracing Tool Leveraging AI](data/articles/33ae67d38421651688b514576f353dac.html)
**Source:** Phoronix
Josef Bacik, of Btrfs notoriety before leaving Meta and stepping back from kernel development last year, announced the release of Systing 1.0. Systing is a newer eBPF-tracing tool for Linux complete with AI integration...

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 26. `EN` [D7VK version 1.4 brings further enhancements for older Direct3D via Vulkan](data/articles/64206f7807ad3300f66156d2969e321d.html)
**Source:** GamingOnLinux
Even more improvements have arrived for D7VK that brings Direct3D 5, 6 and 7 via Vulkan for use with Wine / Proton in version 1.4. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 27. `EN` [Get A Plague Tale: Innocence &amp; Requiem, Evil West and more in the Focus Entertainment Humble Bundle](data/articles/198e5ddd72b79a3dd48d8b6adacc09f3.html)
**Source:** GamingOnLinux
Get some quality games from Focus Entertainment in the new Humble Bundle, all of them should work well on Linux / SteamOS too thanks to Proton. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="LinuxFr">

### 28. `FR` [Sortie de 0 A.D. 28 « Boiorix »](data/articles/576209f83303d915c5449696f357b1a4.html)
**Source:** LinuxFr
Cela fait un petit moment qu'il n'y a pas eu d'actualités publiées concernant le jeu 0 A.D. : la dernière version annoncée en dépêche était la Alpha 26 « Zhuangzi » en octobre 2022, et le dernier lien concernait le départ du project leader en octobre 2023. Et pourtant une version « Alpha 27: Agni » est parue en janvier 2025 et Stan est de nouveau/encore le project leader. Au fait c'est quoi 0 A.D ?
0 A.D. : Empires Ascendant est un jeu vidéo de stratégie en temps réel (Real Time Strategy, RTS) historique en 3D développé par Wildfire Games. C’est un projet libre (code sous GPL v2, données sous CC BY‑SA 3.0), au développement ouvert, visant des standards de qualité artistique comparables à ceux de l’industrie, ainsi qu’un grand respect de la réalité historique. Le jeu permet d’incarner quinze factions qui ont marqué leur histoire entre les rives de l’Atlantique et la chaîne de l’Himalaya, au cours de la période allant de −500 av. J.‑C. à −1 av. J.‑C. lien nᵒ 1 : Annonce de la version 28 « Boiorix »
lien nᵒ 2 : Annonce de la version Alpha 27 « Agni » La version Alpha 27 « Agni » ?
Petit retour rapide sur l'annonce en janvier 2025 de la version Alpha 27 « Agni », qui souligne les éléments principaux :
il s'agit de la dernière version qui porte le nom/statut « Alpha » ;
4 cartes supplémentaires
des améliorations du rendu graphique et du moteur de jeu
des trucs et astuces
des nouveaux visuels pour les entités, bâtiments et paysages
un second album de musiques d'ambiance
les civilisations spartiates, romaines, athéniennes et macédoniennes ont été plus différenciées (en termes d'arbres technologiques).
il est possible de contrôler la cible des bâtiments qui attaquent avec des flèches
refonte navale avec des navires éclaireur, spécialisés en tir de flèches, enflammés ou de siège
le système de capture de bâtiment évolue : le clic droit déclenche l'attaque et non plus la capture
les éléphants sont devenus plus polyvalents
les unités championnes sont plus variées
ajustements et équilibrage sur les unités de mêlée, l'influence territoriale incitant à plus d'expansion, la capacité en unités des remparts et les engins de siège
il est possible de sélectionner 300 unités
Et le développement est passé de SVN à Git.
Et donc la version 28 « Boiorix »
Cette partie est basée sur l'annonce de la sortie, sans être une traduction complète exhaustive.
L'équipe indique rechercher des personnes pour contribuer sur l'édition vidéo, la gestion des médias sociaux, le design de site web, le test et la qualité, la traduction, le développement logiciel et artistique.
Les Germains
Une nouvelle faction a été ajoutée : les Germains (représentant une coalition entre les Cimbres, les Teutons, les Ambrons et autres peuples celto-germaniques, comme un peuple semi-nomade. Les unités civiles
Les citoyens genrés : précédemment appelées "femmes citoyennes", les civils sont maintenant représentés par des modèles d'hommes ou de femmes. Cela enlève les ambiguïtés précédentes : les civils n'étaient pas que des femmes, et le terme "citoyens" ne reflétait pas les catégories souhaitées de civils vs militaires. Rendu du texte
Pour permettre l'affichage de diverses langues sans utiliser trop de mémoire, le rendu du texte est désormais fait à la volée avec Freetype. Le rendu est aussi amélioré sur les écrans Hi-DPI. Nouvelles options de jeu
Il devient possible :
de retirer un emplacement de joueur d'une partie (ex: sur une carte prévue à 4 joueurs, faire disparaître les unités et bâtiments du numéro 3) ; de limiter la population d'une équipe (plutôt que de chaque joueur séparément) Des corrections de bugs ont été faites en refactorisant le code (dont celui sur les scénarios d'inondation qui se propageaient).
Hall multi-joueurs
Parmi les amélioriations : chiffrement avec TLS, facilitation de l'hébergement de parties, correction de bug gelant le jeu.
Amélioration du moteur et de la gestion des plateformes
Le moteur Javascript SpiderMonkey passe en version 128. Windows 10 et 11 deviennent les seules versions prises en charge.
Une version Windows 64 bits est fournie (et la version 32 bits pourrait disparaitre à termes).
Une version AppImage est fournie.
Nouvelles citations et astuces
Des nouvelles citations et astuces pour joueurs débutants et joueuses confirmées (ou l'inverse) ont été ajoutées. Améliorations d'équilibrage
capture des bâtiments : augmentation de leur résistance, capacité de capture par les civils
bataille navale : simplification de l'arbre technologique, éclaireurs disponibles dès le début, équilibrage
mouvement de groupe/formation : mouvement plus cohérent, avec répartition autpur du point d'arrivée
rééquilibrage de la cavalerie championne
divers rééquilibrages d'unités et bâtiments, dont certains spécifiques aux factions / civilisations
Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="LinuxFr">

### 29. `FR` [Au café libre — « Libre à vous ! » du 17 février 2026 — Podcasts et références](data/articles/c9b9000e8cb7bf27fd173e8658e03eb9.html)
**Source:** LinuxFr
269eme émission « Libre à vous ! » de l’April. Podcast et programme :
sujet principal : Au café libre (débat autour des actualités du logiciel libre) avec Maud Royer, Gee, Vincent Calame ;
chronique de Gee sur « Attention à l’économie de l’attention » ;
chronique de Vincent Calame sur « Pris dans la toile » de Sébastien Broca (la suite) ;
Quoi de Libre ? Actualités et annonces concernant l’April et le monde du Libre. lien nᵒ 1 : Podcast de la 269ᵉ émission
lien nᵒ 2 : Les références pour la 269ᵉ émission et les podcasts par sujets
lien nᵒ 3 : S'abonner au podcast
lien nᵒ 4 : S'abonner à la lettre d'actus
lien nᵒ 5 : Libre à vous !
lien nᵒ 6 : Radio Cause Commune Rendez‐vous en direct chaque mardi de 15 h 30 à 17 h sur 93,1 MHz en Île‐de‐France. L’émission est diffusée simultanément sur le site Web de la radio Cause Commune. Vous pouvez nous laisser un message sur le répondeur de la radio : pour réagir à l’un des sujets de l’émission, pour partager un témoignage, vos idées, vos suggestions, vos encouragements ou pour nous poser une question. Le numéro du répondeur : +33 9 72 51 55 46. Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="LinuxFr">

### 30. `FR` [Emmabuntüs renforce l’accessibilité avec les versions Debian Édition 6 1.00 et 5 1.05](data/articles/fc80ec8c4d2be4bc555e4a33c560dfae.html)
**Source:** LinuxFr
Le collectif Emmabuntüs annonce deux publications récentes mettant fortement l’accent sur l’accessibilité numérique, fruit d’un travail mené en grande partie avec et par des bénévoles non-voyants et malvoyants, directement impliqués dans la conception, les tests et les améliorations ergonomiques de la distribution. lien nᵒ 1 : Le 15 décembre 2025, EmmaDE6 1.00 : une nouvelle version axée sur l’accessibilité !
lien nᵒ 2 : Le 25 janvier 2026, EmmaDE5 1.05 : mise à jour axée sur l’accessibilité !
lien nᵒ 3 : Stéphane, non-voyant et surd[év]oué de l’informatique
lien nᵒ 4 : Philippe, un espérantiste convaincu !
lien nᵒ 5 : Le numérique accessible à tous !
lien nᵒ 6 : Arrivée au Togo du conteneur Mutualiste Sans Frontières
lien nᵒ 7 : Contact La version Emmabuntüs Debian Édition 6 1.00, basée sur Debian 13 (Trixie) avec les environnements Xfce et LXQt, introduit de nombreuses améliorations destinées aux personnes malvoyantes ou non-voyantes : interface dédiée à l’accessibilité, synthèse vocale améliorée (espeak, MBROLA, Piper), profils Orca, support d’embosseuses Braille, intégration de LIOS (OCR), ainsi que divers scripts simplifiant la prise en main. Cette version est notamment destinée à des déploiements au Togo, en partenariat avec les associations françaises A.S.I YOVOTOGO, Mutualistes Sans Frontières et la FETAPH (Fédération Togolaise des Associations de Personnes Handicapées).
En parallèle, la version Emmabuntüs Debian Édition 5 1.05, basée sur Debian 12 (Bookworm) et disponible en 32 et 64 bits, bénéficie des mêmes avancées en matière d’accessibilité. Elle permet ainsi de poursuivre le reconditionnement d’ordinateurs plus anciens, tout en offrant une expérience utilisateur inclusive.
Ces deux versions illustrent l’engagement d’Emmabuntüs en faveur de l’inclusion numérique, du logiciel libre, du réemploi de matériel informatique, ainsi que la place centrale offerte à l’expertise d’usage apportée par ses bénévoles concernés par le handicap visuel.
Le projet reste ouvert aux contributions, notamment pour les tests d’accessibilité, la documentation et l’amélioration des outils destinés aux utilisateurs malvoyants ou non-voyants.
Fin mars, nous publierons une nouvelle version d’Emmabuntüs Debian Édition 6 1.01, plus légère et plus modulable, afin de permettre à chacun de choisir les logiciels dont il a réellement besoin. Nous recherchons des bénévoles pour participer aux tests de cette version.
Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 31. `EN` [NVIDIA hiring Linux driver engineers to help with Vulkan, Proton and more](data/articles/f9ba03dd7b8fb7394f4d7814cd43c8d9.html)
**Source:** GamingOnLinux
NVIDIA have multiple job listings available for Linux developers - this could be your chance to improve Linux gaming if you have the skills. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="LinuxFr">

### 32. `FR` [Nouvelles de Haiku - Hiver 2025-26](data/articles/5513552cd42722ebbaddda91c1eba20d.html)
**Source:** LinuxFr
Haiku est un système d’exploitation pensé pour les ordinateurs de bureau. Il est basé sur BeOS mais propose aujourd’hui une implémentation modernisée, performante, et qui conserve les idées qui rendaient BeOS intéressant: une interface intuitive mais permettant une utilisation avancée, une API unifiée et cohérente, et une priorisation de l’interface graphique par rapport à la ligne de commande pour l’administration du système.
Il ne s’agit pas d’une distribution Linux, mais d’un système complet avec son propre noyau, sa propre pile graphique, etc. L’idée de cette approche est d’avoir une seule équipe travaillant sur toute la pile logicielle, pour éviter les soucis de coordination entre projets indépendant et d’excès de modularité, qui peuvent aboutir à une architecture logicielle inefficace. En revanche, cela demande un gros travail pour une équipe relativement réduite, et le système est donc en développement depuis bientôt un quart de siècle sans avoir encore publié une version majeure complète.
La cinquième version beta a été publiée en 2024. Les développements continuent pour stabiliser, optimiser et peaufiner le système, avec une version beta 6 prévue en début de cette année, qui sera probablement suivie par une beta 7 quelque temps plus tard.
Cette série de dépêches est basée sur les rapports d’activité publiés mensuellement par le projet Haiku. Cette édition couvre les modifications de Haiku numérotées entre hrev59111 et hrev59355 (soit 244 changements individuels), en plus d’activités se déroulant hors du dépôt Git principal.
Entre parenthèses est indiqué le pseudonyme de l’auteur ou autrice principal·e du changement. Des pseudonymes sont utilisés par habitude (venant des canaux IRC et/ou de la culture de la demoscene) et aussi pour préserver l’identité des personnes qui le souhaitent (certains participants utilisent également leur nom légal, d’autres pas). lien nᵒ 1 : Dépêche trimestrielle précédente
lien nᵒ 2 : Rapport d'acivité mensuel de novembre 2025
lien nᵒ 3 : Rapport d'activité mensuel de décembre 2025
lien nᵒ 4 : Rapport d'activité mensuel de Janvier 2026 Sommaire
Mise à jour de Go en version 1.18
Redémarrage automatique de app_server
Applications
ActivityMonitor
Terminal
HaikuDepot
WebPositive
Expander
AboutSystem
LaunchBox
Tracker
MediaPlayer
Sudoku
DeskBar
People
Lecteur MIDI
MidiPlayer
ProcessController
Installer
Mail
DriveSetup
Debugger
Changements transverses
Fenêtres de préférences
Réseau
Périphériques d’entrée
Apparence
Outils en ligne de commande
Kits
Interface
Storage
Device
Package
Serveurs
Notifications
Network
app_server
Pilotes de périphériques
Systèmes de fichiers
libroot &amp; noyau
Réseau
Gestion des processus
Bibliothèque C standard
Gestion de la mémoire
Entrées-sorties
Chargeur de démarrage
Systèmes de fichiers
Outils de debug
Build system
Documentation
Haiku book
Documentation interne
Autres nouvelles
Changement de tarification de Netlify
Remise sur les rails de HSA (Haiku Support Association)
Série d’articles « Gerrit code review iceberg »
Statistiques de contribution pour 2025
Mise à jour de haiku-format
À quand la beta 6?
Mise à jour de Go en version 1.18
Le mois de novembre a vu l’arrivée d’une grosse mise à jour de la chaîne d’outils pour le langage Go en version 1.18. Il s’agit d’une version de 2022, mais c’est un gros progrès puisque la version précédente disponible pour Haiku était la version 1.4 datant de 2014. De plus, cette version 1.18 est disponible dans le dépôt de paquets et peut être installée normalement avec pkgman (au moins pour les architectures x86 et x86_64).
La plus grande partie du travail a été réalisée par Korli, depuis plusieurs années, pour mettre en place l’environnement de compilation nécessaire, et aussi corriger de nombreux problèmes de compatibilité POSIX dans Haiku qui ont été mis en évidence par les tests de Go.
Cela permet par exemple d’utiliser Hugo, le générateur de site statique utilisé pour le site principal de Haiku. Waddlesplash a donc pu rédiger et vérifier le rapport d’activité de novembre en utilisant uniquement Haiku : avec Hugo, WebPositive (le navigateur natif de Haiku, basé sur WebKit), l’éditeur de texte Koder, ainsi que Iceweasel (un portage de Firefox) pour la correction d’orthographe.
Redémarrage automatique de app_server
app_server est le serveur graphique de Haiku. Il s’agit d’un composant critique, pour lequel un crash rend le système à peu près inutilisable. Waddlesplash a corrigé plusieurs problèmes dans le code pour permettre de redémarrer le serveur après un crash, et de le reconnecter avec les applications en cours d’exécution. Ce redémarrage nécessite encore quelques étapes manuelles car les crash démarrent actuellement le debugger automatiquement, mais cela peut être changé par une simple configuration.
Applications
ActivityMonitor
ActivityMonitor affiche sous forme graphique divers paramètres du système: charge CPU, consommation mémoire… Il peut s’exécuter dans une fenêtre ou bien être intégré au bureau sous forme d’un « réplicant ».
Affichage d’un message « pas de capteurs de température » à la place du graphe de température du système si l’information n’est pas disponible (OscarL).
Correction d’un problème de localisation, certains fichiers sources n’étaient pas pris en compte et les chaînes contenues dedans ne pouvaient pas être traduites (humdinger).
Terminal
Le Terminal permet d’exécuter des applications en ligne de commande.
Synchronisation du presse-papier interne du Terminal avec celui du système seulement une fois au démarrage de l’application, et pas lors du changement d’onglet comme cela avait été implémenté au trimestre précédent (OscarL).
Correction d’un problème qui masquait le signal SIGUSR1 pour les shells et autres processus lancés dans le terminal (korli).
Implémentation des séquences d’échappement permettant aux applications CLI de définir des liens hypertextes (en complément des liens qui étaient déjà détectés automatiquement par le terminal en fonction du contenu du texte) (korli).
HaikuDepot
HaikuDepot est l’interface graphique du gestionnaire de paquets. Il utilise un backend en ligne en Java pour stocker et récupérer les captures d’écrans, et notes d’utilisateurs, icônes des paquets, liste de paquets mis en avant, et d’autres informations.
L’application est plus robuste en cas de problème de réseau : gestion des erreurs et affichage de messages clairs pour l’utilisateur. Gestion en particulier des erreurs 503 remontées par l’API web utilisée par HaikuDepot (apl).
Ajout de filtres pour trouver facilement les applications « natives » (n’utilisant pas Qt ou GTK) et d’un filtre « desktop » pour trouver les applications graphiques (et filtrer un très grand nombre de paquets de bibliothèques, applications en ligne de commande…) (apl, avec des améliorations par humdinger pour clarifier la terminologie).
Amélioration de la taille de la fenêtre des conditions d’utilisation sur les écrans haute densité (nipos).
Refonte de la gestion des identifiants de messages internes à l’application HaikuDepot pour en simplifier la maintenance (apl).
Interdiction de la sélection multiple dans la liste des paquets (apl).
WebPositive
WebPositive est le navigateur web fourni avec Haiku. Il est basé sur le moteur WebKit, co-développé avec Apple, Sony, Igalia et d’autres participants.
Modification du message envoyé au Tracker pour ouvrir le dossier contenant un fichier (par exemple un téléchargement), pour utiliser le message officiellement prévu à cet effet plutôt qu’un moyen détourné (humdinger).
Meilleure gestion des noms de fichiers longs dans la fenêtre de téléchargements avec l’ajout d’une barre de défilement horizontal (mull, avec un petit correctif par humdinger pour corriger un décalage d’un pixel du positionnement de la barre de défilement).
Un chantier est en cours pour réintégrer à nouveau le portage de WebKit pour Haiku dans les sources upstream.

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="LinuxFr">

### 33. `FR` [Physiocab : un logiciel libre de gestion pour kinésithérapeutes](data/articles/e0eab329ba8752732324b8914ae82b51.html)
**Source:** LinuxFr
Physiocab est un logiciel libre de gestion de cabinet de kinésithérapie, développé sous licence Affero GPL 3.0 et hébergé sur Codeberg. Le projet est porté par la société Allium SAS, dans le cadre de la plateforme communautaire Kalinka, dédiée aux kinésithérapeutes francophones.
Le projet vient de passer en beta publique (v0.9) et cherche des testeurs et contributeurs.
Pourquoi un logiciel libre pour les kinés ? Le secteur de la santé libérale souffre d'une offre logicielle dominée par des solutions propriétaires onéreuses, souvent opaques sur le traitement des données de santé. Physiocab propose une alternative : un code auditable, des données stockées localement sous la responsabilité du praticien. lien nᵒ 1 : La page de présentation du projet
lien nᵒ 2 : Le dépôt codeberg
lien nᵒ 3 : PeerJs (MIT) Fonctionnalités
La beta couvre déjà un large périmètre fonctionnel :
Planning hebdomadaire en drag &amp; drop, avec export PDF et gestion des semaines exceptionnelles, particulièrement orienté vers les kinés intervenant en multi-établissements.
Bilans Diagnostiques Kinésithérapiques (BDK) avec tests standardisés (TUG, Tinetti, Handgrip, EVA, évaluation du risque de chute…), export de PDF et historique comparatif.
Suivi des séances avec de multiples exercices structurés (équilibre, force, endurance, mobilisation), chronométrage automatique et calcul de progression.
Application tablette en PWA : fonctionne hors connexion grâce à un Service Worker, s'installe sans passer par un store, interface optimisée tactile.
Stack technique
Backend : Python 3.10+
L'application est multi-plateforme côté client (Windows, macOS, Linux, iOS, Android). La communication entre l'appli de bureau et l'appli PWA se fait de manière directe via PeerJs. Cette méthode ne nécessite pas de préparation contraignante comme l'ouverture de ports.
Les données sont stockées localement, ce qui implique que le praticien reste maître de ses sauvegardes et de sa conformité RGPD.
Le logiciel a été testé par un kinésithérapeute en situation réelle plusieurs jours d'affilée.
Modèle économique
L'utilisation est gratuite, sans limite dans le temps et sans frais cachés, la licence Affero GPL 3.0 en étant la garantie. Un support payant sur devis est proposé pour les praticiens souhaitant une installation assistée, une formation à distance, des développements sur mesure ou un audit de sécurité.
Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="Journal du Hacker">

### 34. `FR` [PostgreSQL 18.3 et autres correctifs](data/articles/31e492317df8d227ba34ead679e05b61.html)
**Source:** Journal du Hacker
2026-02-27 656 mots, 4 minutes de lecture Le PGDG (PostgreSQL Global Development Group) a publié une mise à jour
de toutes les versions supportées de PostgreSQL, incluant 18.3, 17.9, 16.13, 15.17 et 14.22.
Cette publication hors cycle corrige des régressions relevées depuis la dernière publication de la 18.2 du 12 février 2026.
Pour la liste complète des changements, se référer à la section Notes
de publication.
Corrections de bogues et améliorations
Cette mise à jour corrige plusieurs bogues ayant été signalés après
la dernière publication. Les problèmes ci-dessous concernent
PostgreSQL 18. Certains de ces problèmes peuvent aussi concerner
d’autres versions de PostgreSQL. correction d’une anomalie où un standby est stoppé sur une erreur de type could not access status of transaction;
correction d’une erreur sur la fonction substring() qui remonte l’erreur invalid byte sequence for encoding sur des valeurs de texte non ASCII si la source de cette valeur est une colonne, et introduit par la correction CVE-2026-2006;
correction de la fonction strict_word_similarity dans pg_trgm qui peut entraîner des résultats incorrects ou des plantages. Cela est dû à une omission dans la correction de CVE-2026-2007;
correction de la volatilité des fonctions json_strip_nulls() et jso

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="Journal du Hacker">

### 35. `FR` [Mariabackup : sauvegarder à chaud les bases de données MariaDB](data/articles/0ad6a63ca34fae9efe0f5321fd8e76ba.html)
**Source:** Journal du Hacker
Cet article présente MariaDB-Backup, appelé aussi Mariabackup, pour effectuer la sauvegarde et la restauration complète d'instances SQL. L'objectif : disposer d'un outil beaucoup plus performant que Mysqldump pour sauvegarder et restaurer des bases de données. Si vous gérez des serveurs de bases de données MariaDB ou MySQL, vous devez veiller à effectuer une sauvegarde des bases de données. L'outil par défaut et natif pour réaliser cette tâche, c'est mysqldump. Mais, il montre rapidement ses limites au niveau des performances, car les traitements sont très longs (trop longs, même je dirais) sur des grosses bases. C'est ici qu'intervient MariaDB-Backup, un outil gratuit et open source à l'effigie de MariaDB. Cet outil permet de réaliser des sauvegardes physiques "à chaud" (sans interruption de service pour le moteur InnoDB), garantissant une cohérence parfaite des données. Il est particulièrement adapté aux environnements de production exigeants, où la rapidité de la sauvegarde et de la restauration est un critère important. Dans ce tutoriel, nous allons explorer l'installation et l'utilisation de Mariabackup pour sauvegarder et restaurer une instance MariaDB. SommaireComprendre la différence : sauvegarde logique vs physiqueInstallation de mariabackupCréer un utilisateur dédié pour les sauvegardesCréer une première sauvegarde avec MariabackupRestaurer une sauvegar

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 36. `EN` [The OrangePi Neo gaming handheld with Manjaro Linux is now "on ice" due to component prices](data/articles/4e821461573df1e8de43bbc353d9f7e8.html)
**Source:** GamingOnLinux
The latest update for the OrangePi Neo handheld with Manjaro Linux is not a positive one, with the whole thing now unfortunately "on ice". Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 37. `EN` [Canonical Talks Up RISC-V This Year With Ubuntu 26.04 LTS](data/articles/d7d0e4731cb7bd8fc5123aca92a8a189.html)
**Source:** Phoronix
Canonical put out a new blog post today highlighting their RISC-V work over 2025 that included switching to the RVA23 profile baseline for Ubuntu 25.10 and moving forward. Now with RVA23-compatible RISC-V hardware coming to market this year, Canonical is talking up the RISC-V possibilities when paired with the upcoming Ubuntu 26.04 LTS release...

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 38. `EN` [Running With Scissors announced horror first person shooter Flesh &amp; Wire](data/articles/6bd1373fdcd00d0fc1a6744034de915c.html)
**Source:** GamingOnLinux
Diving into the roots of the POSTAL series, Running With Scissors recently revealed the new horror first person shooter Flesh &amp; Wire. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 39. `EN` [Gambonanza is the best Balatro-like version of chess yet and you have to try the demo](data/articles/7b4c145fbb2f3839014f9d4d3003bb74.html)
**Source:** GamingOnLinux
If you love strategy games and roguelikes, Gambonanza fuses together the worlds of Balatro and chess like no other and it won me over completely. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 40. `EN` [The "video game preservation service" Myrient is shutting down in March](data/articles/a74ad6017215cd47929e9d21f18ce712.html)
**Source:** GamingOnLinux
Myrient is a popular "video game preservation service" that has over 390 terabytes of classics but it's about to go offline forever. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 41. `EN` [Heroic Games Launcher v2.20.1 brings more essential bug fixes](data/articles/71e4e2cdea09e251078f63cbed1b44fa.html)
**Source:** GamingOnLinux
Heroic Games Launcher continues to bring improvements to run games from Epic, GOG, Amazon and more on Linux / SteamOS systems with v2.20.1 out now. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 42. `EN` [Numerous AMDXDNA Ryzen AI Driver Fixes For Linux 7.0-rc2](data/articles/35e7070572918bdd967c0bb5b961c48f.html)
**Source:** Phoronix
Sent out today were all of the DRM/accel driver fixes for the week, ahead of the Linux 7.0-rc2 kernel release due out on Sunday...

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 43. `EN` [Smash everything apart together as Teardown goes multiplayer on March 12](data/articles/a01ae90e5ec07e12b67ca78f218ce8ee.html)
**Source:** GamingOnLinux
The physics-based voxel destruction game Teardown is set for a huge free upgrade on March 12th, when the multiplayer update arrives. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 44. `EN` [Genode OS 26.02 Halfway Done Migrating From GitHub To Codeberg](data/articles/075ebccba58d5aa4502dbb9b9bcc5098.html)
**Source:** Phoronix
Genode OS 26.02 is out as the latest feature update to this open-source operating system framework that also serves as the basis for their Sculpt general purpose OS...

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 45. `EN` [He-Man and the Masters of the Universe: Dragon Pearl of Destruction arrives April 28](data/articles/21c5d79dca344a2124e6dc5b8f3f253e.html)
**Source:** GamingOnLinux
Another good one for fans of retro-styled beat 'em ups, as He-Man and the Masters of the Universe: Dragon Pearl of Destruction is releasing April 28th. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 46. `EN` [LXD 6.7 Released With AMD GPU Passthrough Support](data/articles/7c7c19a574bbb3017ae26bce615df17b.html)
**Source:** Phoronix
Canonical today released LXD 6.7 as the latest feature update to this system container and virtual machine manager commonly used in Ubuntu Linux environments...

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 47. `EN` [Microsoft Updates DirectX Shader Compiler With Improved Vulkan Driver Interoperability](data/articles/b5c0eced2433ae5572bc1f527afb4879.html)
**Source:** Phoronix
Microsoft has published a new version of its open-source DirectX Shader Compiler. Besides adding Shader Model 6.9 production support, making this DX Compiler update interesting to us are the SPIR-V back-end improvements and enhancing interoperability with Vulkan drivers...

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Its FOSS">

### 48. `EN` [FOSS Weekly #26.09: Linux Mint Shortcuts, OpenClaw Alternatives, Ladybird's Rust Move, Super Productivity and More](data/articles/b8c4718f98e9f62774e4abfec1bc0a43.html)
**Source:** Its FOSS
What One Year of AI Has Already Changed

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 49. `EN` [Linux 7.1 Looks To Support Extended Attributes On Sockets For New GNOME &amp; systemd Functionality](data/articles/90729e8ce434c91bed0c89b76e11a6c1.html)
**Source:** Phoronix
While the Linux 7.0 feature merge window ended this past weekend and that next kernel release won't debut as stable until April, there are already features out on the horizon that are being positioned for likely merging into the Linux 7.1 kernel assuming no issues appear or objections raised by Linus Torvalds. One of the features already looking like it will be submitted for Linux 7.1 is supporting extended attributes on sockets...

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 50. `EN` [Fwupd 2.0.20 Brings New Hardware Support](data/articles/ef32d831b09e0dd12f8b3945ef9cf6db.html)
**Source:** Phoronix
Fwupd/LVFS lead developer Richard Hughes of Red Hat today released Fwupd 2.0.20 with continuing to advance firmware updating on Linux systems...

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 51. `EN` [SpaghettiKart the Mario Kart 64 fan-made PC port gets a big upgrade](data/articles/e8b3bedd836c3b1e2c3018b84485f673.html)
**Source:** GamingOnLinux
The Harbour Masters team recently released a big upgrade for SpaghettiKart, their Mario Kart 64 fan-made PC port with a bunch of new features. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 52. `EN` [Run your own band in the pixel art management game Legends of Rock](data/articles/9fec5db4ff83fb19e9ba29f825011fab.html)
**Source:** GamingOnLinux
Legends of Rock is coming later this year from the developer of Dude, Where Is My Beer? that sees you build up and manage your own band. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 53. `EN` [Retro games bundle MARVEL MaXimum Collection announced](data/articles/ce4b2b3353d217639cf158aa4f265b95.html)
**Source:** GamingOnLinux
Coming from Limited Run Games, MARVEL MaXimum Collection will be a bundle of retro classic Marvel titles "from the golden age of gaming". Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 54. `EN` [Topdeck Automat blends the worlds of roguelike deckbuilder and autobattlers](data/articles/e70330a3a1cef40147cc1619c33e15cc.html)
**Source:** GamingOnLinux
Topdeck Automat gives you hundreds of cards to build a deck where your printer droid spits them out at random - sounds like quite a fun mixture. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 55. `EN` [ZCULL Support For Nouveau + NVK Brings Some Small Performance Gains](data/articles/6c21ef92ef579718a50c1d913ace2539.html)
**Source:** Phoronix
Merged yesterday to Mesa 26.1 for the open-source NVIDIA Vulkan driver "NVK" is ZCULL support for more efficient rendering and bringing some small performance gains to this open-source NVIDIA driver stack...

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 56. `EN` [Kick fascists so hard they fly into the sun in Verminsteel](data/articles/185070fe1a500c43846539896e20b7d3.html)
**Source:** GamingOnLinux
Verminsteel is a new announcement from Glass Bottom Games that will see you hack and slash your way through hordes of fascists and take down their leaders. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 57. `EN` [Intel Vulkan Driver Sees Some Minor Optimizations For DX12 Games On Linux](data/articles/b0054a90bad3fb4d7a200762eeb74dac.html)
**Source:** Phoronix
Merged to Mesa 26.1-devel this week is a minor improvement to the Intel "ANV" Vulkan driver providing some slight enhancements to DirectX 12 games running on Linux by way of Valve's Steam Play with VKD3D-Proton...

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 58. `EN` [Grim Dawn celebrates 10 years - set for a big free upgrade with a modern scaleable UI and an expansion](data/articles/89fb5ba3acbbbb03ba35a9610d6b1954.html)
**Source:** GamingOnLinux
Grim Dawn is getting an update that will hopefully make the ARPG classic work better across different screen sizes and resolutions (like the Steam Deck). Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 59. `EN` [GStreamer 1.28.1 Adds Whisper-Based Speech-To-Text, AV1 Stateful V4L2 Decoder Support](data/articles/52dc01d76557d38f8fc55327213d6bcb.html)
**Source:** Phoronix
Building off January's GStreamer 1.28 release with many new features, GStreamer 1.28.1 was released today as a point release bringing various fixes and minor additions to this open-source multimedia framework...

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 60. `EN` [New York sues Valve over "illegally promoting gambling" for loot boxes](data/articles/709321e9a65e1b86db4455785619ce95.html)
**Source:** GamingOnLinux
New York Attorney General Letitia James announced a lawsuit against Valve (Steam) for what they say is illegally promoting gambling. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="LWN.net">

### 61. `EN` [[$] LWN.net Weekly Edition for February 26, 2026](data/articles/281c3d24e054d6ff1748615d9b459b2b.html)
**Source:** LWN.net
Inside this week's LWN.net Weekly Edition: Front: New flags for clone3(); Discord replacements; virtual swap spaces; BPF memory protection keys; PostgreSQL's lessons in attracting contributors; 7.0 merge window; Network Time Security. Briefs: OpenSUSE governance; Firefox 148.0; GNU Awk 5.4.0; GNU Octave 11.1.0; Rust in Ladybird; LibreOffice Online; Weston 15.0; RIP Robert Kaye; Quotes; ... Announcements: Newsletters, conferences, security updates, patches, and more.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 62. `EN` [Linux 6.18 LTS / 6.12 LTS / 6.6 LTS Support Periods Extended](data/articles/0a695f1341be713c5a6c719bfdc5de20.html)
**Source:** Phoronix
Greg Kroah-Hartman today extended the planned maintenance periods of the latest Linux 6.18, Linux 6.12, and Linux 6.6 Long Term Support (LTS) kernel series...

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Phoronix">

### 63. `EN` [Sub-Scheduler Support Could Be One Of The Most Exciting Features To Come For Linux 7.1](data/articles/ffd2abb2db73139f2326796499952620.html)
**Source:** Phoronix
While there are many great Linux 7.0 features with that still-young development cycle, looking ahead to Linux 7.1 this summer there's an interesting feature on track: cgroup sub-scheduler support for sched_ext...

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 64. `EN` [Brotato gets a DRM-free release on GOG](data/articles/cebc06585ab9dd7bf1be10dd2c5f70ef.html)
**Source:** GamingOnLinux
GOG fans can finally get in on the Brotato action, just keep in mind - it might suck away endless hours of your time if you're not careful. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="LWN.net">

### 65. `EN` [MetaBrainz mourns the loss of Robert Kaye](data/articles/e133be7c5767fb0180ad1064d0c9901e.html)
**Source:** LWN.net
The MetaBrainz Foundation has announced the unexpected passing of
its founder and executive director, Robert Kaye:
Robert's vision and leadership shaped MetaBrainz and left a lasting
mark on the music industry and open source movement. His contributions
were significant and his loss is deeply felt across our global
community.
The Board is actively overseeing a smooth leadership transition and
has measures in place to ensure that MetaBrainz continues to operate
without interruption. Further updates will be shared in due
course.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 66. `EN` [KDE Plasma 6.6.1 rolls out with lots of fixes for KWin](data/articles/ff69df9e23edfcdb8da63dcea866170e.html)
**Source:** GamingOnLinux
The KDE team have released the latest release for the Plasma desktop, with version 6.6.1 bringing quite a lot of bug fixing. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 67. `EN` [The Boomer Shooter Blueprint bundle is an epic deal with Selaco, CULTIC and more](data/articles/e64675301ac8611df7c195f6d84a196f.html)
**Source:** GamingOnLinux
Digiphile, the indie bundle site started by former Humble Bundle staffers, has an excellent Boomer Shooter Blueprint bundle out that's worth grabbing. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 68. `EN` [Happy four years to the Steam Deck - still the top PC gaming handheld](data/articles/29c9b87cfaa200470664ac07417d6993.html)
**Source:** GamingOnLinux
Four years ago today, the original Steam Deck LCD released, with it going on to change how everyone sees handheld gaming PCs and Linux for gaming. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="LWN.net">

### 69. `EN` [Restarting LibreOffice Online](data/articles/57183c264e62b42bae48bb6bd17215fe.html)
**Source:** LWN.net
LibreOffice online is a web-based version of the LibreOffice suite that can
be hosted on anybody's infrastructure. This project was put into stasis back in 2022, a move marked by
some tension with Collabora, a major LibreOffice developer that has its own online offering. Now,
the Document Foundation has announced
a new effort to breathe life into this project. We plan to reopen the repository for LibreOffice Online at The Document Foundation for contributions, but provide warnings about the state of the repository until TDF's team agrees that it's safe and usable – while at the same time encourage the community to join in with code, technologies and other contributions that can be used to move forward. Meanwhile, this
post from Michael Meeks suggests that the tension around online
versions of LibreOffice has not abated.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 70. `EN` [Discord delay global rollout of age verification to improve transparency and add more options](data/articles/6d4486cdcdc89c988ca75a54d54c8b59.html)
**Source:** GamingOnLinux
In the ongoing crazy saga of the internet getting gated behind new age verification laws, Discord are putting on the brakes temporarily. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 71. `EN` [FINAL FANTASY VII arrives on GOG with a new edition live on Steam too](data/articles/659206ee1a46269ef9352a59211d0a0c.html)
**Source:** GamingOnLinux
Square Enix today released their slightly upgraded version of FINAL FANTASY VII, along with making it available on GOG too. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 72. `EN` [Fanatical's Play on the Go Elite Collection Bundle for Feb 2026 has some gems in it](data/articles/632df9ce5bdefdc1bd3289935fab287e.html)
**Source:** GamingOnLinux
Want some more games to fill up your handheld with like the Steam Deck or Legion Go? Check out the new Fanatical Play on the Go Elite Collection. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 73. `EN` [Death Stranding 2 PC specs have been revealed, along with a "Portable" preset for handhelds](data/articles/06ca1109008c70b27e7583ca2e3884ca.html)
**Source:** GamingOnLinux
We now have the official PC specifications released for Death Stranding 2 and they actually seem pretty reasonable, so plenty of people should be fine. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 74. `EN` [Use your train to smash bandits into a cliff in the updated Fogpiercer demo](data/articles/8a0125c2e26201dc850f60693fe837d2.html)
**Source:** GamingOnLinux
Your train is your deck in Fogpiercer, with an updated demo available in Steam Next Fest this is a turn-based strategy game worth your time. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 75. `EN` [Firefox 148.0 arrives with AI controls](data/articles/a567b837906a775595919b8ccbccf9c4.html)
**Source:** GamingOnLinux
As Mozilla promised they would, Firefox version 148.0 has been released and with it you now get to control what generative AI features are enabled or disabled. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 76. `EN` [Inspired by the classic DOOM RPG, the Dungeons of DUSK demo is out now](data/articles/4c7239403d42ba540f072bbba54761a6.html)
**Source:** GamingOnLinux
Taking the retro FPS Dusk and turning it into a retro dungeon crawler with a big sprawling skill tree - Dungeons of DUSK has a demo out now. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="Its FOSS">

### 77. `EN` [Australia's Cyber Agency Releases Azul, an Open Source Malware Analysis Repository](data/articles/936b033619715aec517874051fd47002.html)
**Source:** Its FOSS
Think of it as a searchable, automated knowledge base for malware.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 78. `EN` [Battling castles on wheels? Wanderburg might be my new favourite thing](data/articles/f1604be559e32588265a42eb811a8e52.html)
**Source:** GamingOnLinux
Wanderburg is nuts. A roguelike where you build up a castle on wheels (or legs) and battle through various locations and it instantly hooked me. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 79. `EN` [Vampire Crawlers from the Vampire Survivor dev is promising but not quite there yet](data/articles/0fa313c8a456a3f5f2ff58e5567d4c4b.html)
**Source:** GamingOnLinux
Vampire Crawlers: The Turbo Wildcard from Vampire Survivors has a demo out now for Steam Next Fest, and I've given it a run through to see the chaos. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="fr" data-category="linux" data-source="Journal du Hacker">

### 80. `FR` [IA et Cybersécurité : une catastrophe à venir](data/articles/bbc16298361f02a6665bac220fee51f5.html)
**Source:** Journal du Hacker
Notre prochain webinar En janvier 2026, Linus Torvalds annonçait son side project AudioNoise. Un petit projet sans ambition qui a beaucoup fait parler de lui parce que le créateur de Linux assumait complètement l’avoir “Vibe Codé”.Cette adhésion, surprenante pour certains, ne vient pas sans astérisque : Le créateur de Linux a répété à plusieurs reprises que pour le code qui compte vraiment, pour les services critiques, rien ne remplace un développeur expert, et les IA ne sont pas (pour le moment) à la hauteur.Il n’empêche que l’AI générative est entrée dans les processus de production logicielle, c’est un fait et il n’y aura (probablement?) pas de retour en arrière.Les LLMs rédigent du code… beaucoup de code.Cette adhésion généralisée est due à bien des facteurs, mais la raison la plus souvent affichée (ou assumée) est l’impératif de productivité.Les LLMs auraient un effet multiplicateur sur le travail des développeurs.Dans cet article, nous vous proposons un panorama de la menace que pose les LLMs sur les services IT, en particulier ceux des entreprises françaises.L’objectif est d’évaluer le coût réel de cette productivité sous l’angle de la sûreté des systèmes informatiques.Vibe Coding et augmentation de la dette techniqueLa dette technique augmente lorsque, pour des raisons de délais et/ou de coû

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 81. `EN` [Steam Next Fest - February 2026 is live with tons of demos](data/articles/3b8e95c25a78ec4c9e7fabc2d016b3fb.html)
**Source:** GamingOnLinux
Here we go again, a mad dash to play as many demos as possible with the Steam Next Fest - February 2026 event now live. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 82. `EN` [Kerbal Space Program spiritual successor Kitten Space Agency now has a Linux version](data/articles/6391dc4913538e049c7dc7b38138a36d.html)
**Source:** GamingOnLinux
Kitten Space Agency is a promising upcoming space simulation game that's pretty much a spiritual successor to Kerbal Space Program and now for Linux too. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 83. `EN` [Mesa 25.3.6 released as the last bug fix for this driver series](data/articles/f4da011471cb4d8a57e30746bade661a.html)
**Source:** GamingOnLinux
Mesa 25.3.6 has released and is the last planned bug fix for this driver series, with the developers now moving on to focus on Mesa 26 and beyond. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 84. `EN` [Wine 11.3 released with vkd3d and Mono upgrades](data/articles/965ff74ea8fa8689bd8d87e7920688cb.html)
**Source:** GamingOnLinux
Wine 11.3 is here bringing more compatibility fixes for running Windows apps and games on Linux systems. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="OMG! Ubuntu">

### 85. `EN` [Ubuntu 26.04 LTS will default to OpenJDK 25](data/articles/23850efac2f52c009ae086ffacd0de2a.html)
**Source:** OMG! Ubuntu
Ubuntu 26.04 LTS ‘Resolute Raccoon’ will use OpenJDK 25 as its default Java version. An expected change as OpenJDK 25 is a long-term support release, as Ubuntu 26.04 is, the bump brings various feature and performance improvements to developers over OpenJDK 21, the default version used in Ubuntu 24.04 LTS through 25.10. On Ubuntu, Java isn’t installed out of the box, but when you install default-jdk or default-jre (directly or indirectly as a dependency needed by other software) those meta-packages point to whichever OpenJDK version Canonical has blessed as current. In Ubuntu 26.04 LTS, that will be OpenJDK 25. Version 25 of OpenJDK, the […]
You're reading Ubuntu 26.04 LTS will default to OpenJDK 25, a blog post from OMG! Ubuntu. Do not reproduce elsewhere without permission.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="OMG! Ubuntu">

### 86. `EN` [Ghostty terminal is finally adding scrollbar support](data/articles/b883e12957f2af96ea4ce18a2ab5dec5.html)
**Source:** OMG! Ubuntu
Ghostty's most-thumbed feature request is finally being answered. Yup, scrollbar support is finally coming in Ghostty 1.3 for Linux and macOS.
You're reading Ghostty terminal is finally adding scrollbar support, a blog post from OMG! Ubuntu. Do not reproduce elsewhere without permission.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="OMG! Ubuntu">

### 87. `EN` [Rudra is a new keyboard-driven launcher for GNOME Shell](data/articles/e54ed15cd80081c359e8845ce79adfcc.html)
**Source:** OMG! Ubuntu
The world isn’t short on keyboard-based Linux launchers. Albert, Ulauncher, rofi and GNOME Do (if you’re old enough to remember that one) are among those I’ve written about in the past. Rudra is a new spin on this old staple – albeit without the extensibility dedicated quick launchers provide. What’s different here is that it’s implemented as a GNOME Shell extension, not a standalone app. The developer of Rudra, Nark Agni, describes it as a “lightning-fast, keyboard-centric launcher […] designed for power users”. Though inspired by Mac apps like Alfred and Raycast, it is far less capable than those. To […]
You're reading Rudra is a new keyboard-driven launcher for GNOME Shell, a blog post from OMG! Ubuntu. Do not reproduce elsewhere without permission.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 88. `EN` [Turn recipes into huge cooking production lines in the new Snacktorio demo](data/articles/ceb5900c9829f241094a6d403457e84b.html)
**Source:** GamingOnLinux
Snacktorio is a factory-cooking automation game from the developer of APICO and Mudborne, and looks to be another great indie game to try out. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 89. `EN` [The Wolf Among Us, The Last Express and more join the GOG Preservation Program](data/articles/bcaa55d5b339b0e27ce3fb486d6b8f0c.html)
**Source:** GamingOnLinux
The GOG Preservation Program expands again to include more classic games that will be kept alive with patches from the GOG team like The Wolf Among Us. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 90. `EN` [MOUSE: P.I. For Hire looks awesome in the new boss trailer](data/articles/4bad56577d063e59f0ec971338f5d607.html)
**Source:** GamingOnLinux
MOUSE: P.I. For Hire is arriving on March 19th and ahead of release a new trailer shows off one of the boss fights, and it really does look awesome. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 91. `EN` [Lexispell is a Balatro-styled roguelike word game with a demo worth trying](data/articles/61720c29872dff8333f21927bbdb1726.html)
**Source:** GamingOnLinux
Lexispell from MrEliptik is a roguelike that has you spell out words for points with some Balatro-styled mechanics, and the new demo is worth a go. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 92. `EN` [Moomintroll: Winter's Warmth arrives April 27, will run "great" on Steam Deck](data/articles/44d1b5f3ff4c4b1e828ce0961f83f2e4.html)
**Source:** GamingOnLinux
Moomintroll: Winter's Warmth is set to arrive on April 27th from the creators of Snufkin: Melody of Moominvalley, giving us another lovely adventure. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 93. `EN` [It's now easier to install MGSHDFix for Metal Gear games on Linux / Steam Deck](data/articles/f340e4eeb7b6e6211230909bffb8f2f8.html)
**Source:** GamingOnLinux
The ace Luxtorpeda project has expanded, and now it makes it real easy to install the popular MGSHDFix pack for various Metal Gear games on Linux / Steam Deck. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 94. `EN` [Slay the Spire 2 arrives March 5 with 4-player co-op](data/articles/da99197c7425b6478ddc94dc107d7b2d.html)
**Source:** GamingOnLinux
Mega Crit just revealed that Slay the Spire 2 is set to arrive in Early Access on March 5, and we're getting 4-player co-op with the launch. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 95. `EN` [Steam Deck now out of stock in the EU in addition to USA, Canada and Japan](data/articles/7040e485c2f15c730242d7083ca27a62.html)
**Source:** GamingOnLinux
Unfortunately the stock availability of the Steam Deck has only worsened recently, with the EU now appearing to be completely out of stock. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="OMG! Ubuntu">

### 96. `EN` [BleachBit 5.1.0 Beta adds cookie manager and expert mode](data/articles/c5225622d4b1146be1dd2c3f51d3fa2a.html)
**Source:** OMG! Ubuntu
BleachBit 5.1.0 beta is out with a new cookie manager, expert mode to prevent accidental data loss, new browser support, and fixes for Linux users.
You're reading BleachBit 5.1.0 Beta adds cookie manager and expert mode, a blog post from OMG! Ubuntu. Do not reproduce elsewhere without permission.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="GamingOnLinux">

### 97. `EN` [Opus Magnum from Zachtronics is getting a big new 'De Re Metallica' DLC](data/articles/e29216821f98af96fc5c68ba8bcc3eb7.html)
**Source:** GamingOnLinux
Easily my favourite game from Zachtronics, Opus Magnum is making a return with a big new DLC that's set to arrive on March 17th. Read the full article on GamingOnLinux.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="OMG! Ubuntu">

### 98. `EN` [Ubuntu 26.04 splits firmware package to reduce update sizes](data/articles/8959a5abaa831ce8c6e6c38984147e7d.html)
**Source:** OMG! Ubuntu
Ubuntu 26.04 LTS will split its 600MB linux-firmware package into 17 vendor-specific packages to reduce bandwidth and download sizes of firmware updates.
You're reading Ubuntu 26.04 splits firmware package to reduce update sizes, a blog post from OMG! Ubuntu. Do not reproduce elsewhere without permission.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="OMG! Ubuntu">

### 99. `EN` [Linux Mint is adding post-install home encryption option](data/articles/92c11e1e94bf223679d5d2e5bf4be63c.html)
**Source:** OMG! Ubuntu
Linux Mint 23 will expand its System Administration tool (mintsysadm) with a new Users section, enabling post-install home encryption and more.
You're reading Linux Mint is adding post-install home encryption option, a blog post from OMG! Ubuntu. Do not reproduce elsewhere without permission.

</div>

<div class="article-item" data-lang="en" data-category="linux" data-source="OMG! Ubuntu">

### 100. `EN` [Linux Mint may make fewer releases a year to ‘uncap ambition’](data/articles/2568d5d75df9766403d023360938e3f7.html)
**Source:** OMG! Ubuntu
Linux Mint developers are considering ending the distro’s six‑month release cycle, a change that could mean fewer updates and a slower release pace.
You're reading Linux Mint may make fewer releases a year to ‘uncap ambition’, a blog post from OMG! Ubuntu. Do not reproduce elsewhere without permission.

</div>

</section>

---

<section id="tech" data-category="tech">

## General Tech / Tech Générale

<div class="article-item" data-lang="fr" data-category="tech" data-source="Frandroid">

### 1. `FR` [La batterie solide révolutionnaire qui intéresse Stellantis et Mercedes s’approche de la production avec cette bonne nouvelle](data/articles/4a18dd538923b8587198612840da973f.html)
**Source:** Frandroid
Entreprise liée à Mercedes-Benz ou Stellantis, Factorial vient d'annoncer une collaboration avec Philenergy visant à accélérer l'industrialisation de ses prometteuses batteries solides pour voitures électriques.

</div>

<div class="article-item" data-lang="en" data-category="tech" data-source="The Verge">

### 2. `EN` [Trump orders federal agencies to drop Anthropic’s AI](data/articles/7d2915c39ff77f04238cfeb5b6d0107a.html)
**Source:** The Verge
On Friday afternoon, Donald Trump posted on Truth Social, accusing Anthropic, the AI company behind Claude, of attempting to "STRONG-ARM" the Pentagon and directing federal agencies to "IMMEDIATELY CEASE" use of its products. At issue is Anthropic CEO Dario Amodei's refusal of an updated agreement with the US military agreeing to "any lawful use" of Anthropic's technology, as Defense Secretary Pete Hegseth mandated in a January memo, to the frustration of many tech workers across the industry.
As we explained earlier this week, that agreement would give the US military access to use the company's services for mass domestic surveillance and …
Read the full story at The Verge.

</div>

</section>

---

<section id="entrepreneurship" data-category="entrepreneurship">

## Entrepreneurship / Entrepreneuriat

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="Maddyness">

### 1. `FR` [Défense : l’Armée française va tester les solutions d’IA d’Orasio](data/articles/38ffa9483cbe98240cb74e10b66d21c4.html)
**Source:** Maddyness
Nouveau client et pas des moindres pour Orasio. En effet, la startup française, spécialisée dans l’intelligence artificielle appliquée à la vidéo, annonce la livraison de ses solutions d’analyse d’image à l’Agence ministérielle pour l’intelligence artificielle de défense (Amiad), entité du ministère des Armées et des Anciens combattants. Cette dernière a été créée en mai 2024 sous l’impulsion de Sébastien Lecornu, alors ministre de la Défense, pour accélérer le déploiement de l'IA au sein du ministère et s’en servir de levier pour gagner les guerres de demain.
Si l’Amiad développe ses propres innovations autour de l’IA pour équiper les différents corps de l’Armée française, elle fait appel aussi à des startups de la défense comme Mistral AI, avec qui un accord-cadre a été signé en janvier, ou encore Orasio. Pour cette startup tricolore lancée l’an passé, c’est une belle reconnaissance pour son expertise et un levier pour passer la vitesse supérieure dans son développement. «Dans un domaine aussi stratégique que l’analyse d’image par intelligence artificielle, il est essentiel que les armées françaises puissent s’appuyer sur des solutions souveraines, dont le code, les modèles et l’architecture sont pleinement maîtrisés en Europe. Contribuer à ces capacités critiques engage pour Orasio une responsabilité industrielle majeure : la performance technologique doit aller de pair a

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="Inc.com">

### 2. `EN` [When It Comes to Employee Retention, Principles Beat Perks Every Time](data/articles/e0d076b94cbd6efbe6b4913af7c55841.html)
**Source:** Inc.com
Employee stickiness is built through intentional leadership, cultural consistency, and business fluency, not flashy benefits.

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="Maddyness">

### 3. `FR` [« Qui veut être mon associé ? » : Nereïs Ocean et son aile sous-marine embarque la quasi-totalité des investisseurs](data/articles/74b22c8f1260a955e06d88e3219e4902.html)
**Source:** Maddyness
« Chaque année, 3,8 millions de personnes mettent leur tête sous l’eau en France. Et ils sont plus de 30 millions dans le monde. Nous, on veut leur permettre de voler, en étant immergé. » Alors que Paul François et son associée Emilia Perdigon se baladaient près d’un lac de montagne, connu pour son village englouti, l’idée de voler dans ses ruelles a émergé. Pour pouvoir les explorer, les deux inventeurs ont imaginé un « deep foil » : une aile sous-marine, qui permet d’accompagner le mouvement naturel du nageur et de glisser sous l’eau. En juin 2025, les deux entrepreneurs ont créé Nereïs Ocean et lancé la commercialisation de leur innovation. « En seulement quatre jours, on avait dépassé nos capacités de production en impression 3D », souligne Paul François. Quatre investisseurs convaincus Avant de passer en phase d’industrialisation, Nereïs Ocean a lancé des précommandes sur son site. « On a rapidement enregistré près de 300 commandes et nous sommes actuellement en train de nouer un partenariat avec Décathlon en Bretagne », souligne Emilia Perdigon. Désormais, Nereïs Ocean a donc besoin de se structurer et d’industrialiser sa production. Sur le plateau de « Qui veut être mon associé ? », spécial inventeurs, diffusé ce jeudi 26 février, les deux entrepreneurs demandaient ainsi 40 000 euros pour 8 % de leurs parts. Une proposition qui a largement emballé les investisseurs

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="TechCrunch Startups">

### 4. `EN` [3 days left: Save up to $680 on your TechCrunch Disrupt 2026 ticket](data/articles/36252e17402a481fe712858070b19d32.html)
**Source:** TechCrunch Startups
Just 3 days left to save up to $680 on your TechCrunch Disrupt 2026 ticket. Offer ends on Friday, February 27 at 11:59 p.m. PT. Don't miss unparalleled, curated networking and valuable insights from 250+ tech leaders, and discover 300+ breakout innovations. Register now.

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="Journal du Net">

### 5. `FR` [Étudiants, indépendants, seniors : la France sous-estime ses entrepreneurs invisibles](data/articles/3ec590cc637bfb749e38bb3cc373ab92.html)
**Source:** Journal du Net
Contrairement à l'image souvent véhiculée par les médias, l'entrepreneuriat n'est pas un écosystème en vase clos réservé aux diplômés des grandes écoles ou aux fondateurs de start-up innovantes.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="Inc.com">

### 6. `EN` [United Airlines Employees Had a Chance to ‘Make a Little Kid’s Day.’ Their Heartwarming Reaction Was a Stroke of Genius](data/articles/a867f20ce688f68335e8ce879cfa404f.html)
**Source:** Inc.com
I’m drawn to stories like this. But there’s a business reason they resonate so strongly.

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 7. `FR` [OpenAI lève 110 milliards, un mégatour en économie fermée, et sans Microsoft](data/articles/4d5e99aa110f7a283f7d835bb3d23935.html)
**Source:** FrenchWeb
OpenAI vient de conclure un tour de financement pouvant atteindre 110 milliards de dollars, pour une valorisation de 730 milliards. L’opération dépasse les standards du capital-risque et s’apparente davantage à une structuration industrielle préalable à une introduction en Bourse envisagée dès la fin de l’année. Un élément retient toutefois notre attention, Microsoft, partenaire historique et …

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="TechCrunch Startups">

### 8. `EN` [India disrupts access to popular developer platform Supabase with blocking order](data/articles/6f78a209966dcd86218329aec761fd29.html)
**Source:** TechCrunch Startups
India, one of Supabase’s biggest markets, is seeing patchy access after a government block order.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="Inc.com">

### 9. `EN` [Scott Galloway on How Small Businesses and Consumers Can Take the ‘Most Radical Act in a Capitalist Society’](data/articles/62ef9d3f75e106f20ea6f4ebf11e62a7.html)
**Source:** Inc.com
The NYU professor is currently orchestrating a ‘resist and unsubscribe’ boycott of tech platforms and ICE-aligned corporations. Small businesses should pay attention.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="TechCrunch Startups">

### 10. `EN` [Last 24 hours to get TechCrunch Disrupt 2026 tickets at the lowest rates of the year](data/articles/3ef65f0628db7a8ce04704e5c8b48c6c.html)
**Source:** TechCrunch Startups
The lowest rates of the year for TechCrunch Disrupt 2026 end after today. Prices go up at 11:59 p.m. PT. Don't miss connecting with 10,000 founders, investors, and operators, and key takeaways from 250+ industry leaders. Register now to save up to $680, or up to 30% on group passes.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="TechCrunch Startups">

### 11. `EN` [After Zomato, Deepinder Goyal returns with a $54M brain-monitoring bet](data/articles/f0954aabcdf1b2595bd7c586a38a1dbb.html)
**Source:** TechCrunch Startups
Zomato co-founder Deepinder Goyal's new wearable startup Temple has raised $54 million in a friends-and-family round at a post-money valuation of about $190 million.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="Inc.com">

### 12. `EN` [Two strategic priorities but limited resources?](data/articles/3617187c42dd1a28486b29e6ecf2ec40.html)
**Source:** Inc.com
Advice from 26 entrepreneurs on how to move forward.

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="Journal du Net">

### 13. `FR` [Pour les startups et les ETI, l'IA agentique ne doit pas être un produit mais le moteur de leur performance](data/articles/e0ab506f4c7bf317579bc0b9cebe4a63.html)
**Source:** Journal du Net
L'écosystème des startups européennes continue d'afficher une dynamique positive et résiliente.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="TechCrunch Startups">

### 14. `EN` [Ultrahuman bets on redesigned smart ring to win back US market after Oura dispute](data/articles/69e4e48d953423735f6062aad9635680.html)
**Source:** TechCrunch Startups
Ultrahuman’s Ring Pro promises 15-day battery life and a $479 price tag as the wearables maker expands its health-tech push.

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="Maddyness">

### 15. `FR` [Les startups françaises ont levé 82 millions d'euros cette semaine](data/articles/4bf7dd52c77878c9b55b503f44ac35dd.html)
**Source:** Maddyness
27 février 2026 27 février 2026 Temps de lecture : 1 minute 1 min Cette semaine dans le MaddyMoney, 8 startups françaises ont levé 82,2 millions d'euros avec un ticket moyen avoisinant les 10 millions d'euros. Un score en baisse par rapport à la semaine précédente pendant laquelle 8 opérations ont permis d'engranger 82,2 millions d'euros. Une seule startup ayant recours à l'IA est parvenue à lever 1 million d'euros. Temps de lecture : 1 minute Réservé aux abonnés Montant 82,2M€ Nombre d’opérations 8 L'IA en France récolte 1 M€
Cette semaine, une seule startup ayant recours à l'IA est parvenue à lever exactement 1 million d'euros : OOrion a bouclé un amorçage de 1 million d'euro

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="Inc.com">

### 16. `EN` [The 3 Traits That Separate High-Impact Masterminds From the Rest](data/articles/b70b65295720bdfa4f27516cc50d04d3.html)
**Source:** Inc.com
Elite entrepreneurs crave emotional safety, vulnerability, and expert‑led frameworks that help them stay grounded while they scale.

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="Maddyness">

### 17. `FR` [In&amp;motion, la startup qui protégeait les skieurs aux JO de Milan-Cortina, tape dans l’œil de Decathlon](data/articles/7706f9906fe3fe2ffbe7154469d2416f.html)
**Source:** Maddyness
Début d’année tout schuss pour In&amp;motion ! Et pour cause, la startup tricolore, originaire d’Annecy, a brillé sur les pistes de ski aux JO de Milan-Cortina. En effet, sa technologie d'airbags intelligents se nichait sous le maillot d’une bonne partie des skieurs olympiques pour leur assurer une protection optimale. Protection souhaitée aussi par les cavaliers et les motards, notamment les pilotes de MotoGP et du Dakar, les autres cibles de la société.
Après cette belle é mondiale en Italie, In&amp;motion vient de conclure un partenariat avec Decathlon. Cette alliance avec le distributeur sportif, qui a lancé en 2024 une branche (Decathlon Pulse) pour investir dans les startups du sport et du bien-être, vise à concevoir ensemble des airbags électroniques à destination des sportifs à un prix abordable. Dans ce cadre, deux produits sont lancés pour inaugurer cette collaboration : un airbag d’équitation et un autre pour la mobilité urbaine, notamment pour les utilisateurs de vélos ou de trottinettes électriques.
1 000 analyses par seconde pour détecter une chute
Avec Decathlon, la société tricolore, lancée en 2014, franchit ainsi un nouveau cap après avoir déjà séduit Honda l’an passé. «Depuis 10 ans, nos algorithmes sont entraînés et affinés grâce aux données de roulage et heures de pratique des utilisateurs, dont celles de sportifs de très haut niveau en MotoGP ou en ski.

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="Maddyness">

### 18. `FR` [« Qui veut être mon associé ? » Comment Beezen a bluffé les investisseurs avec son attrape frelons asiatiques](data/articles/39be0fd2da202aa7cdad2df6889d9c27.html)
**Source:** Maddyness
Près de 18 000 personnes se rendent chaque année aux urgences après une piqûre de frelons ou de guêpes en France, selon l’agence nationale de sécurité sanitaire de l'alimentation, de l'environnement et du travail (Anses). Il y a quelques années, Manuel Augusto, fondateur de Beezen, a découvert un nid de frelons sous le toit de sa maison. Mais impossible pour lui d’utiliser des insecticides ou des produits chimiques pour s’en débarrasser, notamment pour protéger les abeilles, qui sont aussi la proie de cet insecte.
« J’ai imaginé une perche télescopique pour détruire les nids de frelons », raconte l’inventeur de Beezen. Une innovation brevetée et récompensée au concours Lépine. « C’est un système d’aspiration avec des éléments tranchants au milieu du manche pour découper les frelons. Et à l’autre extrémité, un bocal sert de réservoir. » Épaulé par un duo d'investisseuses
Lancé sur le marché en 2024, le produit s’est vendu à quelques centaines d’exemplaires pour un chiffre d’affaires de 40 000 euros. Alors, sur le plateau de « Qui veut être mon associé ? », diffusé ce jeudi 26 février, Manuel Augusto est venu chercher un accompagnement afin de passer à l’échelle. L’entrepreneur, qui demandait 50 000 euros pour 10 % de son capital, a convaincu Ariane Daguin et Alice Lhabouz grâce à son innovation.
Toutes deux ont proposé d’investir 50 000 euros pour 25 % du capital de Beezen e

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="Journal du Net">

### 19. `FR` [CES 2026 : comment les objets connectés transforment le bien-vieillir](data/articles/be121767a76aaa9596bb27b92d6aa9c5.html)
**Source:** Journal du Net
Le CES 2026 confirme la banalisation technologique du bien-vieillir : les innovations seniors ne sont plus des produits dédiés, mais des fonctionnalités intégrées aux objets connectés grand public.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="TechCrunch Startups">

### 20. `EN` [Self-driving truck startup Einride raises $113M PIPE ahead of public debut](data/articles/de4ad667b73117ac806d02008c1be0f7.html)
**Source:** TechCrunch Startups
The proceeds will support Einride’s technology roadmap, global expansion, and autonomous deployments in North America, Europe, and the Middle East.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="TechCrunch Startups">

### 21. `EN` [Exhibit in Boston’s startup ecosystem at TechCrunch Founder Summit 2026](data/articles/c70da20cc4413e7b5f068bf355a9f4df.html)
**Source:** TechCrunch Startups
On June 9, over 1,000 founders, investors, and decision-makers will gather for TechCrunch Founder Summit 2026. This isn’t just foot traffic. It’s a full day of concentrated deal flow.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="TechCrunch Startups">

### 22. `EN` [Jest, a marketplace for messaging games, is challenging the app store status quo](data/articles/de7d447ac9ff6bd41f3bafad4a3fb15a.html)
**Source:** TechCrunch Startups
Jest, a marketplace for messaging games, emerged from stealth with $7 million in seed funding.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="TechCrunch Startups">

### 23. `EN` [Trace raises $3M to solve the AI agent adoption problem in enterprise](data/articles/5c258a1096eef3d7a6a2a1740a727c5e.html)
**Source:** TechCrunch Startups
Trace is launching with $3 million in seed funding, including investment from Y Combinator, Zeno Ventures, Transpose Platform Management, Goodwater Capital, Formosa Capital, and WeFunder.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="TechCrunch Startups">

### 24. `EN` [How to avoid bad hires in early-stage startups](data/articles/573ffd1e3f80d132cd3b4fd681290c4e.html)
**Source:** TechCrunch Startups
Lucena got the idea for Mappa after trying to build a marketing team but continually feeling like she had made the wrong hires.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="TechCrunch Startups">

### 25. `EN` [Gushwork bets on AI search for customer leads — and early results are emerging](data/articles/25839858c0f4516be91bf61b8b8e92db.html)
**Source:** TechCrunch Startups
Gushwork has raised $9 million in a seed round led by SIG and Lightspeed. The startup has seen early customer traction from AI search tools like ChatGPT.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="TechCrunch Startups">

### 26. `EN` [Have hard-won scaling lessons to share? Take the stage at TechCrunch Founder Summit 2026](data/articles/abd62e12e7ada4b50a69dfb956010606.html)
**Source:** TechCrunch Startups
Apply to speak at TechCrunch Founder Summit 2026 by April 17 for a chance to lead a roundtable or breakout session for 1,000 founders and investors. If you’ve built, backed, or operated inside high-growth startups, your experience could shape how the next wave of founders scales.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="TechCrunch Startups">

### 27. `EN` [Y Combinator grad and AI insurance brokerage Harper raises $47M](data/articles/3bff19cd045d4c3bcb855eeb4db7b102.html)
**Source:** TechCrunch Startups
Harper is an AI-native insurance brokerage that just raised a $45 million combined Series A and seed, after being a member of YC's Winter 2025 cohort.

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="Journal du Net">

### 28. `FR` [Innovation en santé : financer l'avenir dans un contexte de raréfaction des aides publiques](data/articles/1c4b143d94fe8b8538d7d90270aa92c5.html)
**Source:** Journal du Net
Le financement public de l'innovation en santé n'a jamais été un mécanisme de confort. Mais il possédait une qualité devenue rare : la lisibilité. Ce cadre est aujourd'hui en train de se refermer.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="TechCrunch Startups">

### 29. `EN` [More startups are hitting $10M ARR in 3 months than ever before](data/articles/43c8cdb361dccb5eb7a09231f9064344.html)
**Source:** TechCrunch Startups
AI has brought the startup world the rise of companies that instantly hit multimillion-dollar ARR. Stripe revealed some data that shows how common this has become.

</div>

<div class="article-item" data-lang="en" data-category="entrepreneurship" data-source="TechCrunch Startups">

### 30. `EN` [Ukraine’s startups keep building](data/articles/e55e833d76ee808147a4defb52424b37.html)
**Source:** TechCrunch Startups
In the four years since Russia’s full-scale invasion of their country, Ukrainian startups have done more than survive: they are still building and growing.

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 31. `FR` [Israël : six acteurs émergents de la defense tech](data/articles/9dd7a9c7ed4ba654bef4c92bec435662.html)
**Source:** FrenchWeb
Israël s’impose comme un terrain d’expérimentation avancé pour les technologies militaires de nouvelle génération. Dans un écosystème où les passerelles entre recherche académique, unités technologiques d’élite et capital-risque sont structurelles, les cycles d’innovation sont courts et la mise en production rapide. La singularité israélienne ne tient pas uniquement à la densité de ses ingénieurs ou …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 32. `FR` [Financer le logiciel industriel : le pari d’OSS VENTURES](data/articles/e426f50de11a10d86382df0ac2dfa889.html)
**Source:** FrenchWeb
Alors que l’industrie représente 25 % du PIB seules 1 % des startups dans le secteur trouve un financement. Pour combler ce paradoxe, OSS VENTURES a construit un modèle à contre-courant. Le fonds annonce avoir déjà recueilli 44 millions d’euros pour son nouveau véhicule et vise les 75 millions, pour en parler nous recevons son …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 33. `FR` [De l’électronique de puissance à l’OS industriel : la trajectoire de GYS ?](data/articles/641a0f67a5b4033f66c694e475ed99c5.html)
**Source:** FrenchWeb
L’industrie se reconfigure sous l’effet conjugué de l’électronique de puissance, du logiciel et de l’interconnexion des systèmes. Ses produits deviennent des architectures complexes, ses usines des environnements numériques, et ses cycles d’innovation des trajectoires longues. Invité de Perspective, Bruno Bouygues, dirigeant de GYS, entreprise basée à Laval et présente dans cent trente pays, décrit cette …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 34. `FR` [CIC Start Innovation Awards 2026 : le Sud-Ouest donne le coup d’envoi de sa 7ᵉ édition](data/articles/5b8bbc67bb4fcb9b5955c4b670add1b0.html)
**Source:** FrenchWeb
Le CIC Sud Ouest ouvre officiellement les candidatures de la 7ᵉ édition des CIC Start Innovation Awards, rendez-vous désormais installé dans l’écosystème start-up et innovation du grand Sud-Ouest.L’événement se tiendra les 25 et 26 mars 2026 à Bordeaux, avec une finale régionale organisée au CAPC – musée d’art contemporain, le 26 mars. Pensé comme un …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 35. `FR` [Pourquoi lever auprès d’un gros fonds d’investissement n’est pas toujours un avantage pour un fondateur](data/articles/b0f8b20c40eb1b77f94cbf4699fe1e1d.html)
**Source:** FrenchWeb
Lever des fonds auprès d’un grand fonds de venture capital reste, pour beaucoup d’entrepreneurs, une forme de consécration. Montants élevés, marque reconnue, accès supposé à un réseau international, l’équation paraît évidente et pourtant, derrière cette évidence apparente se cache une réalité plus nuancée. Car un fonds très capitalisé n’est pas seulement un investisseur plus riche, …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 36. `FR` [Robotique humanoïde : la fin de la promesse, le début de l’industrialisation – Perspectives avec Nicolas Halftermeyer](data/articles/135b9840179d32bbe8fff7f694471d70.html)
**Source:** FrenchWeb
En 2010, au CES de Las Vegas, les drones grand public n’étaient encore qu’une intuition industrielle. Quinze ans plus tard, la robotique humanoïde traverse un moment comparable. Nicolas Halftermeyer, expert de long terme, passé par Parrot puis Aldebaran, nous partage dans ce nouveau numéro de Perspectives, son analyse d’un domaine où l’innovation atteint une vélocité …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 37. `FR` [TECHARENA 2026 : New Era, Next Mindset, ou le moment de vérité pour l’innovation européenne](data/articles/308bc3b16a2482b6fa56b3b14b0849c6.html)
**Source:** FrenchWeb
Pour son édition 2026, du 11 au 12 février à Stockholm, Techarena a choisi un intitulé explicite, New Era, Next Mindset. Derrière la formule, l’événement acte surtout un basculement d’un écosystème technologique entré dans une phase de normalisation contrainte, marquée par la fin de l’argent abondant, la montée des enjeux de souveraineté et la politisation …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 38. `FR` [SXSW Innovation Conference 2026 : une semaine pour lire les signaux faibles de la tech et de la culture](data/articles/393c927f80f7dadb8824f6ae76c0714a.html)
**Source:** FrenchWeb
Du 12 au 18 mars 2026, Austin (Texas) accueillera une nouvelle édition de la SXSW Innovation Conference, rendez-vous hybride où se croisent technologies émergentes, industries créatives et transformations sociétales. Un format unifié, pensé pour décloisonner les disciplines et multiplier les occasions d’apprentissage comme de rencontres, dans un contexte où l’innovation se joue de plus en …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 39. `FR` [Aux côtés de Mistral AI, Nscale ou Lovable, ELEVEN LABS incarne la nouvelle génération de startups AI-native européennes](data/articles/53e778ac2a54645de14143a3974ca174.html)
**Source:** FrenchWeb
Aux côtés de Mistral AI, Nscale, Lovable, n8n ou encore Legora, ElevenLabs illustre l’émergence d’une nouvelle génération de startups dites AI-native. Des entreprises qui ne se contentent pas d’intégrer de l’intelligence artificielle à un produit existant, mais qui construisent leur offre, leur interface et leur modèle économique directement à partir des capacités des modèles. Fondée …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 40. `FR` [UBEES sécurise huit millions d’euros pour industrialiser la pollinisation connectée](data/articles/dd6e4eb1c9d6fa215508bcd40a0a4650.html)
**Source:** FrenchWeb
UBEES inscrit la pollinisation au cœur de la performance agricole L’agtech a prospéré sur la promesse d’une agriculture augmentée par la technologie. Capteurs, automatisation et plateformes de données ont structuré un récit d’innovation souvent porté par l’offre plus que par la demande. Ce cycle touche aujourd’hui à sa fin, sous l’effet d’une rationalisation du …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 41. `FR` [CURE 51 : soigner le cancer en partant des survivants](data/articles/ebd521b815d560576dfdff7de9ec90aa.html)
**Source:** FrenchWeb
il y a deux manières de raconter l’innovation en santé, la première consiste à empiler des promesses avec une IA qui va tout voir, tout prédire, tout guérir, et la seconde, qui commence par un constat plus inconfortable, qui est que malgré des décennies d’efforts, certains cancers restent des impasses thérapeutiques, avec des lignes de …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 42. `FR` [Rebranding en stand-by, visuels bricolés… startups, attention à la dette graphique !](data/articles/89c32f8a3e5b9982eddd6553b543b881.html)
**Source:** FrenchWeb
La dette graphique est ce passif invisible qui s’installe discrètement dans les startups. Au départ, tout semble aller vite et bien : un logo bricolé, des visuels faits maison, un rebranding repoussé à plus tard. Mais avec le temps, cette accumulation de compromis finit par peser lourd. Comme la dette technique, la dette graphique fragilise …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 43. `FR` [Du clic à la conversion : CyberCité dévoile la 9ᵉ édition de More Traffic, More Business](data/articles/211e45d108d8d41027223fe45526297f.html)
**Source:** FrenchWeb
Dans un environnement digital où les parcours clients se complexifient et où les attentes des consommateurs évoluent rapidement, il ne suffit plus de générer des clics. La performance marketing repose désormais sur la capacité des marques à transformer ces interactions en conversions solides, tout en conservant la préférence du consommateur. C’est dans ce contexte que …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 44. `FR` [Michel PAULIN : la souveraineté numérique ne se décrète pas, elle se construit par la croissance, la commande et le capital](data/articles/d21e000d1d499258096a54e4b12cadaa.html)
**Source:** FrenchWeb
Ce lundi 26 janvier 2026, au Ministère de l’Économie et des Finances, se tenaient les premières Rencontres de la souveraineté numérique, un nouvel espace de débat pensé comme un point de convergence entre pouvoirs publics, grandes entreprises, institutions et acteurs du numérique. Organisé par le ministère délégué chargé de l’Intelligence artificielle et du Numérique, l’événement …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 45. `FR` [Avec ACTILITY, NETMORE tente de structurer un marché LoRaWAN longtemps fragmenté](data/articles/febdf8f0097249368cdc4be7db7b5da1.html)
**Source:** FrenchWeb
L’acquisition d’Actility par Netmore, annoncée ce jour, s’inscrit dans un mouvement que le marché de l’IoT massif anticipait sans jamais vraiment le voir se matérialiser. Après plus d’une décennie de diffusion technologique rapide mais désordonnée, l’écosystème LoRaWAN entre dans une phase de consolidation qui répond moins à un besoin d’innovation qu’à une exigence d’industrialisation. Le …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 46. `FR` [2026, le quantique à l’épreuve du réel avec Fanny Bouton et Olivier Ezratty](data/articles/d8bd04d2723b7ac1bb37603b0433b47a.html)
**Source:** FrenchWeb
FWMedia ouvre une nouvelle saison de son émission Le Club, que nous avons décidé de rebaptiser FW PERSPECTIVES. En collaboration avec CanalChat Grandialogue, il s’agit d’un format de conversation et d’analyse consacré aux trajectoires longues de l’innovation, de l’industrie et du pouvoir. L’objectif est de comprendre ce qui structure réellement les technologies, les marchés et …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 47. `FR` [NVIDIA GTC, cartographie d’un écosystème du compute en voie de consolidation](data/articles/7c03519189f735135628f7238f67f954.html)
**Source:** FrenchWeb
Présentée comme la première conférence mondiale dédiée à l’intelligence artificielle, la NVIDIA GTC occupe désormais une place singulière dans le calendrier technologique international. À San Jose comme en ligne, l’événement réunit développeurs, chercheurs, dirigeants et industriels autour d’un même objet, le calcul accéléré, devenu le socle matériel et économique de la nouvelle vague d’innovations en …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 48. `FR` [Cyber-Physical Systems : comprendre les systèmes où le numérique pilote le réel](data/articles/c899f958a4d35fdde5e5f25e23bc814b.html)
**Source:** FrenchWeb
Les Cyber-Physical Systems, plus connus sous l’acronyme CPS, s’imposent progressivement comme une catégorie technologique centrale pour comprendre l’évolution de l’industrie, des infrastructures critiques et, plus largement, de l’économie numérique avancée. Longtemps cantonnés aux cercles académiques et aux ingénieries de pointe, ils désignent aujourd’hui une réalité opérationnelle qui structure la robotique, l’énergie, la mobilité, la santé …

</div>

<div class="article-item" data-lang="fr" data-category="entrepreneurship" data-source="FrenchWeb">

### 49. `FR` [Le 28e régime européen : un nouveau cadre pour faire émerger des champions du numérique en Europe](data/articles/bbefb5a68a8a6c6fc0d1f3895964dd5b.html)
**Source:** FrenchWeb
En marge du Forum économique mondial de Davos, le 20 janvier 2026, la présidente de la Commission européenne, Ursula von der Leyen, a officialisé le projet EU-INC. Depuis plus d’une décennie, entrepreneurs, investisseurs et institutions pointent les limites d’un marché unique qui cesse de l’être dès qu’il s’agit de créer, financer ou développer une entreprise …

</div>

</section>

---

<section id="finance" data-category="finance">

## Stock Market, Finance & Crypto / Bourse, Finance & Crypto

<div class="article-item" data-lang="fr" data-category="finance" data-source="Cryptoast">

### 1. `FR` [Bitcoin : une sidechain concurrence Ethereum et Solana sur la marché des RWA](data/articles/46018285004f142b1455d7dc4bb9c467.html)
**Source:** Cryptoast
Alors que le prix des cryptomonnaies recule fortement, l'adoption des blockchain continue de progresser. Stablecoins et Real World Assets (RWA) se développent malgré le bear market. Dans ce contexte, une surprise émerge : Liquid Network, la sidechain de Bitcoin, s’impose discrètement parmi les réseaux les plus utilisés pour la tokenisation.

</div>

<div class="article-item" data-lang="fr" data-category="finance" data-source="Cryptoast">

### 2. `FR` [Quelles sont les dates à ne pas louper dans la crypto en mars 2026 ?](data/articles/8ff95a04557bbbd2aabc25442cffba99.html)
**Source:** Cryptoast
Le mois de mars s'annonce chargé pour les marchés financiers et l'écosystème des cryptomonnaies. Statistiques économiques, lancements de tokens et nouveaux lancements rythmeront les prochaines semaines. Voici les événements à surveiller dans la crypto et dans la finance pour ce mois de mars.

</div>

<div class="article-item" data-lang="fr" data-category="finance" data-source="Cryptoast">

### 3. `FR` [Jackpot : Il gagne 180 000 euros avec un pari à 60 euros grâce au minage de Bitcoin](data/articles/fde79cc6e9cc9941b5e92e0ed8098565.html)
**Source:** Cryptoast
Un utilisateur anonyme vient de décrocher la récompense d'un bloc de la blockchain Bitcoin en misant l'équivalent d'un ticket de loto. Que s'est-il passé ? Cette exploit peut-il être reproduit ?

</div>

<div class="article-item" data-lang="fr" data-category="finance" data-source="Cryptoast">

### 4. `FR` [Ils réalisent plus d'1 million de gains grâce à de l’insider trading sur leur propre délit d'initié](data/articles/2933589cdc4168c956c820c8ff1f58d2.html)
**Source:** Cryptoast
Une affaire de délit d’initié récemment révélée par l’enquêteur crypto ZachXBT pourrait-elle en cacher une autre encore plus vicieuse et lucrative ? Une activité suspecte sur la plateforme Polymarket semble le confirmer, avec un pari ouvert sur le résultat d’une enquête qui aurait permis d’empocher plus d’1 million de dollars à ceux qu’elle était censée viser.

</div>

<div class="article-item" data-lang="fr" data-category="finance" data-source="Cryptoast">

### 5. `FR` [Wall Street s'enfonce toujours plus profondément dans la DeFi](data/articles/6463713fa91824c64acb9aa8ad6b927f.html)
**Source:** Cryptoast
Les rapprochements opérés entre certains protocoles centraux de la DeFi et des acteurs de finance traditionnelle s’accélèrent en ce début d’année. Une activité d'investissement institutionnel on-chain qui implique surtout des acteurs de Wall Street, mais également la Société Générale et son stablecoin euro (EURCV).

</div>

<div class="article-item" data-lang="fr" data-category="finance" data-source="Cryptoast">

### 6. `FR` [Frappes des États-Unis sur l'Iran - Le Bitcoin chute sous les 64 000 dollars](data/articles/70d72166453443e159bbdc2bbcd64bd2.html)
**Source:** Cryptoast
Alors que le week-end débute à peine, Donald Trump annonce le déclenchement d'une opération militaire contre l'Iran, menée conjointement avec Israël. Un nouvel embrasement du Moyen-Orient qui ne fait pas les affaires du marché crypto, avec un Bitcoin qui plonge de presque 8 % et des liquidations déjà supérieures à 500 millions de dollars. On fait le point...

</div>

<div class="article-item" data-lang="fr" data-category="finance" data-source="Cryptoast">

### 7. `FR` [MARA : 1,7 milliard de dollars de pertes au dernier trimestre pour le mineur de Bitcoin](data/articles/86d5593db6c019febf7adbf340e3ffd7.html)
**Source:** Cryptoast
L'entreprise de mining MARA rapporte des pertes importantes au 4e trimestre 2025. La faute en grande partie à la chute du cours du Bitcoin (BTC).

</div>

<div class="article-item" data-lang="fr" data-category="finance" data-source="Cryptoast">

### 8. `FR` [Bitcoin ne sera pas la monnaie dominante du futur pour le cofondateur de Wikipedia](data/articles/545f01432bdea75fb44939b3ae3bc460.html)
**Source:** Cryptoast
Le sujet du Bitcoin continue de diviser, qu’il s’agisse de ses perspectives de prix à venir ou plus précisément de son statut monétaire. Deux sujets récemment abordés par le cofondateur de Wikipédia, et autant dire que son constat et ses prévisions ne sont pas optimistes…

</div>

<div class="article-item" data-lang="fr" data-category="finance" data-source="Cryptoast">

### 9. `FR` [Energie, santé, PEL... Qu'est-ce qui change pour votre argent au 1er mars ?](data/articles/2e9063cdb220b4e95d305d815630ee58.html)
**Source:** Cryptoast
Le passage au mois de mars voit l’arrivée de nouvelles mesures et échéances. Entre prix de l’énergie en hausse et augmentation des frais de santé, les Français pourraient de nouveau devoir mettre la main au portefeuille. Zoom sur ce qui va changer.

</div>

<div class="article-item" data-lang="fr" data-category="finance" data-source="Journal du Coin">

### 10. `FR` [Ethereum : ETHZilla abandonne l’ETH et se rebaptise Forum Markets](data/articles/50586ed76f8dc3c53ab5c282cc4abbcc.html)
**Source:** Journal du Coin
Forum Markets, anciennement connue sous le nom d’ETHZilla, a annoncé un changement de stratégie en abandonnant sa trésorerie en Ethereum.

</div>

<div class="article-item" data-lang="fr" data-category="finance" data-source="Cryptoast">

### 11. `FR` [Les évènements crypto et blockchain à ne pas louper en mars 2026](data/articles/11e21b7665149b91a70f032fd82c9a87.html)
**Source:** Cryptoast
Quels sont les meilleurs évènements crypto à ne pas louper en mars 2026 ? Pour ce nouveau mois, retrouvez notre sélection de rendez-vous, avec la 9e édition de l'Eth[CC] comme date principale.

</div>

<div class="article-item" data-lang="fr" data-category="finance" data-source="Cryptoast">

### 12. `FR` [Aave : le conflit de gouvernance s'intensifie, Marc Zeller publie un audit d'Aave Labs à la veille du vote](data/articles/c0c3547949c911e75e7e6385aced6319.html)
**Source:** Cryptoast
Depuis le 25 février, les détenteurs de tokens AAVE votent sur la plus grosse demande de financement de l'histoire du protocole. Mais la veille du lancement, le fondateur de l'Aave Chan Initiative, Marc Zeller, a publié un audit cinglant sur Aave Labs. Il accuse l'équipe d'avoir reçu 86 millions de dollars depuis 2017, sans jamais avoir rendu de comptes au DAO...

</div>

</section>

---

<section id="opensource" data-category="opensource">

## Open Source & GitHub

<div class="article-item" data-lang="fr" data-category="opensource" data-source="LinuxFr">

### 1. `FR` [Nouvelles de Haiku - Hiver 2025-26](data/articles/5513552cd42722ebbaddda91c1eba20d.html)
**Source:** LinuxFr
Haiku est un système d’exploitation pensé pour les ordinateurs de bureau. Il est basé sur BeOS mais propose aujourd’hui une implémentation modernisée, performante, et qui conserve les idées qui rendaient BeOS intéressant: une interface intuitive mais permettant une utilisation avancée, une API unifiée et cohérente, et une priorisation de l’interface graphique par rapport à la ligne de commande pour l’administration du système.
Il ne s’agit pas d’une distribution Linux, mais d’un système complet avec son propre noyau, sa propre pile graphique, etc. L’idée de cette approche est d’avoir une seule équipe travaillant sur toute la pile logicielle, pour éviter les soucis de coordination entre projets indépendant et d’excès de modularité, qui peuvent aboutir à une architecture logicielle inefficace. En revanche, cela demande un gros travail pour une équipe relativement réduite, et le système est donc en développement depuis bientôt un quart de siècle sans avoir encore publié une version majeure complète.
La cinquième version beta a été publiée en 2024. Les développements continuent pour stabiliser, optimiser et peaufiner le système, avec une version beta 6 prévue en début de cette année, qui sera probablement suivie par une beta 7 quelque temps plus tard.
Cette série de dépêches est basée sur les rapports d’activité publiés mensuellement par le projet Haiku. Cette édition couvre les modifications de Haiku numérotées entre hrev59111 et hrev59355 (soit 244 changements individuels), en plus d’activités se déroulant hors du dépôt Git principal.
Entre parenthèses est indiqué le pseudonyme de l’auteur ou autrice principal·e du changement. Des pseudonymes sont utilisés par habitude (venant des canaux IRC et/ou de la culture de la demoscene) et aussi pour préserver l’identité des personnes qui le souhaitent (certains participants utilisent également leur nom légal, d’autres pas). lien nᵒ 1 : Dépêche trimestrielle précédente
lien nᵒ 2 : Rapport d'acivité mensuel de novembre 2025
lien nᵒ 3 : Rapport d'activité mensuel de décembre 2025
lien nᵒ 4 : Rapport d'activité mensuel de Janvier 2026 Sommaire
Mise à jour de Go en version 1.18
Redémarrage automatique de app_server
Applications
ActivityMonitor
Terminal
HaikuDepot
WebPositive
Expander
AboutSystem
LaunchBox
Tracker
MediaPlayer
Sudoku
DeskBar
People
Lecteur MIDI
MidiPlayer
ProcessController
Installer
Mail
DriveSetup
Debugger
Changements transverses
Fenêtres de préférences
Réseau
Périphériques d’entrée
Apparence
Outils en ligne de commande
Kits
Interface
Storage
Device
Package
Serveurs
Notifications
Network
app_server
Pilotes de périphériques
Systèmes de fichiers
libroot &amp; noyau
Réseau
Gestion des processus
Bibliothèque C standard
Gestion de la mémoire
Entrées-sorties
Chargeur de démarrage
Systèmes de fichiers
Outils de debug
Build system
Documentation
Haiku book
Documentation interne
Autres nouvelles
Changement de tarification de Netlify
Remise sur les rails de HSA (Haiku Support Association)
Série d’articles « Gerrit code review iceberg »
Statistiques de contribution pour 2025
Mise à jour de haiku-format
À quand la beta 6?
Mise à jour de Go en version 1.18
Le mois de novembre a vu l’arrivée d’une grosse mise à jour de la chaîne d’outils pour le langage Go en version 1.18. Il s’agit d’une version de 2022, mais c’est un gros progrès puisque la version précédente disponible pour Haiku était la version 1.4 datant de 2014. De plus, cette version 1.18 est disponible dans le dépôt de paquets et peut être installée normalement avec pkgman (au moins pour les architectures x86 et x86_64).
La plus grande partie du travail a été réalisée par Korli, depuis plusieurs années, pour mettre en place l’environnement de compilation nécessaire, et aussi corriger de nombreux problèmes de compatibilité POSIX dans Haiku qui ont été mis en évidence par les tests de Go.
Cela permet par exemple d’utiliser Hugo, le générateur de site statique utilisé pour le site principal de Haiku. Waddlesplash a donc pu rédiger et vérifier le rapport d’activité de novembre en utilisant uniquement Haiku : avec Hugo, WebPositive (le navigateur natif de Haiku, basé sur WebKit), l’éditeur de texte Koder, ainsi que Iceweasel (un portage de Firefox) pour la correction d’orthographe.
Redémarrage automatique de app_server
app_server est le serveur graphique de Haiku. Il s’agit d’un composant critique, pour lequel un crash rend le système à peu près inutilisable. Waddlesplash a corrigé plusieurs problèmes dans le code pour permettre de redémarrer le serveur après un crash, et de le reconnecter avec les applications en cours d’exécution. Ce redémarrage nécessite encore quelques étapes manuelles car les crash démarrent actuellement le debugger automatiquement, mais cela peut être changé par une simple configuration.
Applications
ActivityMonitor
ActivityMonitor affiche sous forme graphique divers paramètres du système: charge CPU, consommation mémoire… Il peut s’exécuter dans une fenêtre ou bien être intégré au bureau sous forme d’un « réplicant ».
Affichage d’un message « pas de capteurs de température » à la place du graphe de température du système si l’information n’est pas disponible (OscarL).
Correction d’un problème de localisation, certains fichiers sources n’étaient pas pris en compte et les chaînes contenues dedans ne pouvaient pas être traduites (humdinger).
Terminal
Le Terminal permet d’exécuter des applications en ligne de commande.
Synchronisation du presse-papier interne du Terminal avec celui du système seulement une fois au démarrage de l’application, et pas lors du changement d’onglet comme cela avait été implémenté au trimestre précédent (OscarL).
Correction d’un problème qui masquait le signal SIGUSR1 pour les shells et autres processus lancés dans le terminal (korli).
Implémentation des séquences d’échappement permettant aux applications CLI de définir des liens hypertextes (en complément des liens qui étaient déjà détectés automatiquement par le terminal en fonction du contenu du texte) (korli).
HaikuDepot
HaikuDepot est l’interface graphique du gestionnaire de paquets. Il utilise un backend en ligne en Java pour stocker et récupérer les captures d’écrans, et notes d’utilisateurs, icônes des paquets, liste de paquets mis en avant, et d’autres informations.
L’application est plus robuste en cas de problème de réseau : gestion des erreurs et affichage de messages clairs pour l’utilisateur. Gestion en particulier des erreurs 503 remontées par l’API web utilisée par HaikuDepot (apl).
Ajout de filtres pour trouver facilement les applications « natives » (n’utilisant pas Qt ou GTK) et d’un filtre « desktop » pour trouver les applications graphiques (et filtrer un très grand nombre de paquets de bibliothèques, applications en ligne de commande…) (apl, avec des améliorations par humdinger pour clarifier la terminologie).
Amélioration de la taille de la fenêtre des conditions d’utilisation sur les écrans haute densité (nipos).
Refonte de la gestion des identifiants de messages internes à l’application HaikuDepot pour en simplifier la maintenance (apl).
Interdiction de la sélection multiple dans la liste des paquets (apl).
WebPositive
WebPositive est le navigateur web fourni avec Haiku. Il est basé sur le moteur WebKit, co-développé avec Apple, Sony, Igalia et d’autres participants.
Modification du message envoyé au Tracker pour ouvrir le dossier contenant un fichier (par exemple un téléchargement), pour utiliser le message officiellement prévu à cet effet plutôt qu’un moyen détourné (humdinger).
Meilleure gestion des noms de fichiers longs dans la fenêtre de téléchargements avec l’ajout d’une barre de défilement horizontal (mull, avec un petit correctif par humdinger pour corriger un décalage d’un pixel du positionnement de la barre de défilement).
Un chantier est en cours pour réintégrer à nouveau le portage de WebKit pour Haiku dans les sources upstream.

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source.com (Nouveautés)">

### 2. `EN` [Run a virtual conference using only open source tools](data/articles/68fb3a0f2849b4d31190f4b23bcf78a1.html)
**Source:** Open Source.com (Nouveautés)
Run a virtual conference using only open source tools
mairin
Thu, 04/27/2023 - 03:00 The Fedora Design Team discovered that using open source tools to run a virtual conference can be quite effective by hosting the first Creative Freedom Summit in January 2023.
In this article, I'll share some background on the conference, why using open source tools to run it was important to us, and the specific tools and configurations our team used to make it all work. I'll also talk about what worked well and what will need improvement at our next summit in 2024.
What is Creative Freedom Summit?
The Creative Freedom Summit was an idea Marie Nordin came up with after reviewing talk submissions for Flock, the annual Fedora users and contributors conference. She received many talk submissions for the August 2022 Flock relating to design and creativity in open source—far more than we could possibly accept. With so many great ideas for open source design-related talks out there, she wondered if there would be space for a separate open source creativity conference focused on creatives who use open source tools to produce their work.
Marie brought this idea to the Fedora Design Team in the fall of 2022, and we started planning the conference, which took place January 17-19, 2023. Since it was our first time running a new conference like this, we decided to start with invited speakers based on some of the Flock submissions and our own personal network of open source creatives. Almost every speaker we asked gave a talk, so we didn't have room to accept submissions. We will need to figure out this next year, so we don't have an open source CFP (Call for Papers) management tool for that to tell you about yet. Skip to bottom of list More Linux resources
Linux commands cheat sheet
Advanced Linux commands cheat sheet
Free online course: RHEL technical overview
Linux networking cheat sheet
SELinux cheat sheet
Linux common commands cheat sheet
What are Linux containers?
Register for your free Red Hat account
Our latest Linux articles Using open source for open source conferences
Since the initial COVID pandemic lockdowns, Fedora's Flock conference has been run virtually using Hopin, an online conference platform that isn't open source but is friendly to open source tools. Fedora started using it some years ago, and it definitely provides a professional conference feel, with a built-in booth/expo hall, tracks, hallway chat conversations, and moderation tools. Running the Creative Freedom Summit using Hopin was an option for us because, as a Fedora-sponsored event, we could access Fedora's Hopin setup. Again, Hopin is not open source.
Now, as a long-term (~20 years) open source contributor, I can tell you that this kind of decision is always tough. If your conference focuses on open source, using a proprietary platform to host your event feels a little strange. However, as the scale and complexity of our communities and events have grown, the ability to produce an integrated open source conference system has become more challenging.
There is no right or wrong answer. You have to weigh a lot of things when making this decision:
Budget
People power
Infrastructure
Technical capability
Complexity/formality/culture of the event
We didn't have any budget for this event. We did have a team of volunteers who could put some work hours into it. We had the Fedora Matrix Server as a piece of supported infrastructure we could bring into the mix and access to a hosted WordPress system for the website. Teammate Madeline Peck and I had the technical capability/experience of running the live, weekly Fedora Design Team video calls using PeerTube. We wanted the event to be low-key, single-track, and informal, so we had some tolerance for glitches or rough edges. We also all had a lot of passion for trying an open source stack.
Now you know a little about our considerations when making this decision, which might help when making decisions for your event.
An open source conference stack
Here is how the conference tech stack worked.
Overview
Live components
Livestream: We streamed the stage and the social events to a PeerTube channel. Conference attendees could watch the stream live from our PeerTube channel. PeerTube includes some privacy-minded analytics to track the number of livestream viewers and post-event views.
Live stage + social event room: We had one live stage for speakers and hosts using Jitsi, ensuring only those with permission could be on camera. We had an additional Jitsi meeting room for social events that allowed anyone who wanted to participate in the social event to go on camera.
Backstage: We had a "Backstage" Matrix channel to coordinate with speakers, hosts, and volunteers in one place while the event was going on.
Announcements and Q&amp;A: We managed Q&amp;A and the daily schedule for the conference via a shared Etherpad (which we later moved to Hackmd.io).
Integrated and centralized conference experience: Using Matrix's Element client, we embedded the livestream video and an Etherpad into a public Matrix room for the conference. We used attendance in the channel to monitor overall conference attendance. We had a live chat throughout the conference and took questions from audience members from the chat and the embedded Q&amp;A Etherpad.
Conference website: We had a beautifully-designed website created by Ryan Gorley hosted on WordPress, which had the basic information and links for how to join the conference, the dates/times, and the schedule.
Post-event components
Post-event survey: We used the open source LimeSurvey system to send out a post-event survey to see how things went for attendees. I use some of the data from that survey in this article.
Post-event video editing and captioning: We didn't have a live captioning system for the conference, but as I was able, I typed live notes from talks into the channel, which attendees greatly appreciated. Post-event, we used Kdenlive (one of the tools featured in talks at the event) to edit the videos and generate captions.
Event recordings: PeerTube automagically posts livestream recordings to channels, making nearly instant recordings available for attendees for talks they may have missed.
I'll cover some details next.
Livestream with PeerTube Image by: (Máirín Duffy, CC BY-SA 4.0)
We used the LinuxRocks PeerTube platform generously hosted by LinuxRocks.online for the Creative Freedom Summit's livestream. PeerTube is a free and open source decentralized video platform that is also part of the Fediverse.
One of the best features of PeerTube (that other platforms I am aware of don't have) is that after your livestream ends, you get a near-instant replay recording posted to your channel on PeerTube. Users in our chatroom cited this as a major advantage of the platform. If an attendee missed a session they were really interested in, they could watch it within minutes of that talk's end. It took no manual intervention, uploading, or coordination on the part of the volunteer organizing team to make this happen; PeerTube automated it for us.
Here is how livestreaming with PeerTube works: You create a new livestream on your channel, and it gives you a livestreaming URL + a key to authorize streaming to the URL. This URL + key can be reused over and over. We configured it so that the recording would be posted to the channel where we created the livestreaming URL as soon as a livestream ended. Next, copy/paste this into Jitsi when you start the livestream. This means that you don't have to generate a new URL + key for each talk during the conference—the overhead of managing that for organizers would have been pretty significant. Instead, we could reuse the same URL + key shared in a common document among conference organizers (we each had different shifts hosting talks). Anyone on the team with access to that document could start the livestream.

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source.com (Nouveautés)">

### 3. `EN` [3 key open source challenges in developing countries](data/articles/b6868c71345e0bca2b2445b72190d87a.html)
**Source:** Open Source.com (Nouveautés)
3 key open source challenges in developing countries
Ahmed Sobeh
Thu, 04/27/2023 - 03:00 When I go back home and talk to people in the tech industry, or any other industry for that matter, about what I do and the topics I'm involved in daily, I'm usually met with bemusement at the idea of an Open Source Programs Office (OSPO). The concept of a company contributing to an open source project without obvious immediate financial benefit can be culturally strange to understand or explain.
As someone born and raised in a country that has been trying to develop for quite some time, I understand and relate to that. There was a point in time when my only understanding of open source was that it was software that I could use without paying and without needing to wait for a specific issue or additional feature to be released. I could just do whatever I needed myself, locally.
Open source faces many struggles in developing countries that make how it's perceived and its associations inaccurate and out of touch. I will discuss these struggles in this article.
Open source challenges in developing countries
The challenges that open source faces in these regions can be divided into three main areas:
Society and culture
Resources and infrastructure
Governance
Society and culture
It's no secret that the culture of tech in general, and specifically the open source part of it, feeds off the culture of the society where it exists. That's why, in today's world, open source has a better chance of being sustained and maintained in the more developed parts of the world.
But imagine a perfect society, optimal for open source to grow, be sustained, and maintained. What does the culture of that society look like? What are its main characteristics?
Open and transparent
For open source to thrive, the society's culture must be as open and transparent as possible. Information must be freely and publicly accessible, which is a huge issue in many underdeveloped regions. Information is often red-taped and is unavailable to the average citizen, let alone someone who's trying to contribute to open source.
[ Related read Global communication in open source projects ]
Free
The word "free" has many different meanings and implications. There's freedom of speech, expression, choice, belief, religion, and many others. The aspect of freedom I'm most concerned with in this context is the ability to start new communities and organizations without a higher authority intervening. That's the essence of open source. Distributed modes of collaboration, in which large groups work together without a strong centralized authority directing them, are highly effective. This is another major challenge in most of these regions. New communities and organizations are often questioned, closely monitored, and unfortunately, in some cases, even prosecuted and eventually shut down for fear of the new ideas that may emerge or other reasons.
Dynamic
A dynamic culture is essential for the growth of open source. A culture that's ready to accept and implement new ideas is the perfect place for open source to grow. Being resistant to change and preferring to stick with traditional approaches can limit society's willingness to adopt new technologies and solutions, which is a major issue in most underdeveloped countries.
The greatest and most common reason behind resistance to change in these regions is the fear of the unknown. It would be unfair to discuss fear of the unknown as a "developing countries" problem. It's a common issue everywhere, even in the developed world. But some reasons behind this fear are specific to underdeveloped regions. The two main reasons are a lack of trust in the competence of the tech industry and a lack of accountability. Businesses and individuals do not trust the capabilities of the software solutions on offer, let alone open source solutions. There's an idea that open source software is unsafe and insecure. This concern is magnified when people do not trust the competence of the software developers. Second, people do not trust the system to hold anyone accountable for any possible mistakes or issues arising from using the software or in legal conflicts.
Resources, infrastructure, and economy
Economic challenges are the most obvious struggle for open source in developing countries, impacting open source developers and communities in these regions.
Access and funds
Open source developers struggle with issues of accessibility in developing countries. Whether it's access to the internet or equipment, it can be difficult to become a regular open source contributor when you struggle to reach resources daily. The digital divide in these regions is huge. There are still many areas without regular, stable, and high-speed internet connections. There's also a market gap between these regions and the rest of the world when it comes to equipment. There's always the challenge of not having enough funds to buy the latest, most powerful machines, but there's also an availability problem. The modern, powerful tech equipment needed to build and run the biggest open source projects isn't always available in these regions.
These concerns make self-education and learning challenging. It's difficult for an open source developer to pick an open source project, learn all about it on their own, and start contributing to it due to these access issues.
And how do you build an open source community under these circumstances? Projects would end up being maintained by the privileged few with access to stable high-speed internet connections and the latest equipment. The rest would be spotty, occasional contributions from others that can hardly be considered a community. And even those would disappear once the chance of paid work appears. I've personally seen it multiple times. Someone would start learning about an open source project to research a specific stack or improve their skills and begin contributing to it. But once the opportunity of paid work appeared, even as a second job, they dropped the open source project completely. It makes sense. Any individual must prioritize a means of survival for themselves and their family.
This lack of resources and dependence on a privileged few would also make it almost impossible to fund marketing campaigns, community-building events, and, last but not least, documentation localization attempts. Skip to bottom of list Our favorite resources about open source
Git cheat sheet
Advanced Linux commands cheat sheet

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source.com (Nouveautés)">

### 4. `EN` [What's new in GNOME 44?](data/articles/a77f53df7539ba53d53718bd496ae088.html)
**Source:** Open Source.com (Nouveautés)
What's new in GNOME 44?
Jim Hall
Tue, 04/25/2023 - 03:00 I use GNOME as my primary desktop environment on my Linux PC at home. GNOME gives me an easy-to-use graphical desktop that provides the flexibility I need yet doesn't get in my way when I focus on my work.
GNOME recently released GNOME 44 with a bunch of new features. I reached out to the GNOME team to ask about the latest version and what was in it. Here's what team members Caroline Henriksen (brand manager), Matthias Clasen (GNOME developer and release team member), and Allan Day (design team) had to share.
New GNOME features
Jim Hall: What are some of the new and updated features in GNOME 44 that you're most excited about?
GNOME Team: I am very excited to see how fresh and modern our user interfaces look. Not just in the core apps like Files (the file manager, Nautilus) but also in our Settings, which have seen a lot of work in the last cycle—many Settings panels have been improved. If you have a chance, you should try the new Mouse &amp; Touchpad panel and enjoy the animated illustrations.
There's a lot to like in GNOME 44. For example, I think that a lot of people are going to be really happy about the new grid view in the file chooser, as well as being able to easily connect devices from the new Bluetooth menu in the quick settings.
Jim: The release notes mention GNOME Circle and that a few new apps have been added. What is GNOME Circle?
Team: GNOME Circle is a collection of fantastic apps that use the GNOME platform. It's GNOME's way of promoting the best apps that use our technologies and supporting app developers.
To be included in GNOME Circle, an app has to meet a set of requirements. Once it does, the developers get things like extra publicity and GNOME Foundation membership. That, in turn, gives them access to additional infrastructure and travel sponsorship. More information and how to apply can be found on the GNOME Circle page.
We're thrilled with how successful GNOME Circle has been. It contains more than 50 apps now! I particularly like that not all of these apps revolve around computing. You can find apps like a health tracker, a metronome, or a chess clock.
Jim: GNOME is the standard desktop in several Linux distributions. Where can we expect to see GNOME 44?
Team: The upcoming Fedora 38 release will include GNOME 44 and should be out sometime in April, as will Ubuntu 23.04. And GNOME 44 builds have already landed in openSUSE's Tumbleweed and MicroOS, to name just a few of the major distros. Skip to bottom of list More Linux resources
Linux commands cheat sheet
Advanced Linux commands cheat sheet
Free online course: RHEL technical overview
Linux networking cheat sheet
SELinux cheat sheet
Linux common commands cheat sheet
What are Linux containers?
Register for your free Red Hat account
Our latest Linux articles The GNOME community
Jim: The release name for GNOME 44 is Kuala Lumpur. Where does this name come from?
Team: GNOME has two major yearly conferences, GUADEC in the middle of the year (the next conference will take place in Latvia in July 2023) and GNOME Asia towards the end of the year. We are very thankful to the local team in Malaysia who welcomed us for GNOME Asia 2022 in Kuala Lumpur.
Organizing these events takes a lot of effort and commitment from the GNOME staff and the local teams. As a small sign of our appreciation, GNOME releases are named after the location of the most recent conference. This naming scheme was introduced a number of years ago. GNOME 3.18, Gothenburg, was the first.
Jim: GNOME has a strong user community with active members. How does GNOME keep the community so engaged?
Team: GNOME has always been a community-driven project with a strong sense of collaboration and inclusivity. That's part of what makes being a GNOME contributor and user so rewarding. Being a member of the GNOME community means that you get to interact with people from all over the world to work on common goals and exchange ideas. It is an enriching and inspiring experience, and I think that is what helps keep our community excited and engaged.
One important aspect of fostering that engagement is meeting our community where they're at and making our events more accessible to people from all over the world. For example, our flagship conference, GUADEC, was hosted in Guadalajara, Mexico, last year. This was the first time GUADEC happened outside of Europe, and this helped make it easier for GNOME users and contributors in Latin America to attend.
We also make an effort to meet our community members not just online and at our own conferences but at other events such as Linux Application Summit, FOSDEM, or SCaLE. If you see a GNOME booth at any of these events, please stop by and say hi. You'll often find developers, designers, foundation staff, and board members all happy to chat and answer questions.
Get involved with GNOME
Jim: How can folks get started with writing their own apps for GNOME? If I wanted to learn how to write my first "hello world" app for GNOME, is there a tutorial I can follow?
Team: The Get started developing for GNOME site includes a collection of tutorials, including a guide on quickly creating your first app. With new technologies like Flatpak and GNOME Builder, it's amazing just how easy it is to create your own app nowadays. Fire up Builder, click "new project," fill in some details, and you'll have your own running GNOME app. It really is that easy.
Jim: What are some ways that people can contribute?
Team: If someone is interested in GNOME and is motivated to get involved, there are definitely things they can do to help. Participating in discussions on our Discourse instance or reporting issues is a great place to start if you're a beginner. There are also lots of non-technical jobs that need doing, like helping with our documentation, translating GNOME into different languages, or even helping organize our annual conferences. A lot of these activities have friendly teams working on them who will help you to get started.
Alternatively, if you have coding experience, you can browse our "newcomer" tickets for tasks that might interest you.
Another way to contribute is through donating to GNOME. As an open source project and a non-profit foundation, regular donations help us continue to build up GNOME, provide necessary infrastructure, and power new initiatives.
[ Get the guide to installing applications on Linux ]
The GNOME Linux desktop's latest release is now available. Find out about the new and improved Bluetooth, user interface, apps, and other features in GNOME 44. Image by: Gunnar Wortmann via Pixabay. Modified by Opensource.com. CC BY-SA 4.0.
Linux
What to read next
My first impression of GNOME Console on Linux
Linux desktops: KDE vs GNOME
24 Linux desktops you need to try This work is licensed under a Creative Commons Attribution-Share Alike 4.0 International License. are closed.
These are closed.

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Programmez">

### 5. `FR` [-20 % d'offres développeurs en 2025 selon une étude de l'APEC](data/articles/2a8260328e6b4655e23188f8ab514aa1.html)
**Source:** Programmez
"En 2025, plusieurs métiers de la fonction informatique se distinguent par un volume important d’offres d’emploi cadres, les hissant parmi les « poids lourds » du marché. C’est le cas notamment pour les postes de développeurs (12 690 offres) et de chef∙fe de projet informatique (5 270 offres). À eux seuls, ces deux métiers représentent 5 % de l’ensemble des offres cadres publiées sur apec.fr en 2025." explique l'étude l'Apec.
La majorité des offres vient d'ESN, ce qui n'est pas une réelle surprise. Par contre, l'étude point une baisse de 20 % des offres d'emploi cadre de développeurs pour 2025 par rapport à 2024. Par rapport à 2022, la baisse est très sévère : -60 % ! Les secteurs qui recurtent sont les entreprises avec une activité IT puis la R&amp;D. 21 % des offres conceraient des profils débutants et 29 % se concentraient sur l'île de France. L'étude met en avant les top 20 des compétences les plus recherchées :
&gt;Applications web et programmation orientée web
&gt; Frameworks : Angular JS, Spring
&gt; Logiciels de gestion de versions GIT
&gt; Langages de programmation : SQL, HTML, Python, C++
&gt; Plateforme de développement (Java EE, MicroEdition)
&gt; Spécifications techniques et fonctionnelles
&gt; Bibliothèque logicielle React JS
&gt; PHP Hypertext Processor
&gt; Docker
&gt; DevOps
&gt; Outil Open Source de gestion d'automatisme Jenkins
&gt; Technologie objet (C Sharp)
&gt; CSS
&gt; Méthodologies : Cycles en V, Agiles
&gt; Cloud Computing
&gt; Gestion de projet
&gt; Tests et recettes
&gt; Analyse des besoins
&gt; Systèmes d'exploitation (Linux, Unix, Windows)
&gt; Gestion des incidents – anomalies
Attention : cette étude porte uniquement les postes de cadre et non la globalité des offres d'emploi. Catégorie actualité: Carrière APEC Image actualité AMP:

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Programmez">

### 6. `FR` [Convertir les codes Java en Kotlin sur Visual Studio Code : merci JetBrains](data/articles/921a45bf751e1f50f14124f8e2f1e0bf.html)
**Source:** Programmez
JetBrains annonce une extension Visual Studio Code pour convertir les fichiers Java en Kotlin. L'extension a pour nom Java to Kotlin (J2K). Un simple menu contextuel permettra la conversion. Selon l'éditeur, J2K se veut très simple :
1 / On installe l'extension
2 / on ouvre un fichier Java dans son workspace
3 / on sélectionne Convert to Kotlin dans le menu
4 / bah, c'est tout !
Petite démo : J2K sur la marketplace : https://marketplace.visualstudio.com/items?itemName=JetBrains.j2k-vscode
Le projet est encore récent et l'extension est en plein développement. J2K s'appuie sur des LLM / agents pour faire le travail. Il faut que votre VS Code possède un LLM / agent valide : GitHub Chat ou Ollama / LM Studio ou une clé OpenAI/OpenRouter Catégorie actualité: Outils Kotlin, Visual Studio Code Image actualité AMP:

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="LinuxFr">

### 7. `FR` [Workshops on Demand version 1.0.2](data/articles/8f99d1509825d7ca5991fb8bb0288510.html)
**Source:** LinuxFr
Nous avons travaillé dur avec mon collègue Frédéric Passeron pour préparer l'atelier donné lors du récent AlpOSS 2026 (gros succès au passage !) consacré à notre outillage Workshops on Demand (ou WoD). Maintenant que nous en avons le temps, nous avons publié la version 1.0.2 utilisée pour cet atelier que nous considérons comme stable et prête à être utilisée par toute structure pour proposer une plateforme de transfert de connaissances basée sur les NoteBooks Jupyter. lien nᵒ 1 : Projet WoD
lien nᵒ 2 : Live démo
lien nᵒ 3 : Présentation Pour rappel (ou découverte pour ceux découvrant notre projet !) nous fournissons une plateforme de 3 machines (frontend, API-DB, backend) que vous pouvez installer automatiquement (VM ou physique) et qui fournissent un portail d'enregistrement fonctionnel pour permettre l'accès à 20 Notebooks sur diverses technologies FLOSS (Open Source et/ou Libres) qui sont gérés par un JupyterHub sur le backend, le tout orchestré par des APIs REST et SMTP/procmail APIs (description simplifiée, plus de détails via notre USER GUIDE).
En déployant cette pile, vos utilisateurs pourront s'auto-enregistrer pour suivre un Notebook choisi dans notre+votre catalogue de sujets, dérouler le Noteboook pour acquérir les connaissances qui y sont décrites, sans intervention de votre part, la plateforme gérant les inscriptions et effacements de demandeurs en autonomie (mais sans IA dedans, juste de la logique, du code des APIs et une Base de Données !). Et comme pour tout bon projet construisant sa communauté, nous vous encourageons à souscrire à notre mailing-list pour recevoir de l'aide, apporter des retours, être informés des nouveautés,… Simple comme envoyer ce mail ou cliquer sur ce lien.
Et nous espérons des contributions, en particulier des contenus complémentaires que vous voudriez promouvoir au travers de notre solution WoD.
Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="LinuxFr">

### 8. `FR` [Revue de presse de l’April pour la semaine 7 de l’année 2026](data/articles/ab8006f69bc19539d214a0408f343722.html)
**Source:** LinuxFr
Cette revue de presse sur Internet fait partie du travail de veille mené par l’April dans le cadre de son action de défense et de promotion du logiciel libre. Les positions exposées dans les articles sont celles de leurs auteurs et ne rejoignent pas forcément celles de l’April.
[Alliancy] La CAIH dévoile un plan stratégique et lance un programme open source pour réduire la dépendance numérique des hôpitaux
[LeMagIT] L’Anssi réaffirme son engagement en faveur du logiciel libre (€)
[Républik IT] Les candidats aux Municipales vont-ils adopter le Logiciel Libre?
[ZDNET] LibreOffice dénonce le format OOXML
[Les Numeriques] “Le vibe coding tue l'open-source”: quand l'IA dévore ce qui la nourrit, les économistes sonnent l'alerte lien nᵒ 1 : April
lien nᵒ 2 : Revue de presse de l'April
lien nᵒ 3 : Revue de presse de la semaine précédente
lien nᵒ 4 : Fils du Net [Alliancy] La CAIH dévoile un plan stratégique et lance un programme open source pour réduire la dépendance numérique des hôpitaux Tiago Gil, le jeudi 12 février 2026.
La centrale d’achat informatique hospitalière (CAIH) engage une nouvelle feuille de route sur cinq ans et initie le programme Alternative, destiné à bâtir un socle numérique souverain pour les systèmes d’information de santé.
[LeMagIT] L’Anssi réaffirme son engagement en faveur du logiciel libre (€) Valéry Rieß-Marchive, le mercredi 11 février 2026.
L’Agence nationale de la sécurité des systèmes d’information vient de réitérer son engagement en faveur du logiciel libre. Dans la continuité d’une politique établie et confortée de longue date.
Et aussi: [Le Monde Informatique] L'Anssi formalise sa doctrine open source
[Silicon] L’ANSSI affirme l’open source comme levier de sa politique industrielle
[Républik IT] Les candidats aux Municipales vont-ils adopter le Logiciel Libre? Bertrand Lemaire, le mercredi 11 février 2026.
L’APRIL relance son initiative «Pacte du Logiciel Libre» à l’occasion du prochain scrutin municipal.
Et aussi: [Goodtech] Municipales 2026 en France: l'April lance son pacte du logiciel libre
Voir aussi: L’April propose le pacte du logiciel libre à l’occasion des élections municipales et communautaires de 2026
[ZDNET] LibreOffice dénonce le format OOXML
Le mercredi 11 février 2026.
The Document Foundation (TDF) intensifie sa critique contre Microsoft, accusant le géant américain de privilégier ses intérêts commerciaux au détriment de l’interopérabilité.
[Les Numeriques] “Le vibe coding tue l'open-source”: quand l'IA dévore ce qui la nourrit, les économistes sonnent l'alerte Aymeric Geoffre-Rouland, le lundi 9 février 2026.
Quand un développeur demande à Claude ou ChatGPT d’écrire du code, l’IA pioche dans des milliers de bibliothèques libres sans que l’humain ne lise jamais leur documentation. Résultat: les mainteneurs de ces projets open-source, qui vivent de la visibilité générée par les visites et les interactions, voient leur audience s’effondrer. Une étude économique chiffre ce paradoxe: l’IA qui accélère le développement logiciel asphyxie l’écosystème qui le rend possible.
Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source.com (Nouveautés)">

### 9. `EN` [How I used guilt as a motivator for good](data/articles/7997da92a8d30a5790ed3965ef122df8.html)
**Source:** Open Source.com (Nouveautés)
How I used guilt as a motivator for good
its-surya
Fri, 04/28/2023 - 03:00 Recently, I was asked by a friend and colleague if I were interested in speaking together at a conference. I was pleasantly surprised because I hadn't contributed much to the project they were presenting, but I expressed interest. We met to discuss the presentation, and that's when I learned the real reason I was asked to participate: The conference's diversity, equity, and inclusion (DEI) initiatives required there to be at least one speaker that does not identify as a man. I was offended; it felt like I was approached only because of my gender, not based on merit.
My friend assured me that wasn't the only reason I'd been asked. They needed new contributors to the project because there was a lot of work to be done, and they were hoping I could help fill that gap.
[ Want to create your own event? Read the 10-step guide for a successful hackathon ]
I gave it some thought and tried to understand why the DEI initiatives were in place. I also thought about the other side of the coin, where the people who wanted to present couldn't, unless they found someone from a minority group to present alongside them.
As I thought about the bigger picture and the benefits this opportunity would bring to me, I decided to forego my ego being hurt. Once I let go of feeling offended, I realized that I was also feeling very uncomfortable presenting something that I hadn't contributed directly to. My ethics didn't agree with that. How could I possibly step onto a stage and act as the face of something I hadn't worked on?
Resolving to help more
I did some research on the project. The technology was not totally alien to me, and I had a good grasp of the fundamentals it was trying to achieve. In fact, its overall goal made me feel excited to contribute. If done well, it would be super useful to users.
I made a resolution that I would go ahead with this speaking opportunity only if I got the opportunity to give back to the community tenfold and become a key contributor. My friend was more than willing to help me on that journey.
With that resolve, we submitted our talk. My co-presenters were supportive and made me feel welcome. They said that as long as I was interested and had a passion for the project, nothing else mattered.
[ Also read How I returned to open source after facing grief ]
Participating in the conference was a huge opportunity, and it had such a positive impact on me. I met a lot of experienced people across the open source community and I felt inspired! I learned a lot of new things from the people and the various panels, sessions, and discussions at the conference. Our presentation went well, and I consider giving a talk at such a big conference quite an achievement.
However, once the conference was over the guilt started kicking in. Skip to bottom of list More open source career advice
Open source cheat sheets
Linux starter kit for developers
7 questions sysadmins should ask a potential employer before taking a job
Resources for IT architects
Cheat sheet: IT job interviews
Register for your free Red Hat account Guilt as a motivator
I felt like I owed the community and the people who had given me this chance. I wanted to focus on the promise I'd made, but it was hard with other higher-priority things getting in the way. Whenever I deviated from my plan, the guilt kept me on track. It reminded me that I had to give back to the community that had given me such a good opportunity. After a few months of struggling and juggling, I can proudly say that I didn't give up. Today, I'm an active contributor to that project.
I love the challenges it presents, and I enjoy solving some of the key issues in the project's area. I also have been able to take the lead in implementing this upstream project in our downstream ecosystem. As icing on the cake, I was again invited to present with the team and give the community updates for the project. This time, it was not because of a DEI initiative, as the ratio was already balanced.
Feeling guilt isn't so bad after all!
I'm glad that I took the opportunity, and I'm glad it turned out to be a win-win situation for everyone involved. If I hadn't been approached about being a co-presenter, I probably would have never gotten involved in this project, and that would have been such a miss! I'm grateful to the people who gave me this chance and supported me.
I'm probably not the only woman who has faced this. I want to tell all the women out there if such an opportunity presents itself, there's no need to feel guilt, or that you "owe" anyone or any kind of pressure. If you feel such pressure, turn that emotion into a weapon and do good with it! I encourage you to take the opportunity if it will benefit you and make the most out of it. Later on, if you can do the same for another person and uplift them, that’s how you can really pay back to the community. After all, this is what open source community is all about. It's as much about the people as is about the technology being built!
[ Ready to level up your communication skills? Get advice from IT leaders. Download 10 resources to make you a better communicator. ]
Guilt is usually considered a negative emotion, but by steering it well, you can achieve surprising success. Image by: Pixabay. CC0 1.0
Careers
Diversity and inclusion
What to read next
Create a more diverse and equitable open source project with open standards
13 tips for getting your talk accepted at a tech conference This work is licensed under a Creative Commons Attribution-Share Alike 4.0 International License. are closed.
These are closed.

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source.com (Nouveautés)">

### 10. `EN` [3 reasons to host a docathon for your open source project](data/articles/9523e962d9813eab277cbb977d5542c4.html)
**Source:** Open Source.com (Nouveautés)
3 reasons to host a docathon for your open source project
lmalivert
Fri, 04/28/2023 - 03:00 Your open source project's documentation is essential to your customers. Your target audience must understand the purpose of your project and how to use it, and documentation is what bridges that gap. A project is rarely ever truly done, so it's equally important for resources to be maintained and updated with your project's continuous improvement.
But what happens when you have lots of documentation to maintain but lack the resources to keep it current? The answer is pretty simple: Host a docathon!
What is a docathon?
A docathon is like a hackathon. A hackathon is an event where engineers and community leaders gather to improve or add new features to an existing application. In a docathon, the same kind of collaboration focuses on improving documentation.
[ Learn about writing Docs as Code. ]
A docathon can fill gaps within content, restructure large documentation sets, fix broken links, or just correct typos. The intent behind hosting a docathon is to improve a large amount of documentation in a relatively brief timeframe.
Some examples of product documentation include:
Training manuals
User manuals
Installation guides
Troubleshooting guides
Quickstart guides
API documentation
Tutorials
At my organization, our documentation team hosted a docathon and successfully revamped a 102-page installation guide. The docathon enabled us to focus on the project's scope, which was reorganizing for simplicity, removing duplicate content, and following the customer journey. Hosting a docathon left a lasting impression on my team and improved customer success.
[ Read Write documentation that actually works for your community ]
3 things you can achieve with a docathon
Here are my top three reasons to host a docathon:
1. No more backlog
Most documentation must evolve along with the product it supports. As the product changes or updates, so must the documentation. In some cases, documentation teams release new versions of their documentation alongside the engineering team's release cycle. As priorities within a team change and GA releases continue, documentation teams face the challenge of keeping up with new features, bug fixes, and tasks to complete. The changes that get left behind become part of a backlog—an accumulation of work that needs to be completed at a later time.
Docathon tip: During a docathon, participants can triage backlog items and complete them as they progress through the list. Non-technical participants can work on fixes related to typos, broken links, and other text-related issues. Skip to bottom of list Our favorite resources about open source
Git cheat sheet
Advanced Linux commands cheat sheet

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source.com (Nouveautés)">

### 11. `EN` [Test your Drupal website with Cypress](data/articles/879f9557723bbbb318745d2642146196.html)
**Source:** Open Source.com (Nouveautés)
Test your Drupal website with Cypress
cobadger
Wed, 04/26/2023 - 03:00 If you don't include tests in your Drupal development, chances are it's because you think it adds complexity and expense without benefit. Cypress is an open source tool with many benefits:
Reliably tests anything that runs in a web browser
Works on any web platform (it's great for testing projects using front-end technologies like React)
Highly extensible
Increasingly popular
Easy to learn and implement
Protects against regression as your projects become more complex
Can make your development process more efficient
This article covers three topics to help you start testing your Drupal project using Cypress:
Installing Cypress
Writing and running basic tests using Cypress
Customizing Cypress for Drupal
Install Cypress
For the purposes of this tutorial I'm assuming that you have built a local dev environment for your Drupal project using the `drupal/ -project` project. Although details on creating such a project are outside of the scope of this piece, I recommend Getting Started with Lando and Drupal 9.
Your project has at least this basic structure:
vendor/
web/
.editorconfig
.gitattributes
composer.json
composer.lock
The cypress.io site has complete installation instructions for various environments. For this article, I installed Cypress using npm.
Initialize your project using the command npm init. Answer the questions that Node.js asks you, and then you will have a package.json file that looks something like this:
{ "name": "cypress", "version": "1.0.0", "description": "Installs Cypress in a test project.", "main": "index.js", "scripts": { "test": "echo \"Error: no test specified\" &amp;&amp; exit 1" }, "author": "", "license": "ISC"
}
Install Cypress in your project:
$ npm install cypress --save-dev
Run Cypress for the first time:
$ npx cypress open
Because you haven't added a config or any scaffolding files to Cypress, the Cypress app displays the welcome screen to help you configure the project. To configure your project for E2E (end-to-end) testing, click the Not Configured button for E2E Testing. Cypress adds some files to your project:
cypress/
node_modules/
vendor/ web/
.editorconfig
.gitattributes
composer.json
composer.lock
cypress.config.js
package-lock.json
package.json
Click Continue and choose your preferred browser for testing. Click Start E2E Testing in [your browser of choice]. I'm using a Chromium-based browser for this article.
In a separate window, a browser opens to the Create your first spec page: Image by: (Jordan Graham, CC BY-SA 4.0)
Click on the Scaffold example specs button to create a couple of new folders with example specs to help you understand how to use Cypress. Read through these in your code editor, and you'll likely find the language (based on JavaScript) intuitive and easy to follow.
Click on any in the test browser. This reveals two panels. On the left, a text panel shows each step in the active spec. On the right, a simulated browser window shows the actual user experience as Cypress steps through the spec.
Open the cypress.config.js file in your project root and change it as follows:
const { defineConfig } = require("cypress"); module.exports = defineConfig({ component: { fixturesFolder: "cypress/fixtures", integrationFolder: "cypress/integration", pluginsFile: "cypress/plugins/index.js", screenshotsFolder: "cypress/screenshots", supportFile: "cypress/support/e2e.js", videosFolder: "cypress/videos", viewportWidth: 1440, viewportHeight: 900, }, e2e: { setupNodeEvents(on, config) { // implement node event listeners here }, baseUrl: "https://[your-local-dev-url]", specPattern: "cypress/**/*.{js,jsx,ts,tsx}", supportFile: "cypress/support/e2e.js", fixturesFolder: "cypress/fixtures" }, });
Change the baseUrl to your project's URL in your local dev environment.
These changes tell Cypress where to find its resources and how to find all of the specs in your project.
Write and run basic tests using Cypress
Create a new directory called integration in your /cypress directory. Within the integration directory, create a file called test.cy.js:
cypress/
├─ e2e/
├─ fixtures/
├─ integration/ │ ├─ test.cy.js
├─ support/ node_modules/
vendor/
web/
.editorconfig
.gitattributes
composer.json
composer.lock
cypress.config.js
package-lock.json
package.json
Add the following contents to your test.cy.js file:
describe('Loads the front page', () =&gt; { it('Loads the front page', () =&gt; { cy.visit('/') cy.get('h1.page-title') .should('exist') });
}); describe('Tests logging in using an incorrect password', () =&gt; { it('Fails authentication using incorrect login credentials', () =&gt; { cy.visit('/user/login') cy.get('#edit-name') .type('Sir Lancelot of Camelot') cy.get('#edit-pass') .type('tacos') cy.get('input#edit-submit') .contains('Log in') .click() cy.contains('Unrecognized username or password.') });
}); Skip to bottom of list Our favorite resources about open source
Git cheat sheet
Advanced Linux commands cheat sheet

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="LinuxFr">

### 12. `FR` [Trivabble a 10 ans](data/articles/9e375a4fe6812616f3bf913e633c7d4b.html)
**Source:** LinuxFr
Il y a 10 ans, je présentais Trivabble ici sur LinuxFR. Le dernier article ici remontant à 2021, c’est l’occasion de présenter les nouveaux développements. Et je dois remercier les contributeurs et contributrices externes, parce que c’est surtout de leur fait s’il y a des nouvelles choses à présenter. lien nᵒ 1 : Le site web de Trivabble Présentation rapide
Pour les gens qui ne connaissent pas, il s’agit d’un jeu en réseau qui propose un plateau, des chevalets et des pièces, inspiré du Scrabble mais configurable et adaptable pour que chacun puisse inventer ses propres manières de jouer. Un des principes derrière Trivabble est de ne pas forcer une manière de jouer ou des règles particulières, et si vous voulez jouer en mode rapide où tout le monde joue n’importe quand le plus vite possible pour former des mots qui n’existent pas et sans commencer au milieu, le jeu ne vous en empêchera pas.
Améliorations
Ysabeau a dessiné un sac. Ça avait été annoncé dans le journal précédent. C’est évidemment intégré, depuis le temps.
Laurent Mazet a pas mal bossé. On peut maintenant :
jouer avec des plateaux de différentes tailles
vérifier si le premier mot posé est bien au centre
être averti quand on quitte une partie, pour éviter les fausses manipulations
bloquer les pièces sur le plateau, pour ne plus pouvoir revenir sur les coups précédents
Côté maintenance du code, il a également regroupé des feuilles styles CSS qui étaient séparées parce qu’elles venaient de projets différents, mais je ne maintiens plus ces projets et la seule conséquence de cette séparation dans Trivabble, c’est de la complexité inutile.
Arnaudv6 a partagé quelques idées d’amélioration pour l’interface, qui a été un peu retravaillée pour plus de cohérence, de simplicité et de discrétion :
le nombre de tuiles restantes est maintenant sur le sac1 les boutons et les boites de sélections ont maintenant une apparence plus unifiée, et ont été déplacés et regroupés pour gagner de la place et de la cohérence
changer son nom se fait avec un bouton « crayon » plus discret. D’ailleurs, des correctifs permettent que changer de nom ne cause plus des bugs dans le comptage des mots et la vérification orthographique
Autres améliorations diverses :
Le jeu se redimensionne automatiquement pour prendre la taille de la fenêtre. Cela fonctionne dans les navigateurs modernes (sauf WebKit / Safari à cause d’un bug dans la gestion des coordonnées) en s’appuyant sur la propriété CSS zoom nouvellement standard et un peu de javascript. Pour les navigateurs ne prenant pas en charge ce zoom, le redimensionnement n’est plus bloqué et il est maintenant possible de zoomer avec les doigts. Le zoom automatique est également désactivé .
Les messages de chat persistent. Jusqu’à maintenant, recharger la page ou revenir sur une partie plus tard perdait les messages. Ce qui fait qu’un plantage perdait la discussion, et il était impossible d’utiliser le chat intégré au jeu dans le cadre d’un jeu asynchrone.
Il y a maintenant un mode sombre. Il s’applique automatiquement en fonction des réglages du navigateur, mais on peut aussi forcer le thème sombre ou le thème clair.
Enfin, Philippe Lhardy a intégré Trivabble à Yunohost, ce qui permet d'installer facilement Trivabble sur une instance Yunohost.
Conclusion
Je partage une petite pensée pour ma grand-mère, qui a été la motivation pour lancer le projet il y a 10 ans, et qui nous a depuis quitté.
Trivabble est stable et évolue lentement. Le jeu est dans un état utilisable et l’instance qui fait fonctionner trivabble.org se fait oublier. Ce n’est pas un projet très actif, il n’y a d’ailleurs pas eu de développement entre 2021 et 2025. Il n’y a pas de dépendance externe à part Node.js et le système d’exploitation dessous, c’est du Javascript très simple, donc la maintenance est triviale.
Le projet n’est pas abandonné pour autant. Ce sont les contributeurs et contributrices qui réveillent le projet et me motivent pour m’y remettre de temps à autre. Je trouve ça agréable de me replonger dans ce code, mais il n’y a pas tellement besoin de le faire, ça fonctionne tel quel, donc c’est plutôt rare, mais n’hésitez pas à rejoindre l’aventure :-)
C’est toujours utilisé, probablement pas énormément, en fait je n’en sais rien. J’ai reçu un mail assez rapidement la seule fois où j’ai cassé mon installation suite à une migration. Des gens ont créé des routines autour de Trivabble, et se retrouvent tous les samedis soir pour leur partie hebdomadaire. Je trouve ça plutôt chouette.
ça a été un petit défi technique, parce qu’il a fallu le faire dans le code SVG du sac, qui ne pouvait donc plus être affiché à l’aide d’une balise img mais en l’intégrant directement comme une balise svg, et les styles SVG étaient alors bloqués par la politique CSP dans Chrome… Une conversion en attributs SVG a heureusement résolu le problème sans modifier l’apparence du sac. Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Programmez">

### 13. `FR` [Sécuriser au-delà du code : le nouveau périmètre de l’AppSec](data/articles/38f29567982a8b29e281caad5ead10de.html)
**Source:** Programmez
d'expert par Eyal Dyment (VP of Security Products, JFrog)
Le monde de la technologie est en pleine effervescence face au potentiel du développement logiciel assisté par l’IA et de l’automatisation. Dans le même temps, cette accélération s’accompagne d’un renforcement marqué de la pression réglementaire et d’une augmentation des risques pesant sur la chaîne d’approvisionnement logicielle. Si de nombreuses organisations continuent de s’appuyer principalement sur l’analyse du code source, une telle approche, centrée uniquement sur le code, crée un « angle mort malware » de plus en plus préoccupant. Les applications modernes ne sont plus simplement écrites ligne par ligne : elles sont assemblées à partir de binaires, de packages tiers, d’images de conteneurs et, de plus en plus, de modèles d’IA. Limiter la sécurisation à ce que les développeurs produisent directement revient à ignorer les véritables surfaces d’attaque exploitées par les cybercriminels. Pour répondre à la tension entre rapidité de mise en production et exigences de sécurité, l’attention doit se porter sur les binaires.
L’analyse du code source seule est insuffisante pour sécuriser la chaîne d’approvisionnement
Le code source traduit une intention ; les binaires matérialisent la réalité. Une fois entré dans le pipeline CI/CD, le code est transformé par les systèmes de build, les dépendances, les plugins et les fichiers de configuration. Des vulnérabilités ou des comportements malveillants peuvent alors être introduits bien après le commit du code : scripts de build compromis, dépendances infectées, artefacts altérés.
Les approches AppSec traditionnelles ont longtemps privilégié le « shift left », notamment via les tests statiques de sécurité des applications (SAST). Ces méthodes conservent toute leur pertinence, mais elles ne suffisent pas à elles seules. De nombreux incidents qui touchent la chaîne d’approvisionnement trouvent leurs origines dans des composants tiers ou dans les livrables compilés destinés à la production. Sans visibilité sur ces binaires, la sécurisation porte davantage sur un plan théorique que sur le produit réellement déployé.
Pourquoi la priorisation des vulnérabilités devient un impératif stratégique Le volume de vulnérabilités ne cesse de croître et dépasse désormais la capacité de remédiation de la plupart des équipes. Traiter chaque faille comme prioritaire entraîne une fatigue liée aux alertes et une mobilisation inefficace de ressources de sécurité déjà contraintes.
Une priorisation fondée sur le contexte apporte une réponse structurante. Déterminer si une vulnérabilité est réellement atteignable ou exploitable dans une application donnée permet de concentrer les efforts sur les failles qui constituent un risque avéré. L’analyse de la configuration, des dépendances transitives et du contexte d’exécution affine encore cette évaluation en offrant une vision plus précise des expositions réelles. Elle favorise ainsi l’alignement entre les équipes de sécurité et de développement, sur les correctifs à traiter en priorité.
Cette intelligence contextuelle est désormais intégrée aux plateformes AppSec modernes, permettant de dépasser la simple accumulation d’alertes au profit d’une décision véritablement orientée par le risque.
Stopper les packages malveillants avant leur entrée dans le SDLC
La récente vague d’attaques visant principalement le registre npm met en lumière un point critique : la « porte d’entrée » de l’environnement de développement constitue aujourd’hui la principale source d’exposition au risque. Lorsqu’un développeur télécharge un package malveillant, l’attaque est effective avant même toute phase d’analyse du code.
Dans ce contexte, la mise en place de contrôles préventifs dès le point d’entrée devient essentielle. Vérifier les packages, plugins, modèles et extensions au regard des politiques internes permet de bloquer les composants identifiés comme malveillants ou suspects avant leur intégration dans le cycle de développement. Plutôt que d’intervenir a posteriori, cette approche réduit significativement les risques en empêchant des catégories entières d’attaques de se déployer.
La valeur d’un système d’enregistrement unique pour l’AppSec La multiplication d’outils fragmentés alimente ce que beaucoup qualifient de « crise de confiance ». Lorsqu’elle est greffée a posteriori au lieu d’être pensée de façon native et intégrée à chaque étape du cycle de vie, la sécurité finit inévitablement par ralentir la mise en production.
Réunir la gestion des artefacts et les signaux de sécurité au sein d’un système d’enregistrement unique instaure une gouvernance continue et automatisée. Les politiques s’appliquent de manière homogène à l’ensemble des dépôts et des pipelines. La préparation aux audits devient un processus continu plutôt qu’une course de dernière minute. Les équipes sécurité et DevOps s’appuient sur une source de vérité partagée. À la clé, une sécurité renforcée, avec moins de perturbations pour les flux de développement.
IA, transparence et réglementation émergente
L’IA et le machine learning figurent parmi les technologies les plus disruptives depuis l’avènement du smartphone. Leur essor s’accompagne toutefois d’une exigence de transparence sans précédent. Les modèles, données d’entraînement et dépendances sont désormais considérés comme des artefacts logiciels à part entière, pleinement intégrés au périmètre de la sécurité de la chaîne d’approvisionnement.
Des cadres réglementaires comme l’AI Act européen illustrent l’ampleur des enjeux, avec des sanctions pouvant atteindre 6 % du chiffre d’affaires mondial en cas de non-conformité. Répondre à ces exigences suppose un renforcement significatif de la transparence, de la traçabilité et de la gouvernance, pour les composants logiciels traditionnels comme pour les actifs liés à l’IA.

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 14. `EN` [Twilio’s A2H is a new protocol that helps agents talk to humans](data/articles/e896d90659ef6ac5a522974dca1b73fe.html)
**Source:** Open Source Weekly (The New Stack)
Over the last year or so, we’ve seen a proliferation of frameworks and protocols for agentic AI tools. There is

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 15. `EN` [A decade of werf, a software delivery tool for Kubernetes](data/articles/36442913a553b8cb5d8fbabaceb3fbe8.html)
**Source:** Open Source Weekly (The New Stack)
Various cloud native projects are celebrating their first decade. While there are obvious big names, such as Kubernetes itself, Helm,

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source.com (Nouveautés)">

### 16. `EN` [New developments at Opensource.com](data/articles/1f8e21540bb0dae5d3a62405cacdb09a.html)
**Source:** Open Source.com (Nouveautés)
New developments at Opensource.com
admin
Tue, 06/06/2023 - 13:30 You may have noticed that it's been quiet here on Opensource.com lately. That's because there's a new project in the works, and while there aren't many specific details to announce yet, there's plenty to talk about. What better way to start than with the entire internet?
The internet, and top-level domains
You may know that the internet is a network. A network, by definition, is a group of connections. The term "internet" is in fact a portmanteau of "interconnected" and "network". The internet is a network of interconnected networks, and originally it consisted of two: The military network and the academic network. Once the internet got popular outside those two groups, it became apparent that different designations were needed to differentiate, say, a commercial entity from a charitable organization from a university or a governmental department.
These designations are called top-level domains (TLD). There are many available today, but for a long time there were only a handful. The original TLDs remain popular, and you probably know that when you go to, for instance, a .com address, you're visiting a commercial site, but when you visit a .org address you're going to a non-profit website.
Open source is a network
Open source can be many things. It can be commercial, it can be non-profit, it can be academic, it can be cultural. No matter what form it takes, though, it's always a network. Sometimes (but not always) it's a network of computers, but most importantly it's a network of people. Whether people are gathering at a conference or a pub or in an online chat room, open source is a community of people.
The website Opensource.com has been supported by a commercial entity for 12 years. But the people (that's you and me) that make up the Opensource.com community aren't commercial entities, we're people.
In one month, Opensource.com is going to resolve that bug. Stay tuned!
The community is hard at work on something new. Image by: Image by Camylla Battani
What to read next This work is licensed under a Creative Commons Attribution-Share Alike 4.0 International License.
4 These are closed. Bryan Behrenshausen | June 9, 2023 I, for one, continue to welcome our non-commercial overlords. All best to the team working on these new developments, and many thanks for your endless diligence and patience. We appreciate you. Don Watkins | June 9, 2023 I agree with Bryan! Glad for the opportunity to grow this community and appreciative of your efforts. Donna Benjamin | June 12, 2023 Colour me intrigued! Where might the curious learn more, or perhaps even contribute? Greg Pittman | June 12, 2023 It's a nice thought that maybe opensource.com might be able to paraphrase Mark Twain and say, "The reports of my death are greatly exaggerated."

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source.com (Nouveautés)">

### 17. `EN` [Generate web pages from Markdown with Docsify-This](data/articles/054da5ccc965f198700884f0c8cf1ba8.html)
**Source:** Open Source.com (Nouveautés)
Generate web pages from Markdown with Docsify-This
paulhibbitts
Tue, 05/02/2023 - 03:00 Are you interested in leveraging Markdown for online content without any website setup or build process? How about seamlessly embedding constraint-free Markdown or HTML into multiple platforms (such as a content management system or learning management system)? The open source project Docsify-This, built with Docsify.js, provides an easy way to publish, share, and reuse Markdown content.
[ Get the Markdown cheat sheet ]
What is Docsify-This?
With Docsify-This, you can instantly turn any publicly available Markdown file into a responsive standalone web page. You can also link multiple Markdown files to create a simple website. Designers can alter the visual appearance of displayed pages with the point-and-click Web Page Builder interface or URL parameters. You can also use a set of provided Markdown CSS classes when creating your own Markdown content. In addition, if you use Codeberg or GitHub to store your Markdown files, an Edit this Page link can be automatically provided for each page to support collaborative authoring.
It's open source, so you can host a Docsify-This instance using your own custom domain without the risk of platform lock-in.
Use the Docsify-This Web Page Builder
To use the Web Page Builder, open a browser and navigate to the Docsify-This website or your local instance. In the Web Page Builder section, enter the URL of a Markdown file in a public repo of Codeberg or GitHub (other Git hosts can also be used via Docsify-This URL parameters but not in the Web Page Builder), and then click the Publish as Standalone Web Page button. Image by: (Paul Hibbitts, CC BY-A 4.0)
The Markdown file is rendered as a standalone web page with a URL you can copy and share. Here's an example URL:
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&amp;homepage=home.md
Docsify-This rendered web pages are perfect for embedding, with the ability to visually style Docsify-This pages to the destination platform. Image by: (Paul Hibbitts, CC BY-A 4.0)
Render other files in the same repository
You can render other Markdown files in the same repository by directly editing the Docsify-This URL parameter homepage. For example:
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&amp;homepage=anotherfile.md
Modify the web page's appearance
You can change the appearance of any Markdown file displayed in Docsify-This by using URL parameters. For example, font-family, font-size, link-color, and line-height are all common CSS attributes and are valid parameters for Docsify-This:
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/hibbitts-design/docsify-this-one-page-article/main&amp;homepage=home.md&amp;font-family=Open%20Sans,sans-serif
You can also alter the visual appearance using a set of special Markdown CSS classes. For example, you can add the button class to a link:
[Required Reading Quiz due Jun 4th](https://canvas.sfu.ca/courses/44038/quizzes/166553 ':class=button') This produces a button image instead of just a text link: Image by: (Paul Hibbitts, CC BY-A 4.0)
In addition to the Markdown CSS classes supported by Docsify-This, you can define your own custom classes within your displayed Markdown files. For example: [Custom CSS Class Button](# ':class=mybutton')
Produces this: Image by: (Paul Hibbitts, CC BY-A 4.0)
Include HTML snippets
As supported by standard Markdown, you can include HTML snippets. This allows you to add layout elements to your HTML render. For example: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Embed Docsify-This as an iFrame
You can embed Docsify-This web pages using an iFrame in almost any platform. You can also use URL parameters to ensure your embedded content matches your destination platform: Image by: (Paul Hibbitts, CC BY-A 4.0)
Embed Docsify-This with an external URL
In certain learning management systems (LMS), including the open source Moodle and even the proprietary Canvas, you can link external web pages to a course navigation menu and sometimes more. For example, you can use the Redirect Tool in Canvas to display Docsify-This web pages.
url=https://docsify-this.net/?basePath=https://raw.githubusercontent.com/paulhibbitts/cmpt-363-222-pages/main&amp;homepage=resources.md&amp;edit-link=https://github.com/paulhibbitts/cmpt-363-222-pages/blob/main/resources.md&amp;font-family=Lato%20Extended,Lato,Helvetica%20Neue, Helvetica,Arial,sans-serif&amp;font-size=1&amp;hide-credits=true Skip to bottom of list Our favorite resources about open source
Git cheat sheet
Advanced Linux commands cheat sheet

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source.com (Nouveautés)">

### 18. `EN` [5 open ways to help UX designers and developers collaborate better](data/articles/0c08890eea1bd89469a675d0c882053b.html)
**Source:** Open Source.com (Nouveautés)
5 open ways to help UX designers and developers collaborate better
kriker
Wed, 04/26/2023 - 03:00 Ideally, designers have a good relationship with their product team and users. However, the relationship between designers and developers is more difficult to build and maintain. The lack of a close relationship makes it difficult to solve problems or improve.
In my experience, the open source Open Decision Framework can overcome many of these obstacles.
The Open Decision Framework asserts that open decision-making is transparent, inclusive, and customer-centric. It involves clearly sharing problems, requirements, and constraints with affected parties. It enables collaboration with multiple stakeholders to secure diverse opinions and comprehensive feedback. Most importantly, it manages relationships and expectations across competing needs and priorities.
These principles probably resonate with anyone involved in the many decisions around designing a product, feature, or service. For a designer, developers are key stakeholders in making the best design decisions. If you're a designer, it's time to embrace the opportunity to get diverse opinions.
The backend and the user experience
Developers are key stakeholders because a user's product or service experience is more than just the pixels on the screen or the workflow designs. It encompasses the service's performance, the speediness of API calls, the way user data is treated, and even the design of the data for scalability. When they're considered full stakeholders in the design, developers can contribute their expertise on the backend and architecture of services to assist the overall design of the experience.
A user experience (UX) designer is a stakeholder for the items the dev team is responsible for. A performance deficit, or the effects of an architecture on what data is available, can hinder the user experience. An open, collaborative relationship between dev and design allows for trust and transparency in all areas. Skip to bottom of list Our favorite resources about open source
Git cheat sheet
Advanced Linux commands cheat sheet
Open source alternatives
Free online course: RHEL technical overview
Register for your free Red Hat account
Check out more cheat sheets Make space for collaboration
An open and transparent relationship between developers and design is not as common as it should be. This way of working may be new to both sides. Here are my top five tips for making collaboration a success:
Set up a recurring time to collaborate: Establish a recurring time for design and development to meet between once a week and once a month. The invitation should at least include UX, lead engineering, and quality engineering. Ideally, all developers on the team should be invited to attend as schedules permit.
Make sharing the main agenda: UX should share the current use cases and features they are working on, along with any relevant user research data. UX designers should demonstrate workflow designs, wireframes, and high-fidelity mockups to the development team. Development should share any design decisions made on their side that may affect how the user experience works.
Encourage questions: Collaboration is the ideal scenario. Encourage all attendees to ask questions and give feedback. Answers to questions and responses to feedback are opportunities to discuss design and direction, as well as a chance to learn from one another.
Embrace a learning mindset: Avoid lecturing or "telling." Instead, aim to learn from each other. Use mutual expertise to design and build a great experience for users and customers. Ask for explanations of unfamiliar technology or concepts.
Consider formal learning: A collaborative relationship can be easier when groups speak the same language. Consider formal learning paths, such as:
Designers: A coding foundations course, such as the open source Odin Project, can be helpful for learning the fundamentals of how a service is constructed and built.
Developers: An understanding of UX principles can help guide questions and feedback. You can find a good overview at UX design principles or in various books and articles.
An example of open collaboration

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 19. `EN` [Red Hat introduces its first out and out AI platform](data/articles/ff7396691dd1f101c47e281259471e79.html)
**Source:** Open Source Weekly (The New Stack)
Red Hat has been deploying AI in the enterprise for some time. For example, Red Hat Enterprise Linux (RHEL) now

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="LinuxFr">

### 20. `FR` [Les Journées du Logiciel Libre reviennent en 2026 !](data/articles/6f62e6e0f55d9fad23f1b3d061e21a9e.html)
**Source:** LinuxFr
Les Journées du Logiciel Libre 2026 auront lieu le week-end du 30-31 mai 2026 ! lien nᵒ 1 : Site web
lien nᵒ 2 : Fédiverse
lien nᵒ 3 : Appel à participation
lien nᵒ 4 : Sponsoring Citoyens et citoyennes engagées, associations, entreprises ou flâneurs et flâneuses avides de découvertes se retrouveront le week-end des 30 et 31 mai 2026, cette année encore au sein du campus de l’École Normale Supérieure de Lyon - Site René Descartes, et son superbe jardin (https://www.openstreetmap.org/way/5212492). L'entrée sera comme toujours libre et gratuite.
Les Journées du Logiciel Libre se déroulent chaque année à Lyon depuis 1998 et rassemblent spécialistes, adeptes, curieux et curieuses de tous niveaux venus de toute la France pour un week-end riche en conférences, ateliers et rencontres.
Vous souhaitez proposer une intervention (conférence, atelier ou stand) pour les JdLL 2026 ? Vous avez jusqu'au 15 mars 2026 pour déposer votre proposition ici : https://pretalx.jdll.org/jdll2026/cfp
Vous souhaitez sponsoriser l'évènement ? C'est par là : https://jdll.org/soutenir
Et si vous souhaitez suivre nos dernières actualités, c'est sur le Fédiverse : https://framapiaf.org/@jdll
N'hésitez pas à passer le message autour de vous !
Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Programmez">

### 21. `FR` [Si tu es contributeur à des projets Open Source, tu peux avoir 6 mois gratuits de Claude Max](data/articles/fc3e51973993273a380f0702cb70ef15.html)
**Source:** Programmez
Pour les contributeurs et les mainteneurs de projets open source, Anthropic annonce que Claude for Open Source Program est là pour les remercier. En échange du temps passé sur ces projets, vous pouvez bénéficier de 6 mois gratuits à Claude Max. L'éditeur impose tout de même des critères précis.
Qui peut postuler ?
- Mainteneurs : Vous êtes mainteneur principal ou membre de l'équipe centrale d'un dépôt public comptant plus de 5 000 étoiles sur GitHub ou plus d'un million de téléchargements mensuels sur NPM. Vous avez effectué des commits, des publications ou des revues de pull requests au cours des 3 derniers mois.
- Vous ne correspondez pas tout à fait à ces critères ? Si vous maintenez un élément essentiel à l'écosystème, n'hésitez pas à postuler et à nous en parler. Tous les détails ici : https://claude.com/contact-sales/claude-for-oss Catégorie actualité: Open Source Claude Image actualité AMP:

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Programmez">

### 22. `FR` [Figma : toujours d'IA avec OpenAI Codex](data/articles/dfc2731e1fa03d802492a3b009c78792.html)
**Source:** Programmez
OpenAI et Figma étendent leur partenariat avec une nouvelle intégration du code au design, qui connecte Figma directement à Codex. Les équipes produits peuvent facilement générer des designs Figma depuis Codex, mais elles peuvent aussi traduire en code des designs issus de fichiers Figma. L'intégration Codex-Figma offre un moyen plus rapide et plus fluide de passer du code à l'exploration sur le canvas de design.
Depuis Figma Design, Figma Make ou FigJam dans Codex, il est possible de passer au design en code le plus simplement possible. Avec cette nouvelle intégration, il est aussi possible de convertir une interface développée en code en un design Figma éditable pour explorer de nouvelles idées et itérations avant de les réintégrer dans le code.
« Plus les barrières à la création de logiciels s'abaissent, plus le nombre de logiciels va croître de façon exponentielle. La question n'est plus de savoir si vous pouvez créer, mais ce que vous allez créer et vous démarquer», explique Loredana Crisan, Directrice du design chez Figma. «Avec cette intégration, les équipes peuvent s’appuyer sur leurs meilleures idées, pas seulement sur leur première idée. Elles combinent désormais le meilleur du code avec la créativité, la collaboration et le soin qu'offre le canvas infini de Figma. » « Cette intégration rend Codex encore plus puissant pour un plus grand nombre de créateurs et d'entreprises, car elle ne présuppose pas que vous soyez "designer" ou "développeur" », indique Alexander Embiricos, Responsable produit Codex. « Les ingénieurs peuvent itérer visuellement sans quitter leur flux de travail, et les designers peuvent travailler dans leurs outils, sans devenir développeurs à temps plein. La frontière entre les rôles commence à s'estomper, car le système aide en permanence à transformer l'intention en réalité.» Catégorie actualité: IA Figma Image actualité AMP:

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Programmez">

### 23. `FR` [Deno 2.7 : temporal API, Windows ARM, mise à jour du moteur V8](data/articles/002e0ca2522be9f33ff9eadb84915738.html)
**Source:** Programmez
Deno est disponible en version 2.7. Cette mise à jour est relativement importante avec des nouveautés qui vont ravir de nombreux développeurs. Pour mettre à jour : deno upgrade. Les principales nouveautés sont :
- Temporal API est déclarée stable. Cette API est très importante pour une meilleure gestion des dates et des heures
- support de Windows ARM64
- nouvelles API pour les sous-process : Deno.spawn(), Deno.spawnAndWait(), Deno.spawnAnWaitSync(). Attention : ces API sont dites non stables
- Deno améliore encore la compatibilité avec Node en fixant des douzaines de problèmes. - Plusieurs API changent : navigator.platform, support de CompressionStream et DecompressionStream dans Brotli
- crypto.subtle supporte SHA3
- les formats GIF et WebP sont supportés par createImageBitmap
const res = await fetch("https://example.com/animation.webp");
const blob = await res.blob();
const bitmap = await createImageBitmap(blob);
console.log(`${bitmap.width}x${bitmap.height}`);
- diverses améliorations sur la gestion des packages : par exemple, il est possible de compiler des paquets npm dans des exécutables - pour les projets uniquement JavaScript, vous pouvez vérifier les types avec deno check --check-js
- cette version améliore aussi le debug avec les DevTools de Chrome et Visual Studio Code
- Deno.cron est maintenant observable avec OpenTelemetry
- le moteur V8 est la version 14.5
Note de version : https://deno.com/blog/v2.7 Catégorie actualité: Outils Deno Image actualité AMP:

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Programmez">

### 24. `FR` [Snowflake étend Cortex Code CLI à toutes les données](data/articles/0521b6644b2fef840f28be1b38df4a44.html)
**Source:** Programmez
Cortex Code CLI, de l'éditeur Snowflake, supporte de nouvelles sources de données : dbt et Airflow d'Apache. L'éditeur étend donc son assistant de codage au-delà de son environnement de données. L’objectif est de permettre aux développeurs d’utiliser un assistant IA quel que soit leur stack data. Cortex Code a été lancé en novembre 2025. "Grâce à cette prise en charge étendue, les développeurs bénéficient d'une assistance IA sécurisée et contextuelle au sein de leurs systèmes d'ingénierie de données préférés, permettant ainsi aux équipes de travailler avec les données où qu'elles se trouvent et de créer, gérer et optimiser plus efficacement des flux de travail de niveau production." explique l'éditeur. Au-delà de l'ouverture des environnements de données, d'autres changements sont annoncés : Codage IA au-delà de Snowflake : les clients peuvent désormais utiliser Cortex Code CLI avec des données dans les environnements dbt et Apache Airflow, et pas seulement avec les données stockées dans Snowflake. Il s'agit d'une avancée vers la vision de Snowflake qui consiste à permettre aux développeurs d'utiliser Cortex Code CLI sur tous les principaux systèmes de données, quels que soient les types de données et leur emplacement.
Lancement d’une offre en abonnement mensuel en libre-service : pour la première fois, des organisations non clientes Snowflake peuvent souscrire à Cortex Code CLI et l’utiliser dans leurs propres environnements. Une ouverture qui élargit le marché adressable et abaisse la barrière à l’entrée. La CLI est disponible sur macOS, Linux et WSL (Windows). Vous pouvez l'interfacer avec Visual Studio Code ou Cursor. Pour en savoir plus sur Cortex Code : https://www.snowflake.com/en/developers/guides/best-practices-cortex-code-cli/ Catégorie actualité: Outils Snowflake Image actualité AMP:

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 25. `EN` [The Linux Foundation reveals the “ugly” secret of how open source is draining your budget](data/articles/bcff918e1da8de89afc4e0916fd668e7.html)
**Source:** Open Source Weekly (The New Stack)
Companies actively investing in open source are seeing massive returns, while those treating it as “freeware” are drowning in technical

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="LinuxFr">

### 26. `FR` [Agenda du Libre pour la semaine 9 de l'année 2026](data/articles/2f3a557265fbe8849eee430cd0dae2d6.html)
**Source:** LinuxFr
Calendrier Web, regroupant des événements liés au Libre (logiciel, salon, atelier, install party, conférence), annoncés par leurs organisateurs. Voici un récapitulatif de la semaine à venir. Le détail de chacun de ces 57 événements (France: 49, Internet: 4, Québec: 3, Suisse: 1) est en seconde partie de dépêche. lien nᵒ 1 : April
lien nᵒ 2 : Agenda du Libre
lien nᵒ 3 : Carte des événements
lien nᵒ 4 : Proposer un événement
lien nᵒ 5 : Annuaire des organisations
lien nᵒ 6 : Agenda de la semaine 7
lien nᵒ 7 : Agenda du Libre Québec Sommaire
[FR Saint Clar] Tous les Lundis, médiatheque de Saint Clar - Le lundi 23 février 2026 de 10h00 à 17h00.
[Internet] Mapathon 2025-2026 par CartONG - Le lundi 23 février 2026 de 18h00 à 20h00.
[FR Saint-Étienne] Permanence de l'association Alolise - Le lundi 23 février 2026 de 19h00 à 22h00.
[FR Saint-Étienne] OpenStreetMap, rencontre Saint-Étienne et sud Loire - Le lundi 23 février 2026 de 19h00 à 21h00.
[FR Dijon] Atelier du mardi - Le mardi 24 février 2026 de 15h00 à 19h00.
[FR Castelnau-le-Lez] Permanence Linuxerie | GNU/Linux et Logiciels Libres - Le mardi 24 février 2026 de 15h00 à 17h00.
[Internet] Émission «Libre à vous!» - Le mardi 24 février 2026 de 15h30 à 17h00.
[FR Aix-en-Provence] Open Bidouille Workshop au LAB@Floralies - Le mardi 24 février 2026 de 17h30 à 19h30.
[FR Bordeaux] Cartopartie OpenStreetMap - Le mardi 24 février 2026 de 18h00 à 20h00.
[FR Tours] Permanences Installation Linux et Usages logiciels libres - Le mardi 24 février 2026 de 18h30 à 20h30.
[FR Lille] Permanence associative autour du Libre - Le mardi 24 février 2026 de 20h00 à 22h00.
[CA-QC Montréal, Québec] FediMTL: Conférence sur la souveraineté numérique et le web social - Le mardi 24 février 2026 de 08h30 à 19h30.
[CA-QC Québec] Rencontres-Linux Québec - Le mardi 24 février 2026 de 17h00 à 20h00.
[FR Le Mans] Permanence du mercredi - Le mercredi 25 février 2026 de 12h30 à 17h00.
[FR Le Mans] Permanence du mercredi - Le mercredi 25 février 2026 de 12h30 à 17h00.
[FR Aix-en-Provence] Open Bidouille Workshop au LAB@Floralies - Le mercredi 25 février 2026 de 17h30 à 19h30.
[FR Beauvais] Sensibilisation et partage autour du Libre - Le mercredi 25 février 2026 de 18h00 à 20h00.
[FR Marseille] Réunion d'information Installation Linux - Le mercredi 25 février 2026 de 18h00 à 19h00.
[FR Cysoing] Mercredis Linux - Le mercredi 25 février 2026 de 18h30 à 23h30.
[FR Le Versoud] Install Party Linux Grésivaudan - Le mercredi 25 février 2026 de 18h30 à 20h30.
[Internet] Webinaire : FAQ logiciel Paheko - Le mercredi 25 février 2026 de 19h00 à 21h00.
[FR Montpellier] Permanence | OpenStreetMap | HérOSM (hybride) - Le mercredi 25 février 2026 de 19h00 à 22h00.
[CA-QC Lévis] CA de FACiL - Le mercredi 25 février 2026 de 19h00 à 21h00.
[FR Nantes] Repair Café numérique + Install Party - Le jeudi 26 février 2026 de 09h30 à 12h30.
[FR Saint-Girons] Install Party - Le jeudi 26 février 2026 de 09h30 à 12h00.
[Internet] Découverte de Scenari (en visio) - Le jeudi 26 février 2026 de 16h00 à 17h00.
[FR Sète] Permanence | Linuxerie | GNU/Linux et Logiciels Libres - Le jeudi 26 février 2026 de 18h00 à 20h00.
[FR Lanmeur] Adieu Windows, bonjour le libre ! - Le vendredi 27 février 2026 de 13h40 à 16h15.
[FR Nantes] Repair Café numérique + Install Party - Le vendredi 27 février 2026 de 14h00 à 17h30.
[FR Arras] Repair Café Linux - Le vendredi 27 février 2026 de 14h00 à 17h00.
[FR Nogent] Les cafés du Logiciels Libre - Le vendredi 27 février 2026 de 14h30 à 16h30.
[FR Bury] Sensibilisation et partage autour du Libre - Le vendredi 27 février 2026 de 16h00 à 18h00.
[FR Toulon] Install Party - Le vendredi 27 février 2026 de 17h00 à 21h00.
[FR Gourin] Atelier Linux - Le vendredi 27 février 2026 de 18h30 à 20h00.
[FR Villeneuve d’Ascq] Ateliers "Libre à vous" - Le samedi 28 février 2026 de 09h00 à 12h00.
[FR Chaumont] Permanence Informatique de REVOL - Le samedi 28 février 2026 de 09h00 à 12h00.
[CH Môtiers] Samedi du Libre - Le samedi 28 février 2026 de 09h00 à 16h30.
[FR Saumur] Séance d’installation de GNU/Linux - Le samedi 28 février 2026 de 09h00 à 12h00.
[FR Nantes] Repair Café numérique + Install Party - Le samedi 28 février 2026 de 09h30 à 12h30.
[FR Wimille] Retrouvez votre liberté numérique - Le samedi 28 février 2026 de 10h00 à 12h00.
[FR Périgueux] Les ateliers spécial Linux - Le samedi 28 février 2026 de 10h00 à 17h00.
[FR 33600 Pessac] Journée Install-partie Découverte du Libre - Le samedi 28 février 2026 de 10h00 à 17h00.
[FR Vandœuvre-lès-Nancy] Atelier libre - Envoyer des SMS depuis un ordinateur - Le samedi 28 février 2026 de 10h00 à 12h00.
[FR Ivry sur Seine] Cours de l'Ecole du Logiciel Libre - Le samedi 28 février 2026 de 10h30 à 18h30.
[FR Marseille] Install Party GNU/Linux - Le samedi 28 février 2026 de 14h00 à 18h00.
[FR Oust] Repair’café du Haut-Salat - Le samedi 28 février 2026 de 14h00 à 18h00.
[FR Ecully] Install Party - Le samedi 28 février 2026 de 14h00 à 17h00.
[FR Saint-Ouen-sur-Seine] Atelier « reprenons le contrôle de nos smartphones » - Le samedi 28 février 2026 de 14h00 à 16h00.
[FR Juvisy-sur-Orge] Permanence GNU/Linux - Le samedi 28 février 2026 de 14h30 à 17h00.
[FR Saint-Cyr L'École] Permanences Logiciels Libres : formation Libreoffice - Le samedi 28 février 2026 de 15h00 à 16h30.
[FR Charleville-Mézières] Les Samedis des Logiciels Libres - Le samedi 28 février 2026 de 15h00 à 17h00.
[FR Quimper] Permanence Linux Quimper - Le samedi 28 février 2026 de 16h00 à 18h00.
[FR Montigny le bretonneux] Challenges Hack Kids : relève les défis ! - Le samedi 28 février 2026 de 17h00 à 19h30.
[FR Vire] Modélisation 3D avec OpenSCAD - Le samedi 28 février 2026 de 17h00 à 19h00.
[FR Gaillac] Repair café - Le dimanche 1 mars 2026 de 10h00 à 14h00.
[FR Saint-Caprais-de-Bordeaux] Ğmarché de Saint-Caprais-de-Bordeaux - Le dimanche 1 mars 2026 de 10h00 à 15h00.
[FR Louargat] Repair Café et Install Party - Le dimanche 1 mars 2026 de 10h00 à 18h00.
[FR Saint Clar] Tous les Lundis, médiatheque de Saint Clar - Le lundi 23 février 2026 de 10h00 à 17h00.
Tous les lundis de 10h à 17h sans interruption, l'association Prends toi en main / atelier abcpc, propose install party, suivi, dépannage, formation et revalorisation à petit prix sous Linux exclusivement.
L'atelier abcpc existe depuis plus de 10 ans et milite exclusivement pour les logiciels libres.
Médiatheque, Médiatheque, 4 place Dastros, Saint Clar, Occitanie, France
https://www.facebook.com/PrendsToiEnMain
linux, permanence, dépannage, formation, adieu-windows, libres, logiciels-libres, abcpc, prends-toi-en-main, install-party [Internet] Mapathon 2025-2026 par CartONG - Le lundi 23 février 2026 de 18h00 à 20h00.
Vous voulez vous engager pour une cause, rencontrer de nouvelles personnes et découvrir la cartographie participative et humanitaire? CartONG vous invite à participer à un ou plusieurs mapathons en ligne! ​​
Venez cartographier les régions encore absentes des cartes pour soutenir les organisations humanitaires et de solidarité internationale qui ont besoin de cartes précises et à jour pour agir plus efficacement en cas de crise ou initier des projets de développement local.
Les ateliers de cartographie sont organisés dans le cadre du projet Missing Maps, qui a pour objectif de cartographier de façon préventive les régions vulnérables aux catastrophes naturelles, crises sanitaires, environnementales, aux conflits et à la pauvreté. On peut penser qu'aujourd'hui toutes les parties du monde sont cartographiées, mais en réalité de nombreuses régions ne possèdent encore aucune carte!
​ Pour qui? Pas besoin d'être un·e expert·e, les ateliers sont accessibles à tout le monde!
​ Où ? 100% en ligne! Un lien de connexion vous sera envoyé après votre inscription
​ ? Avec la plateforme de cartographie libre et contributive OpenStreetMap (OSM, le «Wikipédia des cartes») tout le monde peut participer à la cartographie de n'importe quelle zone de la planète:

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 27. `EN` [AWS creates a sandbox for its agent experiments](data/articles/a83b2e07c977c8d3ad23a5d3488b7dc0.html)
**Source:** Open Source Weekly (The New Stack)
(AWS) is launching a dedicated GitHub organization for its most experimental agentic AI work. On Monday, the company launched Strands

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="LinuxFr">

### 28. `FR` [Sortie de 0 A.D. 28 « Boiorix »](data/articles/576209f83303d915c5449696f357b1a4.html)
**Source:** LinuxFr
Cela fait un petit moment qu'il n'y a pas eu d'actualités publiées concernant le jeu 0 A.D. : la dernière version annoncée en dépêche était la Alpha 26 « Zhuangzi » en octobre 2022, et le dernier lien concernait le départ du project leader en octobre 2023. Et pourtant une version « Alpha 27: Agni » est parue en janvier 2025 et Stan est de nouveau/encore le project leader. Au fait c'est quoi 0 A.D ?
0 A.D. : Empires Ascendant est un jeu vidéo de stratégie en temps réel (Real Time Strategy, RTS) historique en 3D développé par Wildfire Games. C’est un projet libre (code sous GPL v2, données sous CC BY‑SA 3.0), au développement ouvert, visant des standards de qualité artistique comparables à ceux de l’industrie, ainsi qu’un grand respect de la réalité historique. Le jeu permet d’incarner quinze factions qui ont marqué leur histoire entre les rives de l’Atlantique et la chaîne de l’Himalaya, au cours de la période allant de −500 av. J.‑C. à −1 av. J.‑C. lien nᵒ 1 : Annonce de la version 28 « Boiorix »
lien nᵒ 2 : Annonce de la version Alpha 27 « Agni » La version Alpha 27 « Agni » ?
Petit retour rapide sur l'annonce en janvier 2025 de la version Alpha 27 « Agni », qui souligne les éléments principaux :
il s'agit de la dernière version qui porte le nom/statut « Alpha » ;
4 cartes supplémentaires
des améliorations du rendu graphique et du moteur de jeu
des trucs et astuces
des nouveaux visuels pour les entités, bâtiments et paysages
un second album de musiques d'ambiance
les civilisations spartiates, romaines, athéniennes et macédoniennes ont été plus différenciées (en termes d'arbres technologiques).
il est possible de contrôler la cible des bâtiments qui attaquent avec des flèches
refonte navale avec des navires éclaireur, spécialisés en tir de flèches, enflammés ou de siège
le système de capture de bâtiment évolue : le clic droit déclenche l'attaque et non plus la capture
les éléphants sont devenus plus polyvalents
les unités championnes sont plus variées
ajustements et équilibrage sur les unités de mêlée, l'influence territoriale incitant à plus d'expansion, la capacité en unités des remparts et les engins de siège
il est possible de sélectionner 300 unités
Et le développement est passé de SVN à Git.
Et donc la version 28 « Boiorix »
Cette partie est basée sur l'annonce de la sortie, sans être une traduction complète exhaustive.
L'équipe indique rechercher des personnes pour contribuer sur l'édition vidéo, la gestion des médias sociaux, le design de site web, le test et la qualité, la traduction, le développement logiciel et artistique.
Les Germains
Une nouvelle faction a été ajoutée : les Germains (représentant une coalition entre les Cimbres, les Teutons, les Ambrons et autres peuples celto-germaniques, comme un peuple semi-nomade. Les unités civiles
Les citoyens genrés : précédemment appelées "femmes citoyennes", les civils sont maintenant représentés par des modèles d'hommes ou de femmes. Cela enlève les ambiguïtés précédentes : les civils n'étaient pas que des femmes, et le terme "citoyens" ne reflétait pas les catégories souhaitées de civils vs militaires. Rendu du texte
Pour permettre l'affichage de diverses langues sans utiliser trop de mémoire, le rendu du texte est désormais fait à la volée avec Freetype. Le rendu est aussi amélioré sur les écrans Hi-DPI. Nouvelles options de jeu
Il devient possible :
de retirer un emplacement de joueur d'une partie (ex: sur une carte prévue à 4 joueurs, faire disparaître les unités et bâtiments du numéro 3) ; de limiter la population d'une équipe (plutôt que de chaque joueur séparément) Des corrections de bugs ont été faites en refactorisant le code (dont celui sur les scénarios d'inondation qui se propageaient).
Hall multi-joueurs
Parmi les amélioriations : chiffrement avec TLS, facilitation de l'hébergement de parties, correction de bug gelant le jeu.
Amélioration du moteur et de la gestion des plateformes
Le moteur Javascript SpiderMonkey passe en version 128. Windows 10 et 11 deviennent les seules versions prises en charge.
Une version Windows 64 bits est fournie (et la version 32 bits pourrait disparaitre à termes).
Une version AppImage est fournie.
Nouvelles citations et astuces
Des nouvelles citations et astuces pour joueurs débutants et joueuses confirmées (ou l'inverse) ont été ajoutées. Améliorations d'équilibrage
capture des bâtiments : augmentation de leur résistance, capacité de capture par les civils
bataille navale : simplification de l'arbre technologique, éclaireurs disponibles dès le début, équilibrage
mouvement de groupe/formation : mouvement plus cohérent, avec répartition autpur du point d'arrivée
rééquilibrage de la cavalerie championne
divers rééquilibrages d'unités et bâtiments, dont certains spécifiques aux factions / civilisations
Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="LinuxFr">

### 29. `FR` [Physiocab : un logiciel libre de gestion pour kinésithérapeutes](data/articles/e0eab329ba8752732324b8914ae82b51.html)
**Source:** LinuxFr
Physiocab est un logiciel libre de gestion de cabinet de kinésithérapie, développé sous licence Affero GPL 3.0 et hébergé sur Codeberg. Le projet est porté par la société Allium SAS, dans le cadre de la plateforme communautaire Kalinka, dédiée aux kinésithérapeutes francophones.
Le projet vient de passer en beta publique (v0.9) et cherche des testeurs et contributeurs.
Pourquoi un logiciel libre pour les kinés ? Le secteur de la santé libérale souffre d'une offre logicielle dominée par des solutions propriétaires onéreuses, souvent opaques sur le traitement des données de santé. Physiocab propose une alternative : un code auditable, des données stockées localement sous la responsabilité du praticien. lien nᵒ 1 : La page de présentation du projet
lien nᵒ 2 : Le dépôt codeberg
lien nᵒ 3 : PeerJs (MIT) Fonctionnalités
La beta couvre déjà un large périmètre fonctionnel :
Planning hebdomadaire en drag &amp; drop, avec export PDF et gestion des semaines exceptionnelles, particulièrement orienté vers les kinés intervenant en multi-établissements.
Bilans Diagnostiques Kinésithérapiques (BDK) avec tests standardisés (TUG, Tinetti, Handgrip, EVA, évaluation du risque de chute…), export de PDF et historique comparatif.
Suivi des séances avec de multiples exercices structurés (équilibre, force, endurance, mobilisation), chronométrage automatique et calcul de progression.
Application tablette en PWA : fonctionne hors connexion grâce à un Service Worker, s'installe sans passer par un store, interface optimisée tactile.
Stack technique
Backend : Python 3.10+
L'application est multi-plateforme côté client (Windows, macOS, Linux, iOS, Android). La communication entre l'appli de bureau et l'appli PWA se fait de manière directe via PeerJs. Cette méthode ne nécessite pas de préparation contraignante comme l'ouverture de ports.
Les données sont stockées localement, ce qui implique que le praticien reste maître de ses sauvegardes et de sa conformité RGPD.
Le logiciel a été testé par un kinésithérapeute en situation réelle plusieurs jours d'affilée.
Modèle économique
L'utilisation est gratuite, sans limite dans le temps et sans frais cachés, la licence Affero GPL 3.0 en étant la garantie. Un support payant sur devis est proposé pour les praticiens souhaitant une installation assistée, une formation à distance, des développements sur mesure ou un audit de sécurité.
Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="LinuxFr">

### 30. `FR` [Concours - Gagnez une Raspberry Pi 5 avec Macé Robotics](data/articles/252fb89d752ed853c1cc0f0fe6036d60.html)
**Source:** LinuxFr
À l’occasion de ses 10 ans de Macé Robotics, l’entreprise organise un concours qui se déroulera jusqu'au 26 février 2026.
Macé Robotics est une entreprise individuelle fondée et gérée par moi-même (Nicolas), basée en Bretagne, spécialisée dans la conception et la réparation électronique, aussi bien pour les entreprises que pour les particuliers. Depuis 2016, je fabrique aussi du matériel Open Source également des robots mobiles Open Source destinés à l’enseignement supérieur et à la recherche. Ces robots sont basés sur un système Linux (Raspberry Pi OS), intégrant une carte Raspberry Pi ainsi qu’un microcontrôleur (Pico) dédié à la gestion des moteurs et des capteurs. J’utilise la suite logicielle KiCad sous licence GNU GPL (https://www.kicad.org/) pour la conception des circuits imprimés de ces robots. Attribution des lots par tirage au sort :
→ 1er lot : une carte Raspberry Pi 5 (2 Go) → 2e lot : une carte Raspberry Pi Pico 2W
La livraison est offerte en France. lien nᵒ 1 : Le concours pour participer Retour sur la course de robots – Saint-Brock Robot Race d'une dépêche précédente
Suite à la dépêche de décembre 2024 concernant l’organisation de la course de robots mobiles, voici quelques retours sur cet événement : malgré plusieurs annulations d’écoles survenues quelques semaines avant la compétition, la course a tout de même pu avoir lieu.
Environ quinze participants ont pris part à la compétition. Parmi les robots engagés, on comptait un robot DIY piloté par un microcontrôleur ESP32, aux côtés de plusieurs robots basé sur Raspberry Pi, offrant ainsi une belle diversité technologique.
Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 31. `EN` [Chainguard admitted Factory 1.0 was “brittle.” Here’s how 2.0 fixes it.](data/articles/823c313293254c499a28b13cabd78c33.html)
**Source:** Open Source Weekly (The New Stack)
The new, revised Factory 2.0 swaps out 1.0’s fragile, event-driven pipeline with a self-healing system powered by a new open

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 32. `EN` [Chainguard EmeritOSS backs MinIO, other orphaned projects](data/articles/e40f73244940e8c4ce53226a1f12a640.html)
**Source:** Open Source Weekly (The New Stack)
Open source has a problem. There are many under-supported, or even abandoned, open source programs that are still in wide

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 33. `EN` [Why platform companies keep buying frontend framework teams](data/articles/8004b36b2e88bf572c48afcc37ac207b.html)
**Source:** Open Source Weekly (The New Stack)
Late last week, the global cloud platform Cloudflare acquired the company behind Astro, one of the leading frontend frameworks. This

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source.com (Nouveautés)">

### 34. `EN` [Tips for running virtual, in-person, and hybrid events](data/articles/b847fda727762cb33a41b8eeb6bca0af.html)
**Source:** Open Source.com (Nouveautés)
Tips for running virtual, in-person, and hybrid events
rpaik
Wed, 05/03/2023 - 03:00 Over the past few years, virtual events have thrived. In-person events are back now, but it's important to keep in mind that virtual events didn't just come out of nowhere. Many of us were actually doing a lot of different online events even before they became popular. Many communities held hackathons, bug and issue triaging, webinars, and so on, as virtual events. They brought community members together for collaboration and education. Virtual events have improved since then, largely out of necessity, and I think we've all learned a lot. In this article, I consider how virtual and physical events can co-exist to render an improved event experience for everyone.
Costs and crowds
I don't think anyone wants to go back to the days when all events were happening on screens. But virtual events do have important advantages compared to in-person events. To begin with, it is relatively easy to start a virtual event as you often don't need much beyond meeting and streaming platforms. It can be as basic as live streaming from a video chat platform. This is especially useful for small communities that don't have a large events budget. In fact, a virtual event platform provides an opportunity to build an audience before you start making significant investments in in-person events.
The lower cost and logistical hurdles of virtual meetings don't just apply to the event organizer. It matters to attendees and community members too. A typical meetup is likely to last for 60 to 90 minutes. Is everyone always happy to commute 30 minutes each way to get to the meeting venue? A meetup in a virtual format can lower the participation barrier for attendees. I think this is one of the reasons that many meetups are continuing in virtual formats today.
The cost of doing virtual events is much lower, so there's low-risk of experimenting with different content, format, target audiences, and so on. Even if a new event isn't a huge success, you won't have to invest a large budget on the venue, equipment, people, travel, and so on. And you're able to get some valuable learning from the event no matter what.
Practical events
In addition, there are some activities that are just well-suited for virtual events. Things like documentation and bug triaging are crucial in open source communities. Despite this most people see them more like chores that they'd rather avoid. Why not have a short one to two day window where community members come together online so they can work on these chores together while supporting each other?
Hybrid events
Many events are going hybrid now, with both in-person and virtual components. By hybrid, I don't mean just broadcasting in-person sessions from conference facilities. Many have separate tracks for in-person and virtual participants. FOSDEM 2023 is a great example of a hybrid event, with separate online rooms.
Some utilize virtual tracks for "Day 0" events (orientation, project team meetings, meetups, and so on). This way, people who aren't able to travel to the in-person conference can still participate in the earliest events. By having a separate virtual track, you can potentially reduce the total length of the in-person conference. This means people don't have to be away from home as long as a 100% in-person event.
The dos and don'ts
Here are some tips based on my experience of attending and organizing virtual events.
DON'T have the same structure as in-person events. When you have an event online, you wouldn't want to ask the audience to sit through a full day of presentations. It's difficult for most people to stare at their screens for a long period of time. If you have more than four hours of content, consider spreading the event over a few days so that attendees only need to sit through a maximum of a couple of hours of presentations each day. You also don't always need to add breaks between sessions in virtual events because people aren't moving to different rooms. As a matter of fact, by hot switching to the next session, you're less likely to lose attendees between presentations.
DON'T put a wall around the content after the event. I recently registered and attended an event and was told that slides and recordings would be available a few weeks after the event. When I returned to the event page a few weeks later, it asked me to register with my email address to get access to the content! I understand people's desire to collect leads. But if people had to register for the event already, or the event was live-streamed, it's not appropriate to ask them to share their contact information. Instead, make the content accessible to anyone.
DON'T force synchronous participation from attendees. One of the key benefits of virtual events is that it's easier for everyone to attend or participate. If a person cannot watch a presentation live, provide ways for them to interact with presenters and other attendees asynchronously.

</div>

<div class="article-item" data-lang="pt" data-category="opensource" data-source="Hacker News (nouveautés)">

### 35. `EN` [Kakveda open source-level AI, Infra observability agent](data/articles/dba5282490bee2f413fcaa417dad11ab.html)
**Source:** Hacker News (nouveautés)
Article URL: https://www.kakveda.com/ URL: https://news.ycombinator.com/item?id=47193086
Points: 1
# : 1

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Hacker News (nouveautés)">

### 36. `EN` [Show HN: JobSeek Expat – a CLI tool to scrape English speaking jobs on LinkedIn](data/articles/9f4eb0b83dfa64a035d07101e99a7247.html)
**Source:** Hacker News (nouveautés)
JobSeek Expat is a powerful, open-source CLI tool designed to help expats and international job seekers find English-speaking jobs in non-English speaking countries (like Germany, France, Netherlands, etc.).
It scrapes major job boards, filters out local-language requirements, and presents you with a clean, curated list of opportunities. URL: https://news.ycombinator.com/item?id=47192874
Points: 2
# : 0

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Developpez.com">

### 37. `FR` [OpenAI révèle comment Pékin utilise ChatGPT pour industrialiser la répression numérique de ses dissidents à l'étranger, une situation qui en dit long sur la confidentialité de vos conversations IA](data/articles/af123752b50951d276d987dfe616fc92.html)
**Source:** Developpez.com
OpenAI révèle Pékin utilise ChatGPT pour industrialiser la répression numérique de ses dissidents à l'étranger, une situation qui en dit long sur la confidentialité de vos conversations IA Un fonctionnaire des forces de l'ordre chinoises a involontairement exposé l'ampleur d'un vaste réseau de répression transnationale en utilisant ChatGPT comme outil de rédaction de rapports opérationnels. Le rapport publié par OpenAI le 25 février 2026 lève le voile sur une machine d'intimidation industrialisée...

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="BetaPage">

### 38. `EN` [Openclawinstall](data/articles/0d11a22134072eb23d3aee36af38e211.html)
**Source:** BetaPage
Openclawinstall

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 39. `EN` [Observability platform migration guide: Prometheus, OpenTelemetry, and Fluent Bit](data/articles/831236caa25b2dab4a5d2908b2780f16.html)
**Source:** Open Source Weekly (The New Stack)
Observability platform migrations are rarely simple. You’re still balancing risk (don’t break on-call), scope (don’t try to move everything at

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Programmez">

### 40. `FR` [Dumper vos disquettes : KryoFlux et les alternatives](data/articles/c8320933b25e4987061d9bb4c6acfbe9.html)
**Source:** Programmez
Les disquettes sont fragiles, surtout les 5 ¼ et les 8’’, et on peut rapidement les altérer, voire les rendre illisibles. Elles sont sensibles à l’humidité, à la chaleur, aux torsions, si on touche trop fortement le disque magnétique, aux aimants, etc. Bref, la question se pose : récupérer le contenu des disquettes pour le sauvegarder, voire recréer de nouvelles disquettes ?
Il existe des outils matériels pour connecter les vieux lecteurs, lire les disquettes et récupérer puis sauvegarder les fichiers contenus, quand cela est possible. Si la disquette est trop endommagée, pas de miracle. Dans le cas contraire, on pourrait sans doute faire quelque chose. Un des outils les plus connus est la carte KryoFlux (hardware + logiciel).
Le principe est très simple : lire le bas niveau des disquettes pour récupérer le maximum de données. KryoFlux est la partie matérielle. Seule, elle ne permet pas grand-chose. Il faut la coupler avec un logiciel dédié. Attention, il ne faut pas confondre ces cartes avec les émulateurs de disquettes / disques durs. On connecte !
KryoFlux, ou toute autre alternative, permet de connecter un lecteur via le connecteur standard 34 broches que l’on retrouve dans de nombreux lecteurs 5 ¼ et 3 ½ ; certains lecteurs 8’’ peuvent également fonctionner. L’alimentation est fournie par la carte, mais vous pouvez aussi alimenter le lecteur par une alimentation externe. Le tout est connecté à un PC ou un Mac via l’USB.
Côté PC, il faut utiliser un logiciel spécifique pour lire / écrire (si la fonction est disponible) les données de la disquette. Un disque magnétique en mauvais état sera difficile à récupérer, donc il y aura moins de chances de créer une image exploitable. Il faut aussi se méfier des disquettes protégées par logiciel ou par matériel. Là encore, il est difficile de faire sauter ces protections. C’est notamment le cas pour certains modèles Heathkit / Zenith, certains Apricot ou encore les disquettes Prologue.
Vérifiez aussi que le matériel choisi supporte le format des disquettes à récupérer. La liste des formats n’est pas identique selon les cartes. Vu le prix de certaines cartes, mieux vaut vérifier.
L’outil KryoFlux Host est disponible sur macOS, Windows et AmigaOS 4. Quel que soit l’outil, veillez à utiliser les dernières versions pour corriger les bugs et bénéficier des nouvelles fonctionnalités. Idem pour les autres cartes. Les logiciels sont a minima disponibles sur Windows.
Le logiciel est l’élément crucial pour pouvoir dumper convenablement les disquettes, générer les fichiers bruts (raw), puis recréer les disquettes.
Les +
- La référence du marché
- La qualité du logiciel Les –
- Le prix
- La complexité du paramétrage
- Des formats pas toujours supportés
ADF-COPY
Cette petite carte est basée sur la Teensy 3.2. Elle permet de lire, récupérer et écrire des disquettes Amiga. Il est possible de mettre à niveau la carte en flashant le firmware du MCU. Nous avons eu l’occasion de la tester. Elle se dédie aux machines Amiga et elle remplit plutôt bien son rôle.
Les +
- Le prix
- Relativement simple à utiliser
Les –
- Dédiée à l’Amiga
SUPERCARD PRO
La SuperCard Pro est une des références du marché. Elle est vendue au même prix qu’une KryoFlux, ou un peu moins chère. Elle supporte les lecteurs 5 ¼ et 3 ½ ainsi que de multiples ordinateurs. La mise en place est rapide : câble USB, alimentation du lecteur, installation du logiciel, connexion du lecteur de disquette. Le logiciel est plutôt pratique et rapide à utiliser. On apprécie beaucoup la rapidité de prise en main et les diverses configurations selon le format de la disquette. Nous avons tout de même eu des soucis avec certains lecteurs 3 ½ qui fonctionnaient sur les anciennes machines mais pas avec la SuperCard Pro. Nous avons aussi bricolé un câble d’alimentation carte–lecteur. Le gros manque de la carte est l’absence de connecteur Molex.
Utiliser l’outil HxC Floppy Emulator pour les images brutes et les convertir… ou inversement plutôt.
Les +

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Programmez">

### 41. `FR` [Bun 1.3.10 : nouveau REPL, support de TC39, Windows ARM64](data/articles/3903b5483f1e1097f83f951b04c420e8.html)
**Source:** Programmez
Bun est disponible en version 1.3.10. Cette mise à jour fixe 155 bugs et problèmes et propose plusieurs nouveautés très intéressantes :
- REPL a été réécrit en Zig et est disponible par défaut sans paquets optionnels. Il propose de nombreuses fonctionnalités : copie vers le clipboard, import ESM, colorisation du code JS, historique persistant, etc.
- commande bun build --compile --target=browser pour produire tous les fichiers HTML avec JavaScript, CSS et tous les éléments nécessaires. Disponible en CLI et en API
- support des décorateurs TC36 Standard ES
- évenement boucle plus rapide sur macOS et Linux
- support natif de Windows ARM64
- flag --retry pour bun test
- les certificats root sont à jour : NSS 3.119. - mise à jour du moteur JavaScriptCore
La très longue note de version : https://bun.com/blog/bun-v1.3.10 Catégorie actualité: Outils Bun Image actualité AMP:

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="BetaPage">

### 42. `EN` [GetMusicTools](data/articles/db7406bfcf9a045efb15e07efa9eeee4.html)
**Source:** BetaPage
GetMusicTools

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Programmez">

### 43. `FR` [Bun : en attendant la 1.3.10, plus de 387 bugs remontés](data/articles/ad5545f05419b64df9318acc6b0a88ab.html)
**Source:** Programmez
Si vous utilisez Bun, nous avez remarqué la succession des mises à jour : 4 entre mi-janvier et mi-février... Ces mises à jour ciblent 3 actions :
- correction des bugs et les requêtes ouvertes
- amélioration des performances - ajout des fonctionnalités
Plus 387 requêtes et bugs ont été référencées pour les version 1.3.6, 1.3.7, 1.3.8 et 1.3.9 et 167 bugs et problèmes ont été fixés. Cette activité montre le dynamisme de la communauté mais aussi une certaine instabilité de l'outil. Dans le même temps, les équipes ajoutent des fonctionnalités et améliorent les performances par exemple sur markdown, RegExp, un paerser CommonMark écrit en Zig, nettes améliorations des performances de Bufffer.from(array) et de async/await.
Si vous voulez en savoir plus : https://bun.com/blog Catégorie actualité: Outils Bun Image actualité AMP:

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Programmez">

### 44. `FR` [Les craintes de responsables de Microsoft sur le recrutement des profils débutants face à l'IA](data/articles/93c977305eac6ae7da0449e88a5bfe9d.html)
**Source:** Programmez
Deux responsables de Microsoft, dont Mark Russinovich (CTO d'Azure), alertent sur la baisse des recrutements et des emplois de développeurs débutants face à l'IA. Ils ont publié un article intitulé "Redefining the software engineering profession for AI". Dès la 1ere ligne, les deux auteurs précisent : "Sans l’embauche de développeurs en début de carrière, le vivier de talents de la profession s’effondrera et les organisations seront confrontées à un avenir sans la prochaine génération d’ingénieurs expérimentés.".
Cette publication n'est que l'une des dernières études sur le sujet. En janvier dernier, nous avions parlé d'une étude IDC sur les conséquences de l'IA sur les profils juniors. Cette prise de position contraste avec certaines positions de Microsoft sur l'IA et particulièrement sur l'usage massif de la génération de code au détriment des développeurs. L'IA générative, les agents ont bouleversé le marché du développement et la manière de coder. Et si le développeur senior voit en l'IA une aide, elle peut pénaliser le profil junior. "Il en résulte une nouvelle structure d'incitation : recruter des seniors et automatiser les juniors. Or, sans recrutement de développeurs juniors, le vivier de talents de la profession s'effondre et les entreprises se retrouvent confrontées à un avenir sans la prochaine génération d'ingénieurs expérimentés." indique l'étude. Il faut continuer à recruter des développeurs débutants / juniors, élargir le mentorat et mieux former. Le projet Societas de Microsoft est un agent Office, 7 développeurs à temps partiel l'ont développé en 10 semaines et produit 110 000 lignes de codes dont 98 % ont été générées par une IA. Conclusion : "Le travail humain est passé de la création à la direction : spécification des objectifs, vérification de l’exactitude et intégration du résultat de l’agent dans un système cohérent."
Mais l'IA peut être complexe si les développeurs utilisent des agents, des LLM, du MCP, des protocoles de synchronisation, etc. Là, il faut une expérience et une maîtrise pour mettre en oeuvre l'environnement et guider les agents. Ce n'est pas magique. Les auteurs pointent du doigt de multiples exemples où l'agent a fait le travail mais le code produit est de mauvaises qualités, avec des algos non optimisés, du code inutile, etc. "Bien que les agents d'IA progressent rapidement, l'expertise humaine demeure essentielle au développement logiciel. La programmation n'est pas du génie logiciel. Même les systèmes les plus fiables ne peuvent remplacer le jugement, la créativité et l'adaptabilité nécessaires pour gérer l'incertitude, prendre des décisions complexes et garantir la sécurité." explique l'étude. Pour les auteurs, l'IA actuelle favoriserait plutôt les profils seniors : "L'IA générative se manifeste actuellement comme un changement technologique favorisant l'ancienneté : elle valorise de manière disproportionnée les ingénieurs possédant déjà un sens aigu des systèmes, comme le goût pour l'architecture, la capacité à déboguer en situation d'incertitude et l'intuition opérationnelle. Les développeurs en chef qui ne disposent pas d'une solide expertise des systèmes auront du mal à contribuer dans un environnement piloté par l'IA."
Ils s'appuient sur l'impact de GPT-4 sur le recrutement des 22-25 ans dans les secteurs exposés à l'IA avec une baisse de 13 % des emplois. Une des pistes sera de déployer le mentorat pour aider et former les juniors. Cette approche transformera l'organisation avec le Tech lead au sommet qui serait rejoint par le mentor pour participer à l'encadrement des juniors. "Les tuteurs devraient pouvoir consulter les échanges entre les apprenants afin de suivre leurs progrès, de leur fournir un accompagnement ciblé et de combler leurs lacunes. Ainsi, les assistants ne se contentent pas de soutenir la génération de code, mais favorisent également l'apprentissage et un mentorat efficace." En conclusion : "L'avenir du génie logiciel ne dépendra pas de la quantité de code que l'IA peut générer, mais de la capacité des humains à apprendre, raisonner et évoluer aux côtés de ces systèmes. Investir dans la formation des jeunes développeurs par un mentorat ciblé garantit que l'expertise d'aujourd'hui devienne l'intuition de demain. En conciliant automatisation et apprentissage, nous préservons la vitalité du métier d'ingénieur logiciel."
Source : https://dl.acm.org/doi/10.1145/3779312 Catégorie actualité: Carrière junior Image actualité AMP:

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Programmez">

### 45. `FR` [Amstrad CPC : l'émulateur XCPC revient](data/articles/8666aacaee357ac36501f2250ff6297c.html)
**Source:** Programmez
L'émulateur Xcpc est écrit en C et C++. Il émule les modèles 464, 664 et 6128, mais pas la GX4000. Il est portable et exécutable sur les systèmes POSIX avec X11. Il ne supporte pas macOS et Windows. Son développeur, Olivier Poncet, annonce que la nouvelle version intègre OpenGL pour simuler les écrans CRT avec les scanlines, vignettage, etc. Le GitHub sera bientôt mis à jour. Site : https://github.com/ponceto/xcpc-emulator Catégorie actualité: Technosaures Amstrad Image actualité AMP:

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Programmez">

### 46. `FR` [Cobol : la fausse révolution de Claude Code sur Cobol et IBM chute en bourse](data/articles/f28f68d84e6e4c1784aa4d5d85eae393.html)
**Source:** Programmez
Il suffit d'un post de Anthropic à propos de Claude Code pour semer une panique, animée par certains médias grand public et IT ainsi que par des de supposés experts. Et IBM chute lourdement en bourse : -13 %. Essayons d'y voir un peu plus clair sur cette panique qui n'en est pas une. Le post en question est « l'IA aide à casser le coût de la modernisation de COBOL ». COBOL est un langage historique qui existe depuis plus de 65 ans. Il est omniprésent dans les transactions bancaires. Par exemple, 95 % des transactions des distributeurs (DAB) sont gérées par des applications COBOL (et plus largement sur mainframe). Ce chiffre concerne les États-Unis, mais c'est pareil partout dans le monde ou presque. Des centaines de milliards de lignes de code COBOL sont exécutées chaque jour et des millions de nouvelles lignes sont créées et maintenues chaque année. Bref, toute une partie du monde financier et des administrations repose sur COBOL et, au-delà, sur l'ensemble des services mainframe.
Depuis 30 ans, on nous parle de migration, de replatforming, de modernisation. COBOL est un langage relativement simple, avec une syntaxe lisible et standardisée. Claude Code veut simplifier et aider à la modernisation du COBOL :
1 / générer des cartes de dépendances
2 / générer les flux que personne, ou presque, ne connaît
3 / identifier les risques qu'une équipe IT mettrait des semaines ou des mois à identifier
4 / fournir les éléments nécessaires à la décision
Oui l'IA est une aide mais n'est pas une solution miracle
Selon Claude, l'IA peut aider à moderniser en quelques mois des ensembles COBOL alors qu'il faudrait des années pour le faire. Claude Code a l'ambition de lire et d'introspecter le code COBOL et sa structure, d’identifier les points d'entrée, de tracer l'exécution, de comprendre les sous-routines, de générer les flux de données, de détailler les dépendances, etc. Une des difficultés de la modernisation est de cartographier les dépendances et les imbrications qu'elles génèrent.
« Ce sont précisément ces dépendances qui rendent la modernisation de COBOL risquée, d'où l'importance de la découverte automatisée : elle permet de détecter ces relations cachées avant qu'elles ne causent des problèmes lors de la migration », explique Claude.
C'est en retraçant le parcours complet des données qu'un outil comme Claude Code peut générer les diagrammes, les descriptions des pipelines, bref, définir le modèle de données.
Après cette phase préparatoire, l'IA peut évaluer composant par composant ce qui est peut-être déplaçable et modernisable sans risque.
Mais Claude ne dit pas que l'IA agira seule et sans contrôle : bien au contraire. Il faut que les experts COBOL / mainframe soient là pour valider les étapes et la planification de la modernisation. Il faut garantir une cohérence, notamment réglementaire (qui est souvent très forte). Une feuille de route doit être générée et approuvée.
L'IA propose des priorités en fonction des risques, des dépendances et de la complexité qu'elle a identifiés lors de l'analyse. Votre équipe examine ces recommandations et décide des composants à moderniser en premier, en fonction de la valeur métier, du risque technique et des priorités organisationnelles. C'est également à ce moment que votre équipe définit l'architecture cible, les normes de codage et les exigences d'intégration des composants modernisés. Avant toute modernisation et migration de code, il faut que l'IA génère des tests pour vérifier que le nouveau code fonctionne exactement de la même manière, sans régression ni effets de bord.
« Des outils comme Claude Code peuvent automatiser une grande partie du travail d'exploration et d'analyse décrit, offrant ainsi à votre équipe la compréhension globale nécessaire pour planifier et exécuter les migrations en toute confiance.
Commencez par un composant ou un flux de travail unique, aux limites claires et d'une complexité modérée. Utilisez l'IA pour l'analyser et le documenter en détail, planifiez la modernisation avec vos ingénieurs, implémentez-la progressivement en effectuant des tests à chaque étape et validez-la avec soin. Cela renforcera la confiance de l'organisation et mettra en évidence les ajustements nécessaires à vos systèmes », explique le post officiel. Claude propose ainsi un playbook de modernisation.
En quelques heures, ce post d'Anthropic a suffi pour semer une panique boursière : IBM perdait 13 %. Certains ont annoncé la fin de COBOL, voire la fin d'IBM.
La bourse a réagi à cause du poids du mainframe pour IBM, mais cette panique ne devrait pas exister, car la modernisation de COBOL n'est ni nouvelle ni révolutionnaire. Des outils comme Claude Code peuvent aider à accélérer la modernisation et la migration du code COBOL, mais là encore, ce n'est pas une nouveauté.
Rappelons qu’IBM propose son propre outil IA de modernisation : watsonx Code Assistant for Z.
Ce que propose Claude Code n'est pas révolutionnaire, et les écueils de la modernisation ne sont pas levés : qualité de la migration, fonctionnement identique, connaissance des dépendances. Mais ce que Claude Code ne dit pas, c'est que seuls les codes COBOL sont pris en compte. Or, COBOL n'est qu'un élément de l'environnement mainframe. L'enjeu est aussi de savoir déprovisionner le mainframe.
Un média IT français, plutôt grand public, a même titré : « Claude a transformé la modernisation d'un langage zombie ! » COBOL n'est pas un langage zombie. Et contrairement aux affirmations que l'on peut lire, il y a toujours des développeurs COBOL formés chaque année. Source : https://claude.com/blog/how-ai-helps-break-cost-barrier-cobol-modernization Catégorie actualité: IA Claude Code, COBOL Image actualité AMP:

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 47. `EN` [Databases weren’t built for agent sprawl – SurrealDB wants to fix it](data/articles/c57caabcdf06f774babf64d4c1d7f3ea.html)
**Source:** Open Source Weekly (The New Stack)
AI agents don’t slot neatly into the way enterprise data stacks were designed. A typical agent needs transactional state (e.g.,

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Programmez">

### 48. `FR` [Python 3.16 : roadmap de mai 2026 à... octobre 2027](data/articles/fd4a22263766035bebc414621dc775de.html)
**Source:** Programmez
Python dévoile la roadmap complète de la future version 3.16 qui doit sortir dans 18 mois. 5 mai : début du développement
13 octobre : disponibilité de l'Alpha 1
Novembre 2026 - avril 2027 : les alphas 2 à 7
Fixation des fonctionnalités avec la bêta 1
4 mai 2017 : début de la phase bêta
Fin juillet 2027 : release candidate 1, la RC2 suivra dès août
5 octobre 2017 : disponibilité de la version
Python 3.16 recevra des bugfix tous les 2 mois durant 2 ans. Les patchs de sécurité jusqu'en octobre 2032. Catégorie actualité: Langages Python Image actualité AMP:

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="Programmez">

### 49. `FR` [Invent the future avec Arduino UNO Q : une compétition pour créer des IoT et des usages d'avenir](data/articles/71b176b8b040f176559d3a38a0bee1d0.html)
**Source:** Programmez
Arduino, Qualcomm, Hacker.io, Edge Impulse annoncent une grande compétition mondiale : Invent the future avec Arduino UNO Q et App Lab. L'objectif est d'explorer le potentiel de la nouvelle carte UNO Q sur de multiples usages (domotique, IoT, industie, automatisme, jeux, etc.). Les partenaires mettent en avant le double SoC de la carte, le nouvel environnement de développement AppLab et le support d'usages IA. 300 cartes UNO Q seront offertes pour développer votre idée ! La sélection des gagnant(e)s des cartes se fera sur le projet soumis. Les enregistrements sont ouverts depuis le 19 février. La soumission des projets fermera le 30 août. Le gagnant du Best in show pourra présenter son projet à la Maker Faire Rome 2026 et gagnera 3 000 $. Et il aura accès aux nouveautés avant les autres. Plusieurs catégories sont disponibles : robotique, IoT, jeux, automatisme à la maison, impact sociétal
Pour en savoir plus : https://www.hackster.io/contests/invent-the-future-with-arduino-uno-q-and-app-lab Catégorie actualité: Hardware Arduino Image actualité AMP:

</div>

<div class="article-item" data-lang="fr" data-category="opensource" data-source="LinuxFr">

### 50. `FR` [Emmabuntüs renforce l’accessibilité avec les versions Debian Édition 6 1.00 et 5 1.05](data/articles/fc80ec8c4d2be4bc555e4a33c560dfae.html)
**Source:** LinuxFr
Le collectif Emmabuntüs annonce deux publications récentes mettant fortement l’accent sur l’accessibilité numérique, fruit d’un travail mené en grande partie avec et par des bénévoles non-voyants et malvoyants, directement impliqués dans la conception, les tests et les améliorations ergonomiques de la distribution. lien nᵒ 1 : Le 15 décembre 2025, EmmaDE6 1.00 : une nouvelle version axée sur l’accessibilité !
lien nᵒ 2 : Le 25 janvier 2026, EmmaDE5 1.05 : mise à jour axée sur l’accessibilité !
lien nᵒ 3 : Stéphane, non-voyant et surd[év]oué de l’informatique
lien nᵒ 4 : Philippe, un espérantiste convaincu !
lien nᵒ 5 : Le numérique accessible à tous !
lien nᵒ 6 : Arrivée au Togo du conteneur Mutualiste Sans Frontières
lien nᵒ 7 : Contact La version Emmabuntüs Debian Édition 6 1.00, basée sur Debian 13 (Trixie) avec les environnements Xfce et LXQt, introduit de nombreuses améliorations destinées aux personnes malvoyantes ou non-voyantes : interface dédiée à l’accessibilité, synthèse vocale améliorée (espeak, MBROLA, Piper), profils Orca, support d’embosseuses Braille, intégration de LIOS (OCR), ainsi que divers scripts simplifiant la prise en main. Cette version est notamment destinée à des déploiements au Togo, en partenariat avec les associations françaises A.S.I YOVOTOGO, Mutualistes Sans Frontières et la FETAPH (Fédération Togolaise des Associations de Personnes Handicapées).
En parallèle, la version Emmabuntüs Debian Édition 5 1.05, basée sur Debian 12 (Bookworm) et disponible en 32 et 64 bits, bénéficie des mêmes avancées en matière d’accessibilité. Elle permet ainsi de poursuivre le reconditionnement d’ordinateurs plus anciens, tout en offrant une expérience utilisateur inclusive.
Ces deux versions illustrent l’engagement d’Emmabuntüs en faveur de l’inclusion numérique, du logiciel libre, du réemploi de matériel informatique, ainsi que la place centrale offerte à l’expertise d’usage apportée par ses bénévoles concernés par le handicap visuel.
Le projet reste ouvert aux contributions, notamment pour les tests d’accessibilité, la documentation et l’amélioration des outils destinés aux utilisateurs malvoyants ou non-voyants.
Fin mars, nous publierons une nouvelle version d’Emmabuntüs Debian Édition 6 1.01, plus légère et plus modulable, afin de permettre à chacun de choisir les logiciels dont il a réellement besoin. Nous recherchons des bénévoles pour participer aux tests de cette version.
Télécharger ce contenu au format EPUB : voir le flux Atom ouvrir dans le navigateur

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 51. `EN` [cURL’s Daniel Stenberg: AI slop is DDoSing open source](data/articles/3fe425cdf59880ebe157ce47f70c95a4.html)
**Source:** Open Source Weekly (The New Stack)
At FOSDEM 2026 in Brussels, Belgium, Daniel Stenberg, creator of the popular open source data transfer program, cURL, described AI as

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 52. `EN` [How to ground AI agents in accurate, context-rich data](data/articles/3e4de74fa44bda31eca5924e73e0c995.html)
**Source:** Open Source Weekly (The New Stack)
AI agents are all the rage in enterprises today. CEOs and CTOs want them brought into their businesses ASAP to

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 53. `EN` [Is open source in trouble?](data/articles/dd126795078c93f0bf8c1d9d923288ab.html)
**Source:** Open Source Weekly (The New Stack)
First, the bad. I would argue that current open-source practices and usage are unsustainable, or at the very least, there is

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 54. `EN` [pg_lake comes to Snowflake Postgres: What it means for open standards](data/articles/d95d6d2244d53e0a6976cfd6e5f85c00.html)
**Source:** Open Source Weekly (The New Stack)
The pg_lake extension, which was initially released to the open source community in November, is now natively available in Postgres,

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 55. `EN` [Open source USearch library jumpstarts ScyllaDB vector search](data/articles/d9bf553a6dabaa1174e40193cd2315f9.html)
**Source:** Open Source Weekly (The New Stack)
ScyllaDB recently added vector search capabilities underpinned by USearch, an open source clustering and vector search library. The addition of

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 56. `EN` [Why Kubernetes is retiring Ingress NGINX](data/articles/b52e6c30f88c377cc5be9acf7ee3089e.html)
**Source:** Open Source Weekly (The New Stack)
We warned you! Today, Ingress NGINX is still being used by 50% of Kubernetes users to manage incoming traffic, but it’s

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 57. `EN` [50 years ago, a young Bill Gates took on the ‘software pirates’](data/articles/0b9a1c55111f99e5c8438fffb57e1403.html)
**Source:** Open Source Weekly (The New Stack)
Just months after his 20th birthday, Bill Gates had already angered the programmer community. As the first home computers began

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 58. `EN` [Meet Gravitino, a geo-distributed, federated metadata lake](data/articles/b587da6367faa59faa1cef6ac81c88f7.html)
**Source:** Open Source Weekly (The New Stack)
In the new world of agentic AI, the discussion has revolved around data: governance, storage, and compute. But what about

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 59. `EN` [Drupal turns 25: From simple to complex — then simple again](data/articles/6251139ff8096436907fded4f6ed29ac.html)
**Source:** Open Source Weekly (The New Stack)
It’s rare that a web product lasts 25 years, given how fast the industry cycles through technologies. But this month

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 60. `EN` [Port of Context: The open source code mode](data/articles/0a6b57e6c6dc56ee4525fbf1c3631df3.html)
**Source:** Open Source Weekly (The New Stack)
The Model Context Protocol (MCP) has quickly become a well-adopted standard for connecting large language model (LLM)-based AI agents with

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 61. `EN` [Docker logs got you down? Give this tool a try](data/articles/c85ab89146e0a45556db3d6573853f1a.html)
**Source:** Open Source Weekly (The New Stack)
One of the more challenging aspects of using Docker containers is troubleshooting. Unless you are a master of the art,

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 62. `EN` [Chainguard to eliminate FUD around Chainguard OS](data/articles/4514285d2557496e29d5025ecd746b08.html)
**Source:** Open Source Weekly (The New Stack)
Today, , which provides secure, production-ready builds of open source software, has introduced a customer-led steering committee for its Chainguard

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 63. `EN` [Drowning in AI slop, cURL ends bug bounties](data/articles/677fb9524b9a0f30889f7af18b106581.html)
**Source:** Open Source Weekly (The New Stack)
Enough is enough. Daniel Stenberg, lead developer and founder of cURL, the popular, open source internet file transfer protocol, is

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 64. `EN` [5 Tech Predictions for 2026: From AI Inference to Kubernetes](data/articles/03845f410432e158de1de82d3248aedb.html)
**Source:** Open Source Weekly (The New Stack)
Coming off a great holiday break, full of eggnog-induced reflection and an eagerness to get this year rolling, I couldn’t

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 65. `EN` [CNCF Dragonfly Speeds Container, Model Sharing with P2P](data/articles/55f69183faf19f4ef7d80e7fdb24568b.html)
**Source:** Open Source Weekly (The New Stack)
The Dragonfly project, an open source peer-to-peer image and file distribution system, has graduated from the ‘s program for incubating

</div>

<div class="article-item" data-lang="en" data-category="opensource" data-source="Open Source Weekly (The New Stack)">

### 66. `EN` [StyleX vs. Tailwind: Meta’s Take on CSS-in-JS Maintainability](data/articles/18ffbe2297343bf9e48384ed7c621a5e.html)
**Source:** Open Source Weekly (The New Stack)
Tailwind has been in the news lately, as it struggles to keep its doors open in the AI era. But

</div>

</section>

---

<section id="products" data-category="products">

## Products & Innovation / Produits & Innovation

<div class="article-item" data-lang="en" data-category="products" data-source="Hacker News Show">

### 1. `EN` [Show HN: A seedable stream shuffler modeled as a roundabout network (Python)](data/articles/850f346789f21425ba89a12b9e533420.html)
**Source:** Hacker News Show
You enter in order, but after a few loops and exits, your neighbors are no longer your neighbors. It’s a tunable Python package for reproducible mixing, with benchmark + determinism tests. URL: https://news.ycombinator.com/item?id=47192733
Points: 1
# : 0

</div>

<div class="article-item" data-lang="fr" data-category="products" data-source="Les Numeriques">

### 2. `FR` [Actualité : Surfshark One à -86 % : un antivirus pas cher pour étudiants](data/articles/63d837a35c702a46337962dc7520799e.html)
**Source:** Les Numeriques
Pour un étudiant, l'ordinateur et le smartphone sont bien plus que de simples gadgets. Ce sont des outils de travail essentiels pour réviser, rendre des mémoires et rester connecté. Malheureusement, entre les frais de scolarité et le coût de la vie, le budget alloué à la cybersécurité passe souvent au second plan, laissant la porte ouverte aux malwar...

</div>

</section>

---


---

<div align="center">

### Connect With Me

[![GitHub Profile](https://img.shields.io/badge/GitHub-ThePhoenixAgency-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency) [![Repository](https://img.shields.io/badge/Source-Repo-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse) [![Reader](https://img.shields.io/badge/Live-Reader-blueviolet?style=for-the-badge&logo=readthedocs)](https://thephoenixagency.github.io/AI-Pulse/app.html) [![Documentation](https://img.shields.io/badge/Documentation-Technical-blue?style=for-the-badge&logo=googledocs)](https://github.com/ThePhoenixAgency/AI-Pulse/blob/main/database/SUPABASE_MIGRATION.md) [![Support](https://img.shields.io/badge/Support-Issues-181717?style=for-the-badge&logo=github)](https://github.com/ThePhoenixAgency/AI-Pulse/issues)

---

<sub>*Powered by AI-Pulse | Built with love by ThePhoenixAgency*</sub>

</div>
