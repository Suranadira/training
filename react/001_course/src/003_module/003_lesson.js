import React from "react";
import "./003_lesson.css";
import ParentComponent from "./003a_lesson";
import ChildComponent from "./003b_lesson";

export default () => (
  <>
    <ParentComponent>
      <ChildComponent name="Child1" text="Child Component 1" />
      <ChildComponent name="Child2" text="Child Component 2" />
      <ChildComponent name="Child3" text="Child Component 3" />
    </ParentComponent>
  </>
);
