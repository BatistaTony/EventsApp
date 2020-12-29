import {AnyMxRecord} from 'dns';
import styled from 'styled-components/native';
import Colors from './../../constants/colors';

export const ScreenHome = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.bgNormal};
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ScreenWithScroll = styled.ScrollView`
  flex: 1;
  background-color: ${Colors.bgNormal};
`;

export const BasicThingsWrapper = styled.View`
  flex: 1;
  padding: 20px;
`;

export const TitleProfile = styled.Text`
  font-size: 20px;
  font-family: ProductSansRegular;
  color: ${Colors.black};
  margin-bottom: 10px;
`;

export const About = styled.Text`
  font-size: 18px;
  font-family: ProductSansRegular;
  color: ${Colors.inactive};
  margin-bottom: 10px;
`;

export const ListOfInterests = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const InterestItemStyled = styled.View`
  width: auto;
  height: auto;
  border-radius: 40px;
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  margin-right: 10px;
`;

export const InteresteItemIcon = styled.View`
  width: 26px;
  height: 26px;
  border-radius: 50px;
  background: ${({bg}: AnyMxRecord) => bg};
  elevation: 10;
  justify-content: center;
  align-items: center;
`;

export const InterestItemText = styled.Text`
  font-size: 15px;
  font-family: ProductSansBold;

  color: white;
  text-align: center;
  align-self: center;
  padding-left: 15px;
  padding-right: 15px;
`;
