import React from 'react';
import {Keyboard, KeyboardAvoidingView, Platform} from 'react-native';
import {Background, Card, Container, DismissKeyboard, Logo} from './styles';

const ContainerAuth: React.FC = ({children}) => {
  return (
    <DismissKeyboard onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'ios' ? true : false}>
        <Background source={require('../../assets/images/background-auth.png')}>
          <Container>
            <Card>
              <Logo>Tempoo</Logo>
              {children}
            </Card>
          </Container>
        </Background>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

export {ContainerAuth};
