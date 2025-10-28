"use client";
import { useLang } from "../context/LanguageContext";

export const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6 text-[#895159]">
        {t.about_title}
      </h2>
      <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
        {t.about_text}
      </p>
    </section>
  );
};
