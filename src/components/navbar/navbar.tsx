import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import Colors from './../../constants/colors';
//@ts-ignore
import BackIcon from './../../assets/images/icones/back1.svg';
import {useNavigation} from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  const backToHome = ({title}: any) => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[Colors.bg1, Colors.bg2]}
      style={styles.gradient}>
      <NavbarStyled>
        <ButtonBack activeOpacity={1} onPress={backToHome}>
          <BackIcon width="28" height="28" fill="#ffffff" />
        </ButtonBack>
        <Title>{title}</Title>
      </NavbarStyled>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: 70,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

const NavbarStyled = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding-bottom: 15px;
`;

const Title = styled.Text`
  color: white;
  font-size: 23px;
  font-weight: bold;
`;

const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  padding-bottom: 15px;
`;

export default Navbar;
