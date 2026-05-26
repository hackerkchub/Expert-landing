"use client";

import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";

export default function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner">
          <div>
            <span className="eyebrow light">{t.ctaBanner.eyebrow}</span>
            <h2 {...getHeadingAnimation(0, 26)}>{t.ctaBanner.title}</h2>
            <p>{t.ctaBanner.text}</p>
          </div>
          <ul className="cta-list">
            {t.ctaBanner.items.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
          <a className="button button-primary" href="#registration">
            {t.ctaBanner.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
