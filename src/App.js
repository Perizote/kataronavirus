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

  killCouple = () => {
    const currentKills = this.state.kills
    this.setState({kills: currentKills + 2})
  }

  killFamily = () => {
    const currentKills = this.state.kills
    this.setState({kills: currentKills + 3})
  }

  render() {
    const kills = this.state.kills
    const survivors = this.state.survivors
    return (
      <div className="App">
        <button onClick={ this.killPerson }>Kill person</button>
        <button onClick={ this.killCouple }>Kill couple</button>
        <button onClick={ this.killFamily }>Kill family</button>
        00{ kills }:00{ survivors }
      </div>
    );
  }
}

export default App;
