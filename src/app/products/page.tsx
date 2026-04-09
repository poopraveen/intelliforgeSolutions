"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, ChevronRight } from "lucide-react";
import { products } from "@/lib/data";

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

export default function ProductsPage() {
  useReveal();
  const [activeProduct, setActiveProduct] = useState(products[0].id);

  const selected = products.find((p) => p.id === activeProduct)!;

  // Smooth scroll to product section on hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const found = products.find((p) => p.id === hash);
      if (found) setActiveProduct(found.id);
      setTimeout(() => {
        document.getElementById("product-detail")?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* ─── PAGE HERO ───────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050f] via-[#080820] to-[#05050f]" />
        <div
          className="glow-orb absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15"
          style={{ background: "radial-gradient(ellipse, #6366f1, transparent)" }}
        />
        <div className="container-wide relative z-10 text-center">
          <div className="reveal section-label inline-flex mb-6">
            <Zap className="w-3.5 h-3.5" fill="currentColor" />
            8 AI Products. One Ecosystem.
          </div>
          <h1 className="reveal delay-100 section-heading text-white mb-4">
            AI Products Built for{" "}
            <span className="gradient-text">Real Industry Problems</span>
          </h1>
          <p className="reveal delay-200 text-slate-400 text-lg max-w-2xl mx-auto">
            Every IntelliForge product is precision-engineered with deep domain
            knowledge. These aren&apos;t generic AI tools — they&apos;re intelligent
            specialists for your specific industry.
          </p>
        </div>
      </section>

      {/* ─── PRODUCT GRID SELECTOR ───────────────────────────────────────── */}
      <section className="py-12 border-b border-white/[0.06] bg-[#06060f] sticky top-16 z-30">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3 justify-center">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setActiveProduct(p.id);
                  document
                    .getElementById("product-detail")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeProduct === p.id
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-white/[0.04] text-slate-400 hover:bg-white/[0.07] hover:text-white border border-white/[0.06]"
                }`}
              >
                <span>{p.icon}</span>
                <span className="hidden sm:inline">{p.name.replace("IntelliForge ", "")}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT DETAIL ──────────────────────────────────────────────── */}
      <section id="product-detail" className="py-20">
        <div className="container-wide">
          <div
            key={selected.id}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* Left — info */}
            <div>
              {/* Badge + icon */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl">{selected.icon}</span>
                <div>
                  <span className="product-badge">{selected.badge}</span>
                  <div className="text-xs text-slate-500 mt-1">
                    {selected.industry}
                  </div>
                </div>
              </div>

              {/* Name + tagline */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                {selected.name}
              </h2>
              <p className="gradient-text text-lg font-semibold mb-5">
                {selected.tagline}
              </p>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                {selected.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {selected.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card rounded-xl p-4 text-center"
                  >
                    <div
                      className="text-2xl font-extrabold mb-1"
                      style={{ color: selected.accentColor }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  <span>Book Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  <span>Talk to Sales</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right — features + use cases */}
            <div className="flex flex-col gap-6">
              {/* Features */}
              <div className="glass-card rounded-2xl p-7">
                <h3 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                  <span
                    className="w-1.5 h-5 rounded-full inline-block"
                    style={{ background: selected.accentColor }}
                  />
                  Key Features
                </h3>
                <ul className="flex flex-col gap-3">
                  {selected.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-400"
                    >
                      <CheckCircle
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: selected.accentColor }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use cases */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: `linear-gradient(135deg, ${selected.accentColor}12, ${selected.accentColor}05)`,
                  border: `1px solid ${selected.accentColor}20`,
                }}
              >
                <h3 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                  <span
                    className="w-1.5 h-5 rounded-full inline-block"
                    style={{ background: selected.accentColor }}
                  />
                  Who Uses This
                </h3>
                <ul className="flex flex-col gap-3">
                  {selected.useCases.map((uc) => (
                    <li
                      key={uc}
                      className="flex items-start gap-3 text-sm text-slate-400"
                    >
                      <ChevronRight
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: selected.accentColor }}
                      />
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hero feature callout */}
              <div
                className="rounded-xl px-5 py-4 flex items-center gap-3"
                style={{
                  background: `linear-gradient(135deg, ${selected.accentColor}20, ${selected.accentColor}08)`,
                  border: `1px solid ${selected.accentColor}30`,
                }}
              >
                <Zap
                  className="w-5 h-5 shrink-0"
                  style={{ color: selected.accentColor }}
                  fill={selected.accentColor}
                />
                <span className="text-sm font-semibold text-white">
                  {selected.heroFeature}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ALL PRODUCTS QUICK LIST ─────────────────────────────────────── */}
      <section className="py-20 border-t border-white/[0.06] bg-[#06060f]">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="reveal section-heading text-white mb-3">
              The Full <span className="gradient-text">IntelliForge Suite</span>
            </h2>
            <p className="reveal delay-100 text-slate-400 text-base max-w-xl mx-auto">
              Use one product or the entire ecosystem. Every product integrates
              seamlessly with the others.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  setActiveProduct(p.id);
                  document
                    .getElementById("product-detail")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`reveal glass-card glass-card-hover rounded-2xl p-5 text-left delay-${Math.min((i + 1) * 100, 600)} ${
                  activeProduct === p.id ? "border-indigo-500/40 bg-indigo-500/[0.06]" : ""
                }`}
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <div className="text-sm font-bold text-white mb-1">{p.name}</div>
                <div className="text-xs text-slate-500 mb-3 line-clamp-2">
                  {p.tagline}
                </div>
                <span className="product-badge text-[10px]">{p.badge}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-[#05050f] to-violet-950/30" />
        <div className="container-wide relative z-10 text-center">
          <h2 className="reveal section-heading text-white mb-5 max-w-2xl mx-auto">
            Ready to see <span className="gradient-text">AI in action?</span>
          </h2>
          <p className="reveal delay-100 text-slate-400 text-lg mb-8">
            Get a personalized demo tailored to your industry and use case.
            No generic walkthroughs — just what matters to you.
          </p>
          <div className="reveal delay-200 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              <span>Book Your Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
