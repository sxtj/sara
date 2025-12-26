import Image from 'next/image'
import Link from 'next/link'

const images = [
  { src: '/images/gallery-1.svg', alt: 'Soft waves' },
  { src: '/images/gallery-2.svg', alt: 'Salon details' },
  { src: '/images/gallery-3.svg', alt: 'Warm light' },
  { src: '/images/gallery-4.svg', alt: 'Texture focus' },
  { src: '/images/gallery-5.svg', alt: 'Calm corner' },
  { src: '/images/gallery-6.svg', alt: 'Natural tones' },
]

export function GalleryPreview() {
  return (
    <section className="section" data-anim="fade">
      <div className="container-wide">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="font-display text-3xl">Gallery</h2>
          <Link href="/gallery" className="text-sm underline">See more</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div key={img.src} className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

