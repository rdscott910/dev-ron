import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TECH_STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-5xl px-6 py-24"
    >
      <SectionHeading
        title="About Me"
        subtitle="Get to know me"
        id="about"
        className="mb-12"
      />

      <div className="grid items-start gap-12 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl">
          <Image
            src="/Pixel_Ron.png"
            alt="Pixel art portrait of Ronnie wearing a Patagonia cap, glasses, and a gray jacket with mountains in the background"
            width={400}
            height={533}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I&apos;m a software engineer who thrives at the intersection of
            design and engineering. I specialize in building full-stack web
            applications that are fast, accessible, and a joy to use.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            When I&apos;m not coding, you&apos;ll find me exploring the
            outdoors, tinkering with side projects, or diving into the latest
            tech. I believe great software starts with empathy for the people who
            use it.
          </p>

          <div>
            <h3 className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Tech I work with
            </h3>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
