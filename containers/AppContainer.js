import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AxiosInstance from '../utils/axios';
import { getUserLogin } from '../actions/index';
import { LOGIN_DATA } from '../constants/index';

import Login from '../components/LogIn';
import TabNavigation from '../navigation/TabNavigation';

export default AppContainer = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isloggedIn);

  const isLoggedIn = useSelector(state => state.user.isloggedIn);

  const getLogin = async () => {
    try {
      const loginData = await AsyncStorage.getItem(LOGIN_DATA);

      if (loginData) {
        const { TOKEN, USER } = JSON.parse(loginData);
        dispatch(getUserLogin(USER));
        AxiosInstance.defaults.headers.common['Authorization'] = TOKEN;
      }
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
