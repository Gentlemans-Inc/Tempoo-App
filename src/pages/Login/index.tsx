import React, {useRef, useState} from 'react';
import {Keyboard} from 'react-native';
import {Button, Input} from '../../components';
import theme from '../../styles/theme';
import {
  Container,
  DismissKeyboard,
  Footer,
  ForgotPassword,
  ForgotPasswordLabel,
  Message,
} from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const refPassword = useRef();

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  const onPressButton = () => {};

  const onSubmitEmail = () => {
    refPassword.current.focus();
  };

  return (
    <DismissKeyboard onPress={Keyboard.dismiss}>
      <Container>
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
        <ForgotPassword>
          <ForgotPasswordLabel>Forgot Password?</ForgotPasswordLabel>
        </ForgotPassword>
        <Button label="Sign In" onPress={onPressButton} />

        <Footer>
          <Message>
            Don't have an account yet?
            <ForgotPasswordLabel> Sign Up</ForgotPasswordLabel>
          </Message>
        </Footer>
      </Container>
    </DismissKeyboard>
  );
};

export {Login};
