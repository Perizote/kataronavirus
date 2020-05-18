import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [peopleKilled, setPeopleKilled] = useState(0);
  const [coupleKilled, setCoupleKilled] = useState(0);

  const addPersonKilled = ()=>{
    setPeopleKilled(peopleKilled+1);
  }
  const addCoupleKilled = ()=>{
    setCoupleKilled(coupleKilled+1);
  }

  return (
    <div className="App">
      <label htmlFor="labCount">Counter</label>
      <div id="labCount">0{coupleKilled}{peopleKilled}:000</div>
      <button onClick={addPersonKilled}>🙎‍♀️</button>
      <button onClick={addCoupleKilled}>👩‍❤️‍💋‍👩</button>
    </div>
  );
}

export default App;
