# Portfolio Website Roadmap

## Current Source Of Truth

The MVP roadmap now lives in `.cursor/plans/roadmap-to-mvp/`.

Start with `.cursor/plans/roadmap-to-mvp/00-readme.md`, then follow the scope, phase roadmap, implementation slices, verification rubric, and backlog docs in that directory.

This file is retained as historical planning context for the first single-page portfolio pass. Do not treat it as the active MVP orchestration plan.

## Phase 1 — Foundation (Complete)

- [x] Scaffold Next.js 15 with TypeScript, Tailwind CSS v4, App Router
- [x] Establish `.cursor/` AI collaboration structure (rules, plans, prompt_templates)
- [x] Build base layout shell: responsive Header with navigation + Footer
- [x] Create minimal hero placeholder on the home page
- [x] Initial Git commit with clean project state

## Phase 2 — Content Sections (Current)

- [x] Initialize shadcn/ui (CLI init, theming CSS variables, `cn` utility)
- [x] Add shadcn primitives: Button, Badge, Card, Input, Textarea, Label
- [x] Create custom `SectionHeading` component (not provided by shadcn)
- [x] **Hero section**: headline, tagline, call-to-action buttons (Resume / Contact)
- [x] **About section**: professional summary, tech stack badges, profile photo
- [x] **Projects grid**: card-based layout with Card, Badge, tech tags, links
- [ ] **Contact section**: form (name, email, message) with client-side validation using shadcn form primitives

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
