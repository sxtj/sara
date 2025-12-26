import type { Metadata } from 'next'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'
import { site } from '@/config/site'
import { ContactForm } from '~/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact The Works Hair Salon by Sara in Manitou Springs. Call, email, or send a message to inquire and book.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container-narrow">
          <h1 className="font-display text-3xl mb-6">Contact</h1>
          <p className="text-muted-foreground mb-6">
            {site.bookingNote}. For fastest response, call or text.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <ContactForm />
            </div>
            <div className="card p-6">
              <h2 className="font-display text-2xl">Book & Visit</h2>
              <p className="mt-2 text-muted-foreground">
                Phone: <a className="underline" href={`tel:${site.phone}`}>{site.phone}</a>
                <br />
                Email: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <div className="mt-4 aspect-[16/9] w-full rounded-md overflow-hidden bg-muted" />
              <p className="mt-2 text-xs text-muted-foreground">Map placeholder — add Google Maps embed if desired.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
