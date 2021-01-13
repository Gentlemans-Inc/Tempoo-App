import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${(props) => props.theme.colors.nightPurple};
  border-radius: 8px;
  padding-bottom: ${hp(1)}px;
  padding-top: ${hp(1)}px;
  width: 85%;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: ${hp(2.4)}px;
  font-weight: bold;
`;
