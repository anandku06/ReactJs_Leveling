import React, { useState } from "react";

const States = () => {
  const [counter, setCounter] = useState(0); // here the useState Hook is an array containing two elements one is the initial value and other is the 'state changing function'
  // the function is used to change the state at each render of the component
  // by this function only you can change the state of the component
  const [friends, setFriends] = useState(["Alex", "John", "Sparta", "Sakai"]); // taking an array now

  const addNewFriend = () => setFriends([...friends, "Ram"]) // declared my onClick function here that adds new friend in the friends array 

  return (
    <section>
      <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>

      {friends.map(f => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addNewFriend}>Add new friend!</button>
      <button onClick={removeFriend}>Remove friend!</button>
    </section>
  );
};

export default States;

// added an event listener to the button that listens click and triggers the arrowfn that increments the counter
// added another event listener to the button that also listens click but decrements the counter
