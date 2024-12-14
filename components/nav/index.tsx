"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";

const Nav = () => {
  const [active, setActive] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActive(null);
  };

  return (
    <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50">
      <Menu setActive={setActive}>
        <MenuItem
          item="About"
          active={active}
          setActive={setActive}
          onClick={() => scrollToSection("about")}
        />

        <MenuItem
          item="Experiences"
          active={active}
          setActive={setActive}
          onClick={() => scrollToSection("experiences")}
        />
        <MenuItem
          item="Techs"
          active={active}
          setActive={setActive}
          onClick={() => scrollToSection("techs")}
        />

        <MenuItem
          item="Projects"
          active={active}
          setActive={setActive}
          onClick={() => scrollToSection("projects")}
        />

        <MenuItem
          item="Contact"
          active={active}
          setActive={setActive}
          onClick={() => scrollToSection("contact")}
        />
      </Menu>
    </div>
  );
};

export default Nav;
