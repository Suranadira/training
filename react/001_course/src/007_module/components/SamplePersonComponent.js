import React from "react";
import { context } from "../Context";
import { PersonComponent } from "./PersonComponent";
let SamplePersonComponent = () => {
  let samplePerson = context.samplePerson;
  return (
    <div>
      <PersonComponent person={samplePerson} />
    </div>
  );
};

export { SamplePersonComponent };
