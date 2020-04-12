import React from 'react';
import { Icon } from 'react-native-elements';

import AlertComponent from '../alert/AlertComponent';

import { Button } from './styles';

import COLORS from '../../config/colors';

function Tutorial({ detail = false }) {
  const handlePress = async () => {
    const message = detail
      ? '> Toque sobre as estrelas para avaliar as três categorias. \n' +
        '> Em seguida toque em confirmar. \n' +
        '> Avalie as demais StartUps seguindo o mesmo processo. \n \n' +
        'Se ja avaliou esta startUp volte e avalie as demais startups.'
      : '> Clique no cartão da StartUp \n' +
        '> Avalie nos três requisitos \n' +
        '> Clique em Confirmar. \n \n' +
        'Avalie todas as StartUps e veja o ranking na tela Resultados';
    AlertComponent('Ajuda', message);
  };

  return (
    <Button onPress={handlePress}>
      <Icon
        name="question-circle-o"
        type="font-awesome"
        size={20}
        color={COLORS.WHITE}
      />
    </Button>
  );
}

export default Tutorial;
