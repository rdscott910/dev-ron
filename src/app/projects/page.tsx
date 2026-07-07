import type { Metadata } from "next";

import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected engineering work including an AI orchestration server for macOS workflows and a full-stack GAAP-aligned accounting platform. Practical software built end to end.",
};

export default function ProjectsPage() {
  return (
    <>
      <h1 className="sr-only">Projects</h1>
      <Projects />
    </>
  );
}
