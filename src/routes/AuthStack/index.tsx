import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login, ForgotPassword} from '../../pages';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

export {AuthStack};
