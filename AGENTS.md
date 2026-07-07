# AGENTS.md

## Learned User Preferences

- Never put a phone number anywhere on the website (public pages, resume downloads, or any public-facing artifact).
- Do not use a personal Gmail address on the contact page; use LinkedIn/GitHub for MVP, then the confirmed domain alias `ronnie@dev-ron.com` post-MVP.
- Blog section uses draft-style article cards (labeled `Draft`, `Idea`, or `Planned`) — not "coming soon" placeholders.
- Do not edit plan files (`.cursor/plans/**`) when implementing a plan; only consume them as read-only specs.
- Do not create todos that are already created; mark existing todos `in_progress` as work starts.
- Do not stop between todos; complete all todos in a single session unless explicitly paused.
- Read `07-user-context.md` before writing any public-facing copy for the site.

## Learned Workspace Facts

- Project: personal portfolio website; Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui.
- Truth stack for agents lives in `.cursor/plans/roadmap-to-mvp/` (00–09 docs); treat these as authoritative specs.
- MVP phases 0–4 are complete; post-MVP roadmap is `08-post-mvp-roadmap.md` (phases 5–9) with 17 agent-sized slices in `09-post-mvp-slices.md`.
- Confirmed decisions: brand wordmark `dev-ron`; domain `dev-ron.com` (Namecheap); deployed on Vercel at dev-ron.vercel.app; contact form will use Resend; theme is Solarized light only; analytics via Vercel Analytics (`<Analytics />` in root layout).
- Keep Namecheap DNS with individual A/CNAME records (do not switch nameservers to Vercel) to preserve free email forwarding for `ronnie@dev-ron.com`.
- Raw resume `ronnie-scott-resume.pdf` at repo root is gitignored and must never be committed; the sanitized (phone-stripped) copy belongs in `public/`.
- OG banners are 1200x675: `public/og.png` (Solarized light, active) and `public/og-dark.png` (dark variant for later use).
- `07-user-context.md` is the canonical source for resume content, writing style, values, and social links.
- Static content data sources: `src/lib/projects.ts` (typed `Project` records) and `src/lib/blog.ts` (typed `Post` records).
- Real seeded projects: AI Orchestration Server (public GitHub: `rdscott910/ai-orchestration-server`) and FQB accounting platform (no public link).
- Approved contact channels for MVP: LinkedIn and GitHub only; no phone, no personal Gmail, no unverified forms.
