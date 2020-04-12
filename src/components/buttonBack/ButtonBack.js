import React from 'react';
import { Icon } from 'react-native-elements';

import AlertComponent from '../alert/AlertComponent';

import { Button, Text } from './styles';
import { getVotes } from '../../services/votesServices';

import COLORS from '../../config/colors';

function ButtonBack({ navigation }) {
  const handlePress = async () => {
    navigation.goBack();
  };

  return (
    <Button onPress={handlePress}>
      <Icon
        name="arrow-left-circle"
        type="feather"
        size={30}
        color={COLORS.PRIMARY}
      />
    </Button>
  );
}

export default ButtonBack;
