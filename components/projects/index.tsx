"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

const Projects = () => {
  return (
    <section id="projects">
      <div className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center  text-white">
        <LampContainer>
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
        </LampContainer>
      </div>
    </section>
  );
};

export default Projects;
