import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import StartupHeader from '../../components/startupHeader/StartupHeaderComponent';
import StartupBody from '../../components/startupBody/StartupBody';
import Voting from '../../components/voting/Voting';
import CustomButtom from '../../components/customButtom/CustomButtom';

import { getVotes, setVotes } from '../../services/votesServices';
import { setVoteService } from '../../services/firebaseService';
import COLORS from '../../config/colors';

import { Container } from './styles';

function DetailScreen({ route, navigation }) {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [segment, setSegment] = useState('');
  const [vote, setVote] = useState(null);
  const [proposal, setProposal] = useState(0);
  const [presentation, setPresentation] = useState(0);
  const [development, setDevelopment] = useState(0);

  const handlePress = async () => {
    await setVoteService(
      name,
      segment,
      imageUrl,
      development,
      presentation,
      proposal,
    );
    !vote &&
      (await setVotes(name, proposal, presentation, development));
    navigation.goBack();
  };

  const renderConfirm = () => {
    return !!(proposal && presentation && development) || vote;
  };

  const getVote = async () => {
    const votes = await getVotes();
    if (votes) {
      const vote = votes.filter(value => {
        return value.name === route.params.name;
      });
      setVote(vote[0]);
    }
  };

  useEffect(() => {
    setImageUrl(route.params.imageUrl);
    setName(route.params.name);
    setSegment(route.params.segment);
    setDescription(route.params.description);
    // setVote(route.params.vote);
    getVote();
    setLoading(false);
  }, []);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.PRIMARY} />
      ) : (
        <>
          <StartupHeader
            image={imageUrl}
            name={name}
            segment={segment}
          />
          <StartupBody text={description} />

          <Voting
            action={setProposal}
            name="Proposta"
            vote={vote ? vote.proposal : 0}
          />
          <Voting
            action={setPresentation}
            name="Apresentação / Pitch"
            vote={vote ? vote.presentation : 0}
          />
          <Voting
            action={setDevelopment}
            name="Desenvolvimento"
            vote={vote ? vote.development : 0}
          />
          {renderConfirm() && (
            <CustomButtom
              text={vote ? 'Voltar' : 'Confirmar'}
              action={handlePress}
            />
          )}
        </>
      )}
    </Container>
  );
}

export default DetailScreen;
