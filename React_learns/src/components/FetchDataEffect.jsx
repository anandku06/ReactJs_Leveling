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
      <ul>
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

export default FetchDataEffect;
