"use client";

import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="section section-light" id="testimonials">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.testimonials.eyebrow}</span>
          <h2 {...getHeadingAnimation(0, 22)}>{t.testimonials.title}</h2>
        </div>
        <div className="card-grid three-up">
          {t.testimonials.items.map(({ name, role, quote }, index) => (
            <article key={name} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>&ldquo;{quote}&rdquo;</p>
              <h3 {...getHeadingAnimation(index, 23)}>{name}</h3>
              <span>{role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
