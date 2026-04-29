import { create } from 'zustand';

interface AppState {
  count: number;
  isAuthenticated: boolean;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  login: () => void;
  logout: () => void;
}

export const useStore = create<AppState>((set) => ({
  count: 0,
  isAuthenticated: false,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));
