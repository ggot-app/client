import * as Google from 'expo-google-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from './axios';
import getEnvVars from '../environment';
import { SUCCESS, LOGIN_DATA } from '../constants/index';
import { getUserLogin } from '../actions/index';

const { GOOGLE_API_ID } = getEnvVars();

export const signInWithGoogleAsync = async dispatch => {
  try {
    const result = await Google.logInAsync({
      androidClientId: GOOGLE_API_ID,
      scopes: ['profile', 'email']
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

    const { result, token, ggotUser } = response.data;

    if (result === SUCCESS) {
      const loginData = {
        TOKEN: token,
        USER: ggotUser
      };

      await AsyncStorage.setItem(LOGIN_DATA, JSON.stringify(loginData));
      dispatch(getUserLogin(ggotUser));
      axios.defaults.headers.common['Authorization'] = token;
    }
  } catch (err) {
    console.log(err);
  }
};

export const creatingNewPhoto = async (user_Id, photoInfo, photoUrlList) => {
  const { latitude, longitude } = photoInfo.location;
  const { resistered_by, published_at, description } = photoInfo;
  const formdata = new FormData();

  photoUrlList.forEach((item) => {
    const name = `${user_Id}${item.fileName.split('.')[0]}`;
    const uri = item.uri;

    const photoProperties = { uri, name, type: 'image/jpg' };

    formdata.append('image', photoProperties);
  });

  formdata.append('latitude', latitude);
  formdata.append('longitude', longitude);
  formdata.append('description', description);
  formdata.append('published_at', published_at);
  formdata.append('resistered_by', resistered_by);

  try {
    const response = await axios.post(
    `/users/${user_Id}/photos`,
    formdata,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    });

    const { result } = response.data;

    if (result === SUCCESS) {
      // modal opens : redux 꽂기
      // modal open => description and selected photo page reset
      console.log('success');
    }
  } catch (err) {
    console.log(err);
  }
};

export const getPhotosByLocation = async coords => {
  try {
    const response = await axios.get(`/photo/location?lat=${coords.latitude}&lng=${coords.longitude}`);
    return response.data;
  } catch (err) {
    console.warn(err);
  }
};

export const getPhotosByUserId = async user_Id => {
  try {
    const response = await axios.get(`users/${user_Id}/photos`);

    return response.data;
  } catch (err) {
    console.warn(err);
  }
};
