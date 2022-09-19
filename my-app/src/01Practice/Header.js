import React, { Component } from "react";

export default class header extends Component {
  constructor(props) {
    super(props);
    this.number = 0;
    this.state = {
      name: 1,
      //   age: 12,
    };
  }
  //     this.setStateName = this.setStateName.bind(this);
  //   }
  //   componentDidMount() {
  //     this.setState({
  //       name: 0,
  //     });
  //   }
  //   setStateName() {
  //     this.setState({
  //       name:1,
  //     });
  //   }
  render() {
    return (
      <div>
        <p>{this.props.textProp}</p>
        <p>{this.state.name}</p>
        <button
          onClick={() => {
            this.setState({
              name: this.state.name + 1,
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({
              name: this.state.name - 1,
            });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
