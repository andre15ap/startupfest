import styled from 'styled-components/native';

import COLORS from '../../config/colors';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 0 30px 0 30px;
  justify-content: center;
`;

export const Div = styled.View`
  width: 5px;
  border-radius: 3px;
  margin-right: 12px;
  background-color: ${COLORS.PRIMARY};
`;
