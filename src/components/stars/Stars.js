import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';

import COLORS from '../../config/colors';

import { Container } from './styles';

function Stars({ size = 35, stars = [], onPress = null }) {
  const handlePress = position => {
    onPress && onPress(position);
  };
  return (
    <Container>
      {stars.map((value, index) => {
        return (
          <Icon
            key={index}
            name="star"
            color={value ? COLORS.BLACK : COLORS.GRAY_LIGHT}
            size={size}
            onPress={() => handlePress(index)}
          />
        );
      })}
    </Container>
  );
}

export default Stars;
