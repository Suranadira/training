import React, { useEffect } from "react";

export default () => {
  let count = 0;

  useEffect(() => {
    window.addEventListener("click", counter);

    return () => {
      // Similar to componentWillUnmount
      window.removeEventListener("click", counter);
    };
    // eslint-disable-next-line
  }, []);

  const counter = e => {
    if (e.target.id === "button1")
      document.title = `You clicked ${++count} times`;
  };

  return (
    <div>
      <button id="button1">Click me</button>
    </div>
  );
};
