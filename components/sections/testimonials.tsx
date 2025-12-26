import { Accordion } from '~/components/ui/accordion'

const items = [
  {
    id: 't1',
    trigger: '“Calm, thoughtful, and the best cut I’ve had.”',
    content: '— Sample testimonial',
  },
  {
    id: 't2',
    trigger: '“Color that grows out beautifully every time.”',
    content: '— Sample testimonial',
  },
  {
    id: 't3',
    trigger: '“You feel instantly at ease in the salon.”',
    content: '— Sample testimonial',
  },
]

export function Testimonials() {
  return (
    <section className="section" data-anim="fade">
      <div className="container-narrow">
        <h2 className="font-display text-3xl mb-4">Testimonials</h2>
        <p className="text-sm text-muted-foreground mb-4">Sample testimonials</p>
        <Accordion items={items} />
      </div>
    </section>
  )
}

