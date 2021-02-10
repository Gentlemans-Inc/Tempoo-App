import React, {useContext} from 'react';
import {InsideApp} from './InsideApp';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {UserContext} from '@models/UserContext';

function Routes() {
  const {user} = useContext(UserContext);

  return (
    <NavigationContainer>
      {user.isSigned ? <InsideApp /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default Routes;
