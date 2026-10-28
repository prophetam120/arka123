import { REVIEWS } from "@/shared/constants/brand";

export function Reviews() {
  return (
    <section
      id="reviews"
      className="section-pad scroll-mt-24 bg-cream-soft py-20 md:py-28"
    >
      <div className="container-max">
        <p className="eyebrow">Отзывы</p>
        <h2 className="mt-3 max-w-lg font-display text-3xl font-bold text-navy md:text-5xl">
          Говорят организаторы
        </h2>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {REVIEWS.map((review) => (
            <blockquote key={review.id} className="flex flex-col">
              <p className="flex-1 text-base leading-relaxed text-graphite md:text-lg">
                «{review.text}»
              </p>
              <footer className="mt-8 border-t border-[var(--line)] pt-4">
                <div className="font-display font-semibold text-navy">
                  {review.name}
                </div>
                <div className="mt-1 text-xs tracking-wide text-muted">
                  {review.role}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
