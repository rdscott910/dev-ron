# Roadmap To MVP

This directory is the source of truth for building the MVP of Ronnie's personal website.

Agents should read this file first, then open the most relevant supporting doc before planning or implementing a slice.

## Truth Stack

1. `01-mvp-scope.md` defines what is in and out of the MVP.
2. `02-content-model.md` defines provisional content for each page while final copy is TBD.
3. `03-phase-roadmap.md` defines the build phases.
4. `04-implementation-slices.md` breaks phases into manageable implementation slices.
5. `05-verification-rubric.md` defines the checks each slice must pass.
6. `06-backlog.md` captures useful ideas that should not block the MVP.
7. `07-user-context.md` captures user-provided identity, content, project, style, and privacy guidance.
8. `08-post-mvp-roadmap.md` defines Phases 5–9: repo safety, deploy/domain, contact/resume, visual identity, and content expansion.
9. `09-post-mvp-slices.md` breaks Phases 5–9 into implementation slices.

## Agent Workflow

1. Read the MVP scope.
2. Read the user context before writing public-facing content.
3. Pick one implementation slice.
4. Check the relevant Cursor rules in `.cursor/rules/`.
5. Inspect existing code before editing.
6. Implement only the selected slice.
7. Run the verification steps that apply.
8. Update progress notes in the roadmap docs when the slice changes the plan.
9. Summarize completed work, verification, and open gaps.

## Current Product Goal

Ship a minimal, professional, route-based personal site with:

- Home page
- Projects page
- Blog page
- About page
- Contact page

The MVP should feel complete with structured placeholder content, even while final copy, artifacts, embedded apps, and richer project details are still evolving.
