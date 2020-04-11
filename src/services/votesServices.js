import AsyncStorage from '@react-native-community/async-storage';

// [
//   {
//     name: '',
//     proposal: 0,
//     presentation: 0,
//     development: 0,
//   },
// ];

const getVotes = async () => {
  try {
    const votes = await AsyncStorage.getItem('@votes');
    if (votes !== null) {
      return await JSON.parse(votes);
    }
    return [];
  } catch (e) {
    console.log(e);
  }
  return [];
};

const setVotes = async (
  name,
  proposal,
  presentation,
  development,
) => {
  const vote = { name, proposal, presentation, development };
  try {
    const votes = await getVotes();
    votes.push(vote);
    await AsyncStorage.setItem('@votes', JSON.stringify(votes));
  } catch (e) {
    console.log('erro ' + e);
  }
};

const cleanVotes = async () => {
  await AsyncStorage.removeItem('@votes');
};

export { getVotes, setVotes, cleanVotes };
