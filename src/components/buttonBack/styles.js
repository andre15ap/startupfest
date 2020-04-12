import styled from 'styled-components/native';

import COLORS from '../../config/colors';

export const Button = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  top: 10px;
  left: 0px;
  padding: 10px 10px;
`;

export const Text = styled.Text`
  color: ${COLORS.WHITE};
  font-size: 12px;
  background: ${COLORS.TRANSPARENT};
`;
