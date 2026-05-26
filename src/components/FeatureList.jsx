"use client";

import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";

export default function FeatureList() {
  const { t } = useLanguage();

  return (
    <section className="section" id="features">
      <div className="container split-layout">
        <div>
          <div className="section-heading left">
            <span className="eyebrow">{t.featureList.eyebrow}</span>
            <h2 {...getHeadingAnimation(0, 32)}>{t.featureList.title}</h2>
          </div>
          <div className="feature-badges">
            {t.featureList.items.map((feature) => (
              <span key={feature} className="feature-badge">
                {feature}
              </span>
            ))}
          </div>
        </div>
        <aside className="earnings-panel">
          <div className="dashboard-header">
            <div>
              <span className="eyebrow small">{t.featureList.panelEyebrow}</span>
              <h3 {...getHeadingAnimation(0, 33)}>{t.featureList.panelTitle}</h3>
            </div>
            <span className="status-pill success">{t.common.status.growing}</span>
          </div>
          <div className="earnings-stats">
            <div>
              <span>{t.featureList.totalEarnings}</span>
              <strong>{t.common.currency.rupee45680}</strong>
            </div>
            <div>
              <span>{t.featureList.thisMonth}</span>
              <strong>{t.common.currency.rupee18230}</strong>
            </div>
            <div>
              <span>{t.featureList.walletBalance}</span>
              <strong>{t.common.currency.rupee8450}</strong>
            </div>
          </div>
          <div className="bar-chart" aria-hidden="true">
            <span style={{ height: "54%" }} />
            <span style={{ height: "76%" }} />
            <span style={{ height: "62%" }} />
            <span style={{ height: "90%" }} />
            <span style={{ height: "70%" }} />
          </div>
          <div className="withdraw-list">
            <h4>{t.featureList.recentWithdrawals}</h4>
            {t.featureList.withdrawals.map((item) => (
              <div key={item} className="withdraw-row">
                <span>{item}</span>
                <span className="success-text">{t.common.status.done}</span>
              </div>
            ))}
          </div>
          <a className="button button-primary button-block" href="#registration">
            {t.featureList.withdrawNow}
          </a>
        </aside>
      </div>
    </section>
  );
}
