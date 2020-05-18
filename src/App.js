import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const SIZES = {
    person: 1,
    couple: 2,
    family: 4
  }

  const [killed, setKilled] = useState(0);
  const [healPerson, setHealedPerson] = useState(0);
  const [healCouple, setHeadelCouple] = useState(0);

  const kill = (size) => {
    const increment = size;
    setKilled( killed + increment );
  }

  const killPerson = ()=>kill(SIZES.person);
  const killCouple = ()=>kill(SIZES.couple);
  const killFamily = ()=>kill(SIZES.family);

  const clickHealPerson = ()=>{
    setHealedPerson(healPerson+1);
  }

  const clickHealCouple = ()=>{
    setHeadelCouple(healCouple+2);
  }


  return (
    <div className="App">
      <label htmlFor="labCount">Counter</label>
  <div id="labCount">00{killed}:00{healPerson + healCouple}</div>
      <button onClick={killPerson}>🙎‍♀️</button>
      <button onClick={killCouple}>👩‍❤️‍💋‍👩</button>
      <button onClick={killFamily}>👨‍👨‍👧‍👦</button>
      <button onClick={clickHealPerson}>🏥🙎‍♀️</button>
      <button onClick={clickHealCouple}>🏥👩‍❤️‍💋‍👩</button>
    </div>
  );
}

export default App;
