import { create } from 'zustand';

type LoadingState = {
  count: number;
  isLoading: boolean;
  start: () => void;
  stop: () => void;
  reset: () => void;
};

export const useLoadingStore = create<LoadingState>()(set => ({
  count: 0,
  isLoading: false,
  start: () =>
    set(s => {
      const next = s.count + 1;
      return { count: next, isLoading: next > 0 };
    }),
  stop: () =>
    set(s => {
      const next = Math.max(0, s.count - 1);
      return { count: next, isLoading: next > 0 };
    }),
  reset: () => set({ count: 0, isLoading: false }),
}));
