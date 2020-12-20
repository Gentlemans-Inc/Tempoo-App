import React from 'react';
import Routes from './routes';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <FlashMessage position="top">
      <Routes />
    </FlashMessage>
  );
};

export default App;
