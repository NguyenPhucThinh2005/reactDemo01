import React, { Component } from "react";

export default class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        ClassState
        <p>Count: {this.setState.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
