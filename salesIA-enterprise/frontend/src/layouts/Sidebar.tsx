import { NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Dashboard', path: '/dashboard', icon: '▦' },
  { label: 'Clientes', path: '/clientes', icon: '◉' },
  { label: 'Productos', path: '/productos', icon: '□' },
  { label: 'Ventas', path: '/ventas', icon: '$' },
  { label: 'Inventario', path: '/inventario', icon: '▤' },
  { label: 'Analytics', path: '/analytics', icon: '◒' },
  { label: 'Probabilidad', path: '/probabilidad', icon: '∿' },
  { label: 'Insights', path: '/insights', icon: '✦' },
  { label: 'Reportes', path: '/reportes', icon: '▥' },
]

export default function Sidebar() {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo">S</div>

        <div>
          <strong>SalesIA</strong>
          <span>Enterprise</span>
        </div>
      </div>

      <nav className="sidebar-navigation" aria-label="Navegación principal">
        <p className="sidebar-section-title">MENÚ PRINCIPAL</p>

        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`
            }
          >
            <span className="sidebar-link-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-avatar">U</div>

          <div>
            <strong>Usuario</strong>
            <span>Sesión activa</span>
          </div>
        </div>
      </div>
    </aside>
  )
}export {}
