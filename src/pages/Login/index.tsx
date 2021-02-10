import React, {useContext, useRef, useState} from 'react';
import theme from '@theme';
import {useNavigation} from '@react-navigation/native';
import {AuthService} from '@services/auth';
import {AuthParams} from '@models/User';
import {UserContext} from '@models/UserContext';
import {Button, ContainerAuth, Input} from '@components';
import {Footer, ForgotPassword, ForgotPasswordLabel, Message} from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const {setUser} = useContext(UserContext);
  const [authParams, setAuthParams] = useState<AuthParams>({
    email: '',
    password: '',
  });
  const refPassword = useRef(null);

  const onChangeEmail = (text: string) => {
    setAuthParams({...authParams, email: text});
  };

  const onChangePassword = (text: string) => {
    setAuthParams({...authParams, password: text});
  };

  const onPressButton = async () => {
    const res = await AuthService.login(authParams);
    if (res.status >= 200 && res.status < 300) {
      setUser({isSigned: true, jwt: res.data.data});
    }
  };

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
        value={authParams.email}
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
        value={authParams.password}
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
