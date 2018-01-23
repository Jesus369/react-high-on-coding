// Must import "Component" in order to create a class
import React, { Component } from 'react';

export class Hello extends Component {
  render() {
    var helloStyles = {backgroundColor : "blue", fontSize:20}
    return (
      <h1 style={helloStyles}>My name is {this.props.name}, and I am {this.props.age} years old!</h1>
    )
  }
}

// this.props.name takes the name value specified in App.js
