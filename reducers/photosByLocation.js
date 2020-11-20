import {
  SET_PHOTOS_DATA,
  SET_PHOTOS_FOCUS
} from '../constants/actionTypes';

const initialState = {
  photoDataList: null,
  focusedNumber: null,
};

export default function photosByLocation(state = initialState, action) {
  switch (action.type) {
    case SET_PHOTOS_DATA:
      return {
        ...state,
        photoDataList: action.photoDataList,
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
