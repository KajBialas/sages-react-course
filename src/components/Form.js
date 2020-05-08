import React, { Component } from 'react';
import { UserContext } from '../contexts/context';

class Form extends Component {
  state = {
    inputTextValue: '',
    inputNameValue: '',
    comments: [],
  };

  handleChange = (event) => this.setState({[event.target.name]: event.target.value});

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: this.state.comments.length + 1,
          name: this.state.inputNameValue,
          text: this.state.inputTextValue,
        }
      ],
      inputTextValue: '',
      inputNameValue: '',
    })
  };

  renderComments = () => this.state.comments.map((commentElement) => <div key={commentElement.key}>
    <h3>{commentElement.name}</h3>
    <p>{commentElement.text}</p>
  </div>);

  render() {
    return(
      <div>
        <h2>Dodaj komentarz:</h2>
         <UserContext.Consumer>
           {([userName]) =>
             userName ? <form onSubmit={this.handleSubmit}>
               <label>
                 Imię:
                 <input name="inputNameValue" type="text" value={this.state.inputNameValue} onChange={this.handleChange}/>
               </label>
               <label>
                 Treść:
                 <input name="inputTextValue" type="text" value={this.state.inputTextValue} onChange={this.handleChange}/>
               </label>
               <button type="submit">DODAJ</button>
             </form> : <div>Użytkownik niezalogowany, zaloguj się!</div>
           }
        </UserContext.Consumer>
        <h2>Komentarze:</h2>
        {this.renderComments()}
      </div>
    )
  }
}

export default Form;