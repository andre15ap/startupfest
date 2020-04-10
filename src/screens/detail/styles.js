import styled from 'styled-components/native';

import COLORS from '../../config/colors';

export const Container = styled.ScrollView.attrs({
  flex: 1,
  paddingRight: 10,
  paddingLeft: 10,
  paddingBottom: 50,
})`
  background-color: ${COLORS.WHITE};
`;
