import styled from 'styled-components/native';
import {CustomScreen} from '../../MainStyles/mainStyle';
import Colors from './../../constants/colors';

export const Screen = styled(CustomScreen)`
  background: ${Colors.bg1};
`;

export const FormArea = styled.View`
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const TitleSign = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 30px;
`;

export const ButtonSign = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  background-color: ${Colors.button};
  justify-content: center;
  align-items: center;
`;

export const ButtonSignText = styled.Text`
  color: white;
  font-size: 17px;
`;

export const SignSimpleButtonArea = styled.View`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SimpleButtonSign = styled.TouchableOpacity``;

export const SimpleButtonSignText = styled.Text`
  font-size: 16px;
  color: white;
  text-decoration: underline;
`;
