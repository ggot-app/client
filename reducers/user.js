import {
  USER_LOGIN,
  USER_LOGOUT,
  GET_USER_LOCATION
} from '../constants/actionTypes';

const initialState = {
  isloggedIn: false,
  coords: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        isloggedIn: true,
      };
    case USER_LOGOUT:
      return {
        isloggedIn: false,
      };
    case GET_USER_LOCATION:
      return {
        ...state,
        coords: action.coords,
      };
    default:
      return state;
  }
}
