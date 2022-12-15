import { useState } from "react";


export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  function counterIncrease() {
    setCounter(prevCounter => prevCounter + 1);
  }

  function counterDecrease() {
    setCounter(prevCounter => prevCounter - 1);
  }

  return [counter, counterIncrease, counterDecrease]
}