import React, { useEffect, useState } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Permissions from 'expo-permissions';

import AppContainer from './containers/AppContainer';
import reducer from './reducers/index';

const store = createStore(reducer);

export default function App() {
  const [ isLoaded, setIsLoaded ] = useState(false);

  const getAssets = async () => {

  };

  const checkPermission = async () => {
    const { status } = await Permissions.askAsync(
      Permissions.LOCATION,
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );

    if (status !== 'granted') alert('접근 권한을 설정해주세요');
  };
  const preLoad = async () => {
    try {
      getAssets();
      checkPermission();
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    preLoad();
    setIsLoaded(true);
  }, []);

  return !isLoaded ? (
    <AppLoading/>
  ) : (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
}
