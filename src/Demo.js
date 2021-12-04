import React, { Component } from "react";

export default class demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number,
    };
    var timer = setInterval(() => {
      this.setState({number: this.state.number - 1 })
      if (this.state.number === 0) {
        clearInterval(timer);
        props.isOver()
      };
    }, 1000);
    
  }

  render() {
    return <div>倒计时:{this.state.number}</div>;
  }
}
