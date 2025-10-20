'use client'

import React, { useEffect } from 'react'

interface ClientWrapperProps {
  children?: React.ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  useEffect(() => {
    // Scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-section')
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    // Observe all sections
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      section.style.opacity = '0' // Reset initial state for animation
      observer.observe(section)
    })

    // Cleanup
    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return <>{children}</>
}

