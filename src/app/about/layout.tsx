import type { Metadata } from "next";

const SITE_URL = "https://intelliforge-solutions.vercel.app";

export const metadata: Metadata = {
  title: "About — Praveen Kumar Yoganathan & IntelliForge Solutions",
  description:
    "Learn about IntelliForge Solutions founded by Praveen Kumar Yoganathan. Our vision: AI-native business tools for every Indian industry. Mission, values, and our story.",
  keywords: [
    "Praveen Kumar Yoganathan",
    "Praveen AI founder",
    "IntelliForge founder",
    "IntelliForge about",
    "AI company India founder",
    "Chennai AI startup founder",
    "Praveen Kumar IntelliForge",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About IntelliForge Solutions | Founded by Praveen Kumar Yoganathan",
    description:
      "The story, vision, and mission behind IntelliForge Solutions — the AI company building intelligent systems for every industry.",
    url: `${SITE_URL}/about`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
