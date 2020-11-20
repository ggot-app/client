import {
  SET_PHOTOS_DATA,
  SET_PHOTOS_FOCUS
} from '../constants/actionTypes';

const initialState = {
  photoData: null,
  focusedNumber: null,
};

export default function photosByLocation(state = initialState, action) {
  switch (action.type) {
    case SET_PHOTOS_DATA:
      return {
        ...state,
        photoData: action.photoData,
      };
    case SET_PHOTOS_FOCUS:
      return {
        ...state,
        focusedNumber: action.focusedNumber,
      };
    default:
      return state;
  }
}
