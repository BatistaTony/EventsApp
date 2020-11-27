import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import HeaderHome from './headerHome';
import ItemEvent from './itemEvent';

import {ScreenHome, ListEvent, ScreenWrapper} from './style';

const Home = () => {
  const [typeList, setTypeList] = useState<number>(0);

  const events = [
    {
      id: '34563874563',
      title: 'Meeting with CTO to talk about',
      img: '',
      timeEvent: '07:30 PM',
      dateEvent: '03 Julho 2021',
    },
    {
      id: '345638745',
      title: 'Meeting with Product Designer ',
      img: '',
      timeEvent: '05:30 PM',
      dateEvent: '03 Julho 2021',
    },
    {
      id: '345634563',
      title: 'Meeting with CTO to talk about',
      img: '',
      timeEvent: '07:30 PM',
      dateEvent: '03 Julho 2021',
    },
    {
      id: '3463874563',
      title: 'Meeting with Product Designer ',
      img: '',
      timeEvent: '05:30 PM',
      dateEvent: '03 Julho 2021',
    },
    {
      id: '3456563',
      title: 'Meeting with CTO to talk about',
      img: '',
      timeEvent: '07:30 PM',
      dateEvent: '03 Julho 2021',
    },
    {
      id: '34564d74563',
      title: 'Meeting with Product Designer ',
      img: '',
      timeEvent: '05:30 PM',
      dateEvent: '03 Julho 2021',
    },
  ];

  const eventsJoined = [
    {
      id: '3463874563',
      title: 'Metting with My loyer',
      img: '',
      timeEvent: '05:30 PM',
      dateEvent: '03 Julho 2021',
    },
    {
      id: '3456563',
      title: 'Meeting with  my famiy',
      img: '',
      timeEvent: '07:30 PM',
      dateEvent: '03 Julho 2021',
    },
    {
      id: '34564d74563',
      title: 'PARTY OF Lukeny',
      img: '',
      timeEvent: '05:30 PM',
      dateEvent: '03 Julho 2021',
    },
  ];

  return (
    <ScreenWrapper activeOpacity={1} onPress={() => Keyboard.dismiss()}>
      <ScreenHome>
        <HeaderHome setList={setTypeList} />

        <ListEvent
          keyExtractor={(item: any) => item.id}
          data={typeList === 0 ? events : eventsJoined}
          renderItem={({item}: any) => <ItemEvent key={item.id} data={item} />}
        />
      </ScreenHome>
    </ScreenWrapper>
  );
};

export default Home;
