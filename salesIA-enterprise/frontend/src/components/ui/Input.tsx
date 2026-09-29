import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export default function Input({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className={`ui-field ${className}`}>
      {label && (
        <label className="ui-field-label" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        id={id}
        className={`ui-input ${error ? 'ui-input-error' : ''}`}
        aria-invalid={Boolean(error)}
        {...props}
      />

      {error ? (
        <span className="ui-field-error">{error}</span>
      ) : helperText ? (
        <span className="ui-field-helper">{helperText}</span>
      ) : null}
    </div>
  )
}export {}
