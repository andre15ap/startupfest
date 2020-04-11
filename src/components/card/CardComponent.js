import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';
import StartupHeaderComponent from '../startupHeader/StartupHeaderComponent';

import COLORS from '../../config/colors';
import { getVotes } from '../../services/votesServices';

import { Container, Check } from './styles';

function CardComponent({ navigation, startup, onPress }) {
  const [isVote, setIsVote] = useState(false);
  const handlePress = () => {
    const { imageUrl, name, Segment, description, vote } = startup;
    onPress(name, description, imageUrl, Segment.name, vote);
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
      getVote(startup.name);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    getVote(startup.name);
  }, []);

  return (
    <Container onPress={handlePress}>
      {isVote && (
        <Check>
          <Icon name="check" color={COLORS.SECONDARY} size={30} />
        </Check>
      )}
      <StartupHeaderComponent
        image={startup.imageUrl}
        name={startup.name}
        segment={startup.Segment.name}
      />
    </Container>
  );
}

export default CardComponent;
