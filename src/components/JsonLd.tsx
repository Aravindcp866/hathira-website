'use client'

import Script from 'next/script'

interface JsonLdProps {
  data: any
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Medical Business Schema
export const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Hathira Clinic",
  "alternateName": "Hathira Aesthetic Clinic",
  "description": "Advanced cosmetic treatments for skin, hair, and body in Kollam, Kerala. Expert care with cutting-edge technology.",
  "url": "https://www.hathiraclinic.com",
  "logo": "https://www.hathiraclinic.com/favicon.png",
  "image": "https://www.hathiraclinic.com/ogImage.png",
  "telephone": "+91-8075870652",
  "email": "info@hathiraclinic.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Kollam",
    "addressRegion": "Kerala",
    "postalCode": "691001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "8.8932",
    "longitude": "76.6141"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Credit Card, UPI, Net Banking",
  "medicalSpecialty": [
    "Dermatology",
    "Cosmetic Surgery",
    "Aesthetic Medicine",
    "Laser Therapy",
    "Hair Restoration"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cosmetic Treatments",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Skin Treatments",
          "description": "Advanced skin rejuvenation treatments including chemical peels, microneedling, and laser therapy"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Hair Treatments",
          "description": "Hair restoration and treatment services including PRP therapy and laser hair removal"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Body Treatments",
          "description": "Body contouring, fat loss treatments, and aesthetic body procedures"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Bridal Makeup",
          "description": "Professional bridal makeup and beauty services for special occasions"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.instagram.com/hathiraclinic",
    "https://www.facebook.com/hathiraclinic",
    "https://www.twitter.com/hathiraclinic"
  ],
  "areaServed": {
    "@type": "City",
    "name": "Kollam",
    "containedInPlace": {
      "@type": "State",
      "name": "Kerala",
      "containedInPlace": {
        "@type": "Country",
        "name": "India"
      }
    }
  },
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Dr. Hathira"
  }
}

// Local Business Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.hathiraclinic.com/#business",
  "name": "Hathira Clinic",
  "description": "Premier cosmetic and aesthetic clinic in Kollam, Kerala offering advanced treatments for skin, hair, and body.",
  "url": "https://www.hathiraclinic.com",
  "telephone": "+91-8075870652",
  "email": "info@hathiraclinic.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Kollam",
    "addressRegion": "Kerala",
    "postalCode": "691001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "8.8932",
    "longitude": "76.6141"
  },
  "openingHours": [
    "Mo-Sa 09:00-18:00",
    "Su 10:00-16:00"
  ],
  "priceRange": "$$",
  "image": "https://www.hathiraclinic.com/ogImage.png",
  "logo": "https://www.hathiraclinic.com/favicon.png"
}

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.hathiraclinic.com/#organization",
  "name": "Hathira Clinic",
  "alternateName": "Hathira Aesthetic Clinic",
  "url": "https://www.hathiraclinic.com",
  "logo": "https://www.hathiraclinic.com/favicon.png",
  "description": "Leading cosmetic and aesthetic clinic in Kollam, Kerala providing world-class treatments for skin, hair, and body enhancement.",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Dr. Hathira"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Kollam",
    "addressRegion": "Kerala",
    "postalCode": "691001",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8075870652",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Malayalam", "Hindi"]
  },
  "sameAs": [
    "https://www.instagram.com/hathiraclinic",
    "https://www.facebook.com/hathiraclinic",
    "https://www.twitter.com/hathiraclinic"
  ]
}

// FAQ Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a full range of cosmetic and aesthetic treatments, including facial rejuvenation, injectables (Botox®, dermal fillers), skin treatments, body contouring, laser therapies, hair restoration, and cosmetic surgery."
      }
    },
    {
      "@type": "Question",
      "name": "Are your treatments safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All procedures are performed by licensed and experienced medical professionals using FDA-approved products and equipment. Your safety and satisfaction are our top priorities."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide consultations before treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Every new patient receives a personalized consultation to discuss goals, assess suitability, and create a tailored treatment plan."
      }
    },
    {
      "@type": "Question",
      "name": "Is my information kept confidential?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your privacy is protected under strict confidentiality and medical data protection policies."
      }
    },
    {
      "@type": "Question",
      "name": "Are these machines safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All our machines are FDA-approved / CE-certified and operated by trained professionals. Safety protocols are strictly followed to ensure minimal risk and optimal results."
      }
    }
  ]
}

// Breadcrumb Schema
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.hathiraclinic.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.hathiraclinic.com#services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Contact",
      "item": "https://www.hathiraclinic.com#contact"
    }
  ]
}
