import { useEffect } from 'react';
import { AuthService } from '@/shared/api/services/AuthService';
import { useAuthStore } from '@/features/auth/store/auth.store';

const AuthInitializer = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const response = await AuthService.getAuthMe();
        setUser(response.data);
      } catch {
        clearAuth();
      }
    };

    initializeAuth();
  }, [setUser, clearAuth]);

  return null;
};

export default AuthInitializer;
