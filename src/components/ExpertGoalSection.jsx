"use client";

import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";
import { expertGoalTranslations } from "../lib/translations";

function GoalIcon({ type }) {
  if (type === "service") {
    return (
      <div className="goal-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 10V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
          <path d="M3 10h18" />
          <path d="M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8" />
          <path d="M9 14h6" />
        </svg>
      </div>
    );
  }

  if (type === "leads") {
    return (
      <div className="goal-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
          <circle cx="9.5" cy="7" r="3" />
          <path d="M20 8v6" />
          <path d="M17 11h6" />
        </svg>
      </div>
    );
  }

  if (type === "growth") {
    return (
      <div className="goal-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19h16" />
          <path d="M6 15l4-4 3 3 5-6" />
          <path d="M18 8h-3" />
          <path d="M18 8v3" />
        </svg>
      </div>
    );
  }

  return (
    <div className="goal-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h13a3 3 0 0 1 3 3v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />
        <path d="M4 9V6a2 2 0 0 1 2-2h10" />
        <path d="M16 13h4" />
        <path d="M18 11v4" />
      </svg>
    </div>
  );
}

export default function ExpertGoalSection() {
  const { lang } = useLanguage();
  const content = expertGoalTranslations[lang] ?? expertGoalTranslations.en;
  const iconTypes = ["service", "leads", "growth", "wallet"];

  return (
    <section className="expert-goal-section" id="expert-goals">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 {...getHeadingAnimation(0, 2)}>{content.title}</h2>
          <p className="comparison-subtitle">{content.subtitle}</p>
        </div>

        <div className="expert-goal-grid">
          {content.cards.map((card, index) => (
            <article key={card.title} className="expert-goal-card">
              <GoalIcon type={iconTypes[index]} />
              <h3 {...getHeadingAnimation(index, 3)}>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>

        <div className="expert-goal-cta">
          <a className="button button-primary joinnow-button" href="#pricing">
            {content.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
