import { PageHero } from "@/components/PageHero";
import Link from "next/link";
export default function Page() {
  return (
    <main className="bg-[#FAF8F3]">
      <PageHero eyebrow="Platform /02 — Catalyst" title="Marketing ops" accent="that runs itself." desc="End-to-end automation from lead nurturing and journey orchestration to content distribution and attribution modeling." cta={<><Link href="/contact" className="bg-white text-black rounded-full px-6 py-3 text-sm font-semibold">See Catalyst in action →</Link></>} />
      <section className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: "Ops Automation", d: "Nurture, scoring, and handoff — without the manual busywork that breaks at scale." },
            { t: "Journey Orchestration", d: "Personalized paths that respond to behavior, not just demographics." },
            { t: "Attribution", d: "See which touch earned the next dollar, and which just took credit." },
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
