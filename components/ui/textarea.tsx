"use client"
import { forwardRef, TextareaHTMLAttributes } from 'react'
import { clsx } from 'clsx'

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={clsx(
      'w-full min-h-[120px] rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40',
      className
    )}
    {...props}
  />
))
Textarea.displayName = 'Textarea'
