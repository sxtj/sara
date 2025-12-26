"use server"
import { revalidatePath } from 'next/cache'

export type FormState = { ok: boolean; message: string }

export async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = String(formData.get('name') || '')
  const email = String(formData.get('email') || '')
  const phone = String(formData.get('phone') || '')
  const message = String(formData.get('message') || '')

  if (!name || !email || !message) {
    return { ok: false, message: 'Please fill in name, email, and message.' }
  }

  console.log('[Contact] New message', { name, email, phone, message })

  revalidatePath('/contact')

  return { ok: true, message: 'Thanks for reaching out — we will get back to you shortly.' }
}

