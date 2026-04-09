"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { navLinks, products } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#05050f]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow">
            <Zap className="w-5 h-5 text-white" fill="white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-[15px] gradient-text-warm tracking-tight">
              IntelliForge
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
              Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.label === "Products" ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  className={`nav-link flex items-center gap-1 ${
                    pathname.startsWith("/products") ? "active" : ""
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mega dropdown */}
                {productsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] glass-card rounded-2xl p-5 shadow-[0_24px_64px_rgba(0,0,0,0.6)] border border-white/[0.07]">
                    <div className="grid grid-cols-2 gap-2">
                      {products.map((p) => (
                        <Link
                          key={p.id}
                          href={`/products#${p.id}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                        >
                          <span className="text-2xl">{p.icon}</span>
                          <div>
                            <div className="text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors">
                              {p.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5">
                              {p.industry}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        8 AI products across 6 industries
                      </span>
                      <Link
                        href="/products"
                        className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        View all products →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="btn-secondary text-sm px-5 py-2.5">
            Contact Sales
          </Link>
          <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
            <span>Book a Demo</span>
            <Zap className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#08081a]/98 backdrop-blur-xl border-t border-white/[0.06] mobile-nav-enter">
          <div className="container-wide py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-base font-medium py-2 border-b border-white/[0.05] transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <Link href="/contact" className="btn-secondary text-center justify-center">
                Contact Sales
              </Link>
              <Link href="/contact" className="btn-primary justify-center">
                <span>Book a Demo</span>
                <Zap className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
