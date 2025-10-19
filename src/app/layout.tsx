import type { Metadata } from 'next'
import { Inter, Geist } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/contexts/LenisContext'

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
  title: 'Hathira Clinic | Skin, Hair & Body Treatments',
  description: 'Hathira Clinic offers expert cosmetic treatments for skin, hair, and body. Rediscover your natural radiance with our advanced solutions.',
  keywords: [
    'cosmetic clinic',
    'skin treatment',
    'hair treatment',
    'body treatment',
    'beauty clinic',
    'Kollam',
    'Kerala',
    'acne treatment',
    'hair fall treatment',
    'anti-aging',
    'laser treatment',
    'chemical peels',
    'microneedling',
    'PRP therapy'
  ],
  authors: [{ name: 'Hathira Clinic' }],
  creator: 'Hathira Clinic',
  publisher: 'Hathira Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.hathiraclinic.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hathira Clinic | Advanced Cosmetic Treatments',
    description: 'Expert care for skin, hair, and body. Tailored treatments to enhance your unique beauty and help you rediscover your natural radiance.',
    url: 'https://www.hathiraclinic.com',
    siteName: 'Hathira Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&h=630&fit=crop&auto=format',
        width: 1200,
        height: 630,
        alt: 'Hathira Clinic - Advanced Cosmetic Treatments',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hathira Clinic | Advanced Cosmetic Treatments',
    description: 'Expert care for skin, hair, and body. Tailored treatments to enhance your unique beauty.',
    images: ['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&h=630&fit=crop&auto=format'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#D4A59A" />
        <meta name="msapplication-TileColor" content="#D4A59A" />
      </head>
      <body className={`${inter.variable} ${geist.variable} antialiased`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}