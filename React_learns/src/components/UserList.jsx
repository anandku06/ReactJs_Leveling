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
            <div key={id}>
                <h3>Name: {name}</h3>
                <h3>Age: {age}</h3>
            </div>
        ))}
    </div>
  );
};

export default UserList;
