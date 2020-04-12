import React, { useEffect, useState } from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native';

import CardComponent from '../../components/card/CardComponent';
import CustomText from '../../components/customText/CustomText';
import ButtonResult from '../../components/buttonResult/ButtonResult';

import COLORS from '../../config/colors';

import { Container, List, ContainerTitle } from './styles';

import { useQuery } from '@apollo/react-hooks';
import { GET_STARTUPS } from '../../services/apolloQueries';

function HomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const { loading, error, data, refetch } = useQuery(GET_STARTUPS);

  const handlePress = (name, description, imageUrl, segment) => {
    navigation.navigate('Detail', {
      name,
      description,
      imageUrl,
      segment,
    });
  };

  const onRefresh = async () => {
    console.log('-- chamado --');
    setRefreshing(true);
    try {
      await refetch();
      console.log(' feito');
    } catch (e) {
      console.log(e);
    }
    setRefreshing(false);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      //getIsResult();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <List
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <ContainerTitle>
          <CustomText size={20}>Escolha sua StartUp!</CustomText>
        </ContainerTitle>
        {!loading ? (
          error ? (
            <>
              <CustomText size={16}>
                Verifique sua conexão com a internet!
              </CustomText>
              <CustomText size={16}>
                Push para ↓ tentar novamente!
              </CustomText>
            </>
          ) : (
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
          )
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
