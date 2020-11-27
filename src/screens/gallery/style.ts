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

export const ListPhotos = styled.FlatList`
  width: 100%;
  padding: 15px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Photo = styled.TouchableOpacity`
  width: 170px;
  height: 170px;
  border-radius: 20px;
  overflow: hidden;
  margin: 10px;
`;

export const BackgroundPhoto = styled.Image`
  width: 100%;
  height: 100%;
`;
