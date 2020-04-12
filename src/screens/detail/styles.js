import styled from 'styled-components/native';

import COLORS from '../../config/colors';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${COLORS.WHITE};
`;

export const Scroll = styled.ScrollView.attrs({
  flex: 1,
  paddingRight: 10,
  paddingLeft: 10,
  paddingBottom: 50,
})`
  background-color: ${COLORS.WHITE};
`;
