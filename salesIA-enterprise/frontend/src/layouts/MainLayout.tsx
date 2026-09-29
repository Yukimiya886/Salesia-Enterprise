import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function MainLayout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <Topbar />

      <main className="app-main">
        <div className="app-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}