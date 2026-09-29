import type { SelectHTMLAttributes } from 'react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: SelectOption[]
  error?: string
}

export default function Select({
  label,
  options,
  error,
  id,
  className = '',
  ...props
}: SelectProps) {
  return (
    <div className={`ui-field ${className}`}>
      {label && (
        <label className="ui-field-label" htmlFor={id}>
          {label}
        </label>
      )}

      <select
        id={id}
        className={`ui-select ${error ? 'ui-select-error' : ''}`}
        aria-invalid={Boolean(error)}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <span className="ui-field-error">{error}</span>}
    </div>
  )
}export {}
