'use client'
import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useRef,
  useState
} from 'react'

interface MenuContextType {
  buttonRef: React.MutableRefObject<HTMLButtonElement | null>
  menuVisible: boolean
  setMenuVisible: any
  menuHiding: boolean
  setMenuHiding: any
  toggleMenu: () => void
}

const NavContext = createContext<MenuContextType | null>(null)

export const useNavContext = (): MenuContextType => {
  const context = useContext(NavContext)
  if (!context) {
    throw new Error('error in Nav Context')
  }
  return context
}

interface NavProviderProps {
  children: ReactNode
}

export const NavProvider: FC<NavProviderProps> = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false)
  const [menuHiding, setMenuHiding] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const toggleMenu = (): void => {
    if (menuVisible) {
      setMenuHiding(true)
      setTimeout(() => {
        setMenuHiding(false)
        setMenuVisible(!menuVisible)
      }, 1200)
    } else {
      setMenuVisible(!menuVisible)
    }
  }
  return (
    <NavContext.Provider
      value={{
        buttonRef,
        setMenuVisible,
        menuVisible,
        menuHiding,
        setMenuHiding,
        toggleMenu
      }}
    >
      {children}
    </NavContext.Provider>
  )
}
