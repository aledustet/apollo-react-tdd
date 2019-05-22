import React, { FunctionComponent } from 'react';
import { Country } from './types';

interface CountryDetailsProps {
  country: Country;
}

export const CountryDetails: FunctionComponent<CountryDetailsProps> = ({country}) => {
  return <div>
    <h1>Name: <span>{country.name}</span></h1>
    <p>Continent <span>{country.continent.name}</span></p>
  </div>
}
