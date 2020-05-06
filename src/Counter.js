import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
  };

  incrementCounter = () => this.setState({counter: this.state.counter + 1});

  render() {
    return (
      <div>
        Counter: {this.state.counter}
        <button onClick={this.incrementCounter}>+</button>
      </div>
    )
  }
}

export default Counter;