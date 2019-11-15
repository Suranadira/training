import React from "react";

const PersonComponent = props => {
  return (
    <>
      <p>PersonComponent</p>
      <ul>
        <li>{props.person.firstname}</li>
        <li>{props.person.lastname}</li>
      </ul>
    </>
  );
};

export { PersonComponent };
