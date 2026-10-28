"use client";

import Image from "next/image";
import { BRAND } from "@/shared/constants/brand";

const FACTS = [
  { label: "Площадь", value: `${BRAND.area} м²` },
  { label: "Окна", value: "4 × 3,5 м" },
  { label: "Высота", value: "до 4,5 м" },
  { label: "Адрес", value: "Мстиславца, 10" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream-soft">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[65vh] lg:min-h-[88vh]">
          <Image
            src="/images/gallery/1.png"
            alt="Интерьер АРКА 123"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="section-pad flex flex-col justify-center py-16 md:py-24 lg:pl-16 xl:pl-20">
          <p className="eyebrow">О пространстве</p>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-bold leading-tight text-navy md:text-5xl text-balance">
            Арка, свет и вид на Библиотеку
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Здание из двух башен соединено аркой. Через неё с променада — и из
            окон зала — открывается Национальная библиотека. Цифры 123 — площадь
            помещения под мастер-классы и семинары.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                  {fact.label}
                </div>
                <div className="mt-2 font-display text-xl font-semibold text-navy md:text-2xl">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
