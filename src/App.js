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
  const [healed, setHealed] = useState(0);

  const convert = (number) => `00${ number }`.slice(-3)

  const kill = (size) => {
    const increment = size;
    setKilled( killed + increment );
  }

  const killPerson = ()=>kill(SIZES.person);
  const killCouple = ()=>kill(SIZES.couple);
  const killFamily = ()=>kill(SIZES.family);

  const heal = (size) => {
    const increment = size;
    setHealed( healed + increment );
  }

  const healPerson = ()=>heal(SIZES.person);
  const healCouple = ()=>heal(SIZES.couple);
  const healFamily = ()=>heal(SIZES.family);

  return (
    <div className="App">
      <label htmlFor="labCount">Counter</label>
      <div id="labCount">{convert(killed)}:{convert(healed)}</div>
      <button onClick={killPerson}>☠🙎‍♀️</button>
      <button onClick={killCouple}>☠👩‍❤️‍💋‍👩</button>
      <button onClick={killFamily}>☠👨‍👨‍👧‍👦</button>
      <button onClick={healPerson}>🏥🙎‍♀️</button>
      <button onClick={healCouple}>🏥👩‍❤️‍💋‍👩</button>
      <button onClick={healFamily}>🏥👨‍👨‍👧‍👦</button>
    </div>
  );
}

export default App;
