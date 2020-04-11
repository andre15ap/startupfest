import React, { useEffect, useState } from 'react';

import CustomText from '../../components/customText/CustomText';

import { getUrl } from '../../services/imageService';

import { Container, Img } from './styles';

function StartupHeaderComponent({ image, name, segment }) {
  const [imageUrl, setImageUrl] = useState(
    require('../../assets/images/placeholder.png'),
  );

  const getImageUrl = async () => {
    setImageUrl(await getUrl(image));
  };

  useEffect(() => {
    getImageUrl();
  }, [image]);

  return (
    <Container>
      <Img source={imageUrl} />
      <CustomText size={20}>{name}</CustomText>
      <CustomText size={15}>{segment}</CustomText>
    </Container>
  );
}

export default StartupHeaderComponent;
