import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormValues } from '@/features/auth/types/register.types';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '@/shared/api/services/AuthService';
import { ApiError, type AuthResponse } from '@/shared/api';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';
import { useAuthStore } from '@/features/auth/store/auth.store';

const useRegister = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const registerMutation = useMutation<AuthResponse, ApiError, RegisterFormValues>({
    mutationFn: (data: RegisterFormValues) => {
      return AuthService.postAuthRegister(data);
    },
    onSuccess: (response) => {
      // console.log('Registration successful:', response);
      form.reset();

      setUser(response.data.user);

      toast.success(response.message);
      navigate('/home', { replace: true });
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

  const onSubmit = (data: RegisterFormValues) => {
    registerMutation.mutate(data);
  };

  return {
    form,
    registerMutation,
    onSubmit,
  };
};

export default useRegister;
