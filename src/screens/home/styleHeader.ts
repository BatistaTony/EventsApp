import styled from 'styled-components/native';
import Colors from './../../constants/colors';

export const CustomHeader = styled.View`
  width: 100%;
  height: 100%;
  padding: 30px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const HeaderTitleContainer = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: white;
  font-family: ProductSansRegular;
`;

export const Avatar = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  overflow: hidden;
`;

export const FormGroup = styled.View`
  width: 100%;
  height: 40px;
  background-color: #7174f7;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextInputHome = styled.TextInput`
  flex: 1;
  color: white;
  font-size: 16px;
  padding-left: 5px;
  font-family: ProductSansRegular;
`;

export const MenuHome = styled.View`
  width: 100%;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0;
`;

export const MenuHomeItem = styled.TouchableOpacity`
  width: auto;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TextMenuHome = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: 300;
  padding-left: 15px;
  padding-bottom: 4px;
  padding-right: 15px;
  border-width: 4px;
  border-color: transparent;
  opacity: ${({active}: any) => (active ? '1' : '.6')};
  font-family: ProductSansRegular;
`;

export const MenuItemSinal = styled.View`
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background: ${Colors.bgNormal};
  position: absolute;
  bottom: -5px;
`;
