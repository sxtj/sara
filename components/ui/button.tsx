"use client"
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:opacity-60 disabled:pointer-events-none'
    const variants = {
      primary: 'bg-foreground text-white hover:bg-foreground/90',
      secondary:
        'bg-accent text-foreground hover:bg-accent/90 border border-border',
      ghost: 'bg-transparent hover:bg-muted',
    } as const
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-11 px-5 text-base',
    } as const

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
