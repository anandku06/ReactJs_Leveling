import React from "react";
import MainComponent from "./MainContent";

const Props = () => {
  return (
    <>
      <MainComponent name="Anand" age={18} isMarried={false} hobbies={["Coding", "Reading", "Sleeping"]} />
    </>
  );
};

export default Props;

// this is how you pass any additional info to a component
// here the <MainComponent /> is child which is fed with some additional info
// these props are passed as objects to the chilc component so dot notation can be used but first it should be given any args and through that args using dot notation the info can be accessed
