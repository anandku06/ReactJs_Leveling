import React, { useState } from "react";

const States = () => {
  const [counter, setCounter] = useState(0); // here the useState Hook is an array containing two elements one is the initial value and other is the 'state changing function'
  // the function is used to change the state at each render of the component
  // by this function only you can change the state of the component
  const [friends, setFriends] = useState(["Alex", "John", "Sparta", "Sakai"]); // taking an array now

  const addNewFriend = () => setFriends([...friends, "Ram"]); // declared my onClick function here that adds new friend in the friends array

  const removeFriend = () => setFriends(friends.filter((f) => f !== "Ram"));
  // declared the removeFriend func for my onClick event
  // using the filter method to filter out the element

  const updateFriend = () =>
    setFriends(friends.map((f) => (f === "Sakai" ? "Ghost Sakai Jin" : f))); // declared my update function here for my onClick event
  // maps over the friends array and find the matching element, if found then changes the element

  const [movie, setMovie] = useState({
    title: "Interstellar",
    ratings: 8.9,
  }); // now using the hook with objects and changing the state of this object

  const changeRating = () => {
    const copyMovie = {
      ...movie,
      ratings : 9.4
    } // making a copy of the previous object and modifying the data in it

    setMovie(copyMovie) // then passing the new object in here just like we did in counter
    setMovie({...movie, ratings : 9.8}) // doing all those things here 
  }

  const [movies, setMovies] = useState([
    {id : 1, title: "SpiderMan", ratings : 8.7},
    {id : 2, title: "SuperMan", ratings : 8.9},
    {id : 3, title: "IronMan", ratings : 9.0},
  ]) // made an array of objects for state changing practice

  const changeName = () => {
    setMovies(movies.map(m => m.id === 1 ? {...movies, title : "John Wick 4"} : m))
  }
  // checks the object with id 1 and changes the title of that object after mapping over the array

  return (
    <section>
      <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>

      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addNewFriend}>Add new friend!</button>
      <button onClick={removeFriend}>Remove friend!</button>
      <button onClick={updateFriend}>Update friend!</button>

      <h1>Title: {movie.title}</h1>
      <h3>Ratings: {movie.ratings}</h3>

      <button onClick={changeRating}>Change rating!!</button>
      <br />

      <h1>Movies</h1>
      {movies.map(m => (
        <li key={m.id}>{m.title}</li>
      ))}

      <button onClick={changeName}>Change Name</button>
    </section>
  );
};

export default States;

// added an event listener to the button that listens click and triggers the arrowfn that increments the counter
// added another event listener to the button that also listens click but decrements the counter
