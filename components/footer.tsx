import Link from 'next/link'
import { site } from '@/config/site'

export function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="container-wide py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-xl mb-2">{site.shortName}</div>
          <p className="text-sm text-muted-foreground max-w-sm">
            {site.description}
          </p>
        </div>
        <div>
          <div className="font-medium mb-2">Visit</div>
          <p className="text-sm text-muted-foreground">
            {site.location}
            <br />
            Colorado
          </p>
        </div>
        <div>
          <div className="font-medium mb-2">Contact</div>
          <p className="text-sm text-muted-foreground">
            Phone: <a href={`tel:${site.phone}`} className="hover:underline">{site.phone}</a>
            <br />
            Email: <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
          </p>
        </div>
        <div>
          <div className="font-medium mb-2">Links</div>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6">
        <div className="container-wide text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Made in Manitou Springs, CO</p>
        </div>
      </div>
    </footer>
  )
}

