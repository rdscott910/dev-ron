# Post-MVP Roadmap

The MVP (Phases 0–4) is complete: five routes, static content modules, metadata/SEO, and passing lint/build. This roadmap covers everything from repo safety through launch, contact delivery, visual identity, and content expansion.

Decisions locked in by the user (see `07-user-context.md`):

- Brand wordmark: `dev-ron`
- Professional email alias: `ronnie@dev-ron.com`
- Contact form: Resend-backed server action with spam protection
- Theme: Solarized-light-inspired only (no dark toggle yet)
- Resume: sanitize existing PDF (strip phone) as the public asset
- Analytics: Vercel Analytics

## Phase 5: Repo Safety And Hygiene

Goal: protect existing work and fix small correctness gaps before anything else.

Deliverables:

- Resume PDF protected from accidental commit.
- All Phase 1–4 work committed and pushed.
- Brand corrected to `dev-ron` in header and footer.
- Unused scaffold assets removed.
- `prefers-reduced-motion` guard added per `.cursor/rules/style-and-accessibility.mdc`.
- Active-route indicator in navigation.

Exit criteria:

- `git status` is clean and pushed; no privacy-sensitive files trackable.

## Phase 6: Deploy And Domain

Goal: make the site live at `https://dev-ron.com`.

Deliverables:

- Vercel project linked to the GitHub repo.
- Production deployment verified.
- `dev-ron.com` connected with SSL.
- Vercel Analytics enabled.
- Static branded Open Graph image.

Exit criteria:

- Site loads at `https://dev-ron.com`; link previews show branded OG image.

## Phase 7: Contact And Resume

Goal: give visitors working contact channels and a public resume.

Deliverables:

- `ronnie@dev-ron.com` alias configured and forwarding (user completes provider setup; docs capture steps).
- Contact form wired via Resend server action with honeypot + rate limiting.
- Sanitized resume PDF (phone stripped) served from `public/`.
- About page artifacts block updated from "coming soon" to real links.

Exit criteria:

- Form submissions arrive by email; resume downloads without exposing the phone number.

## Phase 8: Visual Identity (Solarized Light)

Goal: replace the default shadcn neutral theme with the vintage/Solarized-light direction.

Deliverables:

- Solarized-light-inspired palette mapped onto existing CSS custom properties in `globals.css`.
- WCAG 2.1 AA contrast maintained (verify each token pair).
- Typography rhythm pass (scale, spacing, vintage character).
- Favicon/icon set derived from `Pixel_Ron.png`.

Exit criteria:

- Site has a distinctive, cohesive look; contrast checks pass; no component-level regressions.

## Phase 9: Content And Publishing

Goal: turn the publishing shell into a living site.

Deliverables:

- MDX blog pipeline with syntax highlighting and dynamic post routes.
- First published post (agentic orchestration topic).
- Blog series taxonomy (named series from day one).
- `/now` page.
- `/uses` page (Cursor setup, MCP servers, agent skills).
- Music corner section or page.
- AI Orchestration Methodology hub.
- Interactive resume/career timeline.

Exit criteria:

- At least one published post is live; new sections are reachable from navigation or footer.

## Recommended Order

Phase 5 first (protects work), then 6 (launch), then 7 (contact/resume). Phases 8 and 9 can proceed in parallel after launch; visual identity (8) is recommended before heavy content promotion so shared links show the final look.

## Content The User Can Provide Anytime

- First 3–5 blog post topics or drafts.
- Music links, recordings, or bio copy for the music corner.
- Current items for the `/now` page (building, reading, listening).
- Vercel account status and email provider preference for the alias.
- Any screenshots or demos for project cards.
