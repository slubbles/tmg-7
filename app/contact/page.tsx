"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...payload }),
      });
      const j = await res.json();
      if (j.ok) {
        setStatus("success");
        setMsg("Thanks — we'll be in touch shortly.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setMsg(j.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMsg("Network error. Please try again.");
    }
  }

  return (
    <main className="bg-[#FAF8F3] pt-28 md:pt-32">
      <div className="container-custom pb-16 md:pb-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-black/40">Contact</p>
            <h1 className="mt-3 font-[var(--font-display)] text-[40px] md:text-[64px] leading-[0.95] tracking-[-0.04em]">
              Let&apos;s build <span className="italic font-light text-black/40">what&apos;s next.</span>
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-black/60 max-w-lg">
              Tell us about your goals, your market, and where precision matters most. We&apos;ll respond within one business day.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl bg-white border border-black/10 p-5">
                <div className="text-xs tracking-widest uppercase text-black/40">Email</div>
                <a href="mailto:partners@tmg.agency" className="mt-1 block text-[15px] font-medium">partners@tmg.agency</a>
                <div className="mt-2 text-xs text-black/50">For partnerships, press, and general inquiries.</div>
              </div>
              <div className="rounded-2xl bg-[#0A0A0A] text-white p-5">
                <div className="text-xs tracking-widest uppercase text-white/40">Offices</div>
                <div className="mt-1 text-sm leading-relaxed text-white/80">Serving clients across healthcare, finance, technology, real estate, and energy — nationwide.</div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-[28px] bg-white border border-black/10 p-6 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
            <div className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="grid gap-2">
                  <span className="text-xs font-medium tracking-wide">Full name</span>
                  <input name="name" required placeholder="Alex Morgan" className="rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30" />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-medium tracking-wide">Work email</span>
                  <input name="email" type="email" required placeholder="alex@company.com" className="rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30" />
                </label>
              </div>
              <label className="grid gap-2">
                <span className="text-xs font-medium tracking-wide">Company</span>
                <input name="company" placeholder="Company name" className="rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30" />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-medium tracking-wide">What can we help with?</span>
                <select name="interest" className="rounded-full border border-black/10 px-4 py-3 text-sm bg-white outline-none">
                  <option>Performance Media & Optimization</option>
                  <option>AI-Powered Strategy</option>
                  <option>Creative Development</option>
                  <option>Marketing Intelligence / Attribution</option>
                  <option>Brand Architecture</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-medium tracking-wide">Message</span>
                <textarea name="message" rows={4} placeholder="Tell us about your campaign, goals, and timeline..." className="rounded-[20px] border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30 resize-none" />
              </label>

              <button disabled={status === "loading"} className="rounded-full bg-[#0A0A0A] text-white py-3.5 text-sm font-semibold disabled:opacity-60">
                {status === "loading" ? "Sending..." : "Send message →"}
              </button>

              {status !== "idle" && (
                <div className={`rounded-2xl px-4 py-3 text-sm ${status === "success" ? "bg-green-50 text-green-700 border border-green-200" : status === "error" ? "bg-red-50 text-red-700 border border-red-200" : "bg-black/5"}`}>
                  {msg}
                </div>
              )}
              <p className="text-[11px] leading-relaxed text-black/40 text-center">By submitting you agree to our Privacy Policy. We never sell your data.</p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
