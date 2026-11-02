import AuthInitializer from '@/features/auth/hooks/useInitializeAuth'
import AuthSessionHandler from '@/features/auth/ui/components/AuthSessionHandler'
import LoginPage from '@/features/auth/ui/pages/LoginPage'
import RegisterPage from '@/features/auth/ui/pages/RegisterPage'
import HomePage from '@/features/home/ui/pages/HomePage'
import LandingPage from '@/features/marketing/ui/page/LandingPage'
import ProtectedRoute from '@/shared/components/protected-route'
import PublicRoute from '@/shared/components/public-route'
import { createBrowserRouter, RouterProvider } from 'react-router'

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      element: <AuthSessionHandler />,
      children: [
        {
          element: <PublicRoute />,
          children: [
            { path: '/', element: <LandingPage /> },
            { path: '/login', element: <LoginPage /> },
            { path: '/register', element: <RegisterPage /> },
          ],
        },
        {
          path: '/home',
          element: <ProtectedRoute />,
          children: [
            {
              path: '',
              element: <HomePage />
            }
          ]
        },

      ]
    }
  ])
  return (
    <>
      <AuthInitializer />
      <RouterProvider router={router} ></RouterProvider>
    </>
  )
}

export default AppRoute