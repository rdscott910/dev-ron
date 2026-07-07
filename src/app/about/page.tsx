import type { Metadata } from "next";

import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-stack software engineer with six years of startup experience across UI, APIs, integrations, internal tooling, and AI-assisted development workflows. Builder at heart, musician on the side.",
};

export default function AboutPage() {
  return (
    <>
      <h1 className="sr-only">About Ronnie</h1>
      <About />
    </>
  );
}
