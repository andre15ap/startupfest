import React, { useEffect, useState } from 'react';

import StartupHeader from '../../components/startupHeader/StartupHeaderComponent';
import StartupBody from '../../components/startupBody/StartupBody';
import Voting from '../../components/voting/Voting';
import CustomButtom from '../../components/customButtom/CustomButtom';

import { Container } from './styles';

function DetailScreen({ route, navigation }) {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [segment, setSegment] = useState('');
  const [proposal, setProposal] = useState(0);
  const [presentation, setPresentation] = useState(0);
  const [development, setDevelopment] = useState(0);

  const handlePress = () => {
    alert(
      `proposta = ${proposal}, apresen = ${presentation}, desenvo = ${development}`,
    );
    navigation.goBack();
  };

  const renderConfirm = () => {
    return !!(proposal && presentation && development);
  };

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
      <Voting action={setProposal} name="Proposta" />
      <Voting action={setPresentation} name="Apresentação/Pitch" />
      <Voting action={setDevelopment} name="Desenvolvimento" />
      {renderConfirm() && (
        <CustomButtom text="Confirmar" action={handlePress} />
      )}
    </Container>
  );
}

export default DetailScreen;
