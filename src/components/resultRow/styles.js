import styled from 'styled-components/native';

import COLORS from '../../config/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px 0 10px 0;
`;

export const ContainerImage = styled.View`
  border-width: 1px;
  border-color: ${COLORS.GRAY_LIGHT};
  padding: 5px;
  margin: 0 15px 0 10px;
  border-radius: 3px;
`;

export const Img = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 70px;
  height: 70px;
  align-self: center;
  background-color: transparent;
  border-radius: 8px;
`;

export const ContainerColumn = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContainerRow = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
