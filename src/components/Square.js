import React, { Component } from 'react';
export class Square extends Component {
  render() {

    var cardStyle = {
      backgroundColor:"#DDE0DD",
      borderRadius: "10px",
      fontSize: "1em",
      margin: "2em auto 0 auto",
      height: "7em",
      width: "90%"
    }

    return (
      <div style={cardStyle}>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum.</span>
      </div>
    )

  }
}
