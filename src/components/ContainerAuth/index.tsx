import React, {useContext} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '@models/AppContext';
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
import {lightTheme} from '@theme';

interface Props {
  canGoBack?: boolean;
}

const ContainerAuth: React.FC<Props> = ({canGoBack, children}) => {
  const {context} = useContext(AppContext);
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
        <Background>
          <StatusBar
            barStyle={
              context.colorScheme === 'dark' ? 'light-content' : 'dark-content'
            }
            backgroundColor={context.theme.colors.background}
          />
          <Container>
            {canGoBack ? (
              <BackButton
                accessible={true}
                accessibilityLabel="Go back"
                accessibilityHint="Navigates to the previous screen"
                accessibilityRole="button"
                onPress={onPressBack}>
                <MaterialIcons
                  color={lightTheme.colors.primary}
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
