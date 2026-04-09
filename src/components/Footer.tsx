"use client";

import Link from "next/link";
import { Zap, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { products, companyInfo } from "@/lib/data";

export default function Footer() {
  const productLinks = products.map((p) => ({
    label: p.name,
    href: `/products#${p.id}`,
  }));

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Demo", href: "/contact" },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#03030a]">
      {/* Top CTA band */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-violet-900/20 to-indigo-900/30" />
        <div className="container-wide py-14 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to transform your business?
            </h3>
            <p className="text-slate-400 text-base">
              Join businesses already using IntelliForge to scale smarter.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/contact" className="btn-secondary whitespace-nowrap">
              Talk to Sales
            </Link>
            <Link href="/contact" className="btn-primary whitespace-nowrap">
              <span>Book Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[15px] gradient-text-warm tracking-tight">
                  IntelliForge
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">
                  Solutions
                </span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-1">
              {companyInfo.tagline}
            </p>
            <p className="text-slate-600 text-xs mb-6">
              Founded by{" "}
              <span className="text-indigo-400 font-medium">
                {companyInfo.founder}
              </span>
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {companyInfo.email}
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-indigo-400 transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {companyInfo.phoneDisplay}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-500">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{companyInfo.address.full}</span>
              </div>
            </div>
          </div>

          {/* Products col 1 */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products col 2 */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
              More Products
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.slice(4).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-6 mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
              Stay Updated
            </h4>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              Get AI insights and product updates delivered to your inbox.
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your work email"
                className="form-input text-sm"
              />
              <button type="submit" className="btn-primary justify-center text-sm">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-xs text-slate-600 mt-3">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="container-wide py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} IntelliForge Solutions Pvt. Ltd. All
            rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Security"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
