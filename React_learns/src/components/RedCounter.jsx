import React, { useState } from "react";
import { useReducer } from "react";
import { reducer } from "./counterReducer";

const RedCounter = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)}}
        />
        <button onClick={() => {
            dispatch({ type: "incrementByAmount", payload : Number(inputValue) })
            setInputValue("")}}>
          Add
        </button>
        <button onClick={() => {
            dispatch({ type: "decrementByAmount", payload : Number(inputValue) })
            setInputValue("")}}>
          Subtract
        </button>
      </div>
    </div>
  );
};

export default RedCounter;
// here dispatch has the reference of state internally so no need to provide it here again
