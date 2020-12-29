import React from 'react';
import EventHeader from './eventHeader';

import {
  ScreenEvent,
  BodyEvent,
  EventMenuItem,
  EventMenuButton,
  TitleEvent,
  InforContainer,
  ButtonCircleCheck,
  ButtonJoinEvent,
  ButtonJoinText,
  EventDescription,
  LabelEvent,
  InfoGroup,
  EventLocation,
} from './style';

import ShareIcon from './../../assets/images/icones/share.svg';
import MessageIcon from './../../assets/images/icones/message.svg';
import CheckMarkIcon from './../../assets/images/icones/checkmark.svg';

import {View, StyleSheet} from 'react-native';
import {EventDate, EventTime} from '../home/style';
import LinearGradient from 'react-native-linear-gradient';
import Colors from './../../constants/colors';

const SingleEvent = () => {
  return (
    <ScreenEvent>
      <EventHeader />
      <BodyEvent>
        <EventMenuButton>
          <EventMenuItem>
            <MessageIcon width="30" height="30" fill="black" />
          </EventMenuItem>
          <EventMenuItem>
            <ShareIcon width="30" height="30" fill="black" />
          </EventMenuItem>
        </EventMenuButton>
        <TitleEvent>Product Designer meeting</TitleEvent>
        <InforContainer>
          <InfoGroup>
            <LabelEvent>The Date</LabelEvent>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <EventTime>07:00 PM</EventTime>
              <EventDate>03 Jun 2019</EventDate>
            </View>
          </InfoGroup>
          <InfoGroup>
            <LabelEvent>Location</LabelEvent>
            <EventLocation>Luanda, Talatona, PRedio 46y</EventLocation>
          </InfoGroup>
        </InforContainer>

        <EventDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
          praesentium facere repellendus reprehenderit sequi animi beatae
          consequuntur, odit cupiditate incidunt. Error officiis modi ipsum
          deleniti tenetur facere, minima quibusdam fugiat.
        </EventDescription>

        <ButtonJoinEvent activeOpacity={1}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[Colors.bg1, Colors.bg2]}
            style={styles.gradient}>
            <ButtonCircleCheck>
              <CheckMarkIcon width="30" height="30" fill={Colors.black} />
            </ButtonCircleCheck>
            <ButtonJoinText>Join Event</ButtonJoinText>
          </LinearGradient>
        </ButtonJoinEvent>
      </BodyEvent>
    </ScreenEvent>
  );
};

export default SingleEvent;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
