import React, { Component } from 'react';
import './App.css';
const marked = require('marked');

class TextOutput extends Component {
  markItUp(a) {
    return {__html: a};
  }
  render() {
    return (
      
      <div style={{
        margin: "2vw 9vw",
        height: "31.5em",
        width:"30%",
        overflow:"auto",
        backgroundColor:"yellowgreen",
        color:"white",
        scrollbarBaseColor:"gold",
        justifyContent: "space-around",
        fontFamily: "'Lobster',cursive",
        textAlign: "left",
        paddingLeft: "1vw",
        }} id="preview" dangerouslySetInnerHTML = {this.markItUp(marked(this.props.input))}
        className="right" />
      
    );
  }
}

export default TextOutput;