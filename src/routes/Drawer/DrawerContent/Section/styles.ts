import styled from 'styled-components/native';
import theme from '../../../../styles/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Container = styled.TouchableOpacity`
  background-color: #fff;
  height: 100%;
  padding-top: ${hp(3)}px;
  width: 100%;
`;

const Title = styled.Text`
  color: ${theme.colors.nightPurple};
  font-size: ${wp(4) > 26 ? 26 : wp(4)}px;
  font-weight: ${(props) => (props.focused || props.logout ? 'bold' : '400')};
  padding-horizontal: ${wp(4)}px;
`;

const SubTitle = styled.Text`
  color: ${theme.colors.nightPurple};
  font-size: ${wp(4) > 26 ? 26 : wp(4)}px;
  font-weight: ${(props) => (props.focused || props.logout ? 'bold' : '400')};
  padding-horizontal: ${wp(4)}px;
`;

export {Container, Title, SubTitle};
