import JsonLd, { breadcrumbSchema, faqSchema, localBusinessSchema, medicalBusinessSchema, organizationSchema } from './JsonLd'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export default function SEOHead({
  title = 'Hathira Clinic | Advanced Skin, Hair & Body Treatments in Trivandrum, Kerala',
  description = 'Hathira Clinic offers expert cosmetic treatments for skin, hair, and body in Trivandrum, Kerala. Rediscover your natural radiance with our advanced solutions.',
  keywords = [
    'cosmetic clinic Trivandrum',
    'skin treatment Kerala',
    'hair treatment Trivandrum',
    'beauty clinic Trivandrum',
    'dermatologist Trivandrum',
    'aesthetic treatments Kerala',
    'fat loss treatment',
    'bridal makeup Trivandrum',
    'aesthetic treatments',
    'cosmetic surgery Kerala',
    'skin rejuvenation Trivandrum',
    'hair fall treatment Trivandrum',
    'hair loss treatment Trivandrum',
    'hair loss treatment Kerala',
    'hair loss treatment Trivandrum',
  ],
  canonical = 'https://www.hathira-wellness.in',
  ogImage = '/ogImage.png',
  noindex = false
}: SEOHeadProps) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLd data={medicalBusinessSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
    </>
  )
}
