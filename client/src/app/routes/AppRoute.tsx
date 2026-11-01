import LandingPage from '@/features/marketing/ui/page/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router'

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <LandingPage />
    }
  ])
  return (
    <RouterProvider router={router} ></RouterProvider>
  )
}

export default AppRoute