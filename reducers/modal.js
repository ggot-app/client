import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../constants/actionTypes';

const initialState = {
  isModalOpened: false
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isModalOpened: true
      };
    case CLOSE_MODAL:
      return {
        isModalOpened: false
      };
    default:
      return state;
  }
}
