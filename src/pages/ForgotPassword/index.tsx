import React, {useState} from 'react';
import theme from '../../styles/theme';
import {buttonStyle, Message} from './styles';
import {Button, ContainerAuth, Input} from '../../components';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const onPressButton = () => {};

  return (
    <ContainerAuth canGoBack={true}>
      <Message>
        Enter your e-mail and we'll send a link to recover your password
      </Message>
      <Input
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
        materialIcon="email"
        onChangeText={onChangeEmail}
        onSubmitEditing={onPressButton}
        placeholder="E-Mail"
        placeholderTextColor={theme.colors.placeholder}
        returnKeyType="next"
        textContentType="emailAddress"
        value={email}
      />
      <Button label="Send" onPress={onPressButton} style={buttonStyle} />
    </ContainerAuth>
  );
};

export {ForgotPassword};
