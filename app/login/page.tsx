"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <main className="bg-[#FAF8F3] pt-28 md:pt-32 pb-16">
      <div className="container-custom max-w-[560px]">
        <p className="text-[11px] tracking-[0.18em] uppercase text-black/40">Client Access</p>
        <h1 className="mt-3 font-[var(--font-display)] text-[36px] md:text-[48px] leading-[0.95] tracking-[-0.03em]">Sign in to TMG</h1>
        <p className="mt-3 text-sm text-black/60">Mock session for preview QA. Clerk-ready — add env keys to go live.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
            setTimeout(() => setDone(false), 3000);
          }}
          className="mt-8 rounded-[28px] bg-white border border-black/10 p-6 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)] grid gap-5"
        >
          <label className="grid gap-2">
            <span className="text-xs font-medium">Work email</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="you@company.com" className="rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30" />
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-medium">Password</span>
            <input required type="password" placeholder="••••••••" className="rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30" />
          </label>
          <button className="rounded-full bg-[#0A0A0A] text-white py-3.5 text-sm font-semibold">Continue →</button>
          {done && <div className="rounded-2xl bg-green-50 border border-green-200 text-green-700 px-4 py-3 text-sm">Mock sign-in successful — session would be created with Clerk in production.</div>}
          <p className="text-[11px] text-black/40 text-center">No real auth is enforced in this preview. Configure <code className="bg-black/5 px-1.5 py-0.5 rounded">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> + <code className="bg-black/5 px-1.5 py-0.5 rounded">CLERK_SECRET_KEY</code> to enable Clerk.</p>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm underline decoration-black/20 underline-offset-4">Back to home</Link>
        </div>
      </div>
    </main>
  );
}
