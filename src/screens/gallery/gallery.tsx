import React from 'react';
import Navbar from '../../components/navbar/navbar';
import {
  ListPhotos,
  ScreenHome,
  Photo,
  BackgroundPhoto,
  FilterGallery,
  ButtonFilter,
} from './style';
import Colors from './../../constants/colors';
import {useDeviceOrientation} from '@react-native-community/hooks';

import ListIcon from './../../assets/images/icones/menu.svg';

const Gallery = () => {
  const deviceOrientation = useDeviceOrientation();

  const photos = [
    {
      id: '56',
      img: './../../assets/images/photo1.jpg',
    },
    {
      id: '5',
      img: './../../assets/images/photo1.jpg',
    },
    {
      id: '56g',
      img: './../../assets/images/photo1.jpg',
    },
    {
      id: '5a6',
      img: './../../assets/images/photo1.jpg',
    },
    {
      id: '566',
      img: './../../assets/images/photo1.jpg',
    },
    {
      id: '5v6',
      img: './../../assets/images/photo1.jpg',
    },
    {
      id: '5va6',
      img: './../../assets/images/photo1.jpg',
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
      <ListPhotos
        data={photos}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingBottom: 50,
        }}
        bouncesZoom={true}
        keyExtractor={(item: any) => item.id}
        renderItem={({item}: any) => (
          <Photo key={item.id} activeOpacity={1}>
            <BackgroundPhoto
              source={require('./../../assets/images/photo1.jpg')}
            />
          </Photo>
        )}
      />
    </ScreenHome>
  );
};

export default Gallery;
