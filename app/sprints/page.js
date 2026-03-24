"use client";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { SPRINTS } from "@/lib/data";
function cn(b, i) { return b + " rv" + (i > 0 ? " d" + Math.min(i, 4) : ""); }
export default function SprintsPage() {
  var r = useReveal();
  return (
    <div ref={r}>
      <section className="sec px-6"><div className="max-w-[60rem] mx-auto">
        <div className="text-center mb-12"><p className="rv text-[0.65rem] tracking-[0.2em] uppercase font-bold font-display text-[var(--tt)] mb-2">Productised Offerings</p><h1 className="rv d1 font-display text-h1 font-extrabold text-[var(--tp)]">Fixed-Price Brand Sprints</h1><p className="rv d2 mt-3 text-[var(--ts)] max-w-[34rem] mx-auto">Clear deliverables. Transparent pricing. No scope creep.</p></div>
        <div className="space-y-6">{SPRINTS.map(function(sp, i) { return (
          <div key={sp.name} className={cn("bg-[var(--bg-s)] border border-[var(--bd)] rounded-2xl overflow-hidden", i+1)}>
            <div className="h-0.5 bg-[var(--tt)]"></div>
            <div className="p-7 md:p-9 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <div className="text-[0.6rem] tracking-[0.14em] font-bold font-mono text-[var(--tt)] mb-1">{sp.duration}</div>
                <h2 className="font-display text-h2 font-bold text-[var(--tp)] mb-2">{sp.name}</h2>
                <p className="text-[var(--ts)] text-[0.9rem] mb-5 max-w-xl">{sp.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">{sp.deliverables.map(function(d) { return <div key={d} className="flex items-start gap-2"><Check size={13} className="text-[var(--tt)] mt-0.5 shrink-0"/><span className="text-[var(--ts)] text-[0.82rem]">{d}</span></div>; })}</div>
                <p className="mt-4 text-[0.75rem] text-[var(--tt)] italic">Best for: {sp.ideal}</p>
              </div>
              <div className="md:text-right shrink-0">
                <p className="text-[0.65rem] text-[var(--tt)]">Starting at</p>
                <p className="font-display text-hero font-extrabold text-[var(--tp)] mb-4">{sp.price}</p>
                <Link href="/brand-health" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--ac)] text-[var(--ac-inv)] font-semibold hover:opacity-90 transition-opacity">Start Sprint <ArrowRight size={15}/></Link>
              </div>
            </div>
          </div>
        ); })}</div>
      </div></section>
    </div>
  );
}