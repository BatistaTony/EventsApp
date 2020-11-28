import styled from 'styled-components/native';
import Colors from './../../constants/colors';

export const CustomScreen = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.bgNormal};
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CreateEventFormArea = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-top: 20px;
  background-color: ${Colors.bgNormal};
`;

export const FormGroupCreateEvent = styled.View`
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
`;

export const LabelInput = styled.Text`
  font-size: 18px;
  color: black;
  margin-bottom: 10px;
`;

export const TextInputCreateEvent = styled.TextInput`
  width: 100%;
  height: ${({height}: any) => (height ? `${height}px` : '35px')};
  background-color: white;
  border-radius: 7px;
  font-size: 20px;
  padding: ${({padding}: any) => (padding ? `${padding}px` : '20px')};
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${Colors.inactive};
`;

export const FormGroupDate = styled.View`
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
`;

export const DateInput = styled.View`
  width: 100%;
  height: 35px;
  background-color: white;
  border-radius: 7px;
  font-size: 20px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DateInputText = styled.Text`
  font-size: 17px;
  color: ${Colors.inactive};
`;

export const CustomCalender = styled.View`
  width: 100%;
  height: 300px;
  background-color: white;
  border-radius: 7px;
  margin-top: 20px;
`;

export const ButtonCreateEvent = styled.TouchableOpacity`
  width: 260px;
  height: 60px;
  border-radius: 30px;
  margin-top: 30px;
  align-self: center;
  overflow: hidden;
`;

export const ButtonText = styled.Text`
  font-size: 25px;
  color: white;
`;
