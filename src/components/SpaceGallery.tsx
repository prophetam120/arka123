"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { SPACE_GALLERY } from "@/shared/constants/brand";

type Mode = "empty" | "filled";

export function SpaceGallery() {
  const [mode, setMode] = useState<Mode>("empty");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () => SPACE_GALLERY.filter((item) => item.mode === mode),
    [mode],
  );

  return (
    <section id="space" className="scroll-mt-24 bg-cream-soft">
      <div className="section-pad container-max py-16 md:py-24">
        <p className="eyebrow">Помещение</p>
        <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-3xl font-bold text-navy md:text-5xl text-balance">
            Пустой зал и зал в работе
          </h2>
          <div className="flex gap-2">
            {(
              [
                { id: "empty", label: "Пустое" },
                { id: "filled", label: "Заполненное" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setMode(tab.id);
                  setActive(null);
                }}
                className={`px-5 py-2.5 text-sm font-medium transition ${
                  mode === tab.id
                    ? "bg-navy text-cream"
                    : "border border-[var(--line)] text-navy hover:border-navy/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted md:text-base">
          {mode === "empty"
            ? "Чистый холст: свет из арок, паркет и высота до 4,5 м — под вашу рассадку."
            : "Тот же объём с мебелью и техникой — как выглядит рабочий день или ивент."}
        </p>
      </div>

      <div className="section-pad container-wide pb-16 md:pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {items.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActive(i)}
                className={`group relative overflow-hidden bg-sand ${
                  i === 0
                    ? "sm:col-span-2 sm:row-span-2 min-h-[48vh]"
                    : "min-h-[32vh]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 text-[0.65rem] uppercase tracking-[0.22em] text-cream opacity-0 transition group-hover:opacity-100">
                  {item.alt}
                </span>
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {active !== null && items[active] && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/92 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="absolute right-5 top-5 text-cream/80"
              onClick={() => setActive(null)}
            >
              ✕
            </button>
            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-cream/70"
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) =>
                  i === null ? null : (i - 1 + items.length) % items.length,
                );
              }}
            >
              ‹
            </button>
            <motion.div
              key={items[active].src}
              className="relative h-[min(82vh,760px)] w-[min(94vw,1100px)]"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={items[active].src}
                alt={items[active].alt}
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
                setActive((i) =>
                  i === null ? null : (i + 1) % items.length,
                );
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
