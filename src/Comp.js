import React, { Component } from "react";

export default class Comp extends Component {
  state = {
    n: 0,
  };
  handleClick = () => {
    this.setState(
      {
        n: this.state.n + 1,
      },
      () => {
        console.log(this.state.n);
      }
    );
    this.setState((target) => {
      return {
        n: target.n + 2,
      };
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.n}</h1>
        <p>
          <button onClick={this.handleClick}>+</button>
        </p>
      </div>
    );
  }
}
