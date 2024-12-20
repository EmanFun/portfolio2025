'use client'

import React, { useMemo } from 'react'

import agileStratImg from '../../public/agileStrat.png'
import laslesVpnImg from '../../public/lasles-vpn.png'
import dtPoke from '../../public/descargar.png'
import portfolio2023 from '../../public/portfolio2023.png'
import { HoverEffect } from '../ui/card-hover-effect'

const Projects = () => {
  const memoizedHover = useMemo(() => {
    return <HoverEffect items={items} />
  }, [])

  return (
    <section id='projects'>
      <div className='relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden text-gray-400'>
        <div className='absolute inset-0 w-full h-full bg-slate-700 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />
        <h1 className='text-4xl font-bold text-center text-neutral-300 mb-28 mt-20'>
          Proyectos
        </h1>
        <div>{memoizedHover}</div>
      </div>
    </section>
  )
}

export const items = [
  {
    title: 'Agile Strat',
    description: '',
    image: agileStratImg,
    link: 'https://agilestrat-frontend.vercel.app/'
  },
  {
    title: 'LaslesVPN',
    description: '',
    image: laslesVpnImg,
    link: 'https://lasles-vpn-xi.vercel.app/'
  },
  {
    title: 'DTPoke',
    description: '',
    image: dtPoke,
    link: 'https://dt-poke-emanfuns-projects.vercel.app/'
  },
  {
    title: 'Portfolio 2023',
    description: '',
    image: portfolio2023,
    link: 'https://portfolio-inky-eta-41.vercel.app/'
  }
]

export default Projects
