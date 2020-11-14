import React, { useState } from 'react';
import { AppLoading } from 'expo';

import AppContainer from './containers/AppContainer';

export default function App() {
  const [ isLoaded, setIsLoaded ] = useState(false);

  const preLoad = async () => {
  };

  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={preLoad}
        onFinish={setIsLoaded(true)}
        onError={console.warn}
        autoHideSplash={true}
      />
    );
  }

  return (
    <AppContainer/>
  );
}
