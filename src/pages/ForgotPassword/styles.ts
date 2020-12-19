import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import theme from '../../styles/theme';

export const Message = styled.Text`
  color: ${theme.colors.textDark};
  flex-wrap: wrap;
  font-size: ${hp(2)}px;
  margin-bottom: ${hp(4)}px;
  width: 85%;
`;

export const buttonStyle = {
  marginBottom: hp(2),
  marginTop: hp(5),
};
