import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ClientWrapper from '@/components/ClientWrapper'
import { Service } from '@/types'
import { client, urlFor } from '../../lib/sanity'
import { HERO_QUERY, SERVICES_QUERY, CONTACT_INFO_QUERY } from '../../lib/queries'
import ScrollStack, { ScrollStackItem } from '@/components/animated/ScrollStack'
import StackableCard from '@/components/animated/StackableCard'

// Fallback data when Sanity is not available or empty
const fallbackData = {
  heroData: {
    title: "Rediscover Your Natural Radiance",
    subtitle: "Expert care for skin, hair, and body. Tailored treatments to enhance your unique beauty.",
    ctaText: "Explore Treatments",
    gradientColors: ['#e1c0b5', '#c39489', '#8c6b61', '#4a4a4a']
  },
  servicesData: [
    // Skin Services
    {
      _id: 'acne',
      title: 'Acne',
      slug: { current: 'acne' },
      description: 'Comprehensive acne treatment solutions',
      icon: 'sparkles',
      category: 'skin',
      order: 1,
      treatments: [
        {
          name: 'Chemical Peels',
          description: 'Reveals clearer skin by removing dead cells and unclogging pores.',
          benefits: ['Deep exfoliation', 'Pore unclogging', 'Skin renewal']
        },
        {
          name: 'Laser Therapy',
          description: 'Kills acne-causing bacteria and calms inflammation for healthier skin.',
          benefits: ['Bacteria elimination', 'Inflammation reduction', 'Skin healing']
        },
        {
          name: 'Topical Treatments',
          description: 'Customized creams and lotions to prevent and treat breakouts effectively.',
          benefits: ['Customized formulas', 'Prevention focused', 'Effective treatment']
        },
        {
          name: 'Microdermabrasion',
          description: 'Gently exfoliates dead skin and diminishes the appearance of acne scars.',
          benefits: ['Gentle exfoliation', 'Scar reduction', 'Skin smoothing']
        }
      ]
    },
    {
      _id: 'pigmentation',
      title: 'Pigmentation / Dark Spots',
      slug: { current: 'pigmentation-dark-spots' },
      description: 'Advanced treatments for skin pigmentation issues',
      icon: 'sun',
      category: 'skin',
      order: 2,
      treatments: [
        {
          name: 'Laser Treatment',
          description: 'Lightens dark spots and promotes a balanced, even skin tone.',
          benefits: ['Spot lightening', 'Even skin tone', 'Precise targeting']
        },
        {
          name: 'Chemical Peels',
          description: 'Effectively removes pigmented outer skin layers to reveal brighter skin.',
          benefits: ['Layer removal', 'Skin brightening', 'Effective results']
        },
        {
          name: 'Topical Brightening Creams',
          description: 'Reduces excess melanin production and brightens your complexion.',
          benefits: ['Melanin reduction', 'Complexion brightening', 'Daily care']
        },
        {
          name: 'Microneedling with Serum',
          description: 'Improves skin tone and texture, giving you a radiant glow.',
          benefits: ['Tone improvement', 'Texture enhancement', 'Radiant glow']
        }
      ]
    },
    {
      _id: 'wrinkles',
      title: 'Wrinkles & Aging',
      slug: { current: 'wrinkles-aging' },
      description: 'Anti-aging treatments for youthful skin',
      icon: 'activity',
      category: 'skin',
      order: 3,
      treatments: [
        {
          name: 'Botox / Fillers',
          description: 'Smooths fine lines and restores lost volume for a youthful appearance.',
          benefits: ['Line smoothing', 'Volume restoration', 'Youthful appearance']
        },
        {
          name: 'Laser Rejuvenation',
          description: 'Stimulates natural collagen production to reduce wrinkles from within.',
          benefits: ['Collagen stimulation', 'Natural results', 'Long-term benefits']
        },
        {
          name: 'Chemical Peels',
          description: 'Improves skin texture and noticeably reduces fine lines.',
          benefits: ['Texture improvement', 'Line reduction', 'Skin renewal']
        },
        {
          name: 'Microneedling',
          description: 'Boosts collagen formation for firmer, more youthful-looking skin.',
          benefits: ['Collagen boost', 'Firmer skin', 'Youthful look']
        }
      ]
    }
  ],
  contactData: {
    phone: '+91 8075 870 652',
    email: 'info@hathiraclinic.com',
    address: 'Near KSRTC Bus Stand, Kollam, Kerala, India',
    hours: {
      weekdays: 'Mon - Sat: 9:00 AM - 7:00 PM',
      sunday: 'Sunday: 10:00 AM - 5:00 PM'
    },
    whatsapp: '918075870652',
    socialMedia: {
      instagram: 'https://www.instagram.com/hathiraskincareclinic',
      facebook: '',
      twitter: ''
    },
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d16453.093332093034!2d76.94454869948635!3d8.526968165857365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d8.5309806!2d76.96127779999999!5e0!3m2!1sen!2sin!4v1760084176967!5m2!1sen!2sin'
  }
}

// Fetch data from Sanity at build time
async function getData() {
  try {
    const [heroData, servicesData, contactData] = await Promise.all([
      client.fetch(HERO_QUERY),
      client.fetch(SERVICES_QUERY),
      client.fetch(CONTACT_INFO_QUERY)
    ])

    // If no data from Sanity, use fallback data
    if (!heroData && !servicesData && !contactData) {
      return fallbackData
    }

    return {
      heroData: heroData ? {
        ...heroData,
        backgroundImage: heroData.backgroundImage ? urlFor(heroData.backgroundImage).url() : undefined
      } : fallbackData.heroData,
      servicesData: servicesData && servicesData.length > 0 ? servicesData : fallbackData.servicesData,
      contactData: contactData ? {
        ...contactData,
        hours: contactData.hours || fallbackData.contactData.hours,
        socialMedia: contactData.socialMedia || fallbackData.contactData.socialMedia
      } : fallbackData.contactData
    }
  } catch (error) {
    console.error('Error fetching data from Sanity:', error)
    // Return fallback data if Sanity is unavailable
    return fallbackData
  }
}

export default async function Home() {
  // Fetch data from Sanity at build time
  const { heroData, servicesData, contactData } = await getData()

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
        
        <Hero
          title={heroData.title}
          subtitle={heroData.subtitle}
          ctaText={heroData.ctaText}
          backgroundImage={heroData.backgroundImage}
          gradientColors={heroData.gradientColors}
        />

        {/* Skin Problems Section */}
        {servicesByCategory.skin && (
          <section id="skin" className="py-20 md:py-28 fade-in-section">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                  Advanced Skin Solutions
                </h2>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                  Targeting common concerns with state-of-the-art treatments for flawless, healthy skin.
                </p>
              </div>
              <div className="flex flex-wrap items-stretch justify-center gap-8">
                {servicesByCategory.skin.map((service: Service) => (
                  <ServiceCard
                    key={service._id}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    category={service.category}
                    treatments={service.treatments || []}
                    featured={service.featured}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <StackableCard />

        {/* Contact Section */}
        <ContactSection contactInfo={contactData} />

        <Footer contactInfo={contactData} />
        
        <FloatingButtons
          phone={contactData.phone}
          whatsapp={contactData.whatsapp}
        />
      </main>
    </ClientWrapper>
  )
}
