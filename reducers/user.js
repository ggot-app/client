import { USER_LOGIN, USER_LOGOUT } from "../constants/actionTypes";


const initialState = {
  isloggedIn: false,
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
    default:
      return state;
  }
}
