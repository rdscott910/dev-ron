# Portfolio Website Roadmap

## Phase 1 — Foundation (Current)

- [x] Scaffold Next.js 15 with TypeScript, Tailwind CSS v4, App Router
- [x] Establish `.cursor/` AI collaboration structure (rules, plans, prompt_templates)
- [x] Build base layout shell: responsive Header with navigation + Footer
- [x] Create minimal hero placeholder on the home page
- [ ] Initial Git commit with clean project state

## Phase 2 — Content Sections

- [ ] **Hero section**: headline, tagline, call-to-action buttons (Resume / Contact)
- [ ] **About section**: professional summary, tech stack icons, profile photo
- [ ] **Projects grid**: card-based layout with thumbnail, title, description, tech tags, links
- [ ] **Contact section**: form (name, email, message) with client-side validation
- [ ] Create reusable UI primitives: Button, Card, Badge, SectionHeading

## Phase 3 — Data & Integrations

- [ ] Define project data model (TypeScript types + JSON/MDX data source)
- [ ] GitHub API integration: fetch pinned repos, display stars/language
- [ ] Add LinkedIn profile link and optional GitHub contribution graph
- [ ] Set up dynamic Open Graph images for social sharing

## Phase 4 — Polish & Performance

- [ ] Dark mode toggle with system preference detection
- [ ] Scroll-triggered entrance animations (respecting `prefers-reduced-motion`)
- [ ] SEO: meta tags, structured data (JSON-LD), sitemap, robots.txt
- [ ] Performance audit: Lighthouse 90+ on all categories
- [ ] Image optimization: WebP/AVIF, blur placeholders, lazy loading
- [ ] Accessibility audit: axe-core automated checks, manual keyboard testing

## Phase 5 — Deployment & Launch

- [ ] Configure Vercel project with environment variables
- [ ] Set up custom domain and SSL
- [ ] Add analytics (Vercel Analytics or Plausible)
- [ ] Configure CI: linting + type-check on push
- [ ] Final review and launch
