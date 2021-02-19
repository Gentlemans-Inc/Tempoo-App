import React, {useContext} from 'react';
import {InsideApp} from './InsideApp';
import {AuthStack} from './AuthStack';
import {AppContext} from '@models/AppContext';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationBackground} from '@components';

function Routes() {
  const {context} = useContext(AppContext);

  return (
    <ThemeProvider theme={context.theme}>
      <ApplicationBackground>
        <NavigationContainer>
          {context.isSigned ? <InsideApp /> : <AuthStack />}
        </NavigationContainer>
      </ApplicationBackground>
    </ThemeProvider>
  );
}

export default Routes;
