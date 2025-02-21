import React, { useState } from "react";

const CopyInput = () => {
    // handling states of two elements
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleCopy}>Copy</button>
    </div>
  );
};

export default CopyInput;
