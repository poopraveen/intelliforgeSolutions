import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Products",
  description:
    "Explore IntelliForge's 8 AI products: Legal, Studio, Fit, Dine, Pay, Inventory, Care, and Signals. Purpose-built AI for every industry.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
