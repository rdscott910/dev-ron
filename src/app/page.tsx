import Link from "next/link";
import type { Metadata } from "next";

import { getFeaturedProjects } from "@/lib/projects";
import { getWritingPreview } from "@/lib/blog";
import { Hero } from "@/components/sections/Hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Ronnie Scott — full-stack software engineer. Explore featured projects, writing on AI-assisted development, and ways to get in touch.",
};

const STATUS_LABELS: Record<string, string> = {
  "in-progress": "In Progress",
  shipped: "Shipped",
  concept: "Concept",
  archived: "Archived",
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* About teaser */}
      <section
        aria-labelledby="about-teaser-heading"
        className="border-t border-border bg-muted/20"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h2
              id="about-teaser-heading"
              className="mb-2 text-lg font-semibold tracking-tight"
            >
              Six years building at startups, end to end.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I work across the full stack — UI, APIs, integrations, and
              internal tooling — and use AI as a daily development multiplier.
              Builder at heart. Musician on the side.
            </p>
          </div>
          <Button variant="outline" size="sm" className="shrink-0" asChild>
            <Link href="/about">More about me →</Link>
          </Button>
        </div>
      </section>

      {/* Featured work */}
      <section
        aria-labelledby="featured-work-heading"
        className="mx-auto max-w-5xl px-6 py-20"
      >
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-1 text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Selected Work
            </p>
            <h2
              id="featured-work-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              What I&apos;ve been building
            </h2>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/projects">All projects →</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {getFeaturedProjects().map((project) => (
            <Card key={project.slug} className="flex flex-col">
              <CardHeader className="flex-1">
                <div className="mb-1">
                  <span className="text-xs font-medium text-muted-foreground">
                    {STATUS_LABELS[project.status] ?? project.status}
                  </span>
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {project.links.github && (
                <CardFooter>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Writing preview */}
      <section
        aria-labelledby="writing-preview-heading"
        className="border-t border-border bg-muted/30"
      >
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-1 text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Writing
              </p>
              <h2
                id="writing-preview-heading"
                className="text-2xl font-bold tracking-tight sm:text-3xl"
              >
                Thoughts on building with AI
              </h2>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog">All posts →</Link>
            </Button>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2" role="list">
            {getWritingPreview(2).map((post) => (
              <li
                key={post.slug}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="mb-2">
                  <span className="text-xs font-medium capitalize text-muted-foreground">
                    {post.status}
                  </span>
                </div>
                <p className="font-medium leading-snug text-foreground">
                  {post.title}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        aria-labelledby="contact-cta-heading"
        className="mx-auto max-w-5xl px-6 py-20 text-center"
      >
        <h2
          id="contact-cta-heading"
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Have an interesting problem to solve?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          I&apos;m open to conversations about full-stack projects, developer
          tooling, AI workflows, and technical consulting.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" className="rounded-full" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full" asChild>
            <Link href="/about">More About Me</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
