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

  const killOnePerson = getByText('🙎‍♀️');

  fireEvent.click(killOnePerson);

  const counterLabel = getByLabelText('Counter');

  expect(counterLabel).toHaveTextContent('001:000');

});
test('Kill a couple person', ()=>{
  const { getByText, getByLabelText } = render(<App />);

  const killCouple = getByText('👩‍❤️‍💋‍👩');

  fireEvent.click(killCouple);

  const counterLabel = getByLabelText('Counter');

  expect(counterLabel).toHaveTextContent('010:000');

});
