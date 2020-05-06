import React, { Component } from 'react';

class Form extends Component {
  state = {
    inputTextValue: '',
  };

  handleChange = (event) => this.setState({inputTextValue: event.target.value});

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('FORM SUBMIT', this.state.inputTextValue);
    this.setState({
      inputTextValue: '',
    })
  };

  render() {
    return(
      <div>
        <h2>Dodaj komentarz:</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputTextValue} onChange={this.handleChange} />
          <button type="submit">DODAJ</button>
        </form>
      </div>
    )
  }
}

export default Form;