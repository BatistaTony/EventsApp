import styled from 'styled-components/native';
import {getFont} from '../../MainStyles/mainStyle';
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
  color: ${Colors.black};
  margin-bottom: 10px;
  font-family: ProductSansRegular;
`;

export const TextInputCreateEvent = styled.TextInput`
  width: 100%;
  height: ${({height}: any) => (height ? `${height}px` : '35px')};
  background-color: white;
  border-radius: 7px;
  font-size: 17px;
  padding: ${({padding}: any) => (padding ? `${padding}px` : '20px')};
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${Colors.inactive};
  font-family: ProductSansRegular;
  padding-left: 15px;
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
  font-family: ProductSansRegular;
`;

export const CustomCalender = styled.View`
  width: 100%;
  height: 420px;
  background-color: white;
  border-radius: 7px;
  margin-top: 20px;
  position: relative;
  align-items: center;
  justify-content: flex-start;
`;

export const TimeRangeContainer = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50px;
  align-self: center;
`;

export const TimeRangeLine = styled.View`
  width: 100%;
  height: 5px;
  background: ${Colors.inactive};
  border-radius: 30px;
`;

export const TimeRangeCircle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background: ${Colors.bg1};
  align-items: center;
  justify-content: center;
  position: absolute;
  ${({isFirst}: any) => (isFirst ? 'left: 50px' : 'right:50px')};
`;

export const TimeRangeCircleInner = styled.View`
  width: 11px;
  height: 11px;
  border-radius: 100px;
  background: white;
`;

export const TimeRangeCircleLimit = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 100px;
  background: ${Colors.inactive};
  position: absolute;
  ${({isFirst}: any) => (isFirst ? 'left: 20px' : 'right:20px')};
`;

export const TimeRangeLegend = styled.Text`
  font-size: 14px;
  font-family: ProductSansRegular;
  color: ${Colors.inactive};
  position: absolute;
  ${({isFirst}: any) => (isFirst ? 'left: 30px' : 'right:30px')};
`;

export const TimeRangeLegendContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -30px;
`;

export const ButtonCreateEvent = styled.TouchableOpacity`
  width: 260px;
  height: 60px;
  border-radius: 30px;
  margin-top: 30px;
  align-self: center;
  justify-content: center;
  overflow: hidden;
`;

export const ButtonText = styled.Text`
  font-size: 22px;
  color: white;
  font-family: ProductSansRegular;
`;
