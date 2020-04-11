import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home/HomeScreen';
import DetailScreen from './screens/detail/DetailScreen';
import ResultScreen from './screens/result/ResultScreen';

// import { ApolloProvider } from '@apollo/react-hooks';
// import client from './services/apolloClient';

import COLORS from './config/colors';

const Stack = createStackNavigator();

function Routes() {
  return (
    // <ApolloProvider client={client}>
    <NavigationContainer>
      <StatusBar
        backgroundColor={COLORS.PRIMARY_DARK}
        barStyle="light-content"
      />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </ApolloProvider>
  );
}

export default Routes;
