'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity/sanity.config'

// Set the right `viewport`, `robots` and `referer` meta tags
export { metadata } from 'next-sanity/studio/metadata'

export default function StudioPage() {
  return <NextStudio config={config} />
}
