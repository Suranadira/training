import React from "react";
import { useKeyDown } from "./001a_lesson";

export default () => {
  let keyDown = useKeyDown();
  return <p>{keyDown}</p>;
};
