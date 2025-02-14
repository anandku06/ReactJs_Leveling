import React, { useEffect, useState } from "react";

// using the localStorage here
const Exam3 = () => {
  const [name, setName] = useState(() => {
    // using the localStorage to fetch the name
    const savedName = localStorage.getItem("name");

    return savedName ? JSON.parse(savedName) : ""; // if name present then parse it to object from JSON, else give an empty string
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name)) 
  }, [name])
  // whenever the input field renders, the value is set to localStorage
  // setting the naem value in the localStorage as it stores only string so using stringify()

  const handleChange = (e) => {
      setName(e.target.value)
  }

  const handleClear = () => setName("")
  return (
    <div>
      <h1>Your name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Exam3;
