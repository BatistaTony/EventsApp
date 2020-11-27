import React from 'react';
import Colors from './../../constants/colors';
import {FormGroup, TextInputHome} from './styleHeader';
//@ts-ignore
import SearchIcon from './../../assets/images/icones/search.svg';

const FormGroupHome = () => {
  return (
    <FormGroup>
      <SearchIcon width="18" height="18" fill={Colors.bgNormal} />
      <TextInputHome
        placeholder="search events"
        placeholderTextColor={Colors.bgNormal}
      />
    </FormGroup>
  );
};

export default FormGroupHome;
