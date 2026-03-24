"use client";
import Link from "next/link";
import { Search, Brain, Layers, Zap, ArrowRight, ChevronDown, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { useCountUp } from "@/lib/useCountUp";
import { METHODOLOGY, SERVICES, SPRINTS, CASE_STUDIES, STATS, WHY_US } from "@/lib/data";

const ICONS = { Search, Brain, Layers, Zap };

function Stat({ stat }) {
  const { count, ref } = useCountUp(typeof stat.value === "number" ? stat.value : 0);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-h1 font-bold text-[var(--tp)]">{count}{stat.suffix}</div>
      <p className="text-[var(--ts)] text-[0.78rem] mt-0.5">{stat.label}</p>
    </div>
  );
}

function cn(base, i) { return base + " rv" + (i > 0 ? " d" + Math.min(i, 4) : ""); }

export default function Home() {
  var r = useReveal();
  return (
    <div ref={r}>
      {/* HERO */}
      <section className="min-h-[100dvh] flex flex-col items-center justify-center relative px-6 noise">
        <div className="relative z-10 text-center max-w-[54rem]">
          <div className="rv flex justify-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[var(--bg-s)] border border-[var(--bd)] flex items-center justify-center shadow-sm">
              <span className="font-display font-bold text-xl text-[var(--tp)]">V</span>
            </div>
          </div>
          <h1 className="rv d1 font-display text-hero font-extrabold text-[var(--tp)]">We Engineer Moments</h1>
          <p className="rv d2 mt-5 text-[var(--ts)] text-[0.9rem] font-medium">
            Brand Communication <span className="text-[var(--tt)] mx-1">&middot;</span> Creative Production <span className="text-[var(--tt)] mx-1">&middot;</span> Behaviour Design <span className="text-[var(--tt)] mx-1">&middot;</span> Business Consulting
          </p>
          <p className="rv d3 mt-2 text-[var(--tt)] text-[0.8rem] italic">Strategy rooted in human behaviour. Creative that moves markets.</p>
          <div className="rv d4 mt-9 flex flex-wrap gap-3 justify-center">
            <Link href="/brand-health" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--ac)] text-[var(--ac-inv)] font-semibold text-[0.875rem] hover:opacity-90 transition-opacity">Take the Brand Health Check <ArrowRight size={15}/></Link>
            <Link href="/work" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--bd)] text-[var(--tp)] font-semibold text-[0.875rem] hover:bg-[var(--ov)] transition-all">See Our Work</Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[var(--tt)] opacity-50"><ChevronDown size={18}/></div>
      </section>

      {/* PHILOSOPHY */}
      <section className="sec px-6 noise relative">
        <div className="relative z-10 max-w-[48rem] mx-auto text-center">
          <p className="rv font-display text-h2 font-bold text-[var(--tp)] leading-snug">
            We do not just build brands. <em className="text-[var(--ts)]">We engineer global scale efficiency.</em>
          </p>
          <div className="rv d1 w-12 h-px bg-[var(--bd)] mx-auto my-6"></div>
          <p className="rv d1 text-[var(--ts)] text-[1rem]">
            We watch where people walk, what they reach for, when they slow down &mdash; and how their behaviour reveals more than any data sheet ever could. That is where strategy begins for us, in the real world, <em className="text-[var(--tt)]">not in a meeting room.</em>
          </p>
        </div>
      </section>

      {/* 5 PILLARS */}
      <section className="sec px-6 bg-[var(--bg-s)]">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-12">
            <p className="rv text-[0.65rem] tracking-[0.2em] uppercase font-bold font-display text-[var(--tt)] mb-2">What We Do</p>
            <h2 className="rv d1 font-display text-h1 font-extrabold text-[var(--tp)]">Five Pillars</h2>
          </div>
          <div className="rv d2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SERVICES.map(function(s) {
              return (
                <Link key={s.slug} href={"/services/" + s.slug} className="group bg-[var(--bg)] border border-[var(--bd)] rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-display font-bold text-[var(--tp)] text-[0.9rem] mb-1.5 group-hover:text-[var(--ts)] transition-colors">{s.name}</h3>
                  <p className="text-[var(--ts)] text-[0.75rem] leading-relaxed">{s.tagline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="sec px-6">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-12">
            <p className="rv text-[0.65rem] tracking-[0.2em] uppercase font-bold font-display text-[var(--tt)] mb-2">Our Method</p>
            <h2 className="rv d1 font-display text-h1 font-extrabold text-[var(--tp)]">Four Stages of Moment Engineering</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {METHODOLOGY.map(function(m, i) {
              var Ic = ICONS[m.icon];
              return (
                <div key={m.name} className={cn("bg-[var(--bg-s)] border border-[var(--bd)] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300", i+1)}>
                  <div className="w-9 h-9 rounded-xl bg-[var(--ov)] flex items-center justify-center mb-3"><Ic size={18} className="text-[var(--ts)]"/></div>
                  <div className="text-[0.6rem] font-mono tracking-wider text-[var(--tt)] mb-0.5">{m.stage}</div>
                  <h3 className="font-display text-h3 font-bold text-[var(--tp)] mb-2">{m.name}</h3>
                  <p className="text-[var(--ts)] text-[0.8rem] leading-relaxed mb-3">{m.desc}</p>
                  <p className="text-[0.7rem] text-[var(--tt)] italic border-t border-[var(--bds)] pt-2.5">{m.science}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPRINTS */}
      <section className="sec px-6 bg-[var(--bg-s)]">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-12">
            <p className="rv text-[0.65rem] tracking-[0.2em] uppercase font-bold font-display text-[var(--tt)] mb-2">Start Here</p>
            <h2 className="rv d1 font-display text-h1 font-extrabold text-[var(--tp)]">Fixed-Price Brand Sprints</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SPRINTS.map(function(sp, i) {
              return (
                <div key={sp.name} className={cn("bg-[var(--bg)] border border-[var(--bd)] rounded-2xl p-6 flex flex-col relative overflow-hidden", i+1)}>
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-[var(--tt)] rounded-full"></div>
                  <div className="text-[0.6rem] tracking-[0.14em] font-bold font-mono text-[var(--tt)] mt-1 mb-0.5">{sp.duration}</div>
                  <h3 className="font-display text-h3 font-bold text-[var(--tp)] mb-2">{sp.name}</h3>
                  <p className="text-[var(--ts)] text-[0.8rem] mb-4">{sp.desc}</p>
                  <ul className="flex-1 space-y-1 mb-5">{sp.deliverables.map(function(d) { return <li key={d} className="flex items-start gap-2 text-[0.78rem] text-[var(--ts)]"><span className="w-1 h-1 rounded-full bg-[var(--tt)] mt-2 shrink-0"></span>{d}</li>; })}</ul>
                  <div className="mt-auto">
                    <p className="text-[0.65rem] text-[var(--tt)]">Starting at</p>
                    <p className="font-display text-h2 font-extrabold text-[var(--tp)] mb-3">{sp.price}</p>
                    <Link href="/brand-health" className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[var(--bd)] text-[var(--tp)] text-[0.82rem] font-semibold hover:bg-[var(--ac)] hover:text-[var(--ac-inv)] hover:border-[var(--ac)] transition-all">Start Sprint <ArrowRight size={13}/></Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="sec px-6">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-12">
            <p className="rv text-[0.65rem] tracking-[0.2em] uppercase font-bold font-display text-[var(--tt)] mb-2">Case Studies</p>
            <h2 className="rv d1 font-display text-h1 font-extrabold text-[var(--tp)]">Moments, Engineered</h2>
          </div>
          <div className="space-y-4">
            {CASE_STUDIES.slice(0, 4).map(function(cs, i) {
              return (
                <Link key={cs.slug} href={"/work/" + cs.slug} className={cn("group grid grid-cols-1 md:grid-cols-2 bg-[var(--bg-s)] border border-[var(--bd)] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300", i+1)} style={{ direction: i % 2 === 1 ? "rtl" : "ltr" }}>
                  <div className="aspect-[16/10] bg-[var(--bg-e)] flex items-center justify-center relative" style={{ direction: "ltr" }}>
                    <span className="text-[var(--tt)] text-[0.8rem]">{cs.client} &mdash; Hero Image</span>
                    <div className="absolute inset-0 opacity-[0.05]" style={{ background: cs.color }}></div>
                  </div>
                  <div className="p-7 md:p-9 flex flex-col justify-center" style={{ direction: "ltr" }}>
                    <div className="flex items-center gap-2 mb-2"><div className="w-1.5 h-1.5 rounded-full" style={{ background: cs.color }}></div><span className="text-[0.6rem] tracking-[0.15em] uppercase text-[var(--tt)]">{cs.industry}</span></div>
                    <h3 className="font-display text-h2 font-bold text-[var(--tp)] group-hover:text-[var(--ts)] transition-colors">{cs.client}</h3>
                    <p className="text-[var(--ts)] text-[0.875rem] mt-2 mb-4">{cs.summary}</p>
                    <div className="flex items-center gap-1.5 text-[var(--tp)] text-[0.82rem] font-semibold group-hover:gap-3 transition-all">View Case Study <ArrowUpRight size={13}/></div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8"><Link href="/work" className="text-[var(--ts)] text-[0.82rem] font-medium hover:text-[var(--tp)] transition-colors">View all case studies &rarr;</Link></div>
        </div>
      </section>

      {/* WHY US */}
      <section className="sec px-6 bg-[var(--bg-s)]">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-12">
            <p className="rv text-[0.65rem] tracking-[0.2em] uppercase font-bold font-display text-[var(--tt)] mb-2">Why VITA-M</p>
            <h2 className="rv d1 font-display text-h1 font-extrabold text-[var(--tp)]">What Sets Us Apart</h2>
          </div>
          <div className="rv d2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_US.map(function(w) {
              return (
                <div key={w.num} className="bg-[var(--bg)] border border-[var(--bd)] rounded-2xl p-6">
                  <div className="text-[0.65rem] font-mono text-[var(--tt)] mb-1">{w.num}</div>
                  <h3 className="font-display font-bold text-[var(--tp)] text-[1rem] mb-2">{w.title}</h3>
                  <p className="text-[var(--ts)] text-[0.82rem] leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="sec px-6 noise relative">
        <div className="relative z-10 max-w-[52rem] mx-auto">
          <div className="text-center mb-10"><h2 className="rv font-display text-h1 font-extrabold text-[var(--tp)]">Numbers That Move</h2></div>
          <div className="rv d1 grid grid-cols-2 md:grid-cols-4 gap-6">{STATS.map(function(s, i) { return <Stat key={i} stat={s}/>; })}</div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec px-6">
        <div className="max-w-[52rem] mx-auto">
          <div className="rv bg-[var(--bg-s)] border border-[var(--bd)] rounded-3xl p-10 md:p-14 text-center shadow-sm">
            <p className="text-[0.65rem] tracking-[0.2em] uppercase font-bold font-display text-[var(--tt)] mb-3">Free Interactive Tool</p>
            <h2 className="font-display text-h1 font-extrabold text-[var(--tp)]">How Healthy Is Your Brand?</h2>
            <p className="text-[var(--ts)] text-[1rem] mt-3 max-w-[30rem] mx-auto">Take our 3-minute Behavioural Brand Assessment. No email required for your initial results.</p>
            <div className="mt-7"><Link href="/brand-health" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--ac)] text-[var(--ac-inv)] font-semibold hover:opacity-90 transition-opacity">Start the Assessment <ArrowRight size={16}/></Link></div>
            <p className="mt-4 text-[var(--tt)] text-[0.78rem]">Prefer to talk? <Link href="/contact" className="text-[var(--ts)] underline underline-offset-2 hover:text-[var(--tp)]">Get in touch</Link></p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center"><p className="font-display italic text-[var(--tt)] text-[0.85rem]">We Engineer Moments.</p></section>
    </div>
  );
}
