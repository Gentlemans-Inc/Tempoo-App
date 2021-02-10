import React, {useContext, useRef, useState} from 'react';
import theme from '@theme';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {AuthService} from '@services/auth';
import {AuthParams} from '@models/User';
import {UserContext} from '@models/UserContext';
import {Button, ContainerAuth, Input} from '@components';
import {Footer, ForgotPassword, ForgotPasswordLabel, Message} from './styles';
import {ValidateAuthFields} from '@validation';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const refPassword = useRef(null);
  const {setUser} = useContext(UserContext);
  const [authParams, setAuthParams] = useState<AuthParams>({
    email: '',
    password: '',
  });

  const onChangeEmail = (text: string) => {
    setAuthParams({...authParams, email: text});
  };

  const onChangePassword = (text: string) => {
    setAuthParams({...authParams, password: text});
  };

  const onPressButton = async () => {
    if (ValidateAuthFields.validateAuthParams(authParams)) {
      AuthService.login(authParams)
        .then(({data}) => {
          setUser({isSigned: true, jwt: data.data});
        })
        .catch(() => {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Usuário ou senha inválidos 😞',
            visibilityTime: 4000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
          });
        });
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
