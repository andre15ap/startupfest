import React from 'react';
import { Icon } from 'react-native-elements';

import AlertComponent from '../alert/AlertComponent';

import { Button } from './styles';

import COLORS from '../../config/colors';

function Tutorial({ detail = false }) {
  const handlePress = async () => {
    const message = detail
      ? '> Toque sobre as estrelas para avaliar nas três categorias. \n' +
        '> Em seguida toque em confirmar. \n\n' +
        'Se ja avaliou esta startUp volte e avalie as demais startups.'
      : '> Toque no cartão da StartUp \n' +
        '> Avalie nas três categorias \n' +
        '> Toque em Confirmar. \n \n' +
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
