import React from 'react';
import { Country } from './types';
import { CountryDetails } from './Country';
import { render, waitForElement } from 'react-testing-library';

describe('<CountryDetails/>', () => {
  it('renders the country name', async () => {
    const countryName = 'name';
    const continentName = 'continentName';
    const country: Country = {
      name: countryName,
      code: 'code',
      continent: {
        name: continentName,
        code: 'code',
      },
      currency: 'currency',
      native:  'native',
    }
    const { getByText } = render(
      <CountryDetails country={country}/>
    );
    const countryNameElement = await waitForElement(() => getByText(countryName))
    const countryContinentElement = await waitForElement(() => getByText(continentName))
    expect(countryNameElement).toBeDefined();
    expect(countryContinentElement).toBeDefined();
  })
});

