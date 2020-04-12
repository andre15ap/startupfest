import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';

import CustomText from '../../components/customText/CustomText';
import CustomButtom from '../../components/customButtom/CustomButtom';
import ResultRow from '../../components/resultRow/ResultRow';

import { getVotesService } from '../../services/firebaseService';
import getResults from '../../services/votesResultService';
import { cleanVotes } from '../../services/votesServices';

import COLORS from '../../config/colors';

import {
  Container,
  ContainerRow,
  ContainerTitle,
  ContainerButton,
} from './styles';

function ResultScreen({ navigation }) {
  const [proposal, setProposal] = useState([]);
  const [presentation, setPresentation] = useState([]);
  const [development, setDevelopment] = useState([]);
  const [loading, setLoading] = useState(true);

  const getVotes = data => {
    const {
      ordProposal,
      ordPresentation,
      ordDevelopment,
    } = getResults(data);

    setProposal(ordProposal);
    setPresentation(ordPresentation);
    setDevelopment(ordDevelopment);
    setLoading(false);
  };

  const voteNow = async () => {
    await cleanVotes();
    navigation.navigate('Home');
  };

  const getService = async () => {
    const response = await getVotesService();
    getVotes(response);
  };

  useEffect(() => {
    getService();
  }, []);

  return (
    <Container>
      <ContainerTitle align="center">
        <CustomText size={20}>Resultados</CustomText>
      </ContainerTitle>

      {!loading ? (
        <>
          <ContainerTitle>
            <CustomText size={20}>Proposta</CustomText>
          </ContainerTitle>

          {proposal &&
            proposal.map((value, index) => (
              <ContainerRow>
                <ResultRow
                  key={value}
                  index={index + 1}
                  name={value.name}
                  segment={value.segment}
                  image={value.imageUrl}
                  note={value.med}
                />
              </ContainerRow>
            ))}

          <ContainerTitle>
            <CustomText size={20}>Apresentação / Pitch</CustomText>
          </ContainerTitle>

          {presentation &&
            presentation.map((value, index) => (
              <ContainerRow>
                <ResultRow
                  key={value}
                  index={index + 1}
                  name={value.name}
                  segment={value.segment}
                  image={value.imageUrl}
                  note={value.med}
                />
              </ContainerRow>
            ))}

          <ContainerTitle>
            <CustomText size={20}>Desenvolvimento</CustomText>
          </ContainerTitle>

          {development &&
            development.map((value, index) => (
              <ContainerRow>
                <ResultRow
                  key={`${value}${Math.rand}`}
                  index={index + 1}
                  name={value.name}
                  segment={value.segment}
                  image={value.imageUrl}
                  note={value.med}
                />
              </ContainerRow>
            ))}
        </>
      ) : (
        <ActivityIndicator size="large" color={COLORS.PRIMARY} />
      )}

      <ContainerButton>
        <CustomButtom
          text={'Voltar'}
          action={() => navigation.navigate('Home')}
        />
        <CustomButtom
          text={'Votar Novamente'}
          action={voteNow}
          color={COLORS.PRIMARY}
        />
      </ContainerButton>
    </Container>
  );
}

export default ResultScreen;
