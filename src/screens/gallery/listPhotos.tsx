import React from 'react';
import {
  ListPhotosStyled,
  ScreenHome,
  Photo,
  BackgroundPhoto,
  FilterGallery,
  ButtonFilter,
} from './style';
import Colors from './../../constants/colors';
import {isStyledComponent} from 'styled-components';

interface IListPhotos {
  photos: Array<any>;
  padding?: number | string;
  style?: any;
}

const ListPhotos = ({photos, padding, style}: IListPhotos) => {
  return (
    <ListPhotosStyled
      data={photos}
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: padding,
        paddingBottom: 50,
        ...style,
      }}
      numColumns={2}
      bouncesZoom={true}
      keyExtractor={(item: any) => item.id}
      renderItem={({item}: any) => (
        <Photo key={item.id} activeOpacity={1}>
          <BackgroundPhoto source={item.img} />
        </Photo>
      )}
    />
  );
};

export default ListPhotos;
