export interface CareerEntry {
  role: string;
  org: string;
  period: string;
  location?: string;
  highlights: string[];
  stack: string[];
}

export interface EducationEntry {
  program: string;
  institution: string;
  period: string;
}

/** Transcribed from the sanitized public resume (public/ronnie-scott-resume.pdf). */
export const CAREER: CareerEntry[] = [
  {
    role: "Full Stack Software Engineer",
    org: "Takeout Central",
    period: "March 2021 – Present",
    location: "Remote",
    highlights: [
      "Architected and launched a Square payments integration bridging a legacy Perl monolith with a Node.js service layer — card-on-file workflows, delayed capture, refunds, and HMAC-verified webhooks.",
      "Built database-backed idempotency controls for payment, refund, and card operations to reduce duplicate transaction risk.",
      "Delivered integrations with major point-of-sale and order-management platforms, and integrated a headless CMS so marketing could self-serve content.",
      "Served as technical lead on platform initiatives: consulting with customers, scoping custom solutions, and estimating delivery.",
    ],
    stack: ["JavaScript", "Vue", "Node.js", "Perl", "MySQL", "GCP", "AWS"],
  },
  {
    role: "Software Engineer (Contract)",
    org: "Virnika",
    period: "March 2024 – March 2025",
    location: "Remote",
    highlights: [
      "Integrated an AI-powered restaurant phone-ordering platform with 20+ point-of-sale systems through Deliverect's channel integration.",
      "Helped build the admin dashboard for account management, billing, payments, and operational data.",
      "Contributed technical guidance on production readiness in support of investor-facing milestones.",
    ],
    stack: ["Node.js", "Express", "MongoDB Atlas", "Docker", "Retool", "AWS"],
  },
  {
    role: "Co-Founder / Software Engineer",
    org: "First Quality Books (FQB)",
    period: "Ongoing",
    highlights: [
      "Co-founder and active engineer on a GAAP-aligned desktop accounting application built as a full-stack TypeScript monorepo.",
      "Designed a contract-first API layer with ORPC and Zod, enforcing end-to-end type safety across 10+ business entities.",
      "Implemented a double-entry ledger with balanced-entry assertions, reversal flows, and void protections; designed 20+ relational PostgreSQL tables with Drizzle ORM.",
      "Created a 50+ component UI library and established CI/CD with Vitest, Playwright, and GitHub Actions across macOS, Ubuntu, and Windows.",
    ],
    stack: ["TypeScript", "Electron", "React", "PostgreSQL", "ORPC", "Drizzle"],
  },
  {
    role: "Junior Software Developer",
    org: "Takeout Central",
    period: "October 2019 – March 2021",
    location: "Chapel Hill, NC / Hybrid",
    highlights: [
      "Rebuilt critical customer-facing pages from Perl and jQuery to Vue.js, translating Storybook and Figma designs into reusable components.",
      "Integrated external APIs into an established Python/Django backend, delivering business-critical functionality.",
      "Shipped gift cards, SMS delivery tracking, and a referral code program from concept through deployment.",
    ],
    stack: ["Vue", "JavaScript", "Python", "Django", "Perl", "MySQL"],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    program: "Software Engineering Fellowship, Full Stack Web Development",
    institution: "Project Shift — Durham, NC",
    period: "2019",
  },
  {
    program: "Software Development (24 credits completed)",
    institution: "Durham Tech — Durham, NC",
    period: "2018 – 2019",
  },
  {
    program: "Music Education",
    institution: "Appalachian State University — Boone, NC",
    period: "2010 – 2014",
  },
  {
    program: "Music Education (Full Tuition Scholarship)",
    institution: "UNC Pembroke — Pembroke, NC",
    period: "2009 – 2010",
  },
];

export const CERTIFICATIONS: string[] = [
  "Microsoft Certified: MTA Software Development Fundamentals",
];
