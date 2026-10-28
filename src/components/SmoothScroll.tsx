"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/** Лёгкий smooth scroll без ломания native scroll metrics для video scrub. */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.7,
      smoothWheel: true,
      touchMultiplier: 1.15,
      autoRaf: false,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
