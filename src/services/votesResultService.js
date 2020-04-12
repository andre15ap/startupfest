import ordenateByKey from './arrayService';

const getResults = data => {
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

  return calculeMedia(votes);
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

    listProposal.push({ med: average(proposal, qtd), ...props });
    listPresentation.push({
      med: average(presentation, qtd),
      ...props,
    });
    listDevelopment.push({
      med: average(development, qtd),
      ...props,
    });
  }
  const ordProposal = ordenateByKey(listProposal, 'med');
  const ordPresentation = ordenateByKey(listPresentation, 'med');
  const ordDevelopment = ordenateByKey(listDevelopment, 'med');

  return {
    ordProposal: ordProposal.slice(0, 3),
    ordPresentation: ordPresentation.slice(0, 3),
    ordDevelopment: ordDevelopment.slice(0, 3),
  };
};

const average = (num, qtd) => {
  const med = num / qtd;
  return Number(med.toFixed(2));
};

export default getResults;
