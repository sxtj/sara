import { Card, CardContent, CardHeader } from '~/components/ui/card'
import Link from 'next/link'

const services = [
  { title: 'Haircuts', desc: 'Tailored cuts for every texture.' },
  { title: 'Color Services', desc: 'Soft dimension or bold statements.' },
  { title: 'Highlights & Balayage', desc: 'Sunlit, seamless brightness.' },
  { title: 'Styling', desc: 'Polished everyday or event looks.' },
  { title: 'Special Occasion', desc: 'Refined hair for memorable days.' },
]

export function ServicesPreview() {
  return (
    <section className="section" data-anim="fade">
      <div className="container-wide">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="font-display text-3xl">Services</h2>
          <Link href="/services" className="text-sm underline">View all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
    </section>
  )
}

