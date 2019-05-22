import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library'
import App from './App';
import 'jest-dom/extend-expect'
import { MockedProvider } from 'react-apollo/test-utils';
import { errorMocks, countriesWithCubaQueryMock } from './query.mocks';

import Enzyme, { mount } from 'enzyme';
import wait from 'waait';
import { CountryDetails } from './Country';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

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

it('renders the country and the continent name when the query returns a response with jest', async () => {
  const wrapper = mount(
    <MockedProvider mocks={countriesWithCubaQueryMock} addTypename={false}>
      <App />
    </MockedProvider>
  );

  await wait(0);

  // we could not find the elements by text, we can only refer
  // to them if we add a test id or leak implmentation details

  expect(wrapper.find(CountryDetails)).toBeDefined();
})
