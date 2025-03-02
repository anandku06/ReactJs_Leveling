import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Marston" });

  const updateUser = (newName) => {
    setUser({ name: newName });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children} 
    </UserContext.Provider>
  );
};

export default UserProvider;

// the children prop is a special prop in React that represents the components or elements nested inside the UserProvider component when it's used in JSX