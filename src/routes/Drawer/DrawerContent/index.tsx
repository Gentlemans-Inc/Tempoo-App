import React from 'react';
import theme from '../../../styles/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerContentOptions} from '@react-navigation/drawer';
import {Section} from './Section';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  CenterContent,
  Container,
  Footer,
  ImageContainer,
  Line,
  NewCityLabel,
  PlusContainer,
  Settings,
  SignOut,
  User,
} from './styles';

interface Props extends DrawerContentOptions {}

const DrawerContent: React.FC<Props> = () => {
  const onPressLogout = () => {};

  const onPressNewCity = () => {};

  const onPressSettings = () => {};

  return (
    <Container>
      <Line>
        <User numberOfLines={1}>Eustácio da Silva</User>
        <ImageContainer>
          <MaterialIcons
            color={theme.colors.textDark}
            name="person"
            size={hp(3)}
          />
        </ImageContainer>
      </Line>
      <CenterContent>
        <Section subTitle="Paraná" title="Londrina" onPress={() => {}} />
        <Line onPress={onPressNewCity}>
          <NewCityLabel>New City</NewCityLabel>
          <PlusContainer>
            <MaterialCommunityIcons
              color={theme.colors.mediumGray}
              name="plus"
              size={hp(2.4)}
            />
          </PlusContainer>
        </Line>
      </CenterContent>
      <Footer>
        <Line onPress={onPressSettings}>
          <Settings>Settings</Settings>
          <Ionicons
            color={theme.colors.gray}
            name="settings-outline"
            size={hp(3)}
          />
        </Line>
        <Line onPress={onPressLogout}>
          <SignOut>Sign Out</SignOut>
          <MaterialIcons
            color={theme.colors.error}
            name="logout"
            size={hp(3)}
          />
        </Line>
      </Footer>
    </Container>
  );
};

export {DrawerContent};
