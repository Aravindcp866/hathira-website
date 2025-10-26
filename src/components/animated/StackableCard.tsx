'use client'

import React, { useEffect, useState } from 'react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { StackCardData, StackCardItem } from '../../types'
import Image from 'next/image'

interface CardItem {
  title: string
  description: string
  listingItems: string[]
  image?: {
    url: string
  }
}

interface StackableCardProps {
  stackCardData: StackCardData
}

function StackableCard({ stackCardData }: StackableCardProps): JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (!stackCardData || !stackCardData.cards) {
    return (
      <div className="w-full text-center py-8">
        <p className="text-gray-500">No stack card data available</p>
      </div>
    )
  }

  // Debug: Log the data structure
  console.log('StackCard Data:', stackCardData)
  console.log('Cards:', stackCardData.cards)

  const items: CardItem[] = stackCardData.cards.map((card: StackCardItem) => ({
    title: card.heading || '',
    description: card.description || '',
    listingItems: card.listingItems ? card.listingItems.map(item => item.text) : [],
    image: {
      url: card.image?.asset?.url || ''
    }
  }))

  return (
    <div className="w-full">
      <style jsx global>{`
        .splide__arrow {
          transition: none !important;
          transform: none !important;
        }
        .splide__arrow:hover {
          transition: none !important;
          transform: none !important;
        }
      `}</style>
      {isMobile ? (
        <div className="relative">
          <Splide
            options={{
              type: 'loop',
              autoplay: true,
              interval: 4000,
              speed: 700,
              arrows: false,
              pagination: true,
              drag: true,
              gap: '1rem',
              padding: '1rem',
              width: '100%'
            }}
          >
            {items.map((item, idx) => (
              <SplideSlide key={idx}>
                <div className="scroll-stack-card w-full max-w-4xl mx-auto min-h-80 my-4 p-6 md:p-8 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border bg-white flex flex-col md:flex-row items-center">
                  {/* Left side - Image */}
                  {item.image && item.image.url && (
                    <div className="w-full md:w-72 h-48 md:h-64 rounded-[30px] overflow-hidden flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                      <Image
                        src={item.image.url}
                        alt={item.title}
                        width={320}
                        height={256}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  {/* Right side - Text content */}
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{item.title}</h2>
                    <p className="text-base md:text-lg text-gray-600 mb-4">{item.description}</p>
                    {item.listingItems && item.listingItems.length > 0 && (
                      <ul className="text-base md:text-lg text-gray-700 space-y-2">
                        {item.listingItems.map((listItem, listIdx) => (
                          <li key={listIdx} className="flex items-start">
                            <span className="mr-2 text-blue-500">•</span>
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      ) : (
        <ScrollStack useWindowScroll={true}>
          {items.map((item, idx) => (
            <div key={`ssi-${idx}`}>
              <ScrollStackItem itemClassName="bg-white">
                {(
                  <div className="flex items-center h-full">
                    {/* Left side - Image */}
                    {item.image && item.image.url && (
                      <div className="w-72 h-64 rounded-[30px] overflow-hidden flex-shrink-0 mr-8">
                        <Image
                          src={item.image.url}
                          alt={item.title}
                          width={320}
                          height={256}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                    {/* Right side - Text content */}
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-4 text-gray-800">{item.title}</h2>
                      <p className="text-lg text-gray-600 mb-4">{item.description}</p>
                      {item.listingItems && item.listingItems.length > 0 && (
                        <ul className="text-lg text-gray-700 space-y-2">
                          {item.listingItems.map((listItem, listIdx) => (
                            <li key={listIdx} className="flex items-start">
                              <span className="mr-2 text-blue-500">•</span>
                              <span>{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </ScrollStackItem>
            </div>
          ))}
        </ScrollStack>
      )}
    </div>
  )
}

export default StackableCard