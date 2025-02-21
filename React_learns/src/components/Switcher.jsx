import React, { useState } from "react";

const Switcher = () => {
  const [sw, setSw] = useState(false);
  return (
    <div>
      {sw ? <span>Dark</span> : <span>Light</span>}
      <br />

      <input type="text" key={sw ? "dark" : "light"} placeholder={sw ? "dark" : "light"} />

      <button onClick={() => setSw((s) => !s)}>Switch</button>
    </div>
  );
};

export default Switcher;
// inside return we are rendering a content when sw's value is true or false
// and a button on click the sw value toggles between false and true
// here the problem is, the input field is not unique to the state of the element, it doesn't changes when switch happens
// after giving it a key attribute, now it has its own unique value, which changes according to the value of sw
// here at every switch, the key of input field is changed making it unique and not the previous one or common one