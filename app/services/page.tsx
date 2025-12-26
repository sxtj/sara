import type { Metadata } from 'next'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'
import { Card, CardContent, CardHeader } from '~/components/ui/card'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Haircuts, color, highlights/balayage, styling, and special occasion hair in Manitou Springs.',
}

const services = [
  {
    title: 'Haircuts',
    desc: 'Tailored cuts for every texture and lifestyle — classic to modern, always wearable.',
  },
  {
    title: 'Color Services',
    desc: 'From soft, natural color to creative expressions. Gentle, thoughtful application for healthy hair.',
  },
  {
    title: 'Highlights / Balayage',
    desc: 'Seamless brightness with dimension. Sun-kissed, low maintenance results that grow gracefully.',
  },
  {
    title: 'Styling',
    desc: 'Polished blowouts, waves, and finishing touches for everyday or a night out.',
  },
  {
    title: 'Special Occasion Hair',
    desc: 'Refined styles for weddings and events. Trials available upon request.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container-narrow">
          <h1 className="font-display text-3xl mb-6">Services</h1>
          <p className="text-muted-foreground mb-8">
            We focus on refined, wearable hair. Pricing is discussed during consultation to ensure services are tailored to your needs.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <Card key={s.title}>
                <CardHeader>
                  <div className="text-lg font-medium">{s.title}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

