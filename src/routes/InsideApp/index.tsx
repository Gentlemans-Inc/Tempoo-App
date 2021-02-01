import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Forecast, Home, Notifications, Search, Welcome} from '@pages';

const Stack = createStackNavigator();

const InsideApp: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Forecast" component={Forecast} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export {InsideApp};
