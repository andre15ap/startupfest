import React from 'react';

import { Button, Text } from './styles';

function ButtonResult({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Result');
  };

  return (
    <Button onPress={handlePress}>
      <Text>Resultados</Text>
    </Button>
  );
}

export default ButtonResult;
