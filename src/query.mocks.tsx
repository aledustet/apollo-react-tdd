import { query } from './query';

const countriesWithCubaQueryMock = [{
  request: {
    query,
  },
  result: {
    data: {
      countries: [
        {
          name:"Cuba",
          code:"CU",
          continent:{
          name:"America",
          __typename:"Continent"
          },
          __typename:"Country"
        },
      ]
    }
  }
}];

const errorMocks = (message: string) => {
  return [
    {
      request: {
        query,
      },
      error: new Error(message)
    }
  ]
}

export { errorMocks, countriesWithCubaQueryMock };
