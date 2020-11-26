import React from 'react';
import styled from 'styled-components/native';
import Colors from './../constants/colors';

interface IInput {
  placeholder: string;
  onChange: any;
  value: string;
  label: string;
}

const CustomInput = ({
  value,
  onChange,
  placeholder,
  label,
  ...props
}: IInput) => {
  return (
    <FormGroup>
      <LabelInput>{label}:</LabelInput>

      <CustomFormInput>
        <InputForm
          value={value}
          placeholder={placeholder}
          onChangeText={(text: string) => onChange(text)}
          {...props}
          placeholderTextColor="gray"
        />
      </CustomFormInput>
    </FormGroup>
  );
};

export default CustomInput;

export const FormGroup = styled.View`
  width: 100%;
  margin-bottom: 20px;
  flex-direction: column;
`;

export const CustomFormInput = styled.View`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  background-color: ${Colors.bg2};
  margin-top: 5px;
`;

export const InputForm = styled.TextInput`
  flex: 1;
  font-size: 18px;
  color: white;
  padding-left: 10px;
`;

export const LabelInput = styled.Text`
  color: white;
  font-size: 17px;
  width: 100%;
`;
