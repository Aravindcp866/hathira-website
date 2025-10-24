import { groq } from 'next-sanity'

export const HERO_QUERY = groq`
  *[_type == "hero" && title == "Hathira Clinic"][0] {
    title,
    subtitle,
    ctaText,
    backgroundImage,
    gradientColors,
    carouselImages[] {
      image,
      text,
      ctaLink,
      ctaText
    }
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

export const STACKCARD_QUERY = groq`
  *[_type == "stackcard"][0] {
    _id,
    title,
    description,
    cards[] {
      image {
        asset-> {
          _id,
          url
        }
      },
      heading,
      description,
      listingItems[] {
        text
      }
    }
  }
`
