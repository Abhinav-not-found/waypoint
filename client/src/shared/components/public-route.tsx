import { Navigate, Outlet } from 'react-router'
import { useAuthStore } from '@/features/auth/store/auth.store'

const PublicRoute = () => {
  const status = useAuthStore((state) => state.status)

  if (status === 'checking') {
    return <div>Checking authentication...</div>
  }

  if (status === 'authenticated') {
    return <Navigate to="/home" replace />
  }

  return <Outlet />
}

export default PublicRoute