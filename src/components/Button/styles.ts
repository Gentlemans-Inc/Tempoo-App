import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 1000px;
  padding-vertical: ${hp(1.6)}px;
  width: 92%;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: ${hp(2.4)}px;
  font-weight: bold;
`;
