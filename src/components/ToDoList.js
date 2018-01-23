// Must import "Component" in order to create a class
import React, { Component } from 'react';

export class ToDoList extends Component {
  render() {
    return (
        <ToDoListInput/>
    )
  }
}

export class ToDoListInput extends Component {

  addTask() {
    console.log("Add Task Called")
  }
  render() {
    return (
      <div>
        <input type="text"/>
        <button onClick={this.addTask}>Add Task</button>
      </div>
    )
  }
}
