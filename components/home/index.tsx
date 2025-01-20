import React, { useRef, useEffect, useState } from 'react'

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const lastPositionRef = useRef<{ x: number; y: number } | null>(null)
  const [colors, setColors] = useState(['red', 'green', 'blue']) // Colors for the line gradient

  const drops: { x: number; y: number; radius: number; alpha: number }[] = []

  const addDrop = (x: number, y: number) => {
    drops.push({ x, y, radius: 0, alpha: 1 })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.backgroundColor = '#1a202c' // Fondo oscuro

    context.lineCap = 'round'
    context.lineWidth = 10

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)

      // Draw waves only on mouse movement
      if (lastPositionRef.current) {
        drops.forEach((drop, index) => {
          drop.radius += 2
          drop.alpha -= 0.01

          if (drop.alpha <= 0) {
            drops.splice(index, 1)
            return
          }

          context.beginPath()
          context.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2)
          context.strokeStyle = `rgba(255, 255, 255, ${drop.alpha})`
          context.lineWidth = 2
          context.stroke()
          context.closePath()
        })
      }

      // Draw line (adapted from previous code)
      if (lastPositionRef.current) {
        const maxLineLength = 100

        const { x, y } = lastPositionRef.current // Get mouse position relative to canvas

        const distance = Math.sqrt(
          Math.pow(x - lastPositionRef.current.x, 2) +
            Math.pow(y - lastPositionRef.current.y, 2)
        )

        if (distance > maxLineLength) {
          context.clearRect(0, 0, canvas.width, canvas.height)
          lastPositionRef.current = null
          return
        }

        const gradient = context.createLinearGradient(
          lastPositionRef.current.x,
          lastPositionRef.current.y,
          x,
          y
        )

        for (let i = 0; i < colors.length; i++) {
          gradient.addColorStop(i / (colors.length - 1), colors[i])
        }

        context.strokeStyle = gradient
        context.beginPath()
        context.moveTo(lastPositionRef.current.x, lastPositionRef.current.y)
        context.lineTo(x, y)
        context.stroke()

        lastPositionRef.current = { x, y }
      }

      requestAnimationFrame(draw)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e

      // Add drop only on mouse move
      addDrop(x, y)
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { clientX: x, clientY: y } = e
    addDrop(x, y) // Agrega una nueva onda en la posición del mouse
  }

  return (
    <div className='w-full h-screen flex items-center justify-center '>
      <canvas
        ref={canvasRef}
        className='w-full h-screen absolute top-0 left-0'
        onMouseMove={handleMouseMove}
      />
      <div className='z-10 flex items-center justify-center text-white text-2xl'>
        Move your mouse to draw waves!
      </div>
    </div>
  )
}

export default Home
