"use client";

import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";
import { pricingTranslations } from "../lib/translations";

export default function ComparisonSection() {
  const { lang } = useLanguage();
  const pricing = pricingTranslations[lang] ?? pricingTranslations.en;

  // Helper function to calculate savings
  const calculateSavings = (originalPrice, price) => {
    if (!originalPrice || !price) return null;
    const original = parseInt(originalPrice.replace('₹', '').replace(',', ''));
    const current = parseInt(price.replace('₹', '').replace(',', ''));
    const savings = original - current;
    return `Save ₹${savings.toLocaleString()}`;
  };

  return (
    <section className="section section-light" id="pricing">
      <div className="container">
        <div className="section-heading comparison-heading">
          <span className="eyebrow">{pricing.eyebrow}</span>
          <h2 {...getHeadingAnimation(0, 34)}>{pricing.title}</h2>
          <p className="comparison-subtitle">{pricing.subtitle}</p>
        </div>

        <div className="pricing-grid">
          {pricing.plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`pricing-card${plan.highlighted ? " pricing-card-featured" : ""}`}
            >
              <div className="pricing-card-top">
                <span className={`plan-badge${plan.highlighted ? " plan-badge-featured" : ""}`}>
                  {plan.badge}
                </span>
                {plan.highlighted ? (
                  <span className="plan-ribbon">{pricing.recommendedRibbon}</span>
                ) : null}
              </div>

              <div className="pricing-copy">
                <h3 {...getHeadingAnimation(index, 35)}>{plan.name}</h3>
                
                {/* Updated price section with larger, impressive pricing */}
                <div className="plan-price-wrap">
                  {plan.originalPrice && (
                    <div className="plan-original-price">
                      {plan.originalPrice}
                    </div>
                  )}
                  
                  <div className="plan-price-wrapper">
                    <span className="plan-price-currency">₹</span>
                    <strong className="plan-price">
                      {plan.price.replace('₹', '')}
                    </strong>
                  </div>
                  
                  <div className="plan-price-divider"></div>
                  
                  {plan.offerText && (
                    <>
                      <div className="plan-offer-text">
                        {plan.offerText}
                      </div>
                      <div className="plan-savings-badge">
                        {calculateSavings(plan.originalPrice, plan.price)}
                      </div>
                    </>
                  )}
                </div>
                
                <p>{plan.description}</p>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="feature-check" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a className="button button-primary button-block pricing-button" href="#registration">
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="pricing-note">{pricing.leadsNote}</p>

        <div className="plan-feature-section">
          <div className="section-heading comparison-subheading">
            <span className="eyebrow">{pricing.featureEyebrow}</span>
            <h3 {...getHeadingAnimation(0, 37)}>{pricing.featureTitle}</h3>
            <p className="comparison-subtitle">{pricing.featureSubtitle}</p>
          </div>
          <div className="plan-feature-grid">
            {pricing.featureDetails.map((feature, index) => (
              <article key={feature.title} className="plan-feature-card">
                <span className="plan-feature-icon" aria-hidden="true">
                  {feature.icon}
                </span>
                <h3 {...getHeadingAnimation(index, 38)}>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="comparison-table-block">
          <div className="comparison-table-header">
            <h3 {...getHeadingAnimation(0, 53)}>{pricing.tableTitle}</h3>
          </div>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>{pricing.headers.feature}</th>
                  <th>{pricing.headers.basic}</th>
                  <th>{pricing.headers.premium}</th>
                </tr>
              </thead>
              <tbody>
                {pricing.rows.map(([feature, basicValue, premiumValue]) => (
                  <tr key={feature}>
                    <td>{feature}</td>
                    <td>{basicValue}</td>
                    <td>{premiumValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="pricing-disclaimer">{pricing.disclaimer}</p>
      </div>
    </section>
  );
}