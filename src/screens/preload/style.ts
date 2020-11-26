import styled from 'styled-components/native';
import {CustomScreen, getFont} from '../../MainStyles/mainStyle';
import Colors from './../../constants/colors';

export const Screen = styled(CustomScreen)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${Colors.bg1};
`;

export const LoadingIndicator = styled.ActivityIndicator`
  width: 30px;
  height: 30px;
  margin-top: 40px;
`;
