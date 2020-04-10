import React, { useEffect, useState } from 'react';

import CardComponent from '../../components/card/CardComponent';
import CustomText from '../../components/customText/CustomText';

import { Text } from 'react-native';
import { Container, List, ContainerList } from './styles';

import DATA from '../../services/apiTest';

function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);

  const getData = () => {
    setData(DATA);
  };

  const handlePress = (name, description, imageUrl, segment) => {
    navigation.navigate('Detail', {
      name,
      description,
      imageUrl,
      segment,
    });
  };

  useEffect(() => {
    // DATA.map(value => {
    //   console.log(value.Segment);
    // });
    getData();
  }, []);

  return (
    <Container>
      <List>
        <CustomText size={20}>Escolha sua StartUp!</CustomText>
        {data.length > 0 ? (
          data.map(item => (
            <CardComponent
              key={item.name}
              startup={item}
              onPress={handlePress}
            />
          ))
        ) : (
          <Text>Carregando</Text>
        )}
      </List>
    </Container>
  );
}

export default HomeScreen;
