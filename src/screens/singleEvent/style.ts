import styled from 'styled-components/native';
import {ButtonCreateEvent, ButtonText} from '../createEvent/style';
import Colors from './../../constants/colors';

export const ScreenEvent = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.bgNormal};
  justify-content: flex-start;
  align-items: flex-start;
`;

export const BodyEvent = styled.View`
  width: 100%;
  height: 65%;
  position: absolute;
  bottom: 0;
  background: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 30px;
`;

export const EventMenuButton = styled.View`
  position: absolute;
  right: 25px;
  top: -22px;
  flex-direction: row;
`;

export const EventMenuItem = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: white;
  justify-content: center;
  align-items: center;
  elevation: 5;
  margin-right: 10px;
`;

export const TitleEvent = styled.Text`
  font-size: 25px;
  width: 70%;
  font-family: ProductSansBold;
  color: ${Colors.black};
`;

export const InforContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LabelEvent = styled.Text`
  font-size: 15px;
  color: gray;
  font-family: ProductSansBold;
  margin-bottom: 5px;
  color: ${Colors.black};
`;

export const InfoGroup = styled.View`
  flex-direction: column;
`;

export const EventLocation = styled.Text`
  font-size: 12px;
  color: ${Colors.inactive};
  font-family: ProductSansRegular;
`;

export const EventDescription = styled.Text`
  font-size: 17px;
  width: 100%;
  font-family: ProductSansRegular;
  margin-top: 15px;
  color: ${Colors.inactive};
`;

export const ButtonJoinEvent = styled(ButtonCreateEvent)`
  width: 230px;

  position: relative;
`;

export const ButtonCircleCheck = styled.View`
  height: 52px;
  width: 52px;
  border-radius: 50px;
  position: absolute;
  left: 5px;
  justify-content: center;
  align-items: center;
  background: white;
`;

export const ButtonJoinText = styled(ButtonText)`
  font-family: ProductSansBold;
  font-size: 20px;
  margin-left: 20px;
`;
