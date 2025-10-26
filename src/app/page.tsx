import React from 'react'
import Header from '@/components/Header'
import HeroCarousel from '@/components/HeroCarousel'
import ServiceCard from '@/components/ServiceCard'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ClientWrapper from '@/components/ClientWrapper'
import FAQ from '@/components/FAQ'
import BridalMakeup from '@/components/BridalMakeup'
import FatLoss from '@/components/FatLoss'
import Section from '@/components/Section'
import JsonLd, { medicalBusinessSchema, localBusinessSchema, organizationSchema, faqSchema, breadcrumbSchema } from '@/components/JsonLd'
import { Service } from '@/types'
import { client, urlFor } from '../../lib/sanity'
import { HERO_QUERY, SERVICES_QUERY, CONTACT_INFO_QUERY, FAQ_QUERY, BRIDAL_MAKEUP_QUERY, FAT_LOSS_QUERY } from '../../lib/queries'

// Fetch data from Sanity at build time
async function getData() {
  try {
    const [heroData, servicesData, contactData, faqData, bridalData, fatLossData] = await Promise.all([
      client.fetch(HERO_QUERY),
      client.fetch(SERVICES_QUERY),
      client.fetch(CONTACT_INFO_QUERY),
      client.fetch(FAQ_QUERY),
      client.fetch(BRIDAL_MAKEUP_QUERY),
      client.fetch(FAT_LOSS_QUERY)
    ])



    return {
      heroData: heroData ? {
        ...heroData,
        backgroundImage: heroData.backgroundImage ? urlFor(heroData.backgroundImage).url() : undefined,
        carouselImages: heroData.carouselImages && Array.isArray(heroData.carouselImages) ? heroData.carouselImages.map((slide: any) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
          ...slide,
          image: slide.image ? urlFor(slide.image).url() : ''
        })) : [],
        gradientColors: heroData.gradientColors && heroData.gradientColors.length > 0 ? heroData.gradientColors : ['#e1c0b5', '#c39489', '#8c6b61', '#4a4a4a']
      } : null,
      servicesData: servicesData && servicesData.length > 0 ? servicesData : [],
      contactData: contactData ? {
        ...contactData,
        hours: contactData.hours || {
          weekdays: 'Mon - Sat: 9:00 AM - 7:00 PM',
          sunday: 'Sunday: 10:00 AM - 5:00 PM'
        },
        socialMedia: contactData.socialMedia || {
          instagram: '',
          facebook: '',
          twitter: ''
        }
      } : null,
      faqData: faqData || null,
      bridalData: bridalData || null,
      fatLossData: fatLossData || null
    }
  } catch (error) {
    console.error('Error fetching data from Sanity:', error)
    // Return null data if Sanity is unavailable
    return {
      heroData: null,
      servicesData: [],
      contactData: null,
      faqData: null,
      bridalData: null,
      fatLossData: null
    }
  }
}

export default async function Home() {
  // Fetch data from Sanity at build time
  const { heroData, servicesData, contactData, faqData, bridalData, fatLossData } = await getData()
  
  // Debug: Log FAQ data
  console.log('FAQ data:', faqData)
  

  // Group services by category
  const servicesByCategory = servicesData.reduce((acc: Record<string, Service[]>, service: Service) => {
    if (!acc[service.category]) {
      acc[service.category] = []
    }
    acc[service.category].push(service)
    return acc
  }, {})

  return (
    <ClientWrapper>
      {/* JSON-LD Structured Data */}
      <JsonLd data={medicalBusinessSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      
      <main className="antialiased">
        <Header />
        
        {/* Only render carousel if we have hero data with carousel images */}
            {heroData && heroData.carouselImages && heroData.carouselImages.length > 0 && (
              <HeroCarousel 
                slides={heroData.carouselImages} 
                gradientColors={heroData.gradientColors}
                title={heroData.title}
                subtitle={heroData.subtitle}
                ctaText={heroData.ctaText}
              />
            )}

        {/* Fat Loss Section - only render if we have fat loss data */}
        {fatLossData && (
          <FatLoss fatLossData={fatLossData} contactData={contactData} />
        )}

        {/* Skin Problems Section - only render if we have services data */}
        {servicesByCategory.skin && servicesByCategory.skin.length > 0 && (
          <Section id="skin">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
                  Advanced Skin Solutions
                </h2>
                <p className="text-base md:text-lg text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto px-4">
                  Targeting common concerns with state-of-the-art treatments for flawless, healthy skin.
                </p>
              </div>
              <div className="grid grid-cols-1 md:flex md:flex-wrap md:items-stretch md:justify-center gap-4 md:gap-6 lg:gap-8">
                {servicesByCategory.skin.map((service: Service, index: number) => (
                  <div key={service._id}>
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      icon={service.icon || 'sparkles'}
                      image={service.image}
                      category={service.category}
                      treatments={service.treatments || []}
                      featured={service.featured}
                      isFirst={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* Section for hair and tatoo removal */}
        {/* {servicesByCategory.skin && servicesByCategory.skin.length > 0 && (
          <Section id="body">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
                Aesthetic / Beauty treatments
                </h2>
                <p className="text-base md:text-lg text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto px-4">
                Non-medical services aimed at improving appearance or self-expression.
                </p>
              </div>
              <div className="grid grid-cols-1 md:flex md:flex-wrap md:items-stretch md:justify-center gap-4 md:gap-6 lg:gap-8">
                {servicesByCategory?.body?.map((service: Service) => (
                  <div key={service._id}>
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      icon={service.icon || 'sparkles'}
                      image={service.image}
                      category={service.category}
                      treatments={service.treatments || []}
                      featured={service.featured}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )} */}

        {/* {stackCardData && (
          <StackableCard stackCardData={stackCardData} />
        )} */}

        {/* Bridal Makeup Section - only render if we have bridal data */}
        {bridalData && (
          <BridalMakeup bridalData={bridalData} contactData={contactData} />
        )}

        {/* FAQ Section - only render if we have FAQ data */}
        {faqData && faqData.faqItems && faqData.faqItems.length > 0 && (
          <FAQ faqData={faqData} />
        )}

        {/* Contact Section - only render if we have contact data */}
        {contactData && (
          <ContactSection contactInfo={contactData} />
        )}

        {contactData && (
          <Footer contactInfo={contactData} />
        )}
        
        {contactData && (
          <FloatingButtons
            phone={contactData.phone}
            whatsapp={contactData.whatsapp}
          />
        )}
      </main>
    </ClientWrapper>
  )
}