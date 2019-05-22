import React, { FunctionComponent } from 'react';
import './App.css';
import { CountriesQuery } from './query';
import { CountryDetails } from './Country';

const App: FunctionComponent = () => {
  return (
    <CountriesQuery>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return <div data-testid={'error'}> {error.message}</div>;
        if(data && data.countries.length > 0) {
          return (
            data.countries.map((country) => {
              return <CountryDetails key={country.code} country={country}/>
            })
          )
        }
      }}
    </CountriesQuery>
  );
}

export default App;
