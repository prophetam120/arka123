"use client";

import { SERVICES } from "@/shared/constants/brand";

export function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24 py-20 md:py-28">
      <div className="container-max">
        <p className="eyebrow">Форматы</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-bold text-navy md:text-5xl text-balance">
          Под событие, а не под шаблон
        </h2>

        <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {SERVICES.map((service, i) => (
            <article
              key={service.id}
              className="grid gap-4 py-8 md:grid-cols-[5rem_1fr_8rem] md:items-start md:gap-10"
            >
              <div className="font-display text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                  {service.description}
                </p>
              </div>
              <div className="text-sm font-medium text-navy md:text-right">
                от {service.priceFrom} BYN/ч
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
