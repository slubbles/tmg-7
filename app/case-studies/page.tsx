import { PageHero } from "@/components/PageHero";
import Link from "next/link";

const cases = [
  { tag: "Healthcare", title: "Top producing clinical trial site in the nation", metric: "#1 site", desc: "Campaign + scheduling process that scaled across multiple studies — sustained growth in an ever-changing landscape." },
  { tag: "Energy & Finance", title: "$1M in new funding in 6 weeks", metric: "450+ leads", desc: "450 qualified leads, 11 investing partners, at substantially lower cost than the prior agency." },
  { tag: "Technology", title: "From 5 failed agencies to trusted partnership", metric: "Trusted", desc: "Depth of expertise that turned skepticism into measurable business results." },
  { tag: "Non-Profit", title: "Platform that revolutionized service delivery", metric: "Expanded reach", desc: "Intuitive, professional platform that increased fundraising and strengthened presence for The Previvor Foundation." },
  { tag: "Real Estate", title: "Precision media for demanding markets", metric: "4.2x ROAS", desc: "Intelligence-backed deployment that turns market signals into allocation decisions." },
  { tag: "Finance", title: "Attribution that earns the next dollar", metric: "38% CAC ↓", desc: "Journey orchestration and attribution modeling that proves what deserves more budget." },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#FAF8F3]">
      <PageHero
        eyebrow="Case Studies"
        title="Real results"
        accent="from real clients."
        desc="Our advertising strategies, paired with our intelligence platform, help clients grow across healthcare, finance, technology, real estate, and energy."
      />
      <section className="container-custom py-10 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cases.map((c) => (
            <div key={c.title} className="rounded-[24px] bg-white border border-black/10 p-6 md:p-7 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-widest uppercase text-black/40">{c.tag}</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF8F3] border border-black/10">{c.metric}</span>
              </div>
              <h3 className="mt-4 font-[var(--font-display)] text-[22px] leading-tight tracking-[-0.02em]">{c.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-black/60 flex-1">{c.desc}</p>
              <Link href="/contact" className="mt-6 inline-flex text-xs font-semibold tracking-wide border border-black/10 rounded-full px-4 py-2 hover:bg-black hover:text-white transition w-fit">
                Discuss a similar outcome →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] bg-[#0A0A0A] text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-[var(--font-display)] text-[24px] md:text-[30px] leading-none tracking-[-0.02em]">Want the full story?</h3>
            <p className="mt-2 text-sm text-white/60">We&apos;ll walk through strategy, creative, media, and measurement — tailored to your market.</p>
          </div>
          <Link href="/contact" className="bg-white text-black rounded-full px-6 py-3 text-sm font-semibold shrink-0">Schedule Consultation →</Link>
        </div>
      </section>
    </main>
  );
}
