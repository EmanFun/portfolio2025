"use client";
import React from "react";

import { FaBootstrap } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiKnexdotjs, SiStyledcomponents } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

import { SiMysql } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiSequelize } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
/* import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMongoose } from "react-icons/si";
import { SiSqlite } from "react-icons/si"; */

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Techs = () => {
  return (
    <section id="techs">
      <div className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center text-white pt-28">
        <div className="absolute inset-0 w-full h-full bg-slate-700 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <div className="relative z-10 w-full">
          <h1 className=" text-4xl font-bold text-white text-center mb-28">
            Techs
          </h1>
        </div>
        <div className="mt-8">
          <InfiniteMovingCards
            items={frontend}
            direction="right"
            speed="slow"
            pauseOnHover
          />
        </div>
        <div className="mt-8">
          <InfiniteMovingCards
            items={backend}
            direction="left"
            speed="slow"
            pauseOnHover
          />
        </div>
      </div>
    </section>
  );
};

const frontend = [
  {
    name: "Socket.io",
    icon: <SiSocketdotio size={60} className="text-gray-400" />,
  },

  {
    name: "Html",
    icon: <FaHtml5 size={60} className="text-gray-400" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={60} className="text-gray-400" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={60} className="text-gray-400" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare size={60} className="text-gray-400" />,
  },
  {
    name: "React",
    icon: <FaReact size={60} className="text-gray-400" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={60} className="text-gray-400" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={60} className="text-gray-400" />,
  },

  {
    name: "Styled Components",
    icon: <SiStyledcomponents size={60} className="text-gray-400" />,
  },
  {
    name: "Redux",
    icon: <SiRedux size={60} className="text-gray-400" />,
  },
  {
    name: "Chakra UI",
    icon: <SiChakraui size={60} className="text-gray-400" />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript size={60} className="text-gray-400" />,
  },
];

const backend = [
  {
    name: "Node.js",
    icon: <SiNodedotjs size={60} className="text-gray-400" />,
  },
  {
    name: "Express",
    icon: <SiExpress size={60} className="text-gray-400" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={60} className="text-gray-400" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={60} className="text-gray-400" />,
  },
  {
    name: "Sequelize",
    icon: <SiSequelize size={60} className="text-gray-400" />,
  },
  {
    name: "Knex",
    icon: <SiKnexdotjs size={60} className="text-gray-400" />,
  },
  {
    name: "Python",
    icon: <FaPython size={60} className="text-gray-400" />,
  },
  {
    name: "Django",
    icon: <SiDjango size={60} className="text-gray-400" />,
  },
  {
    name: "Docker",
    icon: <FaDocker size={60} className="text-gray-400" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={60} className="text-gray-400" />,
  },
  {
    name: "Git",
    icon: <FaGit size={60} className="text-gray-400" />,
  },
  {
    name: "Google Cloud",
    icon: <SiGooglecloud size={60} className="text-gray-400" />,
  },
];

export default Techs;
