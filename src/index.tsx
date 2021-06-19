import './index.css';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ApolloClient, InMemoryCache,ApolloProvider} from "@apollo/client";



import App from './App';
import Store from './store/store';
import {GRAPHQL_API_URL} from './api/graphql_api';



const client = new ApolloClient({
  uri: GRAPHQL_API_URL,
  cache: new InMemoryCache()
});



render(
  <ApolloProvider client={client}>
    <Provider store={Store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);



