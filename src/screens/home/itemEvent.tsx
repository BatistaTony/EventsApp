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
  console.log(data);

  return (
    <ItemEventArea activeOpacity={1}>
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
