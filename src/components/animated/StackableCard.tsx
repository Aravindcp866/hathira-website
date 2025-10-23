'use client'

import React, { useEffect, useState } from 'react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

interface CardItem {
  title: string
  description: string
  itemClassName: string
}

function StackableCard(): JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const items: CardItem[] = [
    { title: 'Card 1', description: 'This is the first card in the stack', itemClassName: 'bg-gradient-to-br from-rose-100 to-rose-200' },
    { title: 'Card 2', description: 'This is the second card in the stack', itemClassName: 'bg-gradient-to-br from-blue-100 to-blue-200' },
    { title: 'Card 3', description: 'This is the third card in the stack', itemClassName: 'bg-gradient-to-br from-green-100 to-green-200' },
    { title: 'Card 4', description: 'This is the fourth card in the stack', itemClassName: 'bg-gradient-to-br from-purple-100 to-purple-200' },
    { title: 'Card 5', description: 'This is the fifth card in the stack', itemClassName: 'bg-gradient-to-br from-orange-100 to-orange-200' },
  ]

  return (
    <div className="w-full">
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
                <div className={`scroll-stack-card relative w-full h-80 my-4 p-12 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border ${item.itemClassName}`}>
                  <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                  <p className="text-lg">{item.description}</p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      ) : (
        <ScrollStack
          useWindowScroll={true}
          children={items.map((item, idx) => (
            <div key={`ssi-${idx}`}>
              <ScrollStackItem
                itemClassName={item.itemClassName}
                children={(
                  <>
                    <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                    <p className="text-lg">{item.description}</p>
                  </>
                )}
              />
            </div>
          ))}
        />
      )}
    </div>
  )
}

export default StackableCard