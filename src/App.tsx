import React, {useState} from 'react';
import Routes from './routes';
import Toast from 'react-native-toast-message';
import theme from '@theme';
import {ThemeProvider} from 'styled-components';
import {UserContext, UserContextInterface} from '@models/UserContext';

const App: React.FC = () => {
  const [user, setUser] = useState<UserContextInterface>({
    isSigned: false,
    jwt: '',
  });

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{user, setUser}}>
        <Routes />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
