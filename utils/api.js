import * as Google from 'expo-google-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from './axios';
import getEnvVars from '../environment';
import { SUCCESS, LOGIN_TOKEN } from '../constants/index';
import { getUserLogin } from '../actions/index';

const { GOOGLE_API_ID } = getEnvVars();

export const signInWithGoogleAsync = async (dispatch, navigation) => {
  try {
    const result = await Google.logInAsync({
      androidClientId: GOOGLE_API_ID,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      const { email, photoUrl } = result.user;

      return getLogin(navigation, email, photoUrl);
    } else {
      return { cancelled: true };
    }
  } catch (err) {
    return { error: true };
  }
};

const getLogin = async (navigation, email, photoUrl) => {
  try {
    const response = await axios.post('/user/login', {
      email: email,
      profileUrl: photoUrl
    });
    const { result, token } = response.data;

    if (result === SUCCESS) {
      await AsyncStorage.setItem(LOGIN_TOKEN, token);
      // dispatch(getUserLogin());
      navigation.navigate('Main');
    }

    //여기 1번
  } catch (err) {
    console.log(err);
  }
};
