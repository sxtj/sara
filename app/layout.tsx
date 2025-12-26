import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { site } from '@/config/site'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL('https://theworkshairsalon.com'),
  title: {
    default: `${site.name} | Manitou Springs Hair Salon`,
    template: `%s | ${site.name}`,
  },
  description:
    'Boutique hair salon in Manitou Springs, CO. Thoughtful hair, calm experience. Call or message to book your appointment.',
  keywords: ['Hair salon Manitou Springs', 'Boutique salon', 'Calm experience', 'Haircuts', 'Color', 'Styling'],
  openGraph: {
    title: `${site.name} | Manitou Springs Hair Salon`,
    description:
      'Boutique hair salon in Manitou Springs, CO. Thoughtful hair, calm experience. Call or message to book your appointment.',
    type: 'website',
    locale: 'en_US',
    siteName: site.name,
    url: 'https://theworkshairsalon.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#FAF7F2',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: site.name,
    description: site.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location,
      addressRegion: 'CO',
      addressCountry: 'US',
    },
    url: 'https://theworkshairsalon.com',
    telephone: site.phone,
    email: site.email,
    areaServed: 'Manitou Springs, CO',
  }

  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

