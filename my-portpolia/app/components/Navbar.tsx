"use client";
import { useLang } from "../context/LanguageContext";

export const Navbar = () => {
  const { switchLang, lang, t } = useLang();

  return (
    <nav className="flex justify-between items-center p-6 bg-[#fffcf5] shadow-md fixed w-full z-50">
      <h1 className="text-sm md:text-2xl font-bold text-[#374375]">
        {t.myname}
      </h1>
      <div className="flex items-center space-x-2 md:space-x-6">
        <a href="#about" className="text-[#374375] hover:text-[#89515a]">
          About
        </a>
        <a href="#projects" className="text-[#374375] hover:text-[#89515a]">
          Projects
        </a>
        <a href="#contact" className="text-[#374375] hover:text-[#89515a]">
          Contact
        </a>
        <button
          onClick={switchLang}
          className="border rounded-full px-3 py-1 text-sm text-[#374375] hover:bg-[#89515a] hover:text-[#dfaea0] transition"
        >
          {lang === "en" ? "MN" : "EN"}
        </button>
      </div>
    </nav>
  );
};
