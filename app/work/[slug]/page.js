"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { CASE_STUDIES } from "@/lib/data";
export default function CasePage() {
  var slug = useParams().slug;
  var r = useReveal();
  var idx = CASE_STUDIES.findIndex(function(c) { return c.slug === slug; });
  var cs = CASE_STUDIES[idx];
  if (!cs) return <div className="sec px-6 text-center text-[var(--ts)]">Not found. <Link href="/work" className="underline">Back</Link></div>;
  var next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];
  var prev = CASE_STUDIES[(idx - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];
  return (
    <div ref={r}>
      <div className="w-full aspect-[21/9] max-h-[55vh] bg-[var(--bg-e)] relative flex items-center justify-center"><span className="text-[var(--tt)]">{cs.client}</span><div className="absolute inset-0 opacity-[0.05]" style={{ background: cs.color }}></div><div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[var(--bg)] to-transparent"></div></div>
      <section className="px-6 -mt-10 relative z-10"><div className="max-w-[52rem] mx-auto">
        <div className="rv flex items-center gap-2 mb-3"><div className="w-2.5 h-2.5 rounded-full" style={{ background: cs.color }}></div><span className="text-[0.6rem] tracking-[0.15em] uppercase text-[var(--ts)]">{cs.industry}</span></div>
        <h1 className="rv d1 font-display text-h1 font-extrabold text-[var(--tp)]">{cs.client}</h1>
        <p className="rv d2 mt-2 font-display text-h3 text-[var(--ts)]">{cs.headline}</p>
      </div></section>
      <section className="sec px-6"><div className="max-w-[52rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rv"><div className="flex items-center gap-2 mb-3"><div className="w-6 h-px bg-[var(--bd)]"></div><span className="text-[0.6rem] tracking-[0.15em] uppercase text-[var(--tt)] font-bold">The Challenge</span></div><p className="text-[var(--ts)] text-[0.9rem] leading-relaxed">{cs.challenge}</p></div>
        <div className="rv d1"><div className="flex items-center gap-2 mb-3"><div className="w-6 h-px bg-[var(--bd)]"></div><span className="text-[0.6rem] tracking-[0.15em] uppercase text-[var(--tt)] font-bold">Our Approach</span></div><p className="text-[var(--ts)] text-[0.9rem] leading-relaxed">{cs.approach}</p></div>
      </div></section>
      {cs.cards && cs.cards.length > 0 && <section className="px-6 pb-12"><div className="max-w-[52rem] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">{cs.cards.map(function(cd) { return <div key={cd.title} className="rv bg-[var(--bg-s)] border border-[var(--bd)] rounded-xl p-5"><h3 className="font-display font-bold text-[var(--tp)] text-[0.875rem] mb-1">{cd.title}</h3><p className="text-[var(--ts)] text-[0.78rem]">{cd.desc}</p></div>; })}</div></section>}
      <section className="px-6 pb-12"><div className="max-w-[52rem] mx-auto"><h2 className="rv font-display text-h2 font-bold text-[var(--tp)] mb-4">Deliverables</h2><div className="space-y-2">{cs.deliverables.map(function(d) { return <div key={d} className="rv flex items-start gap-3 text-[var(--ts)] text-[0.875rem]"><span className="w-1.5 h-1.5 rounded-full bg-[var(--tt)] mt-2 shrink-0"></span>{d}</div>; })}</div></div></section>
      <section className="px-6 py-10 border-t border-[var(--bds)]"><div className="max-w-[52rem] mx-auto flex items-center justify-between">
        <Link href={"/work/" + prev.slug} className="group flex items-center gap-2 text-[var(--ts)] hover:text-[var(--tp)] transition-colors"><ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform"/><div><p className="text-[0.65rem] text-[var(--tt)]">Previous</p><p className="font-display font-semibold text-[0.85rem]">{prev.client}</p></div></Link>
        <Link href={"/work/" + next.slug} className="group flex items-center gap-2 text-[var(--ts)] hover:text-[var(--tp)] transition-colors text-right"><div><p className="text-[0.65rem] text-[var(--tt)]">Next</p><p className="font-display font-semibold text-[0.85rem]">{next.client}</p></div><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/></Link>
      </div></section>
      <section className="sec px-6 bg-[var(--bg-s)]"><div className="max-w-[36rem] mx-auto text-center"><h2 className="rv font-display text-h2 font-bold text-[var(--tp)] mb-3">Want results like this?</h2><div className="flex flex-wrap gap-3 justify-center mt-5"><Link href="/brand-health" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--ac)] text-[var(--ac-inv)] font-semibold hover:opacity-90 transition-opacity">Brand Health Check <ArrowRight size={15}/></Link><Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--bd)] text-[var(--tp)] font-semibold hover:bg-[var(--ov)] transition-all">Get in Touch</Link></div></div></section>
    </div>
  );
}