"use client";

import {
  BriefcaseBusiness,
  IndianRupee,
  UsersRound,
  Handshake,
  WalletCards,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";

const featureIcons = [
  BriefcaseBusiness,
  IndianRupee,
  UsersRound,
  Handshake,
  WalletCards,
];

export default function HighlightSection() {
  const { t } = useLanguage();

  return (
    <section className="section section-light" id="categories">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.highlight.eyebrow}</span>
          <h2 {...getHeadingAnimation(0, 2)}>{t.highlight.title}</h2>
        </div>
        <div className="card-grid five-up">
          {t.highlight.cards.map((card, index) => (
            <article key={card} className="info-card icon-card feature-icon-card">
              <span className="icon-shape feature-icon-wrap">
                {(() => {
                  const Icon = featureIcons[index];
                  return Icon ? <Icon size={28} strokeWidth={2.2} /> : null;
                })()}
              </span>
              <h3 {...getHeadingAnimation(index, 3)}>{card}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
