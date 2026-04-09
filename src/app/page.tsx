"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Layers,
  CheckCircle,
  ChevronRight,
  Star,
} from "lucide-react";
import { products, industries, companyStats, trustSignals } from "@/lib/data";

// Scroll reveal hook
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);
}

// Counter animation
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const num = parseFloat(value);
    if (isNaN(num)) {
      el.textContent = value + suffix;
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const duration = 2000;
      const start = performance.now();
      const animate = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const current = num * ease;
        el.textContent =
          (Number.isInteger(num) ? Math.floor(current) : current.toFixed(1)) +
          suffix;
        if (p < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);
  return <span ref={ref}>{value}{suffix}</span>;
}

export default function HomePage() {
  useReveal();

  return (
    <div className="relative">
      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-grid">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050f] via-[#07081a] to-[#05050f]" />

        {/* Glow orbs */}
        <div
          className="glow-orb absolute top-1/4 left-1/4 w-[500px] h-[500px] opacity-20"
          style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
        />
        <div
          className="glow-orb absolute bottom-1/3 right-1/4 w-[400px] h-[400px] opacity-15"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
        />
        <div
          className="glow-orb absolute top-1/2 right-1/3 w-[300px] h-[300px] opacity-10"
          style={{ background: "radial-gradient(circle, #22d3ee, transparent)" }}
        />

        {/* Hero content */}
        <div className="container-wide relative z-10 pt-28 pb-16">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="reveal section-label mb-6">
              <Zap className="w-3.5 h-3.5" fill="currentColor" />
              AI-Powered SaaS Ecosystem — 8 Products, 6 Industries
            </div>

            {/* Headline */}
            <h1 className="reveal delay-100 font-extrabold leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 76px)" }}>
              <span className="text-white">Building</span>{" "}
              <span className="gradient-text">Intelligent Systems</span>
              <br />
              <span className="text-white">for Every Industry</span>
            </h1>

            {/* Subheading */}
            <p className="reveal delay-200 text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              IntelliForge Solutions delivers a complete ecosystem of AI products
              designed to automate, optimize, and scale businesses across legal,
              healthcare, finance, fitness, restaurants, and media.
            </p>

            {/* CTAs */}
            <div className="reveal delay-300 flex flex-wrap gap-4 mb-12">
              <Link href="/contact" className="btn-primary text-base px-7 py-4">
                <span>Book a Free Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/products" className="btn-secondary text-base px-7 py-4">
                <span>Explore Products</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust pills */}
            <div className="reveal delay-400 flex flex-wrap gap-3">
              {["Enterprise-Grade Security", "99.9% Uptime SLA", "No Lock-in Contracts", "24/7 Support"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/[0.03] border border-white/[0.07] rounded-full px-3 py-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Floating product previews */}
          <div className="absolute right-0 top-28 hidden xl:block w-[380px]">
            <div className="glass-card rounded-2xl p-5 shadow-card animate-float">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">IntelliForge Signals</div>
                  <div className="text-xs text-slate-500">Live market intelligence</div>
                </div>
                <div className="ml-auto flex items-center gap-1 text-xs font-semibold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[{ l: "NIFTY Signal", v: "BUY", c: "text-emerald-400" }, { l: "Sentiment", v: "Bullish", c: "text-blue-400" }, { l: "Risk Score", v: "Low", c: "text-violet-400" }].map((s) => (
                  <div key={s.l} className="bg-white/[0.03] rounded-xl p-3 text-center">
                    <div className={`text-base font-bold ${s.c}`}>{s.v}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 shadow-card animate-float-delay mt-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚖️</span>
                <div>
                  <div className="text-sm font-semibold text-white">IntelliForge Legal</div>
                  <div className="text-xs text-slate-500">Contract reviewed</div>
                </div>
                <CheckCircle className="w-5 h-5 text-emerald-400 ml-auto" />
              </div>
              <div className="w-full bg-white/[0.05] rounded-full h-1.5">
                <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-1.5 rounded-full w-[85%]" />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-slate-500">Risk Analysis</span>
                <span className="text-xs text-emerald-400 font-medium">85% complete</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-white/40" />
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─────────────────────────────────────────────────────── */}
      <section className="border-y border-white/[0.06] bg-[#07071a]">
        <div className="container-wide py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="stat-number mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix === "-" ? "" : stat.suffix} />
                </div>
                <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS OVERVIEW ─────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050f] via-[#080820] to-[#05050f]" />
        <div className="container-wide relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="reveal section-label inline-flex">
              <Layers className="w-3.5 h-3.5" />
              Complete AI Product Suite
            </div>
            <h2 className="reveal delay-100 section-heading text-white mb-4">
              One Ecosystem.{" "}
              <span className="gradient-text">Every Industry.</span>
            </h2>
            <p className="reveal delay-200 text-slate-400 text-lg max-w-2xl mx-auto">
              Eight purpose-built AI products engineered to solve the real
              operational challenges of modern businesses. Not generic tools —
              precision-built intelligence.
            </p>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product, i) => (
              <Link
                key={product.id}
                href={`/products#${product.id}`}
                className={`reveal glass-card glass-card-hover rounded-2xl p-6 group delay-${Math.min((i + 1) * 100, 800)}`}
              >
                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{product.icon}</span>
                  <span className="product-badge">{product.badge}</span>
                </div>

                {/* Name */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  {product.name}
                </h3>

                {/* Desc */}
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {product.shortDesc}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors mt-auto">
                  Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* View all CTA */}
          <div className="text-center mt-10 reveal">
            <Link href="/products" className="btn-primary text-base px-8 py-4">
              <span>Explore All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY INTELLIFORGE ──────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#060816]" />
        {/* Background decoration */}
        <div
          className="glow-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
        />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="reveal section-label inline-flex">
                <Star className="w-3.5 h-3.5" fill="currentColor" />
                Why IntelliForge
              </div>
              <h2 className="reveal delay-100 section-heading text-white mb-5">
                Not just software.{" "}
                <span className="gradient-text">Intelligent infrastructure</span>{" "}
                for your business.
              </h2>
              <p className="reveal delay-200 text-slate-400 text-base leading-relaxed mb-8">
                Most SaaS tools make you adapt to their workflow. IntelliForge
                products are built with deep domain knowledge, so the AI
                understands your industry as well as you do.
              </p>

              {/* Benefits */}
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: "🤖",
                    title: "AI-First, Not AI-Bolted-On",
                    desc: "Every product is built around AI from day one — not a feature added as an afterthought.",
                  },
                  {
                    icon: "🏭",
                    title: "Deep Industry Specificity",
                    desc: "Each product is built with domain experts. Legal knows case law; Dine knows restaurant ops; Care knows clinical workflows.",
                  },
                  {
                    icon: "📈",
                    title: "Compounding Value Over Time",
                    desc: "Our AI models learn from usage patterns and improve continuously — so the ROI grows every month.",
                  },
                  {
                    icon: "🔗",
                    title: "Multi-Product Ecosystem",
                    desc: "Use one product or the entire suite. Products share data and intelligence for compounding insights.",
                  },
                ].map((benefit, i) => (
                  <div
                    key={benefit.title}
                    className={`reveal delay-${(i + 1) * 100} flex gap-4 glass-card rounded-xl p-4`}
                  >
                    <span className="text-2xl shrink-0">{benefit.icon}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — trust signals */}
            <div className="reveal-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trustSignals.map((signal, i) => (
                  <div
                    key={signal.label}
                    className={`glass-card glass-card-hover rounded-2xl p-5 delay-${i * 100}`}
                  >
                    <div className="text-3xl mb-3">{signal.icon}</div>
                    <div className="text-sm font-semibold text-white mb-1.5">
                      {signal.label}
                    </div>
                    <div className="text-xs text-slate-500 leading-relaxed">
                      {signal.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050f] via-[#07081a] to-[#05050f]" />
        <div className="container-wide relative z-10">
          <div className="text-center mb-14">
            <div className="reveal section-label inline-flex">
              <Shield className="w-3.5 h-3.5" />
              Industries We Serve
            </div>
            <h2 className="reveal delay-100 section-heading text-white mb-4">
              Built for the industries{" "}
              <span className="gradient-text">shaping tomorrow</span>
            </h2>
            <p className="reveal delay-200 text-slate-400 text-lg max-w-2xl mx-auto">
              IntelliForge products are deployed across six high-complexity
              industries where AI makes the greatest difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry, i) => (
              <Link
                key={industry.id}
                href={`/industries#${industry.id}`}
                className={`reveal glass-card glass-card-hover rounded-2xl p-6 group delay-${Math.min((i + 1) * 100, 600)}`}
              >
                <span className="text-3xl mb-4 block">{industry.icon}</span>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                  {industry.description}
                </p>
                {/* Products served */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {industry.products.map((p) => (
                    <span key={p} className="product-badge text-[10px]">
                      {p.replace("IntelliForge ", "")}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  Explore solutions <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link href="/industries" className="btn-secondary text-base px-8 py-4">
              <span>View All Industries</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL / TRUST BAND ──────────────────────────────────────── */}
      <section className="py-16 border-y border-white/[0.06] bg-[#07071a]">
        <div className="container-wide">
          <div className="text-center mb-10 reveal">
            <p className="text-slate-500 text-sm uppercase tracking-widest font-medium">
              Trusted by forward-thinking businesses
            </p>
          </div>
          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "IntelliForge Legal cut our contract review time from 3 days to 4 hours. The AI understands legal nuance like a senior associate.",
                name: "Priya Sharma",
                role: "Managing Partner",
                company: "Sharma & Associates Law Firm",
                rating: 5,
              },
              {
                quote: "IntelliForge Dine predicted our weekend demand perfectly. We cut food waste by 38% in the first quarter and our margins improved significantly.",
                name: "Rahul Mehta",
                role: "Operations Head",
                company: "Spice Route Restaurants",
                rating: 5,
              },
              {
                quote: "The churn prediction in IntelliForge Fit is genuinely impressive. We saved 47 memberships we would have lost without those early alerts.",
                name: "Ananya Patel",
                role: "Owner",
                company: "FitZone Premium Gyms",
                rating: 5,
              },
            ].map((t, i) => (
              <div
                key={i}
                className={`reveal glass-card rounded-2xl p-6 delay-${(i + 1) * 100}`}
              >
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-amber-400"
                      fill="#fbbf24"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-sm font-bold text-white">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-500">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-[#05050f] to-violet-950/30" />
        <div
          className="glow-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-15"
          style={{ background: "radial-gradient(ellipse, #6366f1, transparent)" }}
        />
        <div className="container-wide relative z-10 text-center">
          <div className="reveal section-label inline-flex mb-6">
            <Zap className="w-3.5 h-3.5" fill="currentColor" />
            Start Today
          </div>
          <h2 className="reveal delay-100 section-heading text-white mb-5 max-w-3xl mx-auto">
            Start Your{" "}
            <span className="gradient-text">Digital Transformation</span> Today
          </h2>
          <p className="reveal delay-200 text-slate-400 text-lg max-w-xl mx-auto mb-10">
            Book a personalized 30-minute demo and see exactly how IntelliForge
            AI can transform your specific business operations.
          </p>
          <div className="reveal delay-300 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              <span>Book Your Free Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/products" className="btn-secondary text-base px-8 py-4">
              <span>Browse All Products</span>
            </Link>
          </div>
          <p className="reveal delay-400 mt-6 text-slate-600 text-sm">
            No credit card required · No lock-in contracts · Setup in 48 hours
          </p>
        </div>
      </section>
    </div>
  );
}
