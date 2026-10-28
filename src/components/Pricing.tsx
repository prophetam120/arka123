"use client";

import { TARIFFS } from "@/shared/constants/brand";
import { useBooking } from "@/shared/hooks/useBooking";

export function Pricing() {
  const { openBooking } = useBooking();

  return (
    <section id="pricing" className="section-pad scroll-mt-24 bg-cream py-20 md:py-28">
      <div className="container-max">
        <div className="max-w-2xl">
          <p className="eyebrow">Тарифы</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl text-balance">
            Прозрачная аренда без лишней обёртки
          </h2>
        </div>

        <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {TARIFFS.map((tariff) => (
            <div
              key={tariff.id}
              className="grid items-center gap-6 py-8 md:grid-cols-[1fr_auto_auto] md:gap-10"
            >
              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display text-2xl font-semibold text-navy">
                    {tariff.name}
                  </h3>
                  <span className="text-sm text-muted">{tariff.hours}</span>
                  {tariff.highlighted && (
                    <span className="text-[0.65rem] uppercase tracking-[0.18em] text-gold">
                      Популярный
                    </span>
                  )}
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                  {tariff.features.join(" · ")}
                </p>
              </div>
              <div className="font-display text-3xl font-bold text-navy md:text-right">
                {tariff.price}
                <span className="ml-1 text-sm font-medium text-muted">BYN</span>
              </div>
              <button
                type="button"
                onClick={openBooking}
                className="btn-primary w-full md:w-auto"
              >
                Запросить
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
