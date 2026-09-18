"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Platforms", href: "/platforms/velocity-ai", sub: ["Velocity AI", "Catalyst", "Genesis", "Oracle"] },
  { label: "Services", href: "/services/ai-powered-strategy" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      <div className="container-custom pt-4 md:pt-5">
        <div
          className={`pointer-events-auto rounded-full border flex items-center justify-between px-2 pl-5 md:pl-6 pr-2 py-2 transition-all duration-300 ${
            scrolled ? "bg-white/95 backdrop-blur-xl border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]" : "bg-white/80 backdrop-blur-xl border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-[#0A0A0A] text-white grid place-items-center text-[11px] font-bold tracking-widest">TMG</span>
            <span className="text-[15px] font-semibold tracking-tight">TMG</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 ml-8">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} className="px-4 py-2 text-[13px] font-medium text-black/70 hover:text-black rounded-full hover:bg-black/5 transition">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#0A0A0A] text-white rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide hover:bg-black transition"
            >
              Get Started <span className="w-5 h-5 rounded-full bg-white text-black grid place-items-center text-[10px]">→</span>
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-full bg-[#0A0A0A] text-white grid place-items-center lg:hidden"
            >
              <span className="w-4 flex flex-col gap-1">
                <span className={`h-0.5 bg-white block transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`h-0.5 bg-white block transition ${open ? "opacity-0" : ""}`} />
                <span className={`h-0.5 bg-white block transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </span>
            </button>
            <button aria-label="Search" className="hidden lg:grid w-10 h-10 rounded-full border border-black/10 place-items-center text-black/60 hover:bg-black/5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="M20 20L16 16" /></svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="pointer-events-auto mt-3 bg-white rounded-[24px] border border-black/10 shadow-xl p-6 lg:hidden">
            <div className="grid gap-1">
              <Link onClick={() => setOpen(false)} href="/" className="py-3 text-[15px] font-medium border-b border-black/5">Home</Link>
              <Link onClick={() => setOpen(false)} href="/platforms/velocity-ai" className="py-3 text-[15px] font-medium border-b border-black/5">Velocity AI</Link>
              <Link onClick={() => setOpen(false)} href="/platforms/catalyst" className="py-3 text-[15px] font-medium border-b border-black/5">Catalyst</Link>
              <Link onClick={() => setOpen(false)} href="/platforms/genesis" className="py-3 text-[15px] font-medium border-b border-black/5">Genesis</Link>
              <Link onClick={() => setOpen(false)} href="/platforms/oracle" className="py-3 text-[15px] font-medium border-b border-black/5">Oracle</Link>
              <Link onClick={() => setOpen(false)} href="/case-studies" className="py-3 text-[15px] font-medium border-b border-black/5">Case Studies</Link>
              <Link onClick={() => setOpen(false)} href="/contact" className="py-3 text-[15px] font-medium">Contact</Link>
            </div>
            <Link href="/contact" className="mt-4 flex items-center justify-center gap-2 bg-[#0A0A0A] text-white rounded-full py-3 text-sm font-semibold">Get Started →</Link>
          </div>
        )}
      </div>
    </header>
  );
}
