import { site } from '@/config/site'

export function LocationCallout() {
  return (
    <section className="section" data-anim="fade">
      <div className="container-narrow text-center">
        <div className="card p-6">
          <h3 className="font-display text-2xl">Located in {site.location}</h3>
          <p className="mt-2 text-muted-foreground">
            Street address by appointment. Parking and directions provided upon booking.
          </p>
          <div className="mt-4 aspect-[16/9] w-full rounded-md overflow-hidden bg-muted"></div>
        </div>
      </div>
    </section>
  )
}

