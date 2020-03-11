import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counter: '000:000'
  }

  killPerson = () => {
    this.setState({counter: '001:000'})
  }

  render() {
    return (
      <div className="App">
        <button onClick={ this.killPerson }>Kill person</button>
        { this.state.counter }
      </div>
    );
  }
}

export default App;
