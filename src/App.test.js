import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('should see the score', () => {
  const { getByText } = render(<App />);

  expect(getByText('000:000')).toBeInTheDocument()
});

test('should coronavirus kills a person', () => {
  const { getByText } = render(<App />);

  fireEvent.click(getByText('Kill person'))

  expect(getByText('001:000')).toBeInTheDocument()
});

test('should coronavirus kills more than one person', () => {
  const { getByText } = render(<App />);

  fireEvent.click(getByText('Kill person'))
  fireEvent.click(getByText('Kill person'))

  expect(getByText('002:000')).toBeInTheDocument()
});

test('should coronavirus kills a couple', () => {
  const { getByText } = render(<App />);

  fireEvent.click(getByText('Kill couple'))

  expect(getByText('002:000')).toBeInTheDocument()
});

test('should coronavirus kills a family', () => {
  const { getByText } = render(<App />);

  fireEvent.click(getByText('Kill family'))

  expect(getByText('003:000')).toBeInTheDocument()
});

test('should save a person', () => {
  const { getByText } = render(<App />);

  fireEvent.click(getByText('Save person'))

  expect(getByText('000:001')).toBeInTheDocument()
});

test('should save a couple', () => {
  const { getByText } = render(<App />);

  fireEvent.click(getByText('Save couple'))

  expect(getByText('000:002')).toBeInTheDocument()
});

