import React from "react";
import MainComponent from "./MainContent";
import Greetings from './Greetings.jsx'

const Props = () => {
  return (
    <>
      <MainComponent
        name="Anand"
        age={18}
        isMarried={false}
        hobbies={["Coding", "Reading", "Sleeping"]}
      />
      <Greetings>
        <h1>Name: Anand</h1>
        <p>Age is 18 and not married.</p>
      </Greetings>
      {/* This is also how we can pass data to a child component (by closing the component and under that the data is passed)and to access it we just use the '.children' with the props */}
    </>
  );
};

export default Props;

// this is how you pass any additional info to a component
// here the <MainComponent /> is child which is fed with some additional info
// these props are passed as objects to the chilc component so dot notation can be used but first it should be given any args and through that args using dot notation the info can be accessed
