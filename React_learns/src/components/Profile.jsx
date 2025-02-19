import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target

    setProfile((prevProfile) => ({
        ...prevProfile, [name] : value
    }))
  } // here the name is changed according to the handleChange function context; bcz name and age field both calls this function
  // dynamic key assignment in objects can be done by this, also called Computed Property Names
  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
      </div>

      <h3>Profile Information</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default Profile;
