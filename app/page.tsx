"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const platforms = [
  {
    id: "01",
    name: "Velocity",
    href: "/platforms/velocity-ai",
    desc: "Paid media deployment and optimization support for approved campaign plans: budget movement, bid adjustments, creative rotation, and performance feedback.",
    tags: ["Media Deployment", "Budget Movement", "Performance Feedback"],
    accent: "bg-[#F3EEE6]",
  },
  {
    id: "02",
    name: "Catalyst",
    href: "/platforms/catalyst",
    desc: "End-to-end marketing operations automation, from lead nurturing and customer journey orchestration to content distribution and attribution modeling.",
    tags: ["Ops Automation", "Journey Orchestration", "Attribution"],
    accent: "bg-[#EDE9E3]",
  },
  {
    id: "03",
    name: "Genesis",
    href: "/platforms/genesis",
    desc: "Creative and campaign support layer for turning strategy into structured briefs, tests, variants, reporting, and repeatable execution.",
    tags: ["Creative Ops", "Testing", "Execution"],
    accent: "bg-[#FAF8F3]",
  },
  {
    id: "04",
    name: "Oracle",
    href: "/platforms/oracle",
    desc: "Market and performance intelligence for reading customer behavior, competitive signals, and campaign data before making the next media decision.",
    tags: ["Market Signals", "Forecasting", "Decision Support"],
    accent: "bg-[#F3EEE6]",
  },
];

const stats = [
  { value: "600+", label: "Clients Served", sub: "Companies trusting TMG to drive growth" },
  { value: "2,400+", label: "Campaigns Launched", sub: "Data-driven campaigns across industries" },
  { value: "4.2x", label: "Avg ROAS", sub: "Average return on ad spend" },
  { value: "38%", label: "Cost Reduction", sub: "Average decrease in CAC" },
  { value: "9+", label: "Industries", sub: "Healthcare, finance, real estate, energy + more" },
  { value: "210%", label: "Lead Growth", sub: "Best-in-class result across clients" },
];

const logos = ["Forcepoint", "Jecobra Aviation", "Auntie Anne's", "Qualico", "Novak Capital", "Advanced Medical Trials", "Re:start", "The Previvor"];

const testimonials = [
  {
    quote:
      "TMG developed a marketing campaign and a scheduling process for acquiring patients that was so successful, we ended up as the top producing site in the country for our first clinical trial. Many studies later, and not only are their efforts still producing stellar results, but they have the same dedication and focus on results that an equity owner would possess.",
    author: "Tony, CEO",
    company: "Medical Trials Company",
  },
  {
    quote:
      "After launching on September 13, TMG generated over 450 qualified leads within 6 weeks and converted 11 into investing partners, resulting in nearly $1,000,000 in new funding. The total cost was substantially less than our prior agency.",
    author: "Beau, President",
    company: "FlowTex Energy",
  },
  {
    quote:
      "We engaged 5 different digital marketing agencies whom promised a lot, but failed to deliver. By the end of my first meeting with TMG, I was impressed with their depth of knowledge. TMG's approach can be expressed in 2 words, trusted partnership.",
    author: "Carl, CMO",
    company: "Fintech Startup",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".hero-word", {
        y: 80,
        opacity: 0,
        rotation: 1,
        duration: 0.9,
        stagger: 0.07,
        ease: "power3.out",
        delay: 0.3,
      });
      gsap.from(".hero-sub", { y: 20, opacity: 0, duration: 0.8, delay: 1, ease: "power2.out" });
      gsap.from(".hero-scroll", { opacity: 0, duration: 0.8, delay: 1.4 });

      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#FAF8F3]">
      {/* HERO — earth night lights */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c429?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
          {/* subtle vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.5)_100%)]" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center pt-16">
          <h1
            ref={headlineRef}
            className="font-[var(--font-display)] text-white leading-[0.9] tracking-[-0.04em] text-[44px] sm:text-[64px] md:text-[84px] lg:text-[104px] xl:text-[118px]"
          >
            <span className="block overflow-hidden pb-1">
              <span className="hero-word inline-block">Elite</span>{" "}
              <span className="hero-word inline-block">Systems</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-word inline-block">for</span>{" "}
              <span className="hero-word inline-block">the</span>{" "}
              <span className="hero-word inline-block">Most</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-word inline-block">Demanding</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-word inline-block">Campaigns</span>
            </span>
          </h1>
          <p className="hero-sub mt-6 md:mt-8 text-[14px] md:text-[18px] text-white/70 font-light tracking-wide max-w-xl text-balance">
            Advertising systems connected by intelligence infrastructure
          </p>
        </div>

        <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">Scroll</span>
          <span className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent block" />
        </div>
      </section>

      {/* THE NEW STANDARD */}
      <section className="bg-[#0A0A0A] text-white py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/4 w-[700px] h-[700px] bg-[#1a2a4a]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#2a1a3a]/30 rounded-full blur-[130px]" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center reveal-up">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">The New Standard</p>
            <h2 className="font-[var(--font-display)] text-[32px] md:text-[54px] lg:text-[64px] leading-[1.05] tracking-[-0.03em]">
              We believe great advertising is built on <span className="italic font-light text-white/90">judgment, data,</span> and{" "}
              <span className="italic font-light text-white/90">discipline.</span>
            </h2>
            <p className="mt-8 text-[16px] md:text-[19px] leading-relaxed text-white/60 max-w-2xl mx-auto font-light">
              In an era of noise, precision is the only currency. TMG combines strategy, creative, media buying, analytics, automation, and
              intelligence backbones to help brands spend smarter and grow with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO LINE */}
      <section className="bg-[#FAF8F3] pt-16 md:pt-24 pb-8">
        <div className="container-custom">
          <div className="reveal-up max-w-5xl">
            <h2 className="font-[var(--font-display)] text-[28px] md:text-[44px] lg:text-[52px] leading-[1.15] tracking-[-0.03em] text-black/80">
              Our platforms power <span className="italic text-[#9aa0a6] font-light">AI-driven</span> marketing intelligence that transforms
              brands across healthcare, finance, technology, real estate, and energy.
            </h2>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-[#FAF8F3] pb-12 md:pb-20">
        <div className="container-custom">
          <div className="flex items-end justify-between border-t border-black/10 pt-6 mb-6 reveal-up">
            <span className="text-[11px] tracking-[0.18em] uppercase text-black/40 font-medium">Our Platforms</span>
            <span className="hidden md:block text-[12px] text-black/30">Scroll to explore →</span>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {platforms.map((p) => (
              <Link key={p.id} href={p.href} className="group grid md:grid-cols-[88px_1fr_300px] gap-6 md:gap-8 py-10 md:py-14 items-start hover:bg-white/60 transition-colors px-2 md:px-6 -mx-2 md:-mx-6">
                <span className="text-[12px] tracking-widest text-black/30 font-medium">/{p.id}</span>
                <div>
                  <h3 className="font-[var(--font-display)] text-[36px] md:text-[52px] leading-none tracking-[-0.03em] group-hover:tracking-[-0.02em] transition-all">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-black/60 max-w-[560px]">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[11px] tracking-wide px-3 py-1.5 rounded-full bg-white border border-black/10 text-black/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex md:justify-end items-start">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide border border-black/10 rounded-full px-4 py-2 group-hover:bg-black group-hover:text-white transition">
                    Explore <span className="text-[14px] leading-none">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="reveal-up text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <p className="text-[11px] tracking-[0.18em] uppercase text-black/30 mb-3">Results That Redefine Markets</p>
            <h2 className="font-[var(--font-display)] text-[36px] md:text-[54px] leading-[0.95] tracking-[-0.03em]">
              Growth you can <span className="italic font-light text-black/50">measure.</span>
            </h2>
            <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-black/60">
              Our advertising strategies, paired with our intelligence platform, help clients grow across healthcare, finance, technology, real
              estate, and energy.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 reveal-up">
            {stats.map((s) => (
              <div key={s.label} className="rounded-[24px] bg-[#FAF8F3] border border-black/[0.06] p-6 md:p-7">
                <div className="font-[var(--font-display)] text-[28px] md:text-[36px] leading-none tracking-[-0.02em]">{s.value}</div>
                <div className="mt-2 text-[12px] font-semibold tracking-wide">{s.label}</div>
                <div className="mt-1 text-[12px] leading-relaxed text-black/50">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[24px] bg-[#0A0A0A] text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 reveal-up">
            <div>
              <div className="text-sm font-medium">Trusted by 600+ companies worldwide</div>
              <div className="text-xs text-white/50 mt-1">From clinical trials to energy funding — real campaigns, real outcomes.</div>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 text-xs font-semibold shrink-0">
              View Case Studies <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* LOGO WALL */}
      <section className="bg-[#FAF8F3] py-10 md:py-14 border-y border-black/5">
        <div className="container-custom">
          <p className="text-center text-[11px] tracking-[0.18em] uppercase text-black/30 mb-8">Trusted by ambitious teams</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {logos.map((l) => (
              <span key={l} className="px-5 py-3 rounded-full bg-white border border-black/10 text-[12px] font-medium tracking-wide text-black/70">
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-8 reveal-up">
            <h2 className="font-[var(--font-display)] text-[28px] md:text-[40px] leading-none tracking-[-0.02em]">What our clients say</h2>
            <span className="hidden md:block text-xs text-black/30">Trusted partnership, measurable growth</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="rounded-[24px] bg-[#FAF8F3] border border-black/[0.06] p-6 md:p-7 flex flex-col">
                <div className="text-[13px] leading-relaxed text-black/70 flex-1">“{t.quote}”</div>
                <div className="mt-6 pt-5 border-t border-black/10">
                  <div className="text-[13px] font-semibold">{t.author}</div>
                  <div className="text-[12px] text-black/50">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A0A0A] text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="rounded-[32px] bg-[#111111] border border-white/10 p-8 md:p-12 lg:p-16 relative overflow-hidden reveal-up">
            <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-white/[0.04] rounded-full blur-[40px] pointer-events-none" />
            <div className="relative grid lg:grid-cols-[1.1fr_auto] gap-8 items-center">
              <div>
                <h2 className="font-[var(--font-display)] text-[32px] md:text-[48px] leading-[0.95] tracking-[-0.03em] text-balance">
                  Elite systems for campaigns that <span className="italic font-light text-white/60">cannot afford to guess.</span>
                </h2>
                <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-white/60 max-w-xl">
                  TMG combines strategy, creative, media buying, analytics, and automation to help you spend smarter and grow with confidence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-black rounded-full px-7 py-3.5 text-sm font-semibold">
                  Schedule Consultation <span>→</span>
                </Link>
                <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
