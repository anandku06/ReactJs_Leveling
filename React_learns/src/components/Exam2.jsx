import React, { useState } from "react";

const Exam2 = () => {
  const [randomNum, setRandomNum] = useState(() =>
    Math.floor(Math.random() * 100)
  );
  return (
    <div>
      <h1>Random number: {randomNum}</h1>
      <button
        onClick={() => setRandomNum(() => Math.floor(Math.random() * 100))}
      >
        Generate
      </button>
    </div>
  );
};

export default Exam2;
