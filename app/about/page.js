"use client";
import { Search, Brain, Layers, Zap } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { METHODOLOGY, SITE, WHY_US } from "@/lib/data";
const ICONS = { Search, Brain, Layers, Zap };
function cn(b, i) { return b + " rv" + (i > 0 ? " d" + Math.min(i, 4) : ""); }
export default function About() {
  var r = useReveal();
  return (
    <div ref={r}>
      <section className="sec px-6 noise relative">
        <div className="relative z-10 max-w-[48rem] mx-auto text-center">
          <p className="rv text-[0.65rem] tracking-[0.2em] uppercase font-bold font-display text-[var(--tt)] mb-3">About VITA-M</p>
          <h1 className="rv d1 font-display text-h1 font-extrabold text-[var(--tp)]">Strategy Rooted in Human Behaviour</h1>
          <p className="rv d2 mt-5 text-[var(--ts)] text-[1.05rem]">We do not just build brands. We engineer global scale efficiency &mdash; moments that shift consumer outlook, elevate brand perception, and make people feel like the product was always meant to be in their lives.</p>
        </div>
      </section>
      <section className="sec px-6 bg-[var(--bg-s)]">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-12"><h2 className="rv font-display text-h1 font-extrabold text-[var(--tp)]">The VITA-M Method</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {METHODOLOGY.map(function(m, i) { var Ic = ICONS[m.icon]; return (
              <div key={m.name} className={cn("bg-[var(--bg)] border border-[var(--bd)] rounded-2xl p-7", i+1)}>
                <div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-xl bg-[var(--ov)] flex items-center justify-center"><Ic size={18} className="text-[var(--ts)]"/></div><div><div className="text-[0.6rem] font-mono text-[var(--tt)]">Stage {m.stage}</div><h3 className="font-display font-bold text-[var(--tp)]">{m.name}</h3></div></div>
                <p className="text-[var(--ts)] text-[0.875rem] mb-3">{m.desc}</p>
                <p className="text-[0.72rem] text-[var(--tt)] italic border-t border-[var(--bds)] pt-3">{m.science}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>
      <section className="sec px-6">
        <div className="max-w-[52rem] mx-auto">
          <div className="text-center mb-12"><h2 className="rv font-display text-h1 font-extrabold text-[var(--tp)]">The Team</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SITE.founders.map(function(f, i) { return (
              <div key={f.name} className={cn("bg-[var(--bg-s)] border border-[var(--bd)] rounded-2xl overflow-hidden", i+1)}>
                <div className="aspect-[4/3] bg-[var(--bg-e)] flex items-center justify-center"><span className="text-[var(--tt)] text-[0.8rem]">{f.name} &mdash; Headshot</span></div>
                <div className="p-6"><h3 className="font-display font-bold text-[var(--tp)]">{f.name}</h3><p className="text-[var(--tt)] text-[0.78rem] font-medium">{f.role}</p><p className="text-[var(--ts)] text-[0.85rem] mt-3">{f.bio}</p><p className="text-[var(--tt)] text-[0.78rem] mt-2">{f.phone}</p></div>
              </div>
            ); })}
          </div>
        </div>
      </section>
      <section className="sec px-6 bg-[var(--bg-s)]">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-12"><h2 className="rv font-display text-h1 font-extrabold text-[var(--tp)]">What Sets Us Apart</h2></div>
          <div className="rv d1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_US.map(function(w) { return <div key={w.num} className="bg-[var(--bg)] border border-[var(--bd)] rounded-2xl p-6"><div className="text-[0.6rem] font-mono text-[var(--tt)] mb-1">{w.num}</div><h3 className="font-display font-bold text-[var(--tp)] mb-2">{w.title}</h3><p className="text-[var(--ts)] text-[0.82rem] leading-relaxed">{w.desc}</p></div>; })}
          </div>
        </div>
      </section>
    </div>
  );
}