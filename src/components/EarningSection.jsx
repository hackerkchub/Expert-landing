"use client";

import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";

export default function EarningSection() {
  const { t } = useLanguage();

  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.earning.eyebrow}</span>
          <h2 {...getHeadingAnimation(0, 10)}>{t.earning.title}</h2>
        </div>
        <div className="card-grid four-up">
          {t.earning.cards.map((card, index) => (
            <article key={card} className="info-card">
              <span className="icon-shape alt" />
              <h3 {...getHeadingAnimation(index, 11)}>{card}</h3>
            </article>
          ))}
        </div>
        <div className="withdraw-banner">
          <div>
            <span className="eyebrow small">{t.earning.withdrawEyebrow}</span>
            <h3 {...getHeadingAnimation(0, 15)}>{t.earning.withdrawTitle}</h3>
          </div>
          <p>{t.earning.withdrawText}</p>
        </div>
      </div>
    </section>
  );
}
