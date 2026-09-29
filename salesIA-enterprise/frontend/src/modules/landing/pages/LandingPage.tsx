import { Link } from 'react-router-dom'
import Button from '../../../components/ui/Button'

export default function LandingPage() {
  return (
    <main className="landing-page">
      <section className="landing-hero">
        <div className="landing-brand">
          <div className="landing-logo">S</div>
          <span>SalesIA Enterprise</span>
        </div>

        <div className="landing-content">
          <p className="landing-eyebrow">
            Gestión comercial inteligente
          </p>

          <h1>
            Gestiona tus ventas.
            <br />
            <span>Analiza tu negocio.</span>
          </h1>

          <p className="landing-description">
            Plataforma empresarial para administrar ventas, clientes,
            productos, inventario y análisis estadístico desde un solo lugar.
          </p>

          <div className="landing-actions">
            <Link to="/login">
              <Button>Iniciar sesión</Button>
            </Link>

            <a
              href="#caracteristicas"
              className="landing-secondary-action"
            >
              Conocer el sistema
            </a>
          </div>
        </div>
      </section>

      <section
        id="caracteristicas"
        className="landing-features"
      >
        <div>
          <strong>Ventas</strong>
          <span>Gestiona tus operaciones comerciales.</span>
        </div>

        <div>
          <strong>Analytics</strong>
          <span>Convierte tus datos en información útil.</span>
        </div>

        <div>
          <strong>Inventario</strong>
          <span>Controla productos y existencias.</span>
        </div>

        <div>
          <strong>Insights</strong>
          <span>Obtén información para apoyar tus decisiones.</span>
        </div>
      </section>
    </main>
  )
}