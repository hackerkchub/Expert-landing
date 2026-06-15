"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";
import { registrationPlanTranslations } from "../lib/translations";
import axios from "axios";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Auto clear messages after 5 seconds
  useEffect(() => {
    if (successMessage || error) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setError("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [successMessage, error]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccessMessage("");

      const response = await axios.post(
        `http://localhost:5000/api/expert-detail/expert-registration`,
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setSuccessMessage(response.data.message);
        setForm(initialForm);
        
        // REMOVED - No auto-scroll to top
        // Success message will show right where it is
      }
    } catch (error) {
      setError(
        error?.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

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
            <button
              className="button button-primary button-block"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : t.registration.submit}
            </button>
            <p className="fine-print">{t.registration.note}</p>

            {error && (
              <p className="error-message">
                {error}
              </p>
            )}

            {successMessage && (
              <p className="success-message">
                {successMessage}
              </p>
            )}
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

      <style jsx>{`
        .error-message {
          background: #fee2e2;
          color: #dc2626;
          padding: 12px;
          border-radius: 8px;
          margin-top: 16px;
          font-size: 14px;
          text-align: center;
          animation: slideIn 0.3s ease;
        }

        .success-message {
          background: #d1fae5;
          color: #065f46;
          padding: 12px;
          border-radius: 8px;
          margin-top: 16px;
          font-size: 14px;
          text-align: center;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #1e293b;
        }

        .plan-selection-note {
          background: #f0f9ff;
          color: #0369a1;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          margin-top: -8px;
          margin-bottom: 16px;
          border-left: 3px solid #0ea5e9;
        }

        .fine-print {
          font-size: 12px;
          color: #64748b;
          text-align: center;
          margin-top: 12px;
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}