import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import Colors from './../../constants/colors';
//@ts-ignore
import UploadIcon from './../../assets/images/icones/camera-outline.svg';

const UploadPhoto = () => {
  return (
    <UploadContainer>
      <Title>Pictures</Title>
      <ListPhotosUploaded>
        <ButtonUpload>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[Colors.bg1, Colors.bg2]}
            style={styles.gradient}>
            <UploadIcon width="30" height="30" fill="#ffffff" />
          </LinearGradient>
        </ButtonUpload>
        <PhotoUploaded source={require('./../../assets/images/photo3.jpg')} />
        <PhotoUploaded source={require('./../../assets/images/photo7.jpg')} />
      </ListPhotosUploaded>
    </UploadContainer>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UploadPhoto;

const UploadContainer = styled.View`
  width: 100%;
  height: auto;
  padding-bottom: 30px;
`;

const Title = styled.Text`
  font-size: 18px;
  color: black;
  width: 100%;
  padding-bottom: 10px;
`;

const ListPhotosUploaded = styled.View`
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0;
`;

const ButtonUpload = styled.TouchableOpacity`
  width: 30.5%;
  height: 170px;
  border-radius: 10px;
  background-color: black;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const PhotoUploaded = styled.Image`
  width: 30.5%;
  border-radius: 10px;
  height: 170px;
`;
