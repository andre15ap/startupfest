import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import CardComponent from '../../components/card/CardComponent';
import CustomText from '../../components/customText/CustomText';
import ButtonResult from '../../components/buttonResult/ButtonResult';

import COLORS from '../../config/colors';

import { Container, List, ContainerTitle } from './styles';

import { useQuery } from '@apollo/react-hooks';
import { GET_STARTUPS } from '../../services/apolloQueries';

function HomeScreen({ navigation }) {
  const { loading, error, data } = useQuery(GET_STARTUPS);

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
      //getIsResult();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <List>
        <ContainerTitle>
          <CustomText size={20}>Escolha sua StartUp!</CustomText>
        </ContainerTitle>
        {!loading ? (
          data.allStartups.map(item => (
            <CardComponent
              key={item.name}
              navigation={navigation}
              name={item.name}
              description={item.description}
              imageUrl={item.imageUrl}
              segment={item.Segment.name}
              onPress={handlePress}
            />
          ))
        ) : (
          <ActivityIndicator size="large" color={COLORS.SECONDARY} />
        )}
      </List>
      <ButtonResult
        data={data ? data.allStartups : []}
        navigation={navigation}
      />
    </Container>
  );
}

export default HomeScreen;
