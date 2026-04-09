import type { Metadata } from "next";

const SITE_URL = "https://intelliforge-solutions.vercel.app";

export const metadata: Metadata = {
  title: "AI Products — Legal, Healthcare, Fitness, Restaurant, Finance & More",
  description:
    "Explore IntelliForge's 8 AI-powered SaaS products: Legal, Studio, Fit, Dine, Pay, Inventory, Care, and Signals. Built by Praveen Kumar Yoganathan for real industry challenges.",
  keywords: [
    "IntelliForge products",
    "AI legal software",
    "AI healthcare platform",
    "AI gym management",
    "AI restaurant software",
    "AI trading signals",
    "AI inventory management",
    "Praveen Kumar Yoganathan AI products",
    "IntelliForge AI solutions",
  ],
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: {
    title: "AI Products by IntelliForge Solutions | 8 Industry-Specific AI Tools",
    description:
      "8 purpose-built AI products for Legal, Film, Fitness, Restaurants, Healthcare, and Finance — by IntelliForge Solutions.",
    url: `${SITE_URL}/products`,
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
