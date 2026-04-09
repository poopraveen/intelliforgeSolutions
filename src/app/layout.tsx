import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://intelliforge-solutions.vercel.app";
const FOUNDER  = "Praveen Kumar Yoganathan";
const COMPANY  = "IntelliForge Solutions";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${COMPANY} — Building Intelligent Systems for Every Industry`,
    template: `%s | ${COMPANY}`,
  },

  description:
    "IntelliForge Solutions by Praveen Kumar Yoganathan — AI-powered SaaS products for Legal, Healthcare, Finance, Fitness, Restaurants & Media. Book a free demo today.",

  keywords: [
    // Brand + founder keywords (primary targets)
    "IntelliForge Solutions",
    "IntelliForge AI",
    "intelliforge",
    "AI solution IntelliForge",
    "Praveen AI solution",
    "Praveen Kumar Yoganathan",
    "Praveen Kumar AI",
    "Praveen IntelliForge",
    // Product keywords
    "IntelliForge Legal",
    "IntelliForge Studio",
    "IntelliForge Fit",
    "IntelliForge Dine",
    "IntelliForge Pay",
    "IntelliForge Inventory",
    "IntelliForge Care",
    "IntelliForge Signals",
    // Generic AI SaaS keywords
    "AI SaaS India",
    "AI software India",
    "AI solutions Chennai",
    "AI solutions Tamil Nadu",
    "artificial intelligence SaaS",
    "AI-powered business software",
    "multi-product AI platform",
    // Industry-specific
    "legal AI software India",
    "AI for law firms India",
    "healthcare AI India",
    "AI gym management software",
    "AI restaurant management",
    "trading signals AI India",
    "AI inventory management India",
    "film production AI software",
    // Long-tail
    "best AI SaaS company India",
    "AI business automation India",
    "intelligent systems for business",
  ],

  authors: [{ name: FOUNDER, url: SITE_URL }],
  creator: FOUNDER,
  publisher: COMPANY,

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: COMPANY,
    title: `${COMPANY} — Building Intelligent Systems for Every Industry`,
    description:
      "AI-powered SaaS products by Praveen Kumar Yoganathan across Legal, Healthcare, Fitness, Restaurants, Film & Finance. 8 products. 6 industries.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "IntelliForge Solutions — AI-Powered SaaS for Every Industry",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${COMPANY} — AI Solutions for Every Industry`,
    description:
      "8 AI products. 6 industries. Built by Praveen Kumar Yoganathan. Legal, Healthcare, Finance, Fitness, Restaurants & Media.",
    images: [`${SITE_URL}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  verification: {
    // Add your Google Search Console verification token here after claiming:
    // google: "YOUR_GSC_VERIFICATION_TOKEN",
  },

  category: "technology",
};

// ─── JSON-LD Structured Data ───────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY,
      alternateName: ["IntelliForge", "IntelliForge AI"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      description:
        "IntelliForge Solutions is an AI-powered SaaS company delivering intelligent products across legal, healthcare, finance, fitness, restaurants, and media industries.",
      foundingDate: "2023",
      founder: {
        "@type": "Person",
        name: FOUNDER,
        jobTitle: "Founder & CEO",
        url: SITE_URL,
        sameAs: [],
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-8056497843",
          contactType: "customer service",
          email: "pooprav26@gmail.com",
          areaServed: "IN",
          availableLanguage: ["English", "Tamil", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-8056497843",
          contactType: "sales",
          email: "pooprav26@gmail.com",
          areaServed: "IN",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "No 7, Nehru Street",
        addressLocality: "Veppampattu",
        addressRegion: "Tamil Nadu",
        postalCode: "602024",
        addressCountry: "IN",
      },
      sameAs: [
        `${SITE_URL}`,
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IntelliForge AI Products",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "IntelliForge Legal" } },
          { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "IntelliForge Studio" } },
          { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "IntelliForge Fit" } },
          { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "IntelliForge Dine" } },
          { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "IntelliForge Pay" } },
          { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "IntelliForge Inventory" } },
          { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "IntelliForge Care" } },
          { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "IntelliForge Signals" } },
        ],
      },
    },
    // Local Business
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: COMPANY,
      image: `${SITE_URL}/og-image.png`,
      url: SITE_URL,
      telephone: "+91-8056497843",
      email: "pooprav26@gmail.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No 7, Nehru Street",
        addressLocality: "Veppampattu",
        addressRegion: "Tamil Nadu",
        postalCode: "602024",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "13.1986",
        longitude: "79.9072",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
    },
    // Person — Founder
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      name: FOUNDER,
      jobTitle: "Founder & CEO",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      url: SITE_URL,
      knowsAbout: [
        "Artificial Intelligence",
        "SaaS Products",
        "Legal Tech",
        "Healthcare AI",
        "Fintech",
        "Machine Learning",
        "Business Automation",
      ],
    },
    // Website
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY,
      description: "AI-powered SaaS ecosystem for every industry",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/products?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai, Tamil Nadu, India" />
        <meta name="geo.position" content="13.1986;79.9072" />
        <meta name="ICBM" content="13.1986, 79.9072" />
        {/* Additional SEO */}
        <meta name="author" content={FOUNDER} />
        <meta name="owner" content={FOUNDER} />
        <meta name="reply-to" content="pooprav26@gmail.com" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={SITE_URL} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
