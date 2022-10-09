import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handlePluseclick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>cur {count}</div>
      <button onClick={handlePluseclick}>like</button>
    </div>
  );
};
