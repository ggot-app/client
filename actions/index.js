import {
  USER_LOGIN,
  USER_LOGOUT,
  OPEN_MODAL,
  CLOSE_MODAL,
  COUNT_PHOTO,
  DECOUNT_PHOTO,
  DELETE_SELECTED_PHOTOS,
  SET_PHOTOS_DATA,
  SET_PHOTOS_FOCUS,
  SET_USER_LOCATION
} from '../constants/actionTypes';

export const getUserLogin = userData => {
  return {
    type: USER_LOGIN,
    data: userData,
  };
};

export const getUserLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const countPhoto = itemList => {
  return {
    type: COUNT_PHOTO,
    itemList,
  };
};

export const deCountPhoto = itemList => {
  return {
    type: DECOUNT_PHOTO,
    itemList,
  };
};

export const deleteSelectedPhotos = () => {
  return {
    type: DELETE_SELECTED_PHOTOS
  };
};

export const setUserLocation = coords => {
  return {
    type: SET_USER_LOCATION,
    coords,
  };
};
