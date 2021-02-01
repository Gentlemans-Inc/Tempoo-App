import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import {
  BackButton,
  Background,
  Card,
  Container,
  DismissKeyboard,
  Logo,
} from './styles';
import theme from '@theme';

interface Props {
  canGoBack?: boolean;
}

const ContainerAuth: React.FC<Props> = ({canGoBack, children}) => {
  const navigation = useNavigation();

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <DismissKeyboard onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'ios' ? true : false}>
        <Background source={require('../../assets/images/background-auth.png')}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <Container>
            {canGoBack ? (
              <BackButton onPress={onPressBack}>
                <MaterialIcons
                  color={theme.colors.primary}
                  name="keyboard-arrow-left"
                  size={hp(6)}
                />
              </BackButton>
            ) : null}
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
