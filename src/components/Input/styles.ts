import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  align-items: center;
  background-color: #fff;
  border-color: ${(props) => props.theme.colors.gray};
  border-radius: 8px;
  border-width: 0.1px;
  flex-direction: row;
  margin-bottom: ${hp(1.5)}px;
  padding-left: ${wp(3)}px;
  padding-right: ${wp(3)}px;
  width: 85%;
`;

export const TextInput = styled.TextInput`
  color: ${(props) => props.theme.colors.textDark};
  margin-left: ${wp(1.5)}px;
  padding: ${hp(0.5)}px;
  width: 90%;
`;
