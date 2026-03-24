"use client";
import { useEffect, useRef } from "react";
export function useReveal(t = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(e => { e.forEach(x => { if (x.isIntersecting) { x.target.classList.add("vis"); obs.unobserve(x.target); } }); }, { threshold: t, rootMargin: "0px 0px -30px 0px" });
    el.querySelectorAll(".rv").forEach(x => obs.observe(x));
    return () => obs.disconnect();
  }, [t]);
  return ref;
}
