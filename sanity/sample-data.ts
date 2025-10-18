// Sample data for Hathira Clinic Sanity CMS
// This file contains the data structure that matches the HTML content

export const sampleHeroData = {
  _type: 'hero',
  title: 'Rediscover Your Natural Radiance',
  subtitle: 'Expert care for skin, hair, and body. Tailored treatments to enhance your unique beauty.',
  ctaText: 'Explore Treatments',
  backgroundImage: {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: 'image-unsplash-woman-skin'
    }
  },
  gradientColors: ['#e1c0b5', '#c39489', '#8c6b61', '#4a4a4a']
}

export const sampleServicesData = [
  // Skin Services
  {
    _type: 'service',
    title: 'Acne',
    slug: { current: 'acne' },
    description: 'Comprehensive acne treatment solutions',
    icon: 'sparkles',
    category: 'skin',
    order: 1,
    treatments: [
      {
        name: 'Chemical Peels',
        description: 'Reveals clearer skin by removing dead cells and unclogging pores.',
        benefits: ['Deep exfoliation', 'Pore unclogging', 'Skin renewal']
      },
      {
        name: 'Laser Therapy',
        description: 'Kills acne-causing bacteria and calms inflammation for healthier skin.',
        benefits: ['Bacteria elimination', 'Inflammation reduction', 'Skin healing']
      },
      {
        name: 'Topical Treatments',
        description: 'Customized creams and lotions to prevent and treat breakouts effectively.',
        benefits: ['Customized formulas', 'Prevention focused', 'Effective treatment']
      },
      {
        name: 'Microdermabrasion',
        description: 'Gently exfoliates dead skin and diminishes the appearance of acne scars.',
        benefits: ['Gentle exfoliation', 'Scar reduction', 'Skin smoothing']
      }
    ]
  },
  {
    _type: 'service',
    title: 'Pigmentation / Dark Spots',
    slug: { current: 'pigmentation-dark-spots' },
    description: 'Advanced treatments for skin pigmentation issues',
    icon: 'sun',
    category: 'skin',
    order: 2,
    treatments: [
      {
        name: 'Laser Treatment',
        description: 'Lightens dark spots and promotes a balanced, even skin tone.',
        benefits: ['Spot lightening', 'Even skin tone', 'Precise targeting']
      },
      {
        name: 'Chemical Peels',
        description: 'Effectively removes pigmented outer skin layers to reveal brighter skin.',
        benefits: ['Layer removal', 'Skin brightening', 'Effective results']
      },
      {
        name: 'Topical Brightening Creams',
        description: 'Reduces excess melanin production and brightens your complexion.',
        benefits: ['Melanin reduction', 'Complexion brightening', 'Daily care']
      },
      {
        name: 'Microneedling with Serum',
        description: 'Improves skin tone and texture, giving you a radiant glow.',
        benefits: ['Tone improvement', 'Texture enhancement', 'Radiant glow']
      }
    ]
  },
  {
    _type: 'service',
    title: 'Wrinkles & Aging',
    slug: { current: 'wrinkles-aging' },
    description: 'Anti-aging treatments for youthful skin',
    icon: 'activity',
    category: 'skin',
    order: 3,
    treatments: [
      {
        name: 'Botox / Fillers',
        description: 'Smooths fine lines and restores lost volume for a youthful appearance.',
        benefits: ['Line smoothing', 'Volume restoration', 'Youthful appearance']
      },
      {
        name: 'Laser Rejuvenation',
        description: 'Stimulates natural collagen production to reduce wrinkles from within.',
        benefits: ['Collagen stimulation', 'Natural results', 'Long-term benefits']
      },
      {
        name: 'Chemical Peels',
        description: 'Improves skin texture and noticeably reduces fine lines.',
        benefits: ['Texture improvement', 'Line reduction', 'Skin renewal']
      },
      {
        name: 'Microneedling',
        description: 'Boosts collagen formation for firmer, more youthful-looking skin.',
        benefits: ['Collagen boost', 'Firmer skin', 'Youthful look']
      }
    ]
  },
  {
    _type: 'service',
    title: 'Dull / Uneven Skin',
    slug: { current: 'dull-uneven-skin' },
    description: 'Revitalizing treatments for dull skin',
    icon: 'droplets',
    category: 'skin',
    order: 4,
    treatments: [
      {
        name: 'Hydrafacial',
        description: 'Provides deep cleansing and hydration, leaving your skin with a vibrant glow.',
        benefits: ['Deep cleansing', 'Hydration boost', 'Vibrant glow']
      },
      {
        name: 'Vitamin / Brightening Serums',
        description: 'Infuses the skin with nutrients to dramatically improve radiance.',
        benefits: ['Nutrient infusion', 'Radiance improvement', 'Skin nourishment']
      },
      {
        name: 'Chemical Peels',
        description: 'Removes dull, dead skin cells to unveil a fresh and even skin tone.',
        benefits: ['Dead cell removal', 'Fresh skin reveal', 'Even tone']
      },
      {
        name: 'Microneedling',
        description: 'Significantly enhances your skin\'s natural texture and glow.',
        benefits: ['Texture enhancement', 'Natural glow', 'Significant improvement']
      }
    ]
  },
  {
    _type: 'service',
    title: 'Scars / Marks',
    slug: { current: 'scars-marks' },
    description: 'Advanced scar and mark reduction treatments',
    icon: 'gem',
    category: 'skin',
    order: 5,
    treatments: [
      {
        name: 'Laser Scar Removal',
        description: 'Visibly reduces the appearance of scars for smoother skin.',
        benefits: ['Visible reduction', 'Smoother skin', 'Advanced technology']
      },
      {
        name: 'Microneedling',
        description: 'Smooths the skin\'s surface and promotes the body\'s natural healing process.',
        benefits: ['Surface smoothing', 'Natural healing', 'Body stimulation']
      },
      {
        name: 'Chemical Peels',
        description: 'Gently helps fade surface-level scars and blemishes.',
        benefits: ['Gentle treatment', 'Surface fading', 'Blemish reduction']
      },
      {
        name: 'PRP Therapy',
        description: 'Uses your body\'s own platelets to effectively regenerate skin and repair marks.',
        benefits: ['Natural platelets', 'Skin regeneration', 'Effective repair']
      }
    ]
  },
  // Hair Services
  {
    _type: 'service',
    title: 'Hair Fall / Thinning',
    slug: { current: 'hair-fall-thinning' },
    description: 'Comprehensive hair loss treatment solutions',
    icon: 'wind',
    category: 'hair',
    order: 1,
    treatments: [
      {
        name: 'PRP Therapy',
        description: 'Stimulates natural hair growth using your own concentrated platelets.',
        benefits: ['Natural stimulation', 'Platelet concentration', 'Growth promotion']
      },
      {
        name: 'Mesotherapy',
        description: 'Delivers nutrient-rich injections to nourish and strengthen hair roots.',
        benefits: ['Nutrient delivery', 'Root nourishment', 'Hair strengthening']
      },
      {
        name: 'Topical Treatments / Serums',
        description: 'Clinically proven to reduce hair fall and improve hair density.',
        benefits: ['Clinically proven', 'Fall reduction', 'Density improvement']
      },
      {
        name: 'Laser Hair Therapy',
        description: 'Stimulates dormant hair follicles into a growth phase.',
        benefits: ['Follicle stimulation', 'Growth phase activation', 'Dormant awakening']
      }
    ]
  },
  {
    _type: 'service',
    title: 'Dandruff / Itchy Scalp',
    slug: { current: 'dandruff-itchy-scalp' },
    description: 'Scalp health and dandruff treatment solutions',
    icon: 'snowflake',
    category: 'hair',
    order: 2,
    treatments: [
      {
        name: 'Medicated Shampoos',
        description: 'Formulated to reduce flakes and soothe scalp irritation.',
        benefits: ['Flake reduction', 'Irritation soothing', 'Specialized formula']
      },
      {
        name: 'Scalp Treatments / Serums',
        description: 'Deeply nourishes the scalp and provides lasting relief from itching.',
        benefits: ['Deep nourishment', 'Itching relief', 'Lasting results']
      },
      {
        name: 'Laser / Light Therapy',
        description: 'Effectively reduces scalp inflammation and promotes a healthy environment.',
        benefits: ['Inflammation reduction', 'Healthy environment', 'Effective treatment']
      },
      {
        name: 'Oil Therapy / Massage',
        description: 'Improves overall scalp health and circulation naturally.',
        benefits: ['Health improvement', 'Circulation boost', 'Natural approach']
      }
    ]
  },
  {
    _type: 'service',
    title: 'Dry / Damaged Hair',
    slug: { current: 'dry-damaged-hair' },
    description: 'Hair repair and restoration treatments',
    icon: 'umbrella',
    category: 'hair',
    order: 3,
    treatments: [
      {
        name: 'Hair Spa / Deep Conditioning',
        description: 'Restores essential moisture and softness to dry hair.',
        benefits: ['Moisture restoration', 'Softness improvement', 'Deep treatment']
      },
      {
        name: 'Keratin / Protein Treatment',
        description: 'Strengthens the hair shaft and creates a smooth, frizz-free finish.',
        benefits: ['Shaft strengthening', 'Smooth finish', 'Frizz elimination']
      },
      {
        name: 'Oiling / Scalp Nourishment',
        description: 'Deeply hydrates the scalp and improves the health of your hair.',
        benefits: ['Deep hydration', 'Scalp nourishment', 'Hair health improvement']
      }
    ]
  },
  {
    _type: 'service',
    title: 'Premature Graying',
    slug: { current: 'premature-graying' },
    description: 'Solutions for premature hair graying',
    icon: 'paint-brush',
    category: 'hair',
    order: 4,
    treatments: [
      {
        name: 'Hair Pigmentation / Coloring',
        description: 'Provides safe methods to beautifully cover gray hair.',
        benefits: ['Safe methods', 'Beautiful coverage', 'Professional results']
      },
      {
        name: 'Nutritional Therapy',
        description: 'Offers targeted supplements to help delay the graying process.',
        benefits: ['Targeted supplements', 'Process delay', 'Nutritional support']
      },
      {
        name: 'Topical Treatments',
        description: 'Specialized formulas that may slow down the loss of hair pigment.',
        benefits: ['Specialized formulas', 'Pigment preservation', 'Slow process']
      }
    ]
  },
  // Body Services
  {
    _type: 'service',
    title: 'Stretch Marks',
    slug: { current: 'stretch-marks' },
    description: 'Advanced stretch mark reduction treatments',
    icon: 'gantt-chart',
    category: 'body',
    order: 1,
    treatments: [
      {
        name: 'Microneedling',
        description: 'Improves skin texture and visibly reduces the appearance of stretch marks.',
        benefits: ['Texture improvement', 'Visible reduction', 'Skin enhancement']
      },
      {
        name: 'Laser Therapy',
        description: 'Stimulates new collagen growth to effectively fade marks.',
        benefits: ['Collagen stimulation', 'Effective fading', 'New growth']
      },
      {
        name: 'Topical Treatments / Creams',
        description: 'Aids in skin regeneration to improve the look of stretch marks.',
        benefits: ['Regeneration aid', 'Appearance improvement', 'Skin support']
      }
    ]
  },
  {
    _type: 'service',
    title: 'Body Contouring / Toning',
    slug: { current: 'body-contouring-toning' },
    description: 'Non-surgical body shaping treatments',
    icon: 'person-standing',
    category: 'body',
    order: 2,
    treatments: [
      {
        name: 'Radiofrequency Therapy',
        description: 'Non-invasively tightens skin and shapes body areas for a toned look.',
        benefits: ['Non-invasive', 'Skin tightening', 'Body shaping']
      },
      {
        name: 'Ultrasound Therapy',
        description: 'A non-surgical method for effective body shaping.',
        benefits: ['Non-surgical', 'Effective shaping', 'Advanced technology']
      }
    ]
  },
  {
    _type: 'service',
    title: 'Skin Tightening',
    slug: { current: 'skin-tightening' },
    description: 'Advanced skin tightening and firming treatments',
    icon: 'stretch-horizontal',
    category: 'body',
    order: 3,
    treatments: [
      {
        name: 'Radiofrequency Therapy',
        description: 'Stimulates deep collagen production for naturally firmer skin.',
        benefits: ['Deep stimulation', 'Collagen production', 'Natural firming']
      },
      {
        name: 'Ultrasound / HIFU',
        description: 'Provides non-invasive lifting and tightening for a more youthful contour.',
        benefits: ['Non-invasive', 'Lifting effect', 'Youthful contour']
      },
      {
        name: 'Chemical Peels',
        description: 'Improves overall skin texture and elasticity.',
        benefits: ['Texture improvement', 'Elasticity boost', 'Overall enhancement']
      }
    ]
  }
]

export const sampleContactData = {
  _type: 'contactInfo',
  phone: '+91 8075 870 652',
  email: 'info@hathiraclinic.com',
  address: 'Near KSRTC Bus Stand, Kollam, Kerala, India',
  hours: {
    weekdays: 'Mon - Sat: 9:00 AM - 7:00 PM',
    sunday: 'Sunday: 10:00 AM - 5:00 PM'
  },
  whatsapp: '918075870652',
  socialMedia: {
    instagram: 'https://www.instagram.com/hathiraskincareclinic',
    facebook: '',
    twitter: ''
  },
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d16453.093332093034!2d76.94454869948635!3d8.526968165857365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d8.5309806!2d76.96127779999999!5e0!3m2!1sen!2sin!4v1760084176967!5m2!1sen!2sin'
}