import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "IntelliForge Solutions — Building Intelligent Systems for Every Industry",
    template: "%s | IntelliForge Solutions",
  },
  description:
    "IntelliForge Solutions is an AI-powered SaaS ecosystem delivering intelligent products across legal, healthcare, finance, fitness, restaurants, and media industries.",
  keywords: [
    "AI SaaS",
    "Legal AI",
    "Healthcare AI",
    "Restaurant Management AI",
    "Gym Management Software",
    "Film Production AI",
    "Trading Signals AI",
    "IntelliForge",
    "India AI startup",
  ],
  authors: [{ name: "IntelliForge Solutions" }],
  creator: "IntelliForge Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "IntelliForge Solutions",
    title: "IntelliForge Solutions — Building Intelligent Systems for Every Industry",
    description:
      "AI-powered SaaS ecosystem with 8 intelligent products across 6 industries. Legal, Healthcare, Finance, Fitness, Restaurants, Film & Media.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IntelliForge Solutions",
    description: "Building Intelligent Systems for Every Industry",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
