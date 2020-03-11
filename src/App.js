import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counter: '000:000'
  }

  render() {
    return (
      <div className="App">
        { this.state.counter }
      </div>
    );
  }
}

export default App;
