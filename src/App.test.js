import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Check for counter', () => {

  const { getByLabelText } = render(<App />);

  const counterLabel = getByLabelText('Counter');

  expect(counterLabel).toHaveTextContent('000:000');

});
// test('', ()=>{

// });
