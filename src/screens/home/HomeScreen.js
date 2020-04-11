import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import CardComponent from '../../components/card/CardComponent';
import CustomText from '../../components/customText/CustomText';
import ButtonResult from '../../components/buttonResult/ButtonResult';

import COLORS from '../../config/colors';

import { Container, List } from './styles';

import { useQuery } from '@apollo/react-hooks';
import { GET_STARTUPS } from '../../services/apolloQueries';

import {
  getVotes,
  setVotes,
  cleanVotes,
} from '../../services/votesServices';

function HomeScreen({ navigation }) {
  const [startups, setStartups] = useState([]);
  const { loading, error, data } = useQuery(GET_STARTUPS);
  // console.log(data);

  // const getData = async () => {
  //   const votes = await getVotes();
  //   if (votes) {
  //     const newData = DATA.map(value => {
  //       const newVote = votes.filter(v => v.name === value.name);
  //       return { ...value, vote: newVote[0] };
  //     });
  //     setData(newData);
  //   }
  //   setLoading(false);
  // };

  const handlePress = (name, description, imageUrl, segment) => {
    navigation.navigate('Detail', {
      name,
      description,
      imageUrl,
      segment,
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // cleanVotes();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <List>
        <CustomText size={20}>Escolha sua StartUp!</CustomText>
        {!loading ? (
          data.allStartups.map(item => (
            <CardComponent
              key={item.name}
              navigation={navigation}
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
