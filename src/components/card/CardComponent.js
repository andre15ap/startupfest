import React from 'react';
import { Icon } from 'react-native-elements';
import StartupHeaderComponent from '../startupHeader/StartupHeaderComponent';
import { Container, Check } from './styles';

import COLORS from '../../config/colors';

function CardComponent({ startup, onPress }) {
  const handlePress = () => {
    const { imageUrl, name, Segment, description } = startup;
    onPress(name, description, imageUrl, Segment.name);
  };
  return (
    <Container onPress={handlePress}>
      <Check>
        <Icon name="check" color={COLORS.SECONDARY} size={30} />
      </Check>
      <StartupHeaderComponent
        image={startup.imageUrl}
        name={startup.name}
        segment={startup.Segment.name}
      />
    </Container>
  );
}

export default CardComponent;
