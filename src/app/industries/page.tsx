"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, ChevronRight } from "lucide-react";
import { industries } from "@/lib/data";

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("revealed")),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);
}

// Per-industry accent colors
const accentColors: Record<string, string> = {
  legal: "#6366f1",
  film: "#f43f5e",
  fitness: "#10b981",
  restaurants: "#f59e0b",
  healthcare: "#ef4444",
  finance: "#3b82f6",
};

export default function IndustriesPage() {
  useReveal();

  return (
    <div className="min-h-screen">
      {/* ─── PAGE HERO ───────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050f] via-[#080820] to-[#05050f]" />
        <div
          className="glow-orb absolute top-0 left-1/3 w-[600px] h-[400px] opacity-10"
          style={{ background: "radial-gradient(ellipse, #6366f1, transparent)" }}
        />
        <div className="container-wide relative z-10 text-center">
          <div className="reveal section-label inline-flex mb-6">
            <Zap className="w-3.5 h-3.5" fill="currentColor" />
            AI Across Industries
          </div>
          <h1 className="reveal delay-100 section-heading text-white mb-4">
            Transforming the Industries{" "}
            <span className="gradient-text">That Run India</span>
          </h1>
          <p className="reveal delay-200 text-slate-400 text-lg max-w-2xl mx-auto">
            IntelliForge doesn&apos;t build horizontal AI tools. We go deep into
            specific industries — understanding their workflows, data, and
            challenges — and build AI that changes the game for every practitioner
            in that field.
          </p>
        </div>
      </section>

      {/* ─── INDUSTRY CARDS ──────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container-wide flex flex-col gap-16">
          {industries.map((industry, idx) => {
            const accent = accentColors[industry.id] || "#6366f1";
            const isEven = idx % 2 === 0;

            return (
              <div
                key={industry.id}
                id={industry.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "lg:grid-flow-col-reverse"
                }`}
              >
                {/* Content */}
                <div className={isEven ? "reveal-left" : "reveal-right order-1 lg:order-2"}>
                  {/* Industry label */}
                  <div
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
                    style={{
                      color: accent,
                      background: `${accent}15`,
                      border: `1px solid ${accent}25`,
                    }}
                  >
                    <span>{industry.icon}</span>
                    {industry.name}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                    AI-Powered Intelligence for{" "}
                    <span style={{ color: accent }}>{industry.name}</span>
                  </h2>

                  <p className="text-slate-400 text-base leading-relaxed mb-5">
                    {industry.description}
                  </p>

                  {/* Problem */}
                  <div className="glass-card rounded-xl p-4 mb-5 border-l-2" style={{ borderLeftColor: accent }}>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: accent }}>
                      The Problem
                    </div>
                    <p className="text-sm text-slate-400">{industry.pain}</p>
                  </div>

                  {/* Solution */}
                  <div
                    className="rounded-xl p-4 mb-6"
                    style={{
                      background: `${accent}10`,
                      border: `1px solid ${accent}20`,
                    }}
                  >
                    <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: accent }}>
                      The IntelliForge Solution
                    </div>
                    <p className="text-sm text-slate-400">{industry.solution}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {industry.stats.map((stat) => (
                      <div
                        key={stat}
                        className="glass-card rounded-xl p-3 text-center"
                      >
                        <div className="text-sm font-extrabold mb-0.5" style={{ color: accent }}>
                          {stat.split(" ")[0]}
                        </div>
                        <div className="text-[10px] text-slate-500 leading-tight">
                          {stat.split(" ").slice(1).join(" ")}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Products used */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {industry.products.map((p) => (
                      <span
                        key={p}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full"
                        style={{
                          color: accent,
                          background: `${accent}12`,
                          border: `1px solid ${accent}20`,
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href="/contact" className="btn-primary">
                    <span>Get a Demo for {industry.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Visual panel */}
                <div className={isEven ? "reveal-right" : "reveal-left order-2 lg:order-1"}>
                  <div
                    className="rounded-2xl p-8 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${accent}12, ${accent}05, transparent)`,
                      border: `1px solid ${accent}20`,
                    }}
                  >
                    {/* Background glow */}
                    <div
                      className="glow-orb absolute top-0 right-0 w-48 h-48 opacity-20"
                      style={{ background: `radial-gradient(circle, ${accent}, transparent)` }}
                    />

                    {/* Industry icon large */}
                    <div className="text-7xl mb-6">{industry.icon}</div>

                    {/* Fake metrics UI */}
                    <div className="flex flex-col gap-3">
                      {industry.stats.map((stat, si) => (
                        <div key={si} className="glass-card rounded-xl p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-slate-500 font-medium">
                              {stat.split(" ").slice(1).join(" ")}
                            </span>
                            <CheckCircle
                              className="w-4 h-4"
                              style={{ color: accent }}
                            />
                          </div>
                          {/* Progress bar */}
                          <div className="w-full bg-white/[0.04] rounded-full h-2">
                            <div
                              className="h-2 rounded-full transition-all duration-700"
                              style={{
                                background: `linear-gradient(90deg, ${accent}, ${accent}88)`,
                                width: stat.split(" ")[0].includes("%")
                                  ? stat.split(" ")[0]
                                  : `${60 + si * 12}%`,
                              }}
                            />
                          </div>
                          <div
                            className="text-sm font-bold mt-2"
                            style={{ color: accent }}
                          >
                            {stat.split(" ")[0]}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* AI tag */}
                    <div className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Powered by IntelliForge AI
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── UNIVERSAL AI CAPABILITIES ───────────────────────────────────── */}
      <section className="py-20 bg-[#06060f] border-t border-white/[0.06]">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="reveal section-label inline-flex mb-4">
              <Zap className="w-3.5 h-3.5" fill="currentColor" />
              Across All Industries
            </div>
            <h2 className="reveal delay-100 section-heading text-white mb-3">
              AI Capabilities Every{" "}
              <span className="gradient-text">IntelliForge Product</span> Shares
            </h2>
            <p className="reveal delay-200 text-slate-400 text-base max-w-xl mx-auto">
              Regardless of which product you use, these foundational
              capabilities are built in from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🔐", title: "Enterprise Security", desc: "256-bit AES encryption at rest and in transit. Role-based access control with full audit trails." },
              { icon: "📊", title: "Real-Time Analytics", desc: "Live dashboards with drill-down capability. Every metric updated in real time, not daily batches." },
              { icon: "🤖", title: "Self-Learning AI", desc: "Models retrain on your data periodically — improving accuracy and relevance over time." },
              { icon: "🔌", title: "Open API Architecture", desc: "REST + Webhook APIs allow integration with any existing system, ERP, or third-party tool." },
              { icon: "📱", title: "Mobile-First Access", desc: "Full-featured mobile apps for iOS and Android. Run your business from anywhere." },
              { icon: "🌐", title: "Multi-Tenant Scalable", desc: "From startup to enterprise scale without re-architecture. Handles 1 to 100,000 concurrent users." },
            ].map((cap, i) => (
              <div
                key={cap.title}
                className={`reveal glass-card glass-card-hover rounded-2xl p-6 delay-${Math.min((i + 1) * 100, 600)}`}
              >
                <span className="text-3xl mb-4 block">{cap.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-[#05050f] to-violet-950/30" />
        <div className="container-wide relative z-10 text-center">
          <h2 className="reveal section-heading text-white mb-4 max-w-2xl mx-auto">
            Which industry do{" "}
            <span className="gradient-text">you belong to?</span>
          </h2>
          <p className="reveal delay-100 text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Get a demo specific to your industry and see how IntelliForge AI
            solves your exact operational challenges.
          </p>
          <div className="reveal delay-200 flex flex-wrap gap-3 justify-center mb-8">
            {["Legal", "Film & Media", "Fitness", "Restaurants", "Healthcare", "Finance"].map(
              (ind) => (
                <Link
                  key={ind}
                  href="/contact"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-white/[0.04] text-slate-400 hover:bg-white/[0.07] hover:text-white border border-white/[0.07] transition-all"
                >
                  {ind}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              )
            )}
          </div>
          <div className="reveal delay-300">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              <span>Book Industry-Specific Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
