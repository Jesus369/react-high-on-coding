import React, { Component } from 'react';

export class Header extends Component {
  render() {

    var styleHeader = {
      backgroundColor:"#9DD39D",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "row",
      height: "7em",
      width: "100%"
    }

    var titleStyle = {
      fontSize: "2.5em"
    }

    var navStyle = {
      color: "white",
      fontSize: "1.5em",
      marginLeft: "5em",
      textDecoration: "none"
    }

    var linkOne = {
      outline: "none",
      color: "white"
    }

    var linkTwo = {
      outline: "none",
      color: "white"
    }

    return(
      <div style={styleHeader}>
        <span style={titleStyle}>High On Coding</span>
        <table style={navStyle}>
          <tr>
            <td><a style={linkOne} href="">Home</a></td>
            <td><a style={linkTwo} href="">Categories</a></td>
          </tr>
        </table>
      </div>
    )
  }
}
