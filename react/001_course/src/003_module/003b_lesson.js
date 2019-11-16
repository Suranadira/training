import React from "react";

export default props => {
  return (
    <>
      <div className="child-component" style={props.styles}>
        {props.text}
      </div>
    </>
  );
};
