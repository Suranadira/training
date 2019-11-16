import React from "react";
import { Link } from "react-router-dom";

export const NavigationComponent = props => {
  return (
    <>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/people">
        People
      </Link>
      <Link className="link" to="/peopleInput">
        Create new Person
      </Link>
      <Link className="link" to="/peopleFromServer">
        Show People From Server
      </Link>
      <Link className="link" to="/peopleInputServer">
        POST Person
      </Link>
    </>
  );
};
