"use client";
import { useLang } from "../context/LanguageContext";

export const Hero = () => {
  const { t } = useLang();
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-linear-to-b from-[#c2c3e1] to-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#895159]">
        {t.hero_greeting} <span className="text-[#374375]">{}</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6">{t.hero_role}</p>
      <a
        href="#projects"
        className="bg-[#dfaea0] text-white px-6 py-3 rounded-full hover:bg-[#895159] transition"
      >
        {t.hero_button}
      </a>
    </section>
  );
};
