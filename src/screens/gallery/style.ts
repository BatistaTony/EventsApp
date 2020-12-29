import styled from 'styled-components/native';
import Colors from './../../constants/colors';

export const ScreenHome = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.bgNormal};
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FilterGallery = styled.View`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 30px;
  padding-bottom: 5px;
`;

export const ButtonFilter = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const ListPhotosStyled = styled.FlatList`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Photo = styled.TouchableOpacity`
  width: 47%;
  height: 150px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 10px;
  background: red;
`;

export const BackgroundPhoto = styled.Image`
  width: 100%;
  height: 100%;
`;
