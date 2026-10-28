"use client";

import { BRAND } from "@/shared/constants/brand";
import { useBooking } from "@/shared/hooks/useBooking";

export function Location() {
  const { openBooking } = useBooking();

  return (
    <section id="location" className="scroll-mt-24 bg-cream py-20 md:py-28">
      <div className="section-pad container-max grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="eyebrow">Локация</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl text-balance">
            {BRAND.address}
          </h2>
          <p className="mt-5 max-w-lg text-muted">
            Через арку здания с променада открывается вид на Национальную
            библиотеку — то же преимущество, что у зала с окнами 4×3,5 м.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://yandex.ru/maps/?text=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%20%D0%9C%D1%81%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D1%86%D0%B0%2010"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Открыть на карте
            </a>
            <button type="button" onClick={openBooking} className="border border-[var(--line)] px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">
              Забронировать зал
            </button>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-8 border-t border-[var(--line)] pt-8">
          <div>
            <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted">
              Площадь
            </dt>
            <dd className="mt-2 font-display text-2xl font-semibold text-navy">
              {BRAND.area} м²
            </dd>
          </div>
          <div>
            <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted">
              Окна
            </dt>
            <dd className="mt-2 font-display text-2xl font-semibold text-navy">
              4 × 3,5 м
            </dd>
          </div>
          <div>
            <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted">
              Телефон
            </dt>
            <dd className="mt-2 text-navy">
              <a href={`tel:${BRAND.phone}`}>{BRAND.phone}</a>
            </dd>
          </div>
          <div>
            <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted">
              Email
            </dt>
            <dd className="mt-2 text-navy">
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
