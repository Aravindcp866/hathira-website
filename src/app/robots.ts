import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/', '/api/', '/_next/', '/admin/'],
    },
    sitemap: 'https://www.hathiraclinic.com/sitemap.xml',
  }
}
