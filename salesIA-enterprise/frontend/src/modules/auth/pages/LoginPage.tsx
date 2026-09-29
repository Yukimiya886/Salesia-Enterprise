import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../components/ui/Button'
import Input from '../../../components/ui/Input'
import Card from '../../../components/ui/Card'

export default function LoginPage() {
  const navigate = useNavigate()

  const [dni, setDni] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    if (!dni || !password) {
      setError('Ingresa tu DNI y contraseña.')
      return
    }

    // Temporal: posteriormente se conectará con POST /auth/login.
    navigate('/dashboard')
  }

  return (
    <main className="login-page">
      <section className="login-brand-panel">
        <div className="login-brand">
          <div className="landing-logo">S</div>

          <div>
            <strong>SalesIA</strong>
            <span>Enterprise</span>
          </div>
        </div>

        <div className="login-brand-content">
          <p>GESTIÓN COMERCIAL INTELIGENTE</p>

          <h1>
            Todo tu negocio,
            <br />
            en un solo lugar.
          </h1>

          <span>
            Gestiona ventas, clientes, inventario y análisis
            desde una plataforma empresarial.
          </span>
        </div>
      </section>

      <section className="login-form-panel">
        <div className="login-form-container">
          <Link to="/" className="login-back">
            ← Volver al inicio
          </Link>

          <div className="login-heading">
            <h1>Bienvenido</h1>
            <p>Ingresa tus credenciales para continuar.</p>
          </div>

          <Card>
            <form className="login-form" onSubmit={handleSubmit}>
              <Input
                id="dni"
                label="DNI"
                placeholder="Ingresa tu DNI"
                value={dni}
                onChange={(event) => setDni(event.target.value)}
                maxLength={8}
                inputMode="numeric"
                autoComplete="username"
              />

              <Input
                id="password"
                label="Contraseña"
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
              />

              {error && (
                <div className="login-error">
                  {error}
                </div>
              )}

              <Button type="submit">
                Iniciar sesión
              </Button>
            </form>
          </Card>

          <p className="login-footer">
            SalesIA Enterprise · Plataforma de gestión comercial
          </p>
        </div>
      </section>
    </main>
  )
}export {}
