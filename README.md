# VITA-M Website v3

Behaviour-driven brand strategy, creative production, business consulting & startup operations.
Built with Next.js 14, Tailwind CSS, adaptive light/dark theming.

## Palette: #08090A · #A7A2A9 · #F8F8F8

## Fonts (Google Fonts — free, production-ready)

**Current:** Sora (display) + Plus Jakarta Sans (body)

**Alternative B:** Bricolage Grotesque (display) + Manrope (body)
**Alternative C:** Archivo (display) + Source Sans 3 (body)

To switch fonts, change the imports in `app/layout.js`. All three options are documented there.

If you want to use PP Agrandir Bold (premium, self-hosted), purchase from pangrampangram.com and follow the @font-face instructions in the Step-by-Step Build Guide document.

---

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Project Structure

```
vitam-v3/
├── app/
│   ├── layout.js          # Root layout, fonts, Schema.org JSON-LD
│   ├── page.js            # Homepage (9 sections)
│   ├── globals.css         # Adaptive theming, WCAG-compliant tokens
│   ├── about/page.js       # Philosophy + Method + Team + Why Us
│   ├── services/page.js    # 5 service pillars overview
│   ├── services/[slug]/    # Individual service pages (dynamic)
│   ├── sprints/page.js     # Productised sprint offerings
│   ├── work/page.js        # Case study index (5 clients)
│   ├── work/[slug]/        # Individual case studies (dynamic)
│   ├── insights/page.js    # Blog/Insights index (6 articles)
│   ├── brand-health/       # Interactive 12-question assessment tool
│   └── contact/page.js     # Contact form + onboarding steps
├── components/
│   ├── Navbar.js           # Fixed nav, mobile hamburger, theme toggle
│   ├── Footer.js           # Full footer with 4-column layout
│   ├── ThemeToggle.js      # Light/dark toggle, OS detection
│   └── Logo.js             # SVG placeholder (replace with yours)
├── lib/
│   ├── data.js             # ALL site content (single source of truth)
│   ├── useReveal.js        # Intersection Observer scroll reveals
│   └── useCountUp.js       # Number count-up animation
├── public/
│   ├── llms.txt            # Machine-readable for AI crawlers (GEO)
│   ├── fonts/              # Self-hosted fonts go here
│   └── images/             # All images (team, work)
└── configs...
```

## Pages & Routes

| Route | Page | Sections |
|-------|------|----------|
| `/` | Homepage | Hero, Philosophy, 5 Pillars, Method, Sprints, Work, Why Us, Stats, CTA |
| `/about` | About | Philosophy, 4-Stage Method, Team Bios, 6 Differentiators |
| `/services` | Services | 5 service pillar cards with descriptions |
| `/services/[slug]` | Individual Service | Hero, offerings list, CTA |
| `/sprints` | Sprint Packages | 3 productised offerings with pricing |
| `/work` | Case Studies | 5 client cards (Sunrise, Diamond Hooves, JOY, HAC, IFA) |
| `/work/[slug]` | Case Study | Hero, Challenge/Approach, Strategy Cards, Deliverables, Prev/Next |
| `/insights` | Blog | 6 article cards across 4 categories |
| `/brand-health` | Assessment | 12-question interactive quiz, scoring, per-dimension breakdown |
| `/contact` | Contact | Form, direct contact, onboarding steps |

## Data Updates

All site content lives in `lib/data.js`. This is the single file to edit when:
- Adding new clients or case studies
- Updating team bios or roles
- Changing service descriptions
- Adjusting sprint pricing or deliverables

Search for `TODO` across all files for items that need your input before launch.

## Before Launch Checklist

### Critical (Week 1)
- [ ] Register domain (vitam.agency or vitam.in)
- [ ] Professional email (hello@vitam.agency)
- [ ] Replace Logo.js SVG paths with actual VITA-M diamond logo
- [ ] Create OG image (1200×630px) → public/og-image.jpg

### Content (Week 2-3)
- [ ] Professional headshots → public/images/team/
- [ ] Case study hero images (WebP, 16:9) → public/images/work/[client]/
- [ ] Client testimonials → update data.js
- [ ] Financial metrics for each case study → update data.js

### Technical (Week 3-4)
- [ ] Connect contact form backend (Formspree.io recommended)
- [ ] Connect Brand Health Assessment to data store (Supabase/Firebase)
- [ ] Set up Google Analytics 4 + Search Console
- [ ] Deploy AI chatbot (Intercom or custom)
- [ ] Set up visitor identification (Leadinfo or Clearbit)

### QA
- [ ] Lighthouse audit every page (target 90+ mobile)
- [ ] Test adaptive theming on iOS, Android, Windows, macOS
- [ ] Test Brand Health Assessment end-to-end on mobile
- [ ] Verify llms.txt accessible at /llms.txt
- [ ] Verify Schema.org at search.google.com/test/rich-results

## Deploy

```bash
# Vercel (recommended)
npm i -g vercel
vercel

# Or build for any Node.js host
npm run build
npm start
```
