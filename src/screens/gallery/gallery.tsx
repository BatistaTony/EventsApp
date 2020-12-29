import React from 'react';
import Navbar from '../../components/navbar/navbar';
import {ScreenHome, FilterGallery, ButtonFilter} from './style';
import Colors from './../../constants/colors';

import ListIcon from './../../assets/images/icones/menu.svg';
import ListPhotos from './listPhotos';

const Gallery = () => {
  const photos = [
    {
      id: '56',
      img: require('./../../assets/images/photo1.jpg'),
    },
    {
      id: '5',
      img: require('./../../assets/images/photo2.jpg'),
    },
    {
      id: '56g',
      img: require('./../../assets/images/photo3.jpg'),
    },
    {
      id: '5a6',
      img: require('./../../assets/images/photo4.jpg'),
    },
    {
      id: '566',
      img: require('./../../assets/images/photo5.jpg'),
    },
    {
      id: '5v6',
      img: require('./../../assets/images/photo6.jpg'),
    },
    {
      id: '5va6',
      img: require('./../../assets/images/photo7.jpg'),
    },
  ];

  return (
    <ScreenHome>
      <Navbar title="Gallery" />
      <FilterGallery>
        <ButtonFilter activeOpacity={0.8}>
          <ListIcon width="27" height="30" fill={Colors.black} />
        </ButtonFilter>
        <ButtonFilter activeOpacity={0.8}>
          <ListIcon width="27" height="30" fill={Colors.black} />
        </ButtonFilter>
      </FilterGallery>
      <ListPhotos padding={15} photos={photos} />
    </ScreenHome>
  );
};

export default Gallery;
