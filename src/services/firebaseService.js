import firestore from '@react-native-firebase/firestore';

const votes = firestore().collection('votes');

const setVoteService = async (
  name,
  segment,
  imageUrl,
  development,
  presentation,
  proposal,
) => {
  try {
    await votes.add({
      name,
      segment,
      imageUrl,
      development,
      presentation,
      proposal,
    });
    console.log('deu certo');
  } catch (e) {
    console.log(e);
  }
};

const getVotesService = async () => {
  try {
    const listVotes = [];
    await votes.get().then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        listVotes.push(documentSnapshot.data());
      });
    });

    return listVotes;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export { setVoteService, getVotesService };
