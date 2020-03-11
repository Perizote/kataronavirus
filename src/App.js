import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    kills: 0,
    survivors: 0,
  }

  killPerson = () => {

    const currentKills = this.state.kills

    this.setState({kills: currentKills + 1})
  }

  render() {
    const kills = this.state.kills
    const survivors = this.state.survivors
    return (
      <div className="App">
        <button onClick={ this.killPerson }>Kill person</button>
        00{ kills }:00{ survivors }
      </div>
    );
  }
}

export default App;
