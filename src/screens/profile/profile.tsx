import React from 'react';
import {
  ScreenHome,
  BasicThingsWrapper,
  TitleProfile,
  About,
  ListOfInterests,
  ScreenWithScroll,
} from './style';
import HeaderProfile from './headerProfile';
import {StyleSheet, View, Text} from 'react-native';
import InterestItem from './interestItem';
import MyIcon from './../../assets/images/icones/my_location.svg';
import ListPhotos from '../gallery/listPhotos';

const Profile = () => {
  const interests = ['Games Online', 'Football', 'Movie', 'Music', 'Other'];
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
      <ScreenWithScroll>
        <HeaderProfile />
        <BasicThingsWrapper>
          <TitleProfile>About</TitleProfile>
          <About>
            So stringly and metaphysical did I conceive of my situation then,
            that while ear
          </About>

          <TitleProfile style={{marginTop: 20}}>Interest</TitleProfile>
          <ListOfInterests>
            {interests.map((item, index) => (
              <InterestItem key={index} title={item} Icon={MyIcon} />
            ))}
          </ListOfInterests>

          <TitleProfile style={{marginTop: 20}}>Moments</TitleProfile>
          <ListPhotos padding={0} style={{marginTop: -20}} photos={photos} />
        </BasicThingsWrapper>
      </ScreenWithScroll>
    </ScreenHome>
  );
};

export default Profile;
