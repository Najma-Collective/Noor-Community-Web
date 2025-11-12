


An Implementation-Ready Technical & Content Specification

TO: The Noor Community Project Team & Development Partners
FROM: Lead Digital Strategist & UX Analyst
SUBJECT: Enhanced Website & Content Architecture Blueprint (v2.0)
DATE:

Executive Overview: The Enhanced Digital Blueprint (v2.0)

This document is the definitive and final implementation-ready blueprint for the new Noor Community website. It supersedes all previous versions.
The initial "Website Blueprint for Noor Community" provided a robust and mission-aligned content and information architecture.1 The subsequent "Evaluation of the Noor Community Website Blueprint (2025)" provided a critical layer of technical, accessibility, and conversion-focused enhancements required to elevate the site to a world-class standard.2
This document (v2.0) systematically merges the two. It integrates every mandate from the Evaluation 2 directly into the original Blueprint 1 framework. This unified specification is designed to be handed directly to the design, development, and content teams, serving as the single source of truth for implementation.
The enhancements herein are not suggestions; they are project requirements designed to ensure the final website is intuitive, inclusive, technically performant, and optimized to achieve our three core conversion goals: Student Applications, Volunteer Recruitment, and Donor Support.

Part A: Final Information Architecture & Sitemap

This section details the final, enhanced sitemap and the architectural rules governing navigation and content discoverability, based on the synthesis of the original blueprint 1 and the evaluation's recommendations.2

A.1: The Strategic Sitemap (Revised)

The core sitemap from the original blueprint remains the strategic foundation.1 The topic-based navigation (About Us, Our Programmes, Our Impact) is confirmed as a best practice, aligning with usability research that advises against organizing sites by audience segment alone.2 The evaluation affirmed this structure avoids the common "pitfalls of audience-based navigation".2
The following structure is final and includes critical revisions for discoverability:
Primary Navigation (Global Header)
Home
About Us
Our Story & Mission
Our Approach (The Noor Pedagogy)
Our Team
Our Partners
Our Programmes
Programme Overview
General & Business English
English for Academic Purposes (EAP)
Skills & Exam Preparation
Our Impact
Impact & Theory of Change
Student Stories
Stories (Blog/News)
Join Us
For Students (Apply)
For Volunteers
Global Call-to-Action (Header Button)
Donate (Persistent, high-visibility, visually distinct)
Top Utility Navigation (New Requirement)
This new navigation bar is mandated by the evaluation to solve the discoverability critique.2
Contact Us
]
Footer Navigation
Column 1 (Mission): Abbreviated Mission Statement 1
Column 2 (Explore): About Us, Our Programmes, Our Impact
Column 3 (Act): Apply, Volunteer, Contact Us
Column 4 (Trust): FAQ, Financials & Transparency, Social Media Icons
Sub-Footer: Copyright, Privacy Policy

A.2: Architectural Mandates

The following architectural rules, derived from the evaluation 2, must be implemented by the development team.
Mandate 1: "Contact Us" Visibility: The evaluation noted a potential concern regarding the findability of Contact Us, which was only listed in the footer.2 Given the global nature of the audience, this is insufficient. Therefore, the Contact Us link must be added to a new "Top Utility Navigation" in the header, in addition to its place in the footer, to ensure it is "easily accessible" to any user at any time.2
Mandate 2: Content Cross-linking Strategy: The evaluation warned against the Stories (blog) section becoming a "standalone section" or content silo.2 This is a critical mandate for enhancing user journeys and content richness.
Implementation: All content-managed pages must support a "Related Stories" component.
Examples: Our Programmes pages should be programmatically and editorially cross-linked to relevant Student Stories from that program. Our Impact pages must link to stories that provide narrative proof of the data. Join Us > For Volunteers should link to "Volunteer Spotlight" stories. This integration is non-negotiable for facilitating "holistic exploration" and enriching all areas of the site.2
Mandate 3: Task-Focused Navigation: The primary navigation labels (e.g., Our Programmes, Our Impact) are confirmed as task-focused and must not be changed to audience labels (e.g., "For Students").2 The homepage triptych 1 will serve the audience-funneling-shortcut role, while the main navigation remains topical, aligning with NNG guidelines for usability.2
Mandate 4: Pre-Launch IA Validation: The evaluation mandates that the sitemap, while logically organized, must be validated with real users before full development to "prevent costly navigation revisions later".2
Action Item: The project team must conduct remote tree-testing exercises (e.g., using Optimal Workshop) with a small, diverse user sample.
Test Scenarios: Users will be given tasks such as: "Where would you go to find out if you are eligible to apply?", "Where would you find information to trust the organization with your money?", "Where would you go to offer your time as a teacher?" The results must be used to refine labels if testers hesitate or misclick.2

Part B: Global Design, UX, and Technical Standards

This section defines the sitewide technical and design standards, merging the original global elements 1 with the extensive technical mandates from the evaluation.2 These are the foundational rules for the design and development team.

B.1: Global Elements (Header & Footer) - Enhanced

Global Header:
Component: A "sticky" global header that remains visible on scroll is confirmed.1
Layout: The layout will be: Logo (far left), Primary Navigation (center), Top Utility Nav (above primary nav; see A.1), and the Donate Button (far right).
Donate Button: This button must be visually distinct. It will use the high-contrast "Accent (Action)" color (see B.2) to make it a persistent, low-pressure invitation, aligning with industry best practices for nonprofit conversion.2
Accessibility Mandate (WCAG 2.2): The sticky header implementation is a high-risk accessibility item.2 It must be implemented to meet WCAG 2.2 Success Criterion 2.4.11 (Focus Not Obscured).2 When a user tabs to a link or element, the browser's focus indicator must not be hidden behind the sticky header.2 The header's height must be compact to minimize content obscuration.2
Mobile Behavior: On small screens, the header will collapse. The Primary and Utility navigation will be consolidated into a single "hamburger" menu icon. The Logo and a Donate icon must remain visible.2 A "hide-on-scroll-down, reveal-on-scroll-up" behavior is recommended to preserve screen real estate.2 A persistent "Donate Now" bar at the bottom of the screen may also be A/B tested post-launch as a strategy to maximize mobile conversion.2
Global Footer:
Layout: The 4-column layout (Mission, Explore, Act, Trust) is confirmed.1
Links: The inclusion of Contact Us, FAQ, and Financials & Transparency in the footer is validated as a critical trust-building and usability feature.2

B.2: Visual Identity & Brand Guidelines

This section defines the visual standards mandated by the evaluation 2 to convey the brand's dual tone: Credible/Professional + Hopeful/Inspiring.2
Table B.2.1: Typographic Standards
The evaluation strongly recommends a font pairing that balances authority and modernity: a Serif for headings (conveying trust and an academic feel) and a Sans-serif for body text (ensuring clarity and on-screen readability).2

Element
Font Family (Recommended)
Font Weight
Desktop Size (Base)
Mobile Size (Base)
Line Height
H1 (Page Hero)
Crimson Text (or similar Serif) 2
Bold (700)
$36-40\text{px}$ 2
$28-32\text{px}$
$1.2$
H2 (Section Head)
Crimson Text (or similar Serif)
Bold (700)
$28-32\text{px}$ 2
$24-28\text{px}$
$1.3$
H3 (Card Title)
Open Sans (or similar Sans-serif) 2
Semi-Bold (600)
$20-24\text{px}$
$18-20\text{px}$
$1.4$
H4 (Sub-head)
Open Sans (or similar Sans-serif)
Semi-Bold (600)
$18-20\text{px}$
$16-18\text{px}$
$1.4$
Body (Paragraph)
Open Sans (or similar Sans-serif)
Regular (400)
$16-18\text{px}$ 2
$16\text{px}$ 2
$1.6$ 2
Caption/Utility
Open Sans (or similar Sans-serif)
Regular (400)
$14\text{px}$
$14\text{px}$
$1.5$




*   **Implementation:** All font sizes **must** use responsive units (e.g., `rem`, `em`, or `clamp()`) to ensure scalability and accessibility for users who zoom text. The base body text size **must be no smaller than 16px** to ensure legibility.


Table B.2.2: Color Palette & Usage
The evaluation mandates a strategic palette where color is used to signal trust, growth, and—most importantly—a single, unambiguous conversion action.2

Role
Color (Recommended)
HEX (Example)
WCAG Contrast
Usage Mandate (Non-Negotiable)
Primary (Trust)
Deep Blue
#0A2A4E
$4.5:1+$ w/ White
Headers, Footers, H1/H2 text, Primary (non-Donate) buttons. Conveys trust, stability, and intelligence, aligning with the educational mission.2
Secondary (Growth)
Teal or Green
#008080
$4.5:1+$ w/ White
Secondary highlights, icons, quote borders, section background breaks (e.g., the homepage Impact Stats section 2). Evokes growth and hope.2
Accent (Action)
Bright Orange/Red
#FF6700
$3:1+$ w/ White
RESERVED for Donate buttons ONLY. Must be the most vibrant, eye-catching color on the site to create urgency and draw attention to the primary conversion.2
Neutral (Light)
White / Off-White
#FFFFFF
N/A
Main page content backgrounds for maximum readability and ample whitespace.
Neutral (Dark)
Dark Grey
#212121
$4.5:1+$ w/ White
All body text. (Dark grey is often preferred over pure black for on-screen reading).

Visual Hierarchy Mandate: Hierarchy will be established through size (Table B.2.1), color (Table B.2.2), and generous whitespace. All interactive elements (links, buttons, cards) must have a consistent and obvious hover/focus state so users recognize them as links.2

B.3: Global Accessibility Mandates (WCAG 2.2 AA)

This is a foundational, non-negotiable set of technical requirements derived from the evaluation.2 The site must be built to comply with WCAG 2.2 Level AA. This is not only an ethical imperative for an inclusive educational organization but also an emerging legal necessity in many jurisdictions.2 Achieving compliance expands the site's reach and improves the "curb cut effect" for all users.2
Table B.3.1: WCAG 2.2 AA Core QA Checklist

Criterion
Requirement
WCAG Ref
Implementation Mandate
Color Contrast
$4.5:1$ (Normal Text), $3:1$ (Large Text)
1.4.3
All text/background combinations must be checked.2 Use the palette in B.2.
Keyboard Navigation
All functionality operable via keyboard. No keyboard traps.
2.1.1, 2.1.2
Manually test every link, button, form, and modal. Ensure pop-ups can be exited.2
Focus Visible
Focus indicator must be clear and high-contrast.
2.4.7, 2.4.11
Implement a custom, high-contrast focus outline (e.g., a 2px blue outline).2
Focus Not Obscured
Sticky headers/footers must not hide the focused element.
2.4.11 (WCAG 2.2)
Critical test case for the sticky header..2
Target Size
All tap/click targets must be adequately sized.
2.5.8 (WCAG 2.2)
Minimum $48 \times 48 \text{ CSS pixels}$ for all mobile tap targets to prevent mis-clicks.2
Form Labels
All form inputs must have a programmatically associated <label>.
1.3.1, 3.3.2
No placeholder-only labels. Use aria-label only when a visible label is impossible.2
Alt Text
All non-decorative images must have descriptive alt text.
1.1.1
Content editors must be trained to write this (e.g., "Two students smiling in an online class").2 Decorative images use alt="".2
Semantic HTML
Use proper HTML5 elements (<nav>, <main>, <footer>, <section>).
1.3.1
Headings must be in logical order (H1 -> H2 -> H3). Do not skip levels for styling.2
Text Spacing
Content must not break when user adjusts text spacing.
1.4.12 (WCAG 2.1)
Test by applying $1.5\times$ line spacing, $2\times$ letter spacing, etc., via browser tools.2
Accessible Media
All videos must have captions. All audio must have transcripts.
1.2.2, 1.2.1
.2
Accessible Auth
No CAPTCHA or memory-test barriers.
3.3.8 (WCAG 2.2)
For any future login (donor/volunteer portal), this must be observed.2

Accessibility of Interactive Components: All accordions, tabs, and filters (e.g., on Our Approach 1, FAQ 1) must be built accessibly. They must be fully keyboard-operable, use appropriate ARIA roles (role="button", aria-expanded, aria-controls), and clearly indicate open/closed states visually.2 Do not build custom components without referencing an accessible pattern (e.g., from Material Design or ARIA Authoring Practices).2
Linguistic Accessibility: For any Arabic text (names, quotes), the lang="ar" and dir="rtl" attributes must be used on the appropriate HTML element (e.g., <span>) to ensure correct screen reader pronunciation and rendering.2

B.4: Mobile Optimization & Performance Standards

A mobile-first approach is essential. The evaluation notes that over 50% of nonprofit web traffic comes from mobile, and as much as one-third of donations are completed on mobile.2 Performance is not an afterthought; it is a primary conversion-driver. A 3-second load time can lead to massive user abandonment.2
Mobile-First Design: Layouts must be designed for small screens first, then scaled up.
Stacking Logic: All multi-column layouts (e.g., homepage triptych 1, 2-column text/image 1) must stack vertically in a logical order.2 The homepage triptych cards must become large, 48px+ tappable blocks.2
Tap Targets: Re-stating the WCAG mandate: all links and buttons must have a minimum tap target size of $48 \times 48 \text{ CSS pixels}$ to reduce mis-clicks on touch screens.2
Performance Budget: The site must adhere to a strict performance budget 2:
Load Time: < 2.5 seconds (Largest Contentful Paint) on a fast 3G/slow 4G connection.2
Page Size: < 2 MB (total).
Technical Optimization Mandates 2:
Image Optimization: All images must be optimized.
Use modern formats (e.g., WebP) where supported.
Use responsive images (<picture> or srcset) to serve appropriately scaled images for different devices.
Implement lazy loading (loading="lazy") for all images below the fold (e.g., blog thumbnails, team photos).
Asset Minimization: All CSS and JavaScript files must be minified and combined.
Caching: Leverage browser caching and server-side caching.
CDN: A Content Delivery Network (CDN) must be used to ensure fast global load times, especially for an international audience.2

B.5: Content Strategy & Narrative Mandates

This section defines the global rules for content, based on the evaluation.2
Tone of Voice: The dual-tone (Credible + Hopeful) is confirmed.2 All copy must adhere to this. A content style guide should be created to ensure consistency.2
"De-Academized" Content: The "Accessible Translation" strategy (e.g., on the Our Approach page) was praised as an excellent method to build credibility while ensuring accessibility.2 This is a global content mandate. Any complex pedagogical term (e.g., "rooted cosmopolitanism") must be accompanied by a plain-language explanation of its practical meaning.
Action-Oriented Copy: Most pages must end with a clear, contextual CTA.2
Authentic & Ethical Imagery 2:
No Stock Photos: The use of generic stock photography is prohibited. All imagery must be authentic (real students, real volunteers, real founders) to build trust and emotional connection.2
Ethical Mandate: Imagery must be empowering. It must depict students and community members with dignity and agency, not as passive "recipients." Avoid all forms of exploitative imagery ("poverty porn").2
Consent: A process must be implemented to obtain signed consent and model releases from all individuals featured in photos or stories.2
Content Freshness: The "Impact Stats" 1 and Stories blog are critical for credibility.2 A post-launch content maintenance plan and editorial calendar must be established to update these elements regularly.2

Part C: Enhanced Page-by-Page Blueprint

This section details the page-by-page implementation, merging the original content blueprint 1 with the specific enhancement mandates from the evaluation.2
Table C.1: Conversion Funnel Enhancement Mandates (Summary)
The evaluation 2 identified friction as the primary blocker in all three core funnels. The following mandates are designed specifically to remove that friction.

Funnel
Original Blueprint
Enhancement Mandate (v2.0)
1. Donate
Page 15: Two-column form + "Why Donate" impact case.1
• Integrate Mobile Wallets: Apple Pay & Google Pay are non-negotiable for one-tap mobile giving.2

• Promote Recurring: Make "Make this monthly" a prominent, clear option. Monthly donors are 9x more valuable.2

• Add Tangible Impact: Tie donation amounts to specific outcomes (e.g., "$50 covers X hours").2

• Add Trust Badges: Prominently display SSL/security seals and 501(c)(3) status.2
2. Volunteer
Page 14: Volunteer-centric page, listing roles in tabs.1
• Streamline Form: The initial application form must be minimal (name, contact, brief motivation). Collect references/details after first contact.2

• Clarify Commitment: Be explicit about time expectations (e.g., "5 hours/week for 3 months") to manage expectations.2

• Add Testimonials: Include quotes or profiles of current volunteers to inspire peers.2
3. Student
Page 13: Pre-qualification checklist and application steps.1
• Simplify Application: Consider a two-step funnel: a simple "Expression of Interest" form, followed by a more detailed application for qualified leads.2

• Add Support: Provide a clear support mechanism ("Need help? Contact us or join an info session") to reduce drop-off.2

• Add Social Proof: Include a testimonial on the Apply page itself.2


1. Page: Home

Page Objective: Confirmed. Instantly communicate mission and segment three audiences.1
Section 1: Hero: Content confirmed.1
Enhancement (Imagery): Visual must be an authentic, high-quality, empowering photo of real students, per Sec B.5.2
Enhancement (Accessibility): Text overlay must have sufficient contrast (e.g., a dark scrim) to meet the $4.5:1$ ratio.2
Section 2: Audience Funnel (Triptych): Content confirmed.1
Enhancement (UX): These three columns must be designed as obviously clickable cards, with consistent hover/focus states.2
Enhancement (Mobile): On mobile, these must stack vertically into three large, $48\text{px+}$ tappable blocks.2
Section 4: Our Impact: Content confirmed.1
Enhancement (Content): The "[Number] Students Enrolled" stats must be populated with real, current data and linked to a content update plan.2
Enhancement (Narrative): Testimonial quote must be from a real student, with consent obtained.2
Section 6: Final CTA (Stories):
Enhancement (IA): This fulfills the strategy of linking the homepage to the Stories section, per the evaluation critique.2

3. Page: About Us > Our Approach (The Noor Pedagogy)

Page Objective: Confirmed. "De-academize" the pedagogy.1
Section 2: The Core Components:
Content: The "Term" + "Accessible Translation" format is validated as an excellent content strategy.2
Layout: Interactive accordion or tabbed interface.1
Enhancement (Accessibility): This component must be built to the accessibility standards in Sec B.3. It must be fully keyboard-navigable, use aria-expanded, and have clear focus states.2

4. Page: About Us > Our Team

Page Objective: Confirmed. Build authority and trust.1
Section 3: Our Educators (Volunteers):
Enhancement (Imagery): Photos must be real headshots or candid photos of volunteers, not placeholders, per Sec B.5.2
Section 4: CTA:
Content: "Want to join this team?... See Volunteer Openings".1
Enhancement (UX): This is a perfect example of a contextual CTA, which the evaluation strongly recommends. This implementation is confirmed.2

6. Page: Our Programmes > Programme Overview (Landing Page)

Page Objective: Confirmed. A "hub-and-spoke" model for student UX.1
Section 2: Programme Hub:
Enhancement (UX): These 3 "card" layouts must have consistent visual cues (hover/focus) to indicate clickability.2
Enhancement (Mobile): Tap targets must be $48\text{px+}$.2

7-9. Pages: Programme Detail Pages (General & Business, EAP, Skills)

Global Enhancement (Conversion): All program detail pages must include a prominent, contextual "Start Your Application" button that links directly to the Join Us > For Students page. This is a key "journey optimization" mandate, so users do not have to hunt for the apply link.2
Global Enhancement (IA): These pages must include a "Related Student Stories" component, cross-linking to narratives from students who have completed that specific program. This addresses the "content silo" critique.2

10. Page: Our Impact > Impact & Theory of Change

Page Objective: Confirmed. The primary "home" for the Donor audience.1
Section 5: CTA (The "Ask"):
Content: "Invest in Educational Justice... Donate Now".1
Enhancement (UX): This is another key contextual CTA.2 The "Donate Now" button must use the high-contrast "Accent (Action)" color defined in Sec B.2.

11. Page: Our Impact > Student Stories

Page Objective: Confirmed. The "social proof" engine.1
Enhancement (Content/Narrative): This is the hub for authentic, ethical storytelling.2
Stories must be diverse (gender, region, background).2
Stories must be written to show student agency and empowerment, not hardship.2 The narrative arc should focus on context, the Noor experience, and the outcome/future.2
All stories must be approved and have consent forms on file.2

13. Page: Join Us > For Students (Apply)

Page Objective: Convert prospective students into applicants.1
Enhancement (Conversion/UX): This page must be updated per Table C.1 and the evaluation.2
Support Mechanism (Mandate): Add a new content block: "Still Have Questions? Applying can be daunting. Contact our admissions team or join our next live info session." This support mechanism is key to reducing drop-off.2
Social Proof (Mandate): Add a new component: a short, powerful testimonial from a current student, placed near the CTA (e.g., "This program gave me the confidence to..."). This reassures applicants.2
Application Form (Mandate): The form itself must be simplified.
Implementation: Implement a two-step funnel. Step 1 (on this page) is a short "Expression of Interest" form (Name, Email, Program of Interest). Step 2 is a more detailed application emailed to qualified leads. This reduces initial friction and intimidation.2
Accessibility: The form must be fully accessible (see B.3), with all fields correctly labeled.2

14. Page: Join Us > For Volunteers

Page Objective: Convert prospective volunteers.1
Section 2: What We Offer You: Content confirmed. The volunteer-centric approach ("What we offer you" before "What we ask") is validated as a best practice.2
Section 3: What We Ask of You:
Enhancement (Conversion): Add explicit time commitment details (e.g., "Most volunteer roles require ~5 hours a week for a 3-month semester") to pre-qualify candidates and manage expectations.2
Section 4: The Application Process:
Enhancement (Conversion/UX): The "Apply" CTA 1 must lead to a streamlined, minimal form.2
Mandate: The initial form must only ask for essential contact info and motivation (e.g., Name, Email, LinkedIn/CV upload, "Why are you interested?"). Do not ask for references or detailed background checks at this stage.2
Mandate: An automated email must be sent upon submission, thanking the applicant and outlining the next steps (interview, etc.) to keep them engaged.2

15. Page: Donate (Global CTA Experience)

Page Objective: Convert inspired users into donors.1
Layout: Two-column (Form 1 + Why 1) is confirmed as a strong pattern.2
Enhancement (Conversion/UX/Mobile): This page must be enhanced per Table C.1 and the evaluation.2
Payment Options (Mandate): The form must integrate digital wallets. Apple Pay, Google Pay, and PayPal options must be prominently displayed. This is critical for reducing mobile friction.2
Recurring Giving (Mandate): The option to give monthly must be clear and compelling (e.g., a toggle labeled "Make this a monthly gift"). The monthly option should be highlighted or defaulted, as recurring donors give 42% more annually.2
Tangible Impact (Mandate): The preset amounts ($50, $100) 1 must be tied to tangible impact. The "Why" column should explicitly state this (e.g., "$100 covers X hours of instruction").2
Trust Signals (Mandate): The "Trust Badge" 1 must be implemented. This includes an SSL security seal and a clear statement (e.g., "Noor Community is a registered 501(c)(3) non-profit").2
Form Friction (Mandate): The form must be minimal. Only ask for fields required for the transaction.2
Narrative (Mandate): The "Why" column 1 should include a one-sentence "micro-story" to connect the donation to a person (e.g., "Your gift helps instructors like Amal...").2

16. Page: FAQ (Frequently Asked Questions)

Layout: Filterable accordion list.1
Enhancement (Accessibility): This component must meet the accessibility standards in Sec B.3. The filters must be keyboard-operable, and the accordions must use aria-expanded.2
Enhancement (UX): Filter categories must be clearly labeled, and an "All Questions" view must be available for less tech-savvy users.2

Part D: Backend, CMS, and Implementation Mandates

This section defines the technical stack and implementation processes, based on the evaluation 2 and best practices. The platform must be sustainable, secure, and empower the Noor team to manage content.

D.1: Content Management System (CMS) Specification

Mandate: The website must be built on WordPress.2
Rationale: The evaluation identified WordPress as the optimal choice. It offers the best balance of user-friendliness (for content editors), an extensive plugin ecosystem (for donations/forms), and wide developer support. It is the most sustainable choice for a non-profit, whereas headless or more complex systems would create undue technical burdens.2
Theme Development: A custom theme must be developed. Do not use a heavy, pre-built, multi-purpose theme, which will harm performance.2
Component-Based Dev: The theme must be built using a component-based approach, leveraging custom Gutenberg Blocks.2 This is the key to sustainability. It allows editors to easily assemble pages using the pre-styled, accessible components defined in this blueprint (e.g., "Impact Stats Block," "2-Column w/ Image Block," "Accessible Accordion Block").

D.2: Required Plugins & Integrations

Donations: GiveWP plugin (or a similar dedicated non-profit plugin) is mandated. It must be configured to handle recurring donations and integrate with the payment gateways.2
Payment Gateways: Stripe and PayPal must be integrated to process donations and power the digital wallet (Apple/Google Pay) functionality.2
Forms: A professional forms plugin (e.g., Gravity Forms, WPForms) is mandated for the Student and Volunteer applications. It must support conditional logic, auto-responders, and secure entry storage.2
Analytics: Google Analytics (GA4) must be integrated to track all user journeys and conversion goals.2
Mailing List: Mailchimp (or similar) integration is required. A "Subscribe" checkbox (opt-in) should be added to donation and application forms.2
Multilingual (Future): The theme must be built to be "translation-ready" to support future implementation of WPML or Polylang for Arabic content.2

D.3: Security, Privacy & Maintenance Protocol

SSL: The entire site must be served over HTTPS (SSL certificate).2
Security: A Web Application Firewall (WAF) (e.g., Cloudflare, Sucuri) is mandated. Admin accounts must use strong passwords and Two-Factor Authentication (2FA).2
Privacy (GDPR): The site must be compliant with data protection laws like GDPR. This includes the Privacy Policy page 1 and clear opt-in consent for all data collection.2
Maintenance: A post-launch maintenance plan is required. This must include:
Regular (at least monthly) updates of WordPress core, plugins, and themes.2
Daily off-site backups.2
A content-update schedule for Impact Stats and the Stories blog.2
Annual accessibility audits to maintain compliance.2

D.4: Testing & Deployment Protocol

IA Validation: Conduct tree-testing (see A.2).2
Development & QA:
Automated testing (Axe, WAVE) to catch 30-50% of accessibility issues.2
Manual QA: Test all user journeys (Donate, Apply, Volunteer) on desktop and mobile.
Manual Accessibility QA: Navigate the entire site using only a keyboard. Test critical paths using a screen reader (NVDA or VoiceOver).2
Performance Testing: Test against the performance budget using Google Lighthouse and WebPageTest.2
User Acceptance Testing (UAT): Conduct testing with real users, ideally engaging users with disabilities for invaluable feedback.2
Launch: Deploy to live server with CDN and security measures activated.
Post-Launch: Monitor GA4 analytics to track conversion funnels and identify drop-off points for continuous improvement.2

Concluding Implementation Checklist

This v2.0 Blueprint is the final specification. The project manager and development team must confirm that every "Mandate" and "Enhancement" in this document is accounted for in the final project scope.
Architecture: Contact Us in utility nav? Stories cross-linking plan in place?
Global Design: Sticky header meets Focus Not Obscured?2 Mobile menu implemented?
Visuals: Font (Serif/Sans) and Color (Blue/Orange) palettes approved and implemented?2
Accessibility: Is the WCAG 2.2 QA Checklist (B.3.1) part of the QA plan? Are all accordions/tabs/forms built accessibly?2
Performance: Are WebP, srcset, lazy loading, and a CDN in the scope?2
Donate Funnel: Apple/Google Pay?2 Recurring option?2 Trust badges?2
Volunteer Funnel: Streamlined (minimal) initial form?2 Time commitments listed?2
Student Funnel: Two-step application?2 Support mechanism text?2
Backend: WordPress + GiveWP + Gravity Forms confirmed?2 Custom Gutenberg blocks planned?2
Process: Security, maintenance, and testing protocols (including manual accessibility testing) are all agreed upon?2
This enhanced blueprint provides a comprehensive, expert-driven path to a world-class digital presence. By adhering to these specifications, the Noor Community website will effectively serve its mission and its diverse community with clarity, inclusivity, and impact.
Works cited
Website Blueprint for Noor Community
Evaluation of the Noor Community Website Blueprint (2025).pdf
