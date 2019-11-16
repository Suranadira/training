import React from "react";
import ParentComponent from "./002a_lesson";
import ChildComponent from "./002b_lesson";

export default () => (
  <>
    <ParentComponent>
      <ChildComponent text="Child Component 1" />
      <ChildComponent text="Child Component 2" />
    </ParentComponent>
  </>
);
