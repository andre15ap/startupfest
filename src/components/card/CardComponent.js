import React from 'react';

import StartupHeaderComponent from '../startupHeader/StartupHeaderComponent';

import { Container } from './styles';

function CardComponent({ startup, onPress }) {
  const handlePress = () => {
    const { imageUrl, name, Segment, description } = startup;
    onPress(name, description, imageUrl, Segment.name);
  };
  return (
    <Container onPress={handlePress}>
      <StartupHeaderComponent
        image={startup.imageUrl}
        name={startup.name}
        segment={startup.Segment.name}
      />
    </Container>
  );
}

export default CardComponent;
