"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { SERVICES } from "@/lib/data";
function cn(b, i) { return b + " rv" + (i > 0 ? " d" + Math.min(i, 4) : ""); }
export default function ServicePage() {
  var slug = useParams().slug;
  var r = useReveal();
  var svc = SERVICES.find(function(s) { return s.slug === slug; });
  if (!svc) return <div className="sec px-6 text-center text-[var(--ts)]">Service not found.</div>;
  return (
    <div ref={r}>
      <section className="sec px-6 noise relative"><div className="relative z-10 max-w-[48rem] mx-auto text-center">
        <p className="rv text-[0.65rem] tracking-[0.2em] uppercase font-bold font-display text-[var(--tt)] mb-3">Services</p>
        <h1 className="rv d1 font-display text-h1 font-extrabold text-[var(--tp)]">{svc.name}</h1>
        <p className="rv d2 mt-3 text-[var(--tt)] text-[1rem] font-medium">{svc.tagline}</p>
        <p className="rv d3 mt-5 text-[var(--ts)] max-w-[36rem] mx-auto">{svc.desc}</p>
      </div></section>
      <section className="sec px-6 bg-[var(--bg-s)]"><div className="max-w-[48rem] mx-auto">
        <h2 className="rv font-display text-h2 font-bold text-[var(--tp)] mb-6">What This Includes</h2>
        <div className="space-y-3">{svc.offerings.map(function(o, i) { return <div key={i} className={cn("flex items-start gap-3 bg-[var(--bg)] border border-[var(--bd)] rounded-xl p-5", i+1)}><span className="w-1.5 h-1.5 rounded-full bg-[var(--tt)] mt-2 shrink-0"></span><p className="text-[var(--tp)] text-[0.9rem]">{o}</p></div>; })}</div>
      </div></section>
      <section className="sec px-6"><div className="max-w-[36rem] mx-auto text-center">
        <h2 className="rv font-display text-h2 font-bold text-[var(--tp)] mb-3">Ready to Start?</h2>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <Link href="/brand-health" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--ac)] text-[var(--ac-inv)] font-semibold hover:opacity-90 transition-opacity">Brand Health Check <ArrowRight size={15}/></Link>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--bd)] text-[var(--tp)] font-semibold hover:bg-[var(--ov)] transition-all">Contact Us</Link>
        </div>
      </div></section>
    </div>
  );
}