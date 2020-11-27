import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
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

const HeaderHome = ({setList}: any) => {
  const [menuHomeItem, setMenuItem] = useState<number>(0);

  const selectMenu = (menu: number) => {
    setMenuItem(menu);
    setList(menu);
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
          <Avatar source={require('./../../assets/images/avatar.jpg')} />
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
