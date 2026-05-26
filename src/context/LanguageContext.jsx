"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../lib/translations";

const LANGUAGE_STORAGE_KEY = "g9expert-language";
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (savedLang && translations[savedLang]) {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang] ?? translations.en,
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
