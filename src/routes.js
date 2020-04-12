import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/home/HomeScreen';
import DetailScreen from './screens/detail/DetailScreen';
import ResultScreen from './screens/result/ResultScreen';

import { tabScreenOption, tabBarOptions } from './config/tabsConfig';

import COLORS from './config/colors';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

const ResultsStack = createStackNavigator();

function ResultsStackScreen() {
  return (
    <ResultsStack.Navigator>
      <ResultsStack.Screen
        name="Results"
        component={ResultScreen}
        options={{
          headerShown: false,
        }}
      />
    </ResultsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={COLORS.PRIMARY_DARK}
        barStyle="light-content"
      />
      <Tab.Navigator
        screenOptions={tabScreenOption}
        tabBarOptions={tabBarOptions}
      >
        <Tab.Screen name="Inicio" component={HomeStackScreen} />
        <Tab.Screen
          name="Resultados"
          component={ResultsStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
