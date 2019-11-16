import React from "react";

const PersonComponent = props => {
  return (
    <div>
      <p>PersonComponent</p>
      <ul>
        <li>{props.person.firstname}</li>
        <li>{props.person.lastname}</li>
      </ul>
    </div>
  );
};

export { PersonComponent };
