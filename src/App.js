import React, { Component } from 'react';
import './App.css';

const PERSON = 1
const COUPLE = 2
const FAMILY = 3

class App extends Component {
  state = {
    kills: 0,
    survivors: 0,
  }

  kill = persons => {
    const currentKills = this.state.kills
    this.setState({kills: currentKills + persons})
  }

  render() {
    const kills = this.state.kills
    const survivors = this.state.survivors
    return (
      <div className="App">
        <button onClick={ () => this.kill(PERSON) }>Kill person</button>
        <button onClick={ () => this.kill(COUPLE) }>Kill couple</button>
        <button onClick={ () => this.kill(FAMILY) }>Kill family</button>
        00{ kills }:00{ survivors }
      </div>
    );
  }
}

export default App;
