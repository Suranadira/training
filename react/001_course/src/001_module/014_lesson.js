import React from "react";
import Button from "./014a_lesson";

let n = 0;
const count = () => console.log(++n);

export default () => {
  return <Button onClick={count} />;
};
