import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/', '/api/', '/_next/', '/admin/'],
    },
    sitemap: 'http://hathira-wellness.in/sitemap.xml',
  }
}
