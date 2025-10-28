"use client";
import Image from "next/image";
import { useLang } from "../context/LanguageContext";

export const Projects = () => {
  const { t } = useLang();
  const projects = [
    {
      title: "Tinder clone",
      desc: "A fun dating web app inspired by Tinder, where users can swipe to find matches and chat instantly once both sides like each other.",
      img: "/tinder.png",
      link: "https://tinder-frontend-prod-iota.vercel.app/",
    },
    {
      title: "Movie web",
      desc: "A website that displays brief information and trailers of the latest movies released worldwide.",
      img: "/movieweb.png",
      link: "https://leap-movie-app.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#895159]">
        {t.projects_title}
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <a
            key={p.link ?? i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition block"
          >
            <Image
              src={p.img}
              alt={p.title}
              width={400}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[#374375]">
                {p.title}
              </h3>
              <p className="text-[#374375]">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
