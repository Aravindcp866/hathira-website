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
  category: 'skin' | 'hair' | 'body'
  treatments: Treatment[]
  featured?: boolean
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
  icon, 
  category, 
  treatments
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

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
    // Only toggle on mobile screens
    if (window.innerWidth < 768) {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <motion.div
      className={`service-card rounded-2xl p-6 md:p-8 w-full max-w-sm ${styles.cardBg}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="flex justify-between items-center md:block text-left cursor-pointer md:cursor-default"
        onClick={handleHeaderClick}
      >
        <div>
          <div className={`inline-block p-4 ${styles.iconBg} rounded-full mb-4`}>
            <span className={`text-2xl ${styles.iconColor}`}>
              {iconMap[icon] || '✨'}
            </span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 pb-3">
            {title}
          </h3>
        </div>
        <ChevronDown 
          className={`w-6 h-6 ${styles.chevronColor} md:hidden flex-shrink-0 ml-4 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </div>
      
      <div className={`accordion-content ${isExpanded ? 'expanded' : ''}`}>
        <ul className="text-gray-600 text-left">
          {treatments.map((treatment, index) => (
            <li key={index} className="service-list-item">
              <CheckCircle className="w-5 h-5 theme-accent icon" />
              <span className="content">
                {treatment.name} – <strong>{treatment.description}</strong>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}