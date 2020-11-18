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

// photo schema에 들어가는 내용을 넣어줘야함
// resistered_by, location, photo_url, description, published_at
export const creatingNewPhoto = async (user_Id, photoInfo, photoUrlList) => {
  // const { latitude, longitude } = photoInfo.markedLocation;
  const { resistered_by, date, description } = photoInfo;
  const formdata = new FormData();

  photoUrlList.forEach(uri => {
    const name = 'dsfsd';
    const locationPhoto = { uri, name, type: 'image/jpeg' };

    formdata.append('file', locationPhoto);
  });

  // formdata.append('name', name);
  formdata.append('date', date);
  // formdata.append('latitude', latitude);
  // formdata.append('longitude', longitude);
  formdata.append('resistered_by', resistered_by);
  formdata.append('description', description);

  try {
    const response = await axios.post(`/users/${user_Id}/photos`, {
      data: formdata,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    const { result } = response.data;

    if (result === SUCCESS) {
      // modal opens
      console.log('success');
    }
  } catch (err) {
    console.log(err);
  }
};

export const getPhotosByLocation = async coords => {
  try {
    const response = await axios.get(`/photo/location?lat=${coords.lat}&lng=${coords.lng}`);
    return response.data;
  } catch (err) {
    console.warn(err);
  }
};
