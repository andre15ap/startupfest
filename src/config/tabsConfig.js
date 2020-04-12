import React from 'react';
import { Icon } from 'react-native-elements';

import COLORS from './colors';

export const tabScreenOption = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Inicio') {
      iconName = focused ? 'home' : 'home';
    } else if (route.name === 'Resultados') {
      iconName = focused ? 'list' : 'list';
    }

    // You can return any component that you like here!
    return (
      <Icon
        type="font-awesome"
        name={iconName}
        size={size}
        color={color}
      />
    );
  },
});

export const tabBarOptions = {
  activeTintColor: COLORS.PRIMARY,
  inactiveTintColor: COLORS.GRAY,
};
