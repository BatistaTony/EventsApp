import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Navbar from '../../components/navbar/navbar';
import UploadPhoto from './photoUpload';
import {
  CustomScreen,
  CreateEventFormArea,
  FormGroupCreateEvent,
  LabelInput,
  TextInputCreateEvent,
  DateInput,
  FormGroupDate,
  DateInputText,
  CustomCalender,
  ButtonCreateEvent,
  ButtonText,
  TimeRangeCircle,
  TimeRangeCircleInner,
  TimeRangeCircleLimit,
  TimeRangeContainer,
  TimeRangeLegend,
  TimeRangeLine,
  TimeRangeLegendContainer,
} from './style';
import Colors from './../../constants/colors';
import {Calendar} from 'react-native-calendars';

const CreateEvent = () => {
  return (
    <CustomScreen>
      <Navbar title="Create Event" />
      <CreateEventFormArea contentContainerStyle={{paddingBottom: 80}}>
        <UploadPhoto />

        <FormGroupCreateEvent>
          <LabelInput>Title</LabelInput>
          <TextInputCreateEvent
            padding={10}
            placeholder="title of the event"
            height={50}
          />
        </FormGroupCreateEvent>
        <FormGroupDate>
          <LabelInput>Date</LabelInput>
          <DateInput>
            <DateInputText>Sun, Jul 3 2020</DateInputText>
            <DateInputText>10:00 AM</DateInputText>
          </DateInput>
        </FormGroupDate>

        <CustomCalender>
          <Calendar
            style={{
              width: '100%',
              height: 300,
            }}
            Handler={(date) => console.log(date)}
          />

          <TimeRangeContainer>
            <TimeRangeCircleLimit isFirst={true} />
            <TimeRangeCircleLimit />

            <TimeRangeLine></TimeRangeLine>
            <TimeRangeLegendContainer>
              <TimeRangeLegend isFirst={true}>12:00 PM</TimeRangeLegend>
              <TimeRangeLegend>12:00 PM</TimeRangeLegend>
            </TimeRangeLegendContainer>
            <TimeRangeCircle isFirst={true}>
              <TimeRangeCircleInner />
            </TimeRangeCircle>
            <TimeRangeCircle>
              <TimeRangeCircleInner />
            </TimeRangeCircle>
          </TimeRangeContainer>
        </CustomCalender>

        <FormGroupCreateEvent>
          <LabelInput>Place</LabelInput>
          <TextInputCreateEvent
            padding={10}
            height={50}
            placeholder="title of the event"
            value={'Palacio 123, Jd, N1'}
          />
        </FormGroupCreateEvent>

        <FormGroupCreateEvent>
          <LabelInput>Description</LabelInput>
          <TextInputCreateEvent
            multiline={true}
            numberOfLines={5}
            placeholder="Write little about the the event, to people know who this events is about.           Write little about the the event, to people know who this events is about."
            height={150}
          />
        </FormGroupCreateEvent>

        <ButtonCreateEvent activeOpacity={0.9}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[Colors.bg1, Colors.bg2]}
            style={styles.gradient}>
            <ButtonText>Save Event</ButtonText>
          </LinearGradient>
        </ButtonCreateEvent>
      </CreateEventFormArea>
    </CustomScreen>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CreateEvent;
