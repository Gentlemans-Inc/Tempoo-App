import React, {useRef, useState} from 'react';
import theme from '@theme';
import Toast from 'react-native-toast-message';
import {ActivityIndicator} from 'react-native';
import {buttonStyle} from './styles';
import {RegisterParams} from '@models/User';
import {Button, ContainerAuth, Input} from '@components';
import {AuthService} from '@services/auth';
import {ValidateAuthFields} from '@validation';

const Register: React.FC = () => {
  const [registerParams, setRegisterParams] = useState<RegisterParams>({
    name: '',
    email: '',
    password: '',
  });
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [load, setLoad] = useState(false);
  const refEmail = useRef(null);
  const refPassword = useRef(null);
  const refPasswordConfirm = useRef(null);

  const onChangeName = (text: string) => {
    setRegisterParams({...registerParams, name: text});
  };

  const onChangeEmail = (text: string) => {
    setRegisterParams({...registerParams, email: text});
  };

  const onChangePassword = (text: string) => {
    setRegisterParams({...registerParams, password: text});
  };

  const onChangePasswordConfirm = (text: string) => {
    setPasswordConfirm(text);
  };

  const onSubmitEmail = () => {
    refPassword.current.focus();
  };

  const onSubmitName = () => {
    refEmail.current.focus();
  };

  const onSubmitPassword = () => {
    refPasswordConfirm.current.focus();
  };

  const onPressButton = async () => {
    setLoad(true);
    const validateRegisterFields = ValidateAuthFields.validateRegisterParams(
      registerParams,
      passwordConfirm,
    );
    if (validateRegisterFields.isValid) {
      AuthService.registerUser(registerParams)
        .then(({data}) => {
          console.log(data);
          Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Sucesso amigão!',
            visibilityTime: 4000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
          });
        })
        .catch(({data}) => {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: data.message,
            visibilityTime: 4000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
          });
        });
    } else {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: `${validateRegisterFields.message}😞`,
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }
    setLoad(false);
  };

  return (
    <ContainerAuth canGoBack={true}>
      <ActivityIndicator
        animating={load}
        color={theme.colors.primary}
        size="small"
      />
      <Input
        autoCapitalize="words"
        autoCompleteType="name"
        keyboardType="default"
        materialIcon="person"
        onChangeText={onChangeName}
        onSubmitEditing={onSubmitName}
        placeholder="Name"
        placeholderTextColor={theme.colors.placeholder}
        returnKeyType="next"
        textContentType="name"
        value={registerParams.name}
      />
      <Input
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
        materialIcon="email"
        onChangeText={onChangeEmail}
        onSubmitEditing={onSubmitEmail}
        refProp={refEmail}
        placeholder="E-Mail"
        placeholderTextColor={theme.colors.placeholder}
        returnKeyType="next"
        textContentType="emailAddress"
        value={registerParams.email}
      />
      <Input
        onChangeText={onChangePassword}
        placeholder="Password"
        placeholderTextColor={theme.colors.placeholder}
        materialIcon="vpn-key"
        onSubmitEditing={onSubmitPassword}
        refProp={refPassword}
        returnKeyType="next"
        secureTextEntry={true}
        textContentType="password"
        value={registerParams.password}
      />
      <Input
        onChangeText={onChangePasswordConfirm}
        placeholder="Confirm Password"
        placeholderTextColor={theme.colors.placeholder}
        materialIcon="vpn-key"
        onSubmitEditing={onPressButton}
        refProp={refPasswordConfirm}
        returnKeyType="done"
        secureTextEntry={true}
        textContentType="password"
        value={passwordConfirm}
      />
      <Button label="Sign Up" onPress={onPressButton} style={buttonStyle} />
    </ContainerAuth>
  );
};

export {Register};
