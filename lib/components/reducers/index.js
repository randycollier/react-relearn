import { combineReducers } from 'redux';
import { humans, humansHasErrored, humansIsLoading } from './humans';

export default combineReducers({
  humans,
  humansHasErrored,
  humansIsLoading
});
