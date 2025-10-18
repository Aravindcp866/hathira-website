'use client'

import { Instagram, Facebook, Twitter } from 'lucide-react'

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

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-4">Hathira Clinic</h3>
            <p className="text-gray-400">
              Your journey to radiant beauty begins here.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>{contactInfo.address}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {contactInfo.socialMedia?.instagram && (
                <a 
                  href={contactInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              )}
              {contactInfo.socialMedia?.facebook && (
                <a 
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              )}
              {contactInfo.socialMedia?.twitter && (
                <a 
                  href={contactInfo.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; 2024 Hathira Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

