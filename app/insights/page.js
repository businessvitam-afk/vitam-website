"use client";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
var POSTS = [
  { slug:"cognitive-bias-playbook", title:"The Cognitive Bias Playbook for Indian Brand Communication", cat:"Behavioural Intelligence", time:"12 min", excerpt:"A proprietary framework mapping 10 cognitive biases to brand communication tactics." },
  { slug:"sunrise-lifts-b2b", title:"How We Designed a B2B Sales Model for Sunrise Lifts", cat:"Method in Action", time:"8 min", excerpt:"Full case narrative: from fragmented B2B approach to structured channel partner framework across 4 cities." },
  { slug:"web3-ecosystem", title:"On-Chain Branding \u2014 Building Diamond Hooves\u2019 Visual Ecosystem", cat:"Method in Action", time:"9 min", excerpt:"How visual identity drives mint participation, wallet retention, and community governance in Web3." },
  { slug:"brand-audit", title:"Why Your Brand Audit Is Lying to You", cat:"Contrarian View", time:"6 min", excerpt:"Standard brand audits measure the wrong things. Here\u2019s what real brand health looks like." },
  { slug:"ai-supply-chain", title:"When AI Meets Brand \u2014 Lessons from JOY\u2019s Transformation", cat:"Market Signal", time:"10 min", excerpt:"How we embedded AI-assisted automation into JOY\u2019s supply chain while building enterprise credibility." },
  { slug:"sec-compliance", title:"Compliance Meets Creative \u2014 Content in Regulated Industries", cat:"Behavioural Intelligence", time:"7 min", excerpt:"How to build brand communication that navigates SEC environments without sacrificing engagement." },
];
function cn(b, i) { return b + " rv" + (i > 0 ? " d" + Math.min(i, 4) : ""); }
export default function InsightsPage() {
  var r = useReveal();
  return (
    <div ref={r}>
      <section className="sec px-6"><div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-12"><p className="rv text-[0.65rem] tracking-[0.2em] uppercase font-bold font-display text-[var(--tt)] mb-2">Insights</p><h1 className="rv d1 font-display text-h1 font-extrabold text-[var(--tp)]">Thinking Out Loud</h1><p className="rv d2 mt-3 text-[var(--ts)] max-w-[34rem] mx-auto">Original research, proprietary frameworks, and contrarian perspectives.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{POSTS.map(function(p, i) { return (
          <div key={p.slug} className={cn("group bg-[var(--bg-s)] border border-[var(--bd)] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300", i+1)}>
            <div className="flex items-center gap-2 mb-3"><span className="px-2 py-0.5 rounded bg-[var(--ov)] text-[var(--tt)] text-[0.65rem] font-semibold">{p.cat}</span><span className="text-[var(--tt)] text-[0.65rem]">{p.time}</span></div>
            <h2 className="font-display font-bold text-[var(--tp)] text-[0.95rem] mb-2 leading-snug group-hover:text-[var(--ts)] transition-colors">{p.title}</h2>
            <p className="text-[var(--ts)] text-[0.78rem] leading-relaxed mb-3">{p.excerpt}</p>
            <div className="flex items-center gap-1 text-[var(--tp)] text-[0.78rem] font-semibold group-hover:gap-2.5 transition-all">Read <ArrowUpRight size={12}/></div>
          </div>
        ); })}</div>
      </div></section>
    </div>
  );
}