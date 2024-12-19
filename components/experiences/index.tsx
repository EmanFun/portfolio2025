"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const Experiences = () => {
  return (
    <section id="experiences">
      <div className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center text-white pt-28">
        <div className="absolute inset-0 w-full h-full bg-slate-700 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mb-8 bg-gradient-to-br from-slate-900 to-slate-700 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-trasparent ,d:tex-7xl"
          >
            Experiences
          </motion.h1>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-10"
          >
            <BentoGrid className="max-w-4xl mx-auto">
              {experiences.map((experience, i: number) => (
                <BentoGridItem
                  key={i}
                  title={experience.title}
                  description={experience.description}
                  header={experience.header}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid>
          </motion.div>
        </LampContainer>
      </div>
    </section>
  );
};

const Skeleton = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
};

const JobDescription = ({
  responsabilities,
  technologies,
}: {
  responsabilities: string[];
  technologies: string[];
}) => {
  return (
    <div>
      <div>
        <h1 className="text-lg font-bold my-2">Responsabilities:</h1>
        <ol>
          {responsabilities.map((responsability, i) => {
            return <li key={i}>{responsability}</li>;
          })}
        </ol>
      </div>
      <div className="">
        <h2 className="text-lg font-bold my-2">Technologies:</h2>
        <ul className="flex flex-row flex-wrap gap-2">
          {technologies.map((technology, i) => {
            return (
              <li key={i} className="">
                {technology}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const experiences = [
  {
    title: "Freelance | Full Stack Developer | Octubre-Actualidad 2024",
    description: (
      <JobDescription
        responsabilities={[
          "Diseñar, desarrollar y mantener funcionalidades web robustas y escalables.",
          "Implementar nuevas características y mejoras en el frontend utilizando Next.js, ShadCN/Ui, TypeScript y TanStack.",
          "Gestionar la arquitectura y la lógica de negocio de una plataforma de préstamos completa",
          "Optimizar el rendimiento y la seguridad de las aplicaciones web.",
          "Mantener y mejorar la infraestructura de bases de datos, asegurando la integridad y disponibilidad de los datos.",
          "Realizar pruebas unitarias e integradas para asegurar la calidad del código.",
          "Documentar las especificaciones técnicas y el flujo de trabajo para facilitar la colaboración y el mantenimiento del proyecto.",
        ]}
        technologies={[
          "Next.JS",
          "TypeScript",
          "TanStack",
          "TailwindCSS",
          "MongoDB",
          "NestJS",
          "ShadCN/Ui",
        ]}
      />
    ),
    header: <Skeleton />,
  },
  {
    title: "LaurenAI | Full Stack Developer | Julio-Septiembre 2024",
    description: (
      <JobDescription
        responsabilities={[
          "Desarrollar y mantener funcionalidades web full stack",
          "Implementar nuevas características y mejoras en frontend y backend.",
          "Colaborar estrechamente con el equipo de diseño.",
          "Optimizar el rendimiento del sitio web y la comunicación en tiempo real",
          "Realizar pruebas de calidad y resolver problemas técnicos en toda la stack.",
        ]}
        technologies={[
          "Next.JS",
          "TypeScript",
          "ChakraUi",
          "Zustand",
          "Redux",
          "Express",
          "Knex ORM",
          "Socket.io",
          "MySql",
        ]}
      />
    ),
    header: <Skeleton />,
  },
  {
    title: "Kromaticos | Desarrollador Web | Febrero-Mayo 2024",
    description: (
      <JobDescription
        responsabilities={[
          "Desarrollar y mantener funcionalidades web.",
          "Implementar nuevas características y mejoras.",
          "Colaborar con el equipo de diseño.",
          "Optimizar el rendimiento del sitio web.",
          "Realizar pruebas de calidad y resolver problemas técnicos.",
        ]}
        technologies={["ReactJS", "TypeScript", "Redux", "CSS"]}
      />
    ),
    header: <Skeleton />,
  },
];

export default Experiences;
