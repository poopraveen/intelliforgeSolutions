import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "IntelliForge serves legal, film production, healthcare, fitness, restaurants, and finance with purpose-built AI solutions.",
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
