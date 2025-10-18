'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: {
    weekdays: string
    sunday: string
  }
  whatsapp?: string
  socialMedia?: {
    instagram?: string
    facebook?: string
    twitter?: string
  }
  mapEmbed?: string
}

interface ContactSectionProps {
  contactInfo: ContactInfo
}

export default function ContactSection({ contactInfo }: ContactSectionProps) {
  return (
    <section className="py-20 md:py-28 fade-in-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Visit Our Clinic
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Find us at our convenient location and experience our expert care in person.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-start">
          {/* Contact Information */}
          <motion.div
            className="contact-card rounded-2xl md:p-8 p-6 shadow-lg"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-100/50 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 theme-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-600 hover:text-primary-400 transition-colors text-lg"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-100/50 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 theme-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-600 hover:text-primary-400 transition-colors text-lg"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-100/50 rounded-full flex items-center justify-center mt-1">
                  <MapPin className="w-6 h-6 theme-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-100/50 rounded-full flex items-center justify-center mt-1">
                  <Clock className="w-6 h-6 theme-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {contactInfo.hours.weekdays}<br />
                    {contactInfo.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${contactInfo.whatsapp || contactInfo.phone}?text=Hello%20Hathira%20Clinic,%20I'd%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-bg-accent text-white font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all text-center flex-1"
              >
                Book Appointment
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="bg-white border-2 border-primary-300 text-primary-600 font-semibold px-8 py-4 rounded-full shadow-md hover:bg-primary-50 transition-all text-center flex-1"
              >
                Call Now
              </a>
            </div>
          </motion.div>
          
          {/* Google Maps Embed */}
          <motion.div
            className="map-card rounded-2xl p-8 shadow-lg"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Find Us
            </h3>
            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-md">
              <iframe
                src={contactInfo.mapEmbed || "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d16453.093332093034!2d76.94454869948635!3d8.526968165857365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d8.5309806!2d76.96127779999999!5e0!3m2!1sen!2sin!4v1760084176967!5m2!1sen!2sin"}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Click on the map to open in Google Maps
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

