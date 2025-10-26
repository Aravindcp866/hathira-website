import React from 'react'
import Header from '@/components/Header'
import HeroCarousel from '@/components/HeroCarousel'
import ServiceCard from '@/components/ServiceCard'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ClientWrapper from '@/components/ClientWrapper'
import FAQ from '@/components/FAQ'
import { Service, StackCardData, FAQData } from '@/types'
import { client, urlFor } from '../../lib/sanity'
import { HERO_QUERY, SERVICES_QUERY, CONTACT_INFO_QUERY, STACKCARD_QUERY, FAQ_QUERY } from '../../lib/queries'
import StackableCard from '@/components/animated/StackableCard'

// Fetch data from Sanity at build time
async function getData() {
  try {
    const [heroData, servicesData, contactData, stackCardData, faqData] = await Promise.all([
      client.fetch(HERO_QUERY),
      client.fetch(SERVICES_QUERY),
      client.fetch(CONTACT_INFO_QUERY),
      client.fetch(STACKCARD_QUERY),
      client.fetch(FAQ_QUERY)
    ])



    return {
      heroData: heroData ? {
        ...heroData,
        backgroundImage: heroData.backgroundImage ? urlFor(heroData.backgroundImage).url() : undefined,
        carouselImages: heroData.carouselImages && Array.isArray(heroData.carouselImages) ? heroData.carouselImages.map((slide: any) => ({
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
      stackCardData: stackCardData ? {
        ...stackCardData,
        cards: stackCardData.cards && Array.isArray(stackCardData.cards) ? stackCardData.cards.map((card: any) => ({
          ...card,
          image: {
            asset: {
              _id: card.image.asset._id,
              url: card.image.asset.url
            }
          }
        })) : []
      } : null,
      faqData: faqData || null
    }
  } catch (error) {
    console.error('Error fetching data from Sanity:', error)
    // Return null data if Sanity is unavailable
    return {
      heroData: null,
      servicesData: [],
      contactData: null,
      stackCardData: null,
      faqData: null
    }
  }
}

export default async function Home() {
  // Fetch data from Sanity at build time
  const { heroData, servicesData, contactData, stackCardData, faqData } = await getData()
  
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

        {/* Skin Problems Section - only render if we have services data */}
        {servicesByCategory.skin && servicesByCategory.skin.length > 0 && (
          <section id="skin" className="py-20 md:py-28 fade-in-section">
            <div className="container mx-auto px-6 py-12 ">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                  Advanced Skin Solutions
                </h2>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                  Targeting common concerns with state-of-the-art treatments for flawless, healthy skin.
                </p>
              </div>
              <div className="grid grid-cols-1 md:flex md:flex-wrap md:items-stretch md:justify-center gap-6 md:gap-8">
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
          </section>
        )}

        {/* Section for hair and tatoo removal */}
        {servicesByCategory.skin && servicesByCategory.skin.length > 0 && (
          <section id="body" className="py-20 md:py-28 fade-in-section">
            <div className="container mx-auto px-6 py-12 ">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                Aesthetic / Beauty treatments
                </h2>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Non-medical services aimed at improving appearance or self-expression.
                </p>
              </div>
              <div className="grid grid-cols-1 md:flex md:flex-wrap md:items-stretch md:justify-center gap-6 md:gap-8">
                {servicesByCategory.body.map((service: Service) => (
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
          </section>
        )}

        {stackCardData && (
          <StackableCard stackCardData={stackCardData} />
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