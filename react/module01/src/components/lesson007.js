import React from "react";
import Comma, { Hello, World } from "./lesson007a";

const HelloWorld = () => {
  return (
    <h1>
      <Hello />
      <Comma />
      <World />!
    </h1>
  );
};

export default HelloWorld;
