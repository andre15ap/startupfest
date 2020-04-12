import IMAGES from '../config/images';
export const getUrl = async imageUrl => {
  try {
    await fetch(imageUrl);
    return { uri: imageUrl };
  } catch (e) {
    return IMAGES.DEFAULT;
  }
};
