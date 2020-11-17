import { combineReducers } from 'redux';

import user from '../reducers/user';
import selectedPhotos from '../reducers/selectedPhotos';

export default combineReducers({
  user,
  selectedPhotos,
});
