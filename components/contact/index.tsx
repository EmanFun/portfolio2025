'use client'
import React from 'react'
import { BackgroundLines } from '../ui/background-lines'
import { FloatingDock } from '../ui/floating-dock'
import { MessageCircleMore, Linkedin, Github, AtSign, File } from 'lucide-react'
import useIsMobile from '@/hook/useIsMobile'
import FormContact from '../formContact'

const message = `"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."%0D%0A\nNo hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.%0D%0A`
const subject = `Saludos!`
const mailTo = 'emanuelfun.95@gmail.com'

const links = [
  {
    title: 'Linkedin',
    icon: <Linkedin />,
    href: 'https://www.linkedin.com/in/emanuelfun/'
  },
  {
    title: 'Github',
    icon: <Github />,
    href: 'https://github.com/EmanFun'
  },
  {
    title: 'Email',
    icon: <AtSign />,
    href: `mailto:${mailTo}?subject=${subject}&body=${message}`
  },
  {
    title: 'Whatsapp',
    icon: <MessageCircleMore />,
    href: 'whatsapp://send?phone=5493518018687'
  },
  {
    title: 'CV',
    icon: <File />,
    href: '/cv.pdf'
  }
]

const StaticDock = ({ items }: { items: any }) => {
  return (
    <div
      className='flex flex-row items-center justify-center rounded-lg p-2 gap-2'
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(8px)'
      }}
    >
      {items.map((item: any, index: number) => (
        <a
          key={index}
          href={item.href}
          className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 backdrop-blur-sm'
        >
          {item.icon}
          <span className='sr-only'>{item.title}</span>
        </a>
      ))}
    </div>
  )
}

const Contact = () => {
  const isMobile = useIsMobile()

  return (
    <section id='contact'>
      <BackgroundLines className='h-screen bg-slate-700 relative w-full overflow-hidden flex flex-col items-center justify-center text-gray-400'>
        <div className='h-[100%] flex flex-col items-center justify-between pt-28'>
          <div>
            <FormContact />
          </div>
          <div className='flex flex-col items-center justify-center'>
            {isMobile ? (
              <StaticDock items={links} />
            ) : (
              <FloatingDock mobileClassName='translate-y-20' items={links} />
            )}
          </div>
        </div>
      </BackgroundLines>
    </section>
  )
}

export default Contact
