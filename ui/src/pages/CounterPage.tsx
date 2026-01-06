import { CounterView } from "../components/CounterView";
import { useCounter } from "../hooks/useCounter";

export function CounterPage() {
  const { value, increment } = useCounter();

  return <CounterView value={value} onIncrement={increment} />;
}
