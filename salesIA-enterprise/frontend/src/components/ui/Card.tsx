import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  title?: string
  description?: string
  className?: string
}

export default function Card({
  children,
  title,
  description,
  className = '',
}: CardProps) {
  return (
    <section className={`ui-card ${className}`}>
      {(title || description) && (
        <header className="ui-card-header">
          {title && <h2 className="ui-card-title">{title}</h2>}
          {description && (
            <p className="ui-card-description">{description}</p>
          )}
        </header>
      )}

      <div className="ui-card-content">{children}</div>
    </section>
  )
}export {}
