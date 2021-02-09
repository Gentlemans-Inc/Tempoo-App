import React, {useState} from 'react';
import Routes from './routes';
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
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
