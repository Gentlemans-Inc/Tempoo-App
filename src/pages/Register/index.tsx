import React, {useRef, useState} from 'react';
import theme from '../../styles/theme';
import {buttonStyle} from './styles';
import {Button, ContainerAuth, Input} from '../../components';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const refEmail = useRef(null);
  const refPassword = useRef(null);
  const refPasswordConfirm = useRef(null);

  const onChangeName = (text) => {
    setName(text);
  };

  const onChangeEmail = (text) => {
    setEmail(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const onChangePasswordConfirm = (text) => {
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

  const onPressButton = () => {};

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
        value={name}
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
        value={email}
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
        value={password}
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
