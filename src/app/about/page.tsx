"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Zap, Target, Eye, Heart, Layers } from "lucide-react";

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

const values = [
  {
    icon: "🧠",
    title: "Intelligence First",
    desc: "We don't build features — we build intelligence. Every decision, every workflow, every recommendation is powered by AI trained on real industry data.",
  },
  {
    icon: "🎯",
    title: "Industry-Deep, Not Industry-Wide",
    desc: "We'd rather be the best legal AI in India than a mediocre tool for everyone. Depth beats breadth — always.",
  },
  {
    icon: "⚡",
    title: "Speed Without Sacrifice",
    desc: "Our clients demand fast implementations that don't compromise on quality. We've engineered both into our delivery process.",
  },
  {
    icon: "🤝",
    title: "Client Success is Product Success",
    desc: "We measure ourselves by our clients' ROI — not feature lists. If you're not winning, we haven't done our job.",
  },
  {
    icon: "🔒",
    title: "Security as a Foundation",
    desc: "In industries like legal, healthcare, and finance, data security isn't optional. Every IntelliForge product is built security-first.",
  },
  {
    icon: "🌱",
    title: "Continuously Improving",
    desc: "Our AI models improve with every interaction. The product you use six months from now will be meaningfully better than the one you start with.",
  },
];

const milestones = [
  { year: "2023", title: "Founded with a Vision", desc: "IntelliForge Solutions founded with the mission to bring enterprise-grade AI to India's underserved industries." },
  { year: "2023", title: "First Product Launched", desc: "IntelliForge Legal launched and adopted by law firms seeking to reduce manual research time." },
  { year: "2024", title: "Product Suite Expansion", desc: "Expanded to 5 products covering fitness, restaurants, healthcare, and film production." },
  { year: "2024", title: "₹100 Crore Vision Declared", desc: "Set the ambitious target of reaching ₹100 crore ARR — backed by product depth and market demand." },
  { year: "2025", title: "Full Ecosystem Complete", desc: "All 8 AI products live. IntelliForge Signals and Pay complete the financial intelligence suite." },
  { year: "2026+", title: "Pan-India & Beyond", desc: "Expanding across India with global product readiness for MENA and Southeast Asia markets." },
];

export default function AboutPage() {
  useReveal();

  return (
    <div className="min-h-screen">
      {/* ─── PAGE HERO ───────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050f] via-[#080820] to-[#05050f]" />
        <div
          className="glow-orb absolute top-0 right-1/4 w-[500px] h-[400px] opacity-15"
          style={{ background: "radial-gradient(ellipse, #8b5cf6, transparent)" }}
        />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="reveal section-label inline-flex mb-6">
              <Heart className="w-3.5 h-3.5" />
              Our Story
            </div>
            <h1 className="reveal delay-100 section-heading text-white mb-5">
              We Build AI That{" "}
              <span className="gradient-text">Actually Works</span>
              <br />
              for Real Businesses
            </h1>
            <p className="reveal delay-200 text-slate-400 text-lg leading-relaxed mb-6">
              IntelliForge Solutions was born from a simple, frustrating observation:
              most businesses in India were being left behind by AI because the tools
              available were either too generic, too expensive, or too difficult to
              implement.
            </p>
            <p className="reveal delay-300 text-slate-400 text-lg leading-relaxed">
              We decided to change that — starting with the industries where AI
              can make the most dramatic difference: legal, healthcare, fitness,
              restaurants, film, and finance. Every product we build is deep
              enough to replace three people&apos;s worth of manual work.
            </p>
          </div>
        </div>
      </section>

      {/* ─── VISION + MISSION ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#06060f]">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="reveal glass-card rounded-2xl p-8 relative overflow-hidden">
              <div
                className="glow-orb absolute top-0 right-0 w-40 h-40 opacity-10"
                style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
              />
              <div className="feature-icon mb-5">
                <Eye className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="section-label inline-flex mb-4">Our Vision</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                An AI-native business ecosystem for every Indian industry
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                We envision a future where every business — a solo advocate in
                Jaipur, a 50-seat restaurant in Pune, a multi-specialty clinic
                in Hyderabad — has access to the same quality of AI intelligence
                that Fortune 500 companies currently enjoy.
              </p>
              <p className="text-slate-400 text-base leading-relaxed mt-4">
                IntelliForge is the platform that makes this possible:
                affordable, industry-specific, and genuinely intelligent.
              </p>
            </div>

            {/* Mission */}
            <div className="reveal delay-200 glass-card rounded-2xl p-8 relative overflow-hidden">
              <div
                className="glow-orb absolute top-0 right-0 w-40 h-40 opacity-10"
                style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
              />
              <div className="feature-icon mb-5">
                <Target className="w-5 h-5 text-violet-400" />
              </div>
              <div className="section-label inline-flex mb-4">Our Mission</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                To automate complexity so humans can focus on what only humans can do
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Our mission is to build AI products so capable and so specific
                that they eliminate the tedious, repetitive, error-prone work
                that drains organizations — freeing teams to focus on creativity,
                client relationships, and growth.
              </p>
              <p className="text-slate-400 text-base leading-relaxed mt-4">
                We measure success not in monthly active users — but in
                hours saved, errors prevented, and revenue generated for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER MINDSET ─────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050f] via-[#080820] to-[#05050f]" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — quote / founder section */}
            <div className="reveal-left">
              <div className="glass-card rounded-2xl p-8 relative">
                <div className="text-6xl text-indigo-300/30 font-serif mb-4">&ldquo;</div>
                <blockquote className="text-xl text-slate-200 font-medium leading-relaxed mb-6 italic">
                  The gap between what AI can do and what most Indian businesses
                  are using AI for — that gap is our opportunity. And our
                  responsibility.
                </blockquote>
                <p className="text-slate-400 text-base leading-relaxed mb-6">
                  We started IntelliForge because we saw brilliant professionals
                  — advocates, doctors, gym owners, restaurateurs — spending
                  hours on tasks that should take minutes. We saw AI being used
                  for marketing copy while the actual operational intelligence
                  layer of these businesses remained untouched.
                </p>
                <p className="text-slate-400 text-base leading-relaxed mb-8">
                  So we built IntelliForge Solutions: a company obsessed with
                  industry depth, AI quality, and measurable client outcomes.
                  Every product we ship has to answer one question: &ldquo;Does this
                  make a real difference?&rdquo; If not, we go back to the drawing board.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-lg font-bold text-white">
                    IF
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      IntelliForge Founding Team
                    </div>
                    <div className="text-xs text-slate-500">
                      Builders · Operators · AI Researchers
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — principles */}
            <div className="reveal-right">
              <div className="section-label inline-flex mb-6">
                <Zap className="w-3.5 h-3.5" fill="currentColor" />
                Our Founding Principles
              </div>
              <h2 className="section-heading text-white mb-6">
                Built on{" "}
                <span className="gradient-text">conviction,</span> not consensus
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  { title: "AI-First, Always", desc: "We never retrofit AI into existing workflows. We design workflows around what AI makes possible." },
                  { title: "Domain Expertise is Non-Negotiable", desc: "We hire lawyers to build legal AI. Doctors advise our healthcare products. Domain depth is our moat." },
                  { title: "ROI or Nothing", desc: "If a client can't point to a clear, measurable return from IntelliForge, we've failed — and we own that." },
                  { title: "Build for 10x, Not 10%", desc: "Incremental improvements don't change industries. We aim for 10x productivity gains — and engineer backward from there." },
                ].map((principle, i) => (
                  <div
                    key={principle.title}
                    className={`flex gap-4 delay-${(i + 1) * 100}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        {principle.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {principle.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#06060f]">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="reveal section-label inline-flex mb-4">
              <Layers className="w-3.5 h-3.5" />
              What We Stand For
            </div>
            <h2 className="reveal delay-100 section-heading text-white mb-3">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="reveal delay-200 text-slate-400 text-base max-w-xl mx-auto">
              These aren&apos;t words on a wall — they&apos;re the filters we apply to
              every product decision, every hire, and every client commitment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`reveal glass-card glass-card-hover rounded-2xl p-6 delay-${Math.min((i + 1) * 100, 600)}`}
              >
                <span className="text-3xl mb-4 block">{value.icon}</span>
                <h3 className="text-base font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MILESTONES TIMELINE ─────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050f] via-[#080820] to-[#05050f]" />
        <div className="container-wide relative z-10">
          <div className="text-center mb-12">
            <div className="reveal section-label inline-flex mb-4">
              Our Journey
            </div>
            <h2 className="reveal delay-100 section-heading text-white mb-3">
              From Idea to <span className="gradient-text">Impact</span>
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent" />

            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`reveal delay-${Math.min((i + 1) * 100, 600)} relative pl-20`}
                >
                  {/* Year dot */}
                  <div className="absolute left-4 top-0 w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-glow-sm -translate-x-1/2">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>

                  <div className="glass-card rounded-xl p-5">
                    <div className="text-xs font-bold text-indigo-400 mb-1 uppercase tracking-widest">
                      {m.year}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#06060f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 to-violet-950/20" />
        <div className="container-wide relative z-10 text-center">
          <h2 className="reveal section-heading text-white mb-5 max-w-2xl mx-auto">
            Join us in building the{" "}
            <span className="gradient-text">AI-native future</span>
          </h2>
          <p className="reveal delay-100 text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re a potential client, partner, or team member — we&apos;d love
            to show you what we&apos;re building.
          </p>
          <div className="reveal delay-200 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/products" className="btn-secondary text-base px-8 py-4">
              <span>See Our Products</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
