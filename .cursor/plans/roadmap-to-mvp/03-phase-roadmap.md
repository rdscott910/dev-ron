# Phase Roadmap

## Phase 0: Truth Stack Foundation

Goal: establish the docs agents will use to coordinate MVP work.

Deliverables:

- Roadmap directory exists.
- MVP scope is documented.
- Content model is documented.
- Implementation slices are documented.
- Verification rubric is documented.
- Root roadmap points to this directory.

Exit criteria:

- A future agent can understand the MVP without reading prior chats.

## Phase 1: App Shell And Routes

Goal: move from a single-page portfolio shell to a five-route MVP.

Deliverables:

- Routes for `/`, `/projects`, `/blog`, `/about`, and `/contact`.
- Header navigation links to routes instead of in-page anchors.
- Footer supports the same core navigation or clear secondary links.
- Home page remains useful after About and Projects move to dedicated pages.

Exit criteria:

- All MVP routes render and are reachable from the primary navigation.

## Phase 2: Static Content Foundation

Goal: make content reusable and easy to replace.

Deliverables:

- Local project data module.
- Local blog metadata module or placeholder structure.
- Shared page or section components where reuse is valuable.
- No CMS, MDX, or database dependency.

Exit criteria:

- Home and index pages can render from shared static data.

## Phase 3: MVP Page Delivery

Goal: make each MVP page feel intentionally designed, even with placeholder copy.

Deliverables:

- Home page with hero, featured work, writing preview, and contact CTA.
- Projects page with scannable project cards.
- Blog page with coming-soon or placeholder post cards.
- About page with longer bio and artifacts placeholder.
- Contact page with direct contact options and optional form shell.

Exit criteria:

- Each page has a clear purpose, heading structure, and call to action.

## Phase 4: Launch Quality

Goal: make the MVP fit for sharing.

Deliverables:

- Page metadata.
- Responsive layout pass.
- Accessibility pass.
- Lint and production build verification.
- Backlog updated with deferred items and known gaps.

Exit criteria:

- `npm run lint` and `npm run build` pass.
- Known non-MVP work is documented instead of hidden in code comments.
