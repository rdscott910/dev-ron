# Post-MVP Implementation Slices

Slices for Phases 5–9 in `08-post-mvp-roadmap.md`. Each slice is one focused agent pass. Verify per `05-verification-rubric.md` before moving on.

## Slice 5.1: Protect The Resume And Commit The MVP

Likely files:

- `.gitignore`
- All uncommitted Phase 1–4 files

Tasks:

- Add `ronnie-scott-resume.pdf` to `.gitignore` (the raw resume with phone number must never be committed).
- Stage and commit all Phase 1–4 work with a clear message; push to `origin/main`.
- Confirm the resume PDF is not in the commit.

Acceptance criteria:

- `git status` clean; `git ls-files` does not include `ronnie-scott-resume.pdf`.

## Slice 5.2: Brand And Asset Hygiene

Likely files:

- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `public/*.svg`

Tasks:

- Change wordmark from `Ronnie.dev` to `dev-ron` in header and footer.
- Delete unused scaffold SVGs: `next.svg`, `vercel.svg`, `globe.svg`, `file.svg`, `window.svg`.

Acceptance criteria:

- No `Ronnie.dev` string remains in `src/`; no unused scaffold assets in `public/`.

## Slice 5.3: Motion Guard And Active Nav

Likely files:

- `src/app/globals.css`
- `src/components/layout/Header.tsx`

Tasks:

- Add the `prefers-reduced-motion` media query from `.cursor/rules/style-and-accessibility.mdc` to `globals.css`.
- Add active-route styling in the header using `usePathname` (header is already a client component).

Acceptance criteria:

- Reduced-motion users get near-instant transitions; current page is visually indicated in nav with `aria-current="page"`.

## Slice 6.1: Vercel Deploy And Domain

Likely files:

- None in-repo required (Vercel dashboard/CLI); optionally `vercel.json`.

Tasks:

- Link repo to a Vercel project (`vercel link`), deploy production.
- Connect `dev-ron.com` in the Vercel dashboard; verify SSL.
- Enable Vercel Analytics; add `@vercel/analytics` to `src/app/layout.tsx`.

Acceptance criteria:

- `https://dev-ron.com` serves the site; analytics events appear in Vercel.

## Slice 6.2: Static OG Image

Likely files:

- `public/og.png`
- `src/app/layout.tsx`

Tasks:

- Create a static branded OG image (1200x630) using the pixel-art identity and Solarized-adjacent colors.
- Reference it in root metadata `openGraph.images` and `twitter` card config.

Acceptance criteria:

- Link previews (LinkedIn especially) show the branded image.

## Slice 7.1: Sanitized Public Resume

Likely files:

- `public/ronnie-scott-resume.pdf` (new, sanitized)
- `src/components/sections/About.tsx`

Tasks:

- Produce a copy of the resume with the phone number removed (all other content unchanged); place in `public/`.
- Update the About artifacts block: "Resume" becomes a real download link.

Acceptance criteria:

- Downloaded PDF contains no phone number; About links to it.

## Slice 7.2: Email Alias Documentation

Likely files:

- `.cursor/plans/roadmap-to-mvp/07-user-context.md` (append confirmed alias)

Tasks:

- User configures `ronnie@dev-ron.com` forwarding at their DNS/email provider (agent documents steps, cannot complete external setup).
- Record the confirmed alias as approved public contact in user context.

Acceptance criteria:

- Alias receives mail; docs updated.

## Slice 7.3: Wire Contact Form With Resend

Likely files:

- `src/app/contact/ContactForm.tsx`
- `src/app/contact/actions.ts` (new server action)
- `package.json` (`resend` dependency)
- `.env.local` (`RESEND_API_KEY`, not committed)

Tasks:

- Server action validating name/email/message, honeypot field, simple rate limit.
- Send via Resend to `ronnie@dev-ron.com`; success and error states in the form.
- Remove the "not wired yet" disclaimer.

Acceptance criteria:

- Test submission arrives by email; spam protections active; no secrets committed.

## Slice 8.1: Solarized Light Theme Tokens

Likely files:

- `src/app/globals.css`

Tasks:

- Map a Solarized-light-inspired palette (warm base3 background, muted grays, restrained accent) onto existing `--background`/`--foreground`/`--primary`/etc. tokens.
- Verify WCAG 2.1 AA contrast for every token pair used by text.

Acceptance criteria:

- Site renders in the new palette with no component changes; contrast checks pass.

## Slice 8.2: Typography And Vintage Character

Likely files:

- `src/app/globals.css`
- `src/app/layout.tsx` (font loading if changed)

Tasks:

- Typography pass: consider a serif or slab display face for headings (vintage cue), keep body highly readable.
- Adjust radius/border tokens toward the calm, vintage feel.

Acceptance criteria:

- Headings carry the vintage identity; body text stays ≥16px and readable.

## Slice 8.3: Favicon And Icon Set

Likely files:

- `src/app/favicon.ico`, `src/app/icon.png`, `src/app/apple-icon.png`

Tasks:

- Derive favicon/app icons from `Pixel_Ron.png`.

Acceptance criteria:

- Browser tab and mobile bookmark show the pixel identity.

## Slice 9.1: MDX Blog Pipeline

Likely files:

- `next.config.ts`, `package.json` (`@next/mdx` or `contentlayer`-style setup)
- `src/app/blog/[slug]/page.tsx` (new)
- `content/blog/*.mdx` (new)
- `src/lib/blog.ts` (extend to read published MDX)

Tasks:

- MDX rendering with syntax highlighting; `published` posts get real routes; `draft`/`idea` cards remain unlinked.
- Preserve the existing card grid as the index.

Acceptance criteria:

- A sample published MDX post renders at `/blog/<slug>`; draft cards still do not link anywhere.

## Slice 9.2: First Published Post And Series Taxonomy

Likely files:

- `content/blog/*.mdx`
- `src/lib/blog.ts` (add `series` field)

Tasks:

- Publish the first agentic-orchestration post (user provides or approves final copy).
- Add named series ("Agentic Orchestration", "AI Headlines", "Tech Reviews") to the model and cards.

Acceptance criteria:

- One live post; series labels visible on cards.

## Slice 9.3: Now And Uses Pages

Likely files:

- `src/app/now/page.tsx`, `src/app/uses/page.tsx` (new)
- `src/components/layout/Footer.tsx` (links)
- `src/app/sitemap.ts`

Tasks:

- `/now`: what Ronnie is building/reading/listening to (user provides items).
- `/uses`: Cursor setup, MCP servers, agent skills, hardware/software.
- Add to footer nav and sitemap; metadata for both.

Acceptance criteria:

- Both pages render with real content and are discoverable.

## Slice 9.4: Music Corner

Likely files:

- `src/app/about/page.tsx` or new section/page per content volume

Tasks:

- Add a music section (links, short bio note, embeds if user provides them). Scope depends on content the user supplies.

Acceptance criteria:

- Music presence exists without feeling like filler; user-approved copy only.

## Slice 9.5: AI Orchestration Methodology Hub

Likely files:

- `src/app/methodology/page.tsx` (new) or expanded project detail route
- `src/lib/projects.ts` (link as case study)

Tasks:

- Living-document page: the rules/MCP/plans/context-pipeline framework, architecture overview, changelog as it evolves.
- Link from the AI Orchestration Server project card (`caseStudy` link field already exists).

Acceptance criteria:

- Hub explains the methodology beyond the GitHub README; project card links to it.

## Slice 9.6: Interactive Resume Timeline

Likely files:

- `src/app/about/page.tsx` or `src/app/resume/page.tsx` (new)
- `src/lib/career.ts` (new typed timeline data)

Tasks:

- Career timeline from the sanitized resume content (roles, projects, education; no phone).
- Scannable, semantic, keyboard-accessible.

Acceptance criteria:

- Timeline covers resume history accurately; PDF remains available as download.
