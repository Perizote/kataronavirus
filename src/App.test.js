import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should see the score', () => {
  const { container } = render(<App />);

  expect(container).toHaveTextContent('000:000')
});
