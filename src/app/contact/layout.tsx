import type { Metadata } from "next";

const SITE_URL = "https://intelliforge-solutions.vercel.app";

export const metadata: Metadata = {
  title: "Contact & Book a Demo — IntelliForge Solutions | +91 8056497843",
  description:
    "Contact IntelliForge Solutions by Praveen Kumar Yoganathan. Book a free AI demo for your business. Call +91 8056497843 or email pooprav26@gmail.com. Based in Chennai, Tamil Nadu.",
  keywords: [
    "IntelliForge contact",
    "Praveen Kumar Yoganathan contact",
    "IntelliForge demo",
    "AI demo India",
    "IntelliForge Chennai",
    "contact AI solutions India",
    "book AI demo India",
    "IntelliForge phone number",
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Book a Free AI Demo | IntelliForge Solutions",
    description:
      "Request a personalized demo from IntelliForge Solutions. Contact Praveen Kumar Yoganathan's team at +91 8056497843.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
