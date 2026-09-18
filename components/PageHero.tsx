export function PageHero({ eyebrow, title, accent, desc, cta }: { eyebrow: string; title: string; accent?: string; desc: string; cta?: React.ReactNode }) {
  return (
    <section className="bg-[#0A0A0A] text-white pt-28 md:pt-36 pb-14 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-[700px] h-[700px] bg-[#1a2a4a]/30 rounded-full blur-[100px]" />
      </div>
      <div className="container-custom relative">
        <p className="text-[11px] tracking-[0.18em] uppercase text-white/40">{eyebrow}</p>
        <h1 className="mt-3 font-[var(--font-display)] text-[38px] md:text-[64px] lg:text-[72px] leading-[0.9] tracking-[-0.04em] max-w-4xl text-balance">
          {title} {accent ? <span className="italic font-light text-white/50">{accent}</span> : null}
        </h1>
        <p className="mt-5 text-[15px] md:text-[17px] leading-relaxed text-white/60 max-w-2xl">{desc}</p>
        {cta ? <div className="mt-8 flex gap-3">{cta}</div> : null}
      </div>
    </section>
  );
}
