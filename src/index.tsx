import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export const Wrapper: FunctionComponent = ({children}) => {
  return <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
}

ReactDOM.render(<Wrapper><App/></Wrapper>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
