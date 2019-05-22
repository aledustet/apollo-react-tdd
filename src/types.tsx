export type Continent = {
  __typename: 'Continent',
  code: string,
  name: string,
  countries: Country[],
};

export type Country = {
  __typename: 'Country',
  code: string,
  name: string,
  native: string,
  phone?: string,
  continent: Continent,
  currency: string,
  languages?: Language[],
  emoji?: string,
  emojiU?: string,
};

export type Language = {
  __typename: 'Language',
  code: string,
  name: string,
  native: string,
  rtl?: number,
};

export type Query = {
  __typename: 'Query',
  countries: Country[],
  country: Country,
};
