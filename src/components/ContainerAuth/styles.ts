import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import theme from '../../styles/theme';

export const Background = styled.ImageBackground`
  height: 100%;
  width: 100%;
`;

export const Card = styled.View`
  align-items: center;
  align-self: center;
  background-color: #fff;
  border-color: ${theme.colors.mediumGray};
  border-radius: 12px;
  border-width: 0.2px;
  padding-bottom: ${hp(2)}px;
  padding-top: ${hp(5)}px;
  width: 90%;
`;

export const Container = styled.SafeAreaView`
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const DismissKeyboard = styled.TouchableWithoutFeedback``;

export const Logo = styled.Text`
  color: ${theme.colors.nightPurple};
  font-family: 'Babydoo';
  font-size: ${hp(8)}px;
  margin-bottom: ${hp(5)}px;
`;
