'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  backgroundImage?: string
  gradientColors?: string[]
}

export default function Hero({ 
  title, 
  subtitle, 
  ctaText, 
  backgroundImage,
  gradientColors = ['#e1c0b5', '#c39489', '#8c6b61', '#4a4a4a']
}: HeroProps) {
  const gradientStyle = {
    background: `linear-gradient(-45deg, ${gradientColors.join(', ')})`,
    backgroundSize: '400% 400%',
    animation: 'gradientBG 15s ease infinite',
  }

  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0 z-0 hero-animated-bg"
        style={gradientStyle}
      ></div>
      
      {/* Background Image */}
      {backgroundImage && backgroundImage.trim() !== '' && (
        <Image
          src={backgroundImage}
          alt="Hathira Clinic"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
          priority
        />
      )}

      <motion.div
        className="relative z-20 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-wide text-shadow-lg"
        >
          {title}
        </h1>
        <p 
          className="text-lg md:text-xl mb-8 font-light text-shadow-sm"
        >
          {subtitle}
        </p>
        <a
          href="#skin"
          className="bg-white text-gray-800 font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105 inline-block"
        >
          {ctaText}
        </a>
      </motion.div>
    </section>
  )
}
