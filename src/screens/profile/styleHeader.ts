import styled from 'styled-components/native';
import Colors from './../../constants/colors';

export const CustomHeaderProfile = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const AvatarWrapper = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  position: relative;
  margin-top: 5px;
`;
export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 100px;
`;

export const AvatarButtonUpload = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  position: absolute;
  background: white;
  border: 2px solid ${Colors.bg1};
  border-radius: 100px;
  bottom: 5%;
  right: -6%;
  justify-content: center;
  align-items: center;
`;

export const FullName = styled.Text`
  font-family: ProductSansBold;
  font-size: 20px;
  color: white;
  margin-top: 10px;
`;

export const Location = styled.Text`
  font-family: ProductSansRegular;
  font-size: 18px;
  margin-top: 4px;
  color: ${Colors.inactive};
`;

export const ButtonCloseHeadrProfile = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 20px;
`;
