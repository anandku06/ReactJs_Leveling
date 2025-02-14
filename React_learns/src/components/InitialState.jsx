import React from "react";
import Exam1 from "./Exam1";
import Exam2 from "./Exam2";
import Exam3 from "./Exam3";

// when the useState takes arrowfn as thier initial value
const InitialState = () => {
  return (
    <div>
      <Exam1 />
      <Exam2 />
      <Exam3 />
    </div>
  );
};

export default InitialState;
