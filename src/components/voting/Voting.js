import React, { useEffect, useState } from 'react';

import CustomText from '../customText/CustomText';
import Stars from '../stars/Stars';

import { Container, ContainerVote } from './styles';

function Voting({ name, action, quantid = 5, vote }) {
  const [stars, setStars] = useState([]);

  const handlePress = position => {
    if (vote) return;
    action(position + 1);
    const newStars = stars.map((value, index) => {
      return index <= position;
    });
    setStars(newStars);
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
      <CustomText>{name}</CustomText>
      <ContainerVote>
        <Stars stars={stars} onPress={handlePress} />
      </ContainerVote>
    </Container>
  );
}

export default Voting;
