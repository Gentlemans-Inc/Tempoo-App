import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Container = styled.SafeAreaView`
  background-color: #fff;
  height: 100%;
  padding-top: ${hp(3)}px;
  width: 100%;
`;

export {Container};
