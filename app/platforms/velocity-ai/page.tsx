import { PageHero } from "@/components/PageHero";
import Link from "next/link";
export default function Page() {
  return (
    <main className="bg-[#FAF8F3]">
      <PageHero eyebrow="Platform /01 — Velocity" title="Paid media" accent="that moves with the market." desc="Budget movement, bid adjustments, creative rotation, and performance feedback — deployment and optimization support for approved campaign plans." cta={<><Link href="/contact" className="bg-white text-black rounded-full px-6 py-3 text-sm font-semibold">Talk to TMG →</Link><Link href="/case-studies" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">See results</Link></>} />
      <section className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: "Media Deployment", d: "Structure and launch paid programs across search, social, and programmatic with clean discipline." },
            { t: "Budget Movement", d: "Shift spend toward what proves it deserves more — daily, not quarterly." },
            { t: "Performance Feedback", d: "Closed-loop reporting that informs the next creative, bid, and allocation decision." },
          ].map((x) => (
            <div key={x.t} className="rounded-[24px] bg-white border border-black/10 p-6">
              <div className="text-sm font-semibold">{x.t}</div>
              <div className="mt-2 text-[13px] leading-relaxed text-black/60">{x.d}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-[24px] bg-white border border-black/10 p-6 md:p-8">
          <h3 className="font-[var(--font-display)] text-[22px] tracking-[-0.02em]">How we work</h3>
          <ul className="mt-4 grid md:grid-cols-3 gap-4 text-sm leading-relaxed text-black/60">
            <li>• No guesswork: every move is tied to an approved plan and measurable signal.</li>
            <li>• Rotation & testing baked in — creative never goes stale.</li>
            <li>• Weekly readouts that a CFO would actually want to read.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
