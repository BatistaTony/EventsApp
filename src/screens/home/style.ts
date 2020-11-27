import styled from 'styled-components/native';
import Colors from './../../constants/colors';

export const ScreenHome = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.bgNormal};
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ScreenWrapper = styled.TouchableOpacity`
  flex: 1;
`;

export const ListEvent = styled.FlatList`
  width: 100%;
  padding-top: 30px;
`;

export const ItemEventArea = styled.TouchableOpacity`
  width: 93%;
  background: white;
  border-radius: 10px;
  padding: 16px;
  align-self: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ItemEventLeftArea = styled.View`
  width: 60%;
  height: 70px;
  max-height: auto;
  flex-direction: column;
  justify-content: space-between;
`;

export const EventTitle = styled.Text`
  font-weight: 500;
  font-size: 20px;
  width: 100%;
  height: 52px;
  color: black;
`;

export const EventDateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3px;
`;

export const EventTime = styled.Text`
  font-size: 12px;
  color: gray;
`;

export const EventDate = styled.Text`
  background: darkgray;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: 12px;
  color: white;
  border-radius: 10px;
  margin-left: 10px;
`;

export const EventImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 5px;
`;
