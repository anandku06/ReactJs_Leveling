import React, { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count -> ${count}`;
  }, [count]);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}> Increase </button>
    </div>
  );
};

export default CounterEffect;
