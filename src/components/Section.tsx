import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  background?: string
}

export default function Section({ 
  id, 
  className = '', 
  children, 
  background = '#fefaf4' 
}: SectionProps) {
  return (
    <section 
      id={id}
      className={`py-16 md:py-28 fade-in-section ${className}`}
      style={{ backgroundColor: background }}
    >
      <div className="w-full">
        {children}
      </div>
    </section>
  )
}
