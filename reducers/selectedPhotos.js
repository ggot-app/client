import { COUNT_PHOTO, DECOUNT_PHOTO } from '../constants/actionTypes';

const initialState = {
  selectedList: [],
};

export default function selectedPhotos(state = initialState, action) {
  switch (action.type) {
    case COUNT_PHOTO:
      return {
        selectedList: action.itemList,
      };
    case DECOUNT_PHOTO:
      return {
        selectedList: action.itemList,
      };
    default:
      return state;
  }
}
