import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import DashboardPage from '../modules/dashboard/pages/DashboardPage'
import LandingPage from '../modules/landing/pages/LandingPage'
import LoginPage from '../modules/auth/pages/LoginPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
    ],
  },
])