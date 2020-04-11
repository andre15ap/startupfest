import styled from 'styled-components/native';

import COLORS from '../../config/colors';
import FONTS from '../../config/fonts';

export const Text = styled.Text`
  font-size: ${props => props.size || 15}px;
  color: ${props => props.color || COLORS.GRAY};
  font-family: ${props => props.font || FONTS.COMFORTAA_MEDIUM};
  align-self: ${props => props.align || 'center'};
  text-align: justify;
`;
