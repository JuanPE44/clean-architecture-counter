import { useEffect, useState } from "react";
import { CounterStore } from "../../../infraestructure/counter/counter.store";
import { IncrementCounter } from "../../../aplication/counter/update-counter.usecase";

const store = new CounterStore();
const incrementCounter = new IncrementCounter(store);

export function useCounter() {
  const [value, setValue] = useState(store.getValue());

  useEffect(() => {
    return store.subscribe(() => {
      setValue(store.getValue());
    });
  }, []);

  return {
    value,
    increment: () => incrementCounter.execute(),
  };
}
