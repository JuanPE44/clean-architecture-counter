type CounterViewProps = {
  value: number;
  onIncrement: () => void;
};

export function CounterView({ value, onIncrement }: CounterViewProps) {
  return (
    <>
      <p>{value}</p>
      <button onClick={onIncrement}>+</button>
    </>
  );
}
