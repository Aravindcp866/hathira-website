'use client'

import { Instagram, Facebook, Twitter, Phone, Mail, MapPin, Clock, Heart, Sparkles } from 'lucide-react'

interface ContactInfo {
  phone: string
  email: string
  address: string
  socialMedia?: {
    instagram?: string
    facebook?: string
    twitter?: string
  }
}

interface FooterProps {
  contactInfo: ContactInfo
}

export default function Footer({ contactInfo }: FooterProps) {
  const quickLinks = [
    { href: '#skin', label: 'Skin Treatments' },
    { href: '#hair', label: 'Hair Treatments' },
    { href: '#body', label: 'Body Treatments' },
  ]

  const services = [
    'Facial Treatments',
    'Laser Therapy',
    'Botox & Fillers',
    'Hair Removal',
    'Body Contouring',
    'Bridal Makeup'
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,165,154,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                    Hathira Clinic
                  </h3>
                  <p className="text-sm text-gray-400">Beauty & Aesthetics</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Your journey to radiant beauty begins here. We provide world-class aesthetic treatments 
                with personalized care and cutting-edge technology.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                {contactInfo.socialMedia?.instagram && (
                  <a 
                    href={contactInfo.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {contactInfo.socialMedia?.facebook && (
                  <a 
                    href={contactInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
                {contactInfo.socialMedia?.twitter && (
                  <a 
                    href={contactInfo.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-sky-500/25"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-primary-400 rounded-full group-hover:w-2 transition-all duration-300"></div>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary-400" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer flex items-center gap-2 group">
                      <div className="w-1 h-1 bg-primary-400 rounded-full group-hover:w-2 transition-all duration-300"></div>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary-400" />
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-white hover:text-primary-400 transition-colors duration-300"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-white hover:text-primary-400 transition-colors duration-300 break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white text-sm leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Heart className="w-4 h-4 text-primary-400" />
                <span>&copy; 2025 Hathira Clinic. All Rights Reserved.</span>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

