import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
  loading?: boolean
}

export default function Button({
  variant = 'primary',
  children,
  loading = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`ui-button ui-button-${variant} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Cargando...' : children}
    </button>
  )
}export {}
