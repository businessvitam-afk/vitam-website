import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-s)] border-t border-[var(--bds)]">
      <div className="max-w-[1180px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-[0.9rem] text-[var(--tp)] mb-3"><Logo size={20} /> VITA-M</Link>
            <p className="text-[var(--ts)] text-[0.78rem] max-w-[16rem] leading-relaxed">{SITE.sub}</p>
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.16em] uppercase font-bold font-display text-[var(--tp)] mb-3">Services</p>
            {["Brand Communication","Creative Production","Behaviour Design","Business Consulting","Startup Operations"].map(s => <Link key={s} href={"/services/" + s.toLowerCase().replace(/ /g,"-")} className="block text-[0.78rem] text-[var(--ts)] py-0.5 hover:text-[var(--tp)] transition-colors">{s}</Link>)}
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.16em] uppercase font-bold font-display text-[var(--tp)] mb-3">Company</p>
            {[["About","/about"],["Case Studies","/work"],["Sprints","/sprints"],["Insights","/insights"],["Brand Health","/brand-health"],["Contact","/contact"]].map(([l,h]) => <Link key={h} href={h} className="block text-[0.78rem] text-[var(--ts)] py-0.5 hover:text-[var(--tp)] transition-colors">{l}</Link>)}
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.16em] uppercase font-bold font-display text-[var(--tp)] mb-3">Get in Touch</p>
            <a href={"mailto:" + SITE.email} className="block text-[0.78rem] text-[var(--ts)] py-0.5 hover:text-[var(--tp)] transition-colors">{SITE.email}</a>
            {SITE.founders.map(f => <span key={f.name} className="block text-[0.78rem] text-[var(--ts)] py-0.5">{f.name.split(" ")[0]}: {f.phone}</span>)}
          </div>
        </div>
        <div className="mt-10 pt-4 border-t border-[var(--bds)] flex flex-wrap items-center justify-between gap-3">
          <p className="text-[var(--tt)] text-[0.7rem]">&copy; {new Date().getFullYear()} VITA-M. All rights reserved.</p>
          <div className="flex items-center gap-4"><span className="font-display italic text-[var(--tt)] text-[0.72rem]">We Engineer Moments.</span><a href="/llms.txt" className="text-[var(--tt)] text-[0.65rem] hover:text-[var(--tp)] transition-colors">llms.txt</a></div>
        </div>
      </div>
    </footer>
  );
}
