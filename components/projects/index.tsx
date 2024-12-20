"use client";

import React from "react";

import agileStratImg from '../../public/agileStrat.png';
import laslesVpnImg from '../../public/lasles-vpn.png';

const Projects = () => {
  return (
    <section id="projects">
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden text-gray-400">
        <div className="absolute inset-0 w-full h-full bg-slate-700 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <h1 className="text-4xl font-bold text-center text-neutral-300 mb-28">
          Projects
        </h1>
        {/*         <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-900 to-slate-700 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-trasparent ,d:tex-7xl"
          >
            Projects
          </motion.h1>
        </LampContainer> */}
      </div>
    </section>
  );
};

export const items = [
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
