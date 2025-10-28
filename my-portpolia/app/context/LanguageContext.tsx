"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import en from "../locales/en.json";
import mn from "../locales/mn.json";

type Language = "en" | "mn";
const translations = { en, mn };

interface LangContextProps {
  lang: Language;
  t: typeof en;
  switchLang: () => void;
}

const LanguageContext = createContext<LangContextProps>({
  lang: "en",
  t: en,
  switchLang: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");
  const switchLang = () => setLang((prev) => (prev === "en" ? "mn" : "en"));

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], switchLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
