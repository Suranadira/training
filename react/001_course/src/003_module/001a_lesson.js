import React from "react";

export default props => {
  return (
    <>
      {React.Children.map(props.children, child => {
        console.log(child);
        return child;
      })}
    </>
  );
};
