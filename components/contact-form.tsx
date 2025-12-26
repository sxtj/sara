"use client"
import { useActionState } from 'react'
import { submitContact, type FormState } from '../app/contact/actions'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'

export function ContactForm() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    submitContact,
    { ok: false, message: '' }
  )

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label className="text-sm">Name</label>
        <Input name="name" placeholder="Your name" required aria-required />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm">Email</label>
          <Input name="email" type="email" placeholder="you@example.com" required aria-required />
        </div>
        <div>
          <label className="text-sm">Phone</label>
          <Input name="phone" type="tel" placeholder="(###) ###-####" />
        </div>
      </div>
      <div>
        <label className="text-sm">Message</label>
        <Textarea name="message" placeholder="How can we help?" required aria-required />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center h-10 px-4 text-sm rounded-md bg-foreground text-white hover:bg-foreground/90 transition-colors disabled:opacity-60"
        >
          {pending ? 'Sending…' : 'Send Message'}
        </button>
        {state.message && (
          <p className={state.ok ? 'text-green-700' : 'text-red-700'}>{state.message}</p>
        )}
      </div>
    </form>
  )
}
