import type { ReactNode } from 'react'

interface TableColumn<T> {
  key: string
  header: string
  render?: (row: T) => ReactNode
}

interface TableProps<T> {
  columns: TableColumn<T>[]
  data: T[]
  rowKey: (row: T) => string | number
  emptyMessage?: string
}

export default function Table<T>({
  columns,
  data,
  rowKey,
  emptyMessage = 'No hay registros para mostrar.',
}: TableProps<T>) {
  return (
    <div className="ui-table-wrapper">
      <table className="ui-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                className="ui-table-empty"
                colSpan={columns.length}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr key={rowKey(row)}>
                {columns.map((column) => (
                  <td key={column.key}>
                    {column.render
                      ? column.render(row)
                      : String(
                          (row as Record<string, unknown>)[column.key] ?? '',
                        )}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}export {}
