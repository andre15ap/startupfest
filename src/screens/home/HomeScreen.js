import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import CardComponent from '../../components/card/CardComponent';
import CustomText from '../../components/customText/CustomText';
import ButtonResult from '../../components/buttonResult/ButtonResult';

import COLORS from '../../config/colors';

import { Container, List } from './styles';

import DATA from '../../services/apiTest';
import {
  getVotes,
  setVotes,
  cleanVotes,
} from '../../services/votesServices';

function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const votes = await getVotes();
    if (votes) {
      const newData = DATA.map(value => {
        const newVote = votes.filter(v => v.name === value.name);
        return { ...value, vote: newVote[0] };
      });
      setData(newData);
    }
    setLoading(false);
  };

  const handlePress = (
    name,
    description,
    imageUrl,
    segment,
    vote,
  ) => {
    navigation.navigate('Detail', {
      name,
      description,
      imageUrl,
      segment,
      vote,
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setLoading(true);
      getData();
      // cleanVotes();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <List>
        <CustomText size={20}>Escolha sua StartUp!</CustomText>
        {!loading ? (
          data.map(item => (
            <CardComponent
              key={item.name}
              startup={item}
              onPress={handlePress}
            />
          ))
        ) : (
          <ActivityIndicator size="large" color={COLORS.PRIMARY} />
        )}
      </List>
      <ButtonResult navigation={navigation} />
    </Container>
  );
}

export default HomeScreen;
