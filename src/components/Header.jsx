"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    [t.nav.home, "#home"],
    [t.nav.howItWorks, "#how-it-works"],
    [t.nav.categories, "#categories"],
    [t.nav.benefits, "#benefits"],
    [t.nav.testimonials, "#testimonials"],
    [t.nav.faq, "#faq"],
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#home">
  <Image
    src="/logo.webp"
    alt="G9Expert"
    width={180}
    height={50}
    priority
  />
</a>

        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <label className="language-select-wrap">
            <span className="language-select-label">
              {t.common.languageLabel}
            </span>

            <select
              aria-label={t.common.languageLabel}
              className="language-select"
              value={lang}
              onChange={(event) => setLang(event.target.value)}
            >
              <option value="en">{t.common.languages.en}</option>
              <option value="hi">{t.common.languages.hi}</option>
            </select>
          </label>

          <a className="header-cta joinnow-button" href="#registration">
            {t.nav.joinNow}
          </a>
        </div>
      </div>
    </header>
  );
}