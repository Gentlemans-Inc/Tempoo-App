import React, {useState} from 'react';
import Routes from './routes';
import Toast from 'react-native-toast-message';
import {useColorScheme} from 'react-native';
import {AppContext, AppContextInterface} from '@models/AppContext';
import {darkTheme, lightTheme} from '@theme';

const App: React.FC = () => {
  const colorScheme = useColorScheme();
  const [context, setContext] = useState<AppContextInterface>({
    isSigned: false,
    theme: colorScheme === 'light' ? lightTheme : darkTheme,
    colorScheme: colorScheme,
  });

  return (
    <AppContext.Provider value={{context, setContext}}>
      <Routes />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </AppContext.Provider>
  );
};

export default App;
