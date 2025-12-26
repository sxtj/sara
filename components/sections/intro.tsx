export function Intro() {
  return (
    <section className="section" data-anim="fade">
      <div className="container-narrow grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h2 className="font-display text-3xl">Meet Sara</h2>
          <p className="mt-3 text-muted-foreground max-w-prose">
            Sara believes the best hair starts with listening. With a focus on
            quality, craft, and calm energy, each guest leaves feeling seen and
            beautifully themselves.
          </p>
        </div>
        <ul className="space-y-3">
          <li className="card p-4"><span className="font-medium">Quality:</span> considered, meticulous techniques</li>
          <li className="card p-4"><span className="font-medium">Creativity:</span> tailored to your lifestyle</li>
          <li className="card p-4"><span className="font-medium">Comfort:</span> warm, welcoming, unhurried</li>
        </ul>
      </div>
    </section>
  )
}

