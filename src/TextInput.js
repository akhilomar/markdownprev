import React, { Component } from 'react';
import './App.css';

class TextInput extends Component {
  render() {
   
    return (
      <textarea id="editor"
       
        name="input"
       
       
        value={this.props.value}
        onChange={this.props.handleInput}
        className="box left">
      </textarea>
    );
  }
}

export default TextInput;