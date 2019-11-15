import React from "react";
import { useGreeting } from "./001a_lesson";

export default () => {
  let greeting = useGreeting();
  return <h1>{greeting}</h1>;
};
