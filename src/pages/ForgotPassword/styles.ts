import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Message = styled.Text`
  color: ${(props) => props.theme.colors.text};
  flex-wrap: wrap;
  font-size: ${hp(2)}px;
  margin-bottom: ${hp(4)}px;
  width: 85%;
`;

export const buttonStyle = {
  marginBottom: hp(2),
  marginTop: hp(5),
};
