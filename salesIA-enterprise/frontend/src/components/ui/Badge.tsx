import type { ReactNode } from 'react'

type BadgeVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
}

export default function Badge({
  children,
  variant = 'neutral',
}: BadgeProps) {
  return (
    <span className={`ui-badge ui-badge-${variant}`}>
      {children}
    </span>
  )
}export {}
