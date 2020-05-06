import React, { Component } from 'react';
import Button from './Button';

class Counter extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    console.log('DID MOUNT');
  }

  componentDidUpdate() {
    console.log('DID UPDATE');
  }

  incrementCounter = () => this.setState({counter: this.state.counter + 1});
  decrementCounter = () => this.setState({ counter: this.state.counter - 1});
  resetCounter = () => this.setState({counter: 0});

  render() {
    console.log('RENDER');
    return (
      <div>
        Counter: {this.state.counter}
        <Button handleClick={this.incrementCounter} text="+"/>
        <Button handleClick={this.decrementCounter} text="-"/>
        <Button handleClick={this.resetCounter} text="RESET"/>
      </div>
    )
  }
}

export default Counter;