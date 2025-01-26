import React from "react";

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Alice",
      age: 25,
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
    },
    {
      id: 3,
      name: "Charlie",
      age: 22,
    },
  ];
  return (
    <div>
        <h1>Users</h1>
        {users.map(({name, age, id}) => (
            <ul key={id}>
                <li>Name: {name}, Age: {age}</li>
            </ul>
        ))}
    </div>
  );
};

export default UserList;
