import { USER_LOGIN, USER_LOGOUT } from '../constants/actionTypes';

const initialState = {
  isloggedIn: false,
  userData: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        isloggedIn: true,
        userData: action.data
      };
    case USER_LOGOUT:
      return {
        isloggedIn: false,
        userData: null
      };
    default:
      return state;
  }
}
