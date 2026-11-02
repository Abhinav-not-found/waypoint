import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { useAuthStore } from '@/features/auth/store/auth.store';

const AuthSessionHandler = () => {
    const navigate = useNavigate();
    const clearAuth = useAuthStore((state) => state.clearAuth);

    useEffect(() => {
        const handleSessionExpired = () => {
            clearAuth();
            // navigate('/login', { replace: true });
        };

        window.addEventListener('auth:session-expired', handleSessionExpired);

        return () => {
            window.removeEventListener(
                'auth:session-expired',
                handleSessionExpired
            );
        };
    }, [clearAuth, navigate]);

    return <Outlet />;
};

export default AuthSessionHandler;