import React from 'react';

import { Text } from './styles';

function CustomText({
  size = false,
  color = false,
  font = false,
  children,
}) {
  return (
    <Text size={size} color={color} font={font}>
      {children}
    </Text>
  );
}

export default CustomText;
