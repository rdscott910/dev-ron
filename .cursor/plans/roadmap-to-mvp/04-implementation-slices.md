# Implementation Slices

Each slice should be small enough for one focused agent pass. Agents should complete verification for the slice before moving to another one.

## Slice 0.1: Roadmap Docs

Likely files:

- `.cursor/plans/roadmap-to-mvp/*`
- `.cursor/plans/roadmap.md`

Tasks:

- Create the roadmap directory.
- Add scope, content, phase, slice, verification, and backlog docs.
- Link the existing root roadmap to the new source of truth.

Acceptance criteria:

- The docs explain what to build, what not to build, and how to verify work.
- Future agents can start from `00-readme.md`.

## Slice 1.1: Route Skeletons

Likely files:

- `src/app/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`

Tasks:

- Add minimal pages for all MVP routes.
- Give each page one semantic `h1`.
- Keep placeholder content structured and easy to replace.

Acceptance criteria:

- `/`, `/projects`, `/blog`, `/about`, and `/contact` render without errors.
- Pages do not rely on hash anchors for core navigation.

## Slice 1.2: Navigation Shell

Likely files:

- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`

Tasks:

- Update primary nav links to route paths.
- Ensure mobile navigation closes after selecting a route.
- Consider adding Blog to the footer or primary social/navigation cluster.

Acceptance criteria:

- Header navigation reaches every MVP page.
- Mobile menu remains keyboard usable.
- Current links do not point to missing anchors.

## Slice 2.1: Static Project Data

Likely files:

- `src/lib/projects.ts`
- `src/components/sections/Projects.tsx`
- `src/app/projects/page.tsx`

Tasks:

- Move project placeholder data into a reusable module.
- Add fields from `02-content-model.md`.
- Reuse data for both home previews and the Projects page.

Acceptance criteria:

- Project cards render from shared data.
- Home can show featured projects without duplicating project definitions.

## Slice 2.2: Static Blog Data

Likely files:

- `src/lib/blog.ts`
- `src/app/blog/page.tsx`
- `src/app/page.tsx`

Tasks:

- Add placeholder blog metadata.
- Render blog index cards or a structured coming-soon state.
- Optionally show a small writing preview on the home page.

Acceptance criteria:

- Blog page has a clear content model.
- No MDX, CMS, or dynamic post routing is introduced unless explicitly approved.

## Slice 3.1: Home Page MVP

Likely files:

- `src/app/page.tsx`
- `src/components/sections/Hero.tsx`
- Optional new sections in `src/components/sections/`

Tasks:

- Refocus home page around intro, featured work, writing preview, and contact CTA.
- Keep the page concise and route users to deeper pages.

Acceptance criteria:

- Home is not just a duplicate of About and Projects.
- Primary CTA leads to Projects or Contact.

## Slice 3.2: About Page MVP

Likely files:

- `src/app/about/page.tsx`
- `src/components/sections/About.tsx`

Tasks:

- Expand the existing About section into a dedicated page or page-specific composition.
- Include bio, technical focus, working values, and artifacts placeholder.

Acceptance criteria:

- About page can stand alone for a first-time visitor.
- Existing profile image remains accessible with useful alt text.

## Slice 3.3: Projects Page MVP

Likely files:

- `src/app/projects/page.tsx`
- `src/components/sections/Projects.tsx`
- `src/lib/projects.ts`

Tasks:

- Render all projects from the shared project model.
- Show role, stack, status, and links.
- Avoid broken external links where possible; use disabled or omitted actions for unknown links.

Acceptance criteria:

- Every project card has enough context to understand the work.
- Placeholder links do not create misleading navigation.

## Slice 3.4: Blog Page MVP

Likely files:

- `src/app/blog/page.tsx`
- `src/lib/blog.ts`

Tasks:

- Render placeholder posts or a polished writing-coming-soon state.
- Use tags and status values from the content model.

Acceptance criteria:

- Blog page establishes the future publishing direction.
- It does not imply published content that does not exist.

## Slice 3.5: Contact Page MVP

Likely files:

- `src/app/contact/page.tsx`
- Optional `src/components/sections/Contact.tsx`

Tasks:

- Provide direct contact methods.
- Add collaboration prompts or topics.
- If adding a form shell, make mailto the primary working path until backend handling exists.

Acceptance criteria:

- Visitors can contact Ronnie without JavaScript.
- Any form UI has labels, focus states, and no misleading submit behavior.

## Slice 4.1: Metadata And SEO

Likely files:

- `src/app/layout.tsx`
- Per-route `page.tsx` files
- Optional `src/app/sitemap.ts`
- Optional `src/app/robots.ts`

Tasks:

- Add useful metadata for the site and each page.
- Include canonical-friendly titles and descriptions.
- Defer dynamic Open Graph images to backlog unless explicitly approved.

Acceptance criteria:

- Each MVP route has a meaningful title and description.
- Metadata does not overclaim content that is still placeholder.

## Slice 4.2: Verification And Launch Pass

Likely files:

- Code files touched by previous slices.
- `.cursor/plans/roadmap-to-mvp/06-backlog.md`

Tasks:

- Run lint and build.
- Check mobile, tablet, and desktop layouts.
- Check keyboard navigation and focus visibility.
- Update backlog with any launch gaps or deferred work.

Acceptance criteria:

- `npm run lint` passes.
- `npm run build` passes.
- Any remaining issues are documented with priority.
