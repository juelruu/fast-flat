import { create } from 'zustand';
import type { TUser } from './user.types';
import { getAuthToken, setAuth } from '@/shared';

export const useUserStore = create<{
  user: TUser | null;
  authorizedTime: number | null;
  setUser: (user: TUser) => void;
  setAuth: (data: {
  access_token: string,
  token_type: string
}) => void;
  logout: () => void;
}>((set) => ({
  user: null,
  authorizedTime: getAuthToken() ? Date.now() : null,
  setAuth: (data) => {
    set((state) => ({ ...state, authorizedTime: Date.now() }));
    setAuth(data);
  },
  setUser: (user: TUser) => set((state) => ({ ...state, user })),
  logout: () => set(() => ({})),
}));
