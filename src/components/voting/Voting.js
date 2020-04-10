import React, { useState } from 'react';

import { Icon } from 'react-native-elements';

import CustomText from '../customText/CustomText';
import COLORS from '../../config/colors';

import { Container, ContainerVote } from './styles';

const initial = [0, 0, 0, 0, 0];

function Voting({ name }) {
  const [stars, setStars] = useState(initial);

  const handlePress = position => {
    const newStars = stars.map((value, index) => {
      return index <= position ? 1 : 0;
    });

    setStars(newStars);
  };

  const render = () => {
    return stars.map((value, index) => {
      return (
        <Icon
          key={Math.rand}
          name="star"
          color={value ? COLORS.BLACK : COLORS.GRAY_LIGHT}
          size={35}
          onPress={() => handlePress(index)}
        />
      );
    });
  };
  return (
    <Container>
      <CustomText>{name}</CustomText>
      <ContainerVote>{render()}</ContainerVote>
    </Container>
  );
}

export default Voting;
