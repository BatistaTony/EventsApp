import React, {useState} from 'react';
import {Keyboard, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomInputPassword from '../../components/CustomInputPassword';
import {useNavigation} from '@react-navigation/native';
import {
  FormArea,
  Screen,
  ButtonSign,
  ButtonSignText,
  TitleSign,
  SimpleButtonSign,
  SimpleButtonSignText,
  SignSimpleButtonArea,
} from './style';

const SignIn = () => {
  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');

  const navigation = useNavigation();

  const handleChange = (property: string, value: string) => {
    switch (property) {
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
    if (emailField && passwordField) {
      return true;
    } else {
      return false;
    }
  };

  const handleSignIn = () => {
    closeKeyboard();

    if (checkData()) {
      navigation.navigate('MainTab');
    }
  };

  const closeKeyboard = () => {
    Keyboard.dismiss();
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Screen>
      <FormArea>
        <TitleSign>SignIn Now !</TitleSign>

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

        <ButtonSign activeOpacity={0.9} onPress={handleSignIn}>
          <ButtonSignText>Login</ButtonSignText>
        </ButtonSign>
        <SimpleButtonSign
          style={{marginTop: 15}}
          activeOpacity={0.9}
          onPress={goToSignUp}>
          <SimpleButtonSignText>
            Don't have an account ? create now
          </SimpleButtonSignText>
        </SimpleButtonSign>

        <SignSimpleButtonArea>
          <SimpleButtonSign activeOpacity={0.9}>
            <SimpleButtonSignText>Forget your Password ?</SimpleButtonSignText>
          </SimpleButtonSign>
        </SignSimpleButtonArea>
      </FormArea>
    </Screen>
  );
};

export default SignIn;
