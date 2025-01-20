'use client'
import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
const Nav = () => {
  const t = useTranslations()
  return (
    <div className='w-full h-20 flex items-center justify-around absolute top-0 z-50'>
      <div>Logo</div>
      <div className='w-[50%] flex items-center justify-between '>
        <Link href={'/home'}>{t(`Navbar.home`)}</Link>
        <Link href={'/about'}>{t(`Navbar.about`)}</Link>
        <Link href={'/experience'}>{t(`Navbar.experience`)}</Link>
        <Link href={'/projects'}>{t(`Navbar.projects`)}</Link>
      </div>
      <div>
        <button className='px-10 py-3 rounded-2xl bg-gradient-to-r from-[#4f96d6] to-[#4726bf] '>
          <Link href={'#contact'} className='font-normal'>Contact</Link>
        </button>
      </div>
    </div>
  )
}

export default Nav
