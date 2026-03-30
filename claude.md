# CLAUDE.md — Jaly Web Studio

> Single source of truth for all AI assistants working on this project.
> Read this before writing any code.

---

## What This Is

A marketing and lead-generation website for Jaly Web Studio, a solo freelance web
development brand. The site demonstrates range and converts visitors into leads.
The site itself is proof of craft — it must look and perform at a professional level.

## Business Goals
- Primary: Generate leads via contact form
- Secondary: Showcase services and portfolio work
- The site is the portfolio — quality of execution matters as much as content

## Audience
Primary: CT-based small businesses, local service companies, niche clients.
Secondary: National startups, content creators, remote clients.
Non-technical buyers — they respond to aesthetics, speed, and clarity, not jargon.
Avoid geo-locked language in hero/CTAs. "Serving Connecticut" belongs in About/footer only.

## Tech Stack
- Next.js 14, App Router
- TypeScript (strict mode — no `any`, no `ts-ignore` without explanation)
- Tailwind CSS
- Deployed on Vercel

## Brand
- Green: `#1C5C1C` — used for "Jaly" in wordmark and accents
- Purple: `#5A1F94` — used for "Web" in wordmark, buttons, highlights
- Background: white
- Text: near-black (`#111`)
- Logo: Gemini-generated image asset in `/public`
- Wordmark fallback: "Jaly" in green + "Web" in purple + "Studio" in dark, Montserrat 800

## Pages
- `/` — Home: Hero → Services → Portfolio preview → CTA banner
- `/work` — Full portfolio grid
- `/services` — Services detail + CTA
- `/contact` — Contact form

## Components
- `Nav.tsx` — sticky, logo, nav links, "Get in Touch" CTA button
- `Footer.tsx` — 3-col: links, services, contact info
- `Hero.tsx` — headline, subheadline, two CTAs
- `ServiceCards.tsx` — 3-col grid of service offerings
- `PortfolioGrid.tsx` — card grid, real + placeholder entries
- `CTABanner.tsx` — full-width purple, white text, contact CTA
- `ContactForm.tsx` — controlled inputs, no backend, success state

## Services Offered
Chrome Extensions · Web Apps · SEO Blogs · Landing Pages · Full Websites

## Portfolio
- Real entry: Chrome extension (KeyStack or equivalent)
- Remaining: placeholder "Coming Soon" cards until projects are ready

## Code Rules
- Complete functions only — no TODOs, no placeholders in code
- Semantic HTML: proper heading hierarchy, landmark elements
- WCAG 2.1 AA minimum — verify contrast on all new color pairings
- Keyboard navigable — visible focus rings on all interactive elements
- Alt text on every image
- Mobile-first responsive — test at 375px
- No layout shift — lazy load below-the-fold images

## SEO (always on)
- Meta title + description on every page via Next.js metadata export
- Open Graph tags on every page
- Semantic heading hierarchy (one H1 per page)
- `robots.txt` and `sitemap.xml` in `/public`

## Before Every Commit
- `npm run build` must pass with zero errors
- No console.logs left in
- No unused imports
- Check mobile at 375px

## 3-Attempt Rule
After 3 failed attempts on the same problem: STOP.
Document what failed and why, then surface the blocker clearly.
Never keep grinding silently.