import React from 'react';

import CustomText from '../customText/CustomText';

import { Container, Div } from './styles';

function StartupBody({ text }) {
  return (
    <Container>
      <Div />
      <CustomText size={12}>{text}</CustomText>
    </Container>
  );
}

export default StartupBody;
