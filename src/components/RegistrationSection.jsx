"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";
import { registrationPlanTranslations } from "../lib/translations";

const initialForm = {
  fullName: "",
  mobileNumber: "",
  category: "",
  plan: "",
  experience: "",
  charge: "",
  bio: "",
};

const categories = [
  { label: "Doctor", value: "doctor" },
  { label: "Lawyer", value: "lawyer" },
  { label: "Financial Advisor", value: "financial-advisor" },
  { label: "Career Roadmap", value: "career-roadmap" },
  { label: "Interview Preparation", value: "interview-preparation" },
  { label: "Resume Expert", value: "resume-expert" },
  { label: "Business Consultant", value: "business-consultant" },
  { label: "Freelancing Guide", value: "freelancing-guide" },
  { label: "Social Media Growth", value: "social-media-growth" },
  { label: "Content Creator Coach", value: "content-creator-coach" },
  { label: "Mental Health Coach", value: "mental-health-coach" },
  { label: "Relationship Advice", value: "relationship-advice" },
  { label: "Heartbreak Recovery", value: "heartbreak-recovery" },
  { label: "Diet & Fitness", value: "diet-fitness" },
  { label: "Astrologer", value: "astrologer" },
  { label: "Property Consultant", value: "property-consultant" },
  { label: "Loan Advisor", value: "loan-advisor" },
  { label: "Stock Market Advisor", value: "stock-market-advisor" },
  { label: "Education Counselor", value: "education-counselor" },
  { label: "Abroad Study / Visa", value: "abroad-study-visa" },
];

export default function RegistrationSection() {
  const { lang, t } = useLanguage();
  const planText = registrationPlanTranslations[lang] ?? registrationPlanTranslations.en;
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Data:", form);
    setSubmitted(true);
    setForm(initialForm);
  }

  const planMessage =
    form.plan === "4999"
      ? planText.messages.premium
      : form.plan === "2999"
        ? planText.messages.basic
        : "";

  return (
    <section className="section" id="registration">
      <div className="container registration-grid">
        <div>
          <div className="section-heading left">
            <span className="eyebrow">{t.registration.eyebrow}</span>
            <h2 {...getHeadingAnimation(0, 38)}>{t.registration.title}</h2>
          </div>
          <form className="registration-form" onSubmit={handleSubmit}>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              type="text"
              placeholder={t.registration.placeholders.fullName}
              required
            />
            <input
              name="mobileNumber"
              value={form.mobileNumber}
              onChange={handleChange}
              type="tel"
              placeholder={t.registration.placeholders.mobileNumber}
              required
            />
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                {t.registration.placeholders.category}
              </option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            <div className="form-group">
              <label className="form-label" htmlFor="plan">
                {planText.label}
              </label>
              <select id="plan" name="plan" value={form.plan} onChange={handleChange} required>
                <option value="">{planText.placeholder}</option>
                <option value="2999">{planText.basic}</option>
                <option value="4999">{planText.premium}</option>
              </select>
            </div>
            {planMessage ? <p className="plan-selection-note">{planMessage}</p> : null}
            <input
              name="experience"
              value={form.experience}
              onChange={handleChange}
              type="text"
              placeholder={t.registration.placeholders.experience}
              required
            />
            <input
              name="charge"
              value={form.charge}
              onChange={handleChange}
              type="number"
              placeholder={t.registration.placeholders.charge}
              required
            />
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder={t.registration.placeholders.bio}
              rows="5"
              required
            />
            <button className="button button-primary button-block" type="submit">
              {t.registration.submit}
            </button>
            <p className="fine-print">{t.registration.note}</p>
            {submitted ? <p className="success-message">{t.registration.success}</p> : null}
          </form>
        </div>
        <aside className="support-stack">
          <article className="support-card whatsapp-card">
            <span className="eyebrow small">{t.registration.whatsappEyebrow}</span>
            <h3 {...getHeadingAnimation(0, 39)}>{t.registration.whatsappTitle}</h3>
            <a
              className="button button-primary button-block"
              href="https://wa.me/918103007446?text=Hi%20I%20want%20to%20join%20G9Expert%20as%20an%20expert"
              target="_blank"
              rel="noreferrer"
            >
              {t.registration.whatsappCta}
            </a>
          </article>
          <article className="support-card help-card">
            <span className="eyebrow small">{t.registration.helpEyebrow}</span>
            <h3 {...getHeadingAnimation(0, 40)}>{t.registration.helpTitle}</h3>
            <a
              className="button button-secondary button-block"
              href="https://wa.me/918103007446?text=Hi%20I%20need%20help%20with%20G9Expert%20registration"
              target="_blank"
              rel="noreferrer"
            >
              {t.registration.helpCta}
            </a>
          </article>
        </aside>
      </div>
    </section>
  );
}
