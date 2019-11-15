import React from "react";
import { useKeyDown } from "./002a_lesson";

export default () => {
  let keyDown = useKeyDown();
  return <h1>{keyDown}</h1>;
};
