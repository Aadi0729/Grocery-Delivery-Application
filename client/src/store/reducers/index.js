import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import itemReducer from './itemReducer'

export default combineReducers({
  auth: authReducer, 
  error: errorReducer,
  item: itemReducer
});