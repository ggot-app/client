import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AxiosInstance from '../utils/axios';
import { LOGIN_DATA } from '../constants/index';
import { getUserLogin } from '../actions/index';

import LogIn from '../screens/LogIn';
import TabNavigation from '../navigation/TabNavigation';

const RootStack = createStackNavigator();

export default function RootNavigation() {
  const dispatch = useDispatch();
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

  return (
    <RootStack.Navigator>
      {
        !isLoggedIn
          ? <RootStack.Screen name='LogIn' component={LogIn} />
          : <RootStack.Screen name='TabNavigation' component={TabNavigation} />
      }
    </RootStack.Navigator>
  );
}