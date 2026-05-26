"use client";

import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";

const benefitIcons = [
  <svg
    key="service-selling"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ff7a00"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 10V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
    <path d="M3 10h18" />
    <path d="M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8" />
    <path d="M9 14h6" />
  </svg>,
  <svg
    key="control"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ff7a00"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 8.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Z" />
    <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a1.7 1.7 0 0 1 0 2.4 1.7 1.7 0 0 1-2.4 0l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V19a1.7 1.7 0 0 1-3.4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a1.7 1.7 0 0 1-2.4 0 1.7 1.7 0 0 1 0-2.4l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H5a1.7 1.7 0 0 1 0-3.4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a1.7 1.7 0 0 1 0-2.4 1.7 1.7 0 0 1 2.4 0l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V5a1.7 1.7 0 0 1 3.4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a1.7 1.7 0 0 1 2.4 0 1.7 1.7 0 0 1 0 2.4l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6h.2a1.7 1.7 0 0 1 0 3.4h-.2a1 1 0 0 0-.9.6Z" />
  </svg>,
  <svg
    key="withdraw"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ff7a00"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 7h13a3 3 0 0 1 3 3v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />
    <path d="M4 9V6a2 2 0 0 1 2-2h10" />
    <path d="M16 13h4" />
    <path d="M18 11v4" />
  </svg>,
  <svg
    key="growth"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ff7a00"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19h16" />
    <path d="M6 15l4-4 3 3 5-6" />
    <path d="M18 8h-3" />
    <path d="M18 8v3" />
  </svg>,
];

export default function BenefitsSection() {
  const { t } = useLanguage();

  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.benefits.eyebrow}</span>
          <h2 {...getHeadingAnimation(0, 27)}>{t.benefits.title}</h2>
        </div>
        <div className="card-grid four-up">
          {t.benefits.items.map((benefit, index) => (
            <article key={benefit} className="info-card benefit-card feature-item">
              <span className="benefit-mark" aria-hidden="true">
                {benefitIcons[index]}
              </span>
              <h3 {...getHeadingAnimation(index, 28)}>{benefit}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
