import React from 'react';

import { Container, Text } from './styles';

function CustomButtom({ color, size, text, action }) {
  return (
    <Container color={color} onPress={action}>
      <Text size={size}>{text}</Text>
    </Container>
  );
}

export default CustomButtom;
