'use client'

import Head from 'next/head'

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
    'aesthetic treatments Kerala'
  ],
  canonical = 'https://www.hathira-wellness.in',
  ogImage = '/ogImage.png',
  noindex = false
}: SEOHeadProps) {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonical} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://www.hathira-wellness.in/ogImage.png`} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Hathira Clinic" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://www.hathira-wellness.in${ogImage}`} />
      <meta name="twitter:site" content="@hathiraclinic" />
      <meta name="twitter:creator" content="@hathiraclinic" />
      
      {/* Additional SEO Tags */}
      <meta name="author" content="Hathira Clinic" />
      <meta name="publisher" content="Hathira Clinic" />
      <meta name="copyright" content="Hathira Clinic" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Trivandrum, Kerala, India" />
      <meta name="geo.position" content="8.8932;76.6141" />
      <meta name="ICBM" content="8.8932, 76.6141" />
      
      {/* Mobile Optimization */}
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Hathira Clinic" />
      
      {/* Theme Colors */}
      <meta name="theme-color" content="#D4A59A" />
      <meta name="msapplication-TileColor" content="#D4A59A" />
      <meta name="msapplication-navbutton-color" content="#D4A59A" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Head>
  )
}
