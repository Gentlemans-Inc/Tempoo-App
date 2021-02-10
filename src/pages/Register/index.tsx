import React, {useRef, useState} from 'react';
import theme from '@theme';
import {buttonStyle} from './styles';
import {RegisterParams} from '@models/User';
import {Button, ContainerAuth, Input} from '@components';
import {AuthService} from '@services/auth';

const Register: React.FC = () => {
  const [registerParams, setRegisterParams] = useState<RegisterParams>({
    name: '',
    email: '',
    password: '',
  });
  const [passwordConfirm, setPasswordConfirm] = useState('');
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
    if (registerParams.password === passwordConfirm) {
      const res = await AuthService.registerUser(registerParams);
      if (res.status >= 200 && res.status < 300) {
        console.log(res.data);
      } else {
        console.log(res.status);
      }
    }
  };

  return (
    <ContainerAuth canGoBack={true}>
      <Input
        autoCapitalize="words"
        autoCompleteType="email"
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
        placeholder="Password"
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
