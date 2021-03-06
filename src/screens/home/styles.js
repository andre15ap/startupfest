import styled from 'styled-components/native';

import COLORS from '../../config/colors';

export const Container = styled.View`
  flex: 1;
  padding: 0px 10px 0 10px;
  align-items: center;
  width: 100%;
  /* background-color: ${COLORS.PRIMARY}; */
`;

export const ContainerTitle = styled.View`
  margin: 10px 0 5px 0;
`;

export const List = styled.ScrollView.attrs({
  // flex: 1,
  paddingHorizontal: 20,
})`
  width: 100%;
`;
