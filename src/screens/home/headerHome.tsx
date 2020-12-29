import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import FormGroupHome from './formGroupHome';
import {
  CustomHeader,
  Avatar,
  Title,
  HeaderTitleContainer,
  MenuHome,
  MenuHomeItem,
  TextMenuHome,
  MenuItemSinal,
} from './styleHeader';
import LinearGradient from 'react-native-linear-gradient';
import Colors from './../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const HeaderHome = ({setList}: any) => {
  const navigation = useNavigation();
  const [menuHomeItem, setMenuItem] = useState<number>(0);

  const selectMenu = (menu: number) => {
    setMenuItem(menu);
    setList(menu);
  };

  const goTo = (screeName: string) => {
    navigation.navigate(screeName);
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[Colors.bg1, Colors.bg2]}
      style={styles.gradient}>
      <CustomHeader>
        <HeaderTitleContainer>
          <Title>Find Event</Title>
          <Avatar onPress={() => goTo('Profile')} activeOpacity={1}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('./../../assets/images/avatar.jpg')}
            />
          </Avatar>
        </HeaderTitleContainer>
        <FormGroupHome />

        <MenuHome>
          <MenuHomeItem onPress={() => selectMenu(0)}>
            <TextMenuHome active={menuHomeItem === 0}>Ongoing</TextMenuHome>
            {menuHomeItem === 0 && <MenuItemSinal></MenuItemSinal>}
          </MenuHomeItem>

          <MenuHomeItem onPress={() => selectMenu(1)}>
            <TextMenuHome active={menuHomeItem === 1}>joined</TextMenuHome>
            {menuHomeItem === 1 && <MenuItemSinal></MenuItemSinal>}
          </MenuHomeItem>
        </MenuHome>
      </CustomHeader>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: '35%',
  },
});

export default HeaderHome;
