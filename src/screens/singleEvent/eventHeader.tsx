import React from 'react';
import styled from 'styled-components/native';
import ButtonBack from '../../components/buttonBack';

const EventHeader = () => {
  const photos = ['fsfds', 'fsdf', 'sdf'];

  return (
    <CustomHeaderEvent>
      <EventSlider>
        <SliderBackground
          source={require('./../../assets/images/photo8.jpg')}
        />
        <ButtonBack style={{marginTop: 25, marginLeft: 15}} />
        <EventSliderDotList>
          {photos.map((item, index) => (
            <EventSliderDot key={index} active={index === 0}></EventSliderDot>
          ))}
        </EventSliderDotList>
      </EventSlider>
    </CustomHeaderEvent>
  );
};

export default EventHeader;

const CustomHeaderEvent = styled.View`
  width: 100%;
  height: 40%;
  position: relative;
`;

const EventSlider = styled.View`
  flex: 1;
`;

const SliderBackground = styled.ImageBackground`
  flex: 1;
`;

const EventSliderDotList = styled.View`
  position: absolute;
  left: 35px;
  bottom: 20%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const EventSliderDot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 100px;
  background: ${({active}: any) => (active ? 'white' : '#719BAA')};
  margin-right: 7px;
`;
