export interface Treatment {
  name: string
  description: string
  benefits: string[]
}

export interface Service {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  icon: string
  category: 'skin' | 'hair' | 'body'
  treatments: Treatment[]
  featured?: boolean
  order: number
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: {
    weekdays: string
    sunday: string
  }
  whatsapp?: string
  socialMedia?: {
    instagram?: string
    facebook?: string
    twitter?: string
  }
  mapEmbed?: string
}

export interface CarouselSlide {
  image: string
  text: string
  ctaLink?: string
  ctaText?: string
}

export interface HeroData {
  title: string
  subtitle: string
  ctaText: string
  backgroundImage?: string
  gradientColors?: string[]
  carouselImages?: CarouselSlide[]
}

export interface StackCardItem {
  image: {
    asset: {
      _id: string
      url: string
    }
  }
  heading: string
  description: string
  listingItems: {
    text: string
  }[]
}

export interface StackCardData {
  _id: string
  title: string
  description?: string
  cards: StackCardItem[]
}
