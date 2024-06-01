import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);
  return (
    <button
      className="bg-amber-700"
      onClick={() => setCount((count) => count + 1)}
    >
      Button (service 1) {count}
    </button>
  );
}
