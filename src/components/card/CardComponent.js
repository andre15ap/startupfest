import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';
import StartupHeaderComponent from '../startupHeader/StartupHeaderComponent';

import COLORS from '../../config/colors';
import { getVotes } from '../../services/votesServices';

import { Container, Check } from './styles';

function CardComponent({
  navigation,
  name,
  description,
  imageUrl,
  segment,
  onPress,
}) {
  const [isVote, setIsVote] = useState(false);
  const handlePress = () => {
    onPress(name, description, imageUrl, segment);
  };

  const getVote = async startupName => {
    const votes = await getVotes();
    if (votes) {
      const vote = votes.filter(value => {
        return value.name === startupName;
      });
      setIsVote(vote.length > 0);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getVote(name);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    getVote(name);
  }, []);

  return (
    <Container onPress={handlePress}>
      {isVote && (
        <Check>
          <Icon name="check" color={COLORS.SECONDARY} size={30} />
        </Check>
      )}
      <StartupHeaderComponent
        image={imageUrl}
        name={name}
        segment={segment}
      />
    </Container>
  );
}

export default CardComponent;
