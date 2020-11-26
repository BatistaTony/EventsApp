import React, {useEffect} from 'react';
import {LoadingIndicator, Screen} from './style';
import {useNavigation} from '@react-navigation/native';

//@ts-ignore
import Logo from './../../assets/images/logo.svg';

const Preload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 500);
  });

  return (
    <Screen>
      <Logo width="100%" height="160" />
      <LoadingIndicator color="#ffffff" />
    </Screen>
  );
};

export default Preload;
