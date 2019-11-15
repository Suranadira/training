import React from "react";

let defaults = {
  name: "Albert"
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(defaults, props);
  }

  render() {
    return <h1>Hello, {this.state.name}</h1>;
  }
}

export default () => {
  return <Welcome name="Emma" />;
};
