import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-ron.com"),
  title: {
    default: "Ronnie Scott — Full-Stack Software Engineer",
    template: "%s | Ronnie Scott",
  },
  description:
    "Full-stack software engineer building practical, accessible software, developer tooling, and AI-assisted workflows. Six years of startup experience shipping production software end to end.",
  openGraph: {
    siteName: "Ronnie Scott",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-[calc(100dvh-8rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
