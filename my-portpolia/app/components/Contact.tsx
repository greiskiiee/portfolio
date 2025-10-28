"use client";
import { useLang } from "../context/LanguageContext";

export const Contact = () => {
  const { t } = useLang();
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6 text-[#895159]">
        {t.contact_title}
      </h2>
      <p className="text-[#374375] mb-6">{t.contact_text}</p>
      <a
        href="mailto:youremail@example.com"
        className="bg-[#dfaea0] text-white px-6 py-3 rounded-full hover:bg-[#895159]  transition"
      >
        {t.contact_button}
      </a>
    </section>
  );
};
