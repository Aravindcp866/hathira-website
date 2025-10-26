'use client'

import { useState } from 'react'
import { ChevronDown, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

interface Treatment {
  name: string
  description: string
  benefits: string[]
}

interface ServiceCardProps {
  title: string
  description?: string
  icon: string
  image?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  category: 'skin' | 'hair' | 'body'
  treatments: Treatment[]
  featured?: boolean
  isFirst?: boolean
}

const iconMap: { [key: string]: string } = {
  sparkles: '✨',
  sun: '☀️',
  activity: '📈',
  droplets: '💧',
  gem: '💎',
  wind: '💨',
  snowflake: '❄️',
  umbrella: '☂️',
  'paint-brush': '🎨',
  'gantt-chart': '📊',
  'person-standing': '🧍',
  'stretch-horizontal': '↔️',
}

export default function ServiceCard({ 
  title, 
  description,
  icon,
  image,
  category, 
  treatments,
  isFirst = false
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(isFirst)

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'skin':
        return {
          cardBg: 'bg-white',
          iconBg: 'bg-rose-100/50',
          iconColor: 'text-primary-400',
          chevronColor: 'text-primary-400',
        }
      case 'hair':
        return {
          cardBg: 'bg-stone-50',
          iconBg: 'bg-stone-200/50',
          iconColor: 'text-stone-500',
          chevronColor: 'text-stone-500',
        }
      case 'body':
        return {
          cardBg: 'bg-white',
          iconBg: 'bg-rose-100/50',
          iconColor: 'text-primary-400',
          chevronColor: 'text-primary-400',
        }
      default:
        return {
          cardBg: 'bg-white',
          iconBg: 'bg-rose-100/50',
          iconColor: 'text-primary-400',
          chevronColor: 'text-primary-400',
        }
    }
  }

  const styles = getCategoryStyles(category)

  const handleHeaderClick = () => {
    // Toggle on all screen sizes
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
      className={`service-card rounded-2xl p-6 md:p-8 w-full justify-end md:max-w-sm ${styles.cardBg}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >

      {/* Title and Expand Icon Row */}
      <div 
        className="flex items-center justify-between mb-3 cursor-pointer md:cursor-default"
        onClick={handleHeaderClick}
      >
        <h3 className="text-2xl font-semibold text-gray-800">
          {title}
        </h3>
        <ChevronDown 
          className={`w-5 h-5 ${styles.chevronColor} flex-shrink-0 transition-transform duration-300 md:hidden ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </div>

      {/* Description - show on desktop, expand on mobile */}
      {description && (
        <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'} md:max-h-none md:opacity-100`}>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>
      )}
      
      {/* Image - show on desktop, expand on mobile */}
      {image && (
        <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} md:max-h-none md:opacity-100`}>
          <div className="h-full w-full">
            <img 
              src={image.asset.url} 
              alt={image.alt || title}
              className="w-full h-48 object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
      )}
      
      {treatments && treatments.length > 0 && (
        <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} md:max-h-none md:opacity-100`}>
          <div className="pt-4 border-t border-gray-100">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Available Treatments:</h4>
            <ul className="space-y-2">
              {treatments.map((treatment, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{treatment.name}</span>
                    {treatment.description && (
                      <span className="block text-gray-500 mt-1">{treatment.description}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  )
}