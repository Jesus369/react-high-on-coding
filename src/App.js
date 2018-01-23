import React, { Component } from 'react';
import {CurrentReviews} from './components/CurrentReviews'
import {Header} from './components/Header'
import {Posts} from './components/Posts'

// JSX - Java Script Extensions syntax. Mix javascript and HTML syntax
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <CurrentReviews/>
        <Posts comments="12" likes="124" title="Hello WatchKit"
          post="Last month Apple released the anticipated WatchKit Framework for developers in the form of IOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing appls for the Apple Watch"/>
        <Posts comments="15" likes="45" title="Introduction to Swift"
        post="Swift is a modern programming language developed by Apple to create the next generation of IOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."/>
      </div>
    );
  }
}

export default App;
