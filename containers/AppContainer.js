import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';

import { getUserLogin, setUserLocation } from '../actions/index';
import { LOGIN_DATA } from '../constants/index';
import AxiosInstance from '../utils/axios';

import TabNavigation from '../navigation/TabNavigation';
import Login from '../components/LogIn';

export default AppContainer = () => {
  const isLoggedIn = useSelector(state => state.user.isloggedIn);
  const dispatch = useDispatch();

  const getLocation = async () => {
    const location = await Location.getCurrentPositionAsync({});

    if (location) {
      dispatch(setUserLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      }));
    }
  };
  const getLogin = async () => {
    try {
      const loginData = await AsyncStorage.getItem(LOGIN_DATA);

      if (loginData) {
        const { TOKEN, USER } = JSON.parse(loginData);
        dispatch(getUserLogin(USER));
        AxiosInstance.defaults.headers.common['Authorization'] = TOKEN;
      }
      getLocation();
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getLogin();
  }, []);

  if (!isLoggedIn) return <Login />;

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};
