import React, { Component } from "react";
import Demo from "./Demo";

export default class DemoControl extends Component {
  state = {
    isOver: false,
  };
  Over = () => {
    this.setState({
      isOver: true,
    });
  };

  render() {
    let state = "正在倒计时";
    if (this.state.isOver) {
      state = "倒计结束";
    }
    return (
      <>
        <Demo number={10} isOver={this.Over} />
        <h1>{state}</h1>
      </>
    );
  }
}
