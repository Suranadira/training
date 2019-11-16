import React from "react";
import ParentComponent from "./001a_lesson";
import ChildComponent from "./001b_lesson";

export default () => (
  <>
    <ParentComponent>
      <ChildComponent />
    </ParentComponent>
  </>
);
