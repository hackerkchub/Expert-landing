"use client";

import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";

export default function FAQSection() {
  const { t } = useLanguage();

  return (
    <section className="section section-light" id="faq">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2 {...getHeadingAnimation(0, 41)}>{t.faq.title}</h2>
        </div>
        <div className="faq-list">
          {t.faq.items.map(([question, answer]) => (
            <details key={question} className="faq-item">
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
