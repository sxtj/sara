import { Header } from '~/components/header'
import { Footer } from '~/components/footer'
import { Hero } from '~/components/sections/hero'
import { BrandStatement } from '~/components/sections/brand-statement'
import { ServicesPreview } from '~/components/sections/services-preview'
import { GalleryPreview } from '~/components/sections/gallery-preview'
import { Intro } from '~/components/sections/intro'
import { Testimonials } from '~/components/sections/testimonials'
import { LocationCallout } from '~/components/sections/location-callout'
import { FinalCTA } from '~/components/sections/final-cta'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <ServicesPreview />
        <GalleryPreview />
        <Intro />
        <Testimonials />
        <LocationCallout />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

