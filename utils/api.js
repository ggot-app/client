import * as Google from 'expo-google-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from './axios';
import getEnvVars from '../environment';
import { SUCCESS, LOGIN_DATA } from '../constants/index';
import {
  openModal,
  getUserLogin,
  deleteSelectedPhotos
} from '../actions/index';

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
      axios.defaults.headers.common['Authorization'] = token; // 적당한 위치가 아님
    }
  } catch (err) {
    console.log(err);
  }
};

export const creatingNewPhoto = async (userId, photoInfo, photoUrlList, openModal) => {
  const { latitude, longitude } = photoInfo.location;
  const { resistered_by, published_at, description } = photoInfo;

  const formdata = new FormData();

  photoUrlList.forEach((item) => {
    const name = `${userId}${item.fileName.split('.')[0]}`;
    const uri = item.uri;

    const photoProperties = { uri, name, type: 'image/jpg' };

    formdata.append('image', photoProperties);
  });

  formdata.append('latitude', Number(latitude));
  formdata.append('longitude', Number(longitude));
  formdata.append('description', description);
  formdata.append('published_at', published_at);
  formdata.append('resistered_by', resistered_by);

  try {
    const response = await axios.post(
    `/users/${userId}/photos`,
    formdata,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    });

    const { result } = response.data;

    if (result === SUCCESS) {
      openModal();
      dispatch(deleteSelectedPhotos());
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

export const getDistanceFromLatLonInMeter = (lat1,lng1,lat2,lng2) => {
  function deg2rad(deg) {
      return deg * (Math.PI/180);
  }

  var R = 6371;
  var dLat = (lat2-lat1) * (Math.PI/180)
  var dLon = deg2rad(lng2-lng1);
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d * 1000;
}
