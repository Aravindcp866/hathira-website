import { groq } from 'next-sanity'

export const HERO_QUERY = groq`
  *[_type == "hero"][0] {
    title,
    subtitle,
    ctaText,
    backgroundImage,
    gradientColors
  }
`

export const SERVICES_QUERY = groq`
  *[_type == "service"] | order(category asc, order asc) {
    _id,
    title,
    slug,
    description,
    icon,
    category,
    featured,
    order,
    treatments[] {
      name,
      description,
      benefits
    }
  }
`

export const SERVICES_BY_CATEGORY_QUERY = groq`
  *[_type == "service" && category == $category] | order(order asc) {
    _id,
    title,
    slug,
    description,
    icon,
    category,
    featured,
    order,
    treatments[] {
      name,
      description,
      benefits
    }
  }
`

export const CONTACT_INFO_QUERY = groq`
  *[_type == "contactInfo"][0] {
    phone,
    email,
    address,
    hours,
    whatsapp,
    socialMedia,
    mapEmbed
  }
`
