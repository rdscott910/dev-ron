# MVP Scope

## MVP Goal

Build the first shippable version of Ronnie's personal website as a professional portfolio and publishing home. The MVP should make it clear who Ronnie is, what he builds, where to find his work, and how to contact him.

## Required Pages

### Home

Purpose: give visitors a fast overview and route them to the most important areas.

Minimum content:

- Clear hero statement.
- Short professional positioning.
- Featured projects preview.
- Blog or writing preview, even if posts are placeholders.
- Contact call to action.

### Projects

Purpose: show technical work in a scannable format.

Minimum content:

- Project cards or list entries.
- Project title, description, role, stack, status, and links.
- Placeholder project entries are acceptable until real project copy is finalized.

### Blog

Purpose: establish the publishing surface.

Minimum content:

- Blog index route.
- Placeholder posts or a clear "writing coming soon" state.
- A provisional content model for title, description, date, tags, and status.

### About

Purpose: provide a fuller professional and personal introduction.

Minimum content:

- Longer bio.
- Technical focus areas.
- Values or working style.
- Professional artifacts placeholder, such as resume, case studies, talks, or certifications.

### Contact

Purpose: make it easy to reach Ronnie.

Minimum content:

- Email or mailto link.
- GitHub and LinkedIn links.
- Optional non-submitting form or static form shell.
- Clear expectation for response or collaboration topics.

## Non-Goals For MVP

- Authentication.
- CMS setup.
- MDX implementation.
- Database-backed contact submissions.
- Embedded apps section.
- Full professional artifacts library.
- Analytics dashboards.
- Newsletter or RSS automation.
- GitHub API integrations.
- Dark mode toggle beyond existing token support.

These ideas belong in `06-backlog.md` until explicitly promoted.

## Launch Criteria

The MVP is launch-ready when:

- All five required routes exist and render.
- Header and footer navigation work across all pages.
- Each page has structured placeholder or final content.
- Core metadata is present.
- Layouts are responsive at mobile, tablet, and desktop widths.
- Keyboard navigation is usable.
- `npm run lint` passes.
- `npm run build` passes.
