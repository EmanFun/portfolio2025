"use client";
import Navbar from "../components/nav";
import About from "../components/about";
import Experiences from "../components/experiences";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Techs from "../components/techs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Experiences />
      <Techs />
      <Projects />
      <Contact />
    </div>
  );
}
