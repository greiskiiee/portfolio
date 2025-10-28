"use client";
import { Facebook, Mail, Phone } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export const Contact = () => {
  const { t } = useLang();
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6 text-[#895159]">
        {t.contact_title}
      </h2>
      <p className="text-[#374375] mb-6">{t.contact_text}</p>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <a
          href="mailto:chimgeebatuh@gmail.com"
          className="flex gap-2 bg-[#dfaea0] text-white px-6 py-3 rounded-full hover:bg-[#895159]  transition"
        >
          <Mail />
          chimgeebatuh@gmail.com
        </a>
        <a className="flex gap-2 bg-[#dfaea0] text-white px-6 py-3 rounded-full hover:bg-[#895159]  transition">
          <Phone />
          +976 80348383
        </a>
        <a
          href="https://www.facebook.com/chmgeee.112"
          className="flex gap-2 bg-[#dfaea0] text-white px-6 py-3 rounded-full hover:bg-[#895159]  transition"
        >
          <Facebook />
          Б.Чимэг-Эрдэнэ
        </a>
      </div>
    </section>
  );
};
