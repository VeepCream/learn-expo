import { create } from 'zustand';

interface CounterState {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
  resetCount: () => void;
  setCount: (newCount: number) => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }),
  setCount: (newCount: number) => set({ count: newCount }),
}));

