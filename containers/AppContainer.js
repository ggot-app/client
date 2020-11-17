import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getUserLogin } from '../actions/index';
import { LOGIN_DATA } from '../constants/index';
import AxiosInstance from '../utils/axios';

import TabNavigation from '../navigation/TabNavigation';
import Login from '../components/LogIn';

export default AppContainer = () => {
  const isLoggedIn = useSelector(state => state.user.isloggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        const loginData = await AsyncStorage.getItem(LOGIN_DATA);

        if (loginData) {
          const { TOKEN, USER } = JSON.parse(loginData);
          dispatch(getUserLogin(USER));
          AxiosInstance.defaults.headers.common['Authorization'] = TOKEN;
        }
      } catch (e) {
        console.warn(e);
      }
    })();
  }, []);

  if (!isLoggedIn) return <Login />;

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};
