import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import Colors from './../../constants/colors';

import HomeIcon from './../../assets/images/icones/home.svg';
import PlusIcon from './../../assets/images/icones/plus-outline.svg';
import GalleryIcon from './../../assets/images/icones/camera-outline.svg';

const CustomTabBar = () => {
  const navigation = useNavigation();

  const goTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon width="25" height="25" fill={Colors.bg1} />
      </TabItem>

      <TabAdd onPress={() => goTo('CreateEvent')}>
        <PlusIcon width="27" height="27" fill="#ffffff" />
      </TabAdd>

      <TabItem onPress={() => goTo('Gallery')}>
        <GalleryIcon width="25" height="25" fill={Colors.bg1} />
      </TabItem>
    </TabArea>
  );
};

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
  background: ${Colors.bg1};
  justify-content: center;
  align-items: center;
  margin-top: -50px;
`;

const TabItemText = styled.Text`
  font-size: 16px;
  color: black;
`;

export default CustomTabBar;
