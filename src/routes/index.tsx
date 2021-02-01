import React from 'react';
import {InsideApp} from './InsideApp';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';

function Routes() {
  return (
    <NavigationContainer>
      {false ? <AuthStack /> : <InsideApp />}
    </NavigationContainer>
  );
}

export default Routes;
