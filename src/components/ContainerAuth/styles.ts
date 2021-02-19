import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const BackButton = styled.TouchableOpacity`
  left: ${wp(2)}px;
  position: absolute;
  top: ${hp(2)}px;
`;

export const Background = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
  width: 100%;
`;

export const Card = styled.View`
  align-items: center;
  align-self: center;
  background-color: ${(props) => props.theme.colors.topBackground};
  border-color: ${(props) => props.theme.colors.mediumGray};
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
  color: ${(props) => props.theme.colors.primary};
  font-family: 'Babydoo';
  font-size: ${hp(8)}px;
  margin-bottom: ${hp(5)}px;
`;
