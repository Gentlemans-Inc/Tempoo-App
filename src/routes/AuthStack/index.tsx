import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login, ForgotPassword, Register} from '../../pages';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export {AuthStack};
