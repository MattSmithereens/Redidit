import React, { Component } from 'react';
import AppBar from './AppBar'
import './App.css';
import Feed from './Feed';
import PostForm from './PostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <PostForm />
        <Feed />
      </div>
    );
  }
}

export default App;
