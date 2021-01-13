import React, {useRef, useState} from 'react';
import theme from '@theme';
import {useNavigation} from '@react-navigation/native';
import {Button, ContainerAuth, Input} from '@components';
import {Footer, ForgotPassword, ForgotPasswordLabel, Message} from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const refPassword = useRef(null);

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  const onPressButton = () => {};

  const onPressFooter = () => {
    navigation.navigate('Register');
  };

  const onPressForgot = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSubmitEmail = () => {
    refPassword.current.focus();
  };

  return (
    <ContainerAuth>
      <Input
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
        materialIcon="email"
        onChangeText={onChangeEmail}
        onSubmitEditing={onSubmitEmail}
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
        onSubmitEditing={onPressButton}
        refProp={refPassword}
        returnKeyType="done"
        secureTextEntry={true}
        textContentType="password"
        value={password}
      />
      <ForgotPassword onPress={onPressForgot}>
        <ForgotPasswordLabel>Forgot Password?</ForgotPasswordLabel>
      </ForgotPassword>
      <Button label="Sign In" onPress={onPressButton} />

      <Footer onPress={onPressFooter}>
        <Message>
          Don't have an account yet?
          <ForgotPasswordLabel> Sign Up</ForgotPasswordLabel>
        </Message>
      </Footer>
    </ContainerAuth>
  );
};

export {Login};
