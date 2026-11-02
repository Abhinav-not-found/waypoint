import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '@/shared/api/services/AuthService';
import { ApiError, type AuthResponse } from '@/shared/api';
import { toast } from 'sonner';
import { loginSchema, type LoginFormValues } from '@/features/auth/types/login.types';
import { useNavigate } from 'react-router';
import { useAuthStore } from '@/features/auth/store/auth.store';

const useLogin = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginMutation = useMutation<AuthResponse, ApiError, LoginFormValues>({
    mutationFn: (data: LoginFormValues) => {
      return AuthService.postAuthLogin(data);
    },
    onSuccess: (response) => {
      console.log('Login successful:', response);

      form.reset();

      setUser(response.data.user);

      toast.success(response.message);
      navigate('/home');
    },
    onError: (error) => {
      console.log(error);

      const message = error.body.message || error.message || 'Something went wrong.';

      form.setError('root', {
        message: message,
      });

      toast.error(message);
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    loginMutation.mutate(data);
  };

  return {
    form,
    loginMutation,
    onSubmit,
  };
};

export default useLogin;
