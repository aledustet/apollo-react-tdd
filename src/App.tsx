import React, { FunctionComponent } from 'react';
import './App.css';
import { CountriesQuery } from './query';

const App: FunctionComponent = () => {
  return (
    <CountriesQuery>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return <div data-testid={'error'}> {error.message}</div>;
      }}
    </CountriesQuery>
  );
}

export default App;
