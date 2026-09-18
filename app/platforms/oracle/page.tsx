import { PageHero } from "@/components/PageHero";
import Link from "next/link";
export default function Page() {
  return (
    <main className="bg-[#FAF8F3]">
      <PageHero eyebrow="Platform /04 — Oracle" title="Intelligence" accent="before the next decision." desc="Market and performance intelligence for reading customer behavior, competitive signals, and campaign data — before you move budget." cta={<Link href="/contact" className="bg-white text-black rounded-full px-6 py-3 text-sm font-semibold">Explore Oracle →</Link>} />
      <section className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: "Market Signals", d: "Competitive and customer signals distilled into what matters for allocation." },
            { t: "Forecasting", d: "Scenario-aware views that respect judgment — not just a line on a chart." },
            { t: "Decision Support", d: "A backbone that makes the next media decision obvious, not debated." },
          ].map((x) => (
            <div key={x.t} className="rounded-[24px] bg-white border border-black/10 p-6">
              <div className="text-sm font-semibold">{x.t}</div>
              <div className="mt-2 text-[13px] leading-relaxed text-black/60">{x.d}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
