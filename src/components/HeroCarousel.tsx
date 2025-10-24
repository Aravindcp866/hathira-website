'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { CarouselSlide } from '@/types'

interface HeroCarouselProps {
  slides: CarouselSlide[]
  gradientColors?: string[]
  title?: string
  subtitle?: string
  ctaText?: string
}

export default function HeroCarousel({ slides, gradientColors = ['#e1c0b5', '#c39489', '#8c6b61', '#4a4a4a'], title, subtitle, ctaText }: HeroCarouselProps) {
  // If no slides from CMS, don't render carousel
  if (!slides || slides.length === 0) {
    return null
  }


  return (
    <section className="relative h-[80vh] min-h-[800px] overflow-hidden">
      <style jsx global>{`
        .hero-carousel-wrapper {
          position: relative !important;
          height: 100% !important;
        }
        .splide__pagination {
          display: none !important;
        }
        .splide__arrow {
          background: rgba(255, 255, 255, 0.9) !important;
          border: none !important;
          width: 50px !important;
          height: 50px !important;
          border-radius: 50% !important;
          opacity: 0 !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
        }
        .splide__arrow--prev {
          left: 2rem !important;
        }
        .splide__arrow--next {
          right: 2rem !important;
        }
        .splide:hover .splide__arrow {
          opacity: 1 !important;
        }
        .splide__arrow svg {
          width: 20px !important;
          height: 20px !important;
          fill: #333 !important;
        }
      `}</style>
      <div className="hero-carousel-wrapper">
        <Splide
          options={{
            type: 'loop',
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            pauseOnFocus: true,
            resetProgress: false,
            speed: 1000,
            arrows: true,
            pagination: false,
            drag: true,
            keyboard: true,
            cover: true,
            height: '100%',
            width: '100%',
            focus: 'center',
          }}
          className="h-full"
        >
        {slides.map((slide, index) => {
          const gradientStyle = {
            background: `linear-gradient(-45deg, ${gradientColors.join(', ')})`,
            backgroundSize: '400% 400%',
            animation: 'gradientBG 15s ease infinite',
          }

          return (
            <SplideSlide key={index} className="relative h-[80vh] min-h-[500px]">
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              
              {/* Animated Gradient Background */}
              <div 
                className="absolute inset-0 z-0 hero-animated-bg opacity-40"
                style={gradientStyle}
              ></div>
              
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.text || `Slide ${index + 1}`}
                fill
                className="object-cover opacity-60"
                style={{ objectPosition: 'center top' }}
                priority={index === 0}
              />

              <motion.div
                className="absolute inset-0 z-20 w-full h-full flex flex-col items-center justify-center text-white text-center px-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="max-w-3xl mx-auto">
                <h1 
                  className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-wide text-shadow-lg"
                >
                  {title || 'Hathira Clinic'}
                </h1>
                {subtitle && (
                  <p className="text-xl md:text-2xl mb-8 text-white/90">
                    {subtitle}
                  </p>
                )}
                {(slide.ctaLink && slide.ctaText) || ctaText ? (
                  <a
                    href={slide.ctaLink || '#'}
                    className="bg-white text-gray-800 font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-all inline-block"
                  >
                    {slide.ctaText || ctaText}
                  </a>
                ) : null}
                </div>
              </motion.div>
            </SplideSlide>
          )
        })}
        </Splide>
      </div>
    </section>
  )
}
