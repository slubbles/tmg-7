import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="container-custom py-14 md:py-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 md:gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-full bg-white text-black grid place-items-center text-[11px] font-bold">TMG</span>
              <span className="font-semibold">TMG</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Advertising strategy, media, creative, and measurement built for measurable growth.
            </p>
            <a href="mailto:partners@tmg.agency" className="inline-block mt-4 text-sm text-white/80 hover:text-white underline decoration-white/20 underline-offset-4">
              partners@tmg.agency
            </a>
            <div className="mt-8 flex gap-3">
              <span className="text-[11px] tracking-[0.15em] uppercase text-white/40">© 2026 Thela Media Group</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/40 mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {[
                ["AI-Powered Strategy", "/services/ai-powered-strategy"],
                ["Marketing Intelligence", "/services/marketing-intelligence"],
                ["Creative Development", "/services/creative-development"],
                ["Brand Architecture", "/services/brand-architecture"],
                ["Performance Media", "/services/performance-media"],
                ["Marketing Attribution", "/services/marketing-attribution"],
                ["Digital Transformation", "/services/digital-transformation"],
                ["Content Strategy", "/services/content-strategy"],
                ["Customer Analytics", "/services/customer-analytics"],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="hover:text-white transition">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/40 mb-4">Industries</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {["Healthcare & Life Sciences","Financial Services","Technology & SaaS","Real Estate","Energy & Utilities","Retail & E-Commerce"].map((l) => (
                <li key={l} className="hover:text-white transition cursor-default">{l}</li>
              ))}
            </ul>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/40 mt-8 mb-4">Platforms</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link href="/platforms/velocity-ai" className="hover:text-white">Velocity AI</Link></li>
              <li><Link href="/platforms/catalyst" className="hover:text-white">Catalyst</Link></li>
              <li><Link href="/platforms/genesis" className="hover:text-white">Genesis</Link></li>
              <li><Link href="/platforms/oracle" className="hover:text-white">Oracle</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/40 mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><span className="hover:text-white cursor-default">Privacy Policy</span></li>
              <li><span className="hover:text-white cursor-default">Terms of Service</span></li>
            </ul>
            <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm font-medium">Ready to grow?</p>
              <p className="text-xs text-white/60 mt-1">Schedule a consultation with our team.</p>
              <Link href="/contact" className="mt-3 inline-flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 text-xs font-semibold">Schedule Consultation →</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
