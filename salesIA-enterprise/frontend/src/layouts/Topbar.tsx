import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function Topbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Limpiar cualquier sesión temporal del navegador
    localStorage.removeItem('salesia_token')
    localStorage.removeItem('salesia_user')

    // Volver al login
    navigate('/login')
  }

  return (
    <header className="app-topbar">
      <div className="topbar-left">
        <div>
          <p className="topbar-eyebrow">Sistema de gestión comercial</p>
          <h1>SalesIA Enterprise</h1>
        </div>
      </div>

      <div className="topbar-right">
        <button
          className="topbar-icon-button"
          aria-label="Notificaciones"
        >
          🔔
        </button>

        <div className="topbar-user">
          <div className="topbar-avatar">U</div>

          <div className="topbar-user-info">
            <strong>Usuario</strong>
            <span>Administrador</span>
          </div>
        </div>

        <Button
          variant="ghost"
          type="button"
          onClick={handleLogout}
        >
          Cerrar sesión
        </Button>
      </div>
    </header>
  )
}