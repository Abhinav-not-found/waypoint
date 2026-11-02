import LoginPage from '@/features/auth/ui/pages/LoginPage'
import RegisterPage from '@/features/auth/ui/pages/RegisterPage'
import HomePage from '@/features/home/ui/pages/HomePage'
import LandingPage from '@/features/marketing/ui/page/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router'

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <LandingPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/register',
      element: <RegisterPage />
    },
    {
      path: '/home',
      element: <HomePage />
    },

  ])
  return (
    <RouterProvider router={router} ></RouterProvider>
  )
}

export default AppRoute