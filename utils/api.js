import * as Google from 'expo-google-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from './axios';
import getEnvVars from '../environment';
import { SUCCESS, LOGIN_TOKEN } from '../constants/index';
import { getUserLogin } from '../actions/index';

const { GOOGLE_API_ID } = getEnvVars();

export const signInWithGoogleAsync = async dispatch => {
  try {
    const result = await Google.logInAsync({
      androidClientId: GOOGLE_API_ID,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      const { email, photoUrl } = result.user;

      return getLogIn(dispatch, email, photoUrl);
    } else {
      return { cancelled: true };
    }
  } catch (err) {
    return { error: true };
  }
};

const getLogIn = async (dispatch, email, photoUrl) => {
  try {
    const response = await axios.post('/user/login', {
      email: email,
      profileUrl: photoUrl
    });
    const { result, token } = response.data;

    if (result === SUCCESS) {
      await AsyncStorage.setItem(LOGIN_TOKEN, token);

      dispatch(getUserLogin());
    }
  } catch (err) {
    console.log(err);
  }
};
