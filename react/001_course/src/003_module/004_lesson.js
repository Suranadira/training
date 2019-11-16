// Aufgabe:
// Wenn die Fensterbreite 500px oder mehr beträgt,
// soll die Hintergrundfarbe der Child-Komponenten grün sein,
// andernfalls soll sie rot sein.

import React from "react";
import "./004_lesson.css";
import ParentComponent from "./004a_lesson";
import ChildComponent from "./004b_lesson";

export default () => (
  <>
    <ParentComponent>
      <ChildComponent name="Child1" text="Child Component 1" />
      <ChildComponent name="Child2" text="Child Component 2" />
      <ChildComponent name="Child3" text="Child Component 3" />
    </ParentComponent>
  </>
);
