"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { SERVICES } from "@/lib/data";
function cn(b, i) { return b + " rv" + (i > 0 ? " d" + Math.min(i, 4) : ""); }
export default function ServicesPage() {
  var r = useReveal();
  return (
    <div ref={r}>
      <section className="sec px-6"><div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-12"><p className="rv text-[0.65rem] tracking-[0.2em] uppercase font-bold font-display text-[var(--tt)] mb-2">Services</p><h1 className="rv d1 font-display text-h1 font-extrabold text-[var(--tp)]">What We Build</h1><p className="rv d2 mt-3 text-[var(--ts)] max-w-[36rem] mx-auto">Five interconnected disciplines. One behavioural methodology.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map(function(s, i) { return (
            <Link key={s.slug} href={"/services/" + s.slug} className={cn("group bg-[var(--bg-s)] border border-[var(--bd)] rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col", i+1)}>
              <h2 className="font-display text-h3 font-bold text-[var(--tp)] mb-1 group-hover:text-[var(--ts)] transition-colors">{s.name}</h2>
              <p className="text-[var(--tt)] text-[0.78rem] font-medium mb-3">{s.tagline}</p>
              <p className="text-[var(--ts)] text-[0.82rem] leading-relaxed mb-4 flex-1">{s.desc}</p>
              <div className="flex items-center gap-1.5 text-[var(--tp)] text-[0.82rem] font-semibold group-hover:gap-3 transition-all">Learn more <ArrowRight size={13}/></div>
            </Link>
          ); })}
        </div>
      </div></section>
    </div>
  );
}