# DESIGN BRIEF (source of truth)

- Lead ID: `9e670a8c792047968a98eaadbe98860a`
- Schema: `genesis_brief/v1`
- Brief hash: `a1c19ff33787c658`
- Generated: `2026-09-18T11:30:11+00:00`

Agents MUST follow this brief. If a change contradicts it, update this file
and note why in TASKS.md before shipping.

## Contact
- Name: Cesar Salem
- Email: cesar@thelamedia.com
- Phone: (none)
- Company: TMG

## Existing site
- Has site: yes
- URL: https://tmg.agency/
- Preference: `scratch`

## Brand
- Brand name: TMG
- Tagline: Elite Systems for the Most Demanding Campaigns

### About
TMG Logo
TMG
Get Started



Elite
Systems
for
the
Most
Demanding
Campaigns
Advertising systems connected by intelligence infrastructure

Scroll
The New Standard
We believe great advertising is built on judgment, data, and discipline.
In an era of noise, precision is the only currency. TMG combines strategy, creative, media buying, analytics, automation, and intelligence backbones to help brands spend smarter and grow with confidence.

Our platforms power AI-driven marketing intelligence that transforms brands across healthcare, finance, technology, real estate, and energy.
Our Platforms
Scroll to explore
/01
Velocity
Paid media deployment and optimization support for approved campaign plans: budget movement, bid adjustments, creative rotation, and performance feedback.

Media Deployment
Budget Movement
Performance Feedback
/02
Catalyst
End-to-end marketing operations automation, from lead nurturing and customer journey orchestration to content distribution and attribution modeling.

Ops Automation
Journey Orchestration
Attribution
/03
Genesis
Creative and campaign support layer for turning strategy into structured briefs, tests, variants, reporting, and repeatable execution.

Creative Ops
Testing
Execution
/04
Oracle
Market and performance intelligence for reading customer behavior, competitive signals, and campaign data before making the next media decision.

Market Signals
Forecasting
Decision Support
Results That
Redefine Markets
Our advertising strategies, paired with our intelligence platform, help clients grow across healthcare, finance, technology, real estate, and energy. These are real results from real clients.

0+
Clients Served
Companies trusting TMG to drive growth

0+
Campaigns Launched
Data-driven campaigns across industries

0x
Avg ROAS
Average return on ad spend across clients

0%
Cost Reduction
Average decrease in customer acquisition cost

0+
Industries
Healthcare, finance, real estate, energy, and more

0%
Lead Growth
Best-in-class result across clients

Trusted by 600+ companies worldwide

Forcepoint
Jecobra Aviation
Auntie Anne's
Qualico
Novak Capital
Advanced Medical Trials
Re:start
The Previvor
Thryve Care
B&E Resources
What our clients say about TMG
Medical Trials Company
Tony, CEO

"TMG developed a marketing campaign and a scheduling process for acquiring patients that was so successful, we ended up as the top producing site in the country for our first clinical trial. Many studies later, and not only are their efforts still producing stellar results in an ever changing landscape, but they have the same dedication and focus on results that an equity owner would possess. I can't say enough good things about TMG. Don't miss an opportunity to work with their amazing talent."
FlowTex Energy
Beau, President

"After launching on September 13, TMG generated over 450 qualified leads within 6 weeks and converted 11 into investing partners, resulting in nearly $1,000,000 in new funding. The total cost was substantially less than our prior agency and delivered an exceptionally higher return on investment."
Fintech Startup
Carl, CMO

"We engaged 5 different digital marketing agencies whom promised a lot, but failed to deliver. By the end of my first meeting with TMG, I was impressed with their depth of knowledge and subject matter expertise. TMG's approach to business can be expressed in 2 words, trusted partnership. We were absolutely delighted with the business results TMG helped us achieve."
The Previvor Foundation
Allyn, Founder

"TMG created an intuitive, professional platform that revolutionized how we serve young women affected by breast cancer. Their work helped increase fundraising, strengthen our professional presence, and expand our reach to support more women who need these resources."
Schedule Consultation
→
View Case Studies
→
© 2026 Thela Media Group
Advertising strategy, media, creative, and measurement built for measurable growth.
partners@tmg.agency
SERVICES
AI-Powered Strategy
Marketing Intelligence
Creative Development
Brand Architecture
Performance Media
Marketing Attribution
Digital Transformation
Content Strategy
Customer Analytics
Marketing Automation
Fractional CMO Services
INDUSTRIES
Healthcare & Life Sciences
Financial Services
Technology & SaaS
Real Estate
Energy & Utilities
Retail & E-Commerce
Manufacturing
Professional Services
Education
Non-Profit
CAPABILITIES
AI Infrastructure
Machine Learning Models
Predictive Analytics
Data Science
CRM Integration
API Development
Real-Time Optimization
A/B Testing Platform
RESOURCES
Case Studies
Industry Insights
Growth Framework
Marketing Blog
Privacy Policy
Terms of Service
Contact Us

## Visual references
_No lead refs — harness selected past approved looks (layout/vibe only; brand/copy must stay this lead's)._
- Superpower: https://superpower.com
- Reset Wellness: https://resetwellness.framer.website
1. https://superpower.com
2. https://resetwellness.framer.website

## Style
- Chips: classic, modern, playful
- Notes: (none)

## Colors
- Mode: `designer_choose`
- Palette: (designer choose)

## Scope
- Mode: `multipage`
- Pages (existing_site_nav): /, /contact, /platforms/velocity-ai, /platforms/catalyst, /platforms/genesis, /platforms/oracle, /case-studies, /services/ai-powered-strategy, /services/marketing-intelligence, /services/creative-development, /services/brand-architecture, /services/performance-media, /services/marketing-attribution, /services/digital-transformation, /services/content-strategy, /services/customer-analytics

## LOOK vs CONTENT (do not mix)
- **LOOK (visual only):** reference_urls / look library. Layout, type, spacing, motion, photography *style*. Not IA, not copy.
- **CONTENT (facts only):** this brief + existing_site.url. Name, copy, services, prices, cities, phone, email, testimonials.
- NEVER copy prices, memberships, cities, or service lists from a visual reference (no Casa $199, no Bay Area unless this brief says so).
- NEVER invent star ratings, review counts, “EST. YEAR”, customer counts, or other stats unless they appear in this brief or the current site.
- If they have a current site: scrape/analyze THAT url for copy/photos/nav; visual refs are not the content source.

## Product constraints (Genesis)
- Factory stack: latest pins in FACTORY STACK STANDARD (Next 15.x, React 19, TW v4, GSAP, Sentry env-ready)
- Vercel: `vercel --prod --yes --name` from `.genesis_vercel.json` (brand slug). Do not accept a random `*-murex-six` slug.
- Deploy to Vercel; report DEPLOY_URL and GITHUB_URL
- Personalized to this brief — no generic template look
- analyze_reference on LOOK urls for design; analyze existing_site for content when present
