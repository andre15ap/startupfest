/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import Routes from './src/routes';
import { name as appName } from './app.json';

import { ApolloProvider } from '@apollo/react-hooks';
// import { ApolloClient } from 'apollo-client';
// import ApolloClient from 'apollo-boost';
import client from './src/services/apolloClient';

// const client = new ApolloClient();

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => App);
