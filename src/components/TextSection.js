import React, { Component } from 'react';

const text = "Treść statyczna strony";

class TextSection extends Component {
  text2 = "Treść statyczna 2";

  render() {
    return (
      <div>
        <p>
          {text}
        </p>
        <p>
          {this.text2}
        </p>
      </div>
    )
  }
}

export default TextSection;