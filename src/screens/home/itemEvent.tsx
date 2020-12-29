import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {
  EventDate,
  EventImage,
  EventTime,
  EventTitle,
  ItemEventArea,
  ItemEventLeftArea,
  EventDateContainer,
} from './style';
const ItemEvent = ({data}: any) => {
  const navigation = useNavigation();

  const goToEvent = () => {
    navigation.navigate('SingleEvent');
  };

  return (
    <ItemEventArea onPress={goToEvent} activeOpacity={1}>
      <ItemEventLeftArea>
        <EventTitle>{data.title}</EventTitle>
        <EventDateContainer>
          <EventTime>{data.timeEvent}</EventTime>
          <EventDate>{data.dateEvent}</EventDate>
        </EventDateContainer>
      </ItemEventLeftArea>

      <EventImage source={require('./../../assets/images/avatar.jpg')} />
    </ItemEventArea>
  );
};

export default ItemEvent;
