import React from 'react';
import {DrawerContent} from './DrawerContent';
import {AddLocation, Future, Home, Settings} from '../../pages';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Drawer = createDrawerNavigator();
const DrawerStyle = {
  maxWidth: 520,
  width: wp(60),
};
const DrawerStack: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{activeTintColor: 'red'}}
      backBehavior="history"
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={DrawerStyle}
      drawerPosition="right"
      drawerType="slide"
      edgeWidth={60}
      initialRouteName="Home"
      overlayColor="0"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="AddLocation"
        component={AddLocation}
        options={{drawerLabel: 'New City'}}
      />
      <Drawer.Screen
        name="Future"
        component={Future}
        options={{drawerLabel: 'Next 7 days'}}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{drawerLabel: 'Settings'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
