import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book a Demo",
  description:
    "Book a personalized demo with IntelliForge Solutions. See AI in action for your specific industry — Legal, Healthcare, Fitness, Restaurants, Film, or Finance.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
