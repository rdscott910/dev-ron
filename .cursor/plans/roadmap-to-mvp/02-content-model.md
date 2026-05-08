# Content Model

Final content is TBD. Until then, agents should use structured placeholders that are easy to replace.

## Site Positioning

Working positioning:

> Ronnie is a software engineer building performant, accessible web applications and useful developer-facing tools.

Agents may refine wording for clarity, but should avoid inventing detailed career claims, employers, credentials, or metrics that are not provided.

## Home Page

Suggested sections:

- Hero: name, role, short value statement, primary CTA to projects, secondary CTA to contact.
- Featured projects: 2-3 highlighted projects using the shared project model.
- Writing preview: recent or upcoming posts using the shared blog model.
- About teaser: short paragraph linking to `/about`.
- Contact CTA: short invitation linking to `/contact`.

## Project Model

Use local static data for MVP.

Recommended fields:

- `title`: project name.
- `slug`: route-safe identifier for future detail pages.
- `summary`: one or two sentence description.
- `problem`: what the project addresses.
- `role`: Ronnie's contribution.
- `stack`: technologies used.
- `status`: `concept`, `in-progress`, `shipped`, or `archived`.
- `links`: GitHub, live demo, case study, or external resource.
- `featured`: whether it appears on the home page.

Project detail pages are not required for MVP.

## Blog Model

Use placeholder metadata for MVP. Do not add MDX or a CMS until that work is promoted from the backlog.

Recommended fields:

- `title`: post title.
- `slug`: future route-safe identifier.
- `description`: short summary.
- `date`: ISO date string when known.
- `tags`: topic labels.
- `status`: `idea`, `draft`, or `published`.

Blog post detail pages are optional for MVP. The required surface is the blog index.

## About Content

Suggested blocks:

- Professional summary.
- Technical focus areas.
- Working values.
- Personal note that gives the site voice.
- Professional artifacts placeholder.

Avoid over-specific claims until the user provides final content.

## Contact Content

Suggested blocks:

- Direct email or mailto CTA.
- GitHub and LinkedIn links.
- Collaboration topics, such as web apps, developer tools, consulting, or technical writing.
- Optional form shell if no backend is wired yet.

If a form is present before backend handling exists, make its limitations clear in the UI or keep the mailto CTA primary.
