import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';

import CustomText from '../../components/customText/CustomText';
import ResultRow from '../../components/resultRow/ResultRow';

import data from '../../services/apiVotesTest';
import ordenateByKey from '../../services/arrayService';

import COLORS from '../../config/colors';

import { Container, ContainerRow, ContainerTitle } from './styles';

function ResultScreen() {
  const [proposal, setProposal] = useState([]);
  const [presentation, setPresentation] = useState([]);
  const [development, setDevelopment] = useState([]);
  const [loading, setLoading] = useState(true);

  const getVotes = () => {
    const votes = {};
    data.forEach(value => {
      const {
        name,
        segment,
        imageUrl,
        development,
        presentation,
        proposal,
      } = value;
      if (votes.hasOwnProperty(name)) {
        votes[name].development += development;
        votes[name].presentation += presentation;
        votes[name].proposal += proposal;
        votes[name].qtd += 1;
      } else {
        votes[name] = {
          name,
          imageUrl,
          segment,
          development,
          presentation,
          proposal,
          qtd: 1,
        };
      }
    });

    calculeMedia(votes);
  };

  const calculeMedia = votes => {
    const listProposal = [];
    const listPresentation = [];
    const listDevelopment = [];

    for (let vote in votes) {
      const {
        imageUrl,
        name,
        segment,
        development,
        presentation,
        proposal,
        qtd,
      } = votes[vote];
      const props = { imageUrl, name, segment };

      listProposal.push({ med: proposal / qtd, ...props });
      listPresentation.push({ med: presentation / qtd, ...props });
      listDevelopment.push({ med: development / qtd, ...props });
    }
    const ordProposal = ordenateByKey(listProposal, 'med');
    const ordPresentation = ordenateByKey(listPresentation, 'med');
    const ordDevelopment = ordenateByKey(listDevelopment, 'med');

    setProposal(ordProposal.slice(0, 3));
    setPresentation(ordPresentation.slice(0, 3));
    setDevelopment(ordDevelopment.slice(0, 3));
    setLoading(false);
  };

  useEffect(() => {
    getVotes();
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
                  key={value}
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
    </Container>
  );
}

export default ResultScreen;
