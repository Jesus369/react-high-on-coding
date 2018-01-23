import React, { Component } from 'react';
export class Posts extends Component {
  render() {

    var container = {
      marginBottom: "2em"
    }

    var title = {
      color: "red",
      margin: "0 0 .7em 4em",
      fontSize: "1.3em"
    }

    var comments_likes = {
      backgroundColor: "#E3E3E3",
      display: "flex",
      flexDirection: "row",
      listStyle: "none",
      margin: "0 auto 0 auto",
      width:"90%"
    }

    var type = {
      marginLeft: "3em"
    }

    var listing = {
      margin: "0 auto 0 auto",
      width: "90%"
    }

    return (
      <div style={container}>
        <div style={title}>{this.props.title}</div>
        <div style={listing}>{this.props.post}</div>
        <div style={comments_likes}>
          <li style={type}>{this.props.comments} Comments</li>
          <li style={type}>{this.props.likes} Likes</li>
        </div>
      </div>
    )
  }
}
