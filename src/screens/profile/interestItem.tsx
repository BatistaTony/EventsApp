import React, {useState} from 'react';
import Colors from './../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';

import {InterestItemStyled, InteresteItemIcon, InterestItemText} from './style';
import {StyleSheet, View, Text} from 'react-native';

interface IInterestItem {
  title: string;
  Icon?: any;
}

const InterestItem = ({title, Icon}: IInterestItem) => {
  const checkTitle = () => {
    switch (title.toLowerCase()) {
      case 'music': {
        return [Colors.interests.music.color1, Colors.interests.music.color2];
      }

      case 'games online': {
        return [Colors.interests.games.color1, Colors.interests.games.color2];
      }

      case 'football': {
        return [
          Colors.interests.football.color1,
          Colors.interests.football.color2,
        ];
      }

      case 'movie': {
        return [Colors.interests.movie.color1, Colors.interests.movie.color2];
      }

      default: {
        return [Colors.interests.others.color1, Colors.interests.others.color2];
      }
    }
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <InterestItemStyled>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[...checkTitle()]}
          style={styles.item}>
          <InteresteItemIcon bg={checkTitle()[0]}>
            {<Icon width="18" height="18" />}
          </InteresteItemIcon>
          <InterestItemText>
            <InterestItemText>{title}</InterestItemText>
          </InterestItemText>
        </LinearGradient>
      </InterestItemStyled>
    </View>
  );
};

export default InterestItem;

const styles = StyleSheet.create({
  item: {
    width: 'auto',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
});
