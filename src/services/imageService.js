import IMAGES from '../config/images';
export const getUrl = async imageUrl => {
  try {
    const imageHttps = getHttps(imageUrl);
    await fetch(imageHttps);
    return { uri: imageHttps };
  } catch (e) {
    return IMAGES.DEFAULT;
  }
};

const getHttps = imageUrl => {
  if (imageUrl[4] !== 's') {
    const http = imageUrl.slice(0, 4);
    const url = imageUrl.slice(4);
    const https = `${http}s${url}`;
    return https;
  }
  return imageUrl;
};
