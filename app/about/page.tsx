import type { Metadata } from 'next'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'

export const metadata: Metadata = {
  title: 'About',
  description: 'Sara’s approach to hair: quality, creativity, and a calm, welcoming experience in a boutique salon setting.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container-narrow">
          <h1 className="font-display text-3xl mb-6">About</h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground">
              The Works Hair Salon by Sara is a boutique space created for calm, intentional hair care. Sara believes great hair begins with attentive listening and thoughtful design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="card p-6">
              <h2 className="font-display text-2xl">Approach</h2>
              <p className="mt-2 text-muted-foreground">
                Appointments are unhurried and personal. We talk through your goals, lifestyle, and maintenance preferences, then craft a plan that fits you beautifully.
              </p>
            </div>
            <div className="card p-6">
              <h2 className="font-display text-2xl">Boutique Experience</h2>
              <p className="mt-2 text-muted-foreground">
                The studio is designed for comfort—soft light, warm neutrals, and simple details—so you can relax and enjoy the process.
              </p>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-medium">Quality</h3>
              <p className="text-sm text-muted-foreground mt-1">Meticulous techniques and premium products.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-medium">Creativity</h3>
              <p className="text-sm text-muted-foreground mt-1">Tailored design that feels like you.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-medium">Comfort</h3>
              <p className="text-sm text-muted-foreground mt-1">A calm, welcoming environment.</p>
            </div>
          </div>

          <div className="mt-12 card p-6">
            <h2 className="font-display text-2xl">What to Expect</h2>
            <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-1">
              <li>Warm welcome and consultation</li>
              <li>Calm, focused service without rush</li>
              <li>Thoughtful finishing and care tips</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

