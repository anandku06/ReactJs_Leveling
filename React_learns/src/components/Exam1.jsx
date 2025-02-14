import React, { useState } from "react";

const Exam1 = () => {
    const [count, setCount] = useState(() => {
        const init = 10
        return init
    }) // here as well the initial count is initialised using arrowfn

    const increment = () => {
        // here the setCount fn takes another func for updation of the state
        setCount((prevCount) => prevCount + 1)
        // takes the latest count value and adds 1 to it
        setCount((prevCount) => prevCount + 1)
        // here as well, first setCount will update then, according to its return value this setCount will update
        // now the updation is of 2
    }
  return <div>
    <h1>Count: {count}</h1>
    <button onClick={increment}>Increment</button>
  </div>;
};

export default Exam1;
