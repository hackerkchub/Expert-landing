"use client";

import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";

export default function ControlSection() {
  const { t } = useLanguage();

  return (
    <section className="section" id="benefits">
      <div className="container split-layout">
        <div>
          <div className="section-heading left">
            <span className="eyebrow">{t.control.eyebrow}</span>
            <h2 {...getHeadingAnimation(0, 8)}>{t.control.title}</h2>
          </div>
          <ul className="feature-points">
            {t.control.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <aside className="dashboard-card">
          <div className="dashboard-header">
            <div>
              <span className="eyebrow small">{t.control.panelEyebrow}</span>
              <h3 {...getHeadingAnimation(0, 9)}>{t.control.panelTitle}</h3>
            </div>
            <span className="status-pill">{t.common.status.live}</span>
          </div>
          <div className="service-list">
            {t.control.services.map((service) => (
              <div key={service} className="service-row">
                <span>{service}</span>
                <span className="tiny-dot" />
              </div>
            ))}
          </div>
          <a className="button button-primary button-block" href="#registration">
            {t.control.addService}
          </a>
        </aside>
      </div>
    </section>
  );
}
