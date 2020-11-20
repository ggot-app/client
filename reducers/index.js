import { combineReducers } from 'redux';

import user from '../reducers/user';
import selectedPhotos from '../reducers/selectedPhotos';
import photosByLocation from '../reducers/photosByLocation';

export default combineReducers({
  user,
  selectedPhotos,
  photosByLocation,
});
