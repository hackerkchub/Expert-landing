"use client";

import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.howItWorks.eyebrow}</span>
          <h2 {...getHeadingAnimation(0, 16)}>{t.howItWorks.title}</h2>
        </div>
        <div className="steps-grid">
          {t.howItWorks.steps.map(([number, title, text], index) => (
            <article key={number} className="step-card">
              <span className="step-number">{number}</span>
              <h3 {...getHeadingAnimation(index, 17)}>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
