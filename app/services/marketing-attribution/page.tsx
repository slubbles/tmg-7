import { PageHero } from "@/components/PageHero";
import Link from "next/link";
export default function Page() {
  return (
    <main className="bg-[#FAF8F3]">
      <PageHero eyebrow="Services — Marketing Attribution" title="Marketing Attribution" accent="" desc="Credit where it's actually due. Journey-aware attribution that shows what earned the conversion, not what claimed it." cta={<><Link href="/contact" className="bg-white text-black rounded-full px-6 py-3 text-sm font-semibold">Talk to TMG →</Link><Link href="/case-studies" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">View case studies</Link></>} />
      <section className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-[24px] bg-white border border-black/10 p-6">
            <div className="text-sm font-semibold">What we do</div>
            <p className="mt-2 text-[13px] leading-relaxed text-black/60">Journey-aware attribution that shows what earned the conversion, not what claimed it.</p>
          </div>
          <div className="rounded-[24px] bg-white border border-black/10 p-6">
            <div className="text-sm font-semibold">How we deliver</div>
            <p className="mt-2 text-[13px] leading-relaxed text-black/60">Senior-led, data-backed, and measured on the metrics your board actually cares about.</p>
          </div>
          <div className="rounded-[24px] bg-[#0A0A0A] text-white p-6">
            <div className="text-sm font-semibold">Next step</div>
            <p className="mt-2 text-[13px] leading-relaxed text-white/60">Bring your goals and constraints — we&apos;ll map the fastest path to proof.</p>
            <Link href="/contact" className="mt-4 inline-flex bg-white text-black rounded-full px-4 py-2 text-xs font-semibold">Schedule Consultation →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
