import { create } from 'zustand';
import type { User } from '@/shared/api'

type AuthStatus = 'checking' | 'authenticated' | 'unauthenticated';

interface AuthState {
  user: User | null;
  status: AuthStatus;

  setUser: (user: User) => void;
  clearAuth: () => void;
  setStatus: (status: AuthStatus) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  status: 'checking',

  setUser: (user) =>
    set({
      user,
      status: 'authenticated',
    }),

  clearAuth: () =>
    set({
      user: null,
      status: 'unauthenticated',
    }),

  setStatus: (status) => set({ status }),
}));
