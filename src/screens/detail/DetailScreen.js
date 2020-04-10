import React, { useEffect, useState } from 'react';

import StartupHeader from '../../components/startupHeader/StartupHeaderComponent';

import { Container } from './styles';

function DetailScreen({ route, navigation }) {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [segment, setSegment] = useState('');

  useEffect(() => {
    setImageUrl(route.params.imageUrl);
    setName(route.params.name);
    setSegment(route.params.segment);
  }, []);

  return (
    <Container>
      <StartupHeader image={imageUrl} name={name} segment={segment} />
    </Container>
  );
}

export default DetailScreen;
