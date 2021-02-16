import React, {useState} from 'react';
import Routes from './routes';
import Toast from 'react-native-toast-message';
import OneSignal from 'react-native-onesignal';
import {useColorScheme} from 'react-native';
import {useMount} from '@hooks';
import {ONESIGNAL_APP_ID} from '@env';
import {darkTheme, lightTheme} from '@theme';
import {AppContext, AppContextInterface} from '@models/AppContext';

const App: React.FC = () => {
  const colorScheme = useColorScheme();
  const [context, setContext] = useState<AppContextInterface>({
    isSigned: false,
    theme: colorScheme === 'light' ? lightTheme : darkTheme,
    colorScheme: colorScheme,
  });

  useMount(() => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId(ONESIGNAL_APP_ID);
  });

  return (
    <AppContext.Provider value={{context, setContext}}>
      <Routes />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </AppContext.Provider>
  );
};

export default App;
