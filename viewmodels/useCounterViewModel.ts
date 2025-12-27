import { useCounterStore } from '../store/useCounterStore';

/**
 * ViewModel for Counter
 * Mediates between View and Model, handles presentation logic
 */
export const useCounterViewModel = () => {
  // Get state from Model (Zustand Store)
  const count = useCounterStore((state) => state.count);
  const increaseCount = useCounterStore((state) => state.increaseCount);
  const decreaseCount = useCounterStore((state) => state.decreaseCount);
  const resetCount = useCounterStore((state) => state.resetCount);
  const setCount = useCounterStore((state) => state.setCount);

  // Presentation logic
  const handleQuickSet = (value: number) => {
    setCount(value);
  };

  const isPositive = count > 0;
  const isNegative = count < 0;
  const isZero = count === 0;

  return {
    // State
    count,
    isPositive,
    isNegative,
    isZero,
    
    // Actions
    increaseCount,
    decreaseCount,
    resetCount,
    handleQuickSet,
  };
};

