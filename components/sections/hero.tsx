import Link from 'next/link'
import Image from 'next/image'
import { clsx } from 'clsx'
import { site } from '@/config/site'

export function Hero() {
  return (
    <section className="section" data-anim="fade">
      <div className="container-wide grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight tracking-tight">
            Thoughtful hair. Calm experience.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-prose">
            A boutique salon in {site.location} focused on quality, creativity, and a
            warm, welcoming atmosphere.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="/contact"
              className={clsx(
                'inline-flex items-center justify-center h-11 px-5 text-base rounded-md',
                'bg-foreground text-white hover:bg-foreground/90 transition-colors'
              )}
            >
              Book an Appointment
            </a>
            <Link
              href="/services"
              className={clsx(
                'inline-flex items-center justify-center h-11 px-5 text-base rounded-md',
                'bg-accent text-foreground hover:bg-accent/90 border border-border transition-colors'
              )}
            >
              View Services
            </Link>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {site.bookingNote} — call <a className="underline" href={`tel:${site.phone}`}>{site.phone}</a>
          </p>
        </div>
        <div className="relative h-[420px] rounded-lg overflow-hidden border border-border">
          <Image
            src="/images/hero.svg"
            alt="Calm, modern salon interior"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
