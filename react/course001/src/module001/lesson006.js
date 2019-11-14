import React from "react";
import { Hello } from "./lesson003a";

const HelloWorld = () => {
  let world = "World";
  return (
    <h1>
      <Hello />, {world}!
    </h1>
  );
};

export default HelloWorld;
