"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { NAV_ITEMS } from "@/shared/constants/brand";
import { useBooking } from "@/shared/hooks/useBooking";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-400 ${
        solid
          ? "border-b border-[var(--line)] bg-cream-soft/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-pad container-max flex h-[4.25rem] items-center justify-between gap-4 md:h-[4.75rem]">
        <a href="#top" aria-label="АРКА 123">
          <Logo tone={solid ? "dark" : "light"} size="sm" hoverable />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[0.8125rem] tracking-wide transition-colors ${
                solid
                  ? "text-graphite/75 hover:text-navy"
                  : "text-cream/75 hover:text-cream"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openBooking}
            className={`hidden px-4 py-2.5 text-sm font-semibold transition sm:inline-flex ${
              solid
                ? "bg-navy text-cream hover:bg-navy-deep"
                : "bg-cream text-navy hover:bg-sand"
            }`}
          >
            Забронировать
          </button>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center lg:hidden ${
              solid ? "text-navy" : "text-cream"
            }`}
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-[70%] bg-current" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-cream-soft px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1 text-base text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              className="btn-primary mt-2"
              onClick={() => {
                setOpen(false);
                openBooking();
              }}
            >
              Забронировать
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
}
