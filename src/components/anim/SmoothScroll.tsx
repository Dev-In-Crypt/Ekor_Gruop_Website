"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis smooth-scroll with a fix for Framer Motion's `whileInView`:
 * Framer's viewport observer relies on the native IntersectionObserver, which IS
 * triggered by Lenis (Lenis dispatches `scroll` events natively). However we
 * additionally dispatch a window 'scroll' event after each frame to nudge
 * Framer's `useScroll`/`useInView` hooks, which sometimes don't pick up on the
 * sub-pixel positions Lenis produces.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // Synchronize Framer Motion's listeners with Lenis transforms
    const onLenisScroll = () => {
      window.dispatchEvent(new CustomEvent("lenis-scroll"));
    };
    lenis.on("scroll", onLenisScroll);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", onLenisScroll);
      lenis.destroy();
    };
  }, []);

  return null;
}
