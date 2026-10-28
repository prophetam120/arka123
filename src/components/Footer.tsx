import { Logo } from "@/components/Logo";
import { BRAND, NAV_ITEMS } from "@/shared/constants/brand";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="section-pad container-max grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo hoverable={false} tone="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
            Пространство {BRAND.area} м² напротив Национальной библиотеки — для
            мастер-классов, семинаров и встреч с видом из арочных окон.
          </p>
        </div>

        <div>
          <h3 className="text-[0.65rem] uppercase tracking-[0.22em] text-cream/40">
            Навигация
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-cream/75 transition hover:text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.65rem] uppercase tracking-[0.22em] text-cream/40">
            Контакты
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
            <li>{BRAND.address}</li>
            <li>
              <a href={`tel:${BRAND.phone}`} className="hover:text-cream">
                {BRAND.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${BRAND.email}`} className="hover:text-cream">
                {BRAND.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-[0.7rem] tracking-wide text-cream/35">
        © 2026 {BRAND.name}
      </div>
    </footer>
  );
}
