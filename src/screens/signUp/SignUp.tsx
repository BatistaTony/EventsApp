import React, {useState} from 'react';
import {Keyboard, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomInputPassword from '../../components/CustomInputPassword';
import {useNavigation} from '@react-navigation/native';
import {ScreenSignUp} from './style';
import {
  FormArea,
  Screen,
  ButtonSign,
  ButtonSignText,
  TitleSign,
  SimpleButtonSign,
  SimpleButtonSignText,
  SignSimpleButtonArea,
} from './../signIn/style';

const SignUp = () => {
  const [nameField, setNameField] = useState<string>('');

  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');

  const navigation = useNavigation();

  const handleChange = (property: string, value: string) => {
    switch (property) {
      case 'name': {
        setNameField(value);
        break;
      }

      case 'email': {
        setEmailField(value);
        break;
      }

      case 'password': {
        setPasswordField(value);
        break;
      }

      default: {
        return;
      }
    }
  };

  const checkData = () => {
    if (nameField && emailField && passwordField) {
      return true;
    } else {
      return false;
    }
  };

  const handleSignUp = () => {
    closeKeyboard();

    if (checkData()) {
      navigation.navigate('MainTab');
    }
  };

  const closeKeyboard = () => {
    Keyboard.dismiss();
  };

  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScreenSignUp>
      <FormArea>
        <TitleSign>SignUp Now !</TitleSign>

        <CustomInput
          label="Name"
          onChange={(value: string) => handleChange('name', value)}
          placeholder="john doe"
          value={nameField}
        />

        <CustomInput
          label="Email"
          onChange={(value: string) => handleChange('email', value)}
          placeholder="example@example.com"
          value={emailField}
        />

        <CustomInputPassword
          label="Password"
          onChange={(value: string) => handleChange('password', value)}
          value={passwordField}
        />

        <ButtonSign activeOpacity={0.9} onPress={handleSignUp}>
          <ButtonSignText>Signup</ButtonSignText>
        </ButtonSign>

        <SignSimpleButtonArea>
          <SimpleButtonSign activeOpacity={0.9} onPress={goToSignIn}>
            <SimpleButtonSignText>
              Already have account ? Sign in now
            </SimpleButtonSignText>
          </SimpleButtonSign>
        </SignSimpleButtonArea>
      </FormArea>
    </ScreenSignUp>
  );
};

export default SignUp;
