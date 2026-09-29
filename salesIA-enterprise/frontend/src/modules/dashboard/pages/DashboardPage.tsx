import Card from '../../../components/ui/Card'
import Badge from '../../../components/ui/Badge'

const kpis = [
  {
    label: 'Ventas del mes',
    value: 'S/ 48,250',
    change: '+12.5%',
    variant: 'success' as const,
  },
  {
    label: 'Pedidos',
    value: '328',
    change: '+8.2%',
    variant: 'success' as const,
  },
  {
    label: 'Clientes',
    value: '1,284',
    change: '+5.4%',
    variant: 'primary' as const,
  },
  {
    label: 'Stock bajo',
    value: '18',
    change: 'Requiere atención',
    variant: 'warning' as const,
  },
]

const recentSales = [
  {
    id: '#V-1048',
    customer: 'Empresa Andina SAC',
    amount: 'S/ 2,450',
    status: 'Completada',
  },
  {
    id: '#V-1047',
    customer: 'Comercial Lima Norte',
    amount: 'S/ 1,820',
    status: 'Pendiente',
  },
  {
    id: '#V-1046',
    customer: 'Distribuidora Central',
    amount: 'S/ 3,240',
    status: 'Completada',
  },
  {
    id: '#V-1045',
    customer: 'Grupo Industrial Perú',
    amount: 'S/ 980',
    status: 'Completada',
  },
]

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <section className="page-heading">
        <div>
          <p className="page-eyebrow">Resumen general</p>
          <h2>Dashboard</h2>
          <p>
            Visualiza el estado comercial de tu empresa en un solo lugar.
          </p>
        </div>

        <Badge variant="success">Sistema operativo</Badge>
      </section>

      <section className="dashboard-kpis">
        {kpis.map((kpi) => (
          <Card key={kpi.label}>
            <div className="kpi-card">
              <span className="kpi-label">{kpi.label}</span>
              <strong className="kpi-value">{kpi.value}</strong>
              <Badge variant={kpi.variant}>{kpi.change}</Badge>
            </div>
          </Card>
        ))}
      </section>

      <section className="dashboard-grid">
        <Card
          title="Resumen de ventas"
          description="Comportamiento de ventas durante el periodo actual."
        >
          <div className="sales-chart-placeholder">
            <div className="chart-bars">
              {[45, 65, 52, 78, 62, 88, 72, 95, 80, 100, 86, 92].map(
                (height, index) => (
                  <div
                    key={index}
                    className="chart-bar"
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>

            <div className="chart-labels">
              <span>Sem 1</span>
              <span>Sem 2</span>
              <span>Sem 3</span>
              <span>Sem 4</span>
            </div>
          </div>
        </Card>

        <Card
          title="Insights"
          description="Información destacada del negocio."
        >
          <div className="insight-list">
            <div className="insight-item">
              <span className="insight-icon">↗</span>
              <div>
                <strong>Ventas en crecimiento</strong>
                <p>Las ventas aumentaron respecto al periodo anterior.</p>
              </div>
            </div>

            <div className="insight-item">
              <span className="insight-icon">!</span>
              <div>
                <strong>Productos con stock bajo</strong>
                <p>Existen productos que requieren reposición.</p>
              </div>
            </div>

            <div className="insight-item">
              <span className="insight-icon">★</span>
              <div>
                <strong>Clientes recurrentes</strong>
                <p>Se identificó actividad positiva de clientes frecuentes.</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <Card
        title="Ventas recientes"
        description="Últimas operaciones registradas en el sistema."
      >
        <div className="recent-sales">
          {recentSales.map((sale) => (
            <div className="recent-sale" key={sale.id}>
              <div>
                <strong>{sale.id}</strong>
                <span>{sale.customer}</span>
              </div>

              <strong>{sale.amount}</strong>

              <Badge
                variant={
                  sale.status === 'Completada' ? 'success' : 'warning'
                }
              >
                {sale.status}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}export {}
