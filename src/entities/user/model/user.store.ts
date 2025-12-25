import { create } from 'zustand';
import type { TUser } from './user.types';

export const useUserStore = create<{
  user: TUser | null;
  setUser: (user: TUser) => void;
  logout: () => void;
}>((set) => ({
  user: null,
  token: null,
  setUser: (user: TUser) => set((state) => ({ ...state, user })),
  logout: () => set(() => ({})),
}));
