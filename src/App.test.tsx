import React from 'react';
import { render, cleanup } from 'react-testing-library'
import App from './App';
import 'jest-dom/extend-expect'
import { MockedProvider } from 'react-apollo/test-utils';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

it('renders the loading message', () => {
  const { getByText } = render(
    <MockedProvider mocks={[]} addTypename={false}>
      <App />
    </MockedProvider>,
  )
  expect(getByText('Loading...')).toBeDefined();
});
