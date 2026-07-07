# Content Model

Some content is now defined in `07-user-context.md`. Agents should use that file before writing public-facing copy. Anything still TBD should use structured placeholders that are easy to replace.

## Site Positioning

Working positioning:

> Ronnie is a full-stack software engineer building practical, accessible software, AI-assisted workflows, and useful developer-facing tools.

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

Use draft-style article cards for MVP. Do not add MDX or a CMS until that work is promoted from the backlog.

Recommended fields:

- `title`: post title.
- `slug`: future route-safe identifier.
- `description`: short summary.
- `date`: ISO date string when known.
- `tags`: topic labels.
- `status`: `idea`, `draft`, or `published`.

Blog post detail pages are optional for MVP. The required surface is the blog index.

For MVP, article cards should look like intentional drafts or planned essays, not broken placeholders. Use `draft` or `idea` status labels and avoid linking to missing post pages.

Known topic direction:

- Agentic orchestration.
- AI headlines and commentary.
- AI-assisted development workflows.
- Context engineering and persistent rule systems.
- Tech reviews.

## About Content

Suggested blocks:

- Professional summary.
- Technical focus areas.
- Working values.
- Personal note that gives the site voice.
- Professional artifacts placeholder.

Avoid over-specific claims until the user provides final content.

Use `ronnie-scott-resume.pdf` as the current resume source for professional history, skills, selected project experience, leadership, writing, community, education, and certifications. Do not publish the phone number anywhere on the website.

## Contact Content

Suggested blocks:

- Privacy-first contact CTA.
- GitHub and LinkedIn links.
- Collaboration topics, such as web apps, developer tools, consulting, or technical writing.
- Optional form shell if no backend is wired yet.

Preferred MVP direction:

- Do not publish a personal Gmail address.
- Do not publish a phone number anywhere on the website.
- Prefer a contact page that routes visitors to LinkedIn, GitHub, and a future professional email alias.
- If using email, use a dedicated public alias such as `hello@<domain>`, `contact@<domain>`, or `ronnie@<domain>` after a domain is chosen.
- If a form is present before backend handling exists, make its limitations clear in the UI and do not imply messages are being delivered.

Good post-MVP contact delivery options:

- Professional domain email alias forwarded to a private inbox.
- Vercel/Next.js server action using a transactional email provider such as Resend.
- Managed form provider with spam protection.
- Calendar link only after the user explicitly approves it.

Approved LinkedIn URL: `https://www.linkedin.com/in/ronnie-d-scott`

Confirm preferred public email alias before publishing an email address prominently.
