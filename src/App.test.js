import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('should see the score', () => {
  const { container } = render(<App />);

  expect(container).toHaveTextContent('000:000')
});

test('should coronavirus kills a person', () => {
  const { container, getByText } = render(<App />);

  fireEvent.click(getByText('Kill person'))

  expect(container).toHaveTextContent('001:000')
});

test('should coronavirus kills more than one person', () => {
  const { container, getByText } = render(<App />);

  fireEvent.click(getByText('Kill person'))
  fireEvent.click(getByText('Kill person'))

  expect(container).toHaveTextContent('002:000')
});

test('should coronavirus kills a couple', () => {
  const { container, getByText } = render(<App />);

  fireEvent.click(getByText('Kill couple'))

  expect(container).toHaveTextContent('002:000')
});
