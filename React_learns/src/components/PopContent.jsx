import React from "react";
import { createPortal } from "react-dom"; // importing the createPortal object from react-dom

const PopContent = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>
          Copied to Clipboard
        </div>
      )}
    </section>,
    document.querySelector("#popup-content")
  );
};

export default PopContent;
// using the createPortal method here, takes two arguments -> one the content to be displayed
// second the place where you want to render that
