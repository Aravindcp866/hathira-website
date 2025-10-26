import { service } from './service'
import { treatment } from './treatment'
import { contactInfo } from './contactInfo'
import { hero } from './hero'
import { stackcard } from './stackcard'
import { faq } from './faq'
import { testfaq } from './testfaq'

console.log('FAQ schema:', faq)
console.log('Test FAQ schema:', testfaq)

export const schemaTypes = [service, treatment, contactInfo, hero, stackcard, faq, testfaq]

