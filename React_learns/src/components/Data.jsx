import React, { useState, useEffect } from "react";

const Data = () => {
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
      <ul>
        {/* here this is not throwing any error bcz the map function doesn't work on empty array;
        and at first map just skips its execution bcz of empty array so it doesn't throw any error */}
        {data.map((post) => (
          <div key={post.id}>
            <li>Title: {post.title}</li>
            <li>Body: {post.body}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Data;
