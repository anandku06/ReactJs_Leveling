import React, { useState } from "react";
import C1 from "./C1";
import C2 from "./C2";

const SharingStates = () => {
    // made a useState hook for counter
    const [count, setCount] = useState(0)
  return (
  <div>
    <h1>Sharing States</h1>
    <C1 count={count} onClickHandler={() => setCount(c => c + 1)} />
    <C2 count={count} onClickHandler={() => setCount(c => c - 1)} />
  </div>);
};

export default SharingStates;

// in C1 and C2 components the current state of the count and the setCount function are shared using props