import React from 'react';

import { Text } from './styles';

function CustomText({
  size = false,
  color = false,
  font = false,
  align = false,
  children,
}) {
  return (
    <Text size={size} color={color} font={font} align={align}>
      {children}
    </Text>
  );
}

export default CustomText;
