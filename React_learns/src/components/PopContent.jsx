import React from "react";

const PopContent = ({ copied }) => {
  return (
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>
          Copied to Clipboard
        </div>
      )}
    </section>
  );
};

export default PopContent;
