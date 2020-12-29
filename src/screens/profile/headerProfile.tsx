import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from './../../constants/colors';
import {
  CustomHeaderProfile,
  Avatar,
  AvatarButtonUpload,
  AvatarWrapper,
  FullName,
  Location,
} from './styleHeader';
import UploadIcon from './../../assets/images/icones/camera-outline.svg';
import ButtonBack from '../../components/buttonBack';

const HederProfile = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[Colors.bg1, Colors.bg2]}
      style={styles.gradient}>
      <CustomHeaderProfile>
        <ButtonBack />
        <AvatarWrapper>
          <Avatar source={require('./../../assets/images/avatar.jpg')} />
          <AvatarButtonUpload>
            <UploadIcon width="15" height="15" fill={Colors.bg1} />
          </AvatarButtonUpload>
        </AvatarWrapper>
        <FullName>Batista Tony</FullName>
        <Location> Oxford University || Atlanta, GA </Location>
      </CustomHeaderProfile>
    </LinearGradient>
  );
};

export default HederProfile;

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: 210,
  },
});
