'use client'
import React, { useState } from 'react'
import { Menu, MenuItem } from '../ui/navbar-menu'

const Nav = () => {
  const [active, setActive] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setActive(null)
  }

  return (
    <div className='fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 font-sans'>
      <Menu setActive={setActive}>
        <MenuItem
          item='Sobre mí '
          active={active}
          setActive={setActive}
          onClick={() => scrollToSection('about')}
        />

        <MenuItem
          item='Experiencias'
          active={active}
          setActive={setActive}
          onClick={() => scrollToSection('experiences')}
        />
        <MenuItem
          item='Techs'
          active={active}
          setActive={setActive}
          onClick={() => scrollToSection('techs')}
        />

        <MenuItem
          item='Proyectos'
          active={active}
          setActive={setActive}
          onClick={() => scrollToSection('projects')}
        />

        <MenuItem
          item='Contacto'
          active={active}
          setActive={setActive}
          onClick={() => scrollToSection('contact')}
        />
      </Menu>
    </div>
  )
}

export default Nav
