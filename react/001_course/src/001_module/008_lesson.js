import React from "react";
import Text from "./008a_lesson";

const HelloWorld = () => {
  return (
    <h1>
      <Text.Hello />
      <Text.Separator />
      <Text.World />!
    </h1>
  );
};

export default HelloWorld;
