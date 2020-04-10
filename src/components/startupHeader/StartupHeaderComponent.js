import React, { useEffect, useState } from 'react';

import CustomText from '../../components/customText/CustomText';
import { Container, Img } from './styles';

function StartupHeaderComponent({ image, name, segment }) {
  const [imageUrl, setImageUrl] = useState(null);

  const getUrl = async () => {
    try {
      await fetch(image);
      setImageUrl({ uri: image });
    } catch (e) {
      setImageUrl(require('../../assets/images/placeholder.png'));
    }
  };

  useEffect(() => {
    getUrl();
  }, [image]);

  return (
    <Container>
      {imageUrl && <Img source={imageUrl} />}
      <CustomText size={20}>{name}</CustomText>
      <CustomText size={15}>{segment}</CustomText>
    </Container>
  );
}

export default StartupHeaderComponent;
