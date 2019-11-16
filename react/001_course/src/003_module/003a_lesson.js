import React, { Children, cloneElement } from "react";

export default props => {
  return (
    <>
      {Children.map(props.children, child => {
        return cloneElement(child, {
          styles: { background: "#90EE90" },
          key: child.props.name
        });
      })}
    </>
  );
};
