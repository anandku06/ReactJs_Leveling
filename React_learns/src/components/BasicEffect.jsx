import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("I am rendered only one time i.e. the first time");
  }, []);
  return <div>BasicEffect</div>;
};

export default BasicEffect;
