import React, {useState} from 'react';
import styled from 'styled-components/native';
import Colors from './../constants/colors';

//@ts-ignore
import EyeIconOpened from './../assets/images/icones/eye-off-outline.svg';
//@ts-ignore
import EyeIconClosed from './../assets/images/icones/eye-outline.svg';

import {LabelInput, InputForm, FormGroup} from './CustomInput';

interface IInput {
  placeholder?: string;
  onChange: any;
  value: string;
  label: string;
}

const CustomInputPassword = ({
  value,
  onChange,
  placeholder,
  label,
  ...props
}: IInput) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormGroup>
      <LabelInput>{label}:</LabelInput>

      <CustomFormInput>
        <InputForm
          secureTextEntry={!showPassword}
          value={value}
          placeholder={placeholder ? placeholder : ''}
          onChangeText={(text: string) => onChange(text)}
          {...props}
          placeholderTextColor="#ffffff"
        />
        {showPassword ? (
          <ButtonShowPassword onPress={() => setShowPassword(!showPassword)}>
            <EyeIconOpened width="24" height="24" fill="#ffffff" />
          </ButtonShowPassword>
        ) : (
          <ButtonShowPassword onPress={() => setShowPassword(!showPassword)}>
            <EyeIconClosed width="24" height="24" fill="#ffffff" />
          </ButtonShowPassword>
        )}
      </CustomFormInput>
    </FormGroup>
  );
};

export default CustomInputPassword;

const ButtonShowPassword = styled.TouchableOpacity``;

const CustomFormInput = styled.View`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  background-color: ${Colors.bg2};
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;
