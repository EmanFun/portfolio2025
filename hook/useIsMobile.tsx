import { useEffect, useState } from 'react'

const useIsMobile = (breakpoint = 400) => {
  const [useIsMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }
    // Initial check
    handleResize()
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])

  return useIsMobile
}

export default useIsMobile
