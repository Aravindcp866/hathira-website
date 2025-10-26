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
    image {
      asset-> {
        _id,
        url
      },
      alt
    },
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

export const FAQ_QUERY = groq`
  *[_type == "faqs"][0] {
    title,
    subtitle,
    faqItems[] {
      question,
      answer,
      featured
    }
  }
`

export const BRIDAL_MAKEUP_QUERY = groq`
  *[_type == "bridalMakeup"][0] {
    title,
    subtitle,
    heroImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    services[] {
      name,
      description,
      price,
      duration,
      image {
        asset-> {
          _id,
          url
        },
        alt
      },
      features,
      featured
    },
    testimonials[] {
      name,
      text,
      rating,
      image {
        asset-> {
          _id,
          url
        }
      }
    },
    ctaText,
    ctaLink
  }
`

export const FAT_LOSS_QUERY = groq`
  *[_type == "fatLoss"][0] {
    title,
    subtitle,
    heroImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    benefits[] {
      title,
      description,
      icon
    },
    treatments[] {
      name,
      description,
      price,
      duration,
      image {
        asset-> {
          _id,
          url
        },
        alt
      },
      features,
      featured
    },
    testimonials[] {
      name,
      text,
      weightLoss,
      duration,
      image {
        asset-> {
          _id,
          url
        }
      }
    },
    ctaText,
    ctaLink
  }
`