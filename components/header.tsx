import Link from 'next/link'
import { site } from '@/config/site'
import { clsx } from 'clsx'

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <div className="container-wide h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="h-8 w-8 rounded-md bg-foreground text-white grid place-items-center text-xs tracking-widest">
            TW
          </div>
          <span className="font-display text-base sm:text-lg tracking-tight no-underline hover:no-underline">
            {site.shortName}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/contact"
            className={clsx(
              'inline-flex items-center justify-center h-9 px-3 text-sm rounded-md',
              'bg-foreground text-white hover:bg-foreground/90 transition-colors'
            )}
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  )
}
