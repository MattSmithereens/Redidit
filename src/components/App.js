import React, { Component } from 'react';
import AppBar from './AppBar'
import './App.css';
import Feed from './Feed'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Feed />
      </div>
    );
  }
}

export default App;
