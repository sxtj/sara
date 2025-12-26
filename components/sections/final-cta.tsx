import { site } from '@/config/site'
import { clsx } from 'clsx'

export function FinalCTA() {
  return (
    <section className="section" data-anim="fade">
      <div className="container-narrow text-center">
        <div className="card p-8">
          <h3 className="font-display text-2xl">Ready to feel like yourself—refined?</h3>
          <p className="mt-2 text-muted-foreground">{site.bookingNote}</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href={`tel:${site.phone}`}
              className={clsx(
                'inline-flex items-center justify-center h-11 px-5 text-base rounded-md',
                'bg-foreground text-white hover:bg-foreground/90 transition-colors'
              )}
            >
              Call {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className={clsx(
                'inline-flex items-center justify-center h-11 px-5 text-base rounded-md',
                'bg-accent text-foreground hover:bg-accent/90 border border-border transition-colors'
              )}
            >
              Email {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
