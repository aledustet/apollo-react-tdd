import { Country } from './types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const query = gql`
{
  countries {
    name
    code
    continent {
      name
    }
  }
}
`;

export interface CountriesData {
  countries: Country[];
}

export class CountriesQuery extends Query<CountriesData, {}> {
  static readonly defaultProps = { query };
}
