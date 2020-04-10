import styled from 'styled-components/native';

import COLORS from '../../config/colors';
import FONTS from '../../config/fonts';

export const Container = styled.TouchableOpacity`
  width: 70%;
  background-color: ${props => props.color || COLORS.SECONDARY};
  align-self: ${props => props.font || 'center'};
  margin-top: 10px;
  padding: 8px 15px 8px 15px;
  margin-bottom: 10px;
  border-radius: 25px;
  elevation: 3;
  border-width: 1px;
  border-color: ${COLORS.SECONDARY_LIGHT};
  align-items: center;
`;
export const Text = styled.Text`
  font-size: ${props => props.size || 15}px;
  color: ${props => props.color || COLORS.WHITE};
  font-family: ${props => props.font || FONTS.COMFORTAA_MEDIUM};
  align-self: ${props => props.font || 'center'};
  text-align: justify;
`;
