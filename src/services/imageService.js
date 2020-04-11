export const getUrl = async imageUrl => {
  try {
    await fetch(imageUrl);
    return { uri: imageUrl };
  } catch (e) {
    return require('../assets/images/placeholder.png');
  }
};
