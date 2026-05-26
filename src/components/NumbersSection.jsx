"use client";

import { useLanguage } from "../context/LanguageContext";

export default function NumbersSection() {
  const { t } = useLanguage();

  return (
    <section className="numbers-section">
      <div className="container numbers-grid">
        {t.numbers.stats.map(([value, label]) => (
          <article key={label} className="number-card">
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
