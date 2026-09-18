import { PageHero } from "@/components/PageHero";
import Link from "next/link";
export default function Page() {
  return (
    <main className="bg-[#FAF8F3]">
      <PageHero eyebrow="Platform /03 — Genesis" title="Creative ops" accent="that turns strategy into execution." desc="Structured briefs, tests, variants, reporting, and repeatable playbooks — so good ideas don't die in the handoff." cta={<Link href="/contact" className="bg-white text-black rounded-full px-6 py-3 text-sm font-semibold">Start with Genesis →</Link>} />
      <section className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: "Creative Ops", d: "Briefs, approvals, and asset workflows that actually keep pace with media." },
            { t: "Testing", d: "Variants designed to learn — not just to fill a calendar." },
            { t: "Execution", d: "Repeatable delivery across markets, teams, and seasons." },
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
