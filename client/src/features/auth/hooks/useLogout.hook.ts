import { AuthService } from '@/shared/api';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { useAuthStore } from '@/features/auth/store/auth.store';

const useLogout = () => {
  const navigate = useNavigate();
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const handleLogout = async () => {
    try {
      await AuthService.postAuthLogout();

      clearAuth();
      navigate('/', { replace: true });

      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Failed to logout. Please try again.');
    }
  };
  return {
    handleLogout,
  };
};
export default useLogout;
