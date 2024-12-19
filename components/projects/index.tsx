"use client";

import React, { useMemo } from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import agileStratImg from '../../public/agileStrat.png';
import laslesVpnImg from '../../public/lasles-vpn.png';

const Projects = () => {
  const memorizedItems = useMemo(() => {
    return <HoverEffect items={items} />;
  }, []);

  return (
    <section id="projects">
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden text-gray-400">
        <div className="absolute inset-0 w-full h-full bg-slate-700 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <h1 className="text-4xl font-bold text-center text-neutral-300 mb-28">
          Projects
        </h1>
        {memorizedItems}
      </div>
    </section>
  );
};

const items = [
  {
    title: "Agile Strat",
    description: "descripton",
    image: agileStratImg,
    link: "https://www.youtube.com",
  },
  {
    title: "LaslesVPN",
    description: "descripton",
    image: laslesVpnImg,
    link: "https://www.facebook.com",
  },
  {
    title: "project 1",
    description: "descripton",
    image: "",
    link: "https://www.google.com",
  },
];

export default Projects;
