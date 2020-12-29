import React, {useState, Fragment, useCallback} from 'react';
import {StyleSheet, Modal, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import Colors from './../../constants/colors';
//@ts-ignore
import UploadIcon from './../../assets/images/icones/camera-outline.svg';
import ImagePicker from 'react-native-image-picker';

interface IPhoto {
  uri: string | undefined | any;
  data?: any;
}

const UploadPhoto = () => {
  const [uploadData, setUploadData] = useState({
    filePath: {
      data: '',
      uri: '',
    },
    fileData: '',
    fileUri: '',
  });

  const [SinglePhoto, setSinglePhoto] = useState<string | null | any>(null);

  const [photos, setPhoto] = useState<IPhoto[]>([
    {
      uri: require('./../../assets/images/photo4.jpg'),
    },
    {
      uri: require('./../../assets/images/photo8.jpg'),
    },
  ]);

  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModalPickImage = () => {
    setShowModal(!showModal);
  };

  const launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        setPhoto([...photos, {uri: response.path ? response.path : ''}]);
        setSinglePhoto(response.uri);
        toggleModalPickImage();
      }
    });
  };

  const launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        setSinglePhoto(response.uri);
        toggleModalPickImage();
      }
    });
  };

  return (
    <UploadContainer>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <ModalOverlay>
          <ModalBottomCOnatiner>
            <TitleModal>Select the Picture</TitleModal>
            <SimpleContainer>
              <ButtonOptionLoad
                activeOpacity={0.8}
                onPress={launchCamera}></ButtonOptionLoad>
              <ButtonOptionLoad
                activeOpacity={0.8}
                onPress={launchImageLibrary}></ButtonOptionLoad>
              <ButtonCloseModal onPress={toggleModalPickImage}>
                <ButtonCloseModalText>Cancel</ButtonCloseModalText>
              </ButtonCloseModal>
            </SimpleContainer>
          </ModalBottomCOnatiner>
        </ModalOverlay>
      </Modal>
      <Title>Pictures</Title>
      <ListPhotosUploaded>
        <ButtonUpload activeOpacity={0.8} onPress={toggleModalPickImage}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[Colors.bg1, Colors.bg2]}
            style={styles.gradient}>
            <UploadIcon width="30" height="30" fill="#ffffff" />
          </LinearGradient>
        </ButtonUpload>
        <PhotoUploaded
          resizeMode="cover"
          source={require('./../../assets/images/photo1.jpg')}
        />
        <PhotoUploaded
          resizeMode="cover"
          source={require('./../../assets/images/photo3.jpg')}
        />
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
  color: ${Colors.black};
  width: 100%;
  padding-bottom: 10px;
  font-family: PoppinsRegular;
`;

const ListPhotosUploaded = styled.View`
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0;
`;

const ButtonUpload = styled.TouchableOpacity`
  width: 31%;
  height: 170px;
  border-radius: 10px;
  background-color: black;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const PhotoUploaded = styled.Image`
  width: 31%;
  border-radius: 10px;
  height: 170px;
`;

const ModalOverlay = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
`;

const TitleModal = styled.Text`
  font-size: 20px;
  color: ${Colors.black};
  padding-bottom: 14px;
  font-family: PoppinsRegular;
  width: 150px;
  text-align: center;
`;

const ButtonCloseModal = styled.TouchableOpacity`
  width: 100px;
  height: 55px;
  border-radius: 10px;
  background: ${Colors.textPrimary};
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
`;

const ButtonCloseModalText = styled.Text`
  font-size: 20px;
  color: white;
  width: 100%;
  font-family: PoppinsRegular;
  text-align: center;
`;
const ModalBottomCOnatiner = styled.View`
  height: 120px;
  width: 100%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background: white;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SimpleContainer = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  position: relative;
`;

const ButtonOptionLoad = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  border-radius: 10px;
  background: ${Colors.button};
  margin-left: 20px;
`;
