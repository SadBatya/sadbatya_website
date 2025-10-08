interface Props {
  count: number;
  setCount: (count: number) => void;
}

export const CounterWithButton = ({ count, setCount }: Props) => (
  <div className="flex items-center gap-4 bg-black/50 px-2 rounded-md">
    <button onClick={() => setCount(count - 1)}>-</button>
    <span className="text-white text-md">{count}</span>
    <button onClick={() => setCount(count + 1)}>+</button>
  </div>
);
