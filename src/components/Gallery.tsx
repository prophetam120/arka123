"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { GALLERY } from "@/shared/constants/brand";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const track = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((i) =>
      i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length,
    );
  }, []);
  const next = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % GALLERY.length));
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, next, prev]);

  return (
    <section id="gallery" className="scroll-mt-24 bg-navy-deep py-20 text-cream md:py-28">
      <div className="section-pad container-max mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Локация</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
            Фасад и окружение
          </h2>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            className="btn-ghost px-3 py-2"
            onClick={() =>
              track.current?.scrollBy({ left: -360, behavior: "smooth" })
            }
            aria-label="Назад"
          >
            ←
          </button>
          <button
            type="button"
            className="btn-ghost px-3 py-2"
            onClick={() =>
              track.current?.scrollBy({ left: 360, behavior: "smooth" })
            }
            aria-label="Вперёд"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[clamp(1.25rem,5vw,5rem)] pb-4 scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      >
        {GALLERY.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(i)}
            className="relative h-[52vh] min-w-[78vw] shrink-0 snap-center overflow-hidden sm:min-w-[48vw] lg:min-w-[34vw]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition duration-700 hover:scale-[1.04]"
              sizes="50vw"
            />
            <span className="absolute bottom-4 left-4 text-xs tracking-wide text-cream/80">
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/92 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              className="absolute right-5 top-5 text-cream/80"
              onClick={close}
            >
              ✕
            </button>
            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-cream/70"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              ‹
            </button>
            <motion.div
              key={GALLERY[active].src}
              className="relative h-[min(82vh,760px)] w-[min(94vw,1100px)]"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY[active].src}
                alt={GALLERY[active].alt}
                fill
                className="object-contain"
                sizes="96vw"
                priority
              />
            </motion.div>
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-cream/70"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
