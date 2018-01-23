import React, { Component } from 'react';
import {ToDoListInput} from './components/ToDoList'
import {ToDoList} from './components/ToDoList'
import {Square} from './components/Square'
import {Header} from './components/Header'
import {Hello} from './components/Hello'
import {Logo} from './components/Logo'

// JSX - Java Script Extensions syntax. Mix javascript and HTML syntax
class App extends Component {
  render() {
    return (
      <div>
        <Hello name="Jesus" age="24"/>
        <Hello name="John" age="32"/>
        <Header/>
        <Square/>
      </div>
    );
  }
}

export default App;
