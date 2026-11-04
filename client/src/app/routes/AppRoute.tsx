import PrivateRoutes from '@/app/routes/PrivateRoutes'
import PublicRoutes from '@/app/routes/PublicRoutes'
import AuthInitializer from '@/features/auth/hooks/useInitializeAuth'
import AuthSessionHandler from '@/features/auth/ui/components/AuthSessionHandler'
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
          children: PublicRoutes,
        },
        {
          path: '/home',
          element: <ProtectedRoute />,
          children: PrivateRoutes
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