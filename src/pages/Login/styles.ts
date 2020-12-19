import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import theme from '../../styles/theme';

export const Footer = styled.TouchableOpacity`
  margin-top: ${hp(5)}px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 10%;
  margin-bottom: ${hp(3.5)}px;
`;

export const ForgotPasswordLabel = styled.Text`
  color: ${theme.colors.nightPurple};
  font-size: ${hp(1.9)}px;
  font-weight: bold;
`;

export const Message = styled.Text`
  color: ${theme.colors.textDark};
  font-size: ${hp(1.9)}px;
`;
