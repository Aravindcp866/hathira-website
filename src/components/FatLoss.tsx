'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Zap, 
  Target, 
  Heart, 
  TrendingDown, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Star,
  Phone,
  ArrowRight
} from 'lucide-react'
import { FatLossData, ContactInfo } from '@/types'

interface FatLossProps {
  fatLossData: FatLossData
  contactData?: ContactInfo
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Zap': Zap,
  'Target': Target,
  'Heart': Heart,
  'TrendingDown': TrendingDown,
  'Clock': Clock,
  'DollarSign': DollarSign,
  'CheckCircle': CheckCircle,
  'Star': Star,
}

export default function FatLoss({ fatLossData, contactData }: FatLossProps) {
  const [selectedTreatment, setSelectedTreatment] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-theme-bg">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            {/* <TrendingDown className="w-8 h-8 text-green-500" /> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
              {fatLossData.title}
            </h2>
          </div>
          {fatLossData.subtitle && (
            <p className="text-base md:text-lg text-gray-600 mt-3 md:mt-4 max-w-3xl mx-auto">
              {fatLossData.subtitle}
            </p>
          )}
        </div>

        {/* Hero Image */}
        {fatLossData.heroImage && (
          <div className="mb-16">
            <div className="relative h-64 md:h-96 lg:h-[300px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={fatLossData.heroImage.asset.url}
                alt={fatLossData.heroImage.alt || 'Fat Loss Solutions'}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0"></div>
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">Transform Your Body</h3>
                <p className="text-sm md:text-base lg:text-lg opacity-90">Achieve your weight loss goals with our proven treatments</p>
              </div>
            </div>
          </div>
        )}

        {/* Key Benefits */}
        {fatLossData.benefits && fatLossData.benefits.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
              Why Choose Our Fat Loss Solutions?
            </h3>
            <div className="flex md:flex-row flex-col gap-9 md:items-center justify-center">
              {fatLossData.benefits.map((benefit, index) => {
                const IconComponent = iconMap[benefit.icon] || Target
                return (
                  <motion.div
                    key={index}
                    className="bg-white md:w-[400px] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-theme-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      {benefit.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}

        {/* Treatments */}
        {fatLossData.treatments && fatLossData.treatments.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
              Our Fat Loss Treatments
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {fatLossData.treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    selectedTreatment === index ? 'ring-2 ' : ''
                  }`}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedTreatment(selectedTreatment === index ? null : index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {treatment.image && (
                    <div className="mb-4 relative h-40 md:h-48">
                      <Image
                        src={treatment.image.asset.url}
                        alt={treatment.image.alt || treatment.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800">{treatment.name}</h4>
                    {treatment.featured && (
                      <Star className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                    )}
                  </div>

                  <p className="text-gray-600 text-sm md:text-base mb-4">{treatment.description}</p>

                  <div className="flex items-center gap-3 md:gap-4 mb-4 text-xs md:text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{treatment.price}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{treatment.duration}</span>
                    </div>
                  </div>

                  {treatment.features && treatment.features.length > 0 && (
                    <div className="space-y-1 md:space-y-2">
                      {treatment.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Success Stories */}
        {fatLossData.testimonials && fatLossData.testimonials.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
              Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {fatLossData.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-lg"
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
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <TrendingDown className="w-4 h-4" />
                        <span className="font-semibold">-{testimonial.weightLoss}kg</span>
                        <span className="text-gray-500">in {testimonial.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white p-6 md:p-8 lg:p-12 shadow-xl max-w-2xl mx-auto rounded-2xl">
            <TrendingDown className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              Book your consultation and take the first step towards achieving your weight loss goals.
            </p>
            <a
              href={fatLossData.ctaLink || (contactData ? `tel:${contactData.phone}` : 'tel:+1234567890')}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              {fatLossData.ctaText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
