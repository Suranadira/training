import React from "react";

let n = 0;
const count = () => console.log(++n);

export default () => {
  return <button onClick={count}>Count</button>;
};
