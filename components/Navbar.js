"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Sprints", href: "/sprints" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--bds)]" style={{ background: "color-mix(in srgb, var(--bg) 85%, transparent)", backdropFilter: "blur(24px) saturate(1.3)", WebkitBackdropFilter: "blur(24px) saturate(1.3)" }}>
        <div className="max-w-[1180px] mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-[1rem] tracking-tight text-[var(--tp)]">
            <Logo size={24} /> VITA-M
          </Link>
          <div className="hidden md:flex items-center gap-0.5">
            {LINKS.map(l => (
              <Link key={l.href} href={l.href} className="px-3 py-1.5 text-[0.78rem] font-medium text-[var(--ts)] rounded-lg hover:text-[var(--tp)] hover:bg-[var(--ov)] transition-all">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Link href="/brand-health" className="hidden sm:inline-flex px-3.5 py-1.5 rounded-lg bg-[var(--ac)] text-[var(--ac-inv)] text-[0.75rem] font-semibold hover:opacity-85 transition-opacity">
              Brand Health Check
            </Link>
            <button className="md:hidden w-8 h-8 rounded-full border border-[var(--bd)] bg-[var(--bg-s)] flex items-center justify-center" onClick={() => setOpen(!open)}>
              {open ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 z-40 bg-[var(--bg)] pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-2xl font-display font-bold text-[var(--tp)] py-3 border-b border-[var(--bds)]">{l.label}</Link>)}
            <Link href="/brand-health" onClick={() => setOpen(false)} className="mt-4 flex items-center justify-center px-6 py-3 rounded-xl bg-[var(--ac)] text-[var(--ac-inv)] font-semibold">Brand Health Check</Link>
          </div>
        </div>
      )}
    </>
  );
}
