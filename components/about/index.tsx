"use client";
import React, { useMemo } from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "../../lib/utils";

const About = () => {
  const memoizedBoxess = useMemo(() => {
    return <Boxes className="mt-8" />;
  }, []);

  return (
    <section id="about">
      <div className="h-[80vh] relative w-full overflow-hidden bg-slate-700 flex flex-col items-center justify-center rounded-lg pt-28">
        <div className="absolute inset-0 w-full h-full bg-slate-700 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        {memoizedBoxess}
        <h1
          className={cn(
            "md:text-4xl text-lg text-center text-gray-400 relative z-20 mb-10"
          )}
        >
          ¡Hola! Soy Emanuel Funes, Desarrollador Full Stack MERN
        </h1>
        <p className=" text-center mt-10 text-neutral-300 relative z-20 max-w-2xl px-4 md:text-2xl">
          Apasionado por crear experiencias web innovadoras con el stack MERN.
          Transformo ideas en aplicaciones dinámicas y escalables, combinando
          diseño intuitivo con funcionalidad robusta. Siempre en búsqueda de
          nuevos desafíos tecnológicos para expandir mis horizontes.
        </p>
      </div>
    </section>
  );
};

export default About;
