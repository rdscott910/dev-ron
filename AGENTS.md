# AGENTS.md

## Learned User Preferences

- Never put a phone number anywhere on the website (public pages, resume downloads, or any public-facing artifact).
- Do not use a personal Gmail address on the contact page; approved contact channels are LinkedIn, GitHub, and the Resend-backed contact form using the domain alias `ronnie@dev-ron.com`.
- Blog section uses draft-style article cards (labeled `Draft`, `Idea`, or `Planned`) — not "coming soon" placeholders.
- Do not edit plan files (`.cursor/plans/**`) when implementing a plan; only consume them as read-only specs.
- Do not create todos that are already created; mark existing todos `in_progress` as work starts.
- Do not stop between todos; complete all todos in a single session unless explicitly paused.
- Read `07-user-context.md` before writing any public-facing copy for the site.
- Commit and push per-slice as work completes (Vercel auto-deploys from `main`), rather than batching into one large commit.
- Placeholder copy must be written in the site's voice (no lorem ipsum); frame unknowable content as "coming soon" instead of inventing it, and track every placeholder in the swap-list.

## Learned Workspace Facts

- Project: personal portfolio website; Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui.
- Truth stack for agents lives in `.cursor/plans/roadmap-to-mvp/` (00–09 docs); treat these as authoritative specs.
- Roadmap-to-MVP is fully complete as of July 2026 (MVP phases 0–4 and post-MVP phases 5–9); leftover items live in `06-backlog.md`.
- Content routes include `/resume` (career timeline from `src/lib/career.ts` with sanitized PDF download), `/now`, `/uses`, and `/methodology` (AI orchestration hub, wired as the case-study link on the AI Orchestration Server project card).
- Confirmed decisions: brand wordmark `dev-ron`; domain `dev-ron.com` (Namecheap); deployed on Vercel at dev-ron.vercel.app; theme is Solarized light (AA-verified tokens in `globals.css`) with Fraunces display serif for headings and wordmark; pixel-art favicons at `src/app/icon.png` and `apple-icon.png`; analytics via Vercel Analytics (`<Analytics />` in root layout).
- Keep Namecheap DNS with individual A/CNAME records (do not switch nameservers to Vercel) to preserve free email forwarding for `ronnie@dev-ron.com`.
- Contact form uses a Resend server action (honeypot + rate limit), sending from `contact@dev-ron.com` to `ronnie@dev-ron.com`; requires `RESEND_API_KEY` env var in Vercel.
- Raw resume `ronnie-scott-resume.pdf` at repo root is gitignored and must never be committed; the sanitized (phone-stripped) copy lives at `public/ronnie-scott-resume.pdf`.
- OG banners are 1200x630 with a "Visit dev-ron.com" CTA pill: `public/og.png` (Solarized light, active) and `public/og-dark.png` (dark variant for later use).
- `07-user-context.md` is the canonical source for resume content, writing style, values, and social links, and holds the placeholder swap-list tracking all placeholder copy awaiting real content.
- Static content data sources: `src/lib/projects.ts` (typed `Project` records), `src/lib/blog.ts` (typed `Post` records), and `src/lib/career.ts` (career timeline); real seeded projects are the AI Orchestration Server (public GitHub: `rdscott910/ai-orchestration-server`) and the FQB accounting platform (no public link).
- MDX blog pipeline: posts in `content/blog/*.mdx` with frontmatter (title, slug, description, date, tags, series, status, hidden); `published` = live at `/blog/[slug]`, `draft` = dev-only preview, `hidden` = never listed; rendered via `next-mdx-remote/rsc` with `sugar-high` code highlighting.
