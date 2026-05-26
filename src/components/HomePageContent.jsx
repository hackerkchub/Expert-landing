"use client";

import Header from "./Header";
import HeroSection from "./HeroSection";
import ExpertGoalSection from "./ExpertGoalSection";
import HighlightSection from "./HighlightSection";
import ControlSection from "./ControlSection";
import EarningSection from "./EarningSection";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import CtaBanner from "./CtaBanner";
import BenefitsSection from "./BenefitsSection";
import FeatureList from "./FeatureList";
import ComparisonSection from "./ComparisonSection";
import NumbersSection from "./NumbersSection";
import RegistrationSection from "./RegistrationSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import { useLanguage } from "../context/LanguageContext";

const visuallyHiddenStyle = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};

export default function HomePageContent() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExpertGoalSection />
        <nav aria-label="Expert registration" style={visuallyHiddenStyle}>
          <a href="/expert-registration">{t.common.becomeExpert}</a>
        </nav>
        <section aria-labelledby="g9expert-kya-hai">
          <h2 id="g9expert-kya-hai" style={visuallyHiddenStyle}>
            G9Expert kya hai
          </h2>
          <HighlightSection />
        </section>
        <ControlSection />
        <section aria-labelledby="aap-kitna-kama-sakte-hain">
          <h2 id="aap-kitna-kama-sakte-hain" style={visuallyHiddenStyle}>
            Aap kitna kama sakte hain
          </h2>
          <EarningSection />
        </section>
        <section aria-labelledby="kaise-kaam-karta-hai">
          <h2 id="kaise-kaam-karta-hai" style={visuallyHiddenStyle}>
            Kaise kaam karta hai
          </h2>
          <HowItWorks />
        </section>
        <Testimonials />
        <CtaBanner />
        <BenefitsSection />
        <FeatureList />
        <ComparisonSection />
        <NumbersSection />
        <RegistrationSection />
        <section aria-labelledby="faqs">
          <h2 id="faqs" style={visuallyHiddenStyle}>
            FAQs
          </h2>
          <FAQSection />
        </section>
      </main>
      <Footer />
      <a className="mobile-sticky-cta" href="#registration">
        {t.common.mobileStickyCta}
      </a>
    </>
  );
}
