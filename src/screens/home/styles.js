import styled from 'styled-components/native';

import COLORS from '../../config/colors';

export const Container = styled.View`
  flex: 1;
  padding: 0px 10px 0 10px;
  align-items: center;
  /* background-color: ${COLORS.PRIMARY}; */
`;

export const ContainerTitle = styled.View`
  margin: 10px 0 5px 0;
`;

export const List = styled.ScrollView.attrs({
  width: '100%',
  flex: 1,
})`
  /* flex: 1; */
`;
