import styled from 'styled-components/native';
import theme from '../../styles/theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  background-color: ${theme.colors.nightPurple};
  height: 100%;
  width: 100%;
`;

export const DrawerToggle = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: ${wp(4)}px;
  margin-top: ${hp(2)}px;
`;
