import React, { useEffect, useState } from 'react';

import CustomText from '../../components/customText/CustomText';
import Stars from '../../components/stars/Stars';

import { getUrl } from '../../services/imageService';

import {
  Container,
  Img,
  ContainerColumn,
  ContainerRow,
} from './styles';

function ResultRow({ index, name, segment, image, note }) {
  const [imageUrl, setImageUrl] = useState(
    require('../../assets/images/placeholder.png'),
  );

  const getStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < note);
    }
    return stars;
  };

  const getImageUrl = async () => {
    setImageUrl(await getUrl(image));
  };

  useEffect(() => {
    getImageUrl();
  }, [image]);
  return (
    <Container>
      <CustomText size={22}>{index}º</CustomText>
      <Img source={imageUrl} />
      <ContainerColumn>
        <CustomText align="flex-start" size={18}>
          {name}
        </CustomText>
        <CustomText align="flex-start" size={14}>
          {segment}
        </CustomText>
        <ContainerRow>
          <Stars stars={getStars()} size={22} />
          <CustomText align="flex-start" size={18}>
            {note} / 5
          </CustomText>
        </ContainerRow>
      </ContainerColumn>
    </Container>
  );
}

export default ResultRow;
