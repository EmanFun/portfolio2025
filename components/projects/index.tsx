"use client";

import React, { useMemo } from "react";
import { HoverEffect } from "../ui/card-hover-effect";

const Projects = () => {
  const memorizedItems = useMemo(() => {
    return <HoverEffect items={items} />;
  }, []);

  return (
    <section id="projects">
      <div className="min-h-screen relative w-full overflow-hidden flex flex-col items-center justify-center text-gray-400">
        <div className="absolute inset-0 w-full h-full bg-slate-700 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <h1 className="text-4xl font-bold text-neutral-300 text-center mb-28">
          Projects
        </h1>
        {memorizedItems}
      </div>
    </section>
  );
};

const items = [
  {
    title: "project 1",
    description: "descripton",
    image: "",
    link: "https://www.youtube.com",
  },
  {
    title: "project 1",
    description: "descripton",
    link: "https://www.facebook.com",
  },
  {
    title: "project 1",
    description: "descripton",
    link: "https://www.google.com",
  },
];

export default Projects;
