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

The final featured project list is still TBD.

Known project to include:

- AI Orchestration Methodology / AI Orchestration Server.
  - Repo: `https://github.com/rdscott910/ai-orchestration-server`
  - Status: incomplete / in progress.
  - Position as an evolving methodology and toolchain for coordinating AI-assisted workflows, not as a finished commercial product.

Agents should not invent a full case study until the user provides more details.

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
