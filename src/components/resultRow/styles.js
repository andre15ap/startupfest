import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px 0 10px 0;
`;

export const Img = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 80px;
  height: 80px;
  align-self: center;
  margin: 0 15px 0 10px;
  background-color: transparent;
  border-radius: 5px;
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
