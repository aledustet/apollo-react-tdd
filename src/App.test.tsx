import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library'
import App from './App';
import 'jest-dom/extend-expect'
import { MockedProvider } from 'react-apollo/test-utils';
import { errorMocks, countriesWithCubaQueryMock } from './query.mocks';

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


it('renders the country and the continent name when the query returns a response', async () => {
  const { getByText } = render(
    <MockedProvider mocks={countriesWithCubaQueryMock} addTypename={false}>
      <App />
    </MockedProvider>
  );
  const countryNameElement = await waitForElement(() => getByText(`Cuba`))
  const countryContinentElement = await waitForElement(() => getByText(`America`))
  expect(countryNameElement).toBeDefined();
  expect(countryContinentElement).toBeDefined();
})
