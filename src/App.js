import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [peopleKilled, setPeopleKilled] = useState(0);
  const addPersonKilled = ()=>{
    setPeopleKilled(peopleKilled+1);
  }
  return (
    <div className="App">
      <label htmlFor="labCount">Counter</label>
      <div id="labCount">00{peopleKilled}:000</div>
      <button onClick={addPersonKilled}>🙎‍♀️</button>
    </div>
  );
}

export default App;
