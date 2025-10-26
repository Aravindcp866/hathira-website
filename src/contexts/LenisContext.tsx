'use client'
import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react'
import Lenis from 'lenis'

interface LenisContextType {
  lenis: Lenis | null
}

const LenisContext = createContext<LenisContextType>({ lenis: null })

export const useLenis = () => {
  const context = useContext(LenisContext)
  if (!context) {
    throw new Error('useLenis must be used within a LenisProvider')
  }
  return context
}

interface LenisProviderProps {
  children: ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    // Ensure we're on the client side
    if (typeof window === 'undefined') return
    
    // Check if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768
    
    // Disable Lenis completely on mobile for better native scrolling
    if (isMobile) {
      // Add CSS to ensure smooth native scrolling on mobile
      const style = document.createElement('style')
      style.textContent = `
        html {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }
        body {
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
          touch-action: pan-y;
        }
        * {
          -webkit-overflow-scrolling: touch;
        }
      `
      document.head.appendChild(style)
      
      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style)
        }
      }
    }
    
    // Initialize Lenis for smooth scrolling on desktop only
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
      infinite: false,
      wheelMultiplier: 1.0,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.1
    })

    lenisRef.current = lenisInstance
    setLenis(lenisInstance)

    // Mark html for Lenis styling and RAF loop
    document.documentElement.classList.add('lenis', 'lenis-smooth')

    // RAF loop
    function raf(time: number) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenisInstance.destroy()
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
    }
  }, [])

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  )
}
