import React from "react";

export default () => {
  let names = ["Noah", "Emma", "Elias"];
  return (
    <ul>
      {names.map(function(name, index) {
        return <li key={index}>{name}</li>;
      })}
    </ul>
  );
};
