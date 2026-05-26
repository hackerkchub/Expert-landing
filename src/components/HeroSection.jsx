"use client";

import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="section-badge">{t.hero.badge}</span>
          <h1 {...getHeadingAnimation(0, 0)}>{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <ul className="hero-bullets">
            {t.hero.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <a className="button button-primary" href="#registration">
              {t.hero.primaryCta}
            </a>
            <a className="button button-secondary" href="#registration">
              {t.hero.secondaryCta}
            </a>
          </div>
          <div className="trust-row">
            {t.hero.trustBadges.map((item) => (
              <span key={item} className="trust-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="phone-shell">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="phone-status">
                <span>{t.hero.liveSession}</span>
                <span className="online-dot">{t.common.status.connected}</span>
              </div>
              <div className="call-card">
                <div className="avatar-ring">
                  <div className="avatar-core">RS</div>
                </div>
                <h3 {...getHeadingAnimation(0, 1)}>{t.hero.expertName}</h3>
                <p>{t.hero.expertRole}</p>
                <strong>{t.common.currency.rupee25PerMin}</strong>
              </div>
              <div className="mini-dashboard">
                <div className="mini-card">
                  <span>{t.hero.todayEarned}</span>
                  <strong>₹3,450</strong>
                </div>
                <div className="mini-card">
                  <span>{t.hero.activeClients}</span>
                  <strong>18</strong>
                </div>
              </div>
              <div className="call-controls">
                <span className="control control-muted" />
                <span className="control control-primary" />
                <span className="control control-danger" />
              </div>
            </div>
          </div>
          <div className="floating-chip chip-top">{t.hero.premiumProfile}</div>
          <div className="floating-chip chip-bottom">{t.hero.directEarning}</div>
        </div>
      </div>
    </section>
  );
}
