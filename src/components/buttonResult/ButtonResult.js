import React from 'react';

import AlertComponent from '../alert/AlertComponent';

import { Button, Text } from './styles';
import { getVotes } from '../../services/votesServices';

function ButtonResult({ navigation, data }) {
  const handlePress = async () => {
    const result = await getIsResult();
    if (!result) {
      AlertComponent(
        'Atenção',
        'Vote em todas as StartUps para ter acesso aos resultados. \n Clique no card \n escolhar as três notas \n Confirmar.',
      );
      return;
    }

    navigation.navigate('Result');
  };

  const getIsResult = async () => {
    try {
      const votes = await getVotes();
      if (votes.length >= data.length) {
        return true;
      }
    } catch (e) {
      console.log(e);
    }
    return false;
  };

  return (
    <Button onPress={handlePress}>
      <Text>Resultados</Text>
    </Button>
  );
}

export default ButtonResult;
