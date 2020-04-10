import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px 10px 0 10px;
  align-items: center;
`;

export const ContainerList = styled.View`
  /* flex: 1; */
`;

export const List = styled.ScrollView.attrs({
  width: '100%',
  flex: 1,
})`
  /* flex: 1; */
`;
