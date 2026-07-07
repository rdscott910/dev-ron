# AGENTS.md

## Learned User Preferences

- Never put a phone number anywhere on the website (public pages, resume downloads, or any public-facing artifact).
- Do not use a personal Gmail address on the contact page; use LinkedIn/GitHub for MVP, then a professional domain alias (e.g. `hello@<domain>`) post-MVP.
- Blog section uses draft-style article cards (labeled `Draft`, `Idea`, or `Planned`) — not "coming soon" placeholders.
- Do not edit plan files (`.cursor/plans/**`) when implementing a plan; only consume them as read-only specs.
- Do not create todos that are already created; mark existing todos `in_progress` as work starts.
- Do not stop between todos; complete all todos in a single session unless explicitly paused.
- Read `07-user-context.md` before writing any public-facing copy for the site.

## Learned Workspace Facts

- Project: personal portfolio website; Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui.
- Truth stack for agents lives in `.cursor/plans/roadmap-to-mvp/` (00–07 docs); treat these as authoritative specs.
- `07-user-context.md` is the canonical source for resume content, writing style, values, and social links.
- Static content data sources: `src/lib/projects.ts` (typed `Project` records) and `src/lib/blog.ts` (typed `Post` records).
- Real seeded projects: AI Orchestration Server (public GitHub: `rdscott910/ai-orchestration-server`) and FQB accounting platform (no public link).
- Approved contact channels for MVP: LinkedIn and GitHub only; no phone, no personal Gmail, no unverified forms.
- Resume PDF (`ronnie-scott-resume.pdf`) must have phone number stripped before any public or downloadable use.
- Visual direction: vintage/Solarized aesthetic is on the backlog as a preferred theme direction.
