import Link from "next/link";
import { Github, ExternalLink, BookOpen } from "lucide-react";

import { getAllProjects } from "@/lib/projects";
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
import { SectionHeading } from "@/components/ui/SectionHeading";

const STATUS_LABELS: Record<string, string> = {
  "in-progress": "In Progress",
  shipped: "Shipped",
  concept: "Concept",
  archived: "Archived",
};

export function Projects() {
  const projects = getAllProjects();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-5xl px-6 py-24"
    >
      <SectionHeading
        title="Projects"
        subtitle="What I've built"
        id="projects"
        className="mb-12"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.slug} className="flex flex-col">
            <CardHeader>
              <div className="mb-1">
                <span className="text-xs font-medium text-muted-foreground">
                  {STATUS_LABELS[project.status] ?? project.status}
                </span>
              </div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {project.summary}
              </CardDescription>
              <p className="pt-1 text-xs leading-relaxed text-muted-foreground/70">
                <span className="font-medium text-muted-foreground">
                  Problem:{" "}
                </span>
                {project.problem}
              </p>
            </CardHeader>

            <CardContent className="flex-1 space-y-3">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground/70">Role: </span>
                {project.role}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="gap-2">
              {project.links.github ? (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-1.5 h-3.5 w-3.5" />
                    GitHub
                  </a>
                </Button>
              ) : (
                <Button variant="outline" size="sm" disabled>
                  <Github className="mr-1.5 h-3.5 w-3.5" />
                  GitHub
                </Button>
              )}
              {project.links.live ? (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                    Live Demo
                  </a>
                </Button>
              ) : null}
              {project.links.caseStudy ? (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.links.caseStudy}>
                    <BookOpen className="mr-1.5 h-3.5 w-3.5" />
                    Case Study
                  </Link>
                </Button>
              ) : null}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
