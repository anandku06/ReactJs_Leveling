import React, { useContext } from "react";
import { Data } from "./App";


const CB = () => {
  // finally using this prop here
  //   return (
  //     <div>
  //         <h1>{name}</h1>
  //     </div>
  //   )
  const name = useContext(Data) // Accepts a context object (the value returned from React.createContext) and returns the current context value, as given by the nearest context provider for the given context.
  return <h1>{name}</h1>
  // (
  //   // using the Consumer property for accessing the data
  //   <Data.Consumer>
  //     {(name) => {
  //       return <h1>{name}</h1>;
  //     }}
  //   </Data.Consumer>
  // );
};

export default CB;
