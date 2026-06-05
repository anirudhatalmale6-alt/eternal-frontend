'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  token: string | null;
  displayName: string | null;
  email: string | null;
  isLoggedIn: boolean;
  login: (token: string, displayName: string, email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      displayName: null,
      email: null,
      isLoggedIn: false,
      login: (token, displayName, email) =>
        set({ token, displayName, email, isLoggedIn: true }),
      logout: () =>
        set({ token: null, displayName: null, email: null, isLoggedIn: false }),
    }),
    { name: 'eternal-auth' }
  )
);
