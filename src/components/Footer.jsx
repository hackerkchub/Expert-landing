"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="logo footer-logo" href="#home">
            <Image
              src="/logo.webp"
              alt="G9Expert"
              width={150}
              height={40}
              border-radius={4}
              priority
            />
          </a>

          <p>{t.footer.description}</p>
        </div>

        <div>
          <h3 {...getHeadingAnimation(0, 42)}>
            {t.footer.quickLinksTitle}
          </h3>

          <div className="footer-links">
            {t.footer.quickLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 {...getHeadingAnimation(0, 43)}>
            {t.footer.supportTitle}
          </h3>

          <div className="footer-links">
            {t.footer.supportLinks.map((item) => (
              <a key={item} href="#registration">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 {...getHeadingAnimation(0, 44)}>
            {t.footer.socialTitle}
          </h3>

          <div className="footer-links">
            {t.footer.socials.map((item) => (
              <a key={item} href="#home">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">{t.footer.copyright}</div>
    </footer>
  );
}