import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('Check for counter', () => {

  const { getByLabelText } = render(<App />);

  const counterLabel = getByLabelText('Counter');

  expect(counterLabel).toHaveTextContent('000:000');

});
test('Kill one person', ()=>{
  const { getByText, getByLabelText } = render(<App />);

  const killOnePerson = getByText('☠🙎‍♀️');

  fireEvent.click(killOnePerson);

  const counterLabel = getByLabelText('Counter');

  expect(counterLabel).toHaveTextContent('001:000');

});
test('Kill a couple person', ()=>{
  const { getByText, getByLabelText } = render(<App />);

  const killCouple = getByText('☠👩‍❤️‍💋‍👩');

  fireEvent.click(killCouple);

  const counterLabel = getByLabelText('Counter');

  expect(counterLabel).toHaveTextContent('002:000');

});

test('Kill a family', ()=>{
  const { getByText, getByLabelText } = render(<App />);

  const killFamily = getByText('☠👨‍👨‍👧‍👦');

  fireEvent.click(killFamily);

  const counterLabel = getByLabelText('Counter');

  expect(counterLabel).toHaveTextContent('004:000');

});

test('Kill 4 families', ()=>{
  const { getByText, getByLabelText, debug } = render(<App />);

  const killFamily = getByText('☠👨‍👨‍👧‍👦');
  fireEvent.click(killFamily);
  fireEvent.click(killFamily);
  fireEvent.click(killFamily);
  fireEvent.click(killFamily);
  const counterLabel = getByText('016:000');

  expect(counterLabel).toBeTruthy();
})

test('Kill 25 families', ()=>{
  const { getByText } = render(<App />);

  const killFamily = getByText('☠👨‍👨‍👧‍👦');
  for(let i=0;i<25;i+=1){
    fireEvent.click(killFamily);
  }
  
  const counterLabel = getByText('100:000');

  expect(counterLabel).toBeTruthy();
})

test('Heal a person', ()=>{
  const { getByText, getByLabelText } = render(<App />);

  const healPerson = getByText('🏥🙎‍♀️');

  fireEvent.click(healPerson);

  const counterLabel = getByLabelText('Counter');

  expect(counterLabel).toHaveTextContent('000:001');

});

test('Heal a couple', ()=>{
  const { getByText, getByLabelText } = render(<App />);

  const healCouple = getByText('🏥👩‍❤️‍💋‍👩');

  fireEvent.click(healCouple);

  const counterLabel = getByLabelText('Counter');

  expect(counterLabel).toHaveTextContent('000:002');

});

test('Heal a family', ()=>{
  const { getByText, getByLabelText } = render(<App />);

  const healFamily = getByText('🏥👨‍👨‍👧‍👦');

  fireEvent.click(healFamily);

  const counterLabel = getByLabelText('Counter');

  expect(counterLabel).toHaveTextContent('000:004');

});

test('Heal 4 families', ()=>{
  const { getByText } = render(<App />);

  const killFamily = getByText('🏥👨‍👨‍👧‍👦');
  fireEvent.click(killFamily);
  fireEvent.click(killFamily);
  fireEvent.click(killFamily);
  fireEvent.click(killFamily);
  const counterLabel = getByText('000:016');

  expect(counterLabel).toBeTruthy();
})

test('Heal 25 families', ()=>{
  const { getByText } = render(<App />);

  const healFamily = getByText('🏥👨‍👨‍👧‍👦');
  for(let i=0;i<25;i+=1){
    fireEvent.click(healFamily);
  }
  
  const counterLabel = getByText('000:100');

  expect(counterLabel).toBeTruthy();
})
