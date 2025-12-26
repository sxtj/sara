import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A calm, minimal gallery highlighting hair detail and salon atmosphere.',
}

const images = Array.from({ length: 12 }).map((_, i) => ({
  src: `/images/gallery-${(i % 6) + 1}.svg`,
  alt: `Gallery image ${i + 1}`,
}))

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container-wide">
          <h1 className="font-display text-3xl mb-6">Gallery</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

