import { useState } from 'react';

const useCounter = (
  initialValue: number = 0,
  min: number = 0,
  max: number = Infinity,
): [number, () => void, () => void] => {
  const [value, setValue] = useState<number>(initialValue);

  const increase = () => {
    setValue((prevValue) => Math.min(prevValue + 1, max));
  };

  const decrease = () => {
    setValue((prevValue) => Math.max(prevValue - 1, min));
  };

  return [value, increase, decrease];
};

export default useCounter;
