import React from 'react';
import styled from 'styled-components/native';
import Colors from './../../constants/colors';

import HomeIcon from './../../assets/images/icones/home.svg';
import PlusIcon from './../../assets/images/icones/plus-outline.svg';
import GalleryIcon from './../../assets/images/icones/camera-outline.svg';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomTabBar = ({state, navigation}: any) => {
  const goTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea style={styles.tab}>
      <TabItem activeOpacity={0.9} onPress={() => goTo('Home')}>
        <HomeIcon
          width="27"
          height="27"
          fill={state.index === 0 ? Colors.bg1 : Colors.inactive}
        />
      </TabItem>

      <TabAdd activeOpacity={0.9} onPress={() => goTo('CreateEvent')}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[Colors.bg1, Colors.bg2]}
          style={styles.gradient}>
          <PlusIcon width="25" height="25" fill="#ffffff" />
        </LinearGradient>
      </TabAdd>

      <TabItem activeOpacity={0.9} onPress={() => goTo('Gallery')}>
        <GalleryIcon
          width="27"
          height="27"
          fill={state.index === 1 ? Colors.bg1 : Colors.inactive}
        />
      </TabItem>
    </TabArea>
  );
};

const styles = StyleSheet.create({
  tab: {
    elevation: 10,
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

const TabArea = styled.View`
  width: 100%;
  height: 70px;
  background: white;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabAdd = styled.TouchableOpacity`
  width: 62px;
  height: 62px;
  border-radius: 200px;
  border: 5px solid white;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
`;

const TabItemText = styled.Text`
  font-size: 16px;
  color: black;
`;

export default CustomTabBar;
