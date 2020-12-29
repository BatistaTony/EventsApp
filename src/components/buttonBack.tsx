import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {AnyAction} from 'redux';
import styled from 'styled-components/native';
import BackIcon from './../assets/images/icones/back1.svg';

const ButtonBack = ({style}: AnyAction) => {
  const navigation = useNavigation();

  const backToHome = () => {
    navigation.goBack();
  };

  return (
    <ButtonBackStyled
      style={style ? style : {}}
      onPress={backToHome}
      activeOpacity={1}>
      <BackIcon width="28" height="28" fill="#ffffff" />
    </ButtonBackStyled>
  );
};

export default ButtonBack;

export const ButtonBackStyled = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 20px;
`;
