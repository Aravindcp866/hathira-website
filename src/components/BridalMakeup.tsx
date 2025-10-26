'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, Sparkles, Clock, DollarSign, CheckCircle, Phone } from 'lucide-react'
import Image from 'next/image'
import { BridalMakeupData, ContactInfo } from '@/types'

interface BridalMakeupProps {
  bridalData: BridalMakeupData
  contactData?: ContactInfo
}

export default function BridalMakeup({ bridalData, contactData }: BridalMakeupProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 ">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-rose-400 md:block hidden" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              {bridalData.title}
            </h2>
          </div>
          {bridalData.subtitle && (
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              {bridalData.subtitle}
            </p>
          )}
        </div>

        {/* Hero Image */}
        {bridalData.heroImage && (
          <div className="mb-16 flex md:flex-row flex-col items-center justify-center rounded-[12px] overflow-auto">
            <div className="md:w-[300px] md:h-[344px] w-full relative h-96  overflow-hidden shadow-2xl">
              <Image
                src={bridalData.heroImage.asset.url}
                alt={bridalData.heroImage.alt || 'Bridal Makeup'}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Your Perfect Wedding Day</h3>
                <p className="text-lg opacity-90">Let us make you feel absolutely beautiful</p>
              </div>
            </div>
                {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white  p-8 md:p-12 shadow-xl max-w-2xl mx-auto">
            <Heart className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ready for Your Special Day?
            </h3>
            <p className="text-gray-600 mb-6">
              Book your bridal consultation and let us create the perfect look for your wedding day.
            </p>
            <a
              href={bridalData.ctaLink || (contactData ? `tel:${contactData.phone}` : 'tel:+1234567890')}
              className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-4 rounded-full md:text-lg text-xs transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              {bridalData.ctaText}
            </a>
          </div>
        </div>
          </div>
        )}

        {/* Services Grid */}
     
        {/* Testimonials */}
        {bridalData.testimonials && bridalData.testimonials.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              What Our Brides Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bridalData.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {testimonial.image && (
                      <div className="relative w-12 h-12">
                        <Image
                          src={testimonial.image.asset.url}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <div className="flex items-center gap-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

    
      </div>
    </section>
  )
}
