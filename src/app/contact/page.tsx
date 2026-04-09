"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Zap,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  User,
} from "lucide-react";
import { companyInfo } from "@/lib/data";

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

const businessTypes = [
  "Law Firm / Advocate",
  "Film Studio / Production House",
  "Gym / Fitness Studio",
  "Restaurant / Cloud Kitchen",
  "Clinic / Hospital",
  "Trading Firm / Investment Advisor",
  "Retail / E-commerce",
  "Enterprise / Corporate",
  "Other",
];

const products = [
  "IntelliForge Legal",
  "IntelliForge Studio",
  "IntelliForge Fit",
  "IntelliForge Dine",
  "IntelliForge Pay",
  "IntelliForge Inventory",
  "IntelliForge Care",
  "IntelliForge Signals",
  "Not sure yet",
];

export default function ContactPage() {
  useReveal();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    product: "",
    companyName: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* ─── PAGE HERO ───────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050f] via-[#080820] to-[#05050f]" />
        <div
          className="glow-orb absolute top-0 right-1/4 w-[500px] h-[300px] opacity-15"
          style={{ background: "radial-gradient(ellipse, #6366f1, transparent)" }}
        />
        <div className="container-wide relative z-10 text-center">
          <div className="reveal section-label inline-flex mb-6">
            <Zap className="w-3.5 h-3.5" fill="currentColor" />
            Let&apos;s Build Something Together
          </div>
          <h1 className="reveal delay-100 section-heading text-white mb-4">
            Request a{" "}
            <span className="gradient-text">Personalized Demo</span>
          </h1>
          <p className="reveal delay-200 text-slate-400 text-lg max-w-xl mx-auto">
            Tell us about your business. We&apos;ll prepare a demo focused on your
            exact industry and use case — no generic walkthroughs.
          </p>
        </div>
      </section>

      {/* ─── MAIN CONTENT ────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* ── Contact info sidebar ── */}
            <div className="reveal-left flex flex-col gap-6">
              {/* Info blocks */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-base font-bold text-white mb-5">
                  Get in Touch
                </h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <div className="feature-icon shrink-0">
                      <User className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Founder</div>
                      <div className="text-sm font-medium text-slate-200">
                        {companyInfo.founder}
                      </div>
                    </div>
                  </div>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-start gap-3 group"
                  >
                    <div className="feature-icon shrink-0">
                      <Mail className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Email</div>
                      <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-300 transition-colors">
                        {companyInfo.email}
                      </div>
                    </div>
                  </a>
                  <a href={`tel:${companyInfo.phone}`} className="flex items-start gap-3 group">
                    <div className="feature-icon shrink-0">
                      <Phone className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Phone</div>
                      <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-300 transition-colors">
                        {companyInfo.phoneDisplay}
                      </div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="feature-icon shrink-0">
                      <MapPin className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Office</div>
                      <div className="text-sm font-medium text-slate-200">
                        {companyInfo.address.full}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="feature-icon shrink-0">
                      <Clock className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">
                        Business Hours
                      </div>
                      <div className="text-sm font-medium text-slate-200">
                        {companyInfo.hours}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-base font-bold text-white mb-4">
                  What Happens Next
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    { step: "1", title: "We review your request", desc: "Our team reviews your details and prepares a tailored demo flow." },
                    { step: "2", title: "Schedule your demo", desc: "You receive a calendar invite for a 30-minute personalized session." },
                    { step: "3", title: "See AI in action", desc: "We walk you through exactly how IntelliForge solves your challenges." },
                    { step: "4", title: "Get your proposal", desc: "Receive a custom implementation plan and pricing within 24 hours." },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                        {s.step}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white mb-0.5">
                          {s.title}
                        </div>
                        <div className="text-xs text-slate-500 leading-relaxed">
                          {s.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantee strip */}
              <div
                className="rounded-2xl p-5"
                style={{
                  background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.06))",
                  border: "1px solid rgba(99,102,241,0.2)",
                }}
              >
                <div className="flex flex-col gap-2">
                  {[
                    "No spam. We promise.",
                    "No lock-in contracts",
                    "Free implementation audit",
                    "Setup in under 48 hours",
                  ].map((g) => (
                    <div key={g} className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      {g}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Demo Request Form ── */}
            <div className="lg:col-span-2 reveal-right">
              {submitted ? (
                <div className="glass-card rounded-2xl p-12 text-center flex flex-col items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Request Received!
                    </h3>
                    <p className="text-slate-400 text-base leading-relaxed max-w-md">
                      Thank you, {formState.name}. Our team will review your
                      request and reach out within{" "}
                      <strong className="text-white">4 business hours</strong>{" "}
                      with your personalized demo schedule.
                    </p>
                  </div>
                  <div className="glass-card rounded-xl px-5 py-3 text-sm text-slate-400">
                    Confirmation sent to{" "}
                    <span className="text-indigo-300">{formState.email}</span>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        businessType: "",
                        product: "",
                        companyName: "",
                        message: "",
                      });
                    }}
                    className="btn-secondary"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 flex flex-col gap-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">
                      Book Your Free Demo
                    </h2>
                    <p className="text-slate-500 text-sm">
                      Fill in your details and we&apos;ll tailor the demo to your
                      business.
                    </p>
                  </div>

                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                        Full Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Rahul Sharma"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                        Work Email <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="rahul@company.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formState.companyName}
                        onChange={handleChange}
                        placeholder="Your Company Pvt. Ltd."
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                        Business Type <span className="text-indigo-400">*</span>
                      </label>
                      <select
                        name="businessType"
                        required
                        value={formState.businessType}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="" disabled>
                          Select your industry
                        </option>
                        {businessTypes.map((bt) => (
                          <option key={bt} value={bt} className="bg-[#0d0d1f]">
                            {bt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                        Product Interested In
                      </label>
                      <select
                        name="product"
                        value={formState.product}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="" disabled>
                          Select a product
                        </option>
                        {products.map((p) => (
                          <option key={p} value={p} className="bg-[#0d0d1f]">
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                      Tell us about your challenge
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your current workflow challenges, team size, and what you're hoping AI can solve for you..."
                      className="form-input resize-none"
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="flex items-start gap-3 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      <span className="shrink-0 mt-0.5">⚠️</span>
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed w-full"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Demo</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-600 text-center">
                    By submitting, you agree to our Privacy Policy. We never share
                    your information with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#06060f] border-t border-white/[0.06]">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="reveal section-heading text-white mb-3">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid gap-4">
            {[
              {
                q: "How long does it take to get set up?",
                a: "Most IntelliForge products can be deployed and configured within 24–48 hours. Enterprise implementations with deep integrations typically take 1–2 weeks.",
              },
              {
                q: "Do I need technical knowledge to use IntelliForge products?",
                a: "Not at all. Every product is designed for domain professionals — not developers. If you can use a smartphone, you can use IntelliForge.",
              },
              {
                q: "Can I use multiple IntelliForge products together?",
                a: "Yes — and we encourage it. Products in the IntelliForge ecosystem share data and intelligence, so using multiple products creates compounding value.",
              },
              {
                q: "Is there a free trial?",
                a: "We offer a guided demo followed by a 14-day pilot period with full access. We believe you should see real results before committing.",
              },
              {
                q: "How is my data secured?",
                a: "All data is encrypted with AES-256 at rest and TLS 1.3 in transit. We are SOC 2 compliant and follow DPDP (India) data privacy requirements.",
              },
              {
                q: "What does pricing look like?",
                a: "Pricing is industry-specific and based on team size and usage. We offer monthly and annual plans with volume discounts for multi-product subscriptions.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className={`reveal glass-card rounded-xl p-6 delay-${Math.min((i + 1) * 100, 500)}`}
              >
                <h4 className="text-sm font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-[#05050f] to-violet-950/30" />
        <div className="container-wide relative z-10 text-center">
          <p className="reveal text-slate-400 text-base mb-3">
            Still have questions?
          </p>
          <h2 className="reveal delay-100 text-2xl font-bold text-white mb-6">
            Talk to a real person on our team.
          </h2>
          <a href={`mailto:${companyInfo.email}`} className="btn-primary">
            <Mail className="w-4 h-4" />
            <span>{companyInfo.email}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
