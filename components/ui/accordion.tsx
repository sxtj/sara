"use client"
import { useState, ReactNode } from 'react'
import { clsx } from 'clsx'

type Item = { id: string; trigger: ReactNode; content: ReactNode }

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <div className="divide-y divide-border rounded-lg border border-border">
      {items.map((it) => {
        const isOpen = open === it.id
        return (
          <div key={it.id}>
            <button
              className={clsx(
                'w-full text-left px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-muted/40'
              )}
              onClick={() => setOpen(isOpen ? null : it.id)}
              aria-expanded={isOpen}
            >
              <span className="font-medium">{it.trigger}</span>
              <span className="ml-4 text-muted-foreground">{isOpen ? '–' : '+'}</span>
            </button>
            {isOpen && (
              <div className="px-4 sm:px-6 pb-4 text-muted-foreground">{it.content}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}
