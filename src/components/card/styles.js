import styled from 'styled-components/native';

import COLORS from '../../config/colors';

export const Container = styled.TouchableOpacity`
  background-color: ${COLORS.WHITE};
  padding: 10px 25px;
  elevation: 3;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin: 10px 20px 10px 20px;
`;

export const Check = styled.View`
  position: absolute;
  align-self: flex-end;
  top: 0;
  padding: 10px;
`;
