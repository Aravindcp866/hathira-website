'use client'

import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

interface FloatingButtonsProps {
  phone: string
  whatsapp?: string
}

export default function FloatingButtons({ phone, whatsapp }: FloatingButtonsProps) {
  const whatsappNumber = whatsapp || phone

  return (
    <>
      {/* Floating Call button */}
      <motion.a
        href={`tel:${phone}`}
        className="call-float floating-button"
        aria-label="Call Us"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Phone className="w-7 h-7 text-white" />
      </motion.a>

      {/* Floating WhatsApp button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=Hello%20Hathira%20Clinic,%20I'd%20like%20to%20book%20an%20appointment.`}
        className="whatsapp-float floating-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          width="28"
          height="28"
        >
          <title>WhatsApp</title>
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM9.51 7.23c.24-.04.49-.06.68-.06.21 0 .46.02.63.34.2.37.72 1.76.72 1.76s.06.15.02.32c-.04.17-.12.28-.24.39-.12.11-.25.17-.37.23-.15.08-.31.15-.46.29-.17.14-.35.3-.19.58.16.28.69 1.15 1.48 1.87.97.91 1.75 1.22 1.99 1.36.24.14.39.12.53-.05.14-.17.61-1.02.77-1.36s.32-.28.53-.17l1.58.76c.21.1.36.16.41.25.05.09.02.53-.19 1.02-.21.49-1.31 1.29-1.87 1.29-.56 0-1.15-.24-1.38-.28-.23-.04-5.21-2.08-6.19-5.11-.2-.6-.2-1.12.15-1.57.32-.42.7-.53.94-.53z" />
        </svg>
      </motion.a>
    </>
  )
}

