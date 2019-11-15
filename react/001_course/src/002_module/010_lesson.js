// Refaktorieren Sie die Klassenkomponente "Clock" in eine funktionale Komponente.

import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>
          It is {this.state.date.toLocaleTimeString("de-DE", { hour12: false })}
          .
        </h2>
      </div>
    );
  }
}

export default Clock;
