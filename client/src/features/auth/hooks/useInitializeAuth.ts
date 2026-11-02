import { useEffect } from 'react'
import { AuthService } from '@/shared/api/services/AuthService'
import { useAuthStore } from '@/features/auth/store/auth.store'

const AuthInitializer = () => {
  const setUser = useAuthStore((state) => state.setUser)
  const clearAuth = useAuthStore((state) => state.clearAuth)

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Replace with the actual generated method for GET /auth/me.
        const response = await AuthService.getAuthMe()
        // console.log(response)
        setUser(response.data)
      } catch {
        clearAuth()
      }
    }

    initializeAuth()
  }, [setUser, clearAuth])

  return null
}

export default AuthInitializer