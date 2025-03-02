import React, { useState, useEffect } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      // const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // console.log(response);
      const data = await response.json();
      // console.log(data);

      if (data && data.length) setData(data);
    }

    getData();
  }, []);

  return (
    <div>
      <h1>First Post Title</h1>
      {data.length > 0 ? <h2>{data[0].title}</h2> : <h2>Loading...</h2>}
      <h2>{data[0]?.title || "Loading..."}</h2> {/* Or using optional chaining, so that if data is loaded then show the title or use Loading... instead of that */}
      {/* <h2>{data[0].title}</h2> this will cause error bcz when accessing, the data is initially empty, so it won't be able to access that the first element */}
    </div>
  );
};

export default FetchDataEffect;
