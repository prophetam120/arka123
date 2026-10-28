"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { BRAND } from "@/shared/constants/brand";
import { useBooking } from "@/shared/hooks/useBooking";

const FRAME_COUNT = 61;

function frameSrc(i: number) {
  return `/video/frames/f-${String(i + 1).padStart(3, "0")}.jpg`;
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

/** Лёгкий ease — быстрее набирает кадры в середине скролла */
function easeProgress(t: number) {
  const x = clamp01(t);
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

/**
 * Первый блок: sticky image-sequence scrub (Apple-style).
 * Кадры из /video/frames — без прыжков по keyframe mp4.
 */
export function Hero() {
  const { openBooking } = useBooking();
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetFrame = useRef(0);
  const drawFrame = useRef(0);
  const rafRef = useRef(0);
  const [ready, setReady] = useState(false);
  const [loadPct, setLoadPct] = useState(0);

  const sources = useMemo(
    () => Array.from({ length: FRAME_COUNT }, (_, i) => frameSrc(i)),
    [],
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const uiOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.55, 0.9],
    [1, 1, 0.25, 0],
  );
  const uiY = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const frameScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    const bump = () => {
      loaded += 1;
      if (!cancelled) {
        setLoadPct(Math.round((loaded / FRAME_COUNT) * 100));
        if (loaded >= FRAME_COUNT) {
          imagesRef.current = images;
          setReady(true);
        }
      }
    };

    sources.forEach((src, i) => {
      const img = new Image();
      img.decoding = "async";
      img.onload = bump;
      img.onerror = bump;
      img.src = src;
      images[i] = img;
    });

    return () => {
      cancelled = true;
    };
  }, [sources]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !ready) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const draw = (index: number) => {
      const img = imagesRef.current[index];
      if (!img?.complete || !img.naturalWidth) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const cw = Math.round(w * dpr);
      const ch = Math.round(h * dpr);
      if (canvas.width !== cw || canvas.height !== ch) {
        canvas.width = cw;
        canvas.height = ch;
      }

      const ir = img.naturalWidth / img.naturalHeight;
      const cr = w / h;
      let dw = w;
      let dh = h;
      let dx = 0;
      let dy = 0;
      if (ir > cr) {
        dw = h * ir;
        dx = (w - dw) / 2;
      } else {
        dh = w / ir;
        dy = (h - dh) / 2;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#0e1624";
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    draw(0);

    const tick = () => {
      const target = targetFrame.current;
      const cur = drawFrame.current;
      const next = cur + (target - cur) * 0.28;
      const rounded = Math.round(next);
      drawFrame.current =
        Math.abs(target - next) < 0.08 ? target : next;
      if (rounded !== Math.round(cur)) {
        draw(
          Math.min(
            FRAME_COUNT - 1,
            Math.max(0, rounded),
          ),
        );
      } else if (Math.abs(target - cur) > 0.01) {
        draw(
          Math.min(
            FRAME_COUNT - 1,
            Math.max(0, Math.round(drawFrame.current)),
          ),
        );
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    const onResize = () =>
      draw(
        Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.round(drawFrame.current)),
        ),
      );
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [ready]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const p = easeProgress(v);
    targetFrame.current = p * (FRAME_COUNT - 1);
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !ready) return;

    let raf = 0;
    const sync = () => {
      const total = section.offsetHeight - window.innerHeight;
      const top = section.getBoundingClientRect().top;
      const scrolled = Math.min(Math.max(-top, 0), Math.max(total, 1));
      const raw = total > 0 ? scrolled / total : 0;
      targetFrame.current = easeProgress(raw) * (FRAME_COUNT - 1);
      raf = requestAnimationFrame(sync);
    };
    raf = requestAnimationFrame(sync);
    return () => cancelAnimationFrame(raf);
  }, [ready]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative h-[145vh] bg-navy-deep"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: frameScale }}>
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full"
            aria-label="Презентация пространства АРКА 123"
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-navy-deep/20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-navy-deep/65 to-transparent" />

        {!ready && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-navy-deep">
            <div className="h-px w-40 overflow-hidden bg-cream/15">
              <div
                className="h-full bg-cream/70 transition-[width] duration-200"
                style={{ width: `${loadPct}%` }}
              />
            </div>
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cream/45">
              {loadPct}%
            </p>
          </div>
        )}

        <motion.div
          className="section-pad container-max relative z-10 flex h-full flex-col justify-end pb-16 pt-28 md:pb-20"
          style={{ opacity: uiOpacity, y: uiY }}
        >
          <h1 className="sr-only">{BRAND.name}</h1>
          <Logo tone="light" size="lg" hoverable={false} />
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={openBooking} className="btn-light">
              Забронировать зал
            </button>
            <a href="#space" className="btn-ghost">
              Смотреть пространство
            </a>
          </div>
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 z-20 h-[2px] bg-cream/10">
          <motion.div
            className="h-full bg-gold"
            style={{ width: progressWidth }}
          />
        </div>
      </div>
    </section>
  );
}
