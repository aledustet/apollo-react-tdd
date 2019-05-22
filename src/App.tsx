import React, { FunctionComponent } from 'react';
import './App.css';
import { CountriesQuery } from './query';

const App: FunctionComponent = () => {
  return (
    <CountriesQuery>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return <div data-testid={'error'}> {error.message}</div>;
        if(data && data.countries.length > 0) {
          return (
            data.countries.map((country) => {
              return <div key={country.code}>
                <h1>Name: <span>{country.name}</span></h1>
                <p>Continent <span>{country.continent.name}</span></p>
              </div>
            })
          )
        }
      }}
    </CountriesQuery>
  );
}

export default App;
