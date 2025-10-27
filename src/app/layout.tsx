import type { Metadata } from 'next'
import { Inter, Geist } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/contexts/LenisContext'
import { medicalBusinessSchema, localBusinessSchema, organizationSchema, faqSchema, breadcrumbSchema } from '@/components/JsonLd'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const geist = Geist({ 
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Hathira Wellness | Advanced Skin, Hair & Body Treatments in Trivandrum, Kerala',
    template: '%s | Hathira Wellness'
  },
  description: 'Hathira Wellness offers expert cosmetic treatments for skin, hair, and body in Trivandrum, Kerala. Rediscover your natural radiance with our advanced solutions including laser therapy, chemical peels, PRP, and more.',
  keywords: [
    'Hathira Wellness',
    'Trivandrum',
    'Kerala',
    'India',
    'cosmetic clinic Trivandrum',
    'skin treatment Kerala',
    'hair treatment Trivandrum',
    'body treatment Kerala',
    'beauty clinic Trivandrum',
    'dermatologist Trivandrum',
    'acne treatment Kerala',
    'hair fall treatment Trivandrum',
    'anti-aging treatment',
    'laser treatment Trivandrum',
    'chemical peels Kerala',
    'microneedling Trivandrum',
    'PRP therapy Kerala',
    'botox Trivandrum',
    'dermal fillers Kerala',
    'fat loss treatment',
    'bridal makeup Trivandrum',
    'aesthetic treatments',
    'cosmetic surgery Kerala',
    'skin rejuvenation Trivandrum'
  ],
  authors: [{ name: 'Hathira Wellness', url: 'http://hathira-wellness.in' }],
  creator: 'Hathira Wellness',
  publisher: 'Hathira Wellness',
  applicationName: 'Hathira Wellness',
  category: 'Health & Beauty',
  classification: 'Medical & Beauty Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://hathira-wellness.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'hi-IN': '/hi-IN',
    },
  },
  openGraph: {
    title: 'Hathira Wellness | Advanced Cosmetic Treatments in Trivandrum, Kerala',
    description: 'Expert care for skin, hair, and body in Trivandrum, Kerala. Tailored treatments to enhance your unique beauty and help you rediscover your natural radiance.',
    url: 'http://hathira-wellness.in',
    siteName: 'Hathira Wellness',
    images: [
      {
        url: '/ogImage.png',
        width: 1200,
        height: 630,
        alt: 'Hathira Wellness - Advanced Cosmetic Treatments in Trivandrum, Kerala',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hathira Wellness | Advanced Cosmetic Treatments in Trivandrum, Kerala',
    description: 'Expert care for skin, hair, and body in Trivandrum, Kerala. Tailored treatments to enhance your unique beauty.',
    images: ['/ogImage.png'],
    creator: '@hathiraclinic',
    site: '@hathiraclinic',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google449c4336c587e1d4',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Hathira Wellness',
    'msapplication-TileColor': '#D4A59A',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#D4A59A" />
        <meta name="msapplication-TileColor" content="#D4A59A" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Hathira Wellness" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Trivandrum, Kerala, India" />
        <meta name="geo.position" content="8.8932;76.6141" />
        <meta name="ICBM" content="8.8932, 76.6141" />
        
        {/* Business Hours */}
        <meta name="business:contact_data:locality" content="Trivandrum" />
        <meta name="business:contact_data:region" content="Kerala" />
        <meta name="business:contact_data:country_name" content="India" />
        <meta name="google-site-verification" content="HgCRiuBBFTLozM0Ssih7P64oP2n2mHRkNVWvKdZkhbs" />
        
        {/* JSON-LD Structured Data - Server-side rendered */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalBusinessSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
      </head>
      <body className={`${inter.variable} ${geist.variable} antialiased`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}