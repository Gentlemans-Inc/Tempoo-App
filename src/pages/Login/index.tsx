import React, {useContext, useRef, useState} from 'react';
import theme from '@theme';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {AuthService} from '@services/auth';
import {AuthParams} from '@models/User';
import {AppContext} from '@models/AppContext';
import {Button, ContainerAuth, Input} from '@components';
import {Footer, ForgotPassword, ForgotPasswordLabel, Message} from './styles';
import {ValidateAuthFields} from '@validation';
import {setSecureValue} from '@store';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const refPassword = useRef(null);
  const {setUser} = useContext(AppContext);
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

  // Handle Sign In
  const onPressButton = async () => {
    const validateAuthFields = ValidateAuthFields.validateAuthParams(
      authParams,
    );
    if (validateAuthFields.isValid) {
      AuthService.login(authParams)
        .then(({data}) => {
          setSecureValue('jwt', data.data);
          setUser({isSigned: true});
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
    } else {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: `${validateAuthFields.message} 😞`,
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
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
