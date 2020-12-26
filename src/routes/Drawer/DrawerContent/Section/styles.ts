import styled from 'styled-components/native';
import theme from '../../../../styles/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.TouchableOpacity`
  align-self: flex-end;
  align-items: center;
  flex-direction: row;
`;

export const City = styled.Text`
  color: ${theme.colors.nightPurple};
  font-size: ${hp(2.4)}px;
  font-weight: bold;
  text-align: right;
`;

export const State = styled.Text`
  color: ${theme.colors.nightPurple};
  font-size: ${hp(1.9)}px;
  text-align: right;
`;

export const TextSection = styled.View`
  margin-right: ${wp(3)}px;
`;
