import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const CenterContent = styled.View``;

export const Container = styled.SafeAreaView`
  background-color: #fff;
  height: 100%;
  padding-top: ${hp(3)}px;
  justify-content: space-between;
  padding-bottom: ${hp(3)}px;
  padding-right: ${wp(5)}px;
  width: 100%;
`;

export const Footer = styled.View``;

export const ImageContainer = styled.View`
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 1000px;
  height: ${hp(4)}px;
  justify-content: center;
  width: ${hp(4)}px;
`;

export const Line = styled.TouchableOpacity`
  align-items: center;
  align-self: flex-end;
  flex-direction: row;
  margin-top: ${hp(3)}px;
`;

export const NewCityLabel = styled.Text`
  color: ${(props) => props.theme.colors.mediumGray};
  font-size: ${hp(2)}px;
  font-weight: bold;
`;

export const PlusContainer = styled.View`
  border-color: ${(props) => props.theme.colors.mediumGray};
  border-radius: 1000px;
  border-width: 1px;
  border-style: dashed;
  margin-left: ${wp(4)}px;
  margin-right: ${wp(1)}px;
`;

export const Settings = styled.Text`
  color: ${(props) => props.theme.colors.gray};
  font-size: ${hp(2)}px;
  margin-right: ${wp(5)}px;
`;

export const SignOut = styled.Text`
  color: ${(props) => props.theme.colors.error};
  font-size: ${hp(2)}px;
  margin-right: ${wp(5)}px;
`;

export const User = styled.Text`
  color: ${(props) => props.theme.colors.textDark};
  font-size: ${hp(2.2)}px;
  margin-right: ${wp(5)}px;
  font-weight: bold;
`;
