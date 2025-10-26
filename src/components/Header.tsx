'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { href: '#skin', label: 'Skin' },
    { href: '#hair', label: 'Hair' },
    { href: '#body', label: 'Body' },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto md:px-6 px-4 md:py-4 py-2 flex justify-between items-center">
        <a 
          href="#" 
          className="md:text-3xl text-xl font-bold gradient-text tracking-wider text-shadow"
        >
          Hathira Wellness 
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-primary-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center">
          <a
            href="https://wa.me/918075870652?text=Hello%20Hathira%20Clinic,%20I'd%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="theme-bg-accent text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all hidden sm:block"
          >
            Book Appointment
          </a>
          
          <button
            onClick={toggleMobileMenu}
            className="md:hidden ml-4 p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/918075870652?text=Hello%20Hathira%20Clinic,%20I'd%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-2 theme-bg-accent text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all sm:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

