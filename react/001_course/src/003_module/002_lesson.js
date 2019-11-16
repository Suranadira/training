import React from "react";
import ParentComponent from "./002a_lesson";
import ChildComponent from "./002b_lesson";

export default () => (
  <>
    <ParentComponent>
      <ChildComponent text="Hello from Child Component 1!" />
      <ChildComponent text="Hello from Child Component 2!" />
    </ParentComponent>
  </>
);
