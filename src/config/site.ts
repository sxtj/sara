export const site = {
  name: 'The Works Hair Salon by Sara LLC',
  shortName: 'The Works Hair Salon',
  location: 'Manitou Springs, CO',
  phone: '(719) 555-0149',
  email: 'hello@theworkshairsalon.com',
  bookingNote: 'Call or message to book',
  description:
    'Boutique hair salon focused on quality, creativity, and a calm, welcoming experience.',
  social: {
    instagram: '#',
  },
} as const

export type SiteConfig = typeof site

