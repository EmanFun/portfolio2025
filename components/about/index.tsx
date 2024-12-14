"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

const index = () => {
  return (
    <section id="about">
      <div className="h-[600px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg pt-28">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          ¡Hola! Soy Emanuel Funes, Desarrollador Full Stack MERN
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20 max-w-2xl px-4">
          Apasionado por crear experiencias web innovadoras con el stack MERN.
          Transformo ideas en aplicaciones dinámicas y escalables, combinando
          diseño intuitivo con funcionalidad robusta. Siempre en búsqueda de
          nuevos desafíos tecnológicos para expandir mis horizontes.
        </p>
      </div>
    </section>
  );
};

export default index;
