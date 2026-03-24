"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
export default function ThemeToggle() {
  const [dark, setDark] = useState(null);
  useEffect(() => { const s = localStorage.getItem("vt"); if (s) setDark(s === "dark"); else setDark(window.matchMedia("(prefers-color-scheme: dark)").matches); }, []);
  useEffect(() => { if (dark === null) return; document.documentElement.classList.toggle("dark", dark); document.documentElement.classList.toggle("light", !dark); localStorage.setItem("vt", dark ? "dark" : "light"); }, [dark]);
  if (dark === null) return <div className="w-8 h-8" />;
  return (
    <button onClick={() => setDark(!dark)} className="w-8 h-8 rounded-full border border-[var(--bd)] bg-[var(--bg-s)] flex items-center justify-center text-[var(--ts)] hover:text-[var(--tp)] transition-colors" aria-label={dark ? "Light mode" : "Dark mode"}>
      {dark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}
