import React, { useEffect, useState } from 'react';

import StartupHeader from '../../components/startupHeader/StartupHeaderComponent';
import StartupBody from '../../components/startupBody/StartupBody';
import Voting from '../../components/voting/Voting';

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
    setDescription(route.params.description);
  }, []);

  return (
    <Container>
      <StartupHeader image={imageUrl} name={name} segment={segment} />
      <StartupBody text={description} />
      <Voting name="Proposta" />
      <Voting name="Apresentação/Pitch" />
      <Voting name="Desenvolvimento" />
    </Container>
  );
}

export default DetailScreen;
