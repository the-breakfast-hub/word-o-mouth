// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux';
import placesReducer from './placesReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  places: placesReducer,
  users: usersReducer,
});

export default rootReducer;
