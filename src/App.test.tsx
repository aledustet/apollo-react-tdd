import React from 'react';
import { render, cleanup } from 'react-testing-library'
import App from './App';
import 'jest-dom/extend-expect'

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

it('renders the Hello Apollo Message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Hello Apollo')).toBeDefined();
});
