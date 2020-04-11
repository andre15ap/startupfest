import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  //   paddingVertical: 20,
  paddingHorizontal: 20,
  flex: 1,
})``;

export const ContainerRow = styled.View`
  /* padding: 0px 5px 5px 0px; */
  align-items: flex-start;
  flex-direction: row;
`;

export const ContainerTitle = styled.View`
  flex: 1;
  margin: 20px 0 5px 0;
  align-items: center;
  justify-content: ${props => props.align || 'flex-start'};
  flex-direction: row;
`;

export const Line = styled.View`
  border-bottom-width: 1px;
  border-color: red;
`;
