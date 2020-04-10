import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import COLORS from '../../config/colors';

const size = Dimensions.get('window').width;

export const Container = styled.View`
  padding: 10px 0 10px 0;
`;

export const Img = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: ${size * 0.5}px;
  height: ${size * 0.5}px;
  align-self: center;
  margin-bottom: 10px;
  background-color: transparent;
`;
export const Text = styled.Text`
  font-size: ${props => props.size || 12}px;
  color: ${COLORS.GRAY};
`;
