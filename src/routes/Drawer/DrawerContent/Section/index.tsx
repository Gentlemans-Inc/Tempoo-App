import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '@theme';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Container, City, State, TextSection} from './styles';

interface Props {
  subTitle?: string;
  title?: string;
  onPress: any;
}

const Section: React.FC<Props> = ({title, subTitle, onPress}) => {
  return (
    <Container onPress={onPress}>
      <TextSection>
        <City>{title}</City>
        <State>{subTitle}</State>
      </TextSection>
      <Ionicons
        color={theme.colors.nightPurple}
        name="md-location-outline"
        size={hp(3.5)}
      />
    </Container>
  );
};

export {Section};
