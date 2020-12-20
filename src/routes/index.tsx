import React from 'react';
import Drawer from './Drawer';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';

function Routes() {
  return (
    <NavigationContainer>
      {true ? <AuthStack /> : <Drawer />}
    </NavigationContainer>
  );
}

export default Routes;
