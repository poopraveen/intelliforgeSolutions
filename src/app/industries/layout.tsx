import type { Metadata } from "next";

const SITE_URL = "https://intelliforge-solutions.vercel.app";

export const metadata: Metadata = {
  title: "Industries — AI Solutions for Legal, Healthcare, Finance, Fitness & More",
  description:
    "IntelliForge Solutions serves Legal, Film & Media, Fitness, Restaurants, Healthcare, and Finance with AI solutions. Praveen Kumar Yoganathan's AI ecosystem for every industry.",
  keywords: [
    "AI for legal industry India",
    "AI for healthcare India",
    "AI for restaurants India",
    "AI for gyms India",
    "AI for film production India",
    "AI for finance India",
    "IntelliForge industries",
    "AI solutions every industry",
    "Praveen Kumar Yoganathan industries",
  ],
  alternates: { canonical: `${SITE_URL}/industries` },
  openGraph: {
    title: "Industries Served | IntelliForge AI Solutions",
    description:
      "AI solutions for Legal, Film, Fitness, Restaurants, Healthcare, and Finance — IntelliForge Solutions covers every industry.",
    url: `${SITE_URL}/industries`,
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
