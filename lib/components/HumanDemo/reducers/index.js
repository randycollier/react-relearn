import { combineReducers } from 'redux';
import { humans, humansHasErrored, humansIsLoading } from './humans';
import reducerRegistry from 'components/store/reducerRegistry';


export default reducerRegistry.register('humans', combineReducers({
  humans,
  humansHasErrored,
  humansIsLoading
}));