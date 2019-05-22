import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library'
import App from './App';
import 'jest-dom/extend-expect'
import { MockedProvider } from 'react-apollo/test-utils';
import { errorMocks } from './query.mocks';

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

it('renders the error message when it fails', async () => {
  const errorMessage = 'womp womp';
  const { getByTestId } = render(
    <MockedProvider mocks={errorMocks(errorMessage)} addTypename={false}>
      <App />
    </MockedProvider>
  );
  const errorTextElement = await waitForElement(() => getByTestId('error'))
  expect(errorTextElement).toHaveTextContent(errorMessage);
})
