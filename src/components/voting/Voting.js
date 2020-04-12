import React, { useEffect, useState } from 'react';

import { Icon } from 'react-native-elements';

import CustomText from '../customText/CustomText';
import Stars from '../stars/Stars';
import AlertComponent from '../alert/AlertComponent';

import COLORS from '../../config/colors';

import { Container, ContainerVote, ContainerRoew } from './styles';

function Voting({
  name,
  description = '',
  action,
  quantid = 5,
  vote,
}) {
  const [stars, setStars] = useState([]);

  const handlePress = position => {
    if (vote) return;
    action(position + 1);
    const newStars = stars.map((value, index) => {
      return index <= position;
    });
    setStars(newStars);
  };

  const handleTuto = () => {
    AlertComponent(name, description);
  };

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < quantid; i++) {
      newStars.push(i < vote);
    }
    setStars(newStars);
  }, [vote]);

  return (
    <Container>
      <ContainerRoew onPress={handleTuto}>
        <CustomText>{name}</CustomText>
        <Icon
          name="md-alert"
          type="ionicon"
          size={15}
          color={COLORS.PRIMARY_TRANSPARENT}
        />
      </ContainerRoew>
      <ContainerVote>
        <Stars stars={stars} size={40} onPress={handlePress} />
      </ContainerVote>
    </Container>
  );
}

export default Voting;
