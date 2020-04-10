import styled from 'styled-components/native';

import COLORS from '../../config/colors';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 0 20px 0 20px;
  justify-content: center;
`;

export const Div = styled.View`
  width: 8px;
  border-radius: 3px;
  margin-right: 10px;
  background-color: ${COLORS.PRIMARY};
`;
