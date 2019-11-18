import React from "react";
import P from "./014a_lesson";

let n = 0;
const count = () => console.log(++n);

export default () => {
  return <P counter={count} />;
};
