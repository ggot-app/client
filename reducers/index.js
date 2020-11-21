import { combineReducers } from 'redux';

import user from './user';
import modal from './modal';
import selectedPhotos from './selectedPhotos';

export default combineReducers({
  user,
  modal,
  selectedPhotos,
});
