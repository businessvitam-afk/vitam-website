"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { CASE_STUDIES } from "@/lib/data";
function cn(b, i) { return b + " rv" + (i > 0 ? " d" + Math.min(i, 4) : ""); }
export default function WorkPage() {
  var r = useReveal();
  return (
    <div ref={r}>
      <section className="sec px-6"><div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-12"><p className="rv text-[0.65rem] tracking-[0.2em] uppercase font-bold font-display text-[var(--tt)] mb-2">Case Studies</p><h1 className="rv d1 font-display text-h1 font-extrabold text-[var(--tp)]">Moments, Engineered</h1></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{CASE_STUDIES.map(function(cs, i) { return (
          <Link key={cs.slug} href={"/work/" + cs.slug} className={cn("group bg-[var(--bg-s)] border border-[var(--bd)] rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300", i+1)}>
            <div className="aspect-[16/9] bg-[var(--bg-e)] flex items-center justify-center relative"><span className="text-[var(--tt)] text-[0.78rem]">{cs.client}</span><div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: cs.color }}></div></div>
            <div className="p-6"><div className="flex items-center gap-2 mb-2"><div className="w-1.5 h-1.5 rounded-full" style={{ background: cs.color }}></div><span className="text-[0.6rem] tracking-[0.12em] uppercase text-[var(--tt)]">{cs.industry}</span></div><h2 className="font-display text-h3 font-bold text-[var(--tp)] mb-1 group-hover:text-[var(--ts)] transition-colors">{cs.client}</h2><p className="text-[var(--ts)] text-[0.82rem] mb-3">{cs.summary}</p><div className="flex items-center gap-1 text-[var(--tp)] text-[0.78rem] font-semibold group-hover:gap-2.5 transition-all">View <ArrowUpRight size={12}/></div></div>
          </Link>
        ); })}</div>
      </div></section>
    </div>
  );
}