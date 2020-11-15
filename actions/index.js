import { USER_LOGIN, USER_LOGOUT } from '../constants/actionTypes';

export const getUserLogin = () => {
  return {
    type: USER_LOGIN,
  };
};

export const getUserLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
