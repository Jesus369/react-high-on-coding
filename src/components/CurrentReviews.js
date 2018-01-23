import React, { Component } from 'react';
export class CurrentReviews extends Component {
  render() {

    var cardStyle = {
      backgroundColor:"#E3E3E3",
      borderRadius: "10px",
      fontSize: "1em",
      margin: "2em auto 2em auto",
      height: "7em",
      width: "90%"
    }

    return (
      <div style={cardStyle}>
        <span>When you want to buy any application from the Apple iTunes store you have more choices than you can handle.
        Most of the users scroll past the application description completely avoiding it like ads displayed on the right column
        of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.</span>
      </div>
    )

  }
}
