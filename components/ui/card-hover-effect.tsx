import { cn } from '../../lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export const HoverEffect = ({
  items,
  className
}: {
  items: {
    title: string
    description: string
    image: StaticImageData | string
    link: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className='relative block w-full h-full p-2 group'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 h-full w-full bg-black/50 block  rounded-3xl'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 }
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 }
                }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
  image
}: {
  className?: string
  children: React.ReactNode
  image: StaticImageData | string
}) => {
  const defaultImage =
    'https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80'
  return (
    <div
      className={cn(
        'w-[300px] cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 z-10',
        className
      )}
    >
      <Image
        src={image ? image : defaultImage}
        alt='Card Image'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60'></div>
      <div className='flex flex-row items-center space-x-4 z-10' />
      <div className='relative z-50'>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  )
}
export const CardTitle = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4 className={cn('text-black font-bold tracking-wide mt-4', className)}>
      {children}
    </h4>
  )
}
export const CardDescription = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        'mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  )
}
