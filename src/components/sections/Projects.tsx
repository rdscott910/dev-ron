import { Github, ExternalLink } from "lucide-react";

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

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

const PROJECTS: Project[] = [
  {
    title: "Cloud Dashboard",
    description:
      "A real-time monitoring dashboard for cloud infrastructure with interactive charts and alerting.",
    tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Flow API",
    description:
      "RESTful API for project management with role-based access control and webhook integrations.",
    tech: ["Node.js", "Express", "PostgreSQL", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "DevLog",
    description:
      "A minimal blogging platform for developers with MDX support, syntax highlighting, and RSS feeds.",
    tech: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    github: "#",
    live: "#",
  },
];

export function Projects() {
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="gap-2">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
