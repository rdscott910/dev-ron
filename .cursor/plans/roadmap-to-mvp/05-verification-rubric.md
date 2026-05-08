# Verification Rubric

Agents must verify the behavior they change. Use this rubric to choose the right checks for each slice.

## Required For Any Code Slice

- Inspect the changed page or component in context.
- Confirm there are no obvious TypeScript or lint diagnostics in edited files.
- Preserve existing user changes unless explicitly instructed otherwise.
- Summarize what was verified and what was not verified.

## Routing Checks

Apply when adding or changing pages, header links, footer links, or CTAs.

- `/` renders.
- `/projects` renders.
- `/blog` renders.
- `/about` renders.
- `/contact` renders.
- Header links reach the expected route.
- Mobile nav opens, closes, and links work.
- CTAs do not point to missing anchors or placeholder routes.

## Accessibility Checks

Apply when changing UI, content structure, navigation, forms, or media.

- Each page has one clear `h1`.
- Sections use semantic elements where practical.
- Interactive elements have visible focus states.
- Links and buttons have meaningful accessible names.
- Images have useful `alt` text, or are marked decorative.
- Forms use labels connected to controls.
- Keyboard navigation works with Tab, Shift+Tab, Enter, and Escape where relevant.
- Text contrast should target WCAG 2.1 AA.

## Responsive Checks

Apply when changing layout or page composition.

- Mobile width around 375px.
- Tablet width around 768px.
- Desktop width around 1280px.
- Touch targets are at least 44px where practical.
- Content does not overflow horizontally.
- Cards and grids remain readable when stacked.

## SEO And Metadata Checks

Apply when changing routes or metadata.

- Page title is specific and concise.
- Description accurately reflects page content.
- Metadata does not claim unpublished content.
- Social and external links use appropriate `target` and `rel` values.

## Command Checks

Run when implementation changes are complete or before launch:

```bash
npm run lint
npm run build
```

If a command cannot be run, explain why and document the risk.

## Documentation Checks

Apply when roadmap docs change.

- New docs link together clearly.
- Deferred ideas go to `06-backlog.md`.
- Implementation guidance names likely files but does not require unnecessary architecture.
- Roadmap docs do not contradict `.cursor/rules/` guidance.

## Launch Review

Before calling the MVP launch-ready, verify:

- All required pages render.
- Primary navigation is complete.
- Placeholder content is intentional and not broken.
- Lint passes.
- Build passes.
- Backlog has known post-MVP work.
