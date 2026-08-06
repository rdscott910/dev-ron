# User Context

This file captures user-provided context that agents should treat as current product and content guidance.

## Authoritative Sources

- `ronnie-scott-resume.pdf` at the project root is the current resume source.
- LinkedIn: `https://www.linkedin.com/in/ronnie-d-scott`
- GitHub: `https://github.com/rdscott910`
- AI Orchestration Methodology project repo: `https://github.com/rdscott910/ai-orchestration-server`

## Professional Positioning

Ronnie is a full-stack software engineer with startup experience across customer-facing UI, backend services, integrations, internal tooling, and legacy modernization.

Strong positioning themes:

- Builds production software end to end.
- Works across TypeScript, JavaScript, React, Vue, Node.js, APIs, SQL databases, and cloud/tooling.
- Uses AI as a development multiplier through persistent rules, MCP tool integrations, implementation plans, and context pipelines.
- Values practical software that can make a difference.
- Enjoys working with people who like finding solutions to real problems.
- Is a builder at heart.
- Has a creative side informed by music and software engineering.

Avoid inventing employers, metrics, credentials, or project claims beyond the resume and user-provided context.

## Blog Direction

Primary topics:

- Agentic orchestration.
- AI headlines and commentary.
- AI-assisted development workflows.
- Context engineering and persistent rule systems.
- Possible tech reviews.

For MVP, use draft-style article cards around these themes. Cards should feel intentional and can be labeled `Draft`, `Idea`, or `Planned`. Do not link cards to missing article pages.

## Featured Project Guidance

Known projects to include:

- NC SNAP Benefits Eligibility Agent (shipped case study + public demo).
  - Repo: `https://github.com/rdscott910/Benefits-Eligibility-Agent`
  - Live demo: `https://demo.dev-ron.com` (also `https://benefits-eligibility-agent.vercel.app`)
  - Case study: `/projects/benefits-eligibility-agent`
  - Built for a voice-AI company's case-study interview; do not name the company in public copy.
  - Neutral public branding; portfolio demo only — not an official eligibility determination.
- AI Orchestration Methodology / AI Orchestration Server.
  - Repo: `https://github.com/rdscott910/ai-orchestration-server`
  - Status: incomplete / in progress.
  - Position as an evolving methodology and toolchain for coordinating AI-assisted workflows, not as a finished commercial product.

Agents should not invent metrics beyond the Benefits Agent README eval report (regenerated 2026-08-06).

## Visual Direction

Preferred style direction:

- Custom look instead of a generic SaaS template.
- Vintage aesthetic.
- Solarized light influence.
- Grays and muted colors.
- Calm, readable, professional, and creative.

Use these cues when choosing layout, colors, typography rhythm, and visual details. Keep accessibility and contrast requirements from `.cursor/rules/style-and-accessibility.mdc`.

## Contact And Privacy

The resume contains contact details. Do not publish the phone number anywhere on the website.

Do not publish a personal Gmail address.

Recommended contact approach:

- MVP: use LinkedIn, GitHub, and a contact page that explains good reasons to reach out.
- MVP: include a placeholder for a future professional email alias only if needed.
- Post-MVP: use a domain email alias such as `hello@<domain>`, `contact@<domain>`, or `ronnie@<domain>` forwarded to a private inbox.
- Post-MVP: consider a form backed by a transactional email provider, such as Resend, after spam handling is planned.

The LinkedIn URL is approved for use:

- `https://www.linkedin.com/in/ronnie-d-scott`

Confirm the preferred professional email alias before placing an email address prominently on the site.

## Confirmed Post-MVP Decisions (July 2026)

- Site wordmark/brand: `dev-ron` (matches the owned domain `dev-ron.com`).
- Professional email alias: `ronnie@dev-ron.com` (approved for public use once forwarding is configured).
- Contact form: wire with a Resend-backed server action plus honeypot/rate-limit spam protection.
- Theme: Solarized-light-inspired palette only for now; no dark mode toggle yet.
- Resume: sanitize the existing `ronnie-scott-resume.pdf` by stripping the phone number; the sanitized copy becomes the public asset. The raw PDF must stay gitignored.
- Analytics: Vercel Analytics.
- Deployment: Vercel, production domain `https://dev-ron.com`.

## Contact Delivery Setup (Phase 7)

Implemented in code:

- Server action `src/app/contact/actions.ts` sends form submissions via Resend from `contact@dev-ron.com` to `ronnie@dev-ron.com`, with reply-to set to the submitter.
- Spam protection: hidden honeypot field plus a per-email in-memory rate limit (one message per minute; best-effort on serverless).
- If `RESEND_API_KEY` is unset the action returns a friendly error pointing to LinkedIn/GitHub, so the form degrades gracefully.
- Sanitized resume (phone stripped at the PDF content-stream level) lives at `public/ronnie-scott-resume.pdf` and is linked from the About artifacts block. The raw resume at the repo root stays gitignored.

User dashboard steps required before delivery works:

1. Namecheap → Domain → Redirect Email: forward `ronnie@dev-ron.com` to the private inbox (requires Namecheap DNS, which we kept).
2. Resend dashboard → Domains: add `dev-ron.com` and copy the DKIM/SPF records into Namecheap Advanced DNS; wait for verification so `contact@dev-ron.com` can send.
3. Resend dashboard → API Keys: create a key; put it in `.env.local` as `RESEND_API_KEY` and add the same variable in Vercel project settings (Production).

Once forwarding is confirmed working, `ronnie@dev-ron.com` may be displayed publicly on the contact page.

## Placeholder Swap-List (Phase 9)

Placeholders shipped in July 2026 awaiting real content from the user. Each entry names the location and what replaces it:

1. `content/blog/ai-orchestration-server-architecture.mdx` — draft scaffold with section prompts. Replace prompts with real prose, set `status: published` to go live (dev preview at `/blog/ai-orchestration-server-architecture`).
2. `src/app/now/page.tsx` — "Reading" and "Listening" sections are Planned blocks. Replace with real items and bump `LAST_UPDATED`.
3. `src/app/uses/page.tsx` — "Hardware & desk" section is a Planned block. Replace with real hardware details.
4. `src/app/methodology/page.tsx` — "Deep dives" list is Coming Soon. Replace with real architecture walkthrough, changelog, and site case study as they're written.
5. `src/components/sections/About.tsx` — music corner "Recordings and projects coming soon" block. Replace with real links/embeds when provided.
6. `src/components/sections/About.tsx` — "Writing Samples — coming soon" artifact card. Point at published posts once they exist.
7. `content/blog/nc-snap-benefits-eligibility-agent.mdx` — draft scaffold with section prompts. Replace prompts with real prose, set `status: published` to go live (dev preview at `/blog/nc-snap-benefits-eligibility-agent`).
