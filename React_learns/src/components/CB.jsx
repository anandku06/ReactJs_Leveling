import React from "react";
import { Data } from "./App";

const CB = () => {
  // finally using this prop here
  //   return (
  //     <div>
  //         <h1>{name}</h1>
  //     </div>
  //   )
  // using the Consumer property for accessing the data
  return (
    <Data.Consumer>
      {(name) => {
        return <h1>{name}</h1>;
      }}
    </Data.Consumer>
  );
};

export default CB;
