import React from 'react';
import theme from '../../styles/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {Container, DrawerToggle} from './styles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const onPressDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.nightPurple}
      />
      <DrawerToggle onPress={onPressDrawer}>
        <MaterialIcons color="#fff" name="menu" size={hp(4.5)} />
      </DrawerToggle>
    </Container>
  );
};

export {Home};
