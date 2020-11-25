import React, { useEffect, useState } from 'react';
import { AppLoading, Image, View } from 'expo';
import * as Font from 'expo-font';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as Permissions from 'expo-permissions';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';

import AppContainer from './containers/AppContainer';
import reducer from './reducers/index';

const store = createStore(reducer);

export default function App() {
  const [ isLoaded, setIsLoaded ] = useState(false);

  const getAssets = async () => {
    await Font.loadAsync({
      'googleFont': require('./assets/fonts/Poppins/Poppins-Medium.ttf')
    });
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
      <AppContainer />
    </Provider>
  );
}
