import { Navigate, Outlet } from 'react-router'
import { useAuthStore } from '@/features/auth/store/auth.store'

const ProtectedRoute = () => {
  const status = useAuthStore((state) => state.status)

  if (status === 'checking') {
    return <div>Checking authentication...</div>
  }

  if (status === 'unauthenticated') {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default ProtectedRoute